'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './TransitionLayout.module.scss';

declare global {
    interface Window {
        __skipEnterAnimation?: boolean;
    }
}

export default function TransitionLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [phase, setPhase] = useState<'idle' | 'exiting' | 'entering'>('idle');

    // 監聽離場動畫
    useEffect(() => {
        const exitHandler = (e: CustomEvent<string>) => {
            setPhase('exiting');
            setTimeout(() => router.push(e.detail), 800);
        };

        document.addEventListener('startExitAnimation', exitHandler as EventListener);
        return () => document.removeEventListener('startExitAnimation', exitHandler as EventListener);
    }, [router]);

    // 監聽進場動畫
    useEffect(() => {
        // 宣告進場動畫的處理函式 enterHandler
        const enterHandler = () => {
            // 檢查全域旗標 __skipEnterAnimation（判斷是不是上一頁/下一頁回來的）
            if (window.__skipEnterAnimation) {
                window.__skipEnterAnimation = false; // 重設旗標，以免影響下一次切換
                setPhase('idle'); // 直接把動畫 phase 設為 idle（不做進場動畫）
                return; // 結束這次進場動畫
            }

            // 如果不是上一頁/下一頁，執行正常進場動畫
            setPhase('entering'); // phase 設為 'entering'，讓 TransitionLayout 執行進場動畫樣式
            setTimeout(() => setPhase('idle'), 200); // 等待 200ms（動畫長度），再把 phase 設回 idle
        };

        // 把 enterHandler 綁定到全域自訂事件 startEnterAnimation
        document.addEventListener('startEnterAnimation', enterHandler);

        // 清理：元件卸載時移除事件監聽器，避免記憶體洩漏
        return () => document.removeEventListener('startEnterAnimation', enterHandler);
    }, []); // 空陣列依賴，代表只在元件掛載與卸載時執行一次

    // 監聽上一頁 / 下一頁
    useEffect(() => {
        // 當 useEffect 第一次執行時（元件掛載），宣告一個函式 handlePopState
        const handlePopState = () => {
            // 我們設定一個全域旗標 __skipEnterAnimation 為 true，
            // 目的是告訴進場動畫（enterHandler）在下一頁面載入時「略過進場動畫」
            window.__skipEnterAnimation = true;
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []); // 空陣列依賴，代表只在元件掛載與卸載時執行一次

    return <div className={`${styles.TransitionLayout} ${styles[phase]}`}>{children}</div>;
}

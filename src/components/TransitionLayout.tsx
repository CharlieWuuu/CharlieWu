'use client'; // 這個 component 要在 client-side 執行

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion'; // Framer Motion 提供的動畫工具

export default function TransitionLayout({ children }: { children: React.ReactNode }) {
    // children，即頁面內容

    const router = useRouter(); // 取得 Next.js 的 router
    const [displayChildren, setDisplayChildren] = useState(children); // 一開始把 children 放進 displayChildren 狀態，之後用來做動畫進場時的畫面顯示
    const [exitHref, setExitHref] = useState<string | null>(null); // exitHref：當離場時，存下一個要跳轉的 href
    const [phase, setPhase] = useState<'idle' | 'exiting' | 'waiting' | 'entering'>('idle'); // phase：表示動畫階段（四種狀態）

    // 離場動畫的處理函式：當觸發「離場」事件，就會：(1) 儲存下一個頁面的網址、(2) 設定 phase 進入「exiting」階段，並觸發離場動畫
    const exitingHandler = (e: CustomEvent<string>) => {
        setExitHref(e.detail); // e.detail 是要跳轉頁面的 href
        setPhase('exiting'); // 設定 phase 進入「exiting」階段
    };

    // 監聽自訂事件，讓外部可以觸發離場動畫
    useEffect(() => {
        document.addEventListener('startExitAnimation', exitingHandler as EventListener);
        return () => document.removeEventListener('startExitAnimation', exitingHandler as EventListener); // 清理事件監聽，這個原理是 React 的 useEffect 的 cleanup function：當此 DOM 元素被移除時，會自動執行 return 內的事件，可用來清理監聽器
    }, []); // 只在 mount 時執行一次

    // 監聽 phase & exitHref 的變化，決定後續動作
    useEffect(() => {
        if (phase === 'exiting') {
            setTimeout(() => setPhase('waiting'), 800); // 等待動畫結束後，進入「waiting」階段
        } else if (phase === 'waiting' && exitHref) {
            router.push(exitHref); // 等待階段，這時候可以安全跳轉到新頁面
            // 稍微等一下（給新頁面機會 mount）再觸發進場動畫
            setTimeout(() => {
                setPhase('entering');
            }, 300); // wait duration
        }
    }, [phase, exitHref, router]);

    return (
        <>
            {/* 遮罩畫面 (waiting)，不要用 <main> */}
            <AnimatePresence>{phase === 'waiting' && <motion.div key="blank" initial={{ opacity: 0 }} style={{ opacity: 0, position: 'relative', pointerEvents: 'none' }} />}</AnimatePresence>

            {/* 出入動畫 */}
            <AnimatePresence mode="wait">
                {(phase === 'idle' || phase === 'exiting' || phase === 'entering') && (
                    <motion.div key={phase} initial={{ opacity: phase === 'entering' ? 0 : 1, y: phase === 'entering' ? 8 : 0 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.8 }}>
                        {displayChildren}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

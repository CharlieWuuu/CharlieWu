'use client';
import { useEffect, useRef } from 'react';
import styles from './page.module.scss';
import H1 from '@/components/h1';

export default function Work() {
    const hasDispatchedRef = useRef(false); // 鎖
    useEffect(() => {
        if (!hasDispatchedRef.current) {
            document.dispatchEvent(new CustomEvent('startEnterAnimation')); // 觸發進場動畫
            hasDispatchedRef.current = true; // 只觸發一次
        }
    }, []);

    return (
        <div className={styles.Work}>
            <div className={styles.Profile}>
                <div className={styles.Text}>
                    <H1>關於我</H1>
                    <p>
                        <span>曾任文字編輯，2022 年開始投入網頁開發，</span>
                        <span>參與過政府網站、互動式地圖、後臺系統等專案。</span>
                    </p>
                    <p>
                        <span>認為網頁與書本一樣，都是資訊的載體，</span>
                        <span>希望透過網頁設計與開發，更深刻地傳遞內容。</span>
                    </p>
                    <div className={styles.Icon}>
                        <a href="https://www.linkedin.com/in/chun-lin-wu-848b60179/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/about/LinkedIn.png" alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/CharlieWuuu" target="_blank" rel="noopener noreferrer">
                            <img src="/images/about/GitHub.png" alt="GitHub" />
                        </a>
                        <a href="https://hackmd.io/@GiuHpxY1Q8K2rsemu8zlWA" target="_blank" rel="noopener noreferrer">
                            <img src="/images/about/HackMD.png" alt="HackMD" />
                        </a>
                    </div>
                </div>
                <img className={styles.Portrait} src="/images/about/portrait.png" alt="個人照" />
            </div>
        </div>
    );
}

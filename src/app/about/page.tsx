'use client';
import { useEffect, useRef } from 'react';
import styles from './page.module.scss';

export default function Work() {
    const hasDispatchedRef = useRef(false); // ✅ 新增鎖
    useEffect(() => {
        if (!hasDispatchedRef.current) {
            document.dispatchEvent(new CustomEvent('startEnterAnimation')); // 觸發進場動畫
            hasDispatchedRef.current = true; // ✅ 鎖上，保證只 dispatch 一次
        }
    }, []);

    return (
        <div className={styles.Work}>
            <h1>關於我</h1>
            <p>前端、資料庫、後端</p>
            <p>平面設計、文字撰寫、編輯（專案管理）</p>
        </div>
    );
}

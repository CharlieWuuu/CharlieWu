'use client';
import { useEffect, useRef } from 'react';
import styles from './page.module.scss';
import MasonryGallery from '@/components/MasonryGallery';

export default function Index() {
    const hasDispatchedRef = useRef(false); // 加入鎖

    useEffect(() => {
        if (!hasDispatchedRef.current) {
            document.dispatchEvent(new CustomEvent('startEnterAnimation'));
            hasDispatchedRef.current = true; // 鎖上，保證只執行一次
        }
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <span className={styles.title}>Website Engineer</span>
                <span className={styles.slogan}>開發 ✕ 設計 ✕ 編輯｜讓資訊更簡潔易解</span>
            </div>
            <MasonryGallery />
        </div>
    );
}

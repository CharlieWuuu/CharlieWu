'use client';

import { useEffect, useRef } from 'react';
import styles from './Index.module.scss';
import MasonryGallery from '@/components/MasonryGallery';

export default function Index({ gallery }: { gallery: any[] }) {
    const hasDispatchedRef = useRef(false);

    useEffect(() => {
        if (!hasDispatchedRef.current) {
            document.dispatchEvent(new CustomEvent('startEnterAnimation'));
            hasDispatchedRef.current = true;
        }
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <span className={styles.title}>Website Engineer</span>
                <span className={styles.slogan}>開發 ✕ 設計 ✕ 編輯｜讓資訊更簡潔易解</span>
            </div>
            <MasonryGallery data={gallery} /> {/* ✅ 不用等 client fetch */}
        </div>
    );
}

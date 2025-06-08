// 'use client';
// import { useEffect, useRef, useState } from 'react';
// import styles from './page.module.scss';
// import MasonryGallery from '@/components/MasonryGallery';

// export default function Index() {
//     const hasDispatchedRef = useRef(false); // 加入鎖

//     useEffect(() => {
//         if (!hasDispatchedRef.current) {
//             document.dispatchEvent(new CustomEvent('startEnterAnimation'));
//             hasDispatchedRef.current = true; // 鎖上，保證只執行一次
//         }
//     }, []);

//     return (
//         <div className={styles.container}>
//             <div className={styles.description}>
//                 <span className={styles.title}>Website Engineer</span>
//                 <span className={styles.slogan}>開發 ✕ 設計 ✕ 編輯｜讓資訊更簡潔易解</span>
//             </div>
//             <MasonryGallery />
//         </div>
//     );
// }

import { fetchGalleryData } from '@/lib/fetchGallery';
import Index from '@/components/Index';

export const metadata = {
    title: 'Charlie Wu',
    description: '作品集首頁',
};

export default async function Page() {
    const gallery = await fetchGalleryData(); // SSR 預抓
    return <Index gallery={gallery} />;
}

'use client';

import Masonry from 'react-masonry-css';
import styles from './MasonryGallery.module.scss';
// import data from '@/data/data.json';
import AnimatedLink from '@/components/AnimatedLink';
// import Image from 'next/image';

export default function MasonryGallery({ data }: { data: any[] }) {
    const breakpointColumnsObj = {
        default: 2,
        640: 1,
    };
    console.log(data[0].tag);
    return (
        <Masonry breakpointCols={breakpointColumnsObj} className={styles.masonryGrid} columnClassName={styles.masonryColumn}>
            {/* 他是執行在 use client 的條件下對吧，代表是在瀏覽器端才執行？那為什麼 SSR 會有？為什麼？ */}
            {data.map((item, index) => (
                <div key={index} className={styles.card}>
                    <AnimatedLink href={`/work/${item.slug}`} className={styles.button}>
                        <div className={styles.imageContainer}>
                            <img
                                src={`/images/work/${item.slug.trim()}.png`}
                                alt={item.name}
                                onError={(e) => {
                                    console.log('第一次錯><');
                                    const img = e.currentTarget;

                                    // 第一次錯誤時改成 .jpg
                                    if (img.src.includes(`${item.slug.trim()}.png`)) {
                                        img.onerror = null; // 關掉當前的錯誤監聽，重新設定
                                        img.src = `/images/work/${item.slug.trim()}.jpg`;

                                        // 重新綁定 onError（第二層 fallback）
                                        img.onerror = () => {
                                            console.log('第二次錯><');
                                            img.onerror = null;
                                            img.src = `/images/work/fallback.png`;
                                        };
                                    }
                                }}
                            />
                        </div>
                        <div className={styles.text}>
                            <div className={styles.titleContainer}>
                                <p className={styles.title}>{item.name}</p>
                                <span className={styles.time}>{item.date}</span>
                            </div>
                            <p>{item.description}</p>
                            <div className={styles.tagContainer}>
                                {item.tag.split(',').map((tag: string, index: number) => (
                                    <p key={index} className={styles.tag}>
                                        {tag}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </AnimatedLink>
                </div>
            ))}
        </Masonry>
    );
}

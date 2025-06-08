'use client';

import Masonry from 'react-masonry-css';
import styles from './MasonryGallery.module.scss';
// import data from '@/data/data.json';
import AnimatedLink from '@/components/AnimatedLink';
import Image from 'next/image';
import FallbackImage from './FallbackImg';

export default function MasonryGallery({ data }: { data: any[] }) {
    const breakpointColumnsObj = {
        default: 3,
        640: 2,
    };
    console.log(data[0].tag);
    return (
        <Masonry breakpointCols={breakpointColumnsObj} className={styles.masonryGrid} columnClassName={styles.masonryColumn}>
            {/* 他是執行在 use client 的條件下對吧，代表是在瀏覽器端才執行？那為什麼 SSR 會有？為什麼？ */}
            {data.map((item, index) => (
                <div key={index} className={styles.card}>
                    <AnimatedLink href={`/work/${item.slug}`} className={styles.button}>
                        <div className={styles.imageContainer}>
                            {/* <Image
                                src={`/images/work/${item.slug}.png`}
                                alt={item.slug}
                                width={1000}
                                height={1000}
                                onError={(e) => {
                                    const img = e.currentTarget as HTMLImageElement;
                                    if (img.src.includes(`${item.slug}.png`)) {
                                        img.onerror = null;
                                        (e.currentTarget as HTMLImageElement).src = `/images/work/${item.slug}.jpg`;
                                        img.onerror = () => {
                                            img.onerror = null;
                                            (e.currentTarget as HTMLImageElement).src = `/images/work/fallback.png`;
                                        };
                                    }
                                }}
                            /> */}
                            {/* <img
                                src={`/images/work/${item.slug}.png`}
                                alt={item.slug}
                                onError={(e) => {
                                    console.log('圖片載入失敗，進入 onError');
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src = '/images/work/fallback.png';
                                }}
                            /> */}
                            <FallbackImage slug={item.slug} />
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

'use client';

import Masonry from 'react-masonry-css';
import styles from './MasonryGallery.module.scss';
import AnimatedLink from '@/components/AnimatedLink';
import FallbackImage from './FallbackImg';
import { GalleryItem } from '@/types/GalleryItem';

export default function MasonryGallery({ data }: { data: GalleryItem[] }) {
    const breakpointColumnsObj = {
        default: 3,
        992: 2,
    };

    return (
        <Masonry breakpointCols={breakpointColumnsObj} className={styles.masonryGrid} columnClassName={styles.masonryColumn}>
            {/* 他是執行在 use client 的條件下對吧，代表是在瀏覽器端才執行？那為什麼 SSR 會有？為什麼？ */}
            {data.map((item, index) => {
                if (item.status === '進行') return null;
                return (
                    <div key={index} className={styles.card}>
                        <AnimatedLink href={`/work/${item.slug}`} className={styles.button}>
                            <div className={styles.imageContainer}>
                                <FallbackImage slug={item.slug} />
                            </div>
                            <div className={styles.text}>
                                <div className={styles.titleContainer}>
                                    <p className={styles.title}>{item.name}</p>
                                    <span className={styles.time}>{item.date.slice(0, 7)}</span>{' '}
                                </div>
                                <div className={styles.tagContainer}>
                                    {item.tag.split(',').map((tag: string, index: number) => (
                                        <p key={index} className={styles.tag}>
                                            {tag}
                                        </p>
                                    ))}
                                </div>
                                <p>{item.description}</p>
                            </div>
                        </AnimatedLink>
                    </div>
                );
            })}
        </Masonry>
    );
}

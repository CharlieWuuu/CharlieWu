'use client';

import Masonry from 'react-masonry-css';
import styles from './MasonryGallery.module.scss';
import data from '@/data/data.json';
// import Link from 'next/link';
import AnimatedLink from '@/components/AnimatedLink';
import Image from 'next/image';

export default function MasonryGallery() {
    const breakpointColumnsObj = {
        default: 2,
        640: 1,
    };

    return (
        <Masonry breakpointCols={breakpointColumnsObj} className={styles.masonryGrid} columnClassName={styles.masonryColumn}>
            {/* 他是執行在 use client 的條件下對吧，代表是在瀏覽器端才執行？那為什麼 SSR 會有？為什麼？ */}
            {data.map((item, index) => (
                <div key={index} className={styles.card}>
                    <AnimatedLink href={`/work/${item.slug}`} className={styles.button}>
                        <div className={styles.imageContainer}>
                            <Image src={item.pic} alt={item.name} />
                        </div>
                        <div className={styles.text}>
                            <div className={styles.titleContainer}>
                                <p className={styles.title}>{item.name}</p>
                                <span className={styles.time}>{item.date}</span>
                            </div>
                            <p>{item.description}</p>
                            <div className={styles.tagContainer}>
                                {item.tag.map((tag, index) => (
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

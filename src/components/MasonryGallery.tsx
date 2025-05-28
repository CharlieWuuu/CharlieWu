'use client';

import Masonry from 'react-masonry-css';
import styles from './MasonryGallery.module.scss';
import data from '../data/data.json';
import Link from 'next/link';

export default function MasonryGallery() {
    const breakpointColumnsObj = {
        default: 3,
        1024: 2,
        640: 1,
    };

    return (
        <Masonry breakpointCols={breakpointColumnsObj} className={styles.masonryGrid} columnClassName={styles.masonryColumn}>
            {data.map((item, index) => (
                <div key={index} className={styles.card}>
                    <Link href={`/work/${item.name}`} className={styles.button}>
                        <img src={item.pic} alt={item.name} />
                        <p>{item.name}</p>
                    </Link>
                </div>
            ))}
        </Masonry>
    );
}

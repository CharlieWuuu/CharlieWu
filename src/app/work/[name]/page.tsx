'use client';

import { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import data from '@/data/data.json';
import styles from './page.module.scss';

export default function Work() {
    const hasDispatchedRef = useRef(false); // 只 dispatch 一次
    const params = useParams();
    const thisData = data.find((d) => d.slug === params.name);

    useEffect(() => {
        if (!hasDispatchedRef.current) {
            document.dispatchEvent(new CustomEvent('startEnterAnimation'));
            hasDispatchedRef.current = true; // 鎖上
        }
    }, []);

    return (
        <div className={styles.Work}>
            <div className={styles.titleContainer}>
                <h1>{thisData?.name}</h1>
                <p>{thisData?.date}</p>
                <div className={styles.tagContainer}>
                    {thisData?.tag.map((tag, index) => (
                        <p key={index} className={styles.tag}>
                            {tag}
                        </p>
                    ))}
                </div>
            </div>
            <div>
                作品連結：
                <a href={thisData?.url} target="_blank" rel="noopener noreferrer">
                    網站
                </a>
                {thisData?.figmaUrl && (
                    <>
                        、
                        <a href={thisData?.figmaUrl} target="_blank" rel="noopener noreferrer">
                            Figma
                        </a>
                    </>
                )}
            </div>
            <div className={styles.article} dangerouslySetInnerHTML={{ __html: thisData?.article ?? '' }} />
        </div>
    );
}

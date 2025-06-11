'use client';

import { useEffect, useRef } from 'react';
import styles from './work.module.scss';
import { useMarkdownArticle } from '@/hooks/useMarkdownArticle';
import { GalleryItem } from '@/types/GalleryItem';
import H1 from '@/components/h1';
import Tag from '@/components/tag';

export default function Work({ thisData }: { thisData: GalleryItem }) {
    const hasDispatchedRef = useRef(false);
    const contentHtml = useMarkdownArticle(thisData?.slug);

    useEffect(() => {
        if (!hasDispatchedRef.current) {
            document.dispatchEvent(new CustomEvent('startEnterAnimation'));
            hasDispatchedRef.current = true;
        }
    }, []);

    const links = [
        { label: '網站', url: thisData?.url },
        { label: '網站（備份）', url: thisData?.url_bk },
        { label: 'GitHub', url: thisData?.url_code },
        { label: 'Figma', url: thisData?.url_design },
        { label: 'FigJam', url: thisData?.url_flow },
        { label: 'HackMD', url: thisData?.url_blog },
        { label: '影片', url: thisData?.url_video },
        { label: '投影片', url: thisData?.url_slide },
    ].filter((link) => !!link.url); // 去掉空的

    return (
        <div className={styles.Work}>
            <div className={styles.titleContainer}>
                <H1>{thisData?.name}</H1>
                <p>{thisData?.date.slice(0, 7)}</p>
            </div>
            <Tag tag={thisData?.tag} />
            {links.length > 0 && (
                <div>
                    作品連結：
                    {links.map((link, index) => (
                        <span key={index}>
                            {index > 0 && '、'}
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.label}
                            </a>
                        </span>
                    ))}
                </div>
            )}
            <img src={`/images/work/${thisData?.slug.trim()}.png`} alt={thisData?.slug} />
            <div className={styles.article} dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
    );
}

'use client';

import { useEffect, useRef } from 'react';
import styles from './work.module.scss';
import { useMarkdownArticle } from '@/hooks/useMarkdownArticle';
import { GalleryItem } from '@/types/GalleryItem';
import H1 from '@/components/h1';

export default function Work({ thisData }: { thisData: GalleryItem }) {
    const hasDispatchedRef = useRef(false);
    const contentHtml = useMarkdownArticle(thisData?.slug);

    useEffect(() => {
        if (!hasDispatchedRef.current) {
            document.dispatchEvent(new CustomEvent('startEnterAnimation'));
            hasDispatchedRef.current = true;
        }
    }, []);

    return (
        <div className={styles.Work}>
            <div className={styles.titleContainer}>
                <H1>{thisData?.name}</H1>
                <p>{thisData?.date}</p>
            </div>
            <div className={styles.tagContainer}>
                {thisData?.tag.split(',').map((tag, index) => (
                    <p key={index} className={styles.tag}>
                        {tag}
                    </p>
                ))}
            </div>
            <div>
                作品連結：
                <a href={thisData?.url} target="_blank" rel="noopener noreferrer">
                    網站
                </a>
                {thisData?.url_bk && (
                    <>
                        、
                        <a href={thisData.url_bk} target="_blank" rel="noopener noreferrer">
                            網站（備份）
                        </a>
                    </>
                )}
                {thisData?.url_code && (
                    <>
                        、
                        <a href={thisData.url_code} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </>
                )}
                {thisData?.url_design && (
                    <>
                        、
                        <a href={thisData.url_design} target="_blank" rel="noopener noreferrer">
                            Figma
                        </a>
                    </>
                )}
                {thisData?.url_flow && (
                    <>
                        、
                        <a href={thisData.url_flow} target="_blank" rel="noopener noreferrer">
                            FigJam
                        </a>
                    </>
                )}
                {thisData?.url_blog && (
                    <>
                        、
                        <a href={thisData.url_blog} target="_blank" rel="noopener noreferrer">
                            HackMD
                        </a>
                    </>
                )}
                {thisData?.url_video && (
                    <>
                        、
                        <a href={thisData.url_video} target="_blank" rel="noopener noreferrer">
                            影片
                        </a>
                    </>
                )}
                {thisData?.url_slide && (
                    <>
                        、
                        <a href={thisData.url_slide} target="_blank" rel="noopener noreferrer">
                            投影片
                        </a>
                    </>
                )}
                {thisData?.url_inspire && (
                    <>
                        、
                        <a href={thisData.url_inspire} target="_blank" rel="noopener noreferrer">
                            Figma
                        </a>
                    </>
                )}
            </div>
            <img src={`/images/work/${thisData?.slug.trim()}.png`} alt={thisData?.slug} />
            <div className={styles.article} dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
    );
}

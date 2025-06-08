'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

type FallbackImageProps = {
    slug: string;
    alt?: string;
    className?: string;
};

export default function FallbackImage({ slug }: FallbackImageProps) {
    const [src, setSrc] = useState('');

    useEffect(() => {
        const tryLoad = async () => {
            const png = `/images/work/${slug.trim()}.png`;
            const jpg = `/images/work/${slug.trim()}.jpg`;
            const fallback = `/images/work/fallback.png`;

            const testImage = (path: string): Promise<boolean> =>
                new Promise((resolve) => {
                    const img = new window.Image();
                    img.src = path;
                    img.onload = () => resolve(true);
                    img.onerror = () => resolve(false);
                });

            if (await testImage(png)) {
                setSrc(png);
            } else if (await testImage(jpg)) {
                setSrc(jpg);
            } else {
                setSrc(fallback);
            }
        };

        tryLoad();
    }, [slug]);

    return <Image src={src} alt={slug} width={1000} height={1000} priority />;
}

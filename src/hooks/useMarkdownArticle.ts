import { useEffect, useState } from 'react';
import { marked } from 'marked';

export function useMarkdownArticle(slug: string) {
    const [contentHtml, setContentHtml] = useState('');

    useEffect(() => {
        async function fetchMd() {
            const res = await fetch(`/article/${slug}.md`);
            const text = await res.text();

            const html = await marked.parse(text); // ✅ 重點在這一行
            setContentHtml(html);
        }

        fetchMd();
    }, [slug]);

    return contentHtml;
}

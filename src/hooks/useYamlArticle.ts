// hooks/useYamlArticle.ts
import { useState, useEffect } from 'react';
import yaml from 'js-yaml';

export type ArticleBlock = { type: 'text'; content: string } | { type: 'image'; src: string; alt: string; width?: string; caption?: string };

export type Article = {
    sections: ArticleBlock[];
};

export function useYamlArticle(slug: string) {
    const [article, setArticle] = useState<Article | null>(null);

    useEffect(() => {
        fetch(`/article/${slug}.yml`)
            .then((res) => res.text())
            .then((yml) => {
                const parsed = yaml.load(yml) as Article;
                setArticle(parsed);
            })
            .catch((err) => {
                console.warn('讀取 YML 失敗：', err);
            });
    }, [slug]);

    return article;
}

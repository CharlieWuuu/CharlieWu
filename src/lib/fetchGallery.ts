import { GalleryItem } from '@/types/GalleryItem';

let cache: GalleryItem[] | null = null;

export async function fetchGalleryData(): Promise<GalleryItem[]> {
    if (cache) return cache;

    const res = await fetch('https://opensheet.elk.sh/1vyrvbEI1deSKKx8ZgGohyBefXLI0KeZPmuVL1j3JnZc/Gallery');
    const json: GalleryItem[] = await res.json();
    cache = json;
    return json;
}

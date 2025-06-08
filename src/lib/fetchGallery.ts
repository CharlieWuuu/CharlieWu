let cache: any = null;

export async function fetchGalleryData() {
    if (cache) return cache;
    const res = await fetch('https://opensheet.elk.sh/1vyrvbEI1deSKKx8ZgGohyBefXLI0KeZPmuVL1j3JnZc/Gallery');
    const json = await res.json();
    cache = json;
    return json;
}

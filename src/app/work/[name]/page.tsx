import { fetchGalleryData } from '@/lib/fetchGallery';
import Work from './work';
import { GalleryItem } from '@/types/GalleryItem';

export async function generateStaticParams() {
    const data: GalleryItem[] = await fetchGalleryData();
    return data.map((item) => ({ name: item.slug }));
}

export default async function Page({ params }: { params: { name: string } }) {
    const data = await fetchGalleryData();

    const thisData = data.find((d: GalleryItem) => d.slug.trim() === params.name);

    return <Work thisData={thisData as GalleryItem} />;
}

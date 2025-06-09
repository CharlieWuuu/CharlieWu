import { fetchGalleryData } from '@/lib/fetchGallery';
import Work from './work';

export async function generateStaticParams() {
    const data = await fetchGalleryData();
    return data.map((item) => ({ name: item.slug }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page({ params }: any) {
    const data = await fetchGalleryData();
    const thisData = data.find((d) => d.slug === params.name);

    if (!thisData) return <div>404</div>;

    return <Work thisData={thisData} />;
}

import { fetchGalleryData } from '@/lib/fetchGallery';
import Index from '@/components/Index';

export const metadata = {
    title: 'Charlie Wu',
    description: '作品集首頁',
};

export default async function Page() {
    const gallery = await fetchGalleryData(); // SSR 預抓
    return <Index gallery={gallery} />;
}

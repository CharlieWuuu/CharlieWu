import data from '@/data/data.json';
import styles from './page.module.scss';

export async function generateStaticParams() {
    return data.map((item) => ({
        name: item.slug,
    }));
}

export default function Work({ params }: { params: { name: string } }) {
    const decodedName = decodeURIComponent(params.name);
    const thisData = data.find((d) => d.slug === decodedName);

    return (
        <div className={styles.Work}>
            <div className={styles.titleContainer}>
                <h1>{thisData?.name}</h1>
                <p>{thisData?.date}</p>
            </div>
            <div className={styles.tagContainer}>
                {thisData?.tag.map((tag, index) => (
                    <p key={index} className={styles.tag}>
                        {tag}
                    </p>
                ))}
            </div>
            <p className={styles.article}>{thisData?.article}</p>
        </div>
    );
}

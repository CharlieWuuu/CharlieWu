import data from '@/data/data.json';
import styles from './page.module.scss';

type tParams = Promise<{ name: string }>;

export default async function Work({ params }: { params: tParams }) {
    const param = await params;
    const thisData = data.find((d) => d.slug === param.name);

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

import styles from './tag.module.scss';

type Props = {
    tag: string;
};

export default function Tag({ tag }: Props) {
    return (
        <div className={styles.tagContainer}>
            {tag.split(',').map((tag: string, index: number) => (
                <span key={index} className={styles.tag}>
                    {tag}
                </span>
            ))}
        </div>
    );
}

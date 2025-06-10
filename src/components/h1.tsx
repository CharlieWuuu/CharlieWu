import styles from './h1.module.scss';

export default function H1({ children }: { children: React.ReactNode }) {
    return <h1 className={styles.H1}>{children}</h1>;
}

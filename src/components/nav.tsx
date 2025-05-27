import Link from 'next/link';
import styles from './nav.module.scss';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.Logo}>
                Charlie Wu
            </Link>
            <div>
                <hr />
                <Link href="/work">Work</Link>
                <Link href="/about">About</Link>
            </div>
        </nav>
    );
}

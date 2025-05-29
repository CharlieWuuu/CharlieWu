import Link from 'next/link';
import styles from './nav.module.scss';
import Logo from '../images/Logo.svg';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.Logo}>
                <img src={Logo.src} alt="Charlie Wu" />
            </Link>
            <div>
                <hr />
                {/* <Link href="/work">Work</Link> */}
                <Link href="/about">About</Link>
            </div>
        </nav>
    );
}

import AnimatedLink from '@/components/AnimatedLink';
import styles from './nav.module.scss';
import Logo from '../images/Logo.svg';
import Image from 'next/image';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div>
                <AnimatedLink href="/">
                    <Image src={Logo.src} alt="Charlie Wu" width={1000} height={1000} />
                </AnimatedLink>
                <div>
                    <hr />
                    <AnimatedLink href="/about">About</AnimatedLink>
                </div>
            </div>
        </nav>
    );
}

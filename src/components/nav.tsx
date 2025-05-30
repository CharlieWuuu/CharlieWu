import AnimatedLink from '@/components/AnimatedLink';
import styles from './nav.module.scss';
import Logo from '../images/Logo.svg';
import Image from 'next/image';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <AnimatedLink href="/">
                <Image src={Logo.src} alt="Charlie Wu" />
            </AnimatedLink>
            <div>
                <hr />
                {/* <AnimatedLink href="/work">Work</AnimatedLink> */}
                <AnimatedLink href="/about">About</AnimatedLink>
                {/* <AnimatedLink href="/test">Test</AnimatedLink> */}
            </div>
        </nav>
    );
}

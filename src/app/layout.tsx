import './globals.css';
import type { Metadata } from 'next';
import styles from './layout.module.scss';
import Nav from '../components/nav';
import TransitionLayout from '@/components/TransitionLayout';

export const metadata: Metadata = {
    title: 'Charlie Wu',
    description: 'Personal website of Charlie Wu',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={styles.html} lang="zh">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Noto+Serif+TC:wght@200..900&display=swap" rel="stylesheet" />
            </head>
            <body className={styles.body}>
                <div id={styles.overlay}></div>
                <Nav />
                <TransitionLayout>
                    <main>{children}</main>
                    <footer>
                        <p>&copy; {new Date().getFullYear()} Charlie Wu</p>
                    </footer>
                </TransitionLayout>
            </body>
        </html>
    );
}

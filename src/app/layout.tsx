// src/app/layout.tsx
import './globals.css';
// import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './layout.module.scss';
import Nav from '../components/nav';

export const metadata: Metadata = {
    title: 'Charlie Wu',
    description: 'Personal website of Charlie Wu',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={styles.html} lang="zh">
            <body className={styles.body}>
                <Nav />
                <main>{children}</main>
                <footer>
                    <p>&copy; {new Date().getFullYear()} Charlie Wu</p>
                </footer>
            </body>
        </html>
    );
}

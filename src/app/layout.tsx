// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import styles from './layout.module.scss';
import Nav from '../components/nav';
// import AnimatedMain from '@/components/AnimatedMain';
import TransitionLayout from '@/components/TransitionLayout';

export const metadata: Metadata = {
    title: 'Charlie Wu',
    description: 'Personal website of Charlie Wu',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={styles.html} lang="zh">
            <body className={styles.body}>
                <Nav />
                <main>
                    <TransitionLayout>{children}</TransitionLayout>
                </main>
                <footer>
                    <p>&copy; {new Date().getFullYear()} Charlie Wu</p>
                </footer>
            </body>
        </html>
    );
}

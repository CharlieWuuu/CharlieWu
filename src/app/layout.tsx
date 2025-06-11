import './globals.css';
import type { Metadata } from 'next';
import styles from './layout.module.scss';
import Nav from '../components/nav';
import TransitionLayout from '@/components/TransitionLayout';

export const metadata: Metadata = {
    title: 'Charlie Wu 作品集網站',
    description: '網頁工程師｜讓資訊更簡潔易解',
    openGraph: {
        title: 'Charlie Wu 作品集網站',
        description: '網頁工程師｜讓資訊更簡潔易解',
        images: [
            {
                url: 'https://charlie-wu.vercel.app/images/ogImage.png',
                width: 1200,
                height: 630,
                alt: 'Charlie Wu 作品集網站',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Charlie Wu 作品集網站',
        description: '網頁工程師｜讓資訊更簡潔易解',
        images: ['https://charlie-wu.vercel.app/images/ogImage.png'],
    },
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

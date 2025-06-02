'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './TransitionLayout.module.scss';

export default function TransitionLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [phase, setPhase] = useState<'idle' | 'exiting' | 'entering'>('idle');

    // 監聽離場動畫
    useEffect(() => {
        const exitHandler = (e: CustomEvent<string>) => {
            setPhase('exiting');
            setTimeout(() => router.push(e.detail), 1000);
        };

        document.addEventListener('startExitAnimation', exitHandler as EventListener);
        return () => document.removeEventListener('startExitAnimation', exitHandler as EventListener);
    }, []);

    useEffect(() => {
        const enterHandler = () => {
            setPhase('entering');
            setTimeout(() => setPhase('idle'), 200);
        };

        document.addEventListener('startEnterAnimation', enterHandler);
        return () => document.removeEventListener('startEnterAnimation', enterHandler);
    }, []);
    return <div className={`${styles.TransitionLayout} ${styles[phase]}`}>{children}</div>;
}

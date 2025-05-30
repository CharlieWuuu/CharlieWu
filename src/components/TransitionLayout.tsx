'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

export default function TransitionLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [displayChildren, setDisplayChildren] = useState(children);
    const [exitHref, setExitHref] = useState<string | null>(null);
    const [phase, setPhase] = useState<'idle' | 'exiting' | 'waiting' | 'entering'>('idle');

    useEffect(() => {
        if (phase === 'entering') {
            setDisplayChildren(children);
        }
    }, [children, phase]);

    useEffect(() => {
        const handler = (e: Event) => {
            const customEvent = e as CustomEvent<string>;
            setExitHref(customEvent.detail);
            setPhase('exiting');
        };
        document.addEventListener('startExitAnimation', handler as EventListener);
        return () => document.removeEventListener('startExitAnimation', handler as EventListener);
    }, []);

    useEffect(() => {
        if (phase === 'exiting') {
            setTimeout(() => setPhase('waiting'), 1000); // exit duration
        } else if (phase === 'waiting' && exitHref) {
            router.push(exitHref);
            setTimeout(() => {
                setPhase('entering');
            }, 500); // wait duration
        }
    }, [phase, exitHref, router]);

    return (
        <>
            {/* 遮罩畫面 (waiting)，不要用 <main> */}
            <AnimatePresence>
                {phase === 'waiting' && (
                    <motion.div
                        key="blank"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            opacity: 0,
                            position: 'absolute',
                            inset: 0,
                            pointerEvents: 'none',
                        }}
                    />
                )}
            </AnimatePresence>

            {/* 出入動畫 */}
            <AnimatePresence mode="wait">
                {(phase === 'idle' || phase === 'exiting' || phase === 'entering') && (
                    <motion.div
                        key={phase}
                        initial={{
                            opacity: phase === 'entering' ? 0 : 1,
                            y: phase === 'entering' ? 8 : 0,
                        }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 1 }}>
                        {displayChildren}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

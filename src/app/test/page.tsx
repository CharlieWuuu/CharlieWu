'use client';

import { useState } from 'react';

export default function CounterPage() {
    const [count, setCount] = useState(0);
    const [isPending, setIsPending] = useState(false);

    const handleClick = () => {
        setIsPending(true);
        setTimeout(() => {
            setCount((prev) => prev + 1);
            setIsPending(false);
        }, 1000); // 延遲 1 秒
    };

    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>🎬 延遲動畫計數器</h1>
            <p style={{ fontSize: '2rem', opacity: isPending ? 0.5 : 1, transition: 'opacity 0.3s' }}>Count: {count}</p>
            <button onClick={handleClick} disabled={isPending}>
                {isPending ? '⏳ 等一下...' : '點我 +1'}
            </button>
        </div>
    );
}

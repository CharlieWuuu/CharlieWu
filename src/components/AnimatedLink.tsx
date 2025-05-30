'use client';

export default function AnimatedLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        document.dispatchEvent(new CustomEvent('startExitAnimation', { detail: href }));
    };

    return (
        <a href={href} onClick={handleClick} className={className}>
            {children}
        </a>
    );
}

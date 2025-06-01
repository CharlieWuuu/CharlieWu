'use client';

export default function AnimatedLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
    const handleClick = (e: React.MouseEvent) => {
        // 標準化 href 為路徑
        let targetPath: string;
        try {
            targetPath = new URL(href, window.location.origin).pathname;
        } catch {
            targetPath = href; // 如果 href 無效，假設它已是路徑
        }

        // 獲取當前頁面路徑
        const currentPath = window.location.pathname;

        // 如果目標路徑與當前頁面相同，阻止任何動作
        if (targetPath === currentPath) {
            e.preventDefault();
            return;
        }

        // 觸發跳轉動畫
        e.preventDefault();
        document.dispatchEvent(new CustomEvent('startExitAnimation', { detail: href }));
    };

    return (
        <a href={href} onClick={handleClick} className={className}>
            {children}
        </a>
    );
}

'use client';

export default function AnimatedLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
    // 攔截 <a> 的點擊事件，觸發自訂的離場動畫和跳轉行為
    const handleClick = (e: React.MouseEvent) => {
        let targetPath: string;
        try {
            targetPath = new URL(href, window.location.origin).pathname; // 標準化 href 為路徑
        } catch {
            targetPath = href; // 如果 href 無效，假設它已是路徑
        }

        e.preventDefault(); // 阻止默認行為，避免直接跳轉

        const currentPath = window.location.pathname; // 獲取當前頁面路徑
        if (targetPath !== currentPath) {
            document.dispatchEvent(new CustomEvent('startExitAnimation', { detail: href })); // 如果目標路徑與當前頁面相同，使用自訂事件來觸發離場動畫
        }
    };

    return (
        <a href={href} onClick={handleClick} className={className}>
            {children}
        </a>
    );
}

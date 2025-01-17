import { ReactNode, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
    className: string;
    children: ReactNode;
}

const ScrollToTop = ({ className, children }: ScrollToTopProps) => {
    const { pathname } = useLocation();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scroll(0, 0);
        }
    }, [pathname]);

    return (
        <div ref={scrollContainerRef} className={className}>
            {children}
        </div>
    );
};

export default ScrollToTop;

import { HTMLMotionProps, motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    duration?: number;
    delay?: number;
    element?: keyof typeof motion;
}

const FadeIn = ({ children, duration = 0, delay = 0, element = 'div' }: FadeInProps) => {
    const Motion = motion[element] as React.ElementType<HTMLMotionProps<any>>;

    return (
        <Motion initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration, delay }}>
            {children}
        </Motion>
    );
};

export default FadeIn;

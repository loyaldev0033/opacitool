import { HTMLMotionProps, motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    duration?: number;
    element?: keyof typeof motion;
}

const ScaleIn = ({ children, duration = 0, element = 'div' }: FadeInProps) => {
    const Motion = motion[element] as React.ElementType<HTMLMotionProps<any>>;
    return (
        <Motion
            className='bg-gray-800 rounded-lg shadow-lg p-6 max-w-xl w-full'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration }}
        >
            {children}
        </Motion>
    );
};

export default ScaleIn;

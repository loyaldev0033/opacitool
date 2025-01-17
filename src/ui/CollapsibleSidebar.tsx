import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CollapsibleSidebarProps {
    children: ReactNode;
    isSidebarOpen: boolean;
}

const CollapsibleSidebar = ({ children, isSidebarOpen }: CollapsibleSidebarProps) => {
    return (
        <motion.div
            className={`relative z-20 transition-all duration-300 ease-in-out flex-shrink-0 ${
                isSidebarOpen ? 'w-64' : 'w-20'
            }`}
            animate={{
                width: isSidebarOpen ? 350 : 80,
            }}
        >
            {children}
        </motion.div>
    );
};

export default CollapsibleSidebar;

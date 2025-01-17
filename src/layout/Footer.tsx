import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HEADER_TITLE } from '@constants';

const Footer = () => {
    const [title, setTitle] = useState('');
    const { pathname } = useLocation();
    useEffect(() => {
        setTitle(HEADER_TITLE[pathname]);
    }, [pathname]);
    return (
        <footer className="bg-[#161920] text-white shadow-lg">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                {/* Left Section */}
                <div className="flex items-center space-x-2">
                    <div className="flex">
                        <span className="block bg-cyan-500 h-6 w-3 rotate-45"></span>
                        <span className="block bg-cyan-500 h-6 w-3 rotate-45 -ml-2"></span>
                    </div>
                    <span className="text-lg font-large">Lecture Home</span>
                </div>
                {/* Right Section */}
                <div className="flex items-center space-x-2">
                    <span className="text-lg font-large">Module 1.2 Visible Emissions & Opacity</span>
                    <div className="flex">
                        <span className="block bg-cyan-500 h-6 w-3 rotate-45"></span>
                        <span className="block bg-cyan-500 h-6 w-3 rotate-180 -ml-2"></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

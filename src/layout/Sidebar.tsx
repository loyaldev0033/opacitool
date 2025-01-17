import { useEffect, useState } from 'react';
// import { Menu } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import logoImage from '@assets/logo-black.png';
import leftArrowImage from '@assets/left-arrow.png';
import { CollapsibleSidebar } from '@ui';
import { SIDEBAR_ITEMS } from '@constants';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useEffect(() => {
        setIsSidebarOpen(!isMobile);
    }, [isMobile]);

    const renderNavigationLinks = () => {
        return (
            <nav className="mt-1">
                {SIDEBAR_ITEMS.map((item, index) => (
                    <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                        `flex items-center p-1 mb-1 text-sm rounded-lg transition-colors duration-300 border-b-2 border-b-white ${
                            isActive
                                ? 'bg-teal-500 text-white'
                                : 'hover:bg-teal-500 hover:text-white'
                        }`
                    }
                    aria-label={`Navigate to ${item.href}`}
                >
                    {/* Numbering the items */}
                    <div className="flex items-center justify-center w-10 h-10 min-w-10 rounded-full bg-[#48c7ce]">
                        <span className="text-black font-bold">{index + 1}</span>
                    </div>
                    <span className="ml-4 text-white text-[1.3vw] font-light">{item.name}</span>
                </NavLink>
                ))}
            </nav>
        );
    };

    return (
        <CollapsibleSidebar isSidebarOpen={isSidebarOpen}>
            <div className="h-full bg-[#161920] overflow-y-auto bg-opacity-80 backdrop-blur-md px-4 py-12 flex flex-col border-r-2 border-r-white">
                <div className="flex justify-center px-3 mb-3">
                    <img src={logoImage} alt="Logo" className="w-124 h-35" />
                </div>
                <div className="flex items-center space-x-2 pb-3 rounded-lg border-b-2 border-b-white">
                    <div className="w-full sm:w-[10px] md:w-[30px] lg:w-[60px]">
                        <img
                            src={leftArrowImage}
                            alt="Lecture Home"
                            className="w-full h-14 object-contain"
                        />
                    </div>
                    <span className="text-[1.5vw] font-light">Lecture Home</span>
                </div>
                {renderNavigationLinks()}
            </div>
        </CollapsibleSidebar>
    );
};

export default Sidebar;
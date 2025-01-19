import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import logoImage from '@assets/logo.png';
import leftArrowImage from '@assets/left-arrow.png';
import { CollapsibleSidebar } from '@ui';
import { SIDEBAR_ITEMS } from '@constants';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeItem, setActiveItem] = useState<string | null>(null); 
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [activeSubItem, setActiveSubItem] = useState<string | null>(null); 

    useEffect(() => {
        setIsSidebarOpen(!isMobile);
    }, [isMobile]);

    const handleNavLinkClick = (item: string) => {
        if (activeItem === item) {
            setActiveItem(null);
        } else {
            setActiveItem(item);
        }
    };

    const handleSubNavLinkClick = (item: string) => {
        if (activeSubItem === item) {
            setActiveSubItem(null);
        } else {
            setActiveSubItem(item);
        }
    };

    const renderNavigationLinks = () => {
        return (
            <nav className="mt-1">
                {SIDEBAR_ITEMS.map((item, index) => (
                    <div key={item.href} className='border-b-2 border-b-white'>
                        <NavLink
                            to={item.href}
                            onClick={() => handleNavLinkClick(item.name)}
                            className="flex items-center p-1 mb-1 text-sm rounded-lg transition-colors duration-50 hover:bg-teal-500"
                            aria-label={`Navigate to ${item.href}`}
                        >
                            <div className="flex items-center justify-center w-10 h-10 min-w-10 rounded-full bg-[#48c7ce]">
                                <span className="text-black font-bold">{index + 1}</span>
                            </div>
                            <span className="ml-4 text-white text-[1.3vw] font-light">{item.name}</span>
                        </NavLink>
                        {activeItem === item.name && item.submenu && (
                            <div className="ml-10 mt-2 space-y-2">
                                {item.submenu.map((subItem) => (
                                    <NavLink
                                        key={subItem.href}
                                        to={subItem.href}
                                        onClick={() => handleSubNavLinkClick(subItem.name)}                                        
                                        className={`flex items-center p-1 mb-1 text-sm rounded-lg transition-colors duration-50 hover:bg-teal-500 ${activeSubItem == subItem.name ? 'text-blue-500' : 'text-white'}`}
                                        aria-label={`Navigate to ${subItem.href}`}
                                    >
                                        <span className="ml-4">{subItem.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        );
    };

    return (
        <CollapsibleSidebar isSidebarOpen={isSidebarOpen}>
            <div className="h-full scrollbar-hide bg-[#161920] overflow-y-auto bg-opacity-80 backdrop-blur-md px-4 py-12 flex flex-col border-r-2 border-r-white">
                <div className="flex justify-center px-3 mb-3 cursor-pointer">
                    <img src={logoImage} alt="Logo" className="w-124 h-35" />
                </div>
                <div className="flex items-center space-x-2 pb-3 border-b-2 border-b-white cursor-pointer">
                    <div className="w-[4vw]">
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
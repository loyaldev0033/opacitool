import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HEADER_TITLE } from '@constants';
import bookmarkImage from '@assets/bookmark.png';
import questionImage from '@assets/question2.png';

const Header = () => {
    const [title, setTitle] = useState('');
    const { pathname } = useLocation();

    useEffect(() => {
        setTitle(HEADER_TITLE[pathname]);
    }, [pathname]);

    return (
        <header className="bg-[#161920] text-white shadow-md border-b border-gray-600">
            <div className="max-w-7xl mx-auto px-12 py-4 flex justify-between items-center">
                <div>
                    <h1 className="text-[2.3vw] font-bold">{title}</h1>
                    <p className="text-[2.3vw] font-bold">About this Course</p>
                </div>
                <div>
                    <div className="flex items-center space-x-2">
                        <div className="w-full sm:w-[20px] md:w-[40px] lg:w-[60px]">
                            <img
                                src={questionImage}
                                alt="Support"
                                className="w-full h-12 object-contain"
                            />
                        </div>

                        <span className="text-[1.5vw] font-light">Support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-full sm:w-[20px] md:w-[40px] lg:w-[60px]">
                          <img
                                src={bookmarkImage}
                                alt="Bookmark"
                                className="w-full h-12 object-contain"
                            />
                        </div>
                        <span className="text-[1.5vw] font-light">Bookmark</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
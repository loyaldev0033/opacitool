import { Main, Header, Sidebar, Footer } from '@layout';
import { ScrollToTop } from '@ui';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
            {/* BG */}
            <div className='fixed inset-0 z-0'>
                <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
                <div className='absolute inset-0 backdrop-blur-3xl' />
            </div>
            <Sidebar />
            <ScrollToTop className='flex-1 z-20 overflow-auto relative bg-[#e4eaed] scroll-smooth'>
                <Header />
                <Main>
                    <Outlet />
                </Main>
                <Footer />
            </ScrollToTop>
        </div>
    );
};

export default Layout;

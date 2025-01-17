import { ReactNode } from 'react';

interface MainProps {
    children: ReactNode;
}

const Main = ({ children }: MainProps) => {
    return <main className='max-w-7xl mx-auto mx-0' style={{margin: "0px"}}>{children}</main>;
};

export default Main;

import { SlideUp } from '@ui';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface SettingsSection {
    icon: LucideIcon;
    title: string;
    children: ReactNode;
    danger?: boolean;
}

const SettingsSection = ({ icon: Icon, title, children, danger }: SettingsSection) => {
    return (
        <SlideUp
            className={`${
                danger ? 'bg-red-900' : 'bg-gray-800'
            } bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl border ${
                danger ? 'border-red-700' : 'border-gray-700'
            } p-6 mb-4 max-w-4xl mx-auto`}
            initial={25}
            duration={0.6}
        >
            <>
                <div className='flex items-center mb-4'>
                    <Icon className={`${danger ? 'text-red-500' : 'text-indigo-500'} mr-2`} size='22' />
                    <h2 className='text-xl tracking-wide font-semibold text-gray-100'>{title}</h2>
                </div>

                {children}
            </>
        </SlideUp>
    );
};

export default SettingsSection;

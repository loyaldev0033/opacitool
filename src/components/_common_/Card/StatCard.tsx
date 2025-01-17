import { ArrowDownRight, ArrowUpRight, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatCardProps {
    name: string;
    icon: LucideIcon;
    value: string;
    color?: string;
    change?: number;
}

const StatCard = ({ name, icon: Icon, value, color, change }: StatCardProps) => {
    return (
        <motion.div
            className={`min-w-[200px] bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-lg border border-gray-700 ${
                change && 'p-6'
            }`}
            whileHover={{ y: -6, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
        >
            {change ? (
                <>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h3 className='text-base font-medium text-gray-300'>{name}</h3>
                            <p className='mt-2 text-xl font-semibold text-gray-100'>{value}</p>
                        </div>

                        <div
                            className={`
                            p-3 rounded-full bg-opacity-20 ${change >= 0 ? 'bg-green-500' : 'bg-red-500'}
                        `}
                        >
                            <Icon className={`size-6 ${change >= 0 ? 'text-green-500' : 'text-red-500'}`} />
                        </div>
                    </div>

                    <div
                        className={`
                        mt-4 flex items-center ${change >= 0 ? 'text-green-500' : 'text-red-500'}
                    `}
                    >
                        {change >= 0 ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
                        <span className='ml-1 text-sm font-medium'>{Math.abs(change)}</span>
                        <span className='ml-2 text-sm font-medium text-gray-400'>vs last period</span>
                    </div>
                </>
            ) : (
                <div className='px-4 py-5 sm:p-6'>
                    <span className='flex items-center text-sm font-medium text-gray-200 '>
                        <Icon size={22} className='mr-2' style={{ color }} />
                        {name}
                    </span>
                    <p className='mt-2 text-gray-100 font-semibold text-[27px] '>{value}</p>
                </div>
            )}
        </motion.div>
    );
};

export default StatCard;

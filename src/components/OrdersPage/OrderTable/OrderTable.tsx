import { useTableConfig } from '@hooks';
import { useModalStore, useOrderStore } from '@store';
import { useState } from 'react';
import { orderColumns as columns, OrderTableForm, PageinationControls, RenderTable } from '@components';
import { SlideUp } from '@ui';
import { Search } from 'lucide-react';

const OrderTable = () => {
    const { orders } = useOrderStore();
    const { modal } = useModalStore();
    const [globalFilter, setGlobalFilter] = useState('');
    const table = useTableConfig({ data: orders, columns, globalFilter, setGlobalFilter, pageSize: 6 });

    return (
        <SlideUp
            className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5 border border-gray-700 mt-6 relative z-20 overflow-hidden'
            initial={25}
            duration={0.3}
            delay={0.3}
        >
            <div className='flex justify-between items-center mb-6 min-w-max gap-5 flex-col lg:items-center lg:flex-row'>
                <h2 className='text-xl font-semibold text-gray-100'>Order List</h2>
                <div className='relative flex items-center gap-2'>
                    <Search className='absolute left-3 text-gray-400 sm:left-2.5 top-2.5' size={20} />
                    <input
                        type='text'
                        placeholder='Search Order...'
                        className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 w-[150px] sm:w-full outline-none focus:ring-2 focus:ring-blue-500'
                        value={globalFilter}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                    />
                </div>
            </div>
            <div className='min-w-full overflow-auto'>
                <RenderTable table={table} />
            </div>
            <PageinationControls table={table} name='Orders' />
            {modal.active && <OrderTableForm />}
        </SlideUp>
    );
};

export default OrderTable;

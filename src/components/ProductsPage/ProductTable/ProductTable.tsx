import { useState } from 'react';
import { SlideUp } from '@ui';
import { Search } from 'lucide-react';
import { useTableConfig } from '@hooks';
import { useProductStore, useModalStore } from '@store';
import { ProductTableForm, PageinationControls, productColumns as columns, RenderTable } from '@components';

const ProductTable = () => {
    const { products } = useProductStore();
    const { modal, openModal } = useModalStore();
    const [globalFilter, setGlobalFilter] = useState('');

    const table = useTableConfig({ data: products, columns, globalFilter, setGlobalFilter, pageSize: 5 });

    return (
        <SlideUp
            className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5 border border-gray-700 mb-6 relative z-20 '
            initial={25}
            duration={0.2}
            delay={0.2}
        >
            <div className='flex justify-between  mb-6 min-w-max gap-5 flex-col lg:items-center lg:flex-row'>
                <h2 className='text-xl font-semibold text-gray-100'>Product List</h2>
                <div className='relative flex items-center gap-2 '>
                    <Search className='absolute left-3 text-gray-400 sm:left-2.5 top-2.5' size={20} />
                    <input
                        type='text'
                        value={globalFilter}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        placeholder='Search Product...'
                        className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 w-[150px] sm:w-full  outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <button
                        className='text-white hover:bg-green-700 bg-green-600 py-2 px-4 rounded-lg'
                        onClick={() => openModal('ADD')}
                    >
                        <h3>Add</h3>
                    </button>
                </div>
            </div>
            <div className='min-w-full overflow-auto'>
                <RenderTable table={table} />
            </div>
            <PageinationControls table={table} name='Products' />
            {modal.active && <ProductTableForm />}
        </SlideUp>
    );
};

export default ProductTable;

import { Product } from '@constants';
import { useModalStore, useProductStore } from '@store';
import { createColumnHelper } from '@tanstack/react-table';
import { Edit, Trash2 } from 'lucide-react';

const columnHelper = createColumnHelper<Product>();

export const productColumns = [
    columnHelper.accessor('name', {
        header: 'NAME',
        cell: (info) => (
            <div className='font-medium flex gap-2 items-center'>
                <img
                    src='https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww'
                    alt='Product_Image'
                    className='rounded-full size-10'
                />
                {info.getValue()}
            </div>
        ),
    }),
    columnHelper.accessor('category', {
        header: 'CATEGORY',
    }),
    columnHelper.accessor('price', {
        header: 'PRICE',
        cell: (info) => `$ ${info.getValue()}`,
    }),
    columnHelper.accessor('stock', {
        header: 'STOCK',
    }),
    columnHelper.accessor('sales', {
        header: 'SALES',
    }),
    columnHelper.display({
        id: 'actions',
        header: 'ACTIONS',
        cell: ({ row }) => {
            const { openModal } = useModalStore();
            const { removeProduct } = useProductStore();

            return (
                <div className='flex items-center gap-4 h-full'>
                    <button
                        className='text-blue-500 hover:text-blue-700'
                        onClick={() => openModal('EDIT', row.original)}
                    >
                        <Edit size={18} />
                    </button>
                    <button className='text-red-500 hover:text-red-700' onClick={() => removeProduct(row.original.id)}>
                        <Trash2 size={18} />
                    </button>
                </div>
            );
        },
    }),
];

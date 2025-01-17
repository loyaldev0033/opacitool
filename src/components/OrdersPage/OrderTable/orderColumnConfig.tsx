import { Order } from '@constants';
import { useModalStore } from '@store';
import { createColumnHelper } from '@tanstack/react-table';
import { Eye } from 'lucide-react';

const columnHelper = createColumnHelper<Order>();

export const orderColumns = [
    columnHelper.accessor('id', {
        header: 'ORDER ID',
        cell: (info) => <div className='text-sm font-semibold text-gray-100 tracking-wider'>{info.getValue()}</div>,
    }),
    columnHelper.accessor('customer', {
        header: 'CUSTOMER',
    }),
    columnHelper.accessor('total', {
        header: 'TOTAL',
    }),
    columnHelper.accessor('status', {
        header: 'STATUS',
        cell: (info) => {
            const statusStyles = {
                Delivered: 'bg-green-700 text-green-100',
                Shipped: 'bg-blue-700 text-blue-100',
                Processing: 'bg-yellow-700 text-yellow-100',
            };
            const status = info.getValue();
            const statusClass = statusStyles[status as keyof typeof statusStyles] || 'bg-red-700 text-red-100';
            return (
                <span className={`px-4 inline-flex rounded-full text-xs leading-5 font-semibold ${statusClass}`}>
                    {status}
                </span>
            );
        },
    }),
    columnHelper.accessor('date', {
        header: 'DATE',
    }),

    columnHelper.display({
        id: 'actions',
        header: 'ACTIONS',
        cell: ({ row }) => {
            const { openModal } = useModalStore();
            return (
                <div className='flex items-center gap-4 h-full'>
                    <button
                        className='text-blue-500 hover:text-blue-700'
                        onClick={() => openModal('EDIT', row.original)}
                    >
                        <Eye size={18} />
                    </button>
                </div>
            );
        },
    }),
];

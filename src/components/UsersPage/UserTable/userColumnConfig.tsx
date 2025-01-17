import { User } from '@constants';
import { useModalStore, useUserStore } from '@store';
import { createColumnHelper } from '@tanstack/react-table';
import { Edit, Trash2 } from 'lucide-react';

const columnHelper = createColumnHelper<User>();

export const userColumns = [
    columnHelper.accessor('name', {
        header: 'NAME',
        cell: (info) => (
            <div className='flex items-center'>
                <div className='flex-shrink-0 h-10 w-10'>
                    <div className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
                        {info.getValue().charAt(0)}
                    </div>
                </div>
                <div className='ml-4'>
                    <div className='text-sm font-semibold text-gray-100 tracking-wider'>{info.getValue()}</div>
                </div>
            </div>
        ),
    }),
    columnHelper.accessor('email', {
        header: 'EMAIL',
    }),
    columnHelper.accessor('role', {
        header: 'ROLE',
        cell: (info) => (
            <span
                className={`px-4 inline-flex rounded-full text-xs bg-gray-200 leading-5 font-semibold 
            ${
                info.getValue() === 'Admin'
                    ? 'text-green-700'
                    : info.getValue() === 'Moderator'
                    ? 'text-teal-600'
                    : info.getValue() === 'Customer'
                    ? 'text-orange-600'
                    : 'text-gray-100'
            }`}
            >
                {info.getValue()}
            </span>
        ),
    }),
    columnHelper.accessor('status', {
        header: 'STATUS',
        cell: (info) => (
            <span
                className={`px-4 inline-flex rounded-full text-xs leading-5 font-semibold 
                ${info.getValue() === 'Active' ? 'bg-green-700 text-green-100' : 'bg-red-700 text-red-100'}`}
            >
                {info.getValue()}
            </span>
        ),
    }),

    columnHelper.display({
        id: 'actions',
        header: 'ACTIONS',
        cell: ({ row }) => {
            const { openModal } = useModalStore();
            const { removeUser } = useUserStore();
            return (
                <div className='flex items-center gap-4 h-full'>
                    <button
                        className='text-blue-500 hover:text-blue-700'
                        onClick={() => openModal('EDIT', row.original)}
                    >
                        <Edit size={18} />
                    </button>
                    <button className='text-red-500 hover:text-red-700' onClick={() => removeUser(row.original.id)}>
                        <Trash2 size={18} />
                    </button>
                </div>
            );
        },
    }),
];

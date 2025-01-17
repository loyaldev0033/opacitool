import { Order } from '@constants';
import { useModalStore, useOrderStore } from '@store';
import { ScaleIn } from '@ui';
import { InputField } from '@components';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

const OrderTableForm = () => {
    const { modal, closeModal } = useModalStore();
    const { updateOrder } = useOrderStore();
    const [order, setOrder] = useState({
        id: '',
        customer: '',
        status: '',
    });

    useEffect(() => {
        if (modal.status === 'EDIT' && modal.data) {
            setOrder(modal.data as Order);
        }
    }, [modal.active]);

    const saveData = () => {
        updateOrder(order.id, order.status);
        closeModal();
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40'>
            <ScaleIn duration={0.3}>
                <h1 className='text-2xl font-semibold text=gray-100 mb-3 underline tracking-wider'>
                    Update Status for
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <InputField
                        value={order.customer}
                        data={{ label: 'Customer Name', type: 'text', disabled: true }}
                    />
                    <InputField
                        value={order.status}
                        setState={setOrder}
                        data={{
                            label: 'Current Order Status',
                            type: 'select',
                            key: 'status',
                            options: [
                                { label: 'Pending', value: 'Pending' },
                                { label: 'Processing', value: 'Processing' },
                                { label: 'Shipped', value: 'Shipped' },
                                { label: 'Delivered', value: 'Delivered' },
                            ],
                        }}
                    />

                    <div className='flex justify-end mt-5 space-x-2'>
                        <button
                            className='bg-gray-600 hover:bg-red-500 text-gray-100 px-4 py-2 rounded-md'
                            onClick={closeModal}
                        >
                            <X size={22} />
                        </button>
                        <button
                            className='bg-blue-600 hover:bg-blue-800 text-white text-md px-4 py-2 rounded-md w-24'
                            onClick={saveData}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </ScaleIn>
        </div>
    );
};

export default OrderTableForm;

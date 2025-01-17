import { useEffect, useState } from 'react';
import { useProductStore, useModalStore } from '@store';
import { ScaleIn } from '@ui';
import { X } from 'lucide-react';
import { Product, PRODUCT_TABLE_INPUT_FIELDS as inputFields } from '@constants';
import { v4 as uuidv4 } from 'uuid';
import { InputField } from '@components';
import { getChangedObjData } from '@utils';

const ProductTableForm = () => {
    const { modal, closeModal } = useModalStore();
    const { addProduct, updateProduct } = useProductStore();
    const [product, setProduct] = useState({
        id: '',
        name: '',
        category: '',
        price: 0,
        stock: 0,
        sales: 0,
    });
    const [initialProduct, setInitialProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (modal.status === 'EDIT' && modal.data) {
            setProduct(modal.data as Product);
            setInitialProduct(modal.data as Product);
        }
    }, [modal.active]);

    const saveData = () => {
        const changedFields = getChangedObjData(initialProduct, product);
        if (modal.status === 'ADD') {
            addProduct({ ...product, id: uuidv4() });
        } else if (modal.status === 'EDIT' && changedFields) {
            updateProduct(product.id, changedFields);
        }
        closeModal();
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40'>
            <ScaleIn duration={0.3}>
                <h1 className='text-2xl font-semibold text=gray-100 mb-3 underline tracking-wider'>
                    {modal.status === 'EDIT' ? 'Edit Product' : 'Add Product'}
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {inputFields.map((input) => (
                        <InputField
                            key={input.key}
                            value={product[input.key as keyof Product]}
                            setState={setProduct}
                            data={input}
                        />
                    ))}
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

export default ProductTableForm;

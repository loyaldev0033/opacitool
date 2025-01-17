import { User } from '@constants';
import { useModalStore, useUserStore } from '@store';
import { ScaleIn } from '@ui';
import { getChangedObjData } from '@utils';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { USER_TABLE_INPUT_FIELDS as inputFields } from '@constants';
import { InputField } from '@components';

const UserTableForm = () => {
    const { modal, closeModal } = useModalStore();
    const { addUser, updateUser } = useUserStore();
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        role: 'Customer',
        status: 'Active',
    });
    const [initialUser, setInitialUser] = useState<User | null>(null);

    useEffect(() => {
        if (modal.status === 'EDIT' && modal.data) {
            setUser(modal.data as User);
            setInitialUser(modal.data as User);
        }
    }, [modal.active]);

    const saveData = () => {
        const changedFields = getChangedObjData(initialUser, user);
        if (modal.status === 'ADD') {
            addUser({ ...user, id: uuidv4() });
        } else if (modal.status === 'EDIT' && changedFields) {
            updateUser(user.id, changedFields);
        }
        closeModal();
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40'>
            <ScaleIn duration={0.3}>
                <h1 className='text-2xl font-semibold text=gray-100 mb-3 underline tracking-wider'>
                    {modal.status === 'EDIT' ? 'Edit User' : 'Add User'}
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {inputFields.map((input) => (
                        <InputField
                            key={input.key}
                            value={user[input.key as keyof User]}
                            setState={setUser}
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

export default UserTableForm;

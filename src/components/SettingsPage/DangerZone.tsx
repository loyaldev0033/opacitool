import { SettingsSection } from '@components';
import { Trash2 } from 'lucide-react';

const DangerZone = () => {
    return (
        <SettingsSection danger={true} title='Danger Zone' icon={Trash2}>
            <p className='text-gray-300 mb-4'>
                Deleting your account will permanently remove all account data and content. Please confirm if you wish
                to proceed, as this action cannot be undone.
            </p>
            <button className='bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300'>
                Delete Account
            </button>
        </SettingsSection>
    );
};

export default DangerZone;

import { HelpCircle, Plus } from 'lucide-react';
import { SettingsSection } from '@components';
import { images } from '@utils';
import { useState } from 'react';

const ConnectedAccounts = () => {
    const [connectedAccounts, setConnectedAccounts] = useState([
        {
            id: 1,
            name: 'Google',
            connected: true,
            icon: images.google,
        },
        {
            id: 2,
            name: 'Facebook',
            connected: false,
            icon: images.facebook,
        },
        {
            id: 3,
            name: 'Twitter',
            connected: true,
            icon: images.twitter,
        },
    ]);
    return (
        <SettingsSection icon={HelpCircle} title={'Connected Accounts'}>
            {connectedAccounts.map((account) => (
                <div key={account.id} className='flex sm:items-center justify-between py-3 flex-col sm:flex-row'>
                    <div className='flex gap-1'>
                        <img src={account.icon} alt='Social Icon' className='size-7 rounded-full object-cover mr-2' />
                        <span className='text-gray-300'>{account.name}</span>
                    </div>

                    <button
                        className={`
                px-3 py-1 rounded text-white transition duration-300
                ${account.connected ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'}
            `}
                        onClick={() => {
                            setConnectedAccounts(
                                connectedAccounts.map((acc) => {
                                    if (acc.id === account.id) {
                                        return {
                                            ...acc,
                                            connected: !acc.connected,
                                        };
                                    }
                                    return acc;
                                })
                            );
                        }}
                    >
                        {account.connected ? 'Connected' : 'Connect'}
                    </button>
                </div>
            ))}

            <button className='mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200'>
                <Plus size={18} className='mr-2' /> Add Account
            </button>
        </SettingsSection>
    );
};

export default ConnectedAccounts;

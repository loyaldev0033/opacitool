import { useState } from 'react';
import ToogleSwitch from './ToggleSwitch';
import { SettingsSection } from '@components';
import { Lock } from 'lucide-react';

const Security = () => {
    const [twoFactor, setTwoFactor] = useState(true);
    return (
        <SettingsSection icon={Lock} title={'Security'}>
            <ToogleSwitch
                label={'Two Factor Authentication'}
                isOn={twoFactor}
                onToggle={() => setTwoFactor(!twoFactor)}
            />

            <button className='bg-indigo-600 hover:bg-indigo-800 text-white font-semibold py-2 px-6 rounded transition duration-300 w-full sm:w-auto'>
                Change Password
            </button>
        </SettingsSection>
    );
};

export default Security;

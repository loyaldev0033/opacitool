import { Bell } from 'lucide-react';
import ToogleSwitch from './ToggleSwitch';
import { useState } from 'react';
import { SettingsSection } from '@components';

const Notification = () => {
    const [notification, setNotification] = useState({
        push: true,
        email: false,
        sms: true,
    });
    return (
        <SettingsSection icon={Bell} title={'Notification'}>
            <ToogleSwitch
                label={'Push Notification'}
                isOn={notification.push}
                onToggle={() => setNotification({ ...notification, push: !notification.push })}
            />

            <ToogleSwitch
                label={'Email Notification'}
                isOn={notification.email}
                onToggle={() => setNotification({ ...notification, email: !notification.email })}
            />

            <ToogleSwitch
                label={'SMS Notification'}
                isOn={notification.sms}
                onToggle={() => setNotification({ ...notification, sms: !notification.sms })}
            />
        </SettingsSection>
    );
};

export default Notification;

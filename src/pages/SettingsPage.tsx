import { ConnectedAccounts, DangerZone, Notification, Profile, Security } from '@components';

const SettingsPage = () => {
    return (
        <>
            <Profile />
            <Notification />
            <Security />
            <ConnectedAccounts />
            <DangerZone />
        </>
    );
};

export default SettingsPage;

import { SettingsSection } from '@components';
import { User } from 'lucide-react';
import { images } from '@utils';

const Profile = () => {
    return (
        <SettingsSection icon={User} title='Profile'>
            <div className='flex flex-col sm:flex-row items-center mb-6'>
                <img src={images.profile} alt='Image' className='rounded-full size-28 object-cover mr-4 mb-4 sm:mb-0' />
                <div>
                    <h3 className='text-xl font-semibold text-gray-100 mb-1'>Name</h3>
                    <p className='text-gray-300'>name@gmail.com</p>
                </div>
            </div>

            <button className='bg-indigo-600 hover:bg-indigo-800 text-white font-semibold py-2 px-6 rounded transition duration-300 w-full sm:w-auto'>
                Edit Profile
            </button>
        </SettingsSection>
    );
};

export default Profile;

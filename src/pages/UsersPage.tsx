import { StatCard, UserActivityChart, UserDemographicsChart, UserGrowthChart, UserTable } from '@components';
import { SlideUp } from '@ui';
import { Users_STAT } from '@constants';

const UsersPage = () => {
    return (
        <>
            <SlideUp className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-7' initial={30} duration={1}>
                {Users_STAT.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </SlideUp>
            <UserTable />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 pt-8'>
                <UserGrowthChart />
                <UserActivityChart />
                <UserDemographicsChart />
            </div>
        </>
    );
};

export default UsersPage;

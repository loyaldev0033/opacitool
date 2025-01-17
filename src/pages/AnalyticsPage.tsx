import {
    AiPoweredInsights,
    ChannelPerformanceChart,
    CustomerSegmentationChart,
    ProductPerformanceChart,
    RevenueVsTargetChart,
    StatCard,
    UserRetensionChart,
} from '@components';
import { ANALYTICS_STAT } from '@constants';
import { SlideUp } from '@ui';

const AnalyticsPage = () => {
    return (
        <>
            <SlideUp className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8' initial={30} duration={1}>
                {ANALYTICS_STAT.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </SlideUp>
            <RevenueVsTargetChart />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-7'>
                <ChannelPerformanceChart />
                <ProductPerformanceChart />
                <UserRetensionChart />
                <CustomerSegmentationChart />
            </div>
            <AiPoweredInsights />
        </>
    );
};

export default AnalyticsPage;

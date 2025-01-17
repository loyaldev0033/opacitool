import { INSIGHTS } from '@constants';
import { SlideUp } from '@ui';

const AiPoweredInsights = () => {
    return (
        <SlideUp
            className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
            initial={25}
            delay={1}
            duration={0.5}
        >
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>AI Powered Insights</h2>

            <div className='space-y-4'>
                {INSIGHTS.map((item, index) => (
                    <div key={index} className='flex items-center space-x-3 flex-col sm:flex-row'>
                        <div className={`p-2 rounded-full bg-opacity-20 ${item.color}`}>
                            <item.icon className={`size-[22px] ${item.color}`} />
                        </div>
                        <p className='text-gray-300'>{item.insight}</p>
                    </div>
                ))}
            </div>
        </SlideUp>
    );
};

export default AiPoweredInsights;

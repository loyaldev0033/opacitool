import { CustomStackedBarChart } from '@charts';
import { USER_ACTIVITY_DATA, STACKED_BARS } from '@constants';
import { SlideUp } from '@ui';

const stackedBarChartProps = {
    data: USER_ACTIVITY_DATA,
    strokeDashArray: '3 3',
    dataKey: 'name',
    stackId: 'a',
    strokes: {
        cartesianGridStroke: '#374151',
        xAxisStroke: '#9ca3af',
        yAxisStroke: '#9ca3af',
    },

    tooltip: {
        active: true,
        contentStyle: {
            backgroundColor: 'rgba(31, 45, 55, 0.8)',
            borderColor: '#4b5563',
        },
        itemStyle: { color: '#e5e7eb' },
    },
    stackedBars: STACKED_BARS,
    legend: true,
};

const UserActivityChart = () => {
    return (
        <SlideUp
            className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5  border border-gray-700'
            initial={25}
            duration={1.3}
            delay={0.7}
        >
            <h2 className='text-xl font-medium mb-4 text-gray-100'>User Activity HeatMap</h2>
            <div className='h-80 overflow-auto'>
                <CustomStackedBarChart {...stackedBarChartProps} />
            </div>
        </SlideUp>
    );
};

export default UserActivityChart;

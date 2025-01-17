import { CustomLineChart } from '@charts';
import { USER_GROWTH_DATA } from '@constants';
import { SlideUp } from '@ui';

const lineChartProps = {
    data: USER_GROWTH_DATA,
    strokeDashArray: '3 3',
    dataKeys: ['name', 'users'],
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
    line: {
        type: 'linear' as 'linear',
        stroke: '#8b5cf6',
        strokeWidth: 2,
    },
    legend: false,
};

const UserGrowthChart = () => {
    return (
        <SlideUp
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
            initial={25}
            delay={0.7}
            duration={1.3}
        >
            <h2 className='text-xl font-medium mb-4 text-gray-100'>User Growth</h2>
            <div className='h-80 overflow-auto'>
                <CustomLineChart {...lineChartProps} />
            </div>
        </SlideUp>
    );
};

export default UserGrowthChart;

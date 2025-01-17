import { CustomLineChart } from '@charts';
import { USER_RETENTION_DATA } from '@constants';
import { SlideUp } from '@ui';

const lineChartProps = {
    data: USER_RETENTION_DATA,
    strokeDashArray: '3 3',
    dataKeys: ['name', 'retention'],
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
        type: 'monotone' as 'monotone',
        stroke: '#8B5CF6',
        strokeWidth: 2,
    },
    legend: true,
};

const UserRetensionCharts = () => {
    return (
        <SlideUp
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
            initial={25}
            delay={0.2}
            duration={0.5}
        >
            <h2 className='text-xl font-medium mb-4 text-gray-100'>User Retention</h2>
            <div className='h-80 overflow-auto'>
                <CustomLineChart {...lineChartProps} />
            </div>
        </SlideUp>
    );
};

export default UserRetensionCharts;

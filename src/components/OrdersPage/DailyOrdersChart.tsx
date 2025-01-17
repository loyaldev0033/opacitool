import { CustomLineChart } from '@charts';
import { ORDERS_DATA } from '@constants';
import { SlideUp } from '@ui';

const lineChartProps = {
    data: ORDERS_DATA,
    strokeDashArray: '3 3',
    dataKeys: ['date', 'orders'],
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
        stroke: '#6366f1',
        strokeWidth: 3,
        dot: {
            fill: '#6366f1',
            strokeWidth: 2,
            r: 5,
        },
        activeDot: {
            r: 8,
            strokeWidth: 2,
        },
    },
    legend: true,
};

const DailyOrdersChart = () => {
    return (
        <SlideUp
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
            initial={25}
            delay={0.2}
            duration={0.5}
        >
            <h2 className='text-xl font-medium mb-4 text-gray-100'>Daily Orders</h2>
            <div className='h-80 overflow-auto'>
                <CustomLineChart {...lineChartProps} />
            </div>
        </SlideUp>
    );
};

export default DailyOrdersChart;

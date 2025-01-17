import { SlideUp } from '@ui';
import { SALES_DATA } from '@constants';
import { CustomLineChart } from '@charts';

const lineChartProps = {
    data: SALES_DATA,
    strokeDashArray: '3 3',
    dataKeys: ['name', 'sales'],
    strokes: {
        cartesianGridStroke: '#4b5563',
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
    legend: false,
};

const SalesOverviewChart = () => {
    return (
        <SlideUp
            className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5 border border-gray-700'
            initial={25}
            duration={0.5}
            delay={0.2}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>Sales Overview</h2>
            <div className='h-80 overflow-auto '>
                <CustomLineChart {...lineChartProps} />
            </div>
        </SlideUp>
    );
};

export default SalesOverviewChart;

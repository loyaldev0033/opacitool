import { CustomLineChart } from '@charts';
import { SALES_TREND_DATA } from '@constants';
import { SlideUp } from '@ui';

const lineChartProps = {
    data: SALES_TREND_DATA,
    strokeDashArray: '3 3',
    dataKeys: ['month', 'sales'],
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
        stroke: '#8b5cf6',
        strokeWidth: 2,
    },
    legend: false,
};

const SalesTrendChart = () => {
    return (
        <SlideUp
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
            initial={25}
            delay={0.2}
            duration={0.5}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>Sales Trend</h2>
            <div className='h-80 overflow-auto'>
                <CustomLineChart {...lineChartProps} />
            </div>
        </SlideUp>
    );
};

export default SalesTrendChart;

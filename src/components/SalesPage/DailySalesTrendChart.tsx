import { CustomBarChart } from '@charts';
import { DAILY_SALES_TREND_DATA } from '@constants';
import { SlideUp } from '@ui';

const barChartProps = {
    data: DAILY_SALES_TREND_DATA,
    strokeDashArray: '3 3',
    dataKeys: ['name', 'sales'],
    strokes: {
        cartesianGridStroke: '#4b5563',
        xAxisStroke: '#9ca3af',
        yAxisStroke: '#9ca3af',
    },
    bar: {
        fill: '#8884d8',
    },
    tooltip: {
        active: true,
        contentStyle: {
            backgroundColor: 'rgba(31, 45, 55, 0.8)',
            borderColor: '#4b5563',
        },
        itemStyle: { color: '#e5e7eb' },
    },
    colors: ['#10b981'],
    legend: true,
};

const DailySalesTrendChart = () => {
    return (
        <SlideUp
            className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5  border border-gray-700'
            initial={25}
            duration={0.7}
            delay={0.7}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>Daily Sales Trend</h2>
            <div className='h-80 overflow-auto'>
                <CustomBarChart {...barChartProps} />
            </div>
        </SlideUp>
    );
};

export default DailySalesTrendChart;

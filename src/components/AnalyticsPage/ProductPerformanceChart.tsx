import { CustomBarChart } from '@charts';
import { PRODUCT_PERFORMANCE_DATA } from '@constants';
import { SlideUp } from '@ui';

const barChartProps = {
    data: PRODUCT_PERFORMANCE_DATA,
    strokeDashArray: '3 3',
    dataKeys: ['name', 'sales'],
    strokes: {
        cartesianGridStroke: '#4b5563',
        xAxisStroke: '#9ca3af',
        yAxisStroke: '#9ca3af',
    },
    bars: [
        { dataKey: 'sales', fill: '#8B5CF6' },
        { dataKey: 'revenue', fill: '#10B981' },
        { dataKey: 'profit', fill: '#F59E0B' },
    ],
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

const ProductPerformanceChart = () => {
    return (
        <SlideUp
            className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5  border border-gray-700 mt-7'
            initial={25}
            duration={0.7}
            delay={0.7}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>Product Performance</h2>
            <div className='h-80 overflow-auto'>
                <CustomBarChart {...barChartProps} />
            </div>
        </SlideUp>
    );
};

export default ProductPerformanceChart;

import { CustomPieChart } from '@charts';
import { CHANNEL_DATA, SALES_CHANNEL_DATA_COLORS as COLORS } from '@constants';
import { SlideUp } from '@ui';
import { scrollCenter } from '@utils';
import { useEffect, useRef } from 'react';

const pieChartProps = {
    data: CHANNEL_DATA,
    pie: {
        cx: '50%',
        cy: '50%',
        labelLine: false,
        outerRadius: 80,
        fill: '#8884d8',
    },
    dataKeys: ['name', 'value'],
    colors: COLORS,
    tooltip: {
        active: true,
        contentStyle: {
            backgroundColor: 'rgba(31, 45, 55, 0.8)',
            borderColor: '#4b5563',
        },
        itemStyle: { color: '#e5e7eb' },
    },
    legend: true,
};

const ChannelPerformanceChart = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        setTimeout(() => scrollCenter(containerRef), 1500);
    }, []);
    return (
        <SlideUp
            className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5 border border-gray-700 mt-7'
            initial={25}
            duration={0.4}
            delay={1}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>Channel Performance</h2>
            <div ref={containerRef} className='h-80 overflow-auto'>
                <CustomPieChart {...pieChartProps} />
            </div>
        </SlideUp>
    );
};

export default ChannelPerformanceChart;

import { SlideUp } from '@ui';
import { USER_DEMOGRAPHIC_DATA, USER_DEMOGRAPHIC_COLORS as COLORS } from '@constants';
import { CustomPieChart } from '@charts';
import { useEffect, useRef } from 'react';
import { scrollCenter } from '@utils';

const pieChartProps = {
    data: USER_DEMOGRAPHIC_DATA,
    pie: {
        cx: '50%',
        cy: '50%',
        labelLine: false,
        outerRadius: 100,
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

const UserDemographicsChart = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        setTimeout(() => scrollCenter(containerRef), 1500);
    }, []);
    return (
        <SlideUp
            className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5 border border-gray-700 lg:col-span-2'
            initial={25}
            duration={1.8}
            delay={1.2}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>User Demographics</h2>
            <div ref={containerRef} className='h-80 overflow-auto'>
                <CustomPieChart {...pieChartProps} />
            </div>
        </SlideUp>
    );
};

export default UserDemographicsChart;

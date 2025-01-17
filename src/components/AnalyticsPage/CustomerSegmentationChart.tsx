import { CustomRadarChart } from '@charts';
import { CUSTOMER_SEGMENTATION_DATA } from '@constants';
import { SlideUp } from '@ui';
import { useEffect, useRef } from 'react';
import { scrollCenter } from '@utils';

const radarChartProps = {
    data: CUSTOMER_SEGMENTATION_DATA,
    cx: '50%',
    cy: '50%',
    outerRadius: '80%',
    strokes: {
        polarGrid: '#374151',
        polarAngleAxis: '#7ca3af',
        polarRadiusAxis: '#9ca3af',
    },
    radar: [
        { name: 'Segment A', dataKey: 'A', stroke: '#8b5cf6', fill: '#8b5cf6', fillOpacity: 0.6 },
        { name: 'Segment B', dataKey: 'B', stroke: '#10b981', fill: '#10b981', fillOpacity: 0.6 },
    ],
    angle: 30,
    domain: [0, 150],
    dataKey: 'subject',
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

const CustomerSegmentationChart = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        setTimeout(() => scrollCenter(containerRef), 1500);
    }, []);
    return (
        <SlideUp
            className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5 border border-gray-700 '
            initial={25}
            duration={0.4}
            delay={1}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>Customer Segmentation</h2>
            <div ref={containerRef} className='h-80 overflow-auto'>
                <CustomRadarChart {...radarChartProps} />
            </div>
        </SlideUp>
    );
};

export default CustomerSegmentationChart;

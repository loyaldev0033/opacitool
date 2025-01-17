import { CSSProperties } from 'react';
import { Area, CartesianGrid, AreaChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { CurveType } from 'recharts/types/shape/Curve';

interface AreaChartProps {
    data: Record<string, number | string>[];
    strokeDashArray: string;
    dataKeys: string[];
    strokes: {
        cartesianGridStroke: string;
        xAxisStroke: string;
        yAxisStroke: string;
    };
    tooltip: {
        active: boolean;
        contentStyle: CSSProperties;
        itemStyle: CSSProperties;
    };
    areas: {
        type: CurveType;
        stroke: string;
        fill: string;
        fillOpacity: number;
        dataKey: string;
    }[];
    legend: boolean;
}

const CustomAreaChart = ({ data, strokeDashArray, dataKeys, strokes, tooltip, areas, legend }: AreaChartProps) => {
    const { cartesianGridStroke, xAxisStroke, yAxisStroke } = strokes;
    const { active, contentStyle, itemStyle } = tooltip;

    return (
        <ResponsiveContainer width={'100%'} height={'100%'} minWidth={'350px'}>
            <AreaChart data={data}>
                <CartesianGrid strokeDasharray={strokeDashArray} stroke={cartesianGridStroke} />
                <XAxis dataKey={dataKeys[0]} stroke={xAxisStroke} />
                <YAxis stroke={yAxisStroke} />
                {active && (
                    <Tooltip
                        contentStyle={{
                            ...contentStyle,
                        }}
                        itemStyle={{ ...itemStyle }}
                    />
                )}

                {areas.map((areaProps, index) => (
                    <Area key={index} {...areaProps} />
                ))}

                {legend && <Legend />}
                <Legend />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default CustomAreaChart;

import { CSSProperties } from 'react';
import { CartesianGrid, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

interface StackedBars {
    dataKey: string;
    fill: string;
}

interface CustomStackedBarChartProps {
    data: Record<string, number | string>[];
    strokeDashArray: string;
    dataKey: string;
    stackId: string;
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
    stackedBars: StackedBars[];
    legend: boolean;
}

const CustomStackedBarChart = ({
    data,
    strokeDashArray,
    dataKey,
    stackId,
    strokes,
    tooltip,
    stackedBars,
    legend,
}: CustomStackedBarChartProps) => {
    const { cartesianGridStroke, xAxisStroke, yAxisStroke } = strokes;
    const { active, contentStyle, itemStyle } = tooltip;
    return (
        <ResponsiveContainer width={'100%'} height={'100%'} minWidth={'350px'}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray={strokeDashArray} stroke={cartesianGridStroke} />
                <XAxis dataKey={dataKey} stroke={xAxisStroke} />
                <YAxis stroke={yAxisStroke} />
                {stackedBars.map((bar, index) => (
                    <Bar key={index} dataKey={bar.dataKey} stackId={stackId} fill={bar.fill} />
                ))}
                {active && (
                    <Tooltip
                        contentStyle={{
                            ...contentStyle,
                        }}
                        itemStyle={{ ...itemStyle }}
                    />
                )}
                {legend && <Legend />}
            </BarChart>
        </ResponsiveContainer>
    );
};

export default CustomStackedBarChart;

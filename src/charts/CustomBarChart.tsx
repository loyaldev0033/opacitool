import { CSSProperties } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface CustomBarChartProps {
    data: { [key: string]: number | string }[];
    strokeDashArray: string;
    dataKeys: string[];
    strokes: {
        cartesianGridStroke: string;
        xAxisStroke: string;
        yAxisStroke: string;
    };
    bar?: {
        fill: string;
    };
    tooltip: {
        active: boolean;
        contentStyle: CSSProperties;
        itemStyle: CSSProperties;
    };
    colors: string[];
    bars?: {
        dataKey: string;
        fill: string;
    }[];
    legend: boolean;
}

const CustomBarChart = ({
    data,
    strokeDashArray,
    dataKeys,
    strokes,
    bar,
    tooltip,
    colors,
    legend,
    bars,
}: CustomBarChartProps) => {
    const { cartesianGridStroke, xAxisStroke, yAxisStroke } = strokes;
    const { active, contentStyle, itemStyle } = tooltip;
    const barProps = {
        ...bar,
        dataKey: dataKeys[1],
    };

    return (
        <ResponsiveContainer width={'100%'} height={'100%'} minWidth={'350px'}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray={strokeDashArray} stroke={cartesianGridStroke} />
                <XAxis dataKey={dataKeys[0]} stroke={xAxisStroke} />
                <YAxis stroke={yAxisStroke} />
                {bars ? (
                    bars.map((bar, index) => <Bar key={index} dataKey={bar.dataKey} fill={bar.fill} />)
                ) : (
                    <Bar {...barProps}>
                        {data.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>
                )}

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

export default CustomBarChart;

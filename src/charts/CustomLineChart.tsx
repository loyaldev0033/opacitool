import { CSSProperties } from 'react';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Line, Tooltip, Legend } from 'recharts';
import { CurveType } from 'recharts/types/shape/Curve';

interface LineChartProps {
    data: { [key: string]: number | string }[];
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
    line: {
        type: CurveType;
        stroke: string;
        strokeWidth: number;
        dot?: {
            fill: string;
            strokeWidth: number;
            r: number;
        };
        activeDot?: {
            strokeWidth: number;
            r: number;
        };
    };
    legend: boolean;
}

const CustomLineChart = ({ data, strokeDashArray, dataKeys, strokes, tooltip, line, legend }: LineChartProps) => {
    const { cartesianGridStroke, xAxisStroke, yAxisStroke } = strokes;
    const { active, contentStyle, itemStyle } = tooltip;

    const lineProps = {
        ...line,
        dataKey: dataKeys[1],
    };

    return (
        <ResponsiveContainer width={'100%'} height={'100%'} minWidth={'350px'}>
            <LineChart data={data}>
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
                <Line {...lineProps} />
                {legend && <Legend />}
            </LineChart>
        </ResponsiveContainer>
    );
};

export default CustomLineChart;

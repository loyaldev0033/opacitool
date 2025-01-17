import { CSSProperties } from 'react';
import {
    ResponsiveContainer,
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Legend,
    Tooltip,
} from 'recharts';

interface CustomRadarChartProps {
    data: { [key: string]: number | string }[];
    cx: string;
    cy: string;
    outerRadius: string;
    strokes: {
        polarGrid: string;
        polarAngleAxis: string;
        polarRadiusAxis: string;
    };
    radar: {
        name: string;
        dataKey: string;
        stroke: string;
        fill: string;
        fillOpacity: number;
    }[];
    angle: number;
    domain: number[];
    dataKey: string;
    tooltip: {
        active: boolean;
        contentStyle: CSSProperties;
        itemStyle: CSSProperties;
    };
    legend: boolean;
}

const CustomRadarChart = ({
    data,
    radar,
    cx,
    cy,
    dataKey,
    angle,
    domain,
    outerRadius,
    strokes,
    tooltip,
    legend,
}: CustomRadarChartProps) => {
    const { active, contentStyle, itemStyle } = tooltip;
    const { polarGrid, polarAngleAxis, polarRadiusAxis } = strokes;

    return (
        <ResponsiveContainer width='100%' height='100%' minWidth={'350px'}>
            <RadarChart data={data} cx={cx} cy={cy} outerRadius={outerRadius}>
                <PolarGrid stroke={polarGrid} />
                <PolarAngleAxis dataKey={dataKey} stroke={polarAngleAxis} />
                <PolarRadiusAxis angle={angle} domain={domain} stroke={polarRadiusAxis} />
                {radar.map((data, index) => (
                    <Radar key={index} {...data} />
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
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default CustomRadarChart;

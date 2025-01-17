import { CSSProperties } from 'react';
import { Cell, LabelList, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

interface CustomPieChartProps {
    data: { [key: string]: number | string }[];
    pie: {
        cx: string;
        cy: string;
        labelLine: boolean;
        outerRadius: number;
        fill: string;
    };
    dataKeys: string[];
    colors: string[];
    tooltip: {
        active: boolean;
        contentStyle: CSSProperties;
        itemStyle: CSSProperties;
    };
    legend: boolean;
}

interface PieLabelProps {
    name: string;
    percent: number;
}
const CustomPieChart = ({ data, pie, dataKeys, colors, tooltip, legend }: CustomPieChartProps) => {
    const { active, contentStyle, itemStyle } = tooltip;

    const pieProps = {
        ...pie,
        labelLine: true,
        data: data,
        dataKey: dataKeys[1],
        label: ({ name, percent }: PieLabelProps) => `${name} ${(percent * 100).toFixed(0)}%`,
    };

    return (
        <ResponsiveContainer width={'100%'} height={'100%'} minWidth={'500px'}>
            <PieChart>
                <Pie {...pieProps}>
                    {data.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                    <LabelList
                        dataKey={dataKeys[1]}
                        style={{
                            fill: 'white',
                            fontSize: '12px',
                        }}
                    />
                </Pie>
                {active && (
                    <Tooltip
                        contentStyle={{
                            ...contentStyle,
                        }}
                        itemStyle={{ ...itemStyle }}
                    />
                )}
                {legend && <Legend />}
            </PieChart>
        </ResponsiveContainer>
    );
};

export default CustomPieChart;

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import Aux from "../../../hoc/_Aux/index";

const data = [
    { name: 'Group A', value: 55 },
    { name: 'Group B', value: 10 },
    { name: 'Group C', value: 15 },
    { name: 'Group D', value: 20 },
];

const COLORS = ['#4680ff', '#11c15b', '#ffa21d', '#ff5252'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

class PieBasicChart extends React.Component {

    render() {
        return (
            <Aux>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="auto"
                            cy="auto"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {
                                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                            }
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </Aux>
        );
    }
}

export default PieBasicChart;
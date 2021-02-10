import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import Aux from "../../../hoc/_Aux/index";

const data = [
    {
        name: '2008', 'Bar 1': 50, 'Bar 2': 40, 'Bar 3': 35,
    },
    {
        name: '2009', 'Bar 1': 75, 'Bar 2': 65, 'Bar 3': 60,
    },
    {
        name: '2010', 'Bar 1': 50, 'Bar 2': 40, 'Bar 3': 55,
    },
    {
        name: '2011', 'Bar 1': 75, 'Bar 2': 65, 'Bar 3': 85,
    },
    {
        name: '2012', 'Bar 1': 100, 'Bar 2': 90, 'Bar 3': 40,
    }
];

class BarStackedChart extends React.Component {

    render() {
        return (
            <Aux>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <defs>
                            <linearGradient id="colorBar1" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="1%" stopColor="#1de9b6" stopOpacity={1}/>
                                <stop offset="99%" stopColor="#1dc4e9" stopOpacity={1}/>
                            </linearGradient>
                            <linearGradient id="colorBar2" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="1%" stopColor="#899FD4" stopOpacity={1}/>
                                <stop offset="99%" stopColor="#A389D4" stopOpacity={1}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Bar 1" stackId="bar" fill="#11c15b" />
                        <Bar dataKey="Bar 2" stackId="bar" fill="#ffa21d" />
                        <Bar dataKey="Bar 3" stackId="bar" fill="#ff5252" />
                    </BarChart>
                </ResponsiveContainer>
            </Aux>
        );
    }
}

export default BarStackedChart;
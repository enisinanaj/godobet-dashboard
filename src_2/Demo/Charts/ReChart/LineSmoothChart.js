import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import Aux from "../../../hoc/_Aux/index";

const data = [
    {
        name: '2007', 'Series 1': 100, 'Series 2': 90
    },
    {
        name: '2008', 'Series 1': 75, 'Series 2': 65
    },
    {
        name: '2009', 'Series 1': 50, 'Series 2': 40
    },
    {
        name: '2010', 'Series 1': 75, 'Series 2': 65
    },
    {
        name: '2011', 'Series 1': 50, 'Series 2': 40
    },
    {
        name: '2012', 'Series 1': 75, 'Series 2': 65
    },
    {
        name: '2013', 'Series 1': 100, 'Series 2': 90
    }
];

class LineSmoothChart extends React.Component {

    render() {
        return (
            <Aux>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                        data={data}
                        margin={{
                            top: 20, right: 30, left: 20, bottom: 5,
                        }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis type="number" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Series 1" stroke="#4680ff" strokeWidth={3} />
                        <Line type="monotone" dataKey="Series 2" stroke="#11c15b" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </Aux>
        );
    }
}

export default LineSmoothChart;
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import Aux from "../../../hoc/_Aux/index";

const data = [
    {
        name: '2007', 'Bar 1': 0, 'Bar 2': 0, 'Bar 3': 35,
    },
    {
        name: '2008', 'Bar 1': 130, 'Bar 2': 100, 'Bar 3': 35,
    },
    {
        name: '2009', 'Bar 1': 80, 'Bar 2': 60, 'Bar 3': 60,
    },
    {
        name: '2010', 'Bar 1': 70, 'Bar 2': 200, 'Bar 3': 55,
    },
    {
        name: '2011', 'Bar 1': 220, 'Bar 2': 150, 'Bar 3': 85,
    },
    {
        name: '2012', 'Bar 1': 105, 'Bar 2': 90, 'Bar 3': 40,
    },
    {
        name: '2013', 'Bar 1': 250, 'Bar 2': 150, 'Bar 3': 40,
    }
];

class AreaAngleChart extends React.Component {

    render() {
        return (
            <Aux>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <XAxis dataKey="name" />
                        <YAxis type="number" domain={[0, 'dataMax + 50']} />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area dataKey="Bar 1" stroke="none" fill="#4680ff" />
                        <Area dataKey="Bar 2" stroke="none" fill="#11c15b" />
                    </AreaChart>
                </ResponsiveContainer>
            </Aux>
        );
    }
}

export default AreaAngleChart;
import React, { PureComponent } from 'react';
import {
    ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Aux from "../../../hoc/_Aux";

const data = [
    {
        name: '2008', 'Bar 1': 50, 'Bar 2': 40, 'Bar 3': 35, pv: 80, amt: 140
    },
    {
        name: '2009', 'Bar 1': 75, 'Bar 2': 65, 'Bar 3': 60, pv: 96, amt: 150
    },
    {
        name: '2010', 'Bar 1': 50, 'Bar 2': 40, 'Bar 3': 55, pv: 109, amt: 98
    },
    {
        name: '2011', 'Bar 1': 75, 'Bar 2': 65, 'Bar 3': 85, pv: 120, amt: 122
    },
    {
        name: '2012', 'Bar 1': 100, 'Bar 2': 90, 'Bar 3': 40, pv: 68, amt: 170
    },
    {
        name: '2013', 'Bar 1': 80, 'Bar 2': 85, 'Bar 3': 45, pv: 90, amt: 85
    }
];

class ComboChart extends PureComponent {

    render() {
        return (
            <Aux>
                <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart
                        data={data}
                        margin={{
                            top: 20, right: 20, bottom: 20, left: 20,
                        }}>
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="amt" fill="#11c15b" stroke="none" />
                        <Bar dataKey="Bar 1" fill="#4680ff" />
                        <Bar dataKey="Bar 2" fill="#ffa21d" />
                        <Bar dataKey="Bar 3" fill="#ff5252" />
                        <Line dataKey="pv" stroke="#0e9e4a" strokeWidth={5}/>
                    </ComposedChart>
                </ResponsiveContainer>
            </Aux>
        );
    }
}

export default ComboChart;

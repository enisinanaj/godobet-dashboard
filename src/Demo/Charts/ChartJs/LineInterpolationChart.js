import React from 'react';
import {Line} from 'react-chartjs-2';

class LineInterpolationChart extends React.Component {

    render() {
        const data = (canvas) => {
            let bar = canvas.getContext('2d');
            let theme_g1 = bar.createLinearGradient(0, 0, 500, 0);
            theme_g1.addColorStop(0, '#4680ff');
            theme_g1.addColorStop(1, '#4680ff');
            let theme_g2 = bar.createLinearGradient(0, 0, 500, 0);
            theme_g2.addColorStop(0, '#11c15b');
            theme_g2.addColorStop(1, '#11c15b');

            return {
                labels: [0, 1, 2, 3, 4, 5, 6],
                datasets: [{
                    label: "D1",
                    data: [55, 70, 62, 81, 56, 70, 90],
                    fill: false,
                    borderWidth: 4,
                    borderDash: [15, 10],
                    borderColor: theme_g2,
                    backgroundColor: theme_g2,
                    hoverborderColor: theme_g2,
                    hoverBackgroundColor: theme_g2,
                }, {
                    label: "D2",
                    data: [85, 55, 70, 50, 75, 45, 60],
                    fill: true,
                    cubicInterpolationMode: 'monotone',
                    borderWidth: 4,
                    borderColor: theme_g1,
                    backgroundColor: theme_g1,
                    hoverborderColor: theme_g1,
                    hoverBackgroundColor: theme_g1,
                }, {
                    label: "D3",
                    data: [50, 75, 80, 70, 85, 80, 70],
                    fill: false,
                    borderWidth: 4,
                    borderColor: "#0e9e4a",
                    backgroundColor: "#0e9e4a",
                    hoverborderColor: "#0e9e4a",
                    hoverBackgroundColor: "#0e9e4a",
                }]
            }
        };

        return (
            <Line
                data={data}
                responsive={true}
                height={300}
                options={{
                    barValueSpacing: 20,
                    maintainAspectRatio: false,
                }}
            />
        );
    }
}

export default LineInterpolationChart;
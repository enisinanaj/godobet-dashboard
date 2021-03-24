import React from 'react';
import {Doughnut} from 'react-chartjs-2';

class DoughnutChart extends React.Component {

    render() {
        const data = (canvas) => {
            let bar = canvas.getContext('2d');
            let theme_g1 = bar.createLinearGradient(100, 0, 300, 0);
            theme_g1.addColorStop(0, '#11c15b');
            theme_g1.addColorStop(1, '#11c15b');
            let theme_g2 = bar.createLinearGradient(100, 0, 300, 0);
            theme_g2.addColorStop(0, '#ffa21d');
            theme_g2.addColorStop(1, '#ffa21d');

            return {
                labels: [
                    "Data 1",
                    "Data 2",
                    "Data 3"
                ],
                datasets: [{
                    data: [30, 30, 40],
                    backgroundColor: [
                        theme_g1,
                        theme_g2,
                        "#ff5252"
                    ],
                    hoverBackgroundColor: [
                        theme_g1,
                        theme_g2,
                        "#ff5252"
                    ]
                }]
            }
        };

        return (
            <Doughnut
                data={data}
                responsive={true}
                height={300}
                options={{
                    maintainAspectRatio: false
                }}
            />
        );
    }
}

export default DoughnutChart;
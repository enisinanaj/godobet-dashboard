import React from 'react';
import {Radar} from 'react-chartjs-2';

class RadarAreaChart3 extends React.Component {

    render() {
        const data = (canvas) => {
            let bar = canvas.getContext('2d');
            let theme_g1 = bar.createLinearGradient(0, 0, 350, 0);
            theme_g1.addColorStop(0, '#4680ff');
            theme_g1.addColorStop(1, '#4680ff');
            let theme_g2 = bar.createLinearGradient(0, 0, 350, 0);
            theme_g2.addColorStop(0, '#11c15b');
            theme_g2.addColorStop(1, '#11c15b');

            return {
                labels: [0, 1, 2, 3, 4, 5, 6],
                datasets: [{
                    label: "D1",
                    data: [60, 60, 45, 80, 60, 80, 45],
                    fill: true,
                    borderWidth: 2,
                    borderColor: theme_g1,
                    backgroundColor: "transparent",
                    hoverborderColor: theme_g1,
                    hoverBackgroundColor: "transparent",
                }, {
                    label: "D2",
                    data: [40, 80, 40, 65, 60, 50, 95],
                    fill: true,
                    cubicInterpolationMode: 'monotone',
                    borderWidth: 2,
                    borderColor: "#0e9e4a",
                    backgroundColor: "transparent",
                    hoverborderColor: "#0e9e4a",
                    hoverBackgroundColor: "transparent",
                }, {
                    label: "D3",
                    data: [20, 40, 80, 60, 85, 60, 20],
                    fill: true,
                    borderWidth: 2,
                    borderColor: theme_g2,
                    backgroundColor: "transparent",
                    hoverborderColor: theme_g2,
                    hoverBackgroundColor: "transparent",
                }]
            }
        };

        return (
            <Radar
                data={data}
                responsive={true}
                height={300}
                options={{
                    barValueSpacing: 20,
                    maintainAspectRatio: false
                }}
            />
        );
    }
}

export default RadarAreaChart3;
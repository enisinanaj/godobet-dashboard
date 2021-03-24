export default {
    type: 'area',
    height: 145,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        colors: ["#9ccc65"],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.8,
                opacityTo: 0.4,
                stops: [0, 90, 100]
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        yaxis: {
            min: 0,
            max: 100,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function(seriesName) {
                        return '$'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        name: 'series1',
        data: [40, 60, 35, 55, 35, 75, 50]
    }]
}
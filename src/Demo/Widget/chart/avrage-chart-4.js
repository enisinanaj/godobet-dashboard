export default {
    type: 'area',
    height: 145,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#FFF'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0.4,
                stops: [0, 100]
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
            theme: 'dark',
            fixed: {
                enabled: false
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: (seriesName) => '$'
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        name: 'series1',
        data: [65, 45, 60, 40, 80]
    }]
}
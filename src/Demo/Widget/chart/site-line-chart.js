export default {
    type: 'line',
    height: 150,
    options: {
        chart: {
            sparkline: {
                enabled: true
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 3,
        },
        yaxis: {
            min: 100
        },
        colors: ['#4680ff'],
    },
    series: [{
        data: [135, 187, 180, 222, 185, 195, 158]
    }]
}
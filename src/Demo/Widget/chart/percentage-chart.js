export default {
    height: 120,
    type: 'bar',
    options: {
        chart: {
            sparkline: {
                enabled: true
            },
        },
        colors: ['#4680ff', '#0e9e4a', '#ff5252'],
        plotOptions: {
            bar: {
                columnWidth: '55%',
                distributed: true
            }
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 0
        },
        xaxis: {
            categories: ['Desktop', 'Tablet', 'Mobile'],
        }
    },
    series: [{
        name: 'Requests',
        data: [66.6, 29.7, 32.8]
    }]
}
export default {
    height: 310,
    type: 'bar',
    options: {
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#0e9e4a', '#ff5252'],
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        },
        yaxis: {
            title: {
                text: 'Totale'
            }
        },
        fill: {
            opacity: 1

        },
        tooltip: {
            y: {
                formatter: (val) => '$ ' + val + ' thousands'
            }
        }
    },
    series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63]
    }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52]
    }]
}
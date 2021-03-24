export default {
    height: 205,
    type: 'donut',
    options: {
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '65%'
                }
            }
        },
        labels: ['Desktop Computers', 'Smartphones', 'Tablets'],
        legend: {
            show: false
        },
        colors: ['#ff5252', '#ffa21d', '#00acc1'],
    },
    series: [76.7, 15, 30]
}
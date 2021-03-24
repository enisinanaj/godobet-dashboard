export default {
    height: 250,
    type: 'donut',
    options: {
        dataLabels: {
            enabled: true,
            dropShadow: {
                enabled: false,
            }
        },
        colors: ['#4680ff', '#0e9e4a', '#00acc1', '#ffa21d', '#ff5252', '#7759de'],
        labels: ['Facebook ads', 'Amazon ads', 'Youtube videos', 'Google adsense', 'Twitter ads', 'News ads'],
        legend: {
            show: true,
            position: 'bottom',
        }
    },
    series: [85.7, 77.56, 20.9, 10.9, 15.8, 86.7]
}
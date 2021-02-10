export default {
    height: 225,
    type: 'line',
    options: {
        chart: {
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 3,
            curve: 'straight',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        colors: ['#0e9e4a'],
        grid: {
            row: {
                colors: ['#f3f6ff', 'transparent'],
                opacity: 0.5
            }
        },
    },
    series: [{
        name: 'Hour.',
        data: [10, 41, 35, 51, 49, 52, 58, 71, 89]
    }]
}
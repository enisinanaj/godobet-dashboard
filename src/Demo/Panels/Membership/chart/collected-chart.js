export default {
    height: 200,
    type: 'line',
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 3,
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ['1/11/2019', '2/11/2019', '3/11/2019', '4/11/2019', '5/11/2019', '6/11/2019', '7/11/2019'],
        },
        colors: ['#448aff', '#9ccc65'],
        fill: {
            type: 'solid',
        },
        markers: {
            size: 5,
            colors: ['#448aff', '#9ccc65'],
            opacity: 0.9,
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        },
        grid: {
            borderColor: '#e2e5e885',
        },
        yaxis: {
            min: 10,
            max: 70,
        }
    },
    series: [{
        name: 'Sales',
        data: [20, 50, 30, 60, 30, 50, 40]
    }, {
        name: 'Amount',
        data: [40, 20, 50, 15, 40, 65, 20]
    }]
}
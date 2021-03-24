export default {
    height: 350,
    type: 'bar',
    options: {
        plotOptions: {
            bar: {
                horizontal: true,
                dataLabels: {
                    position: 'top',
                },
            }
        },
        colors: ['#4680ff', '#0e9e4a', '#ff5252'],
        dataLabels: {
            enabled: false,
            offsetX: -6,
            style: {
                fontSize: '12px',
                colors: ['#fff']
            }
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
        },
        xaxis: {
            categories: [2001, 2002, 2003, 2004, 2005],
        },
    },
    series: [{
        name: 'India',
        data: [44, 55, 41, 64, 22]
    }, {
        name: 'Japan',
        data: [53, 32, 33, 52, 13]
    }, {
        name: 'London',
        data: [44, 33, 52, 13, 22]
    }]
}
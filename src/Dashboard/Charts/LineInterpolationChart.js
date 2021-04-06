import React from "react";
import Chart from "react-apexcharts";

class LineInterpolationChart extends React.Component {
  render() {
    // console.log(Math.max(this.props.data));
    const data = () => {
      return {
          type: 'area',
          height: "600px",
          options: {
              chart: {
                  sparkline: {
                      enabled: false
                  }
              },
              dataLabels: {
                  enabled: true
              },
              colors: ['#9ccc65'],
              stroke: {
                  curve: 'smooth',
                  width: 2,
              },
              tooltip: {
                  fixed: {
                      enabled: false
                  },
                  x: {
                      show: false
                  },
                  y: {
                      title: {
                          formatter: (seriesName) => 'Profitto'
                      }
                  },
                  marker: {
                      show: false
                  }
              },
              yaxis: {
                show: true,
                axisTicks: {
                    show: true,
                    borderType: 'solid',
                    color: '#78909C',
                    width: 6,
                    offsetX: 0,
                    offsetY: 0
                },
                showAlways: true,
                showForNullSeries: true,
                tickAmount: this.props.data.length - 1,
                min: Math.min(...(this.props.data.map(el => el.y))),
                max: Math.max(...(this.props.data.map(el => el.y))),
                title: {
                    text: 'Profitto %',
                    rotate: -90,
                    offsetX: 0,
                    offsetY: 0,
                }
              },
              scales: {
                x: {
                    type: 'time',
                    time: {
                        displayFormats: {
                            quarter: 'DD MMM YYYY'
                        }
                    }
                }
              }
          },
          series: [{
              data: this.props.data
          }]
      }
    };

    return (
      <Chart {...data()} />
    );
  }
}

export default LineInterpolationChart;

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
              maintainAspectRatio: false,
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
                  width: 1,
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
                },
                yAxes: [{
                    ticks: {
                      beginAtZero: true //make sure zero line exists on the graph
                    }
                  }]
              }
          },
            plugins: [{
                beforeRender: function(graph) {
                let gradient = graph.ctx.createLinearGradient(0, 0, 0, graph.height),         //create a gradient for the background
                    zero_line = graph.scales[`y-axis-0`].getPixelForValue(0) / graph.height;  //calculate where the zero line is plotted on the graph

                gradient.addColorStop(0, `rgba(0,200,0,.2)`);         //good color faded out
                gradient.addColorStop(zero_line, `rgba(0,200,0,.8)`); //good color at zero line
                gradient.addColorStop(zero_line, `rgba(200,0,0,.8)`); //bad color at zero line
                gradient.addColorStop(1, `rgba(200,0,0,.2)`);         //bad color faded out

                graph.data.datasets[0]._meta[0].$filler.el._model.backgroundColor = gradient; //set the graphs background to the gradient we just made
                }
            }],
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

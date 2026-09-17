import clsx from "clsx";
import React, { type FunctionComponent } from "react";
import ReactApexChart from 'react-apexcharts'
import lodeChartData from "../../../data/lode-chart.json";

interface LodeProps {
  min365_random: number[],
  max365_random: number[],
  populate365_random: number[],
  all365_random: number[][],
  chart_data: any
}
const Lode: FunctionComponent<LodeProps> = ({ min365_random, max365_random, populate365_random, all365_random, chart_data }) => {

  return (
    <div className="p-4 gap-2 flex flex-col">
      <LodePage items={min365_random} type="min365"></LodePage>
      <LodePage items={populate365_random} type="populate365"></LodePage>
      <LodePage items={max365_random} type="max365"></LodePage>
      {all365_random.map((item, index) => <LodePage items={item} key={index} type="all365"></LodePage>)}
      <LodeChart data={chart_data}></LodeChart>
    </div>
  )
}

const LodePage = ({ items, type }: { items: number[]; type: 'min365' | 'max365' | 'populate365' | 'all365' }) => {

  if (!items.length) {
    return null;
  }

  return (
    <div className="grid grid-cols-10 gap-2">
      {items.map((item, index) => <div
        className={
          clsx(
            "p-2 flex justify-center items-center rounded-full font-bold text-lg",
            type === 'all365' ? 'bg-gray-400' : type === 'min365' ? 'bg-amber-400' : type === 'max365' ? 'bg-green-400' : 'bg-blue-400'
          )
        }
        key={index}
      >
        {item < 10 ? `0${item}` : item}
      </div>)}
    </div>
  )
}

const LodeChart = ({ data }: { data: any }) => {

  const [state, setState] = React.useState({
    series: data,
    options: {
      chart: {
        height: 380,
        type: 'heatmap',
      },
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          radius: 2,
          useFillColorAsStroke: false,
          colorScale: {
            // Continuous gradient legend replaces the default categorical legend.
            // The arrow tracks the hovered cell's value along the spectrum and
            // automatically reorients based on legend.position.
            gradientLegend: {
              enabled: true,
              width: '75%',
              thickness: 14,
              showHoverValue: true,
            },
          },
        },
      },
      colors: ['#090E3E'], // #ff0000 #000000 #0000ff
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
      },
      legend: {
        position: 'right',
      },
      title: {
        text: 'Tần suất xuất hiện của các con số trong 365 ngày gần nhất',
      },
      tooltip: {
        enabled: true,
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return '<div className="arrow_box">' +
            '<span style="font-weight: bold; font-size: 14px; padding: 8px">' + seriesIndex + '' + dataPointIndex + ': ' + series[seriesIndex][dataPointIndex] + '</span>' +
            '</div>'
        }
      },
    },
  })

  return (
    <div>
      <div id="chart" className="border-2 ">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="heatmap"
          height={380}
        />
      </div>
    </div>
  )
}

export default Lode;
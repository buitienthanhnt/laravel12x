import { Link } from '@inertiajs/react';
import clsx from 'clsx';
import Chart from 'react-apexcharts';
import { formatSliverData } from '@/helper/sliver';
import { formatCurrency } from '@/pages/amuaglobal/until/currency';

type SliverChartProps = {
  type: 'KG' | 'C' | 'L' | 'ounce';
  oneDayData: {
    Dates: string[];
    LastSellPrices: number[];
    LastBuyPrices: number[];
  };
  sevenDayData: {
    Dates: string[];
    LastSellPrices: number[];
    LastBuyPrices: number[];
  };
  thirtyDayData: {
    Dates: string[];
    LastSellPrices: number[];
    LastBuyPrices: number[];
  };
};

const SliverChart = ({ type = 'L', oneDayData, sevenDayData, thirtyDayData }: SliverChartProps) => {

  const sellData = formatSliverData(oneDayData.Dates, oneDayData.LastSellPrices);
  const buyData = formatSliverData(oneDayData.Dates, oneDayData.LastBuyPrices);

  const sell7Data = formatSliverData(sevenDayData.Dates, sevenDayData.LastSellPrices);
  const buy7Data = formatSliverData(sevenDayData.Dates, sevenDayData.LastBuyPrices);

  const sell30Data = formatSliverData(thirtyDayData.Dates, thirtyDayData.LastSellPrices);
  const buy30Data = formatSliverData(thirtyDayData.Dates, thirtyDayData.LastBuyPrices);

  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '8px', }} className='space-y-5'>
      <div className='flex gap-2 p-2 rounded-md justify-end'>
        <div className='flex space-x-10 flex-1'>
          {oneDayData?.LastBuyPrices && (
            <div className='text-md font-semibold'>
              Giá mua vào hiện tại: {oneDayData.LastBuyPrices.slice(-1)[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              <p className='font-semibold text-red-600 text-xl'>{formatCurrency(oneDayData.LastBuyPrices.slice(-1)[0], `vnđ/${type === 'KG' ? 'Kilogam' : type === 'C' ? 'Chî' : 'Lượng'}`)}</p>
            </div>
          )}
          {oneDayData?.LastSellPrices &&
            <div className='text-md font-semibold'>Giá bán ra hiện tại: {oneDayData.LastSellPrices.slice(-1)[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              <p className='font-semibold text-green-600 text-xl'>{formatCurrency(oneDayData.LastSellPrices.slice(-1)[0], `vnđ/${type === 'KG' ? 'Kilogam' : type === 'C' ? 'Chî' : 'Lượng'}`)}</p>
            </div>
          }
        </div>
        <Link href={'/sliver-chart'} data={{
          type: 'KG'
        }} className={
          clsx('bg-gray-400 rounded-md p-2 px-4 font-semibold text-xl flex items-center text-white', {
            '!bg-blue-400': type === 'KG'
          })
        }>Kg</Link>

        <Link href={'/sliver-chart'} data={{
          type: 'C'
        }} className={
          clsx('bg-gray-400 rounded-md p-2 px-4 font-semibold text-xl flex items-center text-white', {
            '!bg-blue-400': type === 'C'
          })}>Chỉ</Link>

        <Link href={'/sliver-chart'} data={{
          type: 'L'
        }} className={
          clsx('bg-gray-400 rounded-md p-2 px-4 font-semibold text-xl flex items-center text-white', {
            '!bg-blue-400': type === 'L'
          })}>Lượng</Link>
      </div>

      {sellData && buyData && <Chart
        options={{
          chart: {
            type: 'area', // Chuyển thành dạng đường thay vì area đổ màu
            height: 350,
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: true, // Trục Y tự động chỉnh tỷ lệ khớp với cả 2 đường khi zoom
              zoomedArea: {
                fill: {
                  color: '#90CAF9',
                  opacity: 0.4
                }
              }
            },
            toolbar: {
              autoSelected: 'zoom'
            }
          },
          colors: ['#008FFB', '#FF4560'], // Màu sắc riêng biệt cho từng đường
          stroke: {
            width: 3, // Độ dày của đường vẽ
            curve: 'smooth' // Làm mượt đường nối giữa các điểm (hoặc dùng 'straight')
          },
          dataLabels: {
            enabled: false
          },
          title: {
            text: `So sánh biến động giá bạc trong ngày(vnđ/${type === 'KG' ? 'Kilogam' : type === 'C' ? 'Chî' : 'Lượng'})`,
            align: 'left'
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.5,
              opacityTo: 1,
              stops: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 5000],
            },
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // Đổ màu nền xen kẽ cho các hàng lưới
              opacity: 0.5
            },
          },
          xaxis: {
            type: 'datetime', // Bắt buộc để sử dụng tính năng Timeseries
          },
          yaxis: {
            title: {
              text: ''
            }
          },
          tooltip: {
            shared: true, // Hiển thị thông số của cả 2 đường cùng lúc khi hover vào một mốc thời gian
            intersect: false,
            x: {
              format: 'dd/MM HH:mm'
            },
            y: {
              formatter: function (value: number) {
                return formatCurrency(value, 'vnđ'); // Sử dụng hàm formatCurrency để định dạng giá trị
              }
            }
          },
          legend: {
            position: 'top', // Hiển thị bảng chú thích ở phía trên biểu đồ
            horizontalAlign: 'right'
          }
        }}
        series={[
          {
            name: 'Giá Bán ra',
            data: sellData
          },
          {
            name: 'Giá Mua vào',
            data: buyData
          },
        ]}
        type="area"
        height={450}
      />}

      {sell7Data && buy7Data && <Chart
        options={{
          chart: {
            type: 'area', // Chuyển thành dạng đường thay vì area đổ màu
            height: 350,
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: true, // Trục Y tự động chỉnh tỷ lệ khớp với cả 2 đường khi zoom
              zoomedArea: {
                fill: {
                  color: '#90CAF9',
                  opacity: 0.4
                }
              }
            },
            toolbar: {
              autoSelected: 'zoom'
            }
          },
          colors: ['#bb3bdb', '#FF4560'], // Màu sắc riêng biệt cho từng đường
          stroke: {
            width: 3, // Độ dày của đường vẽ
            curve: 'smooth' // Làm mượt đường nối giữa các điểm (hoặc dùng 'straight')
          },
          dataLabels: {
            enabled: false
          },
          title: {
            text: `So sánh biến động giá bạc trong 7 ngày(vnđ/${type === 'KG' ? 'Kilogam' : type === 'C' ? 'Chî' : 'Lượng'})`,
            align: 'left'
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.5,
              opacityTo: 1,
              stops: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 5000],
            },
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // Đổ màu nền xen kẽ cho các hàng lưới
              opacity: 0.5
            },
          },
          xaxis: {
            type: 'datetime', // Bắt buộc để sử dụng tính năng Timeseries
          },
          yaxis: {
            title: {
              text: ''
            }
          },
          tooltip: {
            shared: true, // Hiển thị thông số của cả 2 đường cùng lúc khi hover vào một mốc thời gian
            intersect: false,
            x: {
              format: 'dd/MM HH:mm'
            },
            y: {
              formatter: function (value: number) {
                return formatCurrency(value, 'vnđ'); // Sử dụng hàm formatCurrency để định dạng giá trị
              }
            }
          },
          legend: {
            position: 'top', // Hiển thị bảng chú thích ở phía trên biểu đồ
            horizontalAlign: 'right'
          }
        }}
        series={[
          {
            name: 'Giá Bán ra',
            data: sell7Data
          },
          {
            name: 'Giá Mua vào',
            data: buy7Data
          },
        ]}
        type="area"
        height={450}
      />}

      {sell30Data && buy30Data && <Chart
        options={{
          chart: {
            type: 'area', // Chuyển thành dạng đường thay vì area đổ màu
            height: 350,
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: true, // Trục Y tự động chỉnh tỷ lệ khớp với cả 2 đường khi zoom
              zoomedArea: {
                fill: {
                  color: '#90CAF9',
                  opacity: 0.4
                }
              }
            },
            toolbar: {
              autoSelected: 'zoom'
            }
          },
          colors: ['#69cc4e', '#FF4560'], // Màu sắc riêng biệt cho từng đường
          stroke: {
            width: 3, // Độ dày của đường vẽ
            curve: 'smooth' // Làm mượt đường nối giữa các điểm (hoặc dùng 'straight')
          },
          dataLabels: {
            enabled: false
          },
          title: {
            text: `So sánh biến động giá bạc trong 30 ngày(vnđ/${type === 'KG' ? 'Kilogam' : type === 'C' ? 'Chî' : 'Lượng'})`,
            align: 'left'
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.5,
              opacityTo: 1,
              stops: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 5000],
            },
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // Đổ màu nền xen kẽ cho các hàng lưới
              opacity: 0.5
            },
          },
          xaxis: {
            type: 'datetime', // Bắt buộc để sử dụng tính năng Timeseries
          },
          tooltip: {
            shared: true, // Hiển thị thông số của cả 2 đường cùng lúc khi hover vào một mốc thời gian
            intersect: false,
            x: {
              format: 'dd/MM HH:mm'
            },
            y: {
              formatter: function (value: number) {
                return formatCurrency(value, 'vnđ'); // Sử dụng hàm formatCurrency để định dạng giá trị
              }
            }
          },
          legend: {
            position: 'top', // Hiển thị bảng chú thích ở phía trên biểu đồ
            horizontalAlign: 'right'
          }
        }}
        series={[
          {
            name: 'Giá Bán ra',
            data: sell30Data
          },
          {
            name: 'Giá Mua vào',
            data: buy30Data
          },
        ]}
        type="area"
        height={450}
      />}
    </div>
  );
};

export default SliverChart;
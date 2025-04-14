import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexPlotOptions,
  ApexFill,
  ApexLegend,
  NgApexchartsModule,ApexStroke
} from 'ng-apexcharts';

@Component({
  selector: 'app-vendor-chart-screen',
  imports: [NgApexchartsModule,],
  templateUrl: './vendor-chart-screen.component.html',
  styleUrl: './vendor-chart-screen.component.scss'
})
export class VendorChartScreenComponent {
  chartOptions: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    fill: ApexFill;
    legend: ApexLegend;
    
  };
  radialChartOptions: {
    series: number[];
    chart: ApexChart;
    plotOptions: ApexPlotOptions;
    fill: ApexFill;
    stroke: ApexStroke;
  };

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'High Risk',
          data: [10, 20, 15, 25, 22, 30, 35, 30, 28, 20, 18, 25]
        },
        {
          name: 'Medium Risk',
          data: [15, 25, 18, 30, 28, 35, 20, 25, 35, 28, 25, 20]
        },
        {
          name: 'Low Risk',
          data: [25, 35, 28, 40, 35, 40, 35, 50, 45, 38, 30, 40]
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          borderRadius: 5
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        title: {
          text: 'Month'
        }
      },
      yaxis: {
        title: {
          text: 'Security Rating'
        },
        max: 100
      },
      fill: {
        opacity: 1,
        colors: ['#6d28d9', '#8B4DF1', '#D3D3D3'] // Custom colors
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 10
      }
    };
    // Half Radial Chart (Vendors Monitored)
    this.radialChartOptions = {
      series: [80],
      chart: {
        type: 'radialBar',
        height: 250,
        offsetY: -20,
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#E5E7EB',
            strokeWidth: '100%',
            margin: 5
          },
          hollow: {
            size: '60%'
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              fontSize: '28px',
              fontWeight: 600,
              color: '#6D28D9',
              offsetY: 10
            }
          }
        }
      },
      fill: {
        colors: ['#6D28D9']
      },
      stroke: {
        lineCap: 'round' 
      }
    };
  }
}
import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  value1: number = 0;
  value2: number = 0;
  value3: number = 0;
  value4: number = 0;

  valueStnd1: number = 80;
  valueStnd2: number = 130;
  valueStnd3: number = 90;
  valueStnd4: number = 95;


  ngOnInit() {

  }

  constructor() { }

  formatLabel1(value: number) {
    this.valueStnd1 = value;

    return value + 'g';
  }
  formatLabel2(value: number) {
    this.valueStnd2 = value;

    return value;
  }
  formatLabel3(value: number) {
    this.valueStnd3 = value;
    let sign = value < 0 ?
      "-" :
      "";
    let absoluted = Math.abs(value);
    let min = Math.floor(absoluted);
    let sec = Math.floor(absoluted * 60) % 60;
    let timeInHours = sign +
      (min < 10 ? "0" : "") +
      min +
      ":" +
      (sec < 10 ? "0" : "") +
      sec;

    return timeInHours;
  }

  refreshData() {
    console.log('value1', this.value1, 'value2', this.value2, 'value3', this.value3, 'value4', this.value4);
    console.log('valueStnd1', this.value1, 'valueStnd2', this.value2, 'valueStnd3', this.value3, 'valueStnd4', this.valueStnd4);
    this.lineChartData[0].data = [
      this.valueStnd1-this.value1,
      this.valueStnd2-this.value2,
      this.valueStnd3-this.value3,
      this.valueStnd4-this.value4,
    ]
  }

  lineChartData: ChartDataSets[] = [
    {
      data: [
        this.valueStnd1,
        this.valueStnd2,
        this.valueStnd3,
        this.valueStnd4
      ],
      label: 'Blutzuckerspiegel'
    },
  ];

  lineChartLabels: Label[] = ['07:00', '08:00', '09:00', '10:00'];

  /*lineChartOptions = {
    responsive: true,
  };*/



  lineChartColors: Color[] = [
    {
      borderColor: 'red',
      backgroundColor: 'rgba(100, 300, 100,0.5)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 50,
        }
      }],
      yAxes: [{
        ticks: {
          min: 50,
          max: 250,
        }
      }]
    }
  };



  infoPressed() {
    console.log("Infobutton pressed");
  }
}

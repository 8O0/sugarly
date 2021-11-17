import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { logging } from 'selenium-webdriver';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  value1 = 0;
  value2 = 0;
  value3 = 0;
  ngOnInit() {
    
  }

  formatLabel1(value: number) {
    this.value1=value;

    return value;
  }
  formatLabel2(value: number) {
    this.value2=value;

    return value;
  }
  formatLabel3(value: number) {
    this.value3=value;

    return value;
  }

  refreshData() {
    console.log(this.value1,'\n',this.value2,'\n',this.value3);

    this.lineChartData[0].data =[
      this.value1 + 1,
      this.value2 + 10,
      this.value3 + 20/*,
      this.value2 + 1,
      this.value1 + 3*/
    ]
  }

  constructor() { }

  infoPressed() {
    console.log("Infobutton pressed");
    this.refreshData()
  }

  lineChartData: ChartDataSets[] = [
    {
      data: [
        1,
        3,
        2,
        1,
        3
      ],
      label: 'Bullshit'
    },
  ];

  lineChartLabels: Label[] = ['8:00', '12:00', '16:00', '20:00', '24:00'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'rgba(22, 16, 50)',
      backgroundColor: 'rgba(224, 109, 6,0.5)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

}

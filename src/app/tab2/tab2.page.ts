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
  value = 0;

  ngOnInit() {
    
  }

  formatLabel(value: number) {
    this.value=value;

    return value;
  }

  refreshData() {
    this.lineChartData[0].data =[
      this.value + 1,
      this.value + 3,
      this.value + 2,
      this.value + 1,
      this.value + 3
    ]
  }

  constructor() { }

  infoPressed() {
    console.log("Infobutton pressed");
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

import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  /** 
   * Sliderwerte 
   */
  carbohydrateSlider: number = 20;
  unitsSlider: number = 1;
  dailyActivity: number = 0;

  /** 
   * Standardwerte einer Normalkurve in mg/dl
   */
  valueStnd: number = 90;


  ngOnInit() {

  }

  constructor() { }

  /** 
   * Updated das Bubbleicon auf dem Slider und addiert die Einheit 'g' für Gramm hinzu 
   * @param  {Number} value Der Wert des Sliders
   * @return {String}       Der Wert des Sliders mit einem 'g'  
  */
  formatLabel1(value: number): string {
    return value + 'g';
  }

  /** 
   * Updated das Bubbleicon auf dem Slider 
   * @param  {Number} value Der Wert des Sliders
   * @return {Number}       Der Wert des Sliders
  */
  formatLabel2(value: number): number {
    return value;
  }

  /** 
   * Updated das Bubbleicon auf dem Slider und formatiert es in Minuten und Sekunden um
   * @param  {Number} value Der Wert des Sliders
   * @return {String}       Der Wert des Sliders im Format HH:mm
  */
  formatLabel3(value: number): string {
    let absoluted = Math.abs(value);
    let min = Math.floor(absoluted);
    let sec = Math.floor(absoluted * 60) % 60;

    // In den ternären Operatoren wird eine führende Null angefügt wenn der Wert nicht zweistellig ist 
    let timeInHours = (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;

    return timeInHours;
  }

  /** 
   * Überträgt jegliche Slidermanipulationen in das Chart
  */
  refreshData() {
    let cfCarbs = 2.5 // Correction Factor Carbohydrates. Der Faktor um eine Simulation zu ermöglichen
    let cfUnits = 2.9 // Correction Factor Carbohydrates. Der Faktor um eine Simulation zu ermöglichen
    let cfActivity = 15 // Correction Factor Carbohydrates. Der Faktor um eine Simulation zu ermöglichen

    let carbValue = this.carbohydrateSlider * cfCarbs
    let unitValue = this.unitsSlider * cfUnits
    let activityValue = this.dailyActivity * cfActivity

    let valuePerHour = carbValue - unitValue - activityValue

    console.log("ValPerHour", valuePerHour)
    console.log("KH:", carbValue)
    console.log("Units:", unitValue)
    console.log("DailyActivity:", activityValue)

    // Initialisiert und berechnet die 5 Punkte auf dem Chart.
    // Die Werte sind logisch gewählt um eine zeitliche Beeinflussung zu simulieren
    this.lineChartData[0].data = [
      (valuePerHour * 0.2) + this.valueStnd,
      (valuePerHour * 1.2) + this.valueStnd,
      (valuePerHour * 0.8) + this.valueStnd,
      (valuePerHour * -0.2) + this.valueStnd,
      (valuePerHour * -0.1) + this.valueStnd,
      (valuePerHour * 0.1) + this.valueStnd,
    ]
  }

  // initialisiert den Chart beim ersten Anwählen des Moduls
  // Die Werte sind anhand einer normalen Kurve gewählt
  lineChartData: ChartDataSets[] = [
    {
      data: [
        100,
        150,
        128,
        80,
        85,
        94
      ],
      label: 'Blutzuckerspiegel'
    },
  ]

  lineChartLabels: Label[] = ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00']

  lineChartColors: Color[] = [
    {
      borderColor: 'rgba(22, 16, 50,0.7)',
      backgroundColor: 'rgba(255, 196, 9,0.7)',
    },
  ]

  lineChartLegend = true
  lineChartPlugins = []
  lineChartType = 'line'

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
  }

  /**
   * Öffnet den Infodialog
   */
  infoPressed() {
    console.log("Infobutton pressed")
  }
}

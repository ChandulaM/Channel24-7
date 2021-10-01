import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-reportdelivery',
  templateUrl: './reportdelivery.component.html',
  styleUrls: ['./reportdelivery.component.css']
})
export class ReportdeliveryComponent implements OnInit {

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Delivered'], ['On Pending']];
  public pieChartData: SingleDataSet = [300, 500];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    let delivered = 0;
    let onPending = 0;

    axios
      .get('http://localhost:8081/result/all')
      .then((res) => {
        res.data.forEach((element: { delivery: boolean; }) => {
          if(element.delivery == true){
            delivered++;
          }else{
            onPending++;
          }
        });
      })
      .catch((err) => console.log(err));








      
      delivered = Math.ceil(Math.random() * 10000);
      onPending = Math.ceil(Math.random() * 10000);
      this.pieChartData = [delivered, onPending];

      
  }

}

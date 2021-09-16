import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-report-generation',
  templateUrl: './report-generation.component.html',
  styleUrls: ['./report-generation.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ReportGenerationComponent implements OnInit {
  faReport = faFile;
  locations = ['Kandy', 'Colombo', 'Matale', 'Gampaha', 'Jaffna'];
  hospitals = [
    'Kandy General Hospital',
    'Peradeniya General Hospital',
    'Suwasewana Hospital',
    'Amaya Hospital',
    'Swastha Lanka',
    'Asiri Kandy',
  ];
  selectedHospital: any;
  totalDoctors: number = 666;
  selectedDoctors: number = 69;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
    },
  };
  public pieChartLabels: Label[] = ['Ear', 'Eye', 'Mouth'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {}

  ngOnInit(): void {}

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2
          ? []
          : this.hospitals
              .filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    );
}

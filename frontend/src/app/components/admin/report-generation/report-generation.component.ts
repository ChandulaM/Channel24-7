import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';
import { HospitalServiceService } from 'src/app/services/hospital-service.service';
import { Hospital } from 'src/app/models/Hospital';

@Component({
  selector: 'app-report-generation',
  templateUrl: './report-generation.component.html',
  styleUrls: ['./report-generation.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ReportGenerationComponent implements OnInit {
  faReport = faFile;
  locations = [];
  hospitals: any[] = [];
  hospitalNames: string[] = [];
  selectedHospital: any;
  totalDoctors: number = 0;
  selectedDoctors: number = 0;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
    },
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: [
        `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      ],
    },
  ];

  constructor(private hospitalService: HospitalServiceService) {}

  ngOnInit(): void {
    this.hospitalService.getHospitalLocations().subscribe((data) => {
      this.locations = data;
    });
    this.hospitalService.getDoctorSpecializationReport(4).subscribe((data) => {
      this.totalDoctors = data.totalDoctors;
    });
  }

  generateReportData(hospitalId: number) {
    this.hospitalService
      .getDoctorSpecializationReport(hospitalId)
      .subscribe((data) => {
        this.totalDoctors = data.totalDoctors;
        this.selectedDoctors = data.hospitalDoctors;
        data.specializations.forEach((special: any) => {
          const specialJSON = JSON.parse(special);
          this.pieChartLabels.push(specialJSON.specialization);
          this.pieChartData.push(specialJSON.count);
          this.generateRandomColors();
        });
      });
  }

  generateRandomColors() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.pieChartColors[0].backgroundColor.push(`#${randomColor}`);
  }

  onSelectCity(event: any) {
    const city = event.target.value;
    this.hospitalService.getHospitalsInCity(city).subscribe((data) => {
      this.hospitals = data;
      data.forEach((hospital) => {
        this.hospitalNames.push(hospital.hospitalName!);
      });
    });
  }

  getDoctors(event: any) {
    const hospitalName = event.item;
    this.hospitals.forEach((hospital) => {
      if (hospital.hospitalName == hospitalName) {
        this.generateReportData(hospital.hospitalId);
      }
    });
  }

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2
          ? []
          : this.hospitalNames
              .filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    );
}

import { Component, ElementRef, OnInit } from '@angular/core';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

@Component({
  selector: 'app-single-appointment',
  templateUrl: './single-appointment.component.html',
  styleUrls: ['./single-appointment.component.css']
})
export class SingleAppointmentComponent implements OnInit {

  public appointment: any;
  
  constructor() { }

  ngOnInit(): void {
    this.appointment = JSON.parse(localStorage.getItem("doc_appointment") || '{}')
    console.log(this.appointment)
  }

  generateAppointment(): void {
    let DATA: any = document.getElementById('appointment')
    html2canvas(DATA).then(canvas => {
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;
      
      var FILEURI: any = canvas.toDataURL('image/png')

      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
  
      PDF.save('angular-demo.pdf');

      })
  }

}

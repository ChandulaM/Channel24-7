import { Doctor } from "./Doctor";
import { Hospital } from "./Hospital";
import { Patient } from "./Patient";

export class PatientAppointment {
   refNo?: number;
   PatientDoctor?: Doctor;
   patientHospital?: Hospital;
   patient?: Patient;
   ticketNo?: String ;
   dateTime?: String ;
   status?: String ;
   payment?: String ;
}
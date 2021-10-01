import { Doctor } from "./Doctor";
import { PatientModel } from "./Patient";

export interface DoctorAppointment {
    appointment_id: number,
    appointment_request: string,
    appointment_date: string,
    ticket_no: number,
    payment: number,
    status: string,
    doctor: Doctor,
    patient: PatientModel
}

export interface DoctorAppointmentResults {
    totalItem: number,
    totalPages: number,
    currentPage: number,
    results: Array<DoctorAppointment>
}

export interface SingleDoctorAppointmentResult {
    results: DoctorAppointment
}
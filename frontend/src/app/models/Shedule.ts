import { Doctor } from "./Doctor";

export interface Shedule {
    sheduleTime: Date,
    doctor: Doctor
}

export interface SheduleList {
    results: Array<Shedule>
}

export interface SheduleDTO {
    sheduleTime: string,
    doctor_id: number
}
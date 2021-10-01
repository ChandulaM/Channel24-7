import { Hospital } from "./Hospital";
import { Specialization } from "./Specialization";

export interface Doctor {
    doc_id: number,
    name: string,
    number: string,
    image: string,
    specialization: Specialization,
    hospital: Hospital
}

export interface DoctorDTO {
    name: string,
    number: string,
    image: string,
    specialization_id: number,
    hospital_id: number,
    description: string
}

export interface SingleDoctor {
    results: Doctor
}

export class DoctorModel {
    constructor(
        public name: string,
        public number: string,
        public image: string,
        public specialization: string,
        public hospital: string,
        public email: string,
        public description: string
    ) {}

}
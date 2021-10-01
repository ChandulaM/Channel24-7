import { HospitalData } from "./Hospital";
import { User } from "./User";

export interface HospitalManagerDTO {
    fname: string,
    lname: string,
    hospital_id: number,
    user_id: number
}

export interface HospitalManager {
    fnamae: string,
    lname: string,
    hospital: HospitalData,
    user: User
}

export interface HospitalManagerResult {
    results: HospitalManager
}
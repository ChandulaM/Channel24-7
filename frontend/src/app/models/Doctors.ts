import { Doctor } from "./Doctor";

export interface Doctors {
    totalItem: number,
    totalPages: number,
    currentPage: number,
    results: Array<Doctor>
}
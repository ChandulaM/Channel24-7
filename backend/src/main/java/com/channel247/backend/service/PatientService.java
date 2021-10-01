package com.channel247.backend.service;

import com.channel247.backend.exceptions.ResourceNotFoundException;
import com.channel247.backend.model.LabAppointments;
import com.channel247.backend.model.Patient;
import com.channel247.backend.model.PatientAppointments;
import com.channel247.backend.repository.LabAppointmentRepo;
import com.channel247.backend.repository.PatientAppointmentRepo;
import com.channel247.backend.repository.PatientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PatientService {
    private final PatientRepo patientRepo;
    private final PatientAppointmentRepo appointmentRepo;
    private final LabAppointmentRepo labAppointmentRepo;

    @Autowired
    public PatientService(PatientRepo patientRepo, PatientAppointmentRepo appointmentRepo, LabAppointmentRepo labAppointmentRepo) {
        this.patientRepo = patientRepo;
        this.appointmentRepo = appointmentRepo;
        this.labAppointmentRepo = labAppointmentRepo;
    }

    public Patient addPatient(Patient patient){

        return patientRepo.save(patient);
    }

    public List<Patient> findAllPatients(){
        return patientRepo.findAll();
    }

    public PatientAppointments findAppointment(Long ref) {
        return appointmentRepo.findPatientAppointmentsByRef(ref);
    }

    public Patient findPatientById(Long id){
        return patientRepo.findPatientByPatientId(id).orElseThrow(()->new ResourceNotFoundException("Patient by id" + id+ " was not found"));
    }

    public Patient updatePatient(Patient patient){
        return patientRepo.save(patient);
    }

    public void deletePatient(Long id){
         patientRepo.deletePatientByPatientId(id);
    }

    public Patient login(Patient patient) {
        return patientRepo.findByEmail(patient.getEmail());
    }



    public PatientAppointments addAppointment(PatientAppointments appointments){
        return appointmentRepo.save(appointments);
    }

    public LabAppointments addLabAppointment(LabAppointments appointments){
        return labAppointmentRepo.save(appointments);
    }

}

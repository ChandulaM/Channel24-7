package com.channel247.backend.service;

import com.channel247.backend.exceptions.ResourceNotFoundException;
import com.channel247.backend.model.Patient;
import com.channel247.backend.repository.PatientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PatientService {
    private final PatientRepo patientRepo;

    @Autowired
    public PatientService(PatientRepo patientRepo) {
        this.patientRepo = patientRepo;
    }

    public Patient addPatient(Patient patient){

        return patientRepo.save(patient);
    }

    public List<Patient> findAllPatients(){
        return patientRepo.findAll();
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
}

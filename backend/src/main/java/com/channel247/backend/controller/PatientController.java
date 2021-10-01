package com.channel247.backend.controller;

import com.channel247.backend.model.*;
import com.channel247.backend.repository.PatientRepo;
import com.channel247.backend.service.PatientService;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/api/patients")
public class PatientController {
    private final PatientService patientService;


    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Patient>> getAllPatients(){
        List<Patient> patients = patientService.findAllPatients();
        return new ResponseEntity<>(patients, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable("id") Long id){
        Patient patient = patientService.findPatientById(id);
        return new ResponseEntity<>(patient, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addPatient(@RequestBody Patient patient){
        Patient newPatient = patientService.addPatient(patient);
        return new ResponseEntity<>(newPatient, HttpStatus.CREATED);
    }

    @PostMapping("/add_appointment")
    public ResponseEntity<?> addAppointment(@RequestBody PatientAppointments appointments){
        PatientAppointments newAppointment = patientService.addAppointment(appointments);
        return new ResponseEntity<>(newAppointment, HttpStatus.CREATED);
    }

    @GetMapping("/get_appointment/{ref}")
    public ResponseEntity<PatientAppointments> getAppointment(@PathVariable("ref") Long ref){
        PatientAppointments appointments = patientService.findAppointment(ref);
        return new ResponseEntity<>(appointments, HttpStatus.OK);
    }

    @PostMapping("/add_lab_appointment")
    public ResponseEntity<?> addLabAppointment(@RequestBody LabAppointments appointments){
        LabAppointments newAppointment = patientService.addLabAppointment(appointments);
        return new ResponseEntity<>(newAppointment, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Patient> updatePatient(@RequestBody Patient patient){
        Patient updatePatient = patientService.updatePatient(patient);
        return new ResponseEntity<>(updatePatient, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePatient(@PathVariable("id") Long id){
        patientService.deletePatient(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login (@RequestBody Patient patient){
        Patient newPatient = patientService.login(patient);
        if(newPatient == null && !patient.getPassword().equals(newPatient.getPassword())){
            return new ResponseEntity<>("Invalid credentials", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(newPatient, HttpStatus.OK);
    }


}

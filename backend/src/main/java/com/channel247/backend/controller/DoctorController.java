package com.channel247.backend.controller;

import com.channel247.backend.model.Doctor;
import com.channel247.backend.model.DoctorDTO;
import com.channel247.backend.model.Hospital;
import com.channel247.backend.model.Specialization;
import com.channel247.backend.service.DoctorService;
import com.channel247.backend.service.HospitalServices;
import com.channel247.backend.service.SpecizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
//pramitha IT19056326
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/doctor")
public class DoctorController {


    @Autowired
    DoctorService service;

    @Autowired
    SpecizationService specizationService;

    @Autowired
    HospitalServices hospitalServices;

    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> saveDoctor(@RequestBody @Autowired DoctorDTO doctorDTO) {
        try{
            Doctor doctor = new Doctor();
            doctor.setName(doctorDTO.getName());
            doctor.setImage(doctorDTO.getImage());
            doctor.setNumber(doctorDTO.getNumber());
            doctor.setDescription(doctorDTO.getDescription());

            System.out.println(doctorDTO);
            Hospital hospital = hospitalServices.getHospitalById(doctorDTO.getHospital_id());
            doctor.setHospital(hospital);
            Specialization specialization = specizationService.getSpecializationById(doctorDTO.getSpecialization_id());
            doctor.setSpecialization(specialization);

            Doctor savedDoc = service.saveOrUpdateDoctor(doctor);
            HashMap<String, Object> response = new HashMap<>();
            response.put("saved", savedDoc);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/all")
    public ResponseEntity<Map<String,Object>> getAllDoctors(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String filterBy
            ) {

        try{

            Page<Doctor> filteredDoctors;

            if(filterBy==null) {
                filteredDoctors = service.getAllDoctors(page, size);
            }else {

                Specialization specialization = specizationService.getSpecializationByName(filterBy);

                if(specialization==null) {
                    HashMap<String, Object> response = new HashMap<>();
                    response.put("results", new ArrayList<>());
                    return new ResponseEntity<>(response,HttpStatus.OK);
                }

                filteredDoctors = service.getAllDoctorsBySpecialization(page, size, specialization);
            }

            HashMap<String, Object> response = new HashMap<>();
            response.put("results",filteredDoctors.getContent());
            response.put("totalItem", filteredDoctors.getTotalElements());
            response.put("totalPages", filteredDoctors.getTotalPages());
            response.put("currentPage", filteredDoctors.getNumber());

            return new ResponseEntity<>(response, HttpStatus.OK);

        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getDoctorById(
            @PathVariable Long id
    ) {
        try {

            Doctor doctor = service.getDoctorById(id);

            HashMap<String, Object> response = new HashMap<>();

            if(doctor==null) {
                response.put("results", null);
            }else {
                response.put("results", doctor);
            }

            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Map<String, Object>> updateDoctor(@RequestBody @Autowired DoctorDTO doctor, @PathVariable Long id) {
        try {

            Doctor getDoctor = service.getDoctorById(id);
            if(getDoctor==null) {
                return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
            }else {

                getDoctor.setName(doctor.getName());
                getDoctor.setNumber(doctor.getNumber());
                getDoctor.setImage(doctor.getImage());

                Specialization specialization = specizationService.getSpecializationById(doctor.getSpecialization_id());
                getDoctor.setSpecialization(specialization);
                Hospital hospital = hospitalServices.getHospitalById(doctor.getHospital_id());
                getDoctor.setHospital(hospital);
                getDoctor.setDescription(doctor.getDescription());

                Doctor updatedDoctor = service.saveOrUpdateDoctor(getDoctor);

                HashMap<String, Object> response = new HashMap<>();
                response.put("results", updatedDoctor);

                return new ResponseEntity<>(response, HttpStatus.OK);

            }


        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

package com.channel247.backend.controller;

import com.channel247.backend.model.Hospital;
import com.channel247.backend.service.HospitalServices;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/hospitals")
public class HospitalController {

    private HospitalServices hospitalServices;

    public HospitalController(HospitalServices hospitalServices) {
        this.hospitalServices = hospitalServices;
    }

    @GetMapping("/get-all")
    public ResponseEntity<List<Hospital>> getAllHospitals(
            @RequestParam(defaultValue = "0") Integer pageNo,
            @RequestParam(defaultValue = "6") Integer pageSize
    ){
        List<Hospital> hospitalList = hospitalServices.getAllHospitals(pageNo, pageSize);
        return new ResponseEntity<>(hospitalList, HttpStatus.OK);
    }

    @GetMapping("/registered")
    public ResponseEntity<List<Hospital>> getAllRegisteredHospitals() {
        List<Hospital> registeredHospitals = hospitalServices.getAllRegisteredHospitals();
        return new ResponseEntity<>(registeredHospitals, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<Hospital> registerHospital(@RequestBody Hospital hospital) {
        Hospital newHospital = hospitalServices.addOrUpdateHospital(hospital);
        return new ResponseEntity<>(newHospital, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Hospital> getHospitalById(@PathVariable Long id) {
        Hospital hospital = hospitalServices.getHospitalById(id);
        return new ResponseEntity<>(hospital, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Hospital> updateHospitalInfo(@RequestBody Hospital hospital) {
        Hospital updatedHospital = hospitalServices.addOrUpdateHospital(hospital);
        return  new ResponseEntity<>(updatedHospital, HttpStatus.OK);
    }

    @PutMapping("/remove/{id}")
    public ResponseEntity<Hospital> removeHospital(@PathVariable Long id) {
        Hospital updatedHospital = hospitalServices.removeHospital(id);
        return new ResponseEntity<>(updatedHospital, HttpStatus.OK);
    }
}

package com.channel247.backend.controller;

import com.channel247.backend.model.Doctor;
import com.channel247.backend.model.Shedule;
import com.channel247.backend.model.SheduleDTO;
import com.channel247.backend.service.DoctorService;
import com.channel247.backend.service.SheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/doctor/shedule")
public class SheduleController {

    @Autowired
    SheduleService sheduleService;

    @Autowired
    DoctorService doctorService;

    @PostMapping("/save")
    public ResponseEntity<Map<String,Object>> saveShedule(@RequestBody @Autowired SheduleDTO sheduleDTO, @RequestParam(defaultValue = "false") Boolean status) {

        try{

            Shedule shedule = new Shedule();
            shedule.setSheduleTime(sheduleDTO.getSheduleTime());

            Doctor doctor = doctorService.getDoctorById(sheduleDTO.getDoctor_id());

            shedule.setDoctor(doctor);

            shedule.setStatus(status);

            Shedule savedShedule =  sheduleService.saveOrUpdateShedule(shedule);

            HashMap<String, Object> response = new HashMap<>();
            response.put("saved", savedShedule);

            return new ResponseEntity<>(response, HttpStatus.CREATED);

        }catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/all")
    public ResponseEntity<Map<String, Object>> getShedules(
            @RequestParam(required = false) Long docId
    ) {
        try{

            List<Shedule> sheduleList;

            if(docId==null) {
                sheduleList = sheduleService.getAllShedules();
            }else {
                Doctor doctor = doctorService.getDoctorById(docId);
                if(doctor==null) {
                    sheduleList = new ArrayList<>();
                }else {
                    sheduleList = sheduleService.getShedulesByDoctor(doctor);
                }
            }

            HashMap<String,Object> response = new HashMap<>();
            response.put("results", sheduleList);

            return new ResponseEntity<>(response, HttpStatus.OK);

        }catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

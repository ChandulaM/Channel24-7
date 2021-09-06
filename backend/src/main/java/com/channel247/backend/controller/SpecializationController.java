package com.channel247.backend.controller;

import com.channel247.backend.model.Specialization;
import com.channel247.backend.service.SpecizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/specialization")
public class SpecializationController {

    @Autowired
    private SpecizationService service;

    @GetMapping("/all")
    public ResponseEntity<Map<String, Object>> getAllSpecializations() {
        try{

            List<Specialization> specializationList = service.getAllSpecializations();

            Map<String, Object> response = new HashMap<>();
            response.put("result", specializationList);
            return new ResponseEntity<>(response, HttpStatus.OK);


        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

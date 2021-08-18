package com.channel247.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/hospitalmanager")
public class HospitalManagerController {

    @GetMapping("/hello")
    public String startHospitalManager() {
        return "hellomanager";
    }



}
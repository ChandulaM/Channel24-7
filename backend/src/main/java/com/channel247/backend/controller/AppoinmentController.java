package com.channel247.backend.controller;

import com.channel247.backend.model.Appoinment;
import com.channel247.backend.model.LabAssistant;
import com.channel247.backend.repository.AppoinmentRepository;
import com.channel247.backend.repository.LabAssistantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appoinment/")
public class AppoinmentController {
    @Autowired
    private AppoinmentRepository appoinmentRepository;

    @PostMapping("/add")
    public boolean addAppoinment(@RequestBody Appoinment appoinment){
        appoinmentRepository.save(appoinment);
        return true;
    }

    @GetMapping("/all")
    public List<Appoinment> viewAllAppoinemnts(){
        return appoinmentRepository.findAll();
    }
}

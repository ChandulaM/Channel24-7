package com.channel247.backend.controller;

import com.channel247.backend.model.Labtest;
import com.channel247.backend.repository.LabTestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/labtest/")
public class LabTestController {

    @Autowired
    private LabTestRepository labTestRepository;

    @PostMapping("/add")
    public boolean add(@RequestBody Labtest labtest){
        labTestRepository.save(labtest);
        return true;
    }
}

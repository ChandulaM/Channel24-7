package com.channel247.backend.controller;

import com.channel247.backend.model.Labtest;
import com.channel247.backend.model.Result;
import com.channel247.backend.repository.LabTestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @PostMapping("/update")
    public boolean update(@RequestBody Labtest labtest){
        labTestRepository.save(labtest);
        return true;
    }

    @GetMapping("/all")
    public List<Labtest> getAllResults(){
        return labTestRepository.findAll();
    }
}

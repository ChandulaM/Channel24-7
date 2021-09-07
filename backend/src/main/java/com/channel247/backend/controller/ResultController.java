package com.channel247.backend.controller;

import com.channel247.backend.model.Result;
import com.channel247.backend.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/result/")
public class ResultController {
    @Autowired
    private ResultRepository resultRepository;

    @PostMapping("/add")
    public boolean add(@RequestBody Result result){
        resultRepository.save(result);
        return true;
    }

    @GetMapping("/all")
    public List<Result> getAllResults(){
        return resultRepository.findAll();
    }

}

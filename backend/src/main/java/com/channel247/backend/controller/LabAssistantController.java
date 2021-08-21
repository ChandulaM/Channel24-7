package com.channel247.backend.controller;

import com.channel247.backend.model.LabAssistant;
import com.channel247.backend.repository.LabAssistantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/lab/assistant/")
public class LabAssistantController {

    @Autowired
    private LabAssistantRepository labAssistantRepository;

    @PostMapping("/signup")
    public boolean signUp(@RequestBody LabAssistant labAssistant){
        labAssistantRepository.save(labAssistant);
        return true;
    }
}

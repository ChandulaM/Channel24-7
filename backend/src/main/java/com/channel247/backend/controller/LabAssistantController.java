package com.channel247.backend.controller;

import com.channel247.backend.model.LabAssistant;
import com.channel247.backend.model.Login;
import com.channel247.backend.repository.LabAssistantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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

    @PostMapping("/login")
    public String login(@RequestBody Login login){
        try{
            String email = login.getEmail();
            String password = login.getPassword();
            List<LabAssistant> all = labAssistantRepository.findAll();

            List<LabAssistant> labAssistantStream = all.stream().filter(labdata -> labdata.getEmail().equals(email)).collect(Collectors.toList());
            if(labAssistantStream.get(0).getPassword().equals(password)){
                return "login success";
            }else{
                return "Invalid credentials";
            }
        }catch (Exception e){
            return "Invalid credentials";
        }
    }
}

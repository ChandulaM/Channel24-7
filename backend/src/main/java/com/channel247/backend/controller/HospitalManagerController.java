package com.channel247.backend.controller;

import com.channel247.backend.model.Hospital;
import com.channel247.backend.model.HospitalManager;
import com.channel247.backend.model.HospitalManagerDTO;
import com.channel247.backend.model.User;
import com.channel247.backend.service.HospitalManagerService;
import com.channel247.backend.service.HospitalServices;
import com.channel247.backend.service.UserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/hospitalmanager")
public class HospitalManagerController {

    @Autowired
    private HospitalManagerService hospitalManagerService;

    @Autowired
    private HospitalServices hospitalServices;

    @Autowired
    private UserService userService;

    @GetMapping("/hello")
    public String startHospitalManager() {
        return "hellomanager";
    }

    @GetMapping("/all")
    public ResponseEntity<Map<String, Object>> getHospitalManagers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        try{

            Page<HospitalManager> managerPage = hospitalManagerService.getAllHospitalManagers(page, size);

            Map<String, Object> response = new HashMap<>();
            response.put("results", managerPage.getContent());
            response.put("totalItem", managerPage.getTotalElements());
            response.put("totalPages", managerPage.getTotalPages());
            response.put("currentPage", managerPage.getNumber());

            return new ResponseEntity<>(response, HttpStatus.OK);

        }catch(Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> saveHospitalManager(@RequestBody @Autowired HospitalManagerDTO hospitalManagerDTO) {
        try{
            HospitalManager hospitalManager = new HospitalManager();
            hospitalManager.setFname(hospitalManagerDTO.getFname());
            hospitalManager.setLname(hospitalManagerDTO.getLname());
            hospitalManager.setStatus(hospitalManagerDTO.getStatus());

            Hospital hospital = hospitalServices.getHospitalById(hospitalManagerDTO.getHospital_id());
            hospitalManager.setHospital(hospital);

            User user = userService.getUserById(hospitalManagerDTO.getUser_id());
            hospitalManager.setUser(user);

            HospitalManager savedManager = hospitalManagerService.saveHospitalManager(hospitalManager);

            Map<String, Object> response = new HashMap<>();
            response.put("saved", savedManager);

            return new ResponseEntity<>(response, HttpStatus.CREATED);

        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

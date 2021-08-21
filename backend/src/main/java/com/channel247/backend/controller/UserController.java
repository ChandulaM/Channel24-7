package com.channel247.backend.controller;

import com.channel247.backend.model.User;
import com.channel247.backend.model.UserDTO;
import com.channel247.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {


    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> saveUser(@RequestBody @Autowired UserDTO userDTO) {
        try {

            User user = new User();
            user.setUsername(userDTO.getUsername());
            user.setPassword(userDTO.getPassword());
            user.setRole(userDTO.getRole());

            User savedUser = userService.saveUser(user);

            Map<String, Object> response = new HashMap<>();
            response.put("results", savedUser);

            return new ResponseEntity<>(response, HttpStatus.CREATED);

        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

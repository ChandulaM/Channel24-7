package com.channel247.backend.controller;

import com.channel247.backend.model.User;
import com.channel247.backend.model.UserDTO;
import com.channel247.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
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

    @GetMapping("/login")
    public ResponseEntity<Map<String, Object>> findUserByUsernameAndPassword(
            @RequestParam String username,
            @RequestParam String password
    ) {
        try {

            User user = userService.findUserByUsernameAndPassword(username, password);

            Map<String, Object> response = new HashMap<>();

            if(user==null) {
                response.put("results", null);
            }else {
                response.put("results", user);
            }

            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/check")
    public ResponseEntity<Map<String, Object>> checkIsUsernameAvailable(@RequestParam String username) {
        try{

            boolean result = userService.isUserAvailable(username);
            Map<String, Object> response = new HashMap<>();
            response.put("result", result);

            return new ResponseEntity<>(response, HttpStatus.OK);

        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

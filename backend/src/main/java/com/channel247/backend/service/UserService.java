package com.channel247.backend.service;

import com.channel247.backend.exceptions.ResourceNotFoundException;
import com.channel247.backend.model.User;
import com.channel247.backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public User saveUser(User user) {
        User savedUser = userRepo.save(user);
        return user;
    }

    public User getUserById(Long id){
        return userRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("User not found with id of "+id));
    }

}

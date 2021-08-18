package com.channel247.backend.service;

import com.channel247.backend.exceptions.ResourceNotFoundException;
import com.channel247.backend.model.Specialization;
import com.channel247.backend.repository.SpecializationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpecizationService {

    @Autowired
    SpecializationRepo specializationRepo;

    public Specialization saveOrUpdateSpecialization(Specialization specialization) {
        return specializationRepo.save(specialization);
    }

    public List<Specialization> getAllSpecializations() {
        return specializationRepo.findAll();
    }

    public Specialization getSpecializationById(int id) {
        return specializationRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Specialization not found with id of "+id));
    }

    public void deleteSpecialization(int id) {
        Specialization specialization = specializationRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Specialization not found with id of "+id));
        specializationRepo.delete(specialization);
    }

    public Specialization getSpecializationByName(String name) {
        return specializationRepo.findSpecializationByName(name);
    }

}

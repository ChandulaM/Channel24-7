package com.channel247.backend.service;

import com.channel247.backend.exceptions.ResourceNotFoundException;
import com.channel247.backend.model.Hospital;
import com.channel247.backend.repository.HospitalRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class HospitalServices {

    private HospitalRepo hospitalRepo;

    @Autowired
    public HospitalServices(HospitalRepo hospitalRepo) {
        this.hospitalRepo = hospitalRepo;
    }

    public Hospital addNewHospital(Hospital hospital) {
        return hospitalRepo.save(hospital);
    }

    public List<Hospital> getAllHospitals(Integer pageNo, Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.by("hospitalName"));
        Page<Hospital> pagedHospitals = hospitalRepo.findAll(pageable);

        if (pagedHospitals.hasContent()) return pagedHospitals.getContent();
        else return new ArrayList<>();
    }

    public Hospital getHospitalById(Long id){
        return hospitalRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Hospital with id " + id + " was not found."));
    }
}

package com.channel247.backend.service;

import com.channel247.backend.exceptions.ResourceNotFoundException;
import com.channel247.backend.model.Doctor;
import com.channel247.backend.model.Specialization;
import com.channel247.backend.repository.DoctorRepo;
import com.channel247.backend.repository.SpecializationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.print.Doc;
import java.util.ArrayList;
import java.util.List;

@Service
public class DoctorService {

    @Autowired
    DoctorRepo repo;


    public Doctor saveOrUpdateDoctor(Doctor doctor) {
        Doctor savedDoc = repo.save(doctor);
        return savedDoc;
    }

    public Page<Doctor> getAllDoctors(int pageNo, int pageSize) {

        Pageable pageable = PageRequest.of(pageNo, pageSize);
        Page<Doctor> doctorPage = repo.findAll(pageable);

        return doctorPage;
    }

    public Page<Doctor> getAllDoctorsBySpecialization(int pageNo, int pageSize, Specialization specialization) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        Page<Doctor> page = repo.findBySpecialization(specialization,pageable);

        return page;
    }

    public Doctor getDoctorById(Long id) {

        return repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Doctor not found"));

    }

    public void deleteDoctor(Long id) {

        Doctor doctor =repo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Doctor not found with id of: "+id));

        repo.delete(doctor);

    }


}

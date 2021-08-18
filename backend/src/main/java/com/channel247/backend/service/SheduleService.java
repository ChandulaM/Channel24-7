package com.channel247.backend.service;

import com.channel247.backend.exceptions.ResourceNotFoundException;
import com.channel247.backend.model.Doctor;
import com.channel247.backend.model.Shedule;
import com.channel247.backend.repository.SheduleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SheduleService {

    @Autowired
    SheduleRepo sheduleRepo;

    public Shedule saveOrUpdateShedule(Shedule shedule) {

        return sheduleRepo.save(shedule);

    }

    public List<Shedule> getAllShedules() {

        return sheduleRepo.findAll();

    }

    public Shedule getSheduleById(int id) {

        return sheduleRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Shedule not found with id of "+id));

    }

    public  List<Shedule> getShedulesByDoctor(Doctor doctor) {
        return sheduleRepo.findSheduleByDoctor(doctor);
    }

    public void deleteShedule(int id) {
        Shedule shedule = sheduleRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Shedule not found with id of "+id));
        sheduleRepo.delete(shedule);
    }
}

package com.channel247.backend.repository;

import com.channel247.backend.model.Doctor;
import com.channel247.backend.model.Shedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SheduleRepo extends JpaRepository<Shedule, Integer> {
    List<Shedule> findSheduleByDoctor(Doctor doctor);
}

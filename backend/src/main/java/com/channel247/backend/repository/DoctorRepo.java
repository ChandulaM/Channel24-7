package com.channel247.backend.repository;

import com.channel247.backend.model.Doctor;
import com.channel247.backend.model.Specialization;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepo extends JpaRepository<Doctor, Long> {

    Page<Doctor> findBySpecialization(Specialization specialization, Pageable pageable);

}

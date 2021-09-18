package com.channel247.backend.repository;

import com.channel247.backend.model.Doctor;
import com.channel247.backend.model.Hospital;
import com.channel247.backend.model.Specialization;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DoctorRepo extends JpaRepository<Doctor, Long> {

    Page<Doctor> findBySpecialization(Specialization specialization, Pageable pageable);

    List<Doctor> findDoctorsByHospital(Hospital hospital);

    List<Doctor> findDoctorsBySpecialization(Specialization specialization);
}

package com.channel247.backend.repository;

import com.channel247.backend.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PatientRepo extends JpaRepository<Patient, Long> {
    void deletePatientByPatientId(Long id);
    Optional<Patient> findPatientByPatientId(Long id);
}

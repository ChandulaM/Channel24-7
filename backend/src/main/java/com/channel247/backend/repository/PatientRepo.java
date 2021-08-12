package com.channel247.backend.repository;

import com.channel247.backend.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepo extends JpaRepository<Patient, String> {
}

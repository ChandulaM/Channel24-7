package com.channel247.backend.repository;

import com.channel247.backend.model.HospitalManager;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HospitalManagerRepo extends JpaRepository<HospitalManager, Long> {
}

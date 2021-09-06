package com.channel247.backend.repository;

import com.channel247.backend.model.Hospital;
import com.channel247.backend.model.HospitalManager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface HospitalManagerRepo extends JpaRepository<HospitalManager, Long> {

    boolean existsHospitalManagerByHospital(Hospital hospital);

    List<HospitalManager> findByStatus(@Param("status") String status);

}

package com.channel247.backend.repository;

import com.channel247.backend.model.Hospital;
import com.channel247.backend.model.HospitalManager;
import com.channel247.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface HospitalManagerRepo extends JpaRepository<HospitalManager, Long> {

    boolean existsHospitalManagerByHospital(Hospital hospital);

    List<HospitalManager> findByStatus(@Param("status") String status);

    HospitalManager findByUser(User user);
}

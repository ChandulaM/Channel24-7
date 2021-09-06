package com.channel247.backend.repository;

import com.channel247.backend.model.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HospitalRepo extends JpaRepository<Hospital, Long> {

    List<Hospital> findHospitalByStatusOrderByHospitalName(@Param("status") String status);
}

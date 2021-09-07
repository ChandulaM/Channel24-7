package com.channel247.backend.repository;

import com.channel247.backend.model.Labtest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LabTestRepository extends JpaRepository<Labtest, Integer> {

}

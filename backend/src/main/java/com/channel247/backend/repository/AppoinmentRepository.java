package com.channel247.backend.repository;

import com.channel247.backend.model.Appoinment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppoinmentRepository extends JpaRepository<Appoinment, Integer> {
}

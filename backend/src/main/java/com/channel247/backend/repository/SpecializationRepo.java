package com.channel247.backend.repository;

import com.channel247.backend.model.Specialization;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpecializationRepo extends JpaRepository<Specialization, Integer> {

    Specialization findSpecializationByName(String name);

}

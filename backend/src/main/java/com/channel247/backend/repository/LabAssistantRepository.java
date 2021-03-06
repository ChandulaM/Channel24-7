package com.channel247.backend.repository;

import com.channel247.backend.model.LabAssistant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LabAssistantRepository extends JpaRepository<LabAssistant, Integer> {

}

package com.channel247.backend.repository;


import com.channel247.backend.model.LabAppointments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LabAppointmentRepo extends JpaRepository<LabAppointments, Long> {
}

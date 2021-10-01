package com.channel247.backend.repository;

import com.channel247.backend.model.DoctorAppointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorAppointmentRepo extends JpaRepository<DoctorAppointment, Long> {
}

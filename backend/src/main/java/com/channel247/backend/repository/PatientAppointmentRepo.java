package com.channel247.backend.repository;
import com.channel247.backend.model.Patient;
import com.channel247.backend.model.PatientAppointments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientAppointmentRepo extends JpaRepository<PatientAppointments, Long> {
     PatientAppointments findPatientAppointmentsByRef(Long ref);
}

package com.channel247.backend.service;

import com.channel247.backend.exceptions.ResourceNotFoundException;
import com.channel247.backend.model.DoctorAppointment;
import com.channel247.backend.repository.DoctorAppointmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.print.Doc;

@Service
public class DoctorAppointmentService {

    @Autowired
    DoctorAppointmentRepo repo;

    public Page<DoctorAppointment> getAllAppointments(int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        Page<DoctorAppointment> doctorAppointmentPage = repo.findAll(pageable);
        return doctorAppointmentPage;
    }

    public DoctorAppointment getAppointmentById(Long appointment_id) {
        return repo.findById(appointment_id).orElseThrow(()-> new ResourceNotFoundException("appointment cannot found"));
    }

    public void deleteAppointment(DoctorAppointment doctorAppointment) {
        repo.delete(doctorAppointment);
    }
}

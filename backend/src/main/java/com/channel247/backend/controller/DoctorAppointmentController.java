package com.channel247.backend.controller;

import com.channel247.backend.model.DoctorAppointment;
import com.channel247.backend.service.DoctorAppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/doctor_appointments")
public class DoctorAppointmentController {

    @Autowired
    DoctorAppointmentService service;

    @GetMapping("/all")
    public ResponseEntity<Map<String, Object>> getAllAppointments(
            @RequestParam(defaultValue = "0") int pageNo,
            @RequestParam(defaultValue = "10") int pageSize
    ) {
        try{

            Page<DoctorAppointment> doctorAppointmentPage = service.getAllAppointments(pageNo, pageSize);

            HashMap<String, Object> response = new HashMap<>();
            response.put("results", doctorAppointmentPage.getContent());
            response.put("totalItem", doctorAppointmentPage.getTotalElements());
            response.put("totalPages", doctorAppointmentPage.getTotalPages());
            response.put("currentPage", doctorAppointmentPage.getNumber());

            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getAppointmentById(
            @PathVariable Long id
    ) {
        try {

            DoctorAppointment appointment = service.getAppointmentById(id);

            HashMap<String, Object> response = new HashMap<>();

            if(appointment==null) {
                response.put("results", null);
            }else {
                response.put("results", appointment);
            }

            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Object>> deleteAppointment(
            @PathVariable Long id
    ) {
        try {

            DoctorAppointment findAppointment = service.getAppointmentById(id);
            HashMap<String, Object> response = new HashMap<>();

            if(findAppointment==null) {
                response.put("results", null);
            } else {
                service.deleteAppointment(findAppointment);
                response.put("results", findAppointment);
            }

            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}

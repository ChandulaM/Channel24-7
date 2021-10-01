package com.channel247.backend.model;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
public class DoctorAppointment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long appointment_id;

    private String appointment_request;

    @CreatedDate
    @DateTimeFormat(style = "yyyy-MM-dd")
    private Date appointment_date;

    @Column(unique = true)
    private Long ticket_no;

    private Double payment;

    private String status;

    @ManyToOne
    private Doctor doctor;

    @ManyToOne
    private Patient patient;

    public Date getAppointment_date() {
        return appointment_date;
    }

    public void setAppointment_date(Date appointment_date) {
        this.appointment_date = appointment_date;
    }

    public Long getTicket_no() {
        return ticket_no;
    }

    public void setTicket_no(Long ticket_no) {
        this.ticket_no = ticket_no;
    }

    public Double getPayment() {
        return payment;
    }

    public void setPayment(Double payment) {
        this.payment = payment;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Long getAppointment_id() {
        return appointment_id;
    }

    public void setAppointment_id(Long appointment_id) {
        this.appointment_id = appointment_id;
    }

    public String getAppointment_request() {
        return appointment_request;
    }

    public void setAppointment_request(String appointment_request) {
        this.appointment_request = appointment_request;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }
}

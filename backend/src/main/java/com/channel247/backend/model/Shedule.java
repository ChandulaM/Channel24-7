package com.channel247.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Shedule {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int shedule_id;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date sheduleTime;

    @ManyToOne
    private Doctor doctor;

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public int getShedule_id() {
        return shedule_id;
    }

    public void setShedule_id(int shedule_id) {
        this.shedule_id = shedule_id;
    }

    public Date getSheduleTime() {
        return sheduleTime;
    }

    public void setSheduleTime(Date sheduleTime) {
        this.sheduleTime = sheduleTime;
    }

    @Override
    public String toString() {
        return "Shedule{" +
                "shedule_id=" + shedule_id +
                ", sheduleTime=" + sheduleTime +
                ", doctor=" + doctor +
                '}';
    }
}

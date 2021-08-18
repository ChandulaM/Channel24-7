package com.channel247.backend.model;

import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class SheduleDTO {

    private Date sheduleTime;
    private Long doctor_id;

    public Date getSheduleTime() {
        return sheduleTime;
    }

    public void setSheduleTime(Date sheduleTime) {
        this.sheduleTime = sheduleTime;
    }

    public Long getDoctor_id() {
        return doctor_id;
    }

    public void setDoctor_id(Long doctor_id) {
        this.doctor_id = doctor_id;
    }

    @Override
    public String toString() {
        return "SheduleDTO{" +
                "sheduleTime=" + sheduleTime +
                ", doctor_id=" + doctor_id +
                '}';
    }
}

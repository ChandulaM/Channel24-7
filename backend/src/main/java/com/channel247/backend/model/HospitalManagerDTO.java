package com.channel247.backend.model;

import org.springframework.stereotype.Component;

@Component
public class HospitalManagerDTO {

    private String fname;
    private String lname;
    private String status;
    private Long hospital_id;
    private Long user_id;

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Long getHospital_id() {
        return hospital_id;
    }

    public void setHospital_id(Long hospital_id) {
        this.hospital_id = hospital_id;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    @Override
    public String toString() {
        return "HospitalManagerDTO{" +
                "fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", status='" + status + '\'' +
                ", hospital_id=" + hospital_id +
                ", user_id=" + user_id +
                '}';
    }
}

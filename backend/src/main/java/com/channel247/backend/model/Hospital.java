package com.channel247.backend.model;

import javax.persistence.*;
import java.util.List;
//pramitha IT19056326
@Entity
public class Hospital {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hospital_id", nullable = false)
    private Long hospitalId;

    private String hospitalName;
    private String hospitalAddress;
    private String city;
    private String status;
    private String contactNo;
    private String email;
    private String hospitalRegNo;

    @OneToMany(mappedBy = "hospital")
    private List<Doctor> doctors;

    @OneToOne(mappedBy = "hospital")
    private HospitalManager hospitalManager;

    public void setDoctors(List<Doctor> doctors) {
        this.doctors = doctors;
    }

    public String getContactNo() {
        return contactNo;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHospitalRegNo() {
        return hospitalRegNo;
    }

    public void setHospitalRegNo(String hospitalRegNo) {
        this.hospitalRegNo = hospitalRegNo;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getHospitalName() {
        return hospitalName;
    }

    public void setHospitalName(String hospitalName) {
        this.hospitalName = hospitalName;
    }

    public String getHospitalAddress() {
        return hospitalAddress;
    }

    public void setHospitalAddress(String hospitalAddress) {
        this.hospitalAddress = hospitalAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Long getHospitalId() {
        return hospitalId;
    }

    public void setHospitalId(Long hospitalId) {
        this.hospitalId = hospitalId;
    }

    @Override
    public String toString() {
        return "Hospital{" +
                "hospitalId=" + hospitalId +
                ", hospitalName='" + hospitalName + '\'' +
                ", hospitalAddress='" + hospitalAddress + '\'' +
                ", city='" + city + '\'' +
                ", status='" + status + '\'' +
                ", contactNo='" + contactNo + '\'' +
                ", email='" + email + '\'' +
                ", hospitalRegNo='" + hospitalRegNo + '\'' +
                '}';
    }
}

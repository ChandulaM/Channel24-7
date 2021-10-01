package com.channel247.backend.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long doc_id;

    private String name;
    private String number;
    private String image;

    @ManyToOne
    private Specialization specialization;

    @ManyToOne
    private Hospital hospital;

    private String description;

    @OneToMany(mappedBy = "doctor")
    private List<Shedule> shedule;

    @OneToMany(mappedBy = "doctor")
    private  List<DoctorAppointment> doctorAppointmentList;

    public Long getDoc_id() {
        return doc_id;
    }

    public void setDoc_id(Long doc_id) {
        this.doc_id = doc_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Specialization getSpecialization() {
        return specialization;
    }

    public void setSpecialization(Specialization specialization) {
        this.specialization = specialization;
    }

    public Hospital getHospital() {
        return hospital;
    }

    public void setHospital(Hospital hospital) {
        this.hospital = hospital;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public void setShedule(List<Shedule> shedule) {
        this.shedule = shedule;
    }

    @Override
    public String toString() {
        return "Doctor{" +
                "doc_id=" + doc_id +
                ", name='" + name + '\'' +
                ", number='" + number + '\'' +
                ", image='" + image + '\'' +
                ", specialization=" + specialization +
                ", hospital=" + hospital +
                ", description='" + description + '\'' +
                '}';
    }
}



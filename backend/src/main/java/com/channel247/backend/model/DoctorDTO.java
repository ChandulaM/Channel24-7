package com.channel247.backend.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DoctorDTO {

    private String name;
    private String number;
    private String image;
    private String description;
    private Long hospital_id;
    private int specialization_id;

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getHospital_id() {
        return hospital_id;
    }

    public void setHospital_id(Long hospital_id) {
        this.hospital_id = hospital_id;
    }

    public int getSpecialization_id() {
        return specialization_id;
    }

    public void setSpecialization_id(int specialization_id) {
        this.specialization_id = specialization_id;
    }

    @Override
    public String toString() {
        return "DoctorDTO{" +
                "name='" + name + '\'' +
                ", number='" + number + '\'' +
                ", image='" + image + '\'' +
                ", description='" + description + '\'' +
                ", hospital_id=" + hospital_id +
                ", specialization_id=" + specialization_id +
                '}';
    }
}

package com.channel247.backend.model;

import com.sun.istack.NotNull;

import javax.persistence.*;
import javax.print.Doc;
import java.util.List;

@Entity
public class Specialization {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int specialization_id;

    @NotNull
    private String name;

    @OneToMany(mappedBy = "specialization")
    private List<Doctor> doctor;


    public void setDoctor(List<Doctor> doctor) {
        this.doctor = doctor;
    }

    public int getSpecialization_id() {
        return specialization_id;
    }

    public void setSpecialization_id(int specialization_id) {
        this.specialization_id = specialization_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Specialization{" +
                "specialization_id=" + specialization_id +
                ", name='" + name + '\'' +
                '}';
    }
}

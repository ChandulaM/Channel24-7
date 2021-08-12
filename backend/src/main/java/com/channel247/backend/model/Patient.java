package com.channel247.backend.model;

import javax.persistence.*;

@Entity
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "patient_id", nullable = false)
    private String patientId;

    private String pTitle;
    private String pFirstName;
    private String pLastName;
    private String pNic;
    private String pPhone;
    private String pEmail;
    private String pDateOfBirth;
    private String pPassword;

    public Patient(String patientId, String pTitle, String pFirstName, String pLastName, String pNic, String pPhone, String pEmail, String pDateOfBirth, String pPassword) {
        this.patientId = patientId;
        this.pTitle = pTitle;
        this.pFirstName = pFirstName;
        this.pLastName = pLastName;
        this.pNic = pNic;
        this.pPhone = pPhone;
        this.pEmail = pEmail;
        this.pDateOfBirth = pDateOfBirth;
        this.pPassword = pPassword;
    }

    public Patient(String pTitle, String pFirstName, String pLastName, String pNic, String pPhone, String pEmail, String pDateOfBirth, String pPassword) {
        this.pTitle = pTitle;
        this.pFirstName = pFirstName;
        this.pLastName = pLastName;
        this.pNic = pNic;
        this.pPhone = pPhone;
        this.pEmail = pEmail;
        this.pDateOfBirth = pDateOfBirth;
        this.pPassword = pPassword;
    }

    public String getPatientId() {
        return patientId;
    }

    public void setPatientId(String patientId) {
        this.patientId = patientId;
    }

    public String getpTitle() {
        return pTitle;
    }

    public void setpTitle(String pTitle) {
        this.pTitle = pTitle;
    }

    public String getpFirstName() {
        return pFirstName;
    }

    public void setpFirstName(String pFirstName) {
        this.pFirstName = pFirstName;
    }

    public String getpLastName() {
        return pLastName;
    }

    public void setpLastName(String pLastName) {
        this.pLastName = pLastName;
    }

    public String getpNic() {
        return pNic;
    }

    public void setpNic(String pNic) {
        this.pNic = pNic;
    }

    public String getpPhone() {
        return pPhone;
    }

    public void setpPhone(String pPhone) {
        this.pPhone = pPhone;
    }

    public String getpEmail() {
        return pEmail;
    }

    public void setpEmail(String pEmail) {
        this.pEmail = pEmail;
    }

    public String getpDateOfBirth() {
        return pDateOfBirth;
    }

    public void setpDateOfBirth(String pDateOfBirth) {
        this.pDateOfBirth = pDateOfBirth;
    }

    public String getpPassword() {
        return pPassword;
    }

    public void setpPassword(String pPassword) {
        this.pPassword = pPassword;
    }

    @Override
    public String toString() {
        return "Patient{" +
                "patientId='" + patientId + '\'' +
                ", pTitle='" + pTitle + '\'' +
                ", pFirstName='" + pFirstName + '\'' +
                ", pLastName='" + pLastName + '\'' +
                ", pNic='" + pNic + '\'' +
                ", pPhone='" + pPhone + '\'' +
                ", pEmail='" + pEmail + '\'' +
                ", pDateOfBirth='" + pDateOfBirth + '\'' +
                ", pPassword='" + pPassword + '\'' +
                '}';
    }
}

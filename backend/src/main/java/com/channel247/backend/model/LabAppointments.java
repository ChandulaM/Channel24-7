package com.channel247.backend.model;

import javax.persistence.*;

@Entity
public class LabAppointments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "test_id", nullable = false)
    private Long testId;

    private String test;
    private String hospital;
    private Long patientId;
    private Long ref;
    private String price;
    private String title;
    private String name;
    private String nic;
    private String phone;
    private String date;
    private String hosFee;
    private String onlineFee;
    private String total;

    public LabAppointments() {
    }

    public LabAppointments(Long testId, String test, String hospital, Long patientId, Long ref, String price, String title, String name, String nic, String phone, String date, String hosFee, String onlineFee, String total) {
        this.testId = testId;
        this.test = test;
        this.hospital = hospital;
        this.patientId = patientId;
        this.ref = ref;
        this.price = price;
        this.title = title;
        this.name = name;
        this.nic = nic;
        this.phone = phone;
        this.date = date;
        this.hosFee = hosFee;
        this.onlineFee = onlineFee;
        this.total = total;
    }

    public Long getTestId() {
        return testId;
    }

    public void setTestId(Long testId) {
        this.testId = testId;
    }

    public String getTest() {
        return test;
    }

    public void setTest(String test) {
        this.test = test;
    }

    public String getHospital() {
        return hospital;
    }

    public void setHospital(String hospital) {
        this.hospital = hospital;
    }

    public Long getPatientId() {
        return patientId;
    }

    public void setPatientId(Long patientId) {
        this.patientId = patientId;
    }

    public Long getRef() {
        return ref;
    }

    public void setRef(Long ref) {
        this.ref = ref;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getHosFee() {
        return hosFee;
    }

    public void setHosFee(String hosFee) {
        this.hosFee = hosFee;
    }

    public String getOnlineFee() {
        return onlineFee;
    }

    public void setOnlineFee(String onlineFee) {
        this.onlineFee = onlineFee;
    }

    public String getTotal() {
        return total;
    }

    public void setTotal(String total) {
        this.total = total;
    }

    @Override
    public String toString() {
        return "LabAppointments{" +
                "testId=" + testId +
                ", test='" + test + '\'' +
                ", hospital='" + hospital + '\'' +
                ", patientId=" + patientId +
                ", ref=" + ref +
                ", price='" + price + '\'' +
                ", title='" + title + '\'' +
                ", name='" + name + '\'' +
                ", nic='" + nic + '\'' +
                ", phone='" + phone + '\'' +
                ", date='" + date + '\'' +
                ", hosFee='" + hosFee + '\'' +
                ", onlineFee='" + onlineFee + '\'' +
                ", total='" + total + '\'' +
                '}';
    }
}

package com.channel247.backend.model;

import javax.persistence.*;

@Entity
public class PatientAppointments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "appointment_id", nullable = false)
    private Long appointmentId;

    private String doc;
    private String hospital;
    private Long patientId;
    private Long ref;
    private String pay;
    private String title;
    private String name;
    private String nic;
    private String phone;
    private String date;
    private String hosFee;
    private String onlineFee;
    private String total;
    private String spec;
    private String time;
    private String ap;
    private String bookedDate ;

    public PatientAppointments() {
    }

    public PatientAppointments(Long appointmentId, String doc, String hospital, Long patientId , Long ref, String pay, String title, String name, String nic, String phone, String date, String hosFee, String onlineFee, String total, String spec, String time, String ap, String bookedDate) {
        this.appointmentId = appointmentId;
        this.doc = doc;
        this.hospital = hospital;
        this.patientId = patientId;
        this.ref = ref;
        this.pay = pay;
        this.title = title;
        this.name = name;
        this.nic = nic;
        this.phone = phone;
        this.date = date;
        this.hosFee = hosFee;
        this.onlineFee = onlineFee;
        this.total = total;
        this.spec = spec;
        this.time = time;
        this.ap = ap;
        this.bookedDate = bookedDate;
    }


    public Long getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(Long appointmentId) {
        this.appointmentId = appointmentId;
    }

    public String getDoc() {
        return doc;
    }

    public void setDoc(String doc) {
        this.doc = doc;
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

    public String getPay() {
        return pay;
    }

    public void setPay(String pay) {
        this.pay = pay;
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

    public String getSpec() {
        return spec;
    }

    public void setSpec(String spec) {
        this.spec = spec;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getAp() {
        return ap;
    }

    public void setAp(String ap) {
        this.ap = ap;
    }

    public String getBookedDate() {
        return bookedDate;
    }

    public void setBookedDate(String bookedDate) {
        this.bookedDate = bookedDate;
    }

    @Override
    public String toString() {
        return "PatientAppointments{" +
                "appointmentId=" + appointmentId +
                ", doc='" + doc + '\'' +
                ", hospital='" + hospital + '\'' +
                ", patientId=" + patientId +
                ", ref=" + ref +
                ", pay='" + pay + '\'' +
                ", title='" + title + '\'' +
                ", name='" + name + '\'' +
                ", nic='" + nic + '\'' +
                ", phone='" + phone + '\'' +
                ", date='" + date + '\'' +
                ", hosFee='" + hosFee + '\'' +
                ", onlineFee='" + onlineFee + '\'' +
                ", total='" + total + '\'' +
                ", spec='" + spec + '\'' +
                ", time='" + time + '\'' +
                ", ap='" + ap + '\'' +
                ", bookedDate='" + bookedDate + '\'' +
                '}';
    }
}

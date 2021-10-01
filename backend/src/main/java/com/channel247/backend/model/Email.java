package com.channel247.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Email {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String receiver;
    private String title;
    private String subject;
    private String details;

    public Email() {
    }

    public Email(int id, String receiver, String title, String subject, String details) {
        this.id = id;
        this.receiver = receiver;
        this.title = title;
        this.subject = subject;
        this.details = details;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    @Override
    public String toString() {
        return "Email{" +
                "id=" + id +
                ", receiver='" + receiver + '\'' +
                ", title='" + title + '\'' +
                ", subject='" + subject + '\'' +
                ", details='" + details + '\'' +
                '}';
    }
}

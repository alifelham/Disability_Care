package com.example.healthcare.model;

import java.util.Date;

public class Appointments {
    private Long AID;
    private Long HID;
    private Long DID;
    private Long PID;
    private String time;
    private String link;
    private Date date;

    public Appointments(Date date, Long AID, Long HID, Long DID, Long PID, String time, String link) {
        this.AID = AID;
        this.HID = HID;
        this.DID = DID;
        this.PID = PID;
        this.time = time;
        this.link = link;
        this.date = date;
    }

    public Appointments(){}

    public Long getAID() {
        return AID;
    }

    public void setAID(Long AID) {
        this.AID = AID;
    }

    public Long getHID() {
        return HID;
    }

    public void setHID(Long HID) {
        this.HID = HID;
    }

    public Long getDID() {
        return DID;
    }

    public void setDID(Long DID) {
        this.DID = DID;
    }

    public Long getPID() {
        return PID;
    }

    public void setPID(Long PID) {
        this.PID = PID;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Appointments{" +
                "AID=" + AID +
                ", HID=" + HID +
                ", DID=" + DID +
                ", PID=" + PID +
                ", time='" + time + '\'' +
                ", link='" + link + '\'' +
                ", date=" + date +
                '}';
    }
}

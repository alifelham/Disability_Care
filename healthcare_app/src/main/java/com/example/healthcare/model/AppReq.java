package com.example.healthcare.model;

import java.util.Date;

public class AppReq {
    private Long ID;
    private Long PID;
    private Long HID;
    private Date date;
    private String field;

    public AppReq(Long HID, Long ID, Date date, String field, Long PID) {
        this.ID = ID;
        this.date = date;
        this.field = field;
        this.PID = PID;
        this.HID = HID;
    }

    public Long getHID() {
        return HID;
    }

    public void setHID(Long HID) {
        this.HID = HID;
    }

    AppReq(){}

    public Long getPID() {
        return PID;
    }

    public void setPID(Long PID) {
        this.PID = PID;
    }

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    @Override
    public String toString() {
        return "AppReq{" +
                "ID=" + ID +
                ", PID=" + PID +
                ", HID=" + HID +
                ", date=" + date +
                ", field='" + field + '\'' +
                '}';
    }
}

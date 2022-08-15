package com.example.healthcare.model;

public class AvailableDoc {
    private Long ID;
    private Long DID;
    private Long HID;
    private String name;
    private String date;
    private String start_time;
    private String end_time;
    private String field;

    public AvailableDoc(Long HID, String name, Long ID, Long DID, String date, String start_time, String end_time, String field) {
        this.DID = DID;
        this.date = date;
        this.start_time = start_time;
        this.end_time = end_time;
        this.field = field;
        this.ID = ID;
        this.name = name;
        this.HID = HID;
    }

    public Long getHID() {
        return HID;
    }

    public void setHID(Long HID) {
        this.HID = HID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public AvailableDoc(){}

    public Long getDID() {
        return DID;
    }

    public void setDID(Long DID) {
        this.DID = DID;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getStart_time() {
        return start_time;
    }

    public void setStart_time(String start_time) {
        this.start_time = start_time;
    }

    public String getEnd_time() {
        return end_time;
    }

    public void setEnd_time(String end_time) {
        this.end_time = end_time;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }
}

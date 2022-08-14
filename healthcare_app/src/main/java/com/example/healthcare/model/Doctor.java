package com.example.healthcare.model;

public class Doctor {
    private Long DID;
    private Long HID;
    private String name;
    private String email;
    private String phone;
    private String field;

    public Doctor(Long DID, Long HID, String name, String email, String phone, String field) {
        this.DID = DID;
        this.HID = HID;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.field = field;
    }

    public Doctor(){}

    public Long getDID() {
        return DID;
    }

    public void setDID(Long DID) {
        this.DID = DID;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }
}

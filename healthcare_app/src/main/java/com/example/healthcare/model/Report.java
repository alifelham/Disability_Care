package com.example.healthcare.model;

import java.util.ArrayList;
import java.util.Date;

public class Report {
    private int PID;
    private String Link;
    private String Name;
    private Date date;

    public Report(int PID, String link, String name, Date date) {
        this.PID = PID;
        this.Link = link;
        this.Name = name;
        this.date = date;
    }

    public Report(){

    }

    public int getPID() {
        return PID;
    }

    public void setPID(int PID) {
        this.PID = PID;
    }

    public String getLink() {
        return Link;
    }

    public void setLink(String link) {
        Link = link;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}

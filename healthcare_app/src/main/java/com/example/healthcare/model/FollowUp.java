package com.example.healthcare.model;

import java.util.Date;

public class FollowUp {
    private Long FID;
    private Long AID;
    private Long DID;
    private Long PID;

    private Date date;

    private String link;

    public FollowUp(Date date, String link, Long FID, Long AID, Long DID, Long PID) {
        this.FID = FID;
        this.AID = AID;
        this.DID = DID;
        this.PID = PID;
        this.date = date;
        this.link = link;
    }

    FollowUp(){}

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public Long getFID() {
        return FID;
    }

    public void setFID(Long FID) {
        this.FID = FID;
    }

    public Long getAID() {
        return AID;
    }

    public void setAID(Long AID) {
        this.AID = AID;
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

    @Override
    public String toString() {
        return "FollowUp{" +
                "FID=" + FID +
                ", AID=" + AID +
                ", DID=" + DID +
                ", PID=" + PID +
                ", date=" + date +
                ", link='" + link + '\'' +
                '}';
    }
}

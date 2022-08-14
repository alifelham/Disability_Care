package com.example.healthcare.model;

import org.springframework.security.core.parameters.P;

import java.util.Date;
import java.util.List;

public class MedReq {
    private Long PHID;
    private Long RID;
    private Long DID;
    private Long PID;
    private List<String> meds;
    private List<Integer> dose;
    private Date date;
    private Date delivery;

    public MedReq(Date delivery, Long PHID, Long RID, Long DID, Long PID, List<String> meds, List<Integer> dose, Date date) {
        this.RID = RID;
        this.DID = DID;
        this.PID = PID;
        this.meds = meds;
        this.dose = dose;
        this.date = date;
        this.PHID = PHID;
        this.delivery = delivery;
    }

    MedReq(){}

    public Date getDelivery() {
        return delivery;
    }

    public void setDelivery(Date delivery) {
        this.delivery = delivery;
    }

    public Long getPHID() {
        return PHID;
    }

    public void setPHID(Long PHID) {
        this.PHID = PHID;
    }

    public Long getRID() {
        return RID;
    }

    public void setRID(Long RID) {
        this.RID = RID;
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

    public List<String> getMeds() {
        return meds;
    }

    public void setMeds(List<String> meds) {
        this.meds = meds;
    }

    public List<Integer> getDose() {
        return dose;
    }

    public void setDose(List<Integer> dose) {
        this.dose = dose;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "MedReq{" +
                "PHID=" + PHID +
                ", RID=" + RID +
                ", DID=" + DID +
                ", PID=" + PID +
                ", meds=" + meds +
                ", dose=" + dose +
                ", date=" + date +
                ", delivery=" + delivery +
                '}';
    }
}

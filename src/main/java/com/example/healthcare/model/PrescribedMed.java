package com.example.healthcare.model;

import org.springframework.security.core.parameters.P;

import java.util.Date;
import java.util.List;

public class PrescribedMed {
    private Long AID;
    private Long ID;
    private Long DID;
    private Long PID;
    private List<String> meds;
    private List<Integer> dose;
    private List<String> instruction;
    private Date date;

    public PrescribedMed(List<String> instruction, Long AID,Long ID, Long DID, Long PID, List<String> meds, List<Integer> dose, Date date) {
        this.ID = ID;
        this.DID = DID;
        this.PID = PID;
        this.meds = meds;
        this.dose = dose;
        this.date = date;
        this.AID = AID;
        this.instruction = instruction;
    }

    PrescribedMed(){}

    public List<String> getInstruction() {
        return instruction;
    }

    public void setInstruction(List<String> instruction) {
        this.instruction = instruction;
    }

    public Long getAID() {
        return AID;
    }

    public void setAID(Long AID) {
        this.AID = AID;
    }

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
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
}

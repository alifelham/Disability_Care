package com.example.healthcare.model;

import java.util.List;

public class Patient {
    private Long PID;
    private boolean diabetes;
    private boolean blood;
    private boolean asthma;
    private boolean allergy;
    private boolean kidney;
    private List<String>reports;
    private List<String>reportNames;

    public Patient(List<String>reportNames,Long PID, boolean diabetes, boolean blood, boolean asthma, boolean allergy, boolean kidney, List<String> reports) {
        this.PID = PID;
        this.diabetes = diabetes;
        this.blood = blood;
        this.asthma = asthma;
        this.allergy = allergy;
        this.kidney = kidney;
        this.reports = reports;
        this.reportNames = reportNames;
    }

    Patient(){}

    public List<String> getReportNames() {
        return reportNames;
    }

    public void setReportNames(List<String> reportNames) {
        this.reportNames = reportNames;
    }

    public Long getPID() {
        return PID;
    }

    public void setPID(Long PID) {
        this.PID = PID;
    }

    public boolean isDiabetes() {
        return diabetes;
    }

    public void setDiabetes(boolean diabetes) {
        this.diabetes = diabetes;
    }

    public boolean isBlood() {
        return blood;
    }

    public void setBlood(boolean blood) {
        this.blood = blood;
    }

    public boolean isAsthma() {
        return asthma;
    }

    public void setAsthma(boolean asthma) {
        this.asthma = asthma;
    }

    public boolean isAllergy() {
        return allergy;
    }

    public void setAllergy(boolean allergy) {
        this.allergy = allergy;
    }

    public boolean isKidney() {
        return kidney;
    }

    public void setKidney(boolean kidney) {
        this.kidney = kidney;
    }

    public List<String> getReports() {
        return reports;
    }

    public void setReports(List<String> reports) {
        this.reports = reports;
    }
}

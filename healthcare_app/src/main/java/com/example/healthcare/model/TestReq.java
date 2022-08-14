package com.example.healthcare.model;

import java.util.Date;
import java.util.List;

public class TestReq {
    private Long DiagID;
    private Long TID;
    private Long DID;
    private Long PID;
    private List<String> test;
    private List<String> instruction;
    private Date date;
    private Date delivery;

    private String report;

    public TestReq(String report,Long diagID, Long TID, Long DID, Long PID, List<String> test, List<String> instruction, Date date, Date delivery) {
        DiagID = diagID;
        this.TID = TID;
        this.DID = DID;
        this.PID = PID;
        this.test = test;
        this.instruction = instruction;
        this.date = date;
        this.delivery = delivery;
        this.report = report;
    }

    TestReq(){}

    public String getReport() {
        return report;
    }

    public void setReport(String report) {
        this.report = report;
    }

    public Long getDiagID() {
        return DiagID;
    }

    public void setDiagID(Long diagID) {
        DiagID = diagID;
    }

    public Long getTID() {
        return TID;
    }

    public void setTID(Long TID) {
        this.TID = TID;
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

    public List<String> getTest() {
        return test;
    }

    public void setTest(List<String> test) {
        this.test = test;
    }

    public List<String> getInstruction() {
        return instruction;
    }

    public void setInstruction(List<String> instruction) {
        this.instruction = instruction;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Date getDelivery() {
        return delivery;
    }

    public void setDelivery(Date delivery) {
        this.delivery = delivery;
    }

    @Override
    public String toString() {
        return "TestReq{" +
                "DiagID=" + DiagID +
                ", TID=" + TID +
                ", DID=" + DID +
                ", PID=" + PID +
                ", test=" + test +
                ", instruction=" + instruction +
                ", date=" + date +
                ", delivery=" + delivery +
                '}';
    }
}

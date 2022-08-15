package com.example.healthcare.controller;

import com.example.healthcare.model.Patient;
import com.example.healthcare.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/patient")
public class PatientController {
    @Autowired
    private PatientService PatientService;

    @PostMapping("/savePatient")
    public Patient savePatient(@RequestBody Patient Patient) throws ExecutionException, InterruptedException {
        return PatientService.savePatient(Patient);
    }


    @GetMapping("/getPatient/{ID}")
    public Patient getPatientByID(@PathVariable Long ID) throws ExecutionException, InterruptedException{
        return PatientService.getPatientByPID(ID);
    }

    @DeleteMapping("/deletePatient/{ID}")
    public String deletePatient(@PathVariable Long ID) throws ExecutionException, InterruptedException {
        return PatientService.deletePatient(ID);
    }
}

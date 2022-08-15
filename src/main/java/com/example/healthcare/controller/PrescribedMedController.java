package com.example.healthcare.controller;

import com.example.healthcare.model.AppReq;
import com.example.healthcare.model.PrescribedMed;
import com.example.healthcare.service.AppReqService;
import com.example.healthcare.service.MedService;
import com.example.healthcare.service.PrescribedMedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/prescribedMeds")
public class PrescribedMedController {
    @Autowired
    private PrescribedMedService PrescribedMedService;

    @PostMapping("/savePrescribedMed")
    public PrescribedMed savePrescribedMed(@RequestBody PrescribedMed PrescribedMed) throws ExecutionException, InterruptedException {
        System.out.println(PrescribedMed.toString());
        return PrescribedMedService.savePrescribedMed(PrescribedMed);
    }

    @GetMapping("/getPrescribedMedByPID/{PID}")
    public List<PrescribedMed> getPrescribedMedByPHID(@PathVariable Long PID) throws ExecutionException, InterruptedException{
        return PrescribedMedService.getPrescribedMedByPID(PID);
    }

    @DeleteMapping("/deletePrescribedMed/{ID}")
    public String deletePrescribedMed(@PathVariable Long ID) throws ExecutionException, InterruptedException {
        return PrescribedMedService.deletePrescribedMed(ID);
    }

    @PutMapping("/updatePrescribedMed")
    public PrescribedMed updatePrescribedMed(@RequestBody PrescribedMed PrescribedMed) throws ExecutionException, InterruptedException {
        System.out.println(PrescribedMed.toString());
        return PrescribedMedService.updatePrescribedMed(PrescribedMed);
    }
}


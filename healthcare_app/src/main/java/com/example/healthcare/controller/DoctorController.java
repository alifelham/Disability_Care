package com.example.healthcare.controller;

import com.example.healthcare.model.AppReq;
import com.example.healthcare.model.Doctor;
import com.example.healthcare.service.AppReqService;
import com.example.healthcare.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/doctor")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping("/saveDoctor")
    public Doctor saveDoctor(@RequestBody Doctor doctor) throws ExecutionException, InterruptedException {
        return doctorService.saveDoctor(doctor);
    }

    @GetMapping("/getAllDoctors")
    public List<Doctor> getAllReports() throws ExecutionException, InterruptedException{
        return doctorService.getAllDoctors();
    }

    @GetMapping("/getDoctor/{ID}")
    public Doctor getDoctorByID(@PathVariable Long ID) throws ExecutionException, InterruptedException{
        return doctorService.getDoctorbyID(ID);
    }

    @DeleteMapping("/deleteDoctor/{ID}")
    public String deleteDoctor(@PathVariable Long ID) throws ExecutionException, InterruptedException {
        return doctorService.deleteDoctor(ID);
    }
}

package com.example.healthcare.controller;

import com.example.healthcare.model.Appointments;
import com.example.healthcare.model.AvailableDoc;
import com.example.healthcare.service.AppointmentService;
import com.example.healthcare.service.AvailableDocService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("appointment/")
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/saveAppointment")
    public Appointments saveAppointment(@RequestBody Appointments appointments) throws ExecutionException, InterruptedException {
        return appointmentService.saveAppointment(appointments);
    }

    @GetMapping("/getAppointmentsByHID/{HID}")
    public List<Appointments> getAppointmentsByHID(@PathVariable Long HID) throws ExecutionException, InterruptedException{
        return appointmentService.getFutureAppointmentsByHID(HID);
    }

    @GetMapping("/getAppointmentsByDID/{DID}")
    public List<Appointments> getAppointmentsByDID(@PathVariable Long DID) throws ExecutionException, InterruptedException{
        return appointmentService.getFutureAppointmentsByDID(DID);
    }
    @GetMapping("/getAppointmentsByPID/{PID}")
    public List<Appointments> getAppointmentsByPID(@PathVariable Long PID) throws ExecutionException, InterruptedException{
        return appointmentService.getAppointmentsByPID(PID);
    }


    @DeleteMapping("/deleteAppointmentByAID/{AID}")
    public String deleteAppointment(@PathVariable Long AID) throws ExecutionException, InterruptedException {
        return appointmentService.deleteAppointment(AID);
    }
}

package com.example.healthcare.controller;

import com.example.healthcare.model.FollowUp;
import com.example.healthcare.model.User;
import com.example.healthcare.service.FollowUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/followUps")
public class FollowUpController {

    @Autowired
    FollowUpService followUpService;

    @PostMapping("/saveFollowUp")
    public FollowUp saveFollowUp(@RequestBody FollowUp followUp) throws ExecutionException, InterruptedException {
        System.out.println(followUp.toString());
        return followUpService.saveFollowUp(followUp);
    }

    @DeleteMapping("/deleteFollowUp/{FID}")
    public String deleteFollowUp(@PathVariable Long FID) throws ExecutionException, InterruptedException {
        return followUpService.deleteFollowUp(FID);
    }

    @GetMapping("/getFollowUpsByDID/{DID}")
    public List<FollowUp> getFollowUpAppointmentsByDID(@PathVariable Long DID) throws ExecutionException, InterruptedException {
        return followUpService.getFollowUpAppointmentsByDID(DID);
    }

    @GetMapping("/getFollowUpsByPID/{PID}")
    public List<FollowUp> getFollowUpAppointmentsByPID(@PathVariable Long PID) throws ExecutionException, InterruptedException {
        return followUpService.getFollowUpAppointmentsByPID(PID);
    }

    @GetMapping("/getPatientByPID/{ID}")
    public User getUserByID(@PathVariable Long ID) throws ExecutionException, InterruptedException {
        System.out.println("getpat" + ID);
        return followUpService.getUserByID(ID);
    }
}

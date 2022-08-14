package com.example.healthcare.controller;

import com.example.healthcare.model.AppReq;
import com.example.healthcare.model.MedReq;
import com.example.healthcare.service.AppReqService;
import com.example.healthcare.service.MedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/medReqs")
public class MedReqController {
    @Autowired
    private MedService medReqService;

    @PostMapping("/saveMedReq")
    public MedReq saveMedReq(@RequestBody MedReq medReq) throws ExecutionException, InterruptedException {
        System.out.println(medReq.toString());
        return medReqService.saveMedReq(medReq);
    }

    @GetMapping("/getMedReqByPHID/{PHID}")
    public List<MedReq> getMedReqByPHID(@PathVariable Long PHID) throws ExecutionException, InterruptedException{
        return medReqService.getMedReqByPHID(PHID);
    }

    @DeleteMapping("/deleteMedReq/{RID}")
    public String deleteMedReq(@PathVariable Long RID) throws ExecutionException, InterruptedException {
        return medReqService.deleteMedReq(RID);
    }

    @PutMapping("/updateMedReq")
    public MedReq updateMedReq(@RequestBody MedReq medReq) throws ExecutionException, InterruptedException {
        System.out.println(medReq.toString());
        return medReqService.updateMedReq(medReq);
    }
}


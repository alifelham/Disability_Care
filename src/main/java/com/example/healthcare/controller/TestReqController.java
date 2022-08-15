package com.example.healthcare.controller;

import com.example.healthcare.model.AppReq;
import com.example.healthcare.model.TestReq;
import com.example.healthcare.service.AppReqService;
import com.example.healthcare.service.MedService;
import com.example.healthcare.service.TestReqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import java.io.IOException;
import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/testReqs")
public class TestReqController {
    @Autowired
    private TestReqService testReqService;

    @PostMapping("/saveTestReq")
    public TestReq saveTestReq(@RequestBody TestReq TestReq) throws ExecutionException, InterruptedException {
        System.out.println(TestReq.toString());
        return testReqService.saveTestReq(TestReq);
    }

    @GetMapping("/getTestReqByDiagID/{DiagID}")
    public List<TestReq> getTestReqByDiagID(@PathVariable Long DiagID) throws ExecutionException, InterruptedException{
        return testReqService.getTestReqByDiagID(DiagID);
    }


    @DeleteMapping("/deleteTestReq/{TID}")
    public String deleteTestReq(@PathVariable Long TID) throws ExecutionException, InterruptedException {
        return testReqService.deleteTestReq(TID);
    }

    @PutMapping("/updateTestReq")
    public TestReq updateTestReq(@RequestBody TestReq TestReq) throws ExecutionException, InterruptedException {
        System.out.println(TestReq.toString());
        return testReqService.updateTestReq(TestReq);
    }




}


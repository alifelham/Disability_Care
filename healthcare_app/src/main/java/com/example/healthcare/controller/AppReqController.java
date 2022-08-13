package com.example.healthcare.controller;

import com.example.healthcare.model.AppReq;
import com.example.healthcare.model.Report;
import com.example.healthcare.service.AppReqService;
import com.example.healthcare.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("appReqs/")
public class AppReqController {
    @Autowired
    private AppReqService appReqService;

    @PostMapping("/saveAppReq")
    public AppReq saveAppReq(@RequestBody AppReq appReq) throws ExecutionException, InterruptedException {
        return appReqService.saveAppReq(appReq);
    }

    @PutMapping("/updateAppReq")
    public AppReq updateAppReq(@RequestBody AppReq appReq) throws ExecutionException, InterruptedException {
        return appReqService.saveAppReq(appReq);
    }

    @GetMapping("/getAppReqByHID/{HID}")
    public List<AppReq> getAppReqByHID(@PathVariable Long HID) throws ExecutionException, InterruptedException{
        System.out.println("In getAppReqByHID" + HID);
        return appReqService.getAppReqByHID(HID);
    }

    @DeleteMapping("/deleteAppReq/{ID}")
    public String deleteAppReq(@PathVariable Long ID) throws ExecutionException, InterruptedException {
        return appReqService.deleteAppReq(ID);
    }

    @GetMapping("/getPIDbyID/{ID}")
    public AppReq getPIDbyID(@PathVariable Long ID) throws ExecutionException, InterruptedException{
        return appReqService.getPIDbyID(ID);
    }
}

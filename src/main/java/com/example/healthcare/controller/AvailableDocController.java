package com.example.healthcare.controller;

import com.example.healthcare.model.AvailableDoc;
import com.example.healthcare.model.Doctor;
import com.example.healthcare.service.AvailableDocService;
import com.example.healthcare.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/availableDoc")
public class AvailableDocController {
    @Autowired
    private AvailableDocService availableDocService;

    @PostMapping("/saveAvailableDoc")
    public AvailableDoc saveAvailableDoc(@RequestBody AvailableDoc availableDoc) throws ExecutionException, InterruptedException {
        return availableDocService.saveAvailableDoc(availableDoc);
    }

    @GetMapping("/getAvailableDocsByHID/{HID}")
    public List<AvailableDoc> getAllAvailableDocs(@PathVariable Long HID) throws ExecutionException, InterruptedException{
        return availableDocService.getAvailableDocsByHID(HID);
    }

    @PutMapping("/updateAvailableDoc")
    public AvailableDoc updateAvailableDoc(@RequestBody AvailableDoc availableDoc) throws ExecutionException, InterruptedException {
        return availableDocService.saveAvailableDoc(availableDoc);
    }
}

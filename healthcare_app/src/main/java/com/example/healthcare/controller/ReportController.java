package com.example.healthcare.controller;

import com.example.healthcare.model.Report;
import com.example.healthcare.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("reports/")
public class ReportController {
    @Autowired
    private ReportService reportService;

    @PostMapping("/saveReport")
    public Report saveReport(@RequestBody Report report) throws ExecutionException, InterruptedException {
        return reportService.saveReport(report);
    }

    @GetMapping("/getReports")
    public List<Report> getReports() throws ExecutionException, InterruptedException {
        return reportService.getAllReports();
    }

    @PutMapping("/updateReport")
    public String updateReport(@RequestBody Report report) throws ExecutionException, InterruptedException {
        return reportService.updateReport(report);
    }

    @GetMapping("/getReport")
    public List<Report> getReportByPID() throws ExecutionException, InterruptedException{
        return reportService.getReportsByPID(1);
    }

    @DeleteMapping("/deleteReport")
    public String deleteReport(@RequestBody String name) throws ExecutionException, InterruptedException {
        return reportService.deleteReport(name);
    }
}

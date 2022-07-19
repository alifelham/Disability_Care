package healthcare.healthcare_app.controller;

import healthcare.healthcare_app.patient.Patient;
import healthcare.healthcare_app.service.patientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api")
public class PatientController {
    @Autowired
    private healthcare.healthcare_app.service.patientService patientService;

    @PostMapping("/patients")
    public String savePatient(@RequestBody Patient patient) throws ExecutionException, InterruptedException {
        return patientService.savePatient(patient);
    }
}

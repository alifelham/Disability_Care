package healthcare.healthcare_app.controller;

import healthcare.healthcare_app.patient.Patient;
import healthcare.healthcare_app.service.patientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api")
public class PatientController {

    @Autowired
    private patientService patientService;
    @PutMapping ("/savePatients")
    public String savePatient(@RequestBody Patient patient) throws ExecutionException, InterruptedException {
        return patientService.savePatient(patient);
    }

    @GetMapping("/getPatients")
    public List<Patient> echo() {
        return List.of(
                new Patient(
                        "1",
                        "someone",
                        "someone@gmail.com",
                        "July 01, 1990",
                        "32"

                )
        );
    }
}

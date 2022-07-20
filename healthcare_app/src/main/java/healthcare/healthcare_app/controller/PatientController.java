package healthcare.healthcare_app.controller;

import healthcare.healthcare_app.entities.Patient;
import healthcare.healthcare_app.service.patientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api")
public class PatientController {

    @Autowired
    private patientService patientService;
    @PostMapping ("/savePatients")
    public String savePatient(@RequestBody Patient patient) throws ExecutionException, InterruptedException {
        return patientService.savePatient(patient);
    }

    //update
    @PutMapping ("/savePatients")
    public String updatePatient(@RequestBody Patient patient) throws ExecutionException, InterruptedException {
        return patientService.updatePatient(patient);
    }

    @GetMapping("/getPatients")
    public List<Patient> getPatients() throws ExecutionException, InterruptedException {
        return patientService.getPatientDetails();
    }
    @DeleteMapping("/getPatients/{name}")
    public String deletePatient(@PathVariable String name) throws ExecutionException, InterruptedException {
        return patientService.deletePatient(name);
    }
}

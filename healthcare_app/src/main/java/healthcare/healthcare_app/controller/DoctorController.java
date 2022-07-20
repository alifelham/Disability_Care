package healthcare.healthcare_app.controller;

import healthcare.healthcare_app.entities.Doctor;
import healthcare.healthcare_app.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api")
public class DoctorController {

    @Autowired
    private DoctorService DoctorService;
    @PostMapping ("/saveDoctors")
    public String saveDoctor(@RequestBody Doctor Doctor) throws ExecutionException, InterruptedException {
        return DoctorService.saveDoctor(Doctor);
    }

    //update
    @PutMapping ("/saveDoctors")
    public String updateDoctor(@RequestBody Doctor Doctor) throws ExecutionException, InterruptedException {
        return DoctorService.updateDoctor(Doctor);
    }

    @GetMapping("/getDoctors")
    public List<Doctor> getDoctors() throws ExecutionException, InterruptedException {
        return DoctorService.getDoctorDetails();
    }
    @DeleteMapping("/getDoctors/{name}")
    public String deleteDoctor(@PathVariable String name) throws ExecutionException, InterruptedException {
        return DoctorService.deleteDoctor(name);
    }
}

package healthcare.healthcare_app.controller;

import healthcare.healthcare_app.entities.Pharmacy;
import healthcare.healthcare_app.service.PharmacyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api")
public class PharmacyController {

    @Autowired
    private healthcare.healthcare_app.service.PharmacyService PharmacyService;
    @PostMapping("/savePharmacy")
    public String savePharmacy(@RequestBody Pharmacy pharmacy) throws ExecutionException, InterruptedException {
        return PharmacyService.savePharmacy(pharmacy);
    }

    //update
    @PutMapping("/savePharmacy")
    public String updatePharmacy(@RequestBody Pharmacy pharmacy) throws ExecutionException, InterruptedException {
        return PharmacyService.updatePharmacy(pharmacy);
    }

    @GetMapping("/getPharmacy")
    public List<Pharmacy> getPharmacy() throws ExecutionException, InterruptedException {
        return PharmacyService.getPharmacyDetails();
    }
    @DeleteMapping("/deletePharmacy/{name}")
    public String deletePharmacy(@PathVariable String name) throws ExecutionException, InterruptedException {
        return PharmacyService.deletePharmacy(name);
    }
}

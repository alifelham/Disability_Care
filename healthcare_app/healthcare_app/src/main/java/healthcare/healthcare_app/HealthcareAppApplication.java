package healthcare.healthcare_app;

import healthcare.healthcare_app.patient.Patient;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@SpringBootApplication
@RestController
public class HealthcareAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(HealthcareAppApplication.class, args);
	}

	@GetMapping
	public List<Patient> echo() {
		return List.of(
				new Patient(
					1L,
					"someone",
					"someone@gmail.com",
					LocalDate.of(1990, Month.JULY, 01),
					32

			)
		);
	}

}


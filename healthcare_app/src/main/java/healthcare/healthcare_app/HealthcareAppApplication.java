package healthcare.healthcare_app;

import healthcare.healthcare_app.patient.Patient;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})

public class HealthcareAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(HealthcareAppApplication.class, args);
	}

}


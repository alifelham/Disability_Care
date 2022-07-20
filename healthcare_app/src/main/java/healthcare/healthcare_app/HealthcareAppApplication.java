package healthcare.healthcare_app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})

public class HealthcareAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(HealthcareAppApplication.class, args);
	}

}


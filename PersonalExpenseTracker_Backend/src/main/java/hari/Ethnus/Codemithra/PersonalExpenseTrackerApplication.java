package hari.Ethnus.Codemithra;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "hari.personalexpensetracker.model")
public class PersonalExpenseTrackerApplication {

	public static void main(String[] args) {
		SpringApplication.run(PersonalExpenseTrackerApplication.class, args);
	}

}

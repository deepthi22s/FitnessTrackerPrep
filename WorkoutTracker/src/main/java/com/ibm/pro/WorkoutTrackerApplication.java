package com.ibm.pro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WorkoutTrackerApplication {

	public static void main(String[] args) {
		System.out.println("Welcome..");
		SpringApplication.run(WorkoutTrackerApplication.class, args);
		
	}

}

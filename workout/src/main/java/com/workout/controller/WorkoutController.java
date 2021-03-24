package com.workout.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.workout.bean.WorkoutBean;
import com.workout.service.WorkoutService;

@RestController
@RequestMapping("/workouts")
public class WorkoutController {
	
	@Autowired
	WorkoutService service;
	
	@PostMapping("/create")
	public void create(@RequestBody WorkoutBean workout) {
		 service.create(workout);
	}
	
	@GetMapping("/all")
	public List<String> getWorkouts(){
		return service.getWorkouts();
	}
	
}

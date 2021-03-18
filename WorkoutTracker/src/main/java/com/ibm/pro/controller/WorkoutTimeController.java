package com.ibm.pro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.pro.bean.WorkoutTime;
import com.ibm.pro.service.WorkoutTimeService;

@RestController
@RequestMapping("/workoutTime")
public class WorkoutTimeController {
	
	@Autowired
	WorkoutTimeService service;
	
	@PostMapping("/create")
	public void create(@RequestBody WorkoutTime workout) {
		 service.create(workout);
	}


}


package com.ibm.pro.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.pro.bean.WorkoutTime;
import com.ibm.pro.service.WorkoutTimeService;

//@CrossOrigin(origins="*")
@RestController
@RequestMapping("/workoutTime")
public class WorkoutTimeController {
	
	@Autowired
	WorkoutTimeService service;
	
	@PostMapping("/create")
	public void create(@RequestBody WorkoutTime workout) {
		 service.create(workout);
	}
	
//	Return All 
	@RequestMapping("/all")
	List<WorkoutTime> getAllUsers(){
		return service.getAllUsers();
	}
	
//	Get user
	@RequestMapping("/user/{name}")
	List<WorkoutTime> getUser(@PathVariable String name){
		return service.getUser(name);
	}

//	Get workout
	@RequestMapping("/workout/{workout}")
	List<WorkoutTime> getWorkout(@PathVariable String workout){
		return service.getWorkout(workout);
	}
	
}


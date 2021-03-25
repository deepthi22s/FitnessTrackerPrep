package com.ibm.pro.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.pro.bean.WorkoutTime;
import com.ibm.pro.repo.WorkoutTimeRepo;

@Service
public class WorkoutTimeService {

	@Autowired
	WorkoutTime workout;
	@Autowired
	WorkoutTimeRepo repo;
	
	public void create(WorkoutTime workout) {
		repo.save(workout);
	}
//	Fetch all
	public List<WorkoutTime> getAllUsers(){
		return (List<WorkoutTime>) repo.findAll();
	}
	
//	Fetch by user name
	public List<WorkoutTime> getUser(String name) {
		return (List<WorkoutTime>) repo.findByUserName(name);
	}

//	Fetch by workout name
	public List<WorkoutTime> getWorkout(String workout) {
		return (List<WorkoutTime>) repo.findByWorkoutName(workout);
	}

}


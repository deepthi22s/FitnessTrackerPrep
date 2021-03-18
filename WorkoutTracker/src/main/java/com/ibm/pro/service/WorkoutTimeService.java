package com.ibm.pro.service;

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
	
}


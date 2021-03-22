package com.ibm.pro.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ibm.pro.bean.WorkoutTime;

public interface WorkoutTimeRepo extends CrudRepository<WorkoutTime, Integer> {

	List<WorkoutTime> findByUserName(String userName);
	List<WorkoutTime> findByWorkoutName(String workout);
	
}

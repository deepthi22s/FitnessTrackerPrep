package com.ibm.pro.repo;

import org.springframework.data.repository.CrudRepository;

import com.ibm.pro.bean.WorkoutTime;

public interface WorkoutTimeRepo extends CrudRepository<WorkoutTime, Integer> {

}

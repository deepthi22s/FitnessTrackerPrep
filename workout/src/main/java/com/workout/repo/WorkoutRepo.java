
package com.workout.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.workout.bean.WorkoutBean;


@Repository
public interface WorkoutRepo extends CrudRepository<WorkoutBean, String> {
	 @Query("SELECT workoutName  FROM WorkoutBean")
	    public List<String> getWorkoutName();
}

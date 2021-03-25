package com.workout.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;

import org.springframework.stereotype.Component;

@Entity
@Component
public class WorkoutBean {
	@Id
	String workoutName;
	String workoutDescription;
	Integer AverageCalorieBurn;
	public String getWorkoutName() {
		return workoutName;
	}
	public void setWorkoutName(String workoutName) {
		this.workoutName = workoutName;
	}
	public String getWorkoutDescription() {
		return workoutDescription;
	}
	public void setWorkoutDescription(String workoutDescription) {
		this.workoutDescription = workoutDescription;
	}
	
	public Integer getAverageCalorieBurn() {
		return AverageCalorieBurn;
	}
	public void setAverageCalorieBurn(Integer averageCalorieBurn) {
		AverageCalorieBurn = averageCalorieBurn;
	}
		
	
}

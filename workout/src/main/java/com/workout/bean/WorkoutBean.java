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
	public String getWorkoutImage() {
		return workoutImage;
	}
	public void setWorkoutImage(String workoutImage) {
		this.workoutImage = workoutImage;
	}
	public String getWorkoutVideo() {
		return workoutVideo;
	}
	public void setWorkoutVideo(String workoutVideo) {
		this.workoutVideo = workoutVideo;
	}
	public Double getAverageCalorieBurn() {
		return AverageCalorieBurn;
	}
	public void setAverageCalorieBurn(Double averageCalorieBurn) {
		AverageCalorieBurn = averageCalorieBurn;
	}
	public Double getWorkoutTime() {
		return WorkoutTime;
	}
	public void setWorkoutTime(Double workoutTime) {
		WorkoutTime = workoutTime;
	}
	public Double getCaloriesBurnedByUser() {
		return CaloriesBurnedByUser;
	}
	public void setCaloriesBurnedByUser(Double caloriesBurnedByUser) {
		CaloriesBurnedByUser = caloriesBurnedByUser;
	}
	String workoutDescription;
	String workoutImage;
	String workoutVideo;
	Double AverageCalorieBurn;
	Double WorkoutTime;
	@Transient  //Not to be included in table
	Double CaloriesBurnedByUser;
	
	

}

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
	String workoutImage;
	String workoutVideo;
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
	public Integer getAverageCalorieBurn() {
		return AverageCalorieBurn;
	}
	public void setAverageCalorieBurn(Integer averageCalorieBurn) {
		AverageCalorieBurn = averageCalorieBurn;
	}
		
	
}

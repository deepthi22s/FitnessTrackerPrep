package com.ibm.pro.bean;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

@Entity
@Component
public class WorkoutTime {

	@Id
	//@GeneratedValue(strategy = GenerationType.AUTO)
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	String userName;
	String workoutName;
	
	Integer time;
	Integer intermediateTime;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getWorkoutName() {
		return workoutName;
	}
	public void setWorkoutName(String workoutName) {
		this.workoutName = workoutName;
	}
	
	public Integer getTime() {
		return time;
	}
	public void setTime(Integer time) {
		this.time = time;
	}
	public Integer getIntermediateTime() {
		return intermediateTime;
	}
	public void setIntermediateTime(Integer intermediateTime) {
		this.intermediateTime = intermediateTime;
	}
	
}

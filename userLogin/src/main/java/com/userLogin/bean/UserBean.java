package com.userLogin.bean;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import org.springframework.stereotype.Component;
@Entity
@Component

public class UserBean {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer id;
	String fullName;
	Integer phoneNumber;
	String password;
	Integer height;
	Double weight;
	Double bmi;
	Integer yearsOfSubscription;
	public Integer getYearsOfSubscription() {
		return yearsOfSubscription;
	}
	public void setYearsOfSubscription(Integer yearsOfSubscription) {
		this.yearsOfSubscription = yearsOfSubscription;
	}

	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public Integer getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(Integer phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public Double getBmi() {
		return bmi;
	}
	public void setBmi(Double bmi) {
		this.bmi = bmi;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getHeight() {
		return height;
	}
	public void setHeight(Integer height) {
		this.height = height;
	}
	public Double getWeight() {
		return weight;
	}
	public void setWeight(Double weight) {
		this.weight = weight;
	}
}

	
	

	
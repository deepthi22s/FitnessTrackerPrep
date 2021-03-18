package com.login.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.Email;

@Entity
public class userLogin {
	@Id
	Integer id;
	String username;
	String password;
	String firstName;
	String lastName;
	Email email;
	Integer height;
	Integer weight;
	Double bmi;
	public userLogin(String username, String password, String firstName, String lastName, Email email, Integer height,
			Integer weight, Double bmi) {
		super();
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.height = height;
		this.weight = weight;
		this.bmi = bmi;
	}
	
}

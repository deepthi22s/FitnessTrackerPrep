package com.userLog.bean;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class LogBean {
	@Id
	Integer userId;
	String name;
	Timestamp start;
	Timestamp stop;
	
	
	

}

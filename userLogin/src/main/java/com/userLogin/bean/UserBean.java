package com.userLogin.bean;



import javax.persistence.Id;

import org.hibernate.annotations.Entity;
import org.springframework.stereotype.Component;
@Entity
@Component
public class UserBean {
	@Id
	String Name;

}

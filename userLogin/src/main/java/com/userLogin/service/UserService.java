package com.userLogin.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.userLogin.bean.UserBean;
import com.userLogin.repo.UserRepo;


@Service
public class UserService {
	

 @Autowired
 UserRepo repo;
 
  public void create(UserBean userbean) {
	 repo.save(userbean);
 }
}



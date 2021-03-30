package com.userLogin.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.userLogin.bean.UserBean;
import com.userLogin.repo.UserRepo;


@Service
public class UserService {
	
 @Autowired
 UserRepo repo;
 
  public void create(UserBean user) {
	 Integer height1= user.getHeight();
	 //double h=h/100;
	 Double weight1= user.getWeight();
	 Double bmi1=(100*100*weight1)/(height1*height1);
	 user.setBmi(bmi1);
	 repo.save(user);
	  }
  
   public void update(UserBean bean,int id) {
	 repo.save(bean);
 }
  public List<UserBean> getDeatilsByname(String username) {
	 return (List<UserBean>) repo.findByFullName(username);
}

public List<UserBean> getAllUsers() {
	// TODO Auto-generated method stub
	return (List<UserBean>) repo.findAll();
}

public List<String> getDetailsOfUsers() {
	// TODO Auto-generated method stub
	return (List<String>) repo.getOnlyUsers();
}
    
}



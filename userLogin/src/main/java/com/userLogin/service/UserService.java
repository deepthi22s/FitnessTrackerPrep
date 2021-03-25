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
  public void create(UserBean bean) {
	 repo.save(bean);
 }
   public void update(UserBean bean,int id) {
	   bean.setId(id);
	 repo.save(bean);
 }
  public List<UserBean> getDeatilsByname(String username) {
	 return (List<UserBean>) repo.findByFullName(username);
}

}



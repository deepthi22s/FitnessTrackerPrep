package com.userLogin.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.userLogin.bean.UserBean;


@Repository
public interface UserRepo  extends CrudRepository<UserBean,String>{

}
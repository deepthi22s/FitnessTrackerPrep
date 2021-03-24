package com.userLogin.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.userLogin.bean.UserBean;
import com.userLogin.service.UserService;


	
	@RestController
	@RequestMapping("/user")
	public class UserController{

	
	@Autowired
	UserService service;

	@PostMapping("/create")
		public void create(@RequestBody UserBean bean) {
		service.create(bean);
		
	}
	@PutMapping("/user/{edit}")
	public void update(@RequestBody UserBean bean,@PathVariable int id) {
	service.update(bean,id);
	
}

	@RequestMapping("/create/{name}")
	List<UserBean> getDeatilsByName(@PathVariable String name){
     return service.getDeatilsByname(name);
}
	
	}


package com.userLogin.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.web.bind.annotation.PostMapping;
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
	}


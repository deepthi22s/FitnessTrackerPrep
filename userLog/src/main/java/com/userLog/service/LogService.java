package com.userLog.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.userLog.bean.LogBean;
import com.userLog.repo.LogRepo;


@Service
public class LogService {
	
	@Autowired
	LogRepo repo;

	
	void create(LogBean log ) {
		repo.save(log);
	}
	
	
	
}


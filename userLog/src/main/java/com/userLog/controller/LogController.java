package com.userLog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.userLog.bean.LogBean;
import com.userLog.service.LogService;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/log")
public class LogController {
	@Autowired
	LogService service;

//	@Autowired
//	LogBean logBean;

	@GetMapping("/date")
	public List<LogBean> getEntryByDate(@RequestBody LogBean logBean) {
		
		return service.getEntryByDate(logBean.getStart());
	}

	@PostMapping("/addEntry/{userWorkoutId}")
	public LogBean addEntryToLog(@PathVariable Integer userWorkoutId, @RequestBody LogBean logBean) {
		return service.addEntryToLog(logBean);

	}

	@GetMapping("/user/{userId}")
	public List<LogBean> getLogByUserID(@PathVariable Integer userId) {
		return service.getLogByUserID(userId);
	}

	@GetMapping("/workout/{userWorkoutId}")
	public List<LogBean> getLogByUserWorkoutId(@PathVariable Integer userWorkoutId) {
		return service.getLogByUserWorkoutId(userWorkoutId);
	}

}

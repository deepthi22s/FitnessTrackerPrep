package com.userLog.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.userLog.bean.LogBean;
import com.userLog.repo.LogRepo;



@Service
public class LogService {
	
	@Autowired
	LogRepo repo;
	@Autowired
	List<LogBean> logBean;

	public LogBean addEntryToLog(LogBean logBean) {
		return repo.save(logBean);
	}

	 public java.util.List<LogBean> getLogByUserID(Integer userId) {
		return repo.findByUserId(userId);
	}

	public List<LogBean> getLogByUserWorkoutId(Integer userWorkoutId) {
		
		return repo.findByUserWorkoutId(userWorkoutId);
	}

	public List<LogBean> getEntryByDate(Date start) {
		
		logBean= repo.findByStart(start);
		 return logBean;
	}
	
	
	
}


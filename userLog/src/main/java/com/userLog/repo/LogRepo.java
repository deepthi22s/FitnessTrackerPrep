package com.userLog.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.userLog.bean.LogBean;

@Repository
public interface LogRepo extends CrudRepository<LogBean, Integer> {

}

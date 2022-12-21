package com.example.employeemanagement.service;

import java.util.List;

import com.example.employeemanagement.model.HR;

public interface HrService {
	HR addHr(HR hr,long dept_id );
	List <HR> getAllHr(long dept_id);
	HR getHrById(long hr_id);
	HR updateHr(HR HR, long hr_id);
	void deleteHr(long hr_id);

}

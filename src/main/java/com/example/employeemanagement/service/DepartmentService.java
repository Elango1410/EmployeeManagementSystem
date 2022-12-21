package com.example.employeemanagement.service;

import java.util.List;

import com.example.employeemanagement.model.Department;


public interface DepartmentService {
	Department addDepartment(Department department );
	List <Department> getAllDepart();
	Department getDepartById(long dept_id);
	Department updateDepart(Department Department, long dept_id);
	void deleteDepart(long dept_id);
}

package com.example.employeemanagement.service;

import java.util.List;

import com.example.employeemanagement.model.Employee;


public interface EmployeeService {
	
	Employee saveEmployee(Employee employee,long dept_id);
	List<Employee> getAllEmployees(long dept_id);
	Employee getEmployeeById(long emp_id);
	Employee updateEmployee(Employee employee, long emp_id);
	void deleteEmployee(long emp_id);
	
	

}

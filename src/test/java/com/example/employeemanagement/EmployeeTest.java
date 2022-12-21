package com.example.employeemanagement;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.employeemanagement.model.Employee;
import com.example.employeemanagement.repository.EmployeeRepository;

class EmployeeTest {
	@Autowired
	EmployeeRepository employeeRepository;
	
	

	@Test
	public void saveEmployee() {
		Employee employee=new Employee();
		employee.setEmp_name("");
		employee.setGender("male");
		employee.setPhone_number("8300433591");
		employee.setSalary(56231.02);
	}

}

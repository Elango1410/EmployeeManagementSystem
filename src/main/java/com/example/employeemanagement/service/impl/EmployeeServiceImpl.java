package com.example.employeemanagement.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.employeemanagement.exception.UserNotFoundException;
import com.example.employeemanagement.model.Department;
import com.example.employeemanagement.model.Employee;
import com.example.employeemanagement.repository.EmployeeRepository;
import com.example.employeemanagement.service.DepartmentService;
import com.example.employeemanagement.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	 @Autowired
	private EmployeeRepository employeeRepository;
	private DepartmentService departmentService;
	
	
	



	public EmployeeServiceImpl(EmployeeRepository employeeRepository, DepartmentService departmentService) {
		super();
		this.employeeRepository = employeeRepository;
		this.departmentService = departmentService;
	}



	@Override
	public Employee saveEmployee(Employee employee,long dept_id) {
		// TODO Auto-generated method stub
		Department department=departmentService.getDepartById(dept_id);
		employee.setDepartment(department);
		return employeeRepository.save(employee);
	}



	@Override
	public List<Employee> getAllEmployees(long dept_id) {
		// TODO Auto-generated method stub
		return employeeRepository.findByDepartmentDeptId(dept_id);
	}



	@Override
	public Employee getEmployeeById(long emp_id) {
	
		return employeeRepository.findById(emp_id).orElseThrow(()->new UserNotFoundException("Employee","Id",emp_id));
		
	}



	

	@Override
	public Employee updateEmployee(Employee employee, long emp_id) {
		Employee existingEmployee=employeeRepository.findById(emp_id).orElseThrow(()->new UserNotFoundException("Employee","emp_id",emp_id));
		existingEmployee.setMail_id(employee.getMail_id());
		existingEmployee.setPhone_number(employee.getPhone_number());
		existingEmployee.setSalary(employee.getSalary());
		return employeeRepository.save(existingEmployee);
		
	}

	@Override
	public void deleteEmployee(long emp_id) {
		// TODO Auto-generated method stub
		employeeRepository.findById(emp_id).orElseThrow(()->new UserNotFoundException("Employee","Id",emp_id));
		employeeRepository.deleteById(emp_id);
		
	}

}

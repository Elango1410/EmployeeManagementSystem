package com.example.employeemanagement.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.employeemanagement.model.Employee;
import com.example.employeemanagement.service.EmployeeService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/employee")
public class EmployeeController {
	private EmployeeService employeeService;

	public EmployeeController(EmployeeService employeeService) {
		super();
		this.employeeService = employeeService;
	}
	
	@PostMapping("{dept_id}")
	public ResponseEntity<Employee> saveEmployee(@RequestBody Employee employee,@PathVariable("dept_id") long dept_id)
	{
		System.out.println(employee);
		return new ResponseEntity<Employee>(employeeService.saveEmployee(employee,dept_id),HttpStatus.CREATED);
	}
	
	@GetMapping("{dept_id}")
	public List<Employee> getAllEmployees(@PathVariable long dept_id)
	{
		return employeeService.getAllEmployees(dept_id);
	}
	
	@GetMapping("/employee/{emp_id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable("emp_id") long emp_id)
	{
		return new ResponseEntity<Employee>(employeeService.getEmployeeById(emp_id),HttpStatus.OK);
	}
	
	@PutMapping("{emp_id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable("emp_id") long emp_id, @RequestBody Employee employee)
	{
		
		return new ResponseEntity<Employee> (employeeService.updateEmployee(employee,emp_id),HttpStatus.OK);
	}
	
	@DeleteMapping("{emp_id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable("emp_id") long emp_id)
	{
		employeeService.deleteEmployee(emp_id);
		return new ResponseEntity<String>("Employee deleted successfully",HttpStatus.OK);
	}

	

}

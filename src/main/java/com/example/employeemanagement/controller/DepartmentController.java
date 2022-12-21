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

import com.example.employeemanagement.model.Department;
import com.example.employeemanagement.service.DepartmentService;

@RestController
@RequestMapping("/api/department")
@CrossOrigin(origins="http://localhost:4200")
public class DepartmentController {
	private DepartmentService departmentService;

	public DepartmentController(DepartmentService departmentService) {
		super();
		this.departmentService = departmentService;
	}
	
	@PostMapping
	public ResponseEntity<Department> addDepartment(@RequestBody Department department)
	{
		System.out.println(department);
		return new ResponseEntity<Department>(departmentService.addDepartment(department),HttpStatus.CREATED);
	}
	
	@GetMapping
	public List<Department> getAllDepart()
	{
		return departmentService.getAllDepart();
	}
	
	@GetMapping("{dept_id}")
	public ResponseEntity<Department> getDepartById(@PathVariable("dept_id") long dept_id)
	{
		return new ResponseEntity<Department>(departmentService.getDepartById(dept_id),HttpStatus.OK);
	}
	
	@PutMapping("{dept_id}")
	public ResponseEntity<Department> updateDepart(@PathVariable("dept_id") long dept_id, @RequestBody Department department)
	{
		return new ResponseEntity<Department> (departmentService.updateDepart(department,dept_id),HttpStatus.OK);
	}
	
	@DeleteMapping("{dept_id}")
	public ResponseEntity<String> deleteDepart(@PathVariable("dept_id") long dept_id)
	{
		departmentService.deleteDepart(dept_id);
		return new ResponseEntity<String>("Record deleted successfully",HttpStatus.OK);
	}

}

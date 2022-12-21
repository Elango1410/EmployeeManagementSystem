package com.example.employeemanagement.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.employeemanagement.exception.UserNotFoundException;
import com.example.employeemanagement.model.Department;
import com.example.employeemanagement.repository.DepartmentRepository;
import com.example.employeemanagement.service.DepartmentService;

@Service
public class DepartmentServiceImpl implements DepartmentService{
	@Autowired
	private DepartmentRepository departmentRepository;
	
	

	public DepartmentServiceImpl(DepartmentRepository departmentRepository) {
		super();
		this.departmentRepository = departmentRepository;
	}

	@Override
	public Department addDepartment(Department department) {
		// TODO Auto-generated method stub
		return departmentRepository.save(department);
	}

	@Override
	public List<Department> getAllDepart() {
		// TODO Auto-generated method stub
		return departmentRepository.findAll();
	}

	@Override
	public Department getDepartById(long dept_id) {
		// TODO Auto-generated method stub
		return departmentRepository.findById(dept_id).orElseThrow(()-> new UserNotFoundException("department","id",dept_id));
	}

	@Override
	public Department updateDepart(Department Department, long dept_id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteDepart(long dept_id) {
		// TODO Auto-generated method stub
		departmentRepository.findById(dept_id).orElseThrow(()->new UserNotFoundException("Department","id",dept_id));
		departmentRepository.deleteById(dept_id);
		
	}

}

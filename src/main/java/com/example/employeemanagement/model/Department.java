package com.example.employeemanagement.model;


import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="department")
public class Department {
	
	@Id
	private long deptId;
	
	@Column
	private String dept_name;
	@JsonIgnore
	@OneToMany(mappedBy="department", cascade=CascadeType.ALL)
	private List<Employee> employee;
	
	@JsonIgnore
	@OneToMany(mappedBy="department", cascade=CascadeType.ALL)
	private List<HR> hr;
	public Department() {
		super();
		// TODO Auto-generated constructor stub
	}


	public long getDeptId() {
		return deptId;
	}


	public void setDeptId(long deptId) {
		this.deptId = deptId;
	}


	public String getDept_name() {
		return dept_name;
	}


	public void setDept_name(String dept_name) {
		this.dept_name = dept_name;
	}


	

	public List<Employee> getEmployee() {
		return employee;
	}


	public void setEmployee(List<Employee> employee) {
		this.employee = employee;
	}


	


	public List<HR> getHr() {
		return hr;
	}


	public void setHr(List<HR> hr) {
		this.hr = hr;
	}


	public Department(long deptId, String dept_name) {
		super();
		this.deptId = deptId;
		this.dept_name = dept_name;
	}

	
	

	

	
	
	
	

}

package com.example.employeemanagement.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;



@Entity
@Table(name="employee_table")
public class Employee {
	@Id

	private long emp_id;
	
	@Column(name = "emp_Name")
	@NotEmpty
	@Size(min=3, message = "FirstName must contain atleat 3 characters")
	private String emp_name;
	@NotEmpty
	@Column
	private String mail_id;//mailId
	@Column
	@NotEmpty
	private String gender;
	@Column
	
	@NotEmpty
	private String phone_number;
	@Column
	private double salary;
	
	@ManyToOne
	@JoinColumn(name="deptId")
    private Department department;
	
	

	
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	
public Employee(long emp_id,
			@NotEmpty @Size(min = 3, message = "FirstName must contain atleat 3 characters") String emp_name,
			@NotEmpty String mail_id, @NotEmpty String gender, @Size(min = 10, max = 10) @NotEmpty String phone_number,
			double salary, Department department) {
		super();
		this.emp_id = emp_id;
		this.emp_name = emp_name;
		this.mail_id = mail_id;
		this.gender = gender;
		this.phone_number = phone_number;
		this.salary = salary;
		this.department = department;
	}

public long getEmp_id() {
	return emp_id;
}

public void setEmp_id(long emp_id) {
	this.emp_id = emp_id;
}

public String getEmp_name() {
	return emp_name;
}

public void setEmp_name(String emp_name) {
	this.emp_name = emp_name;
}

public String getMail_id() {
	return mail_id;
}

public void setMail_id(String mail_id) {
	this.mail_id = mail_id;
}

public String getGender() {
	return gender;
}

public void setGender(String gender) {
	this.gender = gender;
}

public String getPhone_number() {
	return phone_number;
}

public void setPhone_number(String phone_number) {
	this.phone_number = phone_number;
}

public double getSalary() {
	return salary;
}

public void setSalary(double salary) {
	this.salary = salary;
}

public Department getDepartment() {
	return department;
}

public void setDepartment(Department department) {
	this.department = department;
}


	
}

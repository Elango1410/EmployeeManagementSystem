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
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;



@Entity
@Table(name="Hr_table")
public class HR {
	@Id
	
	private Long hr_id;
	
	@Column
	@NotEmpty
	private String hr_name;
	@Column
	@NotEmpty
	@Email
	private String email;
	
	@ManyToOne
	@JoinColumn(name="hr_dept")
    private Department department;
	
	

	public HR() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	public HR(Long hr_id, @NotEmpty String hr_name, @NotEmpty @Email String email, Department department) {
		super();
		this.hr_id = hr_id;
		this.hr_name = hr_name;
		this.email = email;
		this.department = department;
	}



	public Long getHr_id() {
		return hr_id;
	}

	public void setHr_id(Long hr_id) {
		this.hr_id = hr_id;
	}

	public String getHr_name() {
		return hr_name;
	}

	public void setHr_name(String hr_name) {
		this.hr_name = hr_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}
	
	
}

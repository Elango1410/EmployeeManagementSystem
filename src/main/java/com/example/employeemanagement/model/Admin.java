package com.example.employeemanagement.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Admin_Table")

public class Admin {
	
@Id
	
@GeneratedValue(strategy=GenerationType.AUTO)
	
@Column(name="Admin_ID")
	
private int adminId;
	
@Column(name="Admin_FirstName")
	
private String firstName;
@Column(name="Admin_LastName")

private String lastName;
	
@Column(name="Email_ID",unique=true)
	
private String adminEmailId;
@Column(name="Admin_Password")

private String adminPassword;
	
public Admin() {
		
super();
			
}
	
public Admin(int adminId, String firstName,String lastName, String adminEmailId,String adminPassword) {
	
	super();
		
this.adminId = adminId;
		
this.firstName = firstName;
this.lastName = lastName;
		
this.adminEmailId = adminEmailId;
this.adminPassword = adminPassword;
	
}

public int getAdminId() {
	return adminId;
}

public void setAdminId(int adminId) {
	this.adminId = adminId;
}

public String getFirstName() {
	return firstName;
}

public void setFirstName(String firstName) {
	this.firstName = firstName;
}

public String getLastName() {
	return lastName;
}

public void setLastName(String lastName) {
	this.lastName = lastName;
}

public String getAdminEmailId() {
	return adminEmailId;
}

public void setAdminEmailId(String adminEmailId) {
	this.adminEmailId = adminEmailId;
}

public String getAdminPassword() {
	return adminPassword;
}

public void setAdminPassword(String adminPassword) {
	this.adminPassword = adminPassword;
}
	

}

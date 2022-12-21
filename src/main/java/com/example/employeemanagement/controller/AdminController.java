package com.example.employeemanagement.controller;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.example.employeemanagement.model.Admin;
import com.example.employeemanagement.service.AdminService;





@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/admin")

public class AdminController {
@Autowired	
private AdminService adminService;

	
	
public AdminController(AdminService adminService) {
	super();
	this.adminService = adminService;
}


@PostMapping("/register")
	
public ResponseEntity<Admin> saveAdmin( @RequestBody  Admin admin)
	{

	System.out.println("admin register "+admin);
		
return new ResponseEntity<Admin>(adminService.saveAdmin(admin),HttpStatus.CREATED);
	
}
@PostMapping("/login")
public  ResponseEntity<Admin> loginAdmin( @RequestBody Admin admin)
{
return new ResponseEntity<Admin>(adminService.loginAdmin(admin),HttpStatus.OK);
	


}
}
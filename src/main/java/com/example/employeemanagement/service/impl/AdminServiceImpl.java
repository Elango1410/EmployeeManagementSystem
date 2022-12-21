package com.example.employeemanagement.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.employeemanagement.exception.UserNotFoundException;
import com.example.employeemanagement.model.Admin;
import com.example.employeemanagement.repository.AdminRepository;
import com.example.employeemanagement.service.AdminService;

@Service

public class AdminServiceImpl implements AdminService{
   
  @Autowired
 private AdminRepository adminRepository;

public AdminServiceImpl(AdminRepository adminRepository) {
	super();
	this.adminRepository = adminRepository;
}

	
	
@Override
		
public Admin saveAdmin(Admin admin) {//register
		
	return adminRepository.save(admin);
		
		
	
	
}
@Override
public Admin loginAdmin(Admin admin) {
	return this.adminRepository.findByAdminEmailIdAndAdminPassword(admin.getAdminEmailId(),admin.getAdminPassword()).orElseThrow(()->new UserNotFoundException("Admin ", "Id",admin.getAdminEmailId()+"and password "+admin.getAdminPassword() ));
}

}
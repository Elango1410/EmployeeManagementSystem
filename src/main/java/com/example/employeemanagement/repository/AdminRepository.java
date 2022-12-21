package com.example.employeemanagement.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.employeemanagement.model.Admin;



@Repository
public interface AdminRepository extends JpaRepository<Admin,Integer>
{
	Optional<Admin> findByAdminEmailIdAndAdminPassword(String emailId,String password);
	}

//findByFirstname(String )
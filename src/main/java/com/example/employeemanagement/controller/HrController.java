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
import com.example.employeemanagement.model.HR;
import com.example.employeemanagement.service.HrService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/hr")

public class HrController {
	private HrService hrService;

	public HrController(HrService hrService) {
		super();
		this.hrService = hrService;
	}
	
	@PostMapping("{dept_id}")
	public ResponseEntity<HR> addHr(@RequestBody HR hr,@PathVariable("dept_id") long dept_id)
	{
		System.out.println(hr);
		return new ResponseEntity<HR>(hrService.addHr(hr,dept_id),HttpStatus.CREATED);
	}
	
	@GetMapping("{dept_id}")
	
	public List<HR> getAllHr(@PathVariable long dept_id)
	{
		return hrService.getAllHr(dept_id);
	}
	
	@GetMapping("/hr/{hr_id}")
	public ResponseEntity<HR> getHrById(@PathVariable("hr_id") long hr_Id)
	{
		return new ResponseEntity<HR>(hrService.getHrById(hr_Id),HttpStatus.OK);
	}
	
	@PutMapping("{hr_id}")
	public ResponseEntity<HR> updateHr(@PathVariable("hr_id") long hr_id, @RequestBody HR hr)
	{
		return new ResponseEntity<HR> (hrService.updateHr(hr,hr_id),HttpStatus.OK);
	}
	
	@DeleteMapping("{hr_id}")
	public ResponseEntity<String> deleteHr(@PathVariable("hr_id") long hr_id)
	{
		hrService.deleteHr(hr_id);
		return new ResponseEntity<String>("Record deleted successfully",HttpStatus.OK);
	}


}

package com.app.controller;

import java.util.HashMap;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.dto.PasswordDto;
import com.app.dto.ResponseDto;
//import com.app.pojos.Role;
import com.app.pojos.User;
import com.app.service.IUserService;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
//dependencies
	@Autowired
	private IUserService userService;
	//rest api for login
//	@GetMapping("/login")
//	public ResponseEntity<?> authenticateUser(@RequestBody @Valid User transientUser){
//		System.out.println("in authenticate user");
//		return new ResponseEntity<>(userService.authenticateUser(transientUser.getEmail(), transientUser.getPassword()),HttpStatus.OK);
//		
//	}
//	@GetMapping("/login")
//	public User login(@RequestParam(value="email") String email,@RequestParam(value="password") String password) {
//		User user=userService.authenticateUser(email, password);
//		return user;
//		
//	}
//	
	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginDetails) {
		System.out.println(loginDetails);
		System.out.println("In Authenticate User " + loginDetails);
		System.out.println(loginDetails.getEmail());
		User user = userService.authenticateUser(loginDetails.getEmail(), loginDetails.getPassword());
		System.out.println(user);
		return new ResponseEntity<>(new ResponseDto(user.getName(),user.getEmail(),user.getPassword(),user.getPhoneNumber(),user.getRoles()),HttpStatus.CREATED);
	}
	
	
	
	
	
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@RequestBody @Valid User user){
		if(userService.existsByemail(user.getEmail()) != null) {
			return new ResponseEntity<>("Email is already taken",HttpStatus.BAD_REQUEST);
		}
		user.setName(user.getName());
		user.setEmail(user.getEmail());
		user.setPassword(user.getPassword());
		user.setPhoneNumber(user.getPhoneNumber());
		//user.setRole(role);
		user.setRoles(user.getRoles().CUSTOMER);
		
		userService.insertUserDetails(user);
		return new ResponseEntity<>("User registerted successfully",HttpStatus.OK);
		
	}
	
	@PostMapping("/change_password")
	public ResponseEntity<?> changePassword(@RequestBody PasswordDto password){
		String email = password.getEmail();
		String password2 = password.getPassword();
		User user=userService.updatePassword(email , password2);
		return new ResponseEntity<>(new ResponseDto(user.getName(),user.getEmail(),user.getPassword(),user.getPhoneNumber(),user.getRoles()),HttpStatus.CREATED);
	}

	
	
	
}

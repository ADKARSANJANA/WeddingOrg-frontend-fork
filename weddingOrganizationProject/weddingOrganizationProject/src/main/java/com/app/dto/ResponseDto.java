package com.app.dto;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import com.app.pojos.Roles;
import com.app.pojos.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ResponseDto{
	
	private String name;
	private String email;
	private String password;
	private String phoneNumber;
	private Roles role;
}

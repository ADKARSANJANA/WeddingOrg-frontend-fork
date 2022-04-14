package com.app.dto;

import com.app.pojos.Roles;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PasswordDto {
	
	private String email;
	private String password;
}

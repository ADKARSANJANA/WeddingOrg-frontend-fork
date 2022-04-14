package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.userRepository;
import com.app.pojos.Catering;
import com.app.pojos.User;
import com.app.pojos.Venue;

@Service
@Transactional
public class UserServiceImpl implements IUserService{
	@Autowired
	private userRepository userdao;

	@Override
	public  User authenticateUser(String email, String password) {
		System.out.println("in user service impl");
		return userdao.findByEmailAndPassword(email, password).orElseThrow(()-> new RuntimeException("invalid credentials"));
	}

	@Override
	public User existsByemail(String email) {
		
		return userdao.existsByEmail(email);
	}

	@Override
	public User insertUserDetails(User tranUser) {
		
		return userdao.save(tranUser);
	}

	@Override
	public List<User> getAllUser() {
		// TODO Auto-generated method stub
		return userdao.findAll();
	}

	@Override
	public User updatePassword(String email, String password) {
		
			User user = userdao.existsByEmail(email);
			 user.setPassword(password);
			return user;

		}

	@Override
	public User addSelectedVenueByCustomer(User user) {
		// TODO Auto-generated method stub
		return userdao.save(user);
	}

	@Override
	public User getById(int id) {
		
		return userdao.getUserById(id);
	}


	@Override
	public User addSelectedCateringByCustomer(User user) {
		
		return userdao.save(user);

	}

	@Override
	public User addSelectedDecorByCustomer(User user) {
		
		return userdao.save(user);
	}

	@Override
	public User addSelectedEntertainmentByCustomer(User user) {
		
		return userdao.save(user);
	}

	@Override
	public User addBookingDateByCustomer(User user) {
		
		return userdao.save(user);
	}




//	@Override
//	public User updateUser(User user) {
//		return userdao.save(user);
//		
//	}

	
	}
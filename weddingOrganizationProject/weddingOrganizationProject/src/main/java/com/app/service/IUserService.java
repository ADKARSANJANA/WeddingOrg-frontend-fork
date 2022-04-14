package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojos.Catering;
import com.app.pojos.User;
import com.app.pojos.Venue;

public interface IUserService {
	User authenticateUser(String email,String password);
	
	User existsByemail(String email);
	
	User insertUserDetails(User tranUser);
	
	List<User> getAllUser();
	
	User updatePassword(String email, String password);
	
	
	User addSelectedVenueByCustomer(User user);
	
	User getById(int id);
	
	User addBookingDateByCustomer(User user);
	
	//User addListOfCatering(List<Catering> listCatering,int ids);
	
	User addSelectedCateringByCustomer(User user);

	//User updateUser(User user);
	User addSelectedDecorByCustomer(User user);
	User addSelectedEntertainmentByCustomer(User user);
}

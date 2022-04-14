package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Catering;
import com.app.pojos.User;
import com.app.pojos.Venue;

public interface userRepository extends JpaRepository<User, Integer>{
	//finder method pattern
	    @Query("select u from User u where u.email=:em and u.password=:pass")
		Optional<User> findByEmailAndPassword(String em,String pass);
		@Query("select u from User u where u.email=:email")
		User existsByEmail(String email);
		
		String save(Venue v);
		
		User save(List<Catering> catering);
		@Query("select u from User u join fetch u.catering where u.id=:id")
		User getUserById(int id);
		
		@Query("select u from User u join fetch u.decor where u.id=:id")
		User getUserByIdfordecor(int id);
		
		@Query("select u from User u join fetch u.entertain where u.id=:id")
		User getUserByIdforEntertainment(int id);
		
}

package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Venue;
import com.app.pojos.VenueMenu;

public interface venueRepository extends JpaRepository<Venue, Integer>{
	//List<String>  findByVenueName(String venueName);
	
//	//List<String>  findByCity(String cityName);
//	@Query("select v from Venue v where v.city=:city and  v.date=:date and v.venueName=:venue")
//	List<Venue> findVenue(@Param("city") String city,@Param("venue") String venue ,@Param("date") LocalDate date);
//	
	Venue findById(int id);

	Venue save(VenueMenu venue);
	
	

}

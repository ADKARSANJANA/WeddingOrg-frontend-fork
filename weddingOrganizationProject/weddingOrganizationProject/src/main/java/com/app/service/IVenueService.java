package com.app.service;

import java.util.List;

import com.app.pojos.Venue;
import com.app.pojos.VenueMenu;

public interface IVenueService {
	//List<String>  findbyVenueName(String venueName);
	//List<String>  findByCity(String cityName);
    // List<Venue> findVenue(String city,String VenueName,LocalDate  date);
     
     List<Venue> getAllVenues();
     
     Venue selectVenueByCustomer(VenueMenu venueMenu);
     
     
 	
}

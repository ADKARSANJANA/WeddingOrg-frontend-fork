package com.app.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.app.dao.venueRepository;
import com.app.pojos.Booking;
import com.app.pojos.Venue;
import com.app.pojos.VenueMenu;
@Service
@Transactional
public class VenueServiceImpl implements IVenueService {
	
	@Autowired
	private venueRepository venueRepo;

//	@Override
//	public List<Venue> findVenue(String city, String VenueName, LocalDate date) {
//		List<Venue> venue=venueRepo.findVenue(city, VenueName, date);
//		if(venue==null) {
//			throw new WeddingOrgException("venue not available for the date and city");
//		}
//		return venueRepo.findVenue(city, VenueName, date);
//	}

	//admin functions--
	@Override
	public List<Venue> getAllVenues() {
		
		return venueRepo.findAll();
	}

	@Override
	public Venue selectVenueByCustomer(VenueMenu venueMenu) {
		Venue venu=new Venue();
		venu.setCity(venueMenu.getCity());
		venu.setVenueName(venueMenu.getVenueName());
		venu.setPrice(venueMenu.getPrice());
		return venueRepo.save(venu);
	}

	

	

//	@Override
//	public List<String> findbyVenueName(String venueName) {
//		
//		return venueRepo.findByVenueName(venueName);
//	}
//
//	@Override
//	public List<String> findByCity(String cityName) {
//		
//		return venueRepo.findByCity(cityName);
//	}

}

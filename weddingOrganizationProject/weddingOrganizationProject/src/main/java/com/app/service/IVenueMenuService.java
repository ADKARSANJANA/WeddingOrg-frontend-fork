package com.app.service;

import java.util.List;

import com.app.pojos.VenueMenu;

public interface IVenueMenuService {
	 List<VenueMenu> getAllVenuesMenu();
	 	VenueMenu getById(int id);
	 	VenueMenu addVenueMenuByAdmin(VenueMenu venueMenu);
	 	 void editVenueMenuByAdmin(VenueMenu venueMenu,int id);
	 	 void deleteVenueMenuByAdmin(int id);
}

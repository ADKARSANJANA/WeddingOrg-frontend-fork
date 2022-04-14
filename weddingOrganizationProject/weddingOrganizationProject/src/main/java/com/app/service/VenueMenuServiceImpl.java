package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.VenueMenuRepository;
import com.app.pojos.VenueMenu;

@Service
@Transactional
public class VenueMenuServiceImpl implements IVenueMenuService {

	@Autowired
	private VenueMenuRepository venueMenuRepo;

	@Override
	public List<VenueMenu> getAllVenuesMenu() {
		// TODO Auto-generated method stub
		return venueMenuRepo.findAll();
	}

	@Override
	public VenueMenu getById(int id) {
		// TODO Auto-generated method stub
		return venueMenuRepo.findById(id);
	}

	@Override
	public VenueMenu addVenueMenuByAdmin(VenueMenu venueMenu) {
		// TODO Auto-generated method stub
		return venueMenuRepo.save(venueMenu);
	}

	@Override
	public void editVenueMenuByAdmin(VenueMenu venueMenu, int id) {
		VenueMenu v=venueMenuRepo.getById(id);
		if(v!=null) {
			v.setCity(venueMenu.getCity());
			v.setVenueName(venueMenu.getVenueName());
			v.setPrice(venueMenu.getPrice());
		}
		venueMenuRepo.save(v);
		
	}

	@Override
	public void deleteVenueMenuByAdmin(int id) {
		venueMenuRepo.deleteById(id);
		
	}
}

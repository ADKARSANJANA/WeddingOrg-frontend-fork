package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.VenueMenu;

public interface VenueMenuRepository extends JpaRepository<VenueMenu,Integer> {
	VenueMenu findById(int id);

}

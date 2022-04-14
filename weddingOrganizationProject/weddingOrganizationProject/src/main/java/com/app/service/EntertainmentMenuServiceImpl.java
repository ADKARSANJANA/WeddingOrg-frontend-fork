package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.EntertainmentMenuRepository;
import com.app.pojos.EntertainmentMenu;

@Service
@Transactional
public class EntertainmentMenuServiceImpl implements IEntertainmentMenuService {
	@Autowired
	private EntertainmentMenuRepository entMenuRepo;

	@Override
	public List<EntertainmentMenu> getAllEntertainmentMenu() {
		
		return entMenuRepo.findAll();
	}
	
	@Override
	public EntertainmentMenu getById(int id) {
		// TODO Auto-generated method stub
		return entMenuRepo.findById(id);
	}

	@Override
	public EntertainmentMenu addEntertainmentMenuByAdmin(EntertainmentMenu entMenu) {
		entMenuRepo.save(entMenu);
		return entMenu;
	}

	@Override
	public void editEntertainmentMenuByAdmin(EntertainmentMenu entMenu, int id) {
		EntertainmentMenu e=entMenuRepo.getById(id);
		if(e!=null) {
			e.setEntItem(entMenu.getEntItem());
			e.setPrice(entMenu.getPrice());
		}
		entMenuRepo.save(e);
		
	}

	@Override
	public void deleteEntertainmentMenuByAdmin(int id) {
		entMenuRepo.deleteById(id);
		
	}

	

}

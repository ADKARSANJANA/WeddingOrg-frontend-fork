package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.DecorMenuRepository;
import com.app.pojos.DecorMenu;
@Service
@Transactional
public class DecorMenuServiceImpl implements IDecorMenuService {
	@Autowired
	private DecorMenuRepository decMenuRepo;

	@Override
	public List<DecorMenu> getAllDecorMenu() {
		
		return decMenuRepo.findAll();
	}
	@Override
	public DecorMenu getById(int id) {
		// TODO Auto-generated method stub
		return decMenuRepo.findById(id);
	}

	@Override
	public DecorMenu addDecoreMenuByAdmin(DecorMenu decMenu) {
		decMenuRepo.save(decMenu);
		return decMenu;
	}

	@Override
	public void editDecorMenuByAdmin(DecorMenu decMenu, int id) {
	
		DecorMenu d=decMenuRepo.getById(id);
		if(d!=null) {
			d.setDecorItem(decMenu.getDecorItem());
			d.setPrice(decMenu.getPrice());
		}
		decMenuRepo.save(d);
		
	}

	@Override
	public void deleteDecorMenuByAdmin(int id) {
		decMenuRepo.deleteById(id);
		
	}

	

}

package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CateringMenuRepository;
import com.app.pojos.CateringMenu;

@Service
@Transactional
public class CateringMenuServiceImpl implements ICateringMenuService {
	@Autowired
	private CateringMenuRepository catMenuRepo;

	@Override
	public List<CateringMenu> getAllCateringMenu() {
		
		return catMenuRepo.findAll();
	}
	@Override
	public CateringMenu getById(int id) {
		// TODO Auto-generated method stub
		return catMenuRepo.findById(id);
	}


	@Override
	public CateringMenu addCateringMenuByAdmin(CateringMenu catMenu) {
		 catMenuRepo.save(catMenu);
		return catMenu;
	}

	@Override
	public void editCateringMenuByAdmin(CateringMenu catMenu,int id) {
		
			CateringMenu c=catMenuRepo.getById(id);
			if(c!=null) {
	c.setFoodItem(catMenu.getFoodItem());
		c.setPrice(catMenu.getPrice());
			}
		catMenuRepo.save(c);
	}

	@Override
	public void deleteCateringMenuByAdmin(int id) {
		catMenuRepo.deleteById(id);
	}

	
}

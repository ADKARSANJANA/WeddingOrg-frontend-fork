package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CateringMenuRepository;
import com.app.dao.CateringRepository;
import com.app.pojos.Catering;
import com.app.pojos.CateringMenu;
@Service
@Transactional
public class CateringServImpl implements ICateringService{
	@Autowired
	private CateringMenuRepository catMenuRepo;
	@Autowired
	private CateringRepository catRepo;

	@Override
	public List<CateringMenu> getallCaterings() {
		// TODO Auto-generated method stub
		return catMenuRepo.findAll();
	}

	@Override
	public List<Catering> saveInCatering(List<CateringMenu> catMenu) {
		List<Catering> listCatering=new ArrayList<Catering>();
		for (CateringMenu cateringMenu : catMenu) {
			Catering catering=new Catering();
			catering.setFoodName(cateringMenu.getFoodItem());
			catering.setPrice(cateringMenu.getPrice());
			listCatering.add(catering);
		}
		return catRepo.saveAll(listCatering);
	};

}

package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.DecorMenuRepository;
import com.app.dao.DecorRepository;
import com.app.pojos.Catering;
import com.app.pojos.CateringMenu;
import com.app.pojos.Decor;
import com.app.pojos.DecorMenu;
@Service
@Transactional
public class DecorServiceImpl implements IDecorService {
	@Autowired
	private DecorRepository decRepo;
	@Autowired
	private DecorMenuRepository decMenuRepo;

	@Override
	public List<DecorMenu> getalldecor() {
		
		return decMenuRepo.findAll() ;
	}

	@Override
	public List<Decor> saveInDecor(List<DecorMenu> decMenu) {
		List<Decor> listdecor=new ArrayList<Decor>();
		for (DecorMenu decor : decMenu) {
			Decor dec=new Decor();
			dec.setDecorName(decor.getDecorItem());
			dec.setPrice(decor.getPrice());
			listdecor.add(dec);
		}
		
		return decRepo.saveAll(listdecor);
	}

}

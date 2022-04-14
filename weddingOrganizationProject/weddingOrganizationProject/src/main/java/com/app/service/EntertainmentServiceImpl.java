package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.EntertainmentMenuRepository;
import com.app.dao.EntertainmentRepository;
import com.app.pojos.Entertainment;
import com.app.pojos.EntertainmentMenu;
@Service
@Transactional
public class EntertainmentServiceImpl implements IEntertainmentService {

	@Autowired
	private EntertainmentRepository entRepo;
	@Autowired
	private EntertainmentMenuRepository entMenuRepo;
	@Override
	public List<EntertainmentMenu> getallEntertainment() {
		
		return entMenuRepo.findAll();
	}

	@Override
	public List<Entertainment> saveInEntertainment(List<EntertainmentMenu> entMenu) {
		List<Entertainment> listEnt=new ArrayList<Entertainment>();
		for (EntertainmentMenu entertainment : entMenu) {
			Entertainment entertain=new Entertainment();
			entertain.setEntertainmentName(entertainment.getEntItem());
			entertain.setPrice(entertainment.getPrice());
			listEnt.add(entertain);
		}
		return entRepo.saveAll(listEnt);
	}

}

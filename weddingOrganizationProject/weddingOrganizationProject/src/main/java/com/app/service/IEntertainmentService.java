package com.app.service;

import java.util.List;

import com.app.pojos.Catering;
import com.app.pojos.CateringMenu;
import com.app.pojos.Entertainment;
import com.app.pojos.EntertainmentMenu;

public interface IEntertainmentService {
List<EntertainmentMenu> getallEntertainment();
	
	List<Entertainment> saveInEntertainment(List<EntertainmentMenu> entMenu);


}

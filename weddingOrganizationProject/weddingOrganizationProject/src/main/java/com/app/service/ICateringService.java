package com.app.service;

import java.util.List;

import com.app.pojos.Catering;
import com.app.pojos.CateringMenu;

public interface ICateringService {
	
	List<CateringMenu> getallCaterings();
	
	List<Catering> saveInCatering(List<CateringMenu> catMenu);

}

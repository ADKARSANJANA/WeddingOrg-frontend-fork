package com.app.service;

import java.util.List;

import com.app.pojos.Decor;
import com.app.pojos.DecorMenu;

public interface IDecorService {
List<DecorMenu> getalldecor();
	
	List<Decor> saveInDecor(List<DecorMenu> decMenu);

}

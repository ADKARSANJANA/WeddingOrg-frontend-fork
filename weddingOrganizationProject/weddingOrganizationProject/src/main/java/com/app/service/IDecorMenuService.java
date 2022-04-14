package com.app.service;

import java.util.List;

import com.app.pojos.DecorMenu;



public interface IDecorMenuService {
	List<DecorMenu> getAllDecorMenu();
DecorMenu getById(int id);
	 DecorMenu addDecoreMenuByAdmin(DecorMenu decMenu);
	 void editDecorMenuByAdmin(DecorMenu decMenu,int id);
	 void deleteDecorMenuByAdmin(int id);
}

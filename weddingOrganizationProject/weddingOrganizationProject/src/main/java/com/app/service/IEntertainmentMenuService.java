package com.app.service;

import java.util.List;

import com.app.pojos.EntertainmentMenu;



public interface IEntertainmentMenuService {
	List<EntertainmentMenu> getAllEntertainmentMenu();
	EntertainmentMenu getById(int id);
	EntertainmentMenu addEntertainmentMenuByAdmin(EntertainmentMenu entMenu);
	 void editEntertainmentMenuByAdmin(EntertainmentMenu entMenu,int id);
	 void deleteEntertainmentMenuByAdmin(int id);
}

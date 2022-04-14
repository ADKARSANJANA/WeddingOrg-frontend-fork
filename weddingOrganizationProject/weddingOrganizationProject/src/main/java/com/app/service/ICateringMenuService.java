package com.app.service;

import java.util.List;

import com.app.pojos.CateringMenu;

public interface ICateringMenuService {
 List<CateringMenu> getAllCateringMenu();
 CateringMenu getById(int id);
 CateringMenu addCateringMenuByAdmin(CateringMenu catMenu);
 void editCateringMenuByAdmin(CateringMenu catMenu,int id);
 void deleteCateringMenuByAdmin(int id);
}

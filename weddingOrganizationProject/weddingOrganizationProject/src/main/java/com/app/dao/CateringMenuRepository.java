package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.CateringMenu;

public interface CateringMenuRepository extends JpaRepository<CateringMenu, Integer> {
 CateringMenu  findById(int id);
}

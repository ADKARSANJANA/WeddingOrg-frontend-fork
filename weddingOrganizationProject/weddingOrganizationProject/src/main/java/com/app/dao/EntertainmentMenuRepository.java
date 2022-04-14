package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.EntertainmentMenu;

public interface EntertainmentMenuRepository extends JpaRepository<EntertainmentMenu, Integer> {
	EntertainmentMenu findById(int id);
}

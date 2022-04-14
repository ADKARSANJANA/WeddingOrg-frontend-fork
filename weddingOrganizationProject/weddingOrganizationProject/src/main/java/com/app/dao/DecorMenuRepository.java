package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.DecorMenu;

public interface DecorMenuRepository extends JpaRepository<DecorMenu, Integer> {
 DecorMenu findById(int id);
}

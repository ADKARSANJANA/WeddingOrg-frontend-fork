package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Catering;
import com.app.pojos.CateringMenu;

public interface CateringRepository extends JpaRepository<Catering, Integer> {

	//List<Catering> saveAll(List<CateringMenu> catMenu);

	

}

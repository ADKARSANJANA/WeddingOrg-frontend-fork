package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "entertainment_menu")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class EntertainmentMenu extends BaseEntity{

	@Column(name="entertainment_item")
	private String entItem;
	
	private double price;
}

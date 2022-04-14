package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "decor_menu")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class DecorMenu extends BaseEntity {
 
	@Column(name="decor_item")
	private String decorItem;
 
 private double price;
}

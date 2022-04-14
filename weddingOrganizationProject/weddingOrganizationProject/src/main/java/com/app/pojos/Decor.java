package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "decor")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Decor extends BaseEntity {
	@Column(name = "decor_name")
	private String decorName;

	private double price;

	
	@Override
	public String toString() {
		return "Decor [decorName=" + decorName + ", price=" + price + "]";
	}
}

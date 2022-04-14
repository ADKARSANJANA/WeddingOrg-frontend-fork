package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "catering")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Catering extends BaseEntity{
	@Column(name="food_name")
	 private String foodName;
	 
	 private double price;
		
	 
	 

	@Override
	public String toString() {
		return "Catering [foodName=" + foodName + ", price=" + price + "]";
	}
	 
}

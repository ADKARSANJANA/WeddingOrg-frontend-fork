package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "venue")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Venue extends BaseEntity{
	@Column(name="venue_name")
	private String venueName;
	
	
	private String city;
	
	private double price;
	
	

	
	

	@Override
	public String toString() {
		return "Venue [venueName=" + venueName + ", city=" + city +    "]";
	}
	
	
	
}

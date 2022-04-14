package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "entertainment")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Entertainment extends BaseEntity {
	@Column(name = "entertainment_name")
	private String entertainmentName;

	private double price;
	
	


	
	@Override
	public String toString() {
		return "Entertainment [entertainmentName=" + entertainmentName + ", price=" + price + "]";
	}
}

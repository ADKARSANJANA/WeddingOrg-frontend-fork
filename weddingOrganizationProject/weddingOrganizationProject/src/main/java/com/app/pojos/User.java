package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class User extends BaseEntity {
	@NotBlank(message="name cannot be left blank")
	@Column(length=30)
	private String name;
	
	
	@Column(length = 30)
	@NotBlank(message = "email can't be blank")
	@Email
	private String email;
	
	
	@Column(length = 30)
	//@Pattern(regexp="((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})",message = "Invalid password")
	private String password;
	
	
	@Column(length=10)
	@NotBlank(message = "invalid phone number")
	private String phoneNumber;
	
	@Enumerated(EnumType.STRING)
	private Roles roles;
	 
	@OneToOne(cascade = CascadeType.ALL)
	private Booking book;

@OneToOne(cascade = CascadeType.ALL)
	private Venue venue;
	
	
	
	
	@OneToMany(targetEntity = Catering.class,cascade = CascadeType.ALL ,orphanRemoval=true)
	@JoinColumn(name="uc_fk",referencedColumnName = "id")
//	@JoinTable(name="catering_join_user",
//			joinColumns = {@JoinColumn(name = "user_id")},
//	          inverseJoinColumns = {@JoinColumn(name = "catering_id")})
	private List<Catering> catering=new ArrayList<>();
	
	@OneToMany(targetEntity = Decor.class,cascade = CascadeType.ALL,orphanRemoval=true)
	@JoinColumn(name="ud_fk",referencedColumnName = "id")
//	@JoinTable(name="decor_join_user",
//			joinColumns = {@JoinColumn(name = "user_id")},
//	          inverseJoinColumns = {@JoinColumn(name = "decor_id")})
	private List<Decor> decor=new ArrayList<>();
	
	@OneToMany(targetEntity = Entertainment.class,cascade = CascadeType.ALL,orphanRemoval=true)
	@JoinColumn(name="ue_fk",referencedColumnName = "id")
//	@JoinTable(name="enetrtainment_join_user",
//			joinColumns = {@JoinColumn(name = "user_id")},
//	          inverseJoinColumns = {@JoinColumn(name = "ent_id")})
	private List<Entertainment> entertain=new ArrayList<>();
	
//	//helper methods
//	public void addCatering(List<Catering> cat) {
//		catering.addAll(cat);
//		
//	}
//	public void removeCatering(Catering cat) {
//		catering.remove(cat);
//		cat.setFoodName(null);
//		cat.setPrice(0.0);
//	}

}

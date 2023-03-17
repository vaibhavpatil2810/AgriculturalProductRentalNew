package com.AgriProductRental.Beans;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.hibernate.type.TrueFalseType;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property ="userId")
public class User {
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private int userId;
	private String email;
	private String name;
	private String password;
	private String role;
	
	@OneToMany(mappedBy="Owner",fetch=FetchType.LAZY,orphanRemoval = true)
	private List<Equipment> eList;
	
	@OneToMany(mappedBy="Customer",fetch=FetchType.LAZY,orphanRemoval = true)
	private List<Rental> rList;
	
	public User(int userId, String email, String name, String password, String role) {
		super();
		this.userId = userId;
		this.email = email;
		this.name = name;
		this.password = password;
		this.role = role;
	
		
	}
	public User(int userId, String email, String name, String password, String role, List<Equipment> eList) {
		super();
		this.userId = userId;
		this.email = email;
		this.name = name;
		this.password = password;
		this.role = role;
		this.eList = eList;
	}
	


	public User(int userId, String email, String name, String password, String role, List<Equipment> eList,
			List<Rental> rList) {
		super();
		this.userId = userId;
		this.email = email;
		this.name = name;
		this.password = password;
		this.role = role;
		this.eList = eList;
		this.rList = rList;
	}
	
	public User() {
		super();
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public List<Equipment> geteList() {
		return eList;
	}

	public void seteList(List<Equipment> eList) {
		this.eList = eList;
	}

	
	public List<Rental> getrList() {
		return rList;
	}
	public void setrList(List<Rental> rList) {
		this.rList = rList;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", email=" + email + ", name=" + name + ", password=" + password + ", role="
				+ role + "]";
	}
	

}

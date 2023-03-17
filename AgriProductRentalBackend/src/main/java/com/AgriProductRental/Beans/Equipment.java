package com.AgriProductRental.Beans;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity

public class Equipment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String description;
	private double rentalPrice;
	private String imgUrl;
	
	@ManyToOne()
	@JoinColumn(name = "Owner_Id" )
	//@JsonBackReference
	private User Owner;
	
	
	@OneToMany(mappedBy="Customer",fetch=FetchType.LAZY,orphanRemoval = true)
	private List<Rental> rList;
	
	
	public Equipment() {
		super();
		
	}
	public Equipment(int id, String name, String description, double rentalPrice, String imgUrl, User owner) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.rentalPrice = rentalPrice;
		this.imgUrl = imgUrl;
		Owner = owner;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getRentalPrice() {
		return rentalPrice;
	}
	public void setRentalPrice(double rentalPrice) {
		this.rentalPrice = rentalPrice;
	}
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	public User getOwner() {
		return Owner;
	}
	public void setOwner(User owner) {
		Owner = owner;
	}
	@Override
	public String toString() {
		return "Equipment [id=" + id + ", name=" + name + ", description=" + description + ", rentalPrice="
				+ rentalPrice + ", imgUrl=" + imgUrl + ", Owner=" + Owner + "]";
	}
	
	

}

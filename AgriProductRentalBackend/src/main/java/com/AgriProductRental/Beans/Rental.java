package com.AgriProductRental.Beans;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
@Entity
public class Rental {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id;

	private Date startDate;

	private int Hours;

	

	@ManyToOne()
	@JoinColumn(name = "Equipment_id")
	private Equipment equipmentId;

	@ManyToOne()
	@JoinColumn(name = "Renter_Id")
	private User Customer;

	public Rental() {
		super();
	}

	public Rental(int id, Date startDate, int hours, Equipment equipmentId, User customer) {
		super();
		Id = id;
		this.startDate = startDate;
		Hours = hours;
		
		this.equipmentId = equipmentId;
		Customer = customer;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public Date getStartDate() {
		return startDate;
	}                

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public int getHours() {
		return Hours;
	}

	public void setHours(int hours) {
		Hours = hours;
	}

	

	public Equipment getEquipmentId() {
		return equipmentId;
	}

	public void setEquipmentId(Equipment equipmentId) {
		this.equipmentId = equipmentId;
	}

	public User getCustomer() {
		return Customer;
	}

	public void setCustomer(User customer) {
		Customer = customer;
	}

	@Override
	public String toString() {
		return "Rental [Id=" + Id + ", startDate=" + startDate + ", Hours=" + Hours + "]";
	}
	


}

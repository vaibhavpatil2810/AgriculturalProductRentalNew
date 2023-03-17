package com.AgriProductRental.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.AgriProductRental.Beans.Rental;

public interface RentalDao extends JpaRepository<Rental, Integer> {

}

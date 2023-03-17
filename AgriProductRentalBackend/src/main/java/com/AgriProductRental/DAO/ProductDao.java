package com.AgriProductRental.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.AgriProductRental.Beans.Equipment;
import com.AgriProductRental.Beans.User;


public interface ProductDao extends JpaRepository<Equipment, Integer> {

}

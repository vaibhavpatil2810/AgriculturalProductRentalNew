package com.AgriProductRental.DAO;


import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.AgriProductRental.Beans.User;

public interface UserDao extends JpaRepository<User, Integer> {

   // User findByEmail(String email);
    User findByEmailAndPassword(String email, String password);
	

}

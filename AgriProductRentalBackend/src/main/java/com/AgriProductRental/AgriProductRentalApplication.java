package com.AgriProductRental;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.AgriProductRental.Beans.User;
import com.AgriProductRental.DAO.UserDao;

@SpringBootApplication
public class AgriProductRentalApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgriProductRentalApplication.class, args);
	}

}

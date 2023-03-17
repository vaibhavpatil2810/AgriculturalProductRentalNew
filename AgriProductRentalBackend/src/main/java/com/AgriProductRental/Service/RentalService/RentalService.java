package com.AgriProductRental.Service.RentalService;

import java.util.List;

import com.AgriProductRental.Beans.Equipment;
import com.AgriProductRental.Beans.Rental;

public interface RentalService {

	List<Rental> getAllRentals();

	Rental getById(int pid);

	void addnewRental(Rental p);

	void deleteById(int pid);

}

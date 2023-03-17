package com.AgriProductRental.Service.ProductServices;

import java.util.List;

import com.AgriProductRental.Beans.Equipment;

public interface ProductService {

	List<Equipment> getAllEquipments();

	Equipment getById(int pid);

	

	void deleteById(int pid);

	int updateProduct(Equipment p);

	void addnewProduct(int userId, Equipment p);

}

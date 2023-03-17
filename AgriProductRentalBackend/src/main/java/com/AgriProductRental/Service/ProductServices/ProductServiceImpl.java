package com.AgriProductRental.Service.ProductServices;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.AgriProductRental.Beans.Equipment;
import com.AgriProductRental.Beans.User;
import com.AgriProductRental.DAO.ProductDao;
import com.AgriProductRental.DAO.UserDao;

import java.util.Optional;


@Service
public class ProductServiceImpl implements ProductService {
	@Autowired
	ProductDao productDao;
	@Autowired
	UserDao userDao;

	@Override
	public List<Equipment> getAllEquipments() {
	
		return productDao.findAll();
	}

	@Override
	public Equipment getById(int pid) {
		Optional<Equipment> op=productDao.findById(pid);
		/*if(op.isPresent()) {
			return op.get();
		}
		return null;*/
		return op.orElse(null);
	}

	

		@Override
		public void deleteById(int pid) {
			productDao.deleteById(pid);
		}

		@Override
		public int updateProduct(Equipment equipment) {
			Optional<Equipment> op=productDao.findById(equipment.getId());
			if(op.isPresent()) {
				Equipment e=op.get();
				e.setRentalPrice(equipment.getRentalPrice());
				e.setImgUrl(equipment.getImgUrl());
				e.setName(equipment.getName());
				productDao.save(e);
				return 1;
			}
			return 0;
		}

		
		@Override
		public void addnewProduct(int userId, Equipment p) {

			 Optional<User> user = userDao.findById(userId);

		        p.setOwner(user.get());
		         productDao.save(p);
		}

		
	

	
	
	
}

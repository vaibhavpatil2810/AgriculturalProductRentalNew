package com.AgriProductRental.Service.RentalService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.AgriProductRental.Beans.Equipment;
import com.AgriProductRental.Beans.Rental;
import com.AgriProductRental.DAO.RentalDao;
@Service
public class RentalServiceImpl implements RentalService{
	
	@Autowired
	RentalDao rentalDao;

	@Override
	public List<Rental> getAllRentals() {
		
		return rentalDao.findAll();
	}

	@Override
	public Rental getById(int pid) {
		Optional<Rental> op=rentalDao.findById(pid);
		/*if(op.isPresent()) {
			return op.get();
		}
		return null;*/
		return op.orElse(null);
	}

	@Override
	public void addnewRental(Rental p) {

		rentalDao.save(p);
	}

	@Override
	public void deleteById(int pid) {
		rentalDao.deleteById(pid);
	}                                                                                                                                                                                                            
	

}

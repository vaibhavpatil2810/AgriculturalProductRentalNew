package com.AgriProductRental.Service.RentalServices;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.AgriProductRental.Beans.Equipment;
import com.AgriProductRental.Beans.User;
import com.AgriProductRental.DAO.UserDao;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	 UserDao userDao;


	@Override
	public List<User> getAllUsers() {
		
		return userDao.findAll();
	}

	@Override
	public void addnewUser(User u) {
		userDao.save(u);
		
	}

	@Override
	public void deleteById(int uid) {
		userDao.deleteById(uid);
		
	}

	@Override
	public int updateUser(User p) {
		Optional<User> op=userDao.findById(p.getUserId());
		if(op.isPresent()) {
			User e=op.get();
			e.setEmail(p.getEmail());
			e.setName(p.getName());
			e.setPassword(null);
			userDao.save(e);
			return 1;
		}
		return 0;
	}

	@Override
	public User validateUser(String mail, String pass) {
		User user=userDao.findByEmailAndPassword(mail,pass);
		if(user!=null)
		{
		
			return user;
			
		
			
		}
		else
		return null;
	}
	

	
//	public User validateUser(User user) {
//		
//		
//		return userDao.findByEmail(user.getEmail());
//	}

	
	
	
}

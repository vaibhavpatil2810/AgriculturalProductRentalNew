package com.AgriProductRental.Service.RentalServices;

import java.util.List;

import com.AgriProductRental.Beans.User;

public interface UserService {




	List<User> getAllUsers();

	void addnewUser(User u);

	void deleteById(int uid);

	int updateUser(User p);

	User validateUser(String mail, String pass);

	// User validateUser(User user);


}

package com.AgriProductRental.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.AgriProductRental.Beans.Equipment;
import com.AgriProductRental.Beans.User;
import com.AgriProductRental.Service.RentalServices.UserService;
@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserService uService;
	
	@GetMapping("/users")
	public ResponseEntity<List<User>> displayAll() {
		List<User> elist=uService.getAllUsers();
		return ResponseEntity.ok(elist);	
	}
	
	@PostMapping("/validate")
	public ResponseEntity<User> validateUser( @RequestBody User u) {
		String mail=u.getEmail();
		String pass=u.getPassword();
		User user=uService.validateUser(mail,pass);
		return  ResponseEntity.ok(user);
	}
	
	
	@PostMapping("/users")
	public ResponseEntity<String> addUser( @RequestBody User u) {
		uService.addnewUser(u);
		return new ResponseEntity("Data added successfully",HttpStatus.CREATED);
	}
	
	
	
	@DeleteMapping("/users/{uid}")
	public ResponseEntity<String> deleteProduct(@PathVariable int uid) {
		uService.deleteById(uid);
		return new ResponseEntity("Data deleted successfully-->"+ uid,HttpStatus.OK);
		
	}
	
		
	@PutMapping("/users/{pid}")
	public ResponseEntity<String> updateProduct(@RequestBody User p) {
		int n=uService.updateUser(p);
		if(n>0)
		   return new ResponseEntity("Data added successfully"+p.getName(),HttpStatus.CREATED);
		else
		   return new ResponseEntity(HttpStatus.BAD_REQUEST);
	}

}

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
import com.AgriProductRental.Beans.Rental;
import com.AgriProductRental.Service.RentalService.RentalService;
@CrossOrigin("*")
@RestController
@RequestMapping("/rental")
public class RentalController {
	@Autowired
	RentalService rService;
	
	@GetMapping("/rentals")
	public ResponseEntity<List<Rental>> displayAllRentals() {
		List<Rental> elist=rService.getAllRentals();
		return ResponseEntity.ok(elist);	
	}
	

	@GetMapping("/rentals/{pid}")
	public ResponseEntity<Rental> displayById(@PathVariable int pid) {
		Rental e=rService.getById(pid);
		if(e!=null) {
			return new ResponseEntity(e,HttpStatus.OK);
		}
		return new ResponseEntity(HttpStatus.NOT_FOUND);
	}
	
	
	
	@PostMapping("/rentals")
	public ResponseEntity<String> addEquipment( @RequestBody Rental p) {
		rService.addnewRental(p);
		return new ResponseEntity("Data added successfully",HttpStatus.CREATED);
	}
	
	@DeleteMapping("/rentals/{pid}")
	public ResponseEntity<String> deleteProduct(@PathVariable int pid) {
		rService.deleteById(pid);
		return new ResponseEntity("Data deleted successfully-->"+ pid,HttpStatus.OK);
		
	}
//	
//		
//	@PutMapping("/rentals/{pid}")
//	public ResponseEntity<String> updateProduct(@RequestBody Equipment p) {
//		int n=rService.updateProduct(p);
//		if(n>0)
//		   return new ResponseEntity("Data added successfully"+p.getId(),HttpStatus.CREATED);
//		else
//		   return new ResponseEntity(HttpStatus.BAD_REQUEST);
//	}
	

}

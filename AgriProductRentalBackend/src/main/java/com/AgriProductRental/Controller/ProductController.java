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
import com.AgriProductRental.Service.ProductServices.ProductService;
import com.AgriProductRental.Service.RentalServices.UserService;
@CrossOrigin("*")
@RestController
@RequestMapping("/product")
public class ProductController {
	@Autowired
	ProductService productService;
	
	@GetMapping("/products")
	public ResponseEntity<List<Equipment>> displayAll() {
		List<Equipment> elist=productService.getAllEquipments();
		return ResponseEntity.ok(elist);	
	}
	

	@GetMapping("/products/{pid}")
	public ResponseEntity<Equipment> displayById(@PathVariable int pid) {
		Equipment e=productService.getById(pid);
		if(e!=null) {
			return new ResponseEntity(e,HttpStatus.OK);
		}
		return new ResponseEntity(HttpStatus.NOT_FOUND);
	}
	
	
	
	@PostMapping("/products/{userId}")
	public ResponseEntity<String> addEquipment(@PathVariable int userId, @RequestBody Equipment p) {
		productService.addnewProduct(userId,p);
		return new ResponseEntity("Data added successfully",HttpStatus.CREATED);
	}
	
	
	
	@DeleteMapping("/products/{pid}")
	public ResponseEntity<String> deleteProduct(@PathVariable int pid) {
		productService.deleteById(pid);
		return new ResponseEntity("Data deleted successfully-->"+ pid,HttpStatus.OK);
		
	}
	
		
	@PutMapping("/products/{pid}")
	public ResponseEntity<String> updateProduct(@RequestBody Equipment p) {
		int n=productService.updateProduct(p);
		if(n>0)
		   return new ResponseEntity("Data added successfully"+p.getId(),HttpStatus.CREATED);
		else
		   return new ResponseEntity(HttpStatus.BAD_REQUEST);
	}
}

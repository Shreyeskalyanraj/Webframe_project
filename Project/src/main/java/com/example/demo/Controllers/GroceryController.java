package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Grocery;
import com.example.demo.Service.GroceryService;

@CrossOrigin(origins = "http://localhost:5174/")
@RestController
@RequestMapping("/api/Grocery")
public class GroceryController {
	@Autowired
	private GroceryService groceryItemService;	
	@GetMapping("/show")
	public List<Grocery> showItems() {
		return groceryItemService.getItems();
	}
	
	@GetMapping("/show/{id}")
	public Grocery showItem(@PathVariable("id") long id) {
		return groceryItemService.getItem(id);
	}
	
	//post  
	@PostMapping("/add") 
	public Grocery addItem(@RequestBody Grocery obj) {
		return groceryItemService.addItem(obj);
	}

	@DeleteMapping("/delete/{id}")
	public String delById(@PathVariable long id) {
		groceryItemService.deleteById(id);
		return "successfully deleted";
	}
	

   	@PutMapping("/update/{id}")
   	public Grocery updatebyId(@PathVariable long id,
   			@RequestBody Grocery obj) {	
   		return groceryItemService.updateById(id, obj);
   	}

//@GetMapping("/show/{id}")
//public Optional<Grocery> findById(@PathVariable Long id) {
//return studserv.findById(id);
//}

}
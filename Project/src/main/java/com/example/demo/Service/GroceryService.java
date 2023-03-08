package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Grocery;
import com.example.demo.Repository.MyRepo;

@Service
public class GroceryService {

	@Autowired
	private MyRepo repo;

// addStudent
	public Grocery addItem(Grocery obj) {
		return repo.save(obj);
	}

// getStudent
	public List<Grocery> getItems() {
		List<Grocery> arr = new ArrayList<>();
		arr = repo.findAll();
		return arr;
	}

//updatebyId 
	public void deleteById(Long id) {
		repo.deleteById(id);
	}
	
	public Grocery updateById(Long id, Grocery obj) {
		Grocery groc = repo.findById(id).get();
		
		if(Objects.nonNull(groc) && (!Objects.isNull(obj.getName()))) {
			groc.setName(obj.getName());
		}
		if(Objects.nonNull(groc) && (obj.getPayment() != 0)) {
			groc.setPayment(obj.getPayment());
		}
		if(Objects.nonNull(groc) && (obj.getQuantity() != 0)) {
			groc.setQuantity(obj.getQuantity());
		}
		if(Objects.nonNull(groc) && (obj.getRate() != 0)) {
			groc.setRate(obj.getRate());
		}
		
		repo.save(groc);
				
		return groc; 
	}

	public Grocery getItem(long id) {
		return repo.findById(id).get();
	}
	
	

////getById
//public Optional<Grocery> findById(Long id) {
//Optional<Grocery> stud = repo.findById(id);
//return stud;
//}

}
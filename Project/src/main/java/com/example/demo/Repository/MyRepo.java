package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Grocery;

public interface MyRepo extends JpaRepository<Grocery, Long> {

}

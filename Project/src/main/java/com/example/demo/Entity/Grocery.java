package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Grocery")
public class Grocery {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "item_name")
	private String name;

	@Column(name = "item_Quantity")
	private int Quantity;

	@Column(name = "item_Rate")
	private int Rate;

	@Column(name = "Payment_Type")
	private int Payment;

	public Grocery() {
	}

	public Grocery(Long id, String name, int quantity, int rate, int payment) {
		super();
		this.id = id;
		this.name = name;
		Quantity = quantity;
		Rate = rate;
		Payment = payment;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getQuantity() {
		return Quantity;
	}

	public void setQuantity(int quantity) {
		Quantity = quantity;
	}

	public int getRate() {
		return Rate;
	}

	public void setRate(int rate) {
		Rate = rate;
	}

	public int getPayment() {
		return Payment;
	}

	public void setPayment(int payment) {
		Payment = payment;
	}

}
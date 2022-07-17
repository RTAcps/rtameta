package com.devsuperior.rtameta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.rtameta.entities.Sale;
import com.devsuperior.rtameta.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired	
	private SaleRepository repository;
	
	public List<Sale> findSales() {
		return repository.findAll();
	}
}

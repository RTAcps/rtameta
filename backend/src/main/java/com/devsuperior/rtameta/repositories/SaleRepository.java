package com.devsuperior.rtameta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.rtameta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	
}

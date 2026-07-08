package com.techstore.backend.repository;

import com.techstore.backend.modal.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    List<Transaction> findBySellerId(Long sellerId);
}

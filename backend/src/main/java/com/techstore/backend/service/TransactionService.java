package com.techstore.backend.service;

import com.techstore.backend.modal.Order;
import com.techstore.backend.modal.Seller;
import com.techstore.backend.modal.Transaction;

import java.util.List;

public interface TransactionService {

    Transaction createTransaction(Order order);
    List<Transaction> getTransactionsBySellerId(Seller seller);
    List<Transaction> getAllTransactions();
}

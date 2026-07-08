package com.techstore.backend.service.impl;

import com.techstore.backend.modal.Order;
import com.techstore.backend.modal.Seller;
import com.techstore.backend.modal.Transaction;
import com.techstore.backend.repository.SellerRepository;
import com.techstore.backend.repository.TransactionRepository;
import com.techstore.backend.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TransactionServiceImpl implements TransactionService {

    private final TransactionRepository transactionRepository;
    private final SellerRepository sellerRepository;

    @Override
    public Transaction createTransaction(Order order) {
        Seller seller = sellerRepository.findById(order.getSellerId()).get();

        Transaction transaction = new Transaction();
        transaction.setSeller(seller);
        transaction.setCustomer(order.getUser());
        transaction.setOrder(order);

        return transactionRepository.save(transaction);
    }

    @Override
    public List<Transaction> getTransactionsBySellerId(Seller seller) {
        return transactionRepository.findBySellerId(seller.getId());
    }

    @Override
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }
}

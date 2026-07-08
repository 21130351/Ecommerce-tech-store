package com.techstore.backend.repository;

import com.techstore.backend.modal.Deal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DealRepository extends JpaRepository<Deal, Long> {


}

package com.techstore.backend.service;

import com.techstore.backend.modal.Seller;
import com.techstore.backend.modal.SellerReport;

public interface SellerReportService {
    SellerReport getSellerReport(Seller seller);
    SellerReport updateSellerReport(SellerReport sellerReport);
}

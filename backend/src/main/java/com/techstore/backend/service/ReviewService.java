package com.techstore.backend.service;

import com.techstore.backend.modal.Product;
import com.techstore.backend.modal.Review;
import com.techstore.backend.modal.User;
import com.techstore.backend.request.CreateReviewRequest;

import java.util.List;

public interface ReviewService {

    Review createReview(CreateReviewRequest req,
                        User user,
                        Product product);
    List<Review> getReviewByProductId(Long productId);

    Review updateReview(Long reviewId, String reviewText, double rating, Long userId) throws Exception;

    void deleteReview(Long reviewId, Long userId) throws Exception;

    Review getReviewById(Long reviewId) throws Exception;
}

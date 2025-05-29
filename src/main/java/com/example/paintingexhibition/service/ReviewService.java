package com.example.paintingexhibition.service;

import com.example.paintingexhibition.model.Review;
import com.example.paintingexhibition.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;


    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }


    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }


    public Optional<Review> getReviewById(String id) {
        return reviewRepository.findById(id);
    }


    public Optional<Review> updateReview(String id, Review updatedReview) {
        Optional<Review> existingReview = reviewRepository.findById(id);
        if (existingReview.isPresent()) {
            Review review = existingReview.get();
            review.setRating(updatedReview.getRating());
            review.setComment(updatedReview.getComment());
            return Optional.of(reviewRepository.save(review));
        } else {
            return Optional.empty();
        }
    }


    public boolean deleteReview(String id) {
        Optional<Review> review = reviewRepository.findById(id);
        if (review.isPresent()) {
            reviewRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}

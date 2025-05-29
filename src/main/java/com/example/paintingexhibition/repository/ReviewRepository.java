package com.example.paintingexhibition.repository;


import com.example.paintingexhibition.model.Review;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ReviewRepository extends MongoRepository<Review, String> {
}

package com.example.paintingexhibition.repository;


import com.example.paintingexhibition.model.Painting;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaintingRepository extends MongoRepository<Painting, String> {


}

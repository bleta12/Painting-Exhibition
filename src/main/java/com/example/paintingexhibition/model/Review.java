package com.example.paintingexhibition.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "reviews")
public class Review {

    @Id
    private String id;

    private int rating;
    private String comment;
}

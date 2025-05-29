package com.example.paintingexhibition.model;


import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "painting")
@Getter
@Setter
public class Painting {

    @Id
    private String id;
    private String title;
    private int year;
    private String description;
    private String imageUrl;
    private String userId;


}


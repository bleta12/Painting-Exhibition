package com.example.paintingexhibition.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "user")
@Getter
@Setter
public class User {


    @Id
    private String id;
    private String name;
    private String lastname;
    private String username;
    private String email;
    private String password;
    private String bio;
    private String profileImage;




}

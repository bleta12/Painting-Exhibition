package com.example.paintingexhibition.controller;


import com.example.paintingexhibition.model.User;
import com.example.paintingexhibition.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {


    @Autowired
    public UserService service;

    public UserController (UserService service){
        this.service=service;
    }

  /*  @PostMapping
    public ResponseEntity<User> createUser(){
      return
    }*/


}

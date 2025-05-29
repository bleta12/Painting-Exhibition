package com.example.Spring.airbnbProperty.models;

import com.example.Spring.airbnbProperty.models.enums.Role;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.ArrayList;
import java.util.List;




@Entity
@Getter
@Setter
@Table(name = "Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String lastname;
    private String email;
    private String password;
    private String username;
    private String phoneNumber;
    private String profilePicture;
    private String facebook;
    private String instagram;
    private String snapchat;
    private String twitter;


    @Enumerated(EnumType.STRING)
    private Role role;


    @JsonManagedReference
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<AirbnbProperty> properties = new ArrayList<>();



}


UserRepositoryInterface
package com.example.Spring.airbnbProperty.repository;

import com.example.Spring.airbnbProperty.models.User;
import com.example.Spring.airbnbProperty.models.dtos.UserDTO;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepositoryInterface extends CrudRepository<User,Long> {

    @Modifying
    @Transactional
    @Query("UPDATE User u SET u.profilePicture = :profilePicture WHERE u.id = :id")
    int updateProfilePicture(@Param("id") Long id, @Param("profilePicture") String profilePicture);

    User findByUsername(String username);

    @Query("SELECT new com.example.Spring.airbnbProperty.models.dtos.UserDTO(u.id, u.name, u.lastname, u.email, u.username, u.phoneNumber, u.profilePicture, u.facebook, u.instagram, u.snapchat, u.twitter) FROM User u WHERE u.id = :id")
    Optional<UserDTO> findUserProfileData(@Param("id") Long id);

    @Query("SELECT u.password FROM User u WHERE u.id = :id")
    Optional<String> findPasswordById(@Param("id") Long id);



    @Modifying
    @Transactional
    @Query("UPDATE User u SET u.password = :password WHERE u.id = :id")
    void updatePassword(@Param("id") Long id, @Param("password") String password);

    @Query("SELECT new com.example.Spring.airbnbProperty.models.dtos.UserDTO(u.id, u.name, u.lastname, u.email, u.username, u.phoneNumber) FROM User u")
    List<UserDTO> getAllUserDtos();

    @Modifying
    @Transactional
    @Query("DELETE FROM User u WHERE u.username = :username ")
    void deleteUser(@Param("username") String username);


}
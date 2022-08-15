package com.Vangoald.springbudget.controllers;

import com.Vangoald.springbudget.models.User;
import com.Vangoald.springbudget.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/auth/signin")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/admin")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
}

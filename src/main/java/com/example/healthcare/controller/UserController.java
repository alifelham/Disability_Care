package com.example.healthcare.controller;

import com.example.healthcare.exception.ResourceNotFoundException;
import com.example.healthcare.model.User;
import com.example.healthcare.repository.UserRepository;
import com.example.healthcare.security.CurrentUser;
import com.example.healthcare.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ExecutionException;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) throws ExecutionException, InterruptedException {
        return userRepository.findById(userPrincipal.getId());
    }
}

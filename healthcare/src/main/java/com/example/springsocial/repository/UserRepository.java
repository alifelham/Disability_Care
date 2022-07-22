package com.example.springsocial.repository;

import com.example.springsocial.model.User;
import org.springframework.cloud.gcp.data.firestore.FirestoreReactiveRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.concurrent.ExecutionException;

@Repository
public interface UserRepository {
    User findById(Long ID) throws ExecutionException, InterruptedException;
    User findByEmail(String email) throws ExecutionException, InterruptedException;
    User save(User user) throws ExecutionException, InterruptedException;
    Boolean existsByEmail(String email) throws ExecutionException, InterruptedException;

}

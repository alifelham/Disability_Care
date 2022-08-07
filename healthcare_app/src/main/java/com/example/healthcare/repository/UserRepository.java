package com.example.healthcare.repository;

import com.example.healthcare.model.User;
import org.springframework.cloud.gcp.data.firestore.FirestoreReactiveRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.concurrent.ExecutionException;

@Repository
public interface UserRepository {
    User findById(Long ID) throws ExecutionException, InterruptedException;
    User findByEmail(String email) throws ExecutionException, InterruptedException;
    User savee(User user) throws ExecutionException, InterruptedException;
    Boolean existsByEmail(String email) throws ExecutionException, InterruptedException;

}

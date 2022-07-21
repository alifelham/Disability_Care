package com.example.healthcare.repository;

import com.example.healthcare.model.User;
import org.springframework.cloud.gcp.data.firestore.FirestoreReactiveRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends FirestoreReactiveRepository<User> {

    Optional<User> findByEmail(String email);

    Boolean existsByEmail(String email);

}

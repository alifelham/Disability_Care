package com.example.springsocial.repository;

import com.example.springsocial.model.User;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ExecutionException;

@Service
public class UserRepositoryImplementation implements UserRepository{

    static Long x = 0L;
    @Override
    public User findById(Long ID) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("user").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        User user = new User();

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            user = documentSnapshot.toObject(User.class);
            if(Objects.equals(user.getId(), ID))break;
        }

        return user;
    }

    @Override
    public User findByEmail(String email) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("user").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        User user = new User();

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            user = documentSnapshot.toObject(User.class);
            if(Objects.equals(user.getEmail(), email))break;
        }

        return user;
    }

    @Override
    public User save(User user) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        user.setId(x++);

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("users").document(user.getName()).set(user);

        return user;
    }

    @Override
    public Boolean existsByEmail(String email) throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("user").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        User user = new User();

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            user = documentSnapshot.toObject(User.class);
            if(Objects.equals(user.getEmail(), email))return true;
        }

        return false;
    }
}

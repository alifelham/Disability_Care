package com.example.healthcare.repository;

import com.example.healthcare.model.User;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import javax.validation.constraints.Email;
import java.util.*;
import java.util.concurrent.ExecutionException;

@Service
public class UserRepositoryImplementation implements UserRepository{

    static Long x = 0L;
    @Override
    public User findById(Long ID) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("users").listDocuments();

        System.out.println(documentReferences);

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

        System.out.println("In save ===>" + user.getEmail());
        return user;
    }

    @Override
    public User findByEmail(@Email String email) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("users").listDocuments();
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

        //System.out.println("In find by email =>" + user.getEmail());

        return user;
    }

    @Override
    public User savee(User user) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        user.setId(x++);

        System.out.println("Here ");

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("users").document(user.getName()).set(user);

        return user;
    }

    @Override
    public Boolean existsByEmail(String email) throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("users").listDocuments();
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

package com.example.healthcare.service;

import com.example.healthcare.model.AppReq;
import com.example.healthcare.model.Report;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import org.checkerframework.checker.units.qual.A;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class AppReqService {
    public AppReq saveAppReq(AppReq appReq) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        System.out.println(appReq.toString());

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("AppReq").document(appReq.getID().toString()).set(appReq);

        return appReq;
    }

    public String deleteAppReq(Long ID) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("AppReq").document(ID.toString()).delete();

        return "AppReq with ID " + ID + " has been deleted successfully";
    }

    public List<AppReq> getAppReqByHID(Long id) throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("AppReq").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        List<AppReq> appReqs = new ArrayList<>();
        AppReq appReq = null;

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            appReq = documentSnapshot.toObject(AppReq.class);
            if(id == appReq.getHID())appReqs.add(appReq);
        }

        return appReqs;
    }

    public AppReq getPIDbyID(Long AID) throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("AppReq").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        List<AppReq> appReqs = new ArrayList<>();
        AppReq appReq = null;

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            appReq = documentSnapshot.toObject(AppReq.class);
            if(AID == appReq.getID())break;
        }

        return appReq;
    }
}

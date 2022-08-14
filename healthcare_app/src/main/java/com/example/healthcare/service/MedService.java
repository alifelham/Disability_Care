package com.example.healthcare.service;

import com.example.healthcare.model.AppReq;
import com.example.healthcare.model.MedReq;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class MedService {
    public MedReq saveMedReq(MedReq medReq) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("MedReq").document(medReq.getRID().toString()).set(medReq);

        return medReq;
    }

    public String deleteMedReq(Long RID) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("MedReq").document(RID.toString()).delete();

        return "MedReq with ID " + RID + " has been deleted successfully";
    }

    public List<MedReq> getMedReqByPHID(Long id) throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("MedReq").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        List<MedReq> medReqs = new ArrayList<>();
        MedReq medReq = null;

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            medReq = documentSnapshot.toObject(MedReq.class);
            if(id == medReq.getPHID())medReqs.add(medReq);
        }

        return medReqs;
    }

    public MedReq updateMedReq(MedReq medReq) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("MedReq").document(medReq.getRID().toString()).set(medReq);

        return medReq;
    }
}

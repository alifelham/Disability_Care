package com.example.healthcare.service;

import com.example.healthcare.model.AppReq;
import com.example.healthcare.model.PrescribedMed;
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
public class PrescribedMedService {
    public PrescribedMed savePrescribedMed(PrescribedMed PrescribedMed) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("PrescribedMed").document(PrescribedMed.getID().toString()).set(PrescribedMed);

        return PrescribedMed;
    }

    public String deletePrescribedMed(Long ID) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("PrescribedMed").document(ID.toString()).delete();

        return "PrescribedMed with ID " + ID + " has been deleted successfully";
    }

    public List<PrescribedMed> getPrescribedMedByPID(Long id) throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("PrescribedMed").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        List<PrescribedMed> PrescribedMeds = new ArrayList<>();
        PrescribedMed PrescribedMed = null;

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            PrescribedMed = documentSnapshot.toObject(PrescribedMed.class);
            if(id == PrescribedMed.getPID())PrescribedMeds.add(PrescribedMed);
        }

        return PrescribedMeds;
    }

    public PrescribedMed updatePrescribedMed(PrescribedMed PrescribedMed) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("PrescribedMed").document(PrescribedMed.getID().toString()).set(PrescribedMed);

        return PrescribedMed;
    }
}

package com.example.healthcare.service;

import com.example.healthcare.model.Patient;
import com.example.healthcare.model.Patient;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.concurrent.ExecutionException;

@Service
public class PatientService {
    public Patient savePatient(Patient Patient) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Patient").document(Patient.getPID().toString()).set(Patient);

        return Patient;
    }

    public String deletePatient(Long ID) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Patient").document(ID.toString()).delete();

        return "Patient with PID " + ID + " has been deleted successfully";
    }

    public Patient getPatientByPID(Long id) throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("Patient").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        Patient Patient = null;

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            Patient = documentSnapshot.toObject(Patient.class);
            if(id == Patient.getPID())break;
        }

        return Patient;
    }
}

package com.example.healthcare.service;

import com.example.healthcare.model.AppReq;
import com.example.healthcare.model.Doctor;
import com.example.healthcare.model.Report;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import javax.print.Doc;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class DoctorService {
    public Doctor saveDoctor(Doctor doctor) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Doctor").document(doctor.getDID().toString()).set(doctor);

        return doctor;
    }

    public String deleteDoctor(Long ID) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Doctor").document(ID.toString()).delete();

        return "Doctor with DID " + ID + " has been deleted successfully";
    }

    public Doctor getDoctorbyID(Long id) throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("Doctor").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        Doctor doctor = new Doctor();

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            doctor = documentSnapshot.toObject(Doctor.class);
            if(id == doctor.getDID())return doctor;
        }

        return new Doctor();
    }

    public List<Doctor> getAllDoctors() throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();



        Iterable<DocumentReference>documentReferences = dbFirestore.collection("Doctor").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        List<Doctor> DoctorList = new ArrayList<>();
        Doctor doctor = null;

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            doctor = documentSnapshot.toObject(Doctor.class);
            DoctorList.add(doctor);
        }

        return DoctorList;
    }
}

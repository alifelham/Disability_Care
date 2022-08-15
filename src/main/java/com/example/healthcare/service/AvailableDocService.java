package com.example.healthcare.service;

import com.example.healthcare.model.AvailableDoc;
import com.example.healthcare.model.Doctor;
import com.example.healthcare.model.Report;
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
public class AvailableDocService {
    public AvailableDoc saveAvailableDoc(AvailableDoc availableDoc) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        System.out.println("In saveAva" + availableDoc.getID() + "\n" + availableDoc.getDID() + "\n" + availableDoc.getStart_time() + "\n" + availableDoc.getEnd_time() + "\n" + availableDoc.getField() + "\n" + availableDoc.getDate());

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("AvailableDoc").document(availableDoc.getID().toString()).set(availableDoc);

        return availableDoc;
    }

    public List<AvailableDoc> getAvailableDocsByHID(Long HID) throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("AvailableDoc").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        List<AvailableDoc> DoctorList = new ArrayList<>();
        AvailableDoc availableDoc = null;

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            availableDoc = documentSnapshot.toObject(AvailableDoc.class);
            if(HID == availableDoc.getHID())DoctorList.add(availableDoc);
        }

        return DoctorList;
    }

    public String updateAvailableDoc(AvailableDoc availableDoc) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("AvailableDoc").document(availableDoc.getID().toString()).set(availableDoc);

        return "Updated successfully!";
    }
}

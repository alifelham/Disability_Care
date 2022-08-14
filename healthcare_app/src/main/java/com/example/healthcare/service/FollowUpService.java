package com.example.healthcare.service;

import com.example.healthcare.model.Appointments;
import com.example.healthcare.model.FollowUp;
import com.example.healthcare.model.User;
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
public class FollowUpService {
    public FollowUp saveFollowUp(FollowUp followUp) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        //followUp.setFID(id++);

        //System.out.println("In saveAva" + availableDoc.getID() + "\n" + availableDoc.getDID() + "\n" + availableDoc.getStart_time() + "\n" + availableDoc.getEnd_time() + "\n" + availableDoc.getField() + "\n" + availableDoc.getDate());

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("FollowUps").document(followUp.getFID().toString()).set(followUp);

        return followUp;
    }

    public String deleteFollowUp(Long FID) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("FollowUps").document(FID.toString()).delete();

        return "Follow Up Appointment with FID " + FID + " has been deleted successfully";
    }

    public List<FollowUp> getFollowUpAppointmentsByDID(Long DID) throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("FollowUps").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        List<FollowUp> followUps = new ArrayList<>();
        FollowUp followUp = null;

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            followUp = documentSnapshot.toObject(FollowUp.class);
            if(DID == followUp.getDID())followUps.add(followUp);
        }

        return followUps;
    }

    public List<FollowUp> getFollowUpAppointmentsByPID(Long PID) throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference> documentReferences = dbFirestore.collection("FollowUps").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        List<FollowUp> followUps = new ArrayList<>();
        FollowUp followUp = null;

        while (iterator.hasNext()) {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            followUp = documentSnapshot.toObject(FollowUp.class);
            if (PID == followUp.getPID()) followUps.add(followUp);
        }

        return followUps;
    }

    public User getUserByID(Long PID) throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference> documentReferences = dbFirestore.collection("users").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        User user = null;

        while (iterator.hasNext()) {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            user = documentSnapshot.toObject(User.class);
            if (PID == user.getId()) break;
        }

        return user;
    }
}

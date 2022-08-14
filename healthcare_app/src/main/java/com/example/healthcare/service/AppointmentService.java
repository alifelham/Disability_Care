package com.example.healthcare.service;

import com.example.healthcare.model.Appointments;
import com.example.healthcare.model.AvailableDoc;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class AppointmentService {
    public static boolean isTimeLater(Date d1, Date d2){
        System.out.println("Day1" + d1);
        System.out.println("Day2" + d2);

        return true;
    }

    static Long id = 0L;
    public Appointments saveAppointment(Appointments appointments) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        appointments.setAID(id++);

        //System.out.println("In saveAva" + availableDoc.getID() + "\n" + availableDoc.getDID() + "\n" + availableDoc.getStart_time() + "\n" + availableDoc.getEnd_time() + "\n" + availableDoc.getField() + "\n" + availableDoc.getDate());

        System.out.println(appointments.toString());
        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Appointments").document(appointments.getAID().toString()).set(appointments);

        return appointments;
    }

    public List<Appointments> getFutureAppointmentsByHID(Long HID) throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("Appointments").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        List<Appointments> AppointmentList = new ArrayList<>();
        Appointments appointments = null;

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            appointments = documentSnapshot.toObject(Appointments.class);
            if(HID == appointments.getHID())AppointmentList.add(appointments);
        }

        return AppointmentList;
    }

    public List<Appointments> getFutureAppointmentsByDID(Long DID) throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("Appointments").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        List<Appointments> AppointmentList = new ArrayList<>();
        Appointments appointments = null;

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            appointments = documentSnapshot.toObject(Appointments.class);
            if(DID == appointments.getDID())AppointmentList.add(appointments);
        }

        return AppointmentList;
    }

    public String deleteAppointment(Long ID) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Appointments").document(ID.toString()).delete();

        return "Appointment with ID " + ID + " has been deleted successfully";
    }
}

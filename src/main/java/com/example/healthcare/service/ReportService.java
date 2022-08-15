package com.example.healthcare.service;

import com.example.healthcare.model.Report;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.google.firebase.database.core.Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class ReportService {
    public Report saveReport(Report report) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Report").document(report.getName()).set(report);

        return report;
    }

    public List<Report> getAllReports() throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("Report").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        List<Report> ReportList = new ArrayList<>();
        Report Report = null;

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            Report = documentSnapshot.toObject(Report.class);
            ReportList.add(Report);
        }

        return ReportList;
    }

    public String updateReport(Report report) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Report").document(report.getName()).set(report);

        return collectionApiFuture.get().getUpdateTime().toString();
    }

    public String deleteReport(String name) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Report").document(name).delete();

        return "Report with name " + name + " has been deleted successfully";
    }

    public List<Report> getReportsByPID(int id) throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("Report").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        List<Report> ReportList = new ArrayList<>();
        Report Report = null;

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            Report = documentSnapshot.toObject(Report.class);
            if(id == Report.getPID())ReportList.add(Report);
        }

        System.out.println("Reportsss" + ReportList);
        return ReportList;
    }
}

package com.example.healthcare.service;

import com.example.healthcare.model.AppReq;
import com.example.healthcare.model.TestReq;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class TestReqService {
    public TestReq saveTestReq(TestReq TestReq) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("TestReq").document(TestReq.getTID().toString()).set(TestReq);

        return TestReq;
    }

    public void saveTestReport(MultipartFile multipartFile){

    }

    public String deleteTestReq(Long RID) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("TestReq").document(RID.toString()).delete();

        return "TestReq with ID " + RID + " has been deleted successfully";
    }

    public List<TestReq> getTestReqByDiagID(Long id) throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("TestReq").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        List<TestReq> TestReqs = new ArrayList<>();
        TestReq TestReq = null;

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            TestReq = documentSnapshot.toObject(TestReq.class);
            if(id == TestReq.getDiagID())TestReqs.add(TestReq);
        }

        return TestReqs;
    }

    public TestReq updateTestReq(TestReq TestReq) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("TestReq").document(TestReq.getTID().toString()).set(TestReq);

        return TestReq;
    }
}

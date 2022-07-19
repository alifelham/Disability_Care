package healthcare.healthcare_app.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import healthcare.healthcare_app.patient.Patient;

import java.util.concurrent.ExecutionException;

public class patientService {
    public static final String COLLECTION_NAME = "Patient";

    public String savePatient(Patient patient) throws ExecutionException, InterruptedException {
        Firestore dbfirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbfirestore.collection(COLLECTION_NAME).document(patient.getName()).set(patient);

        return collectionApiFuture.get().getUpdateTime().toString();
    }

}

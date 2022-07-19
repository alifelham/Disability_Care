package healthcare.healthcare_app.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import healthcare.healthcare_app.patient.Patient;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
public class patientService {
    public String savePatient(Patient patient) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Patient").document(patient.getName()).set(patient);

        return collectionApiFuture.get().getUpdateTime().toString();
    }
}

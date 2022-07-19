package healthcare.healthcare_app.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import healthcare.healthcare_app.patient.Patient;
import org.springframework.stereotype.Service;

import javax.print.Doc;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class patientService {
    public String savePatient(Patient patient) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Patient").document(patient.getName()).set(patient);

        return collectionApiFuture.get().getUpdateTime().toString();
    }

    public List<Patient> getPatientDetails() throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("Patient").listDocuments();
        Iterator<DocumentReference>iterator = documentReferences.iterator();

        List<Patient> patientList = new ArrayList<>();
        Patient patient = null;

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            patient = documentSnapshot.toObject(Patient.class);
            patientList.add(patient);
        }

        return patientList;
    }

    public String updatePatient(Patient patient) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Patient").document(patient.getName()).set(patient);

        return collectionApiFuture.get().getUpdateTime().toString();
    }

    public String deletePatient(String name) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Patient").document(name).delete();

        return "Patient with name " + name + " has been deleted successfully";
    }
}

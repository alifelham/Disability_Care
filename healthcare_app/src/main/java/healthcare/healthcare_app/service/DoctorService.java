package healthcare.healthcare_app.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import healthcare.healthcare_app.entities.Doctor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class DoctorService {
    public String saveDoctor(Doctor Doctor) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Doctor").document(Doctor.getName()).set(Doctor);

        return collectionApiFuture.get().getUpdateTime().toString();
    }

    public List<Doctor> getDoctorDetails() throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("Doctor").listDocuments();
        Iterator<DocumentReference>iterator = documentReferences.iterator();

        List<Doctor> DoctorList = new ArrayList<>();
        Doctor Doctor = null;

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            Doctor = documentSnapshot.toObject(Doctor.class);
            DoctorList.add(Doctor);
        }

        return DoctorList;
    }

    public String updateDoctor(Doctor Doctor) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Doctor").document(Doctor.getName()).set(Doctor);

        return collectionApiFuture.get().getUpdateTime().toString();
    }

    public String deleteDoctor(String name) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Doctor").document(name).delete();

        return "Doctor with name " + name + " has been deleted successfully";
    }
}

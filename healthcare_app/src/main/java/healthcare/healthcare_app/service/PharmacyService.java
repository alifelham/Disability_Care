package healthcare.healthcare_app.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import healthcare.healthcare_app.entities.Pharmacy;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class PharmacyService {
    public String savePharmacy(Pharmacy pharmacy) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Pharmacy").document(pharmacy.getName()).set(pharmacy);

        return collectionApiFuture.get().getUpdateTime().toString();
    }

    public List<Pharmacy> getPharmacyDetails() throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("Pharmacy").listDocuments();
        Iterator<DocumentReference>iterator = documentReferences.iterator();

        List<Pharmacy> pharmacyList = new ArrayList<>();
        Pharmacy pharmacy = null;

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            pharmacy = documentSnapshot.toObject(Pharmacy.class);
            pharmacyList.add(pharmacy);
        }

        return pharmacyList;
    }

    public String updatePharmacy(Pharmacy pharmacy) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Pharmacy").document(pharmacy.getName()).set(pharmacy);

        return collectionApiFuture.get().getUpdateTime().toString();
    }

    public String deletePharmacy(String name) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Pharmacy").document(name).delete();

        return "Pharmacy with name " + name + " has been deleted successfully";
    }
}

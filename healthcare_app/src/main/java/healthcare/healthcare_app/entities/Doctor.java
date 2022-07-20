package healthcare.healthcare_app.entities;

import javax.swing.text.html.HTMLDocument;

public class Doctor {
    private String ID;
    private String name;
    private String email;
    private String Specialization;

    // constructor with no params
    public Doctor() {
    }

    // constructor with all params
    public Doctor(String ID, String name, String email, String Specialization) {
        this.ID = ID;
        this.name = name;
        this.email = email;
        this.Specialization = Specialization;
    }

    // constructor without patient ID param
    public Doctor(String name, String email, String Specialization) {
        this.name = name;
        this.email = email;
        this.Specialization = Specialization;
    }

    public String getID() {
        return ID;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getSpecialization() {
        return Specialization;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSpecialization(String DOB) {
        this.Specialization = Specialization;
    }


    @Override
    public String toString() {
        return "Doctor{" +
                "ID=" + ID +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", Specialization=" + Specialization +
                '}';
    }
}



package healthcare.healthcare_app.patient;



public class Patient {
    private String ID;
    private String name;
    private String email;
    private String DOB;
    private String age;

    // constructor with no params
    public Patient() {
    }

    // constructor with all params
    public Patient(String ID, String name, String email, String DOB, String age) {
        this.ID = ID;
        this.name = name;
        this.email = email;
        this.DOB = DOB;
        this.age = age;
    }

    // constructor without patient ID param
    public Patient(String name, String email, String DOB, String age) {
        this.name = name;
        this.email = email;
        this.DOB = DOB;
        this.age = age;
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

    public String getDOB() {
        return DOB;
    }

    public String getAge() {
        return age;
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

    public void setDOB(String DOB) {
        this.DOB = DOB;
    }

    public void setAge(String age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "Patient{" +
                "ID=" + ID +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", DOB=" + DOB +
                ", age=" + age +
                '}';
    }
}



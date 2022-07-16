package healthcare.healthcare_app.patient;

import java.time.LocalDate;

public class Patient {
    private Long ID;
    private String name;
    private String email;
    private LocalDate DOB;
    private Integer age;

    // constructor with no params
    public Patient() {
    }

    // constructor with all params
    public Patient(Long ID, String name, String email, LocalDate DOB, Integer age) {
        this.ID = ID;
        this.name = name;
        this.email = email;
        this.DOB = DOB;
        this.age = age;
    }

    // constructor without patient ID param
    public Patient(String name, String email, LocalDate DOB, Integer age) {
        this.name = name;
        this.email = email;
        this.DOB = DOB;
        this.age = age;
    }

    public Long getID() {
        return ID;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public LocalDate getDOB() {
        return DOB;
    }

    public Integer getAge() {
        return age;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setDOB(LocalDate DOB) {
        this.DOB = DOB;
    }

    public void setAge(Integer age) {
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



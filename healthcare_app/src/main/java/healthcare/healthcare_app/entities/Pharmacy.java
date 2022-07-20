package healthcare.healthcare_app.entities;

public class Pharmacy {
    private String ID;
    private String name;
    private String email;
    private String location;

    //constructor without params
    public Pharmacy() {
    }

    //constructor with all params
    public Pharmacy(String ID, String name, String email, String location) {
        this.ID = ID;
        this.name = name;
        this.email = email;
        this.location = location;
    }

    // constructor with no id param
    public Pharmacy(String name, String email, String location) {
        this.name = name;
        this.email = email;
        this.location = location;
    }

    public String getID() {
        return ID;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}


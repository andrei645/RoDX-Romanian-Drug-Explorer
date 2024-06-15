package models;

public class User {

    private String email;
    private String name;
    private String passwordHash;

    public User() {
    }

    public User(String email, String name, String passwordHash, String phoneNumber, String city, String role) {
        this.email = email;
        this.name = name;
        this.passwordHash = passwordHash;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

}

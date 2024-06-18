package models;

public class User {

    private String email;
    private String usernname;
    private String passwordHash;

    public User() {
    }

    public User(String email, String name, String passwordHash, String phoneNumber, String city, String role) {
        this.email = email;
        this.usernname = name;
        this.passwordHash = passwordHash;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public String getUsernname() {
        return usernname;
    }

    public void setUsernname(String usernname) {
        this.usernname = usernname;
    }
}

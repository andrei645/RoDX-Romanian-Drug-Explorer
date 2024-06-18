package authorization;

public class RegisterRequest {

    private String email;
    private String username;
    private String password;

    public RegisterRequest() {
    }

    public RegisterRequest(String email, String name, String password, String phoneNumber, String city, String role) {
        this.email = email;
        this.username = name;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserame() {
        return username;
    }

    public void setUsername(String name) {
        this.username = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}

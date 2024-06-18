package services;

import dataprovider.Data;
import models.User;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class UserService {

    public static User findUserByEmail(String email) {

        String query = "SELECT email, username, password FROM users WHERE email = ?";

        try (PreparedStatement statement = Data.getInstance().getConnection().prepareStatement(query)) {
            statement.setString(1, email);

            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                User user = new User();
                user.setEmail(resultSet.getString("email"));
                user.setUsernname(resultSet.getString("userame"));
                user.setPasswordHash(resultSet.getString("password"));
                return user;
            } else {
                return null;
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public static void saveUser (User user) {

        String query = "INSERT INTO users VALUES (?, ?, ?)";

        try (PreparedStatement statement = Data.getInstance().getConnection().prepareStatement(query)) {
            statement.setString(1, user.getEmail());
            statement.setString(2, user.getUsernname());
            statement.setString(3, user.getPasswordHash());

            statement.executeUpdate();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public static void updateUser(User user) {
        String query = "UPDATE users SET username = ?, password = ? WHERE email = ?";

        try (PreparedStatement statement = Data.getInstance().getConnection().prepareStatement(query)) {
            statement.setString(1, user.getUsernname());
            statement.setString(2, user.getPasswordHash());
            statement.setString(6, user.getEmail());

            statement.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public static void deleteUser(String email) {

        String query = "DELETE FROM users WHERE email = ?";

        try (PreparedStatement statement = Data.getInstance().getConnection().prepareStatement(query)) {
            statement.setString(1, email);

            statement.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

}

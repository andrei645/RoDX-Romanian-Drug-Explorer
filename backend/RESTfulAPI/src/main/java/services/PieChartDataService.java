package services;

import dataprovider.Data;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import models.User;

public class PieChartDataService {
  public static User findCountyByEmail(String countyName) {

    String query = "SELECT email, username, password FROM users WHERE email = ?";

    try (PreparedStatement statement = Data.getInstance().getConnection().prepareStatement(query)) {
      statement.setString(1, email);

      ResultSet resultSet = statement.executeQuery();

      if (resultSet.next()) {
        User user = new User();
        user.setEmail(resultSet.getString("email"));
        user.setUsername(resultSet.getString("username"));
        user.setPasswordHash(resultSet.getString("password"));
        return user;
      } else {
        return null;
      }
    } catch (SQLException e) {
      throw new RuntimeException(e);
    }
  }
}

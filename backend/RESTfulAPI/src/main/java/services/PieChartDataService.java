package services;

import dataprovider.Data;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import models.PieChartData;
import models.User;

public class PieChartDataService {
  public static PieChartData getDataByCountyName(String county) {

    String query = "SELECT county, marijuana, cocaine, mdma, heroin, amphetamine, cannabis_resin FROM pie_chart_data WHERE county = ?";

    try (PreparedStatement statement = Data.getInstance().getConnection().prepareStatement(query)) {
      statement.setString(1, county);

      ResultSet resultSet = statement.executeQuery();

      if (resultSet.next()) {
        PieChartData pieChartData = new PieChartData();
        pieChartData.setCounty(resultSet.getString("county"));
        pieChartData.setMarijuanaValue(resultSet.getString("marijuana"));
        pieChartData.setCocaineValue(resultSet.getString("cocaine"));
        pieChartData.setMdmaValue(resultSet.getString("mdma"));
        pieChartData.setHeroinValue(resultSet.getString("heroin"));
        pieChartData.setAmphetamineValue(resultSet.getString("amphetamine"));
        pieChartData.setCannabis_resinValue(resultSet.getString("cannabis_resin"));
        return pieChartData;
      } else {
        return null;
      }
    } catch (SQLException e) {
      throw new RuntimeException(e);
    }

  }

}

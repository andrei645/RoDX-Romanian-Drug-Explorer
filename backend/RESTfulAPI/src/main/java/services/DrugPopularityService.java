package services;

import dataprovider.Data;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class DrugPopularityService {

    public static List<models.DrugPopularity> getAllDrugsPopularity(String county_id) {
        List<models.DrugPopularity> drugPopularityList = new ArrayList<>();

        String query = "SELECT id, county_id, month, year, marijuana, cocaine, mdma, heroin FROM drug_popularity WHERE county_id = ?";

        try (PreparedStatement statement = Data.getInstance().getConnection().prepareStatement(query)) {
            System.out.println("Prepared statement created successfully.");

            statement.setString(1, county_id);

            ResultSet resultSet = statement.executeQuery();
            System.out.println("Query executed successfully.");

            while (resultSet.next()) {
                models.DrugPopularity drugPopularity = new models.DrugPopularity();
                drugPopularity.setId(resultSet.getInt("id"));
                drugPopularity.setCounty(resultSet.getString("county_id"));  // Assuming the column name is correct
                drugPopularity.setMonth(resultSet.getString("month"));
                drugPopularity.setYear(resultSet.getInt("year"));
                drugPopularity.setMarijuana(resultSet.getInt("marijuana"));
                drugPopularity.setCocaine(resultSet.getInt("cocaine"));
                drugPopularity.setMdma(resultSet.getInt("mdma"));
                drugPopularity.setHeroin(resultSet.getInt("heroin"));

                drugPopularityList.add(drugPopularity);
            }
            System.out.println("Data retrieved and processed successfully.");

        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException("Error retrieving drug popularity data", e);
        }

        return drugPopularityList;
    }

}

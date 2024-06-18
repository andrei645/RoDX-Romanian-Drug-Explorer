package services;

import dataprovider.Data;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class DrugPopularityService {

    public static List<models.DrugPopularity> getAllDrugsPopularity(Integer county_id) {
        List<models.DrugPopularity> drugPopularityList = new ArrayList<>();

        String query = "SELECT id, county, month, year, marijuana, cocaine, mdma, heroin FROM drug_popularity; where county_id = ?";

        try (PreparedStatement statement = Data.getInstance().getConnection().prepareStatement(query)) {
            statement.setInt(1, county_id);

            ResultSet resultSet = statement.executeQuery();

            while (resultSet.next()) {
                models.DrugPopularity drugPopularity = new models.DrugPopularity();
                drugPopularity.setId(resultSet.getInt("id"));
                drugPopularity.setCounty(resultSet.getInt("county_id"));
                drugPopularity.setMonth(resultSet.getString("month"));
                drugPopularity.setYear(resultSet.getInt("year"));
                drugPopularity.setMarijuana(resultSet.getInt("marijuana"));
                drugPopularity.setCocaine(resultSet.getInt("cocaine"));
                drugPopularity.setMdma(resultSet.getInt("mdma"));
                drugPopularity.setHeroin(resultSet.getInt("heroin"));

                drugPopularityList.add(drugPopularity);
            }

        } catch (SQLException e) {
            throw new RuntimeException("Error retrieving drug popularity data", e);
        }

        return drugPopularityList;
    }

}

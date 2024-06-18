package services;

import dataprovider.Data;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ReportsDrugService {

    public static List<models.ReportsDrugModel> getAllReports(String county_id) {
        List<models.ReportsDrugModel> reports = new ArrayList<>();

        String query = "SELECT id, year, county_id, male, female FROM reports WHERE county_id = ?";

        try (PreparedStatement statement = Data.getInstance().getConnection().prepareStatement(query)) {
            System.out.println("Prepared statement created successfully.");

            statement.setString(1, county_id);

            ResultSet resultSet = statement.executeQuery();
            System.out.println("Query executed successfully.");

            while (resultSet.next()) {
                models.ReportsDrugModel report = new models.ReportsDrugModel();
                report.setId(resultSet.getInt("id"));
                report.setYear(resultSet.getInt("year"));
                report.setCountyId(resultSet.getString("county_id"));
                report.setMale(resultSet.getInt("male"));
                report.setFemale(resultSet.getInt("female"));

                reports.add(report);
            }
            System.out.println("Data retrieved and processed successfully.");

        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException("Error retrieving drug popularity data", e);
        }

        return reports;
    }

}

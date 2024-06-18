package controllers;

import api.ReportsDrugApi;
import services.DrugPopularityService;
import services.ReportsDrugService;

import java.util.ArrayList;
import java.util.List;

public class ReportsDrugController implements ReportsDrugApi {

    @Override
    public List<models.ReportsDrugModel> getAllReports(String county_id) {

        List<models.ReportsDrugModel> drugList = new ArrayList<>();
        drugList = ReportsDrugService.getAllReports(county_id);
        return drugList;
    }

}

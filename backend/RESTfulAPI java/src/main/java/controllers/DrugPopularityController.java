package controllers;

import api.DrugPopularityApi;
import services.DrugPopularityService;

import java.util.ArrayList;
import java.util.List;

public class DrugPopularityController implements DrugPopularityApi {

    @Override
    public List<models.DrugPopularity> getDrugPopularity(Integer county_id) {

        List<models.DrugPopularity> drugList = new ArrayList<>();
        drugList = DrugPopularityService.getAllDrugsPopularity(county_id);
        return drugList;
    }

}

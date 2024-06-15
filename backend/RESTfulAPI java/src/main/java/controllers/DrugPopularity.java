package controllers;

import api.DrugPopularityApi;

import java.util.ArrayList;
import java.util.List;

public class DrugPopularity implements DrugPopularityApi {

    @Override
    public List<models.DrugPopularity> getDrugPopularity() {

        List<models.DrugPopularity> drugList = new ArrayList<>();
        drugList = services.DrugPopularity.getAllDrugsPopularity();
        return drugList;
    }

}

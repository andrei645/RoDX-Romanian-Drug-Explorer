package api;

import exceptions.NotFoundException;
import models.ReportsDrugModel;

import java.util.List;

public interface ReportsDrugApi {
    List<ReportsDrugModel> getAllReports(String county_id) throws NotFoundException;
}

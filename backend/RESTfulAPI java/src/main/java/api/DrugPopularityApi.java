package api;;

import exceptions.NotFoundException;
import models.DrugPopularity;

import java.util.List;

public interface DrugPopularityApi {
    List<DrugPopularity> getDrugPopularity(Integer county_id) throws NotFoundException;
}

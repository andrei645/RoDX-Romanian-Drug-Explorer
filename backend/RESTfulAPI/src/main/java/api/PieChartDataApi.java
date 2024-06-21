package api;

import exceptions.NotFoundException;

public interface PieChartDataApi {
  models.PieChartData getDataByCountyName (String county) throws NotFoundException;
}

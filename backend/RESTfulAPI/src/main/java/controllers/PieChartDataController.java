package controllers;

import api.PieChartDataApi;
import exceptions.NotFoundException;
import models.PieChartData;
import models.User;
import services.PieChartDataService;
import services.UserService;

public class PieChartDataController implements PieChartDataApi {

  @Override
  public PieChartData getDataByCountyName(String county) throws NotFoundException {
    PieChartData pieChartData = PieChartDataService.getDataByCountyName(county);

    if(pieChartData == null) {
      throw new NotFoundException(String.format("County : %s data not found", county));
    }
    return  pieChartData;
  }
}

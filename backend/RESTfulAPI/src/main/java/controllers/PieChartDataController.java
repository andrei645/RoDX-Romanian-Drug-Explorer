package controllers;

import api.PieChartDataApi;
import exceptions.NotFoundException;
import models.PieChartData;

public class PieChartDataController implements PieChartDataApi {
  @Override
  public PieChartData getDataByCountyName(String countyName) throws NotFoundException {
    return null;
  }
}

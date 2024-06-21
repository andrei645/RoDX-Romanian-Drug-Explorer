package models;

import java.util.*;

public class PieChartData {
  String county;
  String marijuanaValue;
  String cocaineValue;
  String mdmaValue;
  String heroinValue;
  String amphetamineValue;
  String cannabis_resinValue;

  public PieChartData(String county, String marijuanaValue, String cocaineValue, String mdmaValue, String heroinValue, String amphetamineValue, String cannabis_resinValue) {
    this.county = county;
    this.marijuanaValue = marijuanaValue;
    this.cocaineValue = cocaineValue;
    this.mdmaValue = mdmaValue;
    this.heroinValue = heroinValue;
    this.amphetamineValue = amphetamineValue;
    this.cannabis_resinValue = cannabis_resinValue;
  }

  public PieChartData() {

  }

  public String getCounty() {
    return county;
  }

  public void setCounty(String county) {
    this.county = county;
  }

  public String getMarijuanaValue() {
    return marijuanaValue;
  }

  public void setMarijuanaValue(String marijuanaValue) {
    this.marijuanaValue = marijuanaValue;
  }

  public String getCocaineValue() {
    return cocaineValue;
  }

  public void setCocaineValue(String cocaineValue) {
    this.cocaineValue = cocaineValue;
  }

  public String getMdmaValue() {
    return mdmaValue;
  }

  public void setMdmaValue(String mdmaValue) {
    this.mdmaValue = mdmaValue;
  }

  public String getHeroinValue() {
    return heroinValue;
  }

  public void setHeroinValue(String heroinValue) {
    this.heroinValue = heroinValue;
  }

  public String getAmphetamineValue() {
    return amphetamineValue;
  }

  public void setAmphetamineValue(String amphetamineValue) {
    this.amphetamineValue = amphetamineValue;
  }

  public String getCannabis_resinValue() {
    return cannabis_resinValue;
  }

  public void setCannabis_resinValue(String cannabis_resinValue) {
    this.cannabis_resinValue = cannabis_resinValue;
  }
}

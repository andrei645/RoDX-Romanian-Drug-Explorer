package models;

import java.util.*;

public class PieChartData {
  String countyName;
  Float marijuanaValue;
  Float cocaineValue;
  Float mdmaValue;
  Float heroinValue;
  Float amphetamineValue;
  Float cannabis_resinValue;

  public PieChartData(String countyName, Float marijuanaValue, Float cocaineValue, Float mdmaValue, Float heroinValue, Float amphetamineValue, Float cannabis_resinValue) {
    this.countyName = countyName;
    this.marijuanaValue = marijuanaValue;
    this.cocaineValue = cocaineValue;
    this.mdmaValue = mdmaValue;
    this.heroinValue = heroinValue;
    this.amphetamineValue = amphetamineValue;
    this.cannabis_resinValue = cannabis_resinValue;
  }

  public String getCountyName() {
    return countyName;
  }

  public void setCountyName(String countyName) {
    this.countyName = countyName;
  }

  public Float getMarijuanaValue() {
    return marijuanaValue;
  }

  public void setMarijuanaValue(Float marijuanaValue) {
    this.marijuanaValue = marijuanaValue;
  }

  public Float getCocaineValue() {
    return cocaineValue;
  }

  public void setCocaineValue(Float cocaineValue) {
    this.cocaineValue = cocaineValue;
  }

  public Float getMdmaValue() {
    return mdmaValue;
  }

  public void setMdmaValue(Float mdmaValue) {
    this.mdmaValue = mdmaValue;
  }

  public Float getHeroinValue() {
    return heroinValue;
  }

  public void setHeroinValue(Float heroinValue) {
    this.heroinValue = heroinValue;
  }

  public Float getAmphetamineValue() {
    return amphetamineValue;
  }

  public void setAmphetamineValue(Float amphetamineValue) {
    this.amphetamineValue = amphetamineValue;
  }

  public Float getCannabis_resinValue() {
    return cannabis_resinValue;
  }

  public void setCannabis_resinValue(Float cannabis_resinValue) {
    this.cannabis_resinValue = cannabis_resinValue;
  }
}

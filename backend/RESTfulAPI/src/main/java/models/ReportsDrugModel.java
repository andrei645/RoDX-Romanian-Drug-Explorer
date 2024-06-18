package models;

public class ReportsDrugModel {

    private int id;
    private int year;
    private String countyId;
    private int male;
    private int female;

    public ReportsDrugModel() {
    }

    public ReportsDrugModel(int id, int year, String countyId, int male, int female) {
        this.id = id;
        this.year = year;
        this.countyId = countyId;
        this.male = male;
        this.female = female;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getCountyId() {
        return countyId;
    }

    public void setCountyId(String countyId) {
        this.countyId = countyId;
    }

    public int getMale() {
        return male;
    }

    public void setMale(int male) {
        this.male = male;
    }

    public int getFemale() {
        return female;
    }

    public void setFemale(int female) {
        this.female = female;
    }
}

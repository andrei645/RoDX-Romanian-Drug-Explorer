package models;

public class DrugPopularity {
    private Integer id;
    private String county;
    private String month;
    private Integer year;
    private Integer marijuana;
    private Integer cocaine;
    private Integer mdma;
    private Integer heroin;

    public DrugPopularity(){}
    public DrugPopularity(Integer id, String county, String month, Integer year,
                          Integer marijuana, Integer cocaine, Integer mdma, Integer heroin) {
        this.id = id;
        this.county = county;
        this.month = month;
        this.year = year;
        this.marijuana = marijuana;
        this.cocaine = cocaine;
        this.mdma = mdma;
        this.heroin = heroin;
    }

    // Metode getter pentru toate câmpurile
    public Integer getId() {
        return id;
    }

    public String getCounty() {
        return county;
    }

    public String getMonth() {
        return month;
    }

    public Integer getYear() {
        return year;
    }

    public Integer getMarijuana() {
        return marijuana;
    }

    public Integer getCocaine() {
        return cocaine;
    }

    public Integer getMdma() {
        return mdma;
    }

    public Integer getHeroin() {
        return heroin;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setCounty(String county) {
        this.county = county;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public void setMarijuana(Integer marijuana) {
        this.marijuana = marijuana;
    }

    public void setCocaine(Integer cocaine) {
        this.cocaine = cocaine;
    }

    public void setMdma(Integer mdma) {
        this.mdma = mdma;
    }

    public void setHeroin(Integer heroin) {
        this.heroin = heroin;
    }

}

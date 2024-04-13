console.log("entere")

var objectElement = document.getElementById("myMap");
  
    objectElement?.addEventListener("load", function () {
      var svgDoc = objectElement.contentDocument;
  
      if (svgDoc && svgDoc.getElementsByTagName("svg").length > 0) {
  
        var svgContainer = svgDoc.getElementsByTagName("svg")[0];
  
        var paths = svgContainer.querySelectorAll('path');
        var counties = svgContainer.querySelectorAll('text');
  
        addMouseEventOnPaths(paths);
        addMouseEventOnCounties(counties, svgContainer);
  
      }
    });
  
  function addMouseEventOnCounties(counties, svgContainer) {
    counties.forEach(function (county) {
  
      county.addEventListener('click', function(event){
        var county = this.getAttribute('name');
        window.location.href = "chart.html?country=" + encodeURIComponent(county);
        
      });
      
      county.addEventListener('mouseenter', function (event) {
        var countyName = this.getAttribute('name');
        
        var correspondingPath = svgContainer.querySelector('path[name="' + countyName + '"]');
  
        if (correspondingPath) {
          correspondingPath.setAttribute('fill', '#3da4d4');
        }
      });
      county.addEventListener('mouseleave', function (event) {
        var countyName = this.getAttribute('name');
        var correspondingPath = svgContainer.querySelector('path[name="' + countyName + '"]');
  
        if (correspondingPath) {
          correspondingPath.setAttribute('fill', '#8cd5f7');
        }
      });
    });
  }
  function addMouseEventOnPaths(paths) {
    paths.forEach(function (path) {
      path.addEventListener('click', function(event){
        var county = this.getAttribute('name');
        window.location.href = "charts.html?county=" + encodeURIComponent(county);
        
      });
      path.addEventListener('mouseenter', function (event) {
        var countyName = this.getAttribute('name');
  
        this.setAttribute('fill', '#3da4d4');
  
      });
      path.addEventListener('mouseleave', function (event) {
        this.setAttribute('fill', '#8cd5f7');
      });
    });
  }
  
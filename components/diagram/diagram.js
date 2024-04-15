import { romanianCounties } from "../utils.js";
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
        window.location.href = "charts.html?county=" + encodeURIComponent(county);
        
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
  
        this.setAttribute('fill', '#3da4d4');
  
      });
      path.addEventListener('mouseleave', function (event) {
        this.setAttribute('fill', '#8cd5f7');
      });
    });
  }



const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];


getData();

filter.addEventListener('input', (e) =>filterData(e.target.value))


async function getData(){

    const counties = [...romanianCounties];
    result.innerHTML = '';
    counties.forEach((county, index) => {
        const li = document.createElement('li');
        li.classList = `${index % 2 != 0 ? "user-background" : ""}`
        listItems.push(li);
        li.innerHTML = `
        <div class="user-info">
            <a class="county-link" href="charts.html?county=${county.name}">${county.name}</a>
            <p>Population: ${county.population} </p>
        </div>
        `
        result.appendChild(li);
    });
}

function filterData(typed){
    listItems.forEach(element => {
        if(element.innerText.toLowerCase().includes(typed.toLowerCase())){
            element.classList.remove('hide');
        } else element.classList.add('hide');
    })
}
  
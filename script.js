function ref1() {
    var x = document.getElementById("ref1-details");
    var y = document.getElementById("ref1-btn");
    if (x.style.display === "none") {
      x.style.display = "flex";
      y.innerHTML = "-";
    } else {
      x.style.display = "none";
      y.innerHTML = "+";
    }
  }

  function ref2() {
    var x = document.getElementById("ref2-details");
    var y = document.getElementById("ref2-btn");
    if (x.style.display === "none") {
      x.style.display = "flex";
      y.innerHTML = "-";
    } else {
      x.style.display = "none";
      y.innerHTML = "+";
    }
  }


  function institute1() {
    var x = document.getElementById("institute1-details");
    var y = document.getElementById("institute1-btn");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.innerHTML = "-";
    } else {
      x.style.display = "none";
      y.innerHTML = "+";
    }
  }

  function institute2() {
    var x = document.getElementById("institute2-details");
    var y = document.getElementById("institute2-btn");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.innerHTML = "-";
    } else {
      x.style.display = "none";
      y.innerHTML = "+";
    }
  }

  function institute3() {
    var x = document.getElementById("institute3-details");
    var y = document.getElementById("institute3-btn");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.innerHTML = "-";
    } else {
      x.style.display = "none";
      y.innerHTML = "+";
    }
  }

  function project1() {
    var x = document.getElementById("project1-details");
    var y = document.getElementById("project1-btn");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.innerHTML = "-";
    } else {
      x.style.display = "none";
      y.innerHTML = "+";
    }
  }

  function project2() {
    var x = document.getElementById("project2-details");
    var y = document.getElementById("project2-btn");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.innerHTML = "-";
    } else {
      x.style.display = "none";
      y.innerHTML = "+";
    }
  }

  function project3() {
    var x = document.getElementById("project3-details");
    var y = document.getElementById("project3-btn");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.innerHTML = "-";
    } else {
      x.style.display = "none";
      y.innerHTML = "+";
    }
  }

  function project4() {
    var x = document.getElementById("project4-details");
    var y = document.getElementById("project4-btn");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.innerHTML = "-";
    } else {
      x.style.display = "none";
      y.innerHTML = "+";
    }
  }

  function company1() {
    var x = document.getElementById("company1-details");
    var y = document.getElementById("company1-btn");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.innerHTML = "-";
    } else {
      x.style.display = "none";
      y.innerHTML = "+";
    }
  }


  function currentTemp() {

     var location = "Dhaka,bd";
     var apiKey = "559b991ade1021899884c09189bcc45";

     var url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}f&units=metric`;

     var xhr = new XMLHttpRequest();
     xhr.open("GET", url);

     xhr.setRequestHeader("Accept", "application/json");

     xhr.onreadystatechange = function () {

     if (xhr.readyState === 4) {
       console.log(xhr.responseText);
        showTemp(xhr.responseText);
     }};

     xhr.send();

  }

  function showTemp(responseText)
  {
    var obj = JSON.parse(responseText);

    var line_break = " </br>";

     var temp = " Current Temp: " + obj.main.temp + " Celsius" + line_break;
     var feels_like = "Feels Like: " + obj.main.feels_like + " Celsius" + line_break;
     var temp_max = "Temp_max: " + obj.main.temp_min + " Celsius" + line_break;
     var temp_min = "Temp_min: " + obj.main.temp_max + " Celsius" + line_break;
     var feels_like = "Pressure: " +  obj.main.pressure + " Pascal" + line_break;
     var humidity = "Humidity: " + obj.main.humidity + " g/m^3" + line_break;
     var wind = "Wind: " + obj.wind.speed + " km/h" + line_break;

     var weatherTemp = temp + feels_like + temp_max + temp_min + feels_like + humidity + wind;
    
     var element = document.getElementById("weather-body");
     element.innerHTML = weatherTemp;

     element.style.display = "block";

     setTimeout(function() { 
      // $('#weather-body').fadeOut(); 
      element.style.display = "none";
      
      }, 5000);


  }

 


  





  
function meteo() {
	let ville = document.getElementById("ville").value;
  	let xhttp = new XMLHttpRequest();

  	xhttp.onreadystatechange = function() {
  		if (xhttp.readyState == XMLHttpRequest.DONE) {
	    	if (xhttp.status == 200) {
	     		let json = JSON.parse(xhttp.responseText);
	     		console.log(json);
	     		document.getElementById("nomVille").innerHTML = ville.toUpperCase()+"      "+"<img src=\"http://flags.fmcdn.net/data/flags/w580/"+json["sys"]["country"].toLowerCase()+".png\" style=\"width:25px\">";
	 			document.getElementById("temps").innerHTML = json["weather"][0]["description"].charAt(0).toUpperCase()+json["weather"][0]["description"].slice(1).toLowerCase()+"   "+"<img src=\"http://openweathermap.org/img/w/"+json["weather"][0]["icon"]+".png\">";
	 			document.getElementById("temperature").innerHTML = json["main"]["temp"] +" &deg;C";
	 			document.getElementById("pression").innerHTML = json["main"]["pressure"] +" hPa";
	 			document.getElementById("humidite").innerHTML = json["main"]["humidity"] + " %";
	 			document.getElementById("vitesseVent").innerHTML = json["wind"]["speed"] +" km/h";
	 			document.getElementById("nuages").innerHTML = json["clouds"]["all"] +" %";
	 			
	 			document.getElementById("detailsVille").innerHTML = "+";
				document.getElementById("detailsTemperature").innerHTML = "+";
				document.getElementById("detailsVent").innerHTML = "+"
	
				document.getElementById("divErreur").hidden = true;
	 			document.getElementById("divResults").hidden = false;
	  		} else {
	  			document.getElementById("erreurVille").innerHTML = "Cette ville n'existe pas";
	  			document.getElementById("divResults").hidden = true;
	  			document.getElementById("divErreur").hidden = false;
	  		}
	  	}
  	};
  	xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + ville + "&APPID=ee07e2bf337034f905cde0bdedae3db8&units=metric&lang=fr", true);
  	xhttp.send();
}

function infosVille() {
	let ville = document.getElementById("ville").value;
  	let xhttp = new XMLHttpRequest();

  	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == XMLHttpRequest.DONE) {
	    	if (xhttp.status == 200) {
	     		let json = JSON.parse(xhttp.responseText);
	     		document.getElementById("longitude").innerHTML = json["coord"]["lon"];
	     		document.getElementById("latitude").innerHTML = json["coord"]["lat"]
	     		if(document.getElementById("detailsVille").innerHTML == "+") {
					document.getElementById("detailsVille").innerHTML = "-";
					document.getElementById("trLatitude").hidden = false;
				    document.getElementById("trLongitude").hidden = false;
	     		} else {
	     		    document.getElementById("detailsVille").innerHTML = "+";
					document.getElementById("trLatitude").hidden = true;
				    document.getElementById("trLongitude").hidden = true;
	     		}
	  		}
  		};
  	}
  	xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + ville + ",fr&APPID=ee07e2bf337034f905cde0bdedae3db8&units=metric&lang=fr", true);
  	xhttp.send();
}

function infosTemperature() {
	let ville = document.getElementById("ville").value;
  	let xhttp = new XMLHttpRequest();

  	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == XMLHttpRequest.DONE) {
	    	if (xhttp.status == 200) {
	     		let json = JSON.parse(xhttp.responseText);
	 			document.getElementById("temperatureMin").innerHTML = json["main"]["temp_min"] +" &deg;C";
	 			document.getElementById("temperatureMax").innerHTML = json["main"]["temp_max"] +" &deg;C";
	     		if(document.getElementById("detailsTemperature").innerHTML == "+") {
					document.getElementById("detailsTemperature").innerHTML = "-";
					document.getElementById("trTempMin").hidden = false;
				    document.getElementById("trTempMax").hidden = false;
	     		} else {
	     		    document.getElementById("detailsTemperature").innerHTML = "+";
					document.getElementById("trTempMin").hidden = true;
				    document.getElementById("trTempMax").hidden = true;
	     		}
	  		}
  		};
  	}
  	xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + ville + ",fr&APPID=ee07e2bf337034f905cde0bdedae3db8&units=metric&lang=fr", true);
  	xhttp.send();
}

function infosVent() {
	let ville = document.getElementById("ville").value;
  	let xhttp = new XMLHttpRequest();

  	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == XMLHttpRequest.DONE) {
	    	if (xhttp.status == 200) {
	     		let json = JSON.parse(xhttp.responseText);
	 			document.getElementById("directionVent").innerHTML = json["wind"]["deg"] +" &deg;";
	     		if(document.getElementById("detailsVent").innerHTML == "+") {
	     			document.getElementById("detailsVent").innerHTML = "-";
				    document.getElementById("trDirectionVent").hidden = false;
	     		} else {
	     			document.getElementById("detailsVent").innerHTML = "+";
	     		    document.getElementById("trDirectionVent").hidden = true;
	     		}
	  		}
  		};
  	}
  	xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + ville + ",fr&APPID=ee07e2bf337034f905cde0bdedae3db8&units=metric&lang=fr", true);
  	xhttp.send();
}

function pressEnter(event) {
    if (event.which == 13  || event.keyCode == 13) {
        meteo();
    }
}
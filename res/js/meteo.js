document.getElementById("inputVille").focus();

function meteo() {
    let ville = document.getElementById("inputVille").value;
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === XMLHttpRequest.DONE) {
            if (xhttp.status === 200) {
                let json = JSON.parse(xhttp.responseText);
                console.log(json);
                document.getElementById("nomVille").innerHTML = ville + "      " + "<img src=\"//flags.fmcdn.net/data/flags/w580/" + json["sys"]["country"].toLowerCase() + ".png\" style=\"width:28px\" alt=''>";
                document.getElementById("meteoGenerale").innerHTML = json["weather"][0]["description"].charAt(0).toUpperCase() + json["weather"][0]["description"].slice(1).toLowerCase() + "   " + "<img src=\"//openweathermap.org/img/w/" + json["weather"][0]["icon"] + ".png\" alt=''>";
                document.getElementById("temperature").innerHTML = json["main"]["temp"] + " &deg;C";
                document.getElementById("pression").innerHTML = json["main"]["pressure"] + " hPa";
                document.getElementById("humidite").innerHTML = json["main"]["humidity"] + " %";
                document.getElementById("vitesseVent").innerHTML = json["wind"]["speed"] + " km/h";
                document.getElementById("nuages").innerHTML = json["clouds"]["all"] + " %";

                document.getElementById("divErreur").hidden = true;
                document.getElementById("tableMeteo").hidden = false;
            } else {
                document.getElementById("tableMeteo").hidden = true;
                document.getElementById("divErreur").hidden = false;
            }
        }
    };
    xhttp.open("GET", "//api.openweathermap.org/data/2.5/weather?q=" + ville + "&APPID=ee07e2bf337034f905cde0bdedae3db8&units=metric&lang=fr", true);
    xhttp.send();
}

function infosVille() {
    let ville = document.getElementById("nomVille").value;
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === XMLHttpRequest.DONE) {
            if (xhttp.status === 200) {
                let json = JSON.parse(xhttp.responseText);
                document.getElementById("longitude").innerHTML = json["coord"]["lon"];
                document.getElementById("latitude").innerHTML = json["coord"]["lat"]
                if (document.getElementById("boutonVille").className === "fas fa-plus") {
                    document.getElementById("trLatitude").hidden = false;
                    document.getElementById("trLongitude").hidden = false;
                    document.getElementById("boutonVille").className = "fas fa-minus";
                } else {
                    document.getElementById("boutonVille").className = "fas fa-plus";
                    document.getElementById("trLatitude").hidden = true;
                    document.getElementById("trLongitude").hidden = true;
                }
            }
        }
        ;
    }
    xhttp.open("GET", "//api.openweathermap.org/data/2.5/weather?q=" + ville + ",fr&APPID=ee07e2bf337034f905cde0bdedae3db8&units=metric&lang=fr", true);
    xhttp.send();
}

function infosTemperature() {
    let ville = document.getElementById("nomVille").value;
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === XMLHttpRequest.DONE) {
            if (xhttp.status === 200) {
                let json = JSON.parse(xhttp.responseText);
                document.getElementById("temperatureMin").innerHTML = json["main"]["temp_min"] + " &deg;C";
                document.getElementById("temperatureMax").innerHTML = json["main"]["temp_max"] + " &deg;C";
                if (document.getElementById("boutonTemperature").className === "fas fa-plus") {
                    document.getElementById("boutonTemperature").className = "fas fa-minus";
                    document.getElementById("trTemperatureMin").hidden = false;
                    document.getElementById("trTemperatureMax").hidden = false;
                } else {
                    document.getElementById("boutonTemperature").className = "fas fa-plus";
                    document.getElementById("trTemperatureMin").hidden = true;
                    document.getElementById("trTemperatureMax").hidden = true;
                }
            }
        }
        ;
    }
    xhttp.open("GET", "//api.openweathermap.org/data/2.5/weather?q=" + ville + ",fr&APPID=ee07e2bf337034f905cde0bdedae3db8&units=metric&lang=fr", true);
    xhttp.send();
}

function infosVent() {
    let ville = document.getElementById("nomVille").value;
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === XMLHttpRequest.DONE) {
            if (xhttp.status === 200) {
                let json = JSON.parse(xhttp.responseText);
                document.getElementById("directionVent").innerHTML = json["wind"]["deg"] + " &deg;";
                if (document.getElementById("boutonVent").className === "fas fa-plus") {
                    document.getElementById("boutonVent").className = "fas fa-minus";
                    document.getElementById("trDirectionVent").hidden = false;
                } else {
                    document.getElementById("boutonVent").className = "fas fa-plus";
                    document.getElementById("trDirectionVent").hidden = true;
                }
            }
        }
        ;
    }
    xhttp.open("GET", "//api.openweathermap.org/data/2.5/weather?q=" + ville + ",fr&APPID=ee07e2bf337034f905cde0bdedae3db8&units=metric&lang=fr", true);
    xhttp.send();
}

function pressEnter(e) {
    if (e.which === 13 || e.keyCode === 13) {
        meteo();
    }
}
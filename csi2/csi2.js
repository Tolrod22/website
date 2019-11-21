const requestURL = "./csi2.json";
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (xhttp.readyState === XMLHttpRequest.DONE) {
        if (xhttp.status === 200) {
            let json = JSON.parse(xhttp.responseText);
            loadDomicile(json);
            loadExterieur(json);
            displayMatchs(json);
        } else {
            displayErreurChargement();
        }
    }
};
xhttp.open("GET", requestURL, true);
xhttp.send();

function displayFilterMenu() {
    if (document.getElementById("menuFiltre").hidden === false) {
        document.getElementById("menuFiltre").hidden = true;
    } else if (document.getElementById("menuFiltre").hidden === true) {
        document.getElementById("menuFiltre").hidden = false;
    }
}

function filtrer() {
    let journee = document.getElementById("inputJournee").value;
    let domicile = '"' + document.getElementById("inputDomicile").value + '"';
    let exterieur = '"' + document.getElementById("inputExterieur").value + '"';
    let date = document.getElementById("inputDate").value;

    const requestURL = "./csi2.json";
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === XMLHttpRequest.DONE) {
            if (xhttp.status === 200) {
                let json = JSON.parse(xhttp.responseText);
                let journees = loadJournee(json);
                let domiciles = loadDomicile(json);
                let exterieurs = loadExterieur(json);
                let dates = loadDates(json);

                let nbMatchs = 0;

                if (journees.indexOf(journee) !== -1) {
                    if (domiciles.indexOf(domicile) !== -1) {
                        if (exterieurs.indexOf(exterieur) !== -1) {
                            if (dates.indexOf(date) !== -1) {
                                for (let i = 0; i < journees.length; i++) {
                                    let match = json['journees'][i];
                                    if (match['numero'] === journee && match['domicile'] === domicile && match['exterieur'] === exterieur && match['date'] === date) {
                                        removeErreur();
                                        nbMatchs++;
                                        document.getElementById("match" + journee).hidden = false;
                                    } else {
                                        document.getElementById("match" + journee).hidden = true;
                                    }
                                }
                            } else {
                                if (date === '') {
                                    for (let i = 0; i < journees.length; i++) {
                                        let match = json['journees'][i];
                                        if (match['numero'] === journee && match['domicile'] === domicile && match['exterieur'] === exterieur) {
                                            removeErreur();
                                            nbMatchs++;
                                            document.getElementById("match" + (i + 1)).hidden = false;
                                        } else {
                                            document.getElementById("match" + (i + 1)).hidden = true;
                                        }
                                    }
                                } else {
                                    displayErreur();
                                }
                            }
                        } else {
                            if (exterieur === '""') {
                                if (dates.indexOf(date) !== -1) {
                                    for (let i = 0; i < journees.length; i++) {
                                        let match = json['journees'][i];
                                        if (match['numero'] === journee && match['domicile'] === domicile && match['date'] === date) {
                                            removeErreur();
                                            nbMatchs++;
                                            document.getElementById("match" + (i + 1)).hidden = false;
                                        } else {
                                            document.getElementById("match" + (i + 1)).hidden = true;
                                        }
                                    }
                                } else {
                                    if (date === '') {
                                        for (let i = 0; i < journees.length; i++) {
                                            let match = json['journees'][i];
                                            if (match['numero'] === journee && match['domicile'] === domicile) {
                                                removeErreur();
                                                nbMatchs++;
                                                document.getElementById("match" + (i + 1)).hidden = false;
                                            } else {
                                                document.getElementById("match" + (i + 1)).hidden = true;
                                            }
                                        }
                                    } else {
                                        displayErreur();
                                    }
                                }
                            } else {
                                displayErreur();
                            }
                        }
                    } else {
                        if (domicile === '""') {
                            if (exterieurs.indexOf(exterieur) !== -1) {
                                if (dates.indexOf(date) !== -1) {
                                    for (let i = 0; i < journees.length; i++) {
                                        let match = json['journees'][i];
                                        if (match['numero'] === journee && match['exterieur'] === exterieur && match['date'] === date) {
                                            removeErreur();
                                            nbMatchs++;
                                            document.getElementById("match" + (i + 1)).hidden = false;
                                        } else {
                                            document.getElementById("match" + (i + 1)).hidden = true;
                                        }
                                    }
                                } else {
                                    if (date === '') {
                                        for (let i = 0; i < journees.length; i++) {
                                            let match = json['journees'][i];
                                            if (match['numero'] === journee && match['exterieur'] === exterieur) {
                                                removeErreur();
                                                nbMatchs++;
                                                document.getElementById("match" + (i + 1)).hidden = false;
                                            } else {
                                                document.getElementById("match" + (i + 1)).hidden = true;
                                            }
                                        }
                                    } else {
                                        displayErreur();
                                    }
                                }
                            } else {
                                if (exterieur === '""') {
                                    if (dates.indexOf(date) !== -1) {
                                        for (let i = 0; i < journees.length; i++) {
                                            let match = json['journees'][i];
                                            if (match['numero'] === journee && match['date'] === date) {
                                                removeErreur();
                                                nbMatchs++;
                                                document.getElementById("match" + (i + 1)).hidden = false;
                                            } else {
                                                document.getElementById("match" + (i + 1)).hidden = true;
                                            }
                                        }
                                    } else {
                                        if (date === '') {
                                            for (let i = 0; i < journees.length; i++) {
                                                let match = json['journees'][i];
                                                if (match['numero'] === journee) {
                                                    removeErreur();
                                                    nbMatchs++;
                                                    document.getElementById("match" + (i + 1)).hidden = false;
                                                } else {
                                                    document.getElementById("match" + (i + 1)).hidden = true;
                                                }
                                            }
                                        } else {
                                            displayErreur();
                                        }
                                    }
                                } else {
                                    displayErreur();
                                }
                            }
                        } else {
                            displayErreur();
                        }
                    }
                } else {
                    if (journee === '') {
                        if (domiciles.indexOf(domicile) !== -1) {
                            if (exterieurs.indexOf(exterieur) !== -1) {
                                if (dates.indexOf(date) !== -1) {
                                    for (let i = 0; i < journees.length; i++) {
                                        let match = json['journees'][i];
                                        if (match['domicile'] === domicile && match['exterieur'] === exterieur && match['date'] === date) {
                                            removeErreur();
                                            nbMatchs++;
                                            document.getElementById("match" + (i + 1)).hidden = false;
                                        } else {
                                            document.getElementById("match" + (i + 1)).hidden = true;
                                        }
                                    }
                                } else {
                                    if (date === '') {
                                        for (let i = 0; i < journees.length; i++) {
                                            let match = json['journees'][i];
                                            if (match['domicile'] === domicile && match['exterieur'] === exterieur) {
                                                removeErreur();
                                                nbMatchs++;
                                                document.getElementById("match" + (i + 1)).hidden = false;
                                            } else {
                                                document.getElementById("match" + (i + 1)).hidden = true;
                                            }
                                        }
                                    } else {
                                        displayErreur();
                                    }
                                }
                            } else {
                                if (exterieur === '""') {
                                    if (dates.indexOf(date) !== -1) {
                                        for (let i = 0; i < journees.length; i++) {
                                            let match = json['journees'][i];
                                            if (match['domicile'] === domicile && match['date'] === date) {
                                                removeErreur();
                                                nbMatchs++;
                                                document.getElementById("match" + (i + 1)).hidden = false;
                                            } else {
                                                document.getElementById("match" + (i + 1)).hidden = true;
                                            }
                                        }
                                    } else {
                                        if (date === '') {
                                            for (let i = 0; i < journees.length; i++) {
                                                let match = json['journees'][i];
                                                if (match['domicile'] === domicile) {
                                                    removeErreur();
                                                    nbMatchs++;
                                                    document.getElementById("match" + (i + 1)).hidden = false;
                                                } else {
                                                    document.getElementById("match" + (i + 1)).hidden = true;
                                                }
                                            }
                                        } else {
                                            displayErreur();
                                        }
                                    }
                                } else {
                                    displayErreur();
                                }
                            }
                        } else {
                            if (domicile === '""') {
                                if (exterieurs.indexOf(exterieur) !== -1) {
                                    if (dates.indexOf(dates) !== -1) {
                                        for (let i = 0; i < journees.length; i++) {
                                            let match = json['journees'][i];
                                            if (match['exterieur'] === exterieur && match['date'] === date) {
                                                removeErreur();
                                                nbMatchs++;
                                                document.getElementById("match" + (i + 1)).hidden = false;
                                            } else {
                                                document.getElementById("match" + (i + 1)).hidden = true;
                                            }
                                        }
                                    } else {
                                        if (date === '') {
                                            for (let i = 0; i < journees.length; i++) {
                                                let match = json['journees'][i];
                                                if (match['exterieur'] === exterieur) {
                                                    removeErreur();
                                                    nbMatchs++;
                                                    document.getElementById("match" + (i + 1)).hidden = false;
                                                } else {
                                                    document.getElementById("match" + (i + 1)).hidden = true;
                                                }
                                            }
                                        } else {
                                            displayErreur();
                                        }
                                    }
                                } else {
                                    if (exterieur === '""') {
                                        if (dates.indexOf(date) !== -1) {
                                            for (let i = 0; i < journees.length; i++) {
                                                let match = json['journees'][i];
                                                if (match['date'] === date) {
                                                    removeErreur();
                                                    nbMatchs++;
                                                    document.getElementById("match" + (i + 1)).hidden = false;
                                                } else {
                                                    document.getElementById("match" + (i + 1)).hidden = true;
                                                }
                                            }
                                        } else {
                                            if (date === '') {
                                                for (let i = 0; i < journees.length; i++) {
                                                    removeErreur();
                                                    nbMatchs++;
                                                    document.getElementById("match" + (i + 1)).hidden = false;
                                                }
                                            } else {
                                                displayErreur();
                                            }
                                        }
                                    } else {
                                        displayErreur();
                                    }
                                }
                            } else {
                                displayErreur();
                            }
                        }
                    } else {
                        displayErreur();
                    }
                }
                if (nbMatchs === 0) {
                    displayErreur();
                }
            } else {
                displayErreurChargement();
            }
        }
    };
    xhttp.open("GET", requestURL, true);
    xhttp.send();
}

//------------------------------------------
// LOADINGS
//------------------------------------------
// charge les équipes domicile
function loadDomicile(json) {
    let listD = [];
    const journees = json['journees'];
    for (let i = 0; i < journees.length; i++) {
        listD.push(journees[i]['domicile']);
    }
    displayDomicile(listD);
    return listD;
}

// charge les équipes extérieur
function loadExterieur(json) {
    let listE = [];
    const journees = json['journees'];
    for (let i = 0; i < journees.length; i++) {
        listE.push(journees[i]['exterieur']);
    }
    displayExterieur(listE);
    return listE;
}

// charge les équipes extérieur
function loadDates(json) {
    let listDates = [];
    let journees = json['journees'];
    for (let i = 0; i < journees.length; i++) {
        listDates.push(journees[i]['date']);
    }
    return listDates;
}

// charge les équipes extérieur
function loadJournee(json) {
    let listNumeros = [];
    let journees = json['journees'];
    for (let i = 0; i < journees.length; i++) {
        listNumeros.push(journees[i]['numero']);
    }
    return listNumeros;
}

//------------------------------------------
// DISPLAYS
//------------------------------------------
function displayDomicile(listeDomicile) {
    let listDomicile = cleanArray(listeDomicile);
    listDomicile.splice(listDomicile.indexOf("\"Exempt\""), 1);
    listDomicile.sort();
    document.getElementById("inputDomicile").innerHTML = "<option selected value=\"\">Choisir équipe</option>";
    listDomicile.forEach(function (item) {
        document.getElementById("inputDomicile").innerHTML = document.getElementById("inputDomicile").innerHTML +
            "<option value=" + item + ">" + cleanString(item) + "</option>";
    });
}

function displayExterieur(listeExterieur) {
    let listExterieur = cleanArray(listeExterieur);
    listExterieur.splice(listExterieur.indexOf("\"Exempt\""), 1);
    listExterieur.sort();
    document.getElementById("inputExterieur").innerHTML = "<option selected value=\"\">Choisir équipe</option>"
    listExterieur.forEach(function (item) {
        document.getElementById("inputExterieur").innerHTML = document.getElementById("inputExterieur").innerHTML +
            "<option value=" + item + ">" + cleanString(item) + "</option>";
    });
}

function displayMatchs(json) {
    const journees = json['journees'];
    for (let i = 0; i < journees.length; i++) {
        let numero = journees[i]['numero'];
        let domicile = journees[i]['domicile'];
        let exterieur = journees[i]['exterieur'];
        let date = journees[i]['date'];
        let score = journees[i]['score'];
        let heure = journees[i]['heure'];
        document.getElementById("matchs").innerHTML = document.getElementById("matchs").innerHTML +
            "<tr id=\"match" + numero + "\">" +
            "<th scope=\"row\" class=\"text-capitalize\" id=\"journee" + numero + "\"> Journée " + numero + "</th>" +
            "<td class=\"text - capitalize\" id=\"domicile" + numero + "\">" + cleanString(domicile) + "</td>" +
            "<td class=\"text - capitalize\" id=\"score" + numero + "\">" + score + "</td>" +
            "<td class=\"text - capitalize\" id=\"exterieur" + numero + "\">" + cleanString(exterieur) + "</td>" +
            "<td class=\"text - capitalize\" id=\"date" + numero + "\">" + date + "</td>" +
            "<td class=\"text - capitalize\" id=\"heure" + numero + "\">" + heure + "</td>" +
            "</tr>";
    }
}

function displayErreur() {
    document.getElementById("table").hidden = true;
    document.getElementById("alerte").hidden = false;
}

function displayErreurChargement() {
    document.getElementById("table").hidden = true;
    document.getElementById("erreurChargement").hidden = false;
}

function removeErreur() {
    document.getElementById("table").hidden = false;
    document.getElementById("alerte").hidden = true;
    document.getElementById("erreurChargement").hidden = true;
}

//------------------------------------------
// UTILITIES
//------------------------------------------
// retire tous les doublons
function cleanArray(array) {
    let i, j, len = array.length, out = [], obj = {};
    for (i = 0; i < len; i++) {
        obj[array[i]] = 0;
    }
    for (j in obj) {
        out.push(j);
    }
    return out;
}

function cleanString(string) {
    let cleanString = string.replace('"', '').replace('"', '');
    return cleanString
}

function pressEnter(event) {
    if (event.which == 13 || event.keyCode == 13) {
        filtrer();
    }
}
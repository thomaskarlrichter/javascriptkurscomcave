/**
 * Created by trichter on 20.11.13.
 */

function addDynamicFormSelect() {
    var id = document.getElementById("geburtstag");
    id.innerHTML= "form Replaced";
    var form = document.createElement("form");
    id.appendChild(form);
    var select, select2, select3;
    select = document.createElement("select");
    for(var i=1; i<31; i++){
        var option = document.createElement("option");
        option.setAttribute('value', i.toString());
        option.textContent = ""+i;
        select.appendChild(option);
    }
    form.appendChild(select);
    select2 = document.createElement("select");
    var monate = ["Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"];
    for(var i=0; i<12; i++){
        var option = document.createElement("option");
        option.setAttribute('value', i.toString());
        option.textContent = monate[i];
        select2.appendChild(option);
    }
    form.appendChild(select2);
    select3 = document.createElement("select");
    for(var i=2013; i>1920; i--){
        var option = document.createElement("option");
        option.setAttribute('value', i.toString());
        option.textContent = ""+i;
        select3.appendChild(option);
    }
    form.appendChild(select3);

}
function addBlogEntry() {
    var id = document.getElementById("blog");
    var count = parseInt(document.getElementById("counter").value);
    var article = id.firstElementChild.cloneNode(true);
    id.innerHTML ="Blog deleted, append article in 1 second";
    setTimeout(function() { for (var i=0; i < count; i++) { id.appendChild(article.cloneNode(true)); } }, 1000);
}
function addDynamicTable() {
    var id = document.getElementById("filltable");
    var reihe = parseInt(document.getElementById("counterx").value);
    var spalte = parseInt(document.getElementById("countery").value);
    var newTable = document.createElement("table");
    for (var i=0; i < reihe; i++){
        var tr = document.createElement("tr");
        for(var j=0; j < spalte; j++){
            var td = document.createElement("td");
            td.innerText = "hallo"+i+j;
            tr.appendChild(td);
        }
        newTable.appendChild(tr);

    }
    id.appendChild(newTable);
}


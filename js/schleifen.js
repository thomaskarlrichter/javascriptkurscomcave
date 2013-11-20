/**
 * Created by trichter on 20.11.13.
 */

function addDynamicFormSelect() {
    var id = document.getElementById("geburtstag");
    id.innerHTML= "form Replaced";
    var form = document.createElement("form");
    id.appendChild(form);
    var select = document.createElement("select");
    for(var i=1; i<31; i++){
        var option = document.createElement("option");
        option.setAttribute('value', i.toString());
        option.textContent = ""+i;
        select.appendChild(option);
    }
    form.appendChild(select);
}
function addBlogEntry() {
    var id = document.getElementById("blog");
    var article = id.firstElementChild.cloneNode(true);
    id.innerHTML ="Blog deleted, append article in 1 second";
    setTimeout(function() { id.appendChild(article);}, 1000);
}
function addDynamicTable() {
    var id = document.getElementById("filltable");
    var newTable = document.createElement("table");
    for (var i=0; i<5; i++){
        var tr = document.createElement("tr");
        for(var j=0; j<4; j++){
            var td = document.createElement("td");
            td.innerText = "hallo"+i+j;
            tr.appendChild(td);
        }
        newTable.appendChild(tr);

    }
    id.appendChild(newTable);
}


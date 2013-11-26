/* global _, console, jshint strict: true, browser: true, devel: true */
var stundenplan = [
    {tag: "Montag", anfang: "08:00", ende: "13:00", fach: "javascript"},
    {tag: "Dienstag", anfang: "08:00", ende: "13:00", fach: "javascript"},
    {tag: "Mittwoch", anfang: "08:00", ende: "13:00", fach: "javascript"},
    {tag: "Donnerstag", anfang: "08:00", ende: "12:15", fach: "schleifen"},
    {tag: "Freitag", anfang: "08:00", ende: "13:00", fach: "funktionen"},
    {tag: "Montag", anfang: "14:15", ende: "16:00", fach: "übung"},
    {tag: "Dienstag", anfang: "13:30", ende: "15:00", fach: "übung"},
    {tag: "Mittwoch", anfang: "13:30", ende: "15:00", fach: "übung"},
    {tag: "Donnerstag", anfang: "13:30", ende: "15:00", fach: "übung"}
];
var wochentage = {"Montag": 1, "Dienstag": 2, "Mittwoch": 3, "Donnerstag": 4, "Freitag": 5};
var slots = ["08:00", "08:45", "09:45", "10:30", "11:30", "12:15",
             "13:30", "14:15", "15:15", "16:15"];

function reduziere_slots(stunde) {
    "use strict";
    var DUMMYDAY = "1.1.2000 ";
    var anfang_date = new Date(DUMMYDAY + stunde.anfang);
    var ende_date = new Date(DUMMYDAY + stunde.ende);
    return _.filter(slots, function(slot){
        var slot_date = new Date(DUMMYDAY + slot);
        return anfang_date <= slot_date && ende_date > slot_date;
    });
}

function einheit_eintragen(stunde) {
    "use strict";
    var index, anfang_id, myid, fachstunden;
    index = wochentage[stunde.tag];
    fachstunden = reduziere_slots(stunde);
    _.map(fachstunden, function (anfang) {
        anfang_id = anfang.split(":").join("");
        myid = anfang_id + "_" + index;
        document.getElementById(myid).innerText = stunde.fach;
    });
}

function alle_eintragen(stundenplan) {
    "use strict";
    console.log(
        _.map(stundenplan, einheit_eintragen));
}

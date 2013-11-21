/**
 * Created by trichter on 19.11.13.
 */

var stundenplan = [
    {tag: "Montag", anfang: "08:00", ende: "13:00", fach: "javascript"},
    {tag: "Dienstag", anfang: "08:00", ende: "13:00", fach: "javascript"},
    {tag: "Mittwoch", anfang: "08:00", ende: "13:00", fach: "javascript"},
    {tag: "Donnerstag", anfang: "08:00", ende: "13:00", fach: "schleifen"},
    {tag: "Freitag", anfang: "08:00", ende: "13:00", fach: "functions"},
    {tag: "Montag", anfang: "13:30", ende: "15:00", fach: "übung"},
    {tag: "Dienstag", anfang: "13:30", ende: "15:00", fach: "übung"},
    {tag: "Mittwoch", anfang: "13:30", ende: "15:00", fach: "übung"},
    {tag: "Donnerstag", anfang: "13:30", ende: "15:00", fach: "übung"}
];
var wochentage = {"Montag": 1, "Dienstag": 2, "Mittwoch": 3, "Donnerstag": 4, "Freitag": 5};
var slots = ["08:00", "08:45", "09:45", "10:30", "11:30", "12:15",
             "13:30", "14:15", "15:15","16:15"];

function fuelle_slots(stunde) {
    var anfang = new Date("1.1.2000 "+stunde.anfang);
    var ende = new Date("1.1.2000 "+stunde.ende);
    var slotarr = _.filter(slots, function(slot){
        var date = new Date("1.1.2000 " + slot);
        if(anfang <= date && ende >= date){
            return true;
        } else {
            return false;
        }
    });
    return slotarr;
}

function einheit_eintragen(stunde) {
    var index, anfang_id, myid;
    index = wochentage[stunde.tag];
    _.map(fuelle_slots(stunde), function (anfang) {
        anfang_id = anfang.split(":").join("");
        myid = anfang_id + "_" + index;
        var tabellenzelle = document.getElementById(myid);
        tabellenzelle.innerText = stunde.fach;
    });
}

function alle_eintragen(stundenplan) {
    console.log(
        _.map(stundenplan, einheit_eintragen));
}

function zeichne_stundenplan(plan) {
    var zeile, spalte;
    document.write('<table class="stundenplan">');
    for (zeile in plan) {
        document.write('<tr>');
        for (spalte in plan[zeile]) {
            document.write('<td style="height:20px">' + plan[zeile][spalte] + '</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');
}

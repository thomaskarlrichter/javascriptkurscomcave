/**
 * Created by trichter on 19.11.13.
 */

var stundenplan = [
    {tag: "Montag", anfang: "9:45", ende: "13:00", fach: "javascript"},
    {tag: "Dienstag", anfang: "8:00", ende: "13:00", fach: "javascript"},
    {tag: "Mittwoch", anfang: "8:00", ende: "13:00", fach: "javascript"},
    {tag: "Donnerstag", anfang: "8:00", ende: "13:00", fach: "javascript"},
    {tag: "Freitag", anfang: "8:00", ende: "13:00", fach: "javascript"},
    {tag: "Montag", anfang: "13:30", ende: "15:00", fach: "übung"},
    {tag: "Dienstag", anfang: "13:30", ende: "15:00", fach: "übung"},
    {tag: "Mittwoch", anfang: "13:30", ende: "15:00", fach: "übung"},
    {tag: "Donnerstag", anfang: "13:30", ende: "15:00", fach: "übung"}
];
var wochentage = {"Montag": 1, "Dienstag": 2, "Mittwoch": 3, "Donnerstag": 4, "Freitag": 5};
var slots = ["08:00","08:45","09:45","10:30", "11:30", "12:15", "13:30","14:15","15:15","16:15"];

function fuelle_slots(stunde) {
    var slotarr = [];
    var anfang_h = stunde.anfang.split(":")[0];
    var anfang_m = stunde.anfang.split(":")[1];
    var ende_stunde = stunde.ende.split(":")[0];
    var ende_minute = stunde.ende.split(":")[1];
    _.map(slots, function(slot){
        var h = slot.split(":")[0];
        var m = slot.split(":")[1];
        if(h>=anfang_h && h<=ende_stunde && m>=anfang_m && m<=ende_minute){
            console.log(slot);
            slotarr.push(slot);
        }
    });
    return slotarr;
}

function einheit_eintragen(stunde) {
    var index, anfang_id, myid;
    index = wochentage[stunde.tag];
    _.map(fuelle_slots(stunde), function (anfang) {
        anfang_id = anfang.split(":").join("");
        console.log(anfang_id);
        myid = anfang_id + "_" + index;
        console.info(myid);
        var tabellenzelle = document.getElementById(myid);
        console.log(tabellenzelle);
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

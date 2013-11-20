/**
 * Created by trichter on 19.11.13.
 */

var stundenplan = [
    {tag: "Montag", anfang: "8:00", ende: "13:00", fach: "javascript"},
    {tag: "Dienstag", anfang: "8:00", ende: "13:00", fach: "javascript"},
    {tag: "Mittwoch", anfang: "8:00", ende: "13:00", fach: "javascript"},
    {tag: "Donnerstag", anfang: "8:00", ende: "13:00", fach: "javascript"},
    {tag: "Freitag", anfang: "8:00", ende: "13:00", fach: "javascript"},
    {tag: "Montag", anfang: "13:30", ende: "15:00", fach: "übung"},
    {tag: "Dienstag", anfang: "13:30", ende: "15:00", fach: "übung"},
    {tag: "Mittwoch", anfang: "13:30", ende: "15:00", fach: "übung"},
    {tag: "Donnerstag", anfang: "13:30", ende: "15:00", fach: "übung"}
];

function stunde_eintragen(stunde){
    var index, anfang_id, myid;
    if ("Montag" === stunde.tag) index = "1";
    if ("Dienstag" === stunde.tag) index = "2";
    if ("Mittwoch" === stunde.tag) index = "3";
    if ("Donnerstag" === stunde.tag) index = "4";
    if ("Freitag" === stunde.tag) index = "5";
    anfang_id = stunde.anfang.split(":").join("");
    console.log(anfang_id);
    myid = anfang_id+"_"+index;
    console.info(myid);
    var tabellenzelle = document.getElementById(myid);
    console.log(tabellenzelle);
    tabellenzelle.innerText = stunde.fach;

}

function alle_eintragen(stundenplan){
    console.log(
    _.map(stundenplan, stunde_eintragen));
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
;

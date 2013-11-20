/**
 * Created by trichter on 19.11.13.
 */

var stundenplan = [
    {tag: "Montag", anfang: "8:00", ende: "13:00", fach: "javascript"},
    {tag: "Montag", anfang: "13:30", ende: "15:00", fach: "übung"}
];

function stunde_eintragen(stunde){
    var index, anfang_id;
    if (stunde.tag === "Montag") index = "1";
    if (stunde.tag === "Dienstag") index = "2";
    if (stunde.tag === "Mittwoch") index = "3";
    if (stunde.tag === "Donnerstag") index = "4";
    if (stunde.tag === "Freitag") index = "5";
    anfang_id = stunde.anfang.split(":").join("");
    document.getElementById(angang_id+"_"+index).innerHTML = stunde.fach;

}

function alle_eintragen(stundenplan){
    _.map(stundenplan, stunde_eintragen);
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

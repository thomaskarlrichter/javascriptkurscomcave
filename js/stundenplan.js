/**
 * Created by trichter on 19.11.13.
 */

var stundenplan = [
    ["08:00", "javascript", "javascript", "javascript", "JavaScript", "JavaScript"],
    ["08:45", "javascript", "javascript", "javascript", "JavaScript", "JavaScript"],
    ["09:45", "javascript", "javascript", "javascript", "JavaScript", "JavaScript"],
    ["10:30", "javascript", "javascript", "javascript", "JavaScript", "JavaScript"],
    ["11:30", "javascript", "javascript", "javascript", "javascript", "übungen"],
    ["12:15", "javascript", "javascript", "javascript", "JavaScript", "JavaScript"],
    ["14:00", "übung", "übung", "lesen", "lesen", "übung"],
    ["14:45", "übung", "übung", "lesen", "lesen", "übung"],
    ["15:30", "übung", "übung", "lesen", "lesen", "übung"],
    ["16:00", "", "", "", "", ""]
];

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

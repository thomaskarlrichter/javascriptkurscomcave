/**
 * Created by trichter on 18.11.13.
 */

function loadMainImage(bildnummer, stadt) {
    var element =document.getElementById("bild");
    element.style.borderColor = "#ff0000";
    element.style.borderWidth = "1px";
    element.style.borderStyle = "solid";
    element.src="galerie/de"+bildnummer+".jpg";
    document.getElementById("mytitle").innerHTML = stadt;
}
function auf(event){
    var ellist = document.getElementsByClassName("feld");
    var el;
    console.log("länge: " +ellist.length);
    for (el in ellist){
        console.log(ellist[el]);
        ellist[el].style.height ="20px";
        ellist[el].style.backgroundColor = "red";
    }
  event.currentTarget.style.height = "40px";
  event.currentTarget.style.backgroundColor="blue";

}
function zu(event){
  event.currentTarget.style.height = "20px"
    event.currentTarget.style.backgroundColor="red";
}

let txt;
let titles;

/*
$(document).ready(function () {
    $("#button").click(ajaxVanilla())
}),
    $("#input").keyup(getInputTxt());
*/
function ajaxVanilla(txt) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://www.omdbapi.com/?apikey=cd534c5c&type=movie&s="+txt, true);
    xhr.onreadystatechange = function (){
        if(this.readyState===4 && this.status==200) {
            titles = "";
            var obj = JSON.parse(this.responseText);
            var movies = obj["Search"];
           if (typeof movies !== (undefined || null)){
               for (let i=0; i<Object.values(movies).length; i++){
                   titles = titles + Object.values(movies)[i]["Title"]+" "+Object.values(movies)[i]["Year"]+" <br>";
               }
           }
           document.getElementById("json").innerHTML = titles;
        }
    }
    xhr.send();
}

function getInputTxt() {
    txt = document.getElementById("input").value;
    if (txt.length>=2) {
        ajaxVanilla(txt);
    }

}

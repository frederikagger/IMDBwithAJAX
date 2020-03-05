let txt;
let titles;
var list = document.getElementById("ajax");

function ajaxVanilla(txt) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://www.omdbapi.com/?apikey=cd534c5c&type=movie&s="+txt, true);
    xhr.onreadystatechange = function (){
        if(this.readyState===4 && this.status===200) {
            titles = "";
            var obj = JSON.parse(this.responseText);
            var movies = obj["Search"];
           try{
               for (let i=0; i<Object.values(movies).length; i++){
                   var option = document.createElement("option");
                   option.value = Object.values(movies)[i]["Title"];
                   if (option!==null|undefined){
                       list.appendChild(option);
                   }

                   //titles = titles + Object.values(movies)[i]["Title"]+"<br>";
               }
           } catch (e) {
               console.log(e)
           }
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
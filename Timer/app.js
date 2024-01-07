
let timerActif = false;

//Fonction pour lancer le timer via l'appel à la fonction "showHours".
function refresh(){
    let timerActif = true
    if (timerActif == true){
        let t = 1000;
        setTimeout('showHours()', t)
        
    }
}

//Fonction pour stopper le temps une fois que l'utilisateur à quitter la page.
function stopClock() {
    if (timerActif) clearTimeout(t);
    timerActif = false;
}

//Fonction pour afficher la date complète, en récupérant le paramétre, lié au jour en temps réel.  
function showDays(){
    let date = new Date();
    let datelocale = date.toLocaleString('fr-FR',{
        weekday: 'long'
    })
    //let d = date.get();
     //if (d == "Wednesday");
    
    document.getElementById("J").innerHTML = datelocale;
    console.log(date);
    refresh();
    showSeconds();
   }

//Fonction pour afficher l'heure en temps réel, avec un opérateur pour le changement de texte en am 
//pour la matinée et pm pour l'après-midi.     
function showHours(){
 let date = new Date();
 let h = date.getHours();
 if (h < 10) 
 h = "0" + h;
 let time = h ;
 document.getElementById("H").innerHTML = time;

 //Condition si l'heure est en matinée ou en après-midi. Afficher "AM" ou "PM".
if (h < 12){
    document.getElementById("Temps").innerHTML = "AM";
    document.getElementById("P").innerHTML = "Bonne matinée";

} else if(h > 12){
    document.getElementById("Temps").innerHTML = "PM";
    document.getElementById("P").innerHTML = "Bon Aprés-Midi";
}
 refresh();
 showMins();
}

//Fonction pour afficher les minutes en temps réel. 
function showMins(){
    let date = new Date();
    let m = date.getMinutes();
    if (m < 10) m = "0" + m;
    let time = m;
    document.getElementById("M").innerHTML = time;
    console.log(date);
    refresh();
    showSeconds();
   }

//Fonction pour afficher les secondes en temps réel. 
   function showSeconds(){
    let date = new Date();
    let s = date.getSeconds();
    if (s < 10) s = "0" + s;
    let time = s;
    document.getElementById("S").innerHTML = time;
    refresh();
   }
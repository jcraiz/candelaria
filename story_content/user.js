window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzMZH03QKlXMLuSJL7hyfYB0h2T-h0hakrV1_cZQGJkBA4o1fp0Xhjf822k-S7e1qRrQA/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "Entradadetexto" : player.GetVar("Entradadetexto"),
 "Entradadetexto1" : player.GetVar("Entradadetexto1"),
 "correcto" : player.GetVar("correcto"),
 "Tiempo_transcurrido" : player.GetVar("Tiempo_transcurrido")
}

}

window.Script2 = function()
{
  const slGroup = document.querySelector('div[data-acc-text="Grupo1"] .group');
slGroup.setAttribute('data-tilt', '');
slGroup.setAttribute('data-tilt-perspective', '2000');
slGroup.setAttribute('data-tilt-speed', '800');
slGroup.setAttribute('data-tilt-max', '30');
slGroup.style.transformStyle = "preserve-3d";
slGroup.style.height = "inherit";

const script1 = document.createElement('script');
script1.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js";
script1.async = false;
document.body.appendChild(script1);

const script2 = document.createElement('script');
script2.src = "./tilt.jquery.js";
script2.async = false;
document.body.appendChild(script2);
}

window.Script3 = function()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

};

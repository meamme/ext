var togbutton;
function bt(){
if (togbutton == 0){
document.body.style.backgroundImage = "url('http://i.imgur.com/LmuELPV.jpg')";
document.getElementById("blueBarNAXAnchor").style.backgroundImage = "url('http://i.imgur.com/LmuELPV.jpg')";
document.getElementById("blueBarDOMInspector").style.backgroundImage = "url('http://i.imgur.com/LmuELPV.jpg')";
document.getElementById("pagelet_bluebar").style.backgroundImage = "url('http://i.imgur.com/LmuELPV.jpg')";
document.getElementById("content").style.background = "#00000000";

document.getElementById("u_ps_0_0_0").style.background = "#000000";
document.getElementById("topnews_main_stream_408239535924329").style.background = "#000000";
document.getElementById("stream_pagelet").style.background = "#00000000";
document.getElementById("rightCol").style.background = "#00000000";
document.getElementById("contentCol").style.background = "#00000000";
document.getElementById("mainContainer").style.background = "#00000000";
document.getElementById("contentcontentArea").style.background = "#00000000";
togbutton = 1;
  
} else {
  togbutton = 0;
}
}
document.getElementById("blueBarNAXAnchor").innerHTML="<button onclick="bt()">hi</button>";

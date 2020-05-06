if ($("#zip").val())==21703){
zipAct = "main.html";
}
else {
  alert( "We do not deliver to "+ $("#zip").val() );
  zipAct =null;
}
document.getElementById.('enterZip').action= "https://camelcasecurry.github.io/"+ zipAct;
 
alert( $("#zip").val() );

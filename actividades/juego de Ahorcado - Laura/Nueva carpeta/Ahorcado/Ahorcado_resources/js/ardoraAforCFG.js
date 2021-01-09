//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=90; timeIni=90; timeBon=20;
var successes=0; successesMax=6; attempts=0; attemptsMax=15;
var score=0; scoreMax=300; scoreInc=50; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#ECF4DF"; colorButton="#46CEC8"; colorText="#000000"; colorSele="#FFFF80";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=1; scoMessage=""; scoPtos=1000;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Felicitaciones"; messageTime="se te acabo el tiempo =("; messageError="te equivocaste =)"; messageErrorG="te equivocaste =)"; messageAttempts="Lo Siento =)"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWhvcmNhZG8"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["QUNFSVRF","T0xJVk8","Q1JFTUFT","Q09NSURBUw","U0FMVUQ","SkFCT04","","","",""];imaW=["oliva.jpg","olivo.jpg","crema.jpg","comida.jpg","salud.jpg","jabon.jpg","","","",""];queW=["Lo conocian en la antiguedad como oro liquido ¿que es?","aceitunas ¿de que arbol se obtiene?","miel y aceite oliva ¿a que producto pertenece?","aderezo ¿que condimentamos?","remedios caseros ¿en que area lo usamos?","aceite de oliva y avena, Higiene personal","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="Ahorcado_resources/media/"; textBNext="";

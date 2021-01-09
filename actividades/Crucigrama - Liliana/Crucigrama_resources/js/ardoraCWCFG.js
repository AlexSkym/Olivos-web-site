//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=90; timeIni=90; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=10; scoreDec=10;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#80FFFF"; colorButton="#FF0000"; colorText="#000000"; colorSele="#BB5E00";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy Bien !!!!"; messageTime="Se Termino el Tiempo!!!"; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q3J1Y2lncmFtYQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["QQ","Qw","RQ","SQ","VA","RQ","RA","RQ","Tw","TA","SQ","Vg","QQ"],["Qw","Og","Rw","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og"],["RQ","Og","SQ","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og"],["SQ","Og","UA","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og"],["VA","Og","Qw","Tw","Uw","TQ","RQ","VA","SQ","Qw","Tw","Uw","Og"],["VQ","Og","SQ","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og"],["Tg","Og","Tw","TA","SQ","Vg","Tw","Og","Og","Og","Og","Og","Og"],["QQ","Og","Uw","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og"],["Og","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og"],["TQ","RQ","RA","SQ","VA","RQ","Ug","Ug","QQ","Tg","RQ","QQ","Og"]];
var x1=[1,3,3,1,3,1];
var y1=[1,5,7,1,1,10];
var x2=[13,12,7,1,3,12];
var y2=[1,5,7,8,8,10];
var imaCW=["","","","","",""];
var audioCW=["","","","","",""];
var defCW=["¿Desde la antiguedad a que se le denomina el oro liquido?","¿Hoy se utiliza mucho este aceite en la cocina y también se utiliza para que otros productos?","¿De qué planta se extrae el aceite de oliva?","¿Qué otra denominación tiene el fruto del olivo llamado oliva?","¿Quiénes fueron los primeros en utilizar este aceite?","¿En que dieta el aceite de oliva es uno de los ingredientes principales?"];
var colNum=13;
var rowNum=10;

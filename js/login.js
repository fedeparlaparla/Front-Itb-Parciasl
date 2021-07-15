addEventListener("load",load)

var FrontServer="https://localhost:666/Login";

function load(){
    document.getElementById("ingresar").addEventListener("click",click);

}

function click(){
    SendParameters(FrontServer,ServerResponse);
}

function ServerResponse(){

}

function SendParametersGet(servidor,FunctionToPerform){

    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET",servidor,true);
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == XMLHttpRequest.DONE){
            if (xmlhttp.status = 200) {
                FunctionToPerform(xmlhttp.responseText);                
            }else{
                alert("An error has occurred");
            }
        }
    }
    xmlhttp.send();
}

function SendParamenters(servidor,FunctionToPerform){

    var xmlhttp = new XMLHttpRequest();

    var data= new FormData();
    data.append("usuario",$("usuario").value);
    data.append("contrasenia",$("contrasenia").value);
    xmlhttp.open("POST",servidor,true);
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            FunctionToPerform(xmlhttp.responseText);
        }else{
            alert("An error has occurred");
        }
    }
    xmlhttp.send(data);
}
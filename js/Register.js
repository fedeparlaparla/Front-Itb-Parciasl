addEventListener("load",load)

var FrontServer="https://localhost:666/Register";

function load(){
    document.getElementById("registronuevo").addEventListener("click",click);

}

function click(){
    SendParameters(FrontServer + "Register/enviar",ServerResponse);
}

function ServerResponse(respuesta){
    $("mail").value="";
    $("username").value = "";
    $("password").value = "";
    $("mensaje").innerHTML = respuesta;
    
}



function SendParamenters(servidor,FunctionToPerform){

    var xmlhttp = new XMLHttpRequest();

    var data= new FormData();
    data.append("mail",$("mail").value);
    data.append("user",$("username").value);
    data.append("pass",$("password").value);

    xmlhttp.open("POST",servidor,true);
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if(xmlhttp.status == 200){
                FunctionToPerform(xmlhttp.responseText);
        }else{
            alert("An error has occurred");
        }
    }
}

    xmlhttp.setRequestHeader("enctype","multipart/form-data");    

    xmlhttp.send(data);
}
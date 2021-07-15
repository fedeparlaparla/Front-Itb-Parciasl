addEventListener('load',focusIndex,false);
	function focusIndex(){
	document.getElementById('mail').focus();
}

$(document).ready(function(){
	$('#registronuevo').click(function(){
		var regularEx=/^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
		if(	$('#mail').val()=="" ){
			$('#mail').focus();
			alertify.alert("Debes ingresar un mail");
			return false;
		}else if($('#username').val()==""){
			$('#username').focus();
			alertify.alert("Debes ingresar un Usuario");
			return false;
		}else if($('#password').val()==""){
			$('#password').focus();
			alertify.alert("Debes ingresar una Contraseña");
			return false;
			}else if (!(regularEx.test($('#password').val()))) {
			$('#password').focus();
			   alertify.alert("La contrasenia debe contener al menos una letra mayuscula y un numero");
				return false;
	}

			cadena="mail="+$('#mail').val()+
			"&username="+ $('#username').val()+
			"&password="+ $('#password').val();

			$.ajax({
				type:"POST",
				url:"PHP/registro.php",
				data:cadena,
				success:function(r){
					if (r==2) {
						alertify.alert("Este usuario ya existe");
					}
					else if (r==1) {
						$('#frmRegistro')[0].reset();
						alertify.success("Agregado con Exito");
					}else{
						alertify.error("fallo");
					}
				}

			})
	})	;
});
function changeInput(event){
	if (event.which == 13 || event.which == 72 || event.which == 80){
			var actual = document.activeElement.name;
			if(actual == 'user'){
				document.getElementById('contrasenia').focus();
			}else{
				if(actual == 'pass'){
					document.getElementById('ingresar').focus();
				}else{
					document.getElementById('pass').focus();
				}
			}					
			event.preventDefault();
		}	

}
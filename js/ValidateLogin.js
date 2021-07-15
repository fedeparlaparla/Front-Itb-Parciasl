addEventListener('load',focusIndex,false);
	function focusIndex(){
	document.getElementById('usuario').focus();
}

	$(document).ready(function(){
		$('#ingresar').click(function(){
            var regularEx=/^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
				if ($('#usuario').val()=="") {
                    $('#usuario').focus();
					alertify.alert("Debe agregar su Usuario");
					return false;
			}else if($('#contrasenia').val()=="" ){
                $('#contrasenia').focus();
					alertify.alert("Debe inrgesar su Contraseña");
                    return false;
			} else if (!(regularEx.test($('#contrasenia').val()))) {
                $('#contrasenia').focus();
                   alertify.alert("La contrasenia debe contener al menos una letra mayuscula y un numero");
                    return false;
        }

		});
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

  
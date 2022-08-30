
	nombre_alumno_array = [];
	
	function submit()
	{
        
        var nombre_1 = document.getElementById("nombre_alumno_1").value;
        var nombre_2 = document.getElementById("nombre_alumno_2").value;
        var nombre_3 = document.getElementById("nombre_alumno_3").value;
        

        nombre_alumno_array.push(nombre_1);
        

		console.log(nombre_alumno_array);
		
        document.getElementById("ver_nombre").innerHTML = nombre_alumno_array;

	}


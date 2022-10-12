$(function(){
	agregar();
	agregar_mascotas();
	agregar_mascotas_lista();	
});
function agregar()
{
	
	$("#add").on("click", function (ev)
	{		
		ev.preventDefault();
		var nombre = $('input[id=nombre]');
		var apellido = $('input[id=apellido]');
		var direccion = $('input[id=direccion]');
		var telefono = $('input[id=telefono]');
		$('#lista').append("<tr class='"+color+"'>" +
			"<td>" + nombre.val() + "</td>" +
			"<td>" + apellido.val() + "</td>" +
			"<td>" + direccion.val() + "</td>" +
			"<td>" + telefono.val() + "</td>" +
			"<td><a href='..' id='add_mascotas' class='add_mascotas'>Agregar mascotas</a></td>" +
			"</tr>");
		nombre.val();
		apellido.val('');
		direccion.val('');
		telefono.val(''); 
		
		if (cont== 0) {
			color = "color2";
			cont = 1;
		}
		else{
			color = "color3";
			cont = 0;
		}
	});
}
function agregar_mascotas()
{
	$('#lista').on('click', '.add_mascotas', function (ev)
	{
		ev.preventDefault();
		$('#contenedor_addMascotas').replaceWith(""+
			"<header class='colorText2'>" +
				"<div>"+
					"<h4>Agregar mascotas</h4>"+
				"</div>"+
		  	"</header>"+
		  	"<form method='GET' id='form_masc'>"+
				"<div class='row fila'>"+
					"<div class='col-2 col-sm-2 col-md-3'>"+
						"<label>Propietario:</label>"+
					"</div>"+
					"<div class='col-9 col-sm-8'>"+
						"<input type='text' id='propietario' name='propietario'/>"+
					"</div>"+
				"</div>"+

				"<div class='row fila'>"+
					"<div class='col-2 col-sm-2 col-md-3'>"+
						"<label>nombre:</label>"+  
					"</div>"+
					"<div class='col-9 col-sm-8'>"+
						"<input type='text' id='nombreMascota' name='apellido'/>"+
					"</div>"+
				"</div>"+

				"<div class='row fila'>"+
					"<div class='col-2 col-sm-2 col-md-3'>"+
						"<label>Tipo:</label>"+
					"</div>"+
					"<div class='col-9 col-sm-8'>"+
						"<select name='tipo' id='tipo'>"+
							"<option value='Perro'>Perro</option>"+
							"<option value='Gato'>Gato</option>"+
							"<option value='Conejo'>Conejo</option>"+
							"<option value='Pajaro'>Pajaro</option>"+
							"<option value='Caballo'>Caballo</option>"+
						"</select>"+
					"</div>"+
				"</div>"+
				
				"<div class='row fila'>"+
					"<div class='col-2 col-sm-2 col-md-3'>"+
						"<label>F/N:</label>"+
					"</div>"+
					"<div class='col-9 col-sm-8'>"+
						"<input type='date' id='fechaNacimiento' name='fechaNacimiento'/>"+
					"</div>"+
				"</div>"+

				"<div class='row fila'>"+
				"<div class='col-2 col-sm-2 col-md-3'>"+
				"</div>"+
				"<div class='col-9 col-sm-8'>"+
					"<input type='button' value='Agregar' style='margin-top: 7px;' name='agregarMascota' id='agregarMascota'>"+
				"</div>"+
				"</div>"+
			"</form>"+
			"<br>"+
			"<br>"+
			"<table id='lista_m' class='col-9'>"+
              "<tr>"+
                "<th style='width: 3%;'>Nombre</th>"+
                "<th style='width: 8%;'>Tipo</th>"+
                "<th style='width: 13%;'>Fecha de nacimiento</th>"+
                "<th style='width: 3%;'>Opcion</th>"+
              "</tr>"+
           "</table>"
		);
	});
}

function agregar_mascotas_lista()
{
$('#form_masc').on('click', '.agregarMascota', function (ev)
	{
		ev.preventDefault();
		var nombre = $('input[id=nombreMascota]');
		var apellido = $('select[id=tipo]');
		var direccion = $('input[id=fechaNacimiento]');
		$('#lista_m').append(""+"<p>hola</p>"
			
    	);		
	});
}

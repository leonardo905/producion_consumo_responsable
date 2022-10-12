$(function(){
	agregar();
	editar();
});
var guarda;
function agregar(){
	$('#lista').on('click','.ver_detalles',function(ev){
		ev.preventDefault();
		guarda = this;

		var nombre_tabla = $(guarda).parent().parent().children();
		var apellido_tabla = nombre_tabla.next();
		var direccion_tabla = apellido_tabla.next();
		var telefono_tabla = direccion_tabla.next();

		var nombre = $('input[id=nombre]');
		var apellido = $('input[id=apellido]');
		var direccion = $('input[id=direccion]');
		var telefono = $('input[id=telefono]');
		
		/*$('#lista').append("<tr class='"+color+"'>" +
			"<td>" + nombre.val() + "</td>" +
			"<td>" + apellido.val() + "</td>" +
			"<td>" + direccion.val() + "</td>" +
			"<td>" + telefono.val() + "</td>" +
			"<td><a href='..' id='add_mascotas' class='add_mascotas'>Agregar mascotas</a></td>" +
			"</tr>");*/
		nombre.val(nombre_tabla.html());
		apellido.val(apellido_tabla.html());
		direccion.val(direccion_tabla.html());
		telefono.val(telefono_tabla.html());
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
function editar()
{
	
	$("#editar").on("click", function (ev)
	{		
		ev.preventDefault();
		var nombre = $('input[id=nombre]');
		var apellido = $('input[id=apellido]');
		var direccion = $('input[id=direccion]');
		var telefono = $('input[id=telefono]');

		var nombre_tabla2 = $(guarda).parent().parent().children();;
		var apellido_tabla2 = nombre_tabla2.next();
		var direccion_tabla2 = apellido_tabla2.next();
		var telefono_tabla2 = direccion_tabla2.next();
		var opciones_tabla2 = telefono_tabla2.next();

		nombre_tabla2.html(nombre.val());
		apellido_tabla2.html(apellido.val());
		direccion_tabla2.html(direccion.val());
		telefono_tabla2.html(telefono.val());
		opciones_tabla2.html("<a href='' id='ver_detalles' class='ver_detalles'>Ver detalles</a>")
		

		nombre.val('');
		apellido.val('');
		direccion.val('');
		telefono.val(''); 
		
		
	});
}
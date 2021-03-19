function agregar_producto(){

    var articulo = document.getElementById("form_articulo");
    var precio = document.getElementById("form_precio");
    var cantidad= document.getElementById("form_cantidad");

    var datos = document.getElementById("tabla_productos");

    var subtotal = Number(precio.value) * Number(cantidad.value);

    datos.innerHTML = datos.innerHTML + "<tr><td>"+articulo.value+"</td><td>"+precio.value+"</td><td>"+cantidad.value+"</td><td name='subtotal'>"+subtotal+"</td></tr>";
   
    calcular_total();
}
function calcular_total(){
    
    var subtotales = document.getElementsByName('subtotal');
    var total = document.getElementById('total');

    var suma = 0;

    for (var index = 0; index < subtotales.length; index++) {
        suma = suma + Number(subtotales[index].innerText)
        
    }

    total.innerText = ""+suma;
}
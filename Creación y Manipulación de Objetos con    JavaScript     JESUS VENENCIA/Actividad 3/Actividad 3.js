var salida='';
    function guardar(){
        var Datos=Object();
            Datos.ced= (document.getElementById('ced').value);
            Datos.nom=document.getElementById('nom').value;
            Datos.ape=document.getElementById('ape').value;
            Datos.eda= (document.getElementById('eda').value);
            console.log(Datos);
            console.log(Datos.ape);
    
        salida+='<tr><td>'+Datos.ced+'</td> <td>'+Datos.nom+'</td> <td>'+Datos.ape+'</td> <td>'+Datos.eda+'</td></tr>';
    document.getElementById('cuerpo').innerHTML=salida;
    
}

function remplazar(){
    var Datos=Object();
        Datos.ced=document.getElementById('ced').value;
        document.getElementById("resultado").innerHTML = "<p> Cédula :"+Datos.ced+"</p><p> Nombre :"+
        Datos.nom+"</p><p>Apellido:"+ Datos.ape+"</p><p>Edad:"+ Datos.eda+"</p>";
        
        Datos.nom=document.getElementById('nom').value;
        document.getElementById("resultado").innerHTML = "<p> Cédula :"+Datos.ced+"</p><p> Nombre :"+
        Datos.nom+"</p><p>Apellido:"+ Datos.ape+"</p><p>Edad:"+ Datos.eda+"</p>";

        Datos.ape= (document.getElementById('ape').value);       
        document.getElementById("resultado").innerHTML = "<p> Cédula :"+Datos.ced+"</p><p> Nombre :"+
        Datos.nom+"</p><p>Apellido:"+ Datos.ape+"</p><p>Edad:"+ Datos.eda+"</p>";

        Datos.eda= (document.getElementById('eda').value);
        document.getElementById("resultado").innerHTML = "<p> Cédula :"+Datos.ced+"</p><p> Nombre :"+
        Datos.nom+"</p><p>Apellido:"+ Datos.ape+"</p><p>Edad:"+ Datos.eda+"</p>";

    limpiarCaja();
}

function limpiarCaja(){
    document.getElementById('ced').value='';
    document.getElementById('nom').value='';
    document.getElementById('ape').value='';
    document.getElementById('eda').value='';
    document.getElementById('nom').focus();
}

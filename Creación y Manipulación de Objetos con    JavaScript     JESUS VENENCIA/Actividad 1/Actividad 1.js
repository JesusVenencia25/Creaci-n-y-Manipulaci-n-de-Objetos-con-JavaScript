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
        limpiarCaja(); 
}

function limpiarCaja(){
        document.getElementById('ced').value='';
        document.getElementById('nom').value='';
        document.getElementById('ape').value='';
        document.getElementById('eda').value='';
        document.getElementById('nom').focus();
}
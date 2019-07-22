document.querySelector('#generar-nombre').addEventListener('submit', function(e){

    e.preventDefault();

    // Leer variables
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;
    
    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;

    let url = '';
    url += 'http://uinames.com/api/?';

    // si hay origen agregarlo a url
    if(origenSeleccionado !== ''){

        url += `region=${origenSeleccionado}&`;
    }

    // si hay genero
    if(generoSeleccionado !== ''){

        url += `gender=${generoSeleccionado}&`;
    }

    // si hay cantidad
    if(cantidad !== ''){

        url += `amount=${cantidad}&`;
    }

    // conectar con ajax
    // iniciar xmlrequest
    const xhr = new XMLHttpRequest();

    // abrir conexion
    xhr.open('GET', url, true);

    // datos e impresion del template
    xhr.onload = function(){

        if(this.status === 200){

            const nombres = JSON.parse(this.responseText);

            // generar html
            let htmlNombres = '<h2>Nombres Generados</h2>';
            htmlNombres += '<ul class="lista">';

            // imprimir cada nombre
            nombres.forEach(function(nombre){ htmlNombres += `<li>${nombre.name}</li>`; });

            htmlNombres += '</ul>';

            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    }

    // enviar el request
    xhr.send();
});
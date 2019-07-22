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

    console.log(url);

});
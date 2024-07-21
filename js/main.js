
alert('¡Bienvenido a CherrySide, tu dealer favorito de vinilos!\nAbre la consola y sumérgete en la electrizante atmósfera de nuestra tienda especializada en vinilos de rock y sus subgéneros.');

function saludar() {
    let nombre = prompt('Yo soy CherryBot, tu guía en este viaje sonoro.\n¿Cómo te llamas, amante de la música?');
    if (nombre) {
        alert(`${nombre}, un placer conocerte.\nAbre la consola y elige un género para continuar con tu compra`);
    } else {
        alert('No ingresaste un nombre. Por favor, intenta de nuevo.');
        saludar ();
    }
}
saludar ();

function mostrarGeneros() {
    let generosUnicos = new Set();

    catalogo.forEach(disco => {
    generosUnicos.add(disco.genero);
    });

    let generosArray = Array.from(generosUnicos);
    generosArray.forEach((genero, index) => {
        console.log(`${index + 1}. Género: ${genero}`);
    });

    return generosArray;
}

function mostrarAlbumesPorGenero (genero) {
    let albumesFiltrados = catalogo.filter(disco => disco.genero === genero);

    albumesFiltrados.forEach((disco, index) => {
        console.log(`Estos son los álbumes de ${disco.genero}`)
        console.log(`${index + 1}. Artista: ${disco.artista}, Álbum: ${disco.album}, Precio: ${disco.precio}`);
    });

    return albumesFiltrados;
}

function agregarAlCarrito(disco) {
    carrito.push(disco);
}

function calcularPrecioTotal() {
    return carrito.reduce((total, disco) => total + disco.precio, 0);
}

function seleccionarDiscos() {
    let seguirComprando = true;

    while (seguirComprando) {
        let generosArray = mostrarGeneros();
        let generoElegido = parseInt(prompt("Escoge el número de tu género favorito para ver los álbumes disponibles:"));
        
        if (isNaN(generoElegido) || generoElegido < 1 || generoElegido > generosArray.length) {
            alert("Número inválido. Por favor, intenta de nuevo.");
            continue;
        }

        let generoFinal = generosArray[generoElegido - 1];
        let albumesFiltrados = mostrarAlbumesPorGenero(generoFinal);
        let albumElegido = parseInt(prompt("Elige un número de álbum para agregarlo al carrito:"));

        if (isNaN(albumElegido) || albumElegido < 1 || albumElegido > albumesFiltrados.length) {
            alert("Número inválido. Por favor, intenta de nuevo.");
            continue;
        }

        let discoSeleccionado = albumesFiltrados[albumElegido - 1];
        agregarAlCarrito(discoSeleccionado);

        seguirComprando = confirm("¿Deseas agregar más discos al carrito?");
    }

    let precioTotal = calcularPrecioTotal();
    console.log(`Precio total de los discos en el carrito: ${precioTotal}`);
}

seleccionarDiscos();










let set_id = 1
class Disco {
    constructor(genero, artista, album, precio) {
        this.genero = genero
        this.artista = artista
        this.album = album
        this.precio = precio
        this.id = set_id++
    }
}

let catalogo = [
    new Disco('Rock Alternativo', 'Radiohead', 'In Rainbows', 175),
    new Disco('Rock Alternativo', 'The Smashing Pumpkins', 'Mellon Collie and the Infinite Sadness', 325),
    new Disco('Rock Alternativo', 'The Cure', 'Disintegration', 175),
    new Disco('Rock Progresivo', 'King Crimson', 'Red', 150),
    new Disco('Rock Progresivo', 'La máquina de hacer pájaros', 'Películas', 140),
    new Disco('Rock Progresivo', 'Tool', 'Ænima', 280),
    new Disco('Rock Psicodélico', 'Pink Floyd', 'The Dark Side of the Moon', 150),
    new Disco('Rock Psicodélico', 'King Gizzard & the Lizard Wizard', 'Oddments', 135),
    new Disco('Rock Psicodélico', 'The Velvet Underground', 'The Velvet Underground & Nico', 155),
]

let carrito = [];

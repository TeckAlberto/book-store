const getRandomNum = (min, max) => {
    //console.log(Math.floor(Math.random() * (max - min) + min))
    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

export const initialBooks = [
    {
        id: crypto.randomUUID(),
        title: "Cien años de soledad",
        author: "Gabriel García Márquez",
        pages: 417,
        category: "Realismo mágico",
        summary: "Una saga familiar que abarca varias generaciones en el ficticio pueblo de Macondo, explorando temas de soledad, amor y destino en un entorno mágico y surrealista.",
        price: getRandomNum(350, 700),
        image: '../img/100_anios.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "1984",
        author: "George Orwell",
        pages: 328,
        category: "Distopía",
        summary: "Una visión sombría de un futuro totalitario, donde el gobierno controla la información y la vida de los ciudadanos, y el protagonista lucha contra la opresión.",
        price: getRandomNum(350, 700),
        image: '../img/1984.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "Matar un ruiseñor",
        author: "Harper Lee",
        pages: 324,
        category: "Ficción histórica",
        summary: "La historia de una niña llamada Scout y su padre, un abogado, mientras luchan contra la injusticia racial en el sur de Estados Unidos durante la década de 1930.",
        price: getRandomNum(350, 700),
        image: '../img/matar_a.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "Don Quijote de la Mancha",
        author: "Miguel de Cervantes",
        pages: 1056,
        category: "Novela clásica",
        summary: "Las aventuras de un caballero enloquecido y su fiel escudero, Sancho Panza, mientras luchan contra molinos de viento y buscan la justicia en la España del siglo XVII.",
        price: getRandomNum(350, 700),
        image: '../img/don_quijote.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "Harry Potter y la piedra filosofal",
        author: "J.K. Rowling",
        pages: 223,
        category: "Fantasía",
        summary: "La introducción al mundo mágico de Harry Potter, un joven mago que descubre su verdadera herencia y se enfrenta al malvado Lord Voldemort.",
        price: getRandomNum(350, 700),
        image: '../img/piedra_filosofal.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "El Gran Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 180,
        category: "Ficción moderna",
        summary: "La historia de Jay Gatsby y su obsesión por recuperar a su antiguo amor, Daisy Buchanan, en la opulenta década de 1920 en Estados Unidos.",
        price: getRandomNum(350, 700),
        image: '../img/el_gran_gatsby.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "El señor de los anillos: La comunidad del anillo",
        author: "J.R.R. Tolkien",
        pages: 423,
        category: "Fantasía épica",
        summary: "El inicio de la epopeya de Frodo Baggins y sus compañeros en su búsqueda para destruir el Anillo Único y derrotar al Señor Oscuro Sauron.",
        price: getRandomNum(350, 700),
        image: '../img/el_senior_de_los_anillos.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "En busca del tiempo perdido",
        author: "Marcel Proust",
        pages: 4215,
        category: "Novela modernista",
        summary: "Una obra monumental que reflexiona sobre la memoria, el arte y la vida a través de la vida del narrador, Marcel, y sus experiencias en la alta sociedad francesa.",
        price: getRandomNum(350, 700),
        image: '../img/en_busca_del_tiempo_perdido.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "Los hombres me explican cosas",
        author: "Rebecca Solnit",
        pages: 164,
        category: "Ensayo feminista",
        summary: "Un libro que explora la dinámica de género y cómo las mujeres a menudo son condescendientes y silenciadas por los hombres en la sociedad.",
        price: getRandomNum(350, 700),
        image: '../img/los_hombres.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "Crimen y castigo",
        author: "Fiodor Dostoievski",
        pages: 551,
        category: "Novela psicológica",
        summary: "La historia de Raskólnikov, un estudiante pobre que comete un asesinato y lucha con las consecuencias morales y psicológicas de su acto.",
        price: getRandomNum(350, 700),
        image: '../img/crimen_y_castigo.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "El retrato de Dorian Gray",
        author: "Oscar Wilde",
        pages: 254,
        category: "Novela gótica",
        summary: "La historia de Dorian Gray, un joven que mantiene su belleza eterna mientras su retrato envejece, explorando temas de decadencia y corrupción moral.",
        price: getRandomNum(350, 700),
        image: '../img/dorian_grey.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "La sombra del viento",
        author: "Carlos Ruiz Zafón",
        pages: 487,
        category: "Misterio gótico",
        summary: "Una novela que sigue al joven Daniel Sempere mientras desentraña los secretos de un libro maldito y se adentra en un misterioso mundo literario en la Barcelona de posguerra.",
        price: getRandomNum(350, 700),
        image: '../img/la_sombra.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "El amor en los tiempos del cólera",
        author: "Gabriel García Márquez",
        pages: 368,
        category: "Realismo mágico",
        summary: "Una historia de amor épica que se desarrolla a lo largo de décadas, explorando los temas del amor, la pasión y la perseverancia en un contexto latinoamericano.",
        price: getRandomNum(350, 700),
        image: '../img/tiempos_de_colera.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "El Hobbit",
        author: "J.R.R. Tolkien",
        pages: 310,
        category: "Fantasía épica",
        summary: "Las aventuras de Bilbo Bolsón, un hobbit inesperadamente elegido para embarcarse en una búsqueda para recuperar un tesoro custodiado por un dragón.",
        price: getRandomNum(350, 700),
        image: '../img/el_hobbit.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "Orgullo y prejuicio",
        author: "Jane Austen",
        pages: 432,
        category: "Novela romántica",
        summary: "La historia de Elizabeth Bennet y su relación con el señor Darcy en la sociedad inglesa del siglo XIX, explorando temas de clase y matrimonio.",
        price: getRandomNum(350, 700),
        image: '../img/orgullo_y_prejuicio.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "La Odisea",
        author: "Homero",
        pages: 384,
        category: "Épica griega",
        summary: "El épico viaje de Odiseo de regreso a su hogar en Ítaca después de la Guerra de Troya, enfrentando a dioses y monstruos en el camino.",
        price: getRandomNum(350, 700),
        image: '../img/la_odisea.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "Rayuela",
        author: "Julio Cortázar",
        pages: 577,
        category: "Novela experimental",
        summary: "Una obra innovadora que desafía las convenciones narrativas, siguiendo las experiencias de Horacio Oliveira en París y Buenos Aires.",
        price: getRandomNum(350, 700),
        image: '../img/la_rayuela.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "El perfume: Historia de un asesino",
        author: "Patrick Süskind",
        pages: 263,
        category: "Novela gótica",
        summary: "La historia de Jean-Baptiste Grenouille, un asesino obsesionado por crear el perfume perfecto a partir de esencias humanas.",
        price: getRandomNum(350, 700),
        image: '../img/el_perfume.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "El nombre del viento",
        author: "Patrick Rothfuss",
        pages: 662,
        category: "Fantasía épica",
        summary: "Las memorias de Kvothe, un músico y mago legendario, mientras relata su infancia, sus aventuras y su búsqueda de poder.",
        price: getRandomNum(350, 700),
        image: '../img/el_nombre_del_viento.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "Los juegos del hambre",
        author: "Suzanne Collins",
        pages: 374,
        category: "Ciencia ficción",
        summary: "En un futuro distópico, Katniss Everdeen se convierte en un símbolo de resistencia al participar en los brutales Juegos del Hambre.",
        price: getRandomNum(350, 700),
        image: '../img/juegos_del_hambre.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "La insoportable levedad del ser",
        author: "Milan Kundera",
        pages: 314,
        category: "Ficción filosófica",
        summary: "La historia de cuatro personajes en la Checoslovaquia comunista y sus relaciones, mientras se exploran temas existenciales y filosóficos.",
        price: getRandomNum(350, 700),
        image: '../img/levedad_del_ser.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "Drácula",
        author: "Bram Stoker",
        pages: 418,
        category: "Novela gótica",
        summary: "La icónica historia del conde Drácula y su búsqueda de sangre fresca en la Inglaterra victoriana, narrada a través de cartas y diarios.",
        price: getRandomNum(350, 700),
        image: '../img/dracula.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "Crónica de una muerte anunciada",
        author: "Gabriel García Márquez",
        pages: 128,
        category: "Realismo mágico",
        summary: "La historia de un asesinato anunciado en un pequeño pueblo latinoamericano, explorando temas de destino y tradición.",
        price: getRandomNum(350, 700),
        image: '../img/cronica_de_una_muerte.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "Moby-Dick",
        author: "Herman Melville",
        pages: 544,
        category: "Novela de aventuras",
        summary: "La obsesiva búsqueda del capitán Ahab de la ballena blanca Moby-Dick, una epopeya marítima llena de simbolismo.",
        price: getRandomNum(350, 700),
        image: '../img/moby_dick.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "La carretera",
        author: "Cormac McCarthy",
        pages: 287,
        category: "Ciencia ficción postapocalíptica",
        summary: "La travesía de un padre y su hijo a través de un mundo desolado después de un cataclismo, luchando por sobrevivir.",
        price: getRandomNum(350, 700),
        image: '../img/la_carretera.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "La inmortalidad",
        author: "Milan Kundera",
        pages: 416,
        category: "Ficción filosófica",
        summary: "La novela explora la vida y las relaciones de varios personajes en un contexto de pensamiento filosófico y reflexión existencial.",
        price: getRandomNum(350, 700),
        image: '../img/la_inmortalidad.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "El principito",
        author: "Antoine de Saint-Exupéry",
        pages: 96,
        category: "Literatura infantil",
        summary: "La historia del encuentro entre un piloto estrellado en el desierto y un pequeño príncipe proveniente de otro planeta, que transmite lecciones de vida.",
        price: getRandomNum(350, 700),
        image: '../img/el_principito.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "Frankenstein",
        author: "Mary Shelley",
        pages: 273,
        category: "Novela gótica",
        summary: "La creación del monstruo por el científico Victor Frankenstein y las consecuencias de su experimento en la Inglaterra del siglo XIX.",
        price: getRandomNum(350, 700),
        image: '../img/frankenstein.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "Crimen en directo",
        author: "Camilla Läckberg",
        pages: 208,
        category: "Misterio",
        summary: "Hércules Poirot se enfrenta a un asesinato que ocurre en medio de un programa de televisión en vivo, en un intrigante misterio de asesinato.",
        price: getRandomNum(350, 700),
        image: '../img/crimen_en_directo.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "Los pilares de la Tierra",
        author: "Ken Follett",
        pages: 983,
        category: "Ficción histórica",
        summary: "La construcción de una catedral gótica en la Inglaterra del siglo XII sirve de telón de fondo para una épica historia de amor, traición y ambición.",
        price: getRandomNum(350, 700),
        image: '../img/los_pilares_de_la_tierra.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "Siddhartha",
        author: "Hermann Hesse",
        pages: 152,
        category: "Novela espiritual",
        summary: "La búsqueda espiritual de Siddhartha, quien busca la iluminación a través de diversas experiencias de vida en la India antigua.",
        price: getRandomNum(350, 700),
        image: '../img/siddhartha.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "Los hombres que no amaban a las mujeres",
        author: "Stieg Larsson",
        pages: 590,
        category: "Novela negra",
        summary: "Una intrincada trama de misterio que sigue a Mikael Blomkvist y Lisbeth Salander mientras investigan la desaparición de una joven heredera.",
        price: getRandomNum(350, 700),
        image: '../img/los_hombres_que_no_amaban.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "Los miserables",
        author: "Victor Hugo",
        pages: 1232,
        category: "Novela histórica",
        summary: "La épica historia de Jean Valjean, un exconvicto, y su búsqueda de redención en la Francia del siglo XIX, mientras se cruza con otros personajes.",
        price: getRandomNum(350, 700),
        image: '../img/los_miserables.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "El guardián entre el centeno",
        author: "J.D. Salinger",
        pages: 277,
        category: "Ficción contemporánea",
        summary: "La historia de Holden Caulfield, un adolescente en busca de significado en un mundo lleno de hipocresía y superficialidad.",
        price: getRandomNum(350, 700),
        image: '../img/guardian_entre_el_centeno.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "El nombre de la rosa",
        author: "Umberto Eco",
        pages: 503,
        category: "Novela histórica",
        summary: "Una novela que combina un misterio de asesinato con debates teológicos y filosóficos en un monasterio benedictino en el siglo XIV.",
        price: getRandomNum(350, 700),
        image: '../img/el_nombre_de_la_rosa.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "La casa de los espíritus",
        author: "Isabel Allende",
        pages: 433,
        category: "Realismo mágico",
        summary: "Una saga familiar en un país latinoamericano no especificado, con elementos de realismo mágico y una rica exploración de las relaciones y la política.",
        price: getRandomNum(350, 700),
        image: '../img/la_casa_de_los_espiritus.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "Sapiens: De animales a dioses",
        author: "Yuval Noah Harari",
        pages: 443,
        category: "No ficción",
        summary: "Un análisis de la historia de la humanidad, desde la evolución de los homínidos hasta la formación de sociedades complejas y la era moderna.",
        price: getRandomNum(350, 700),
        image: '../img/sapiens.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "El cuento de la criada",
        author: "Margaret Atwood",
        pages: 311,
        category: "Ciencia ficción distópica",
        summary: "En un futuro distópico, las mujeres fértiles son subyugadas y forzadas a procrear en una sociedad totalitaria, mientras una criada narra su experiencia.",
        price: getRandomNum(350, 700),
        image: '../img/el_cuento_de_la_criada.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "Los juegos de la edad tardía",
        author: "Luis Landero",
        pages: 255,
        category: "Novela contemporánea",
        summary: "La historia de un hombre que, tras ser despedido de su trabajo, comienza a jugar al escondite en un parque de la ciudad, lo que lleva a una profunda reflexión sobre la vida y la sociedad.",
        price: getRandomNum(350, 700),
        image: '../img/los_juegos.jpg'
    },
    {
        id: crypto.randomUUID(),
        title: "Los detectives salvajes",
        author: "Roberto Bolaño",
        pages: 662,
        category: "Novela contemporánea",
        summary: "La historia de un grupo de jóvenes poetas mexicanos que se embarcan en una búsqueda obsesiva a través de América Latina en busca de un misterioso autor desaparecido.",
        price: getRandomNum(350, 700),
        image: '../img/los_detectives.jpg'
    },

];

export const getCategories = () => {
    const uniqueCategories = new Set() 
    initialBooks.forEach( book => uniqueCategories.add(book.category))
    return Array.from(uniqueCategories)
}


  

export const getRecommendedBooks = () => {
    const recommendedBooks = []
    const randomNumbers = []
    let i = 0
    while(i < 10) {
        const randomNumber = getRandomNum(0, initialBooks.length - 1)
        if(!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber)
            recommendedBooks.push(initialBooks[randomNumber]) 
            ++i
        }
    }

    return recommendedBooks
}

export const maxPagesOfBooks = () => {
    let maxPages = 0

    for(let i = 0; i < initialBooks.length; ++i) {
        if(maxPages < initialBooks[i].pages) {
            maxPages = initialBooks[i].pages
        }
    }

    return maxPages
    
}

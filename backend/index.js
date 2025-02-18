import express, { text } from "express";
import cors from "cors";


const ps5Games = [
  {
    "productId": "100001",
    "title": "Kena: Bridge of Spirits Edición Deluxe",
    "imageUrl": "/374w_480h_kena-bridge-of-spirits-ps5-portada.webp",
    "price": 30.95,
    "offerPrice": 25.99,
    "path": "/producto/kena-bridge-of-spirits-edicion-deluxe-ps5-deluxe/100001",
    "platformEdition": "Deluxe",
    "textPrevPrice": "Por solo",
    "content": {
      "title": "La Edición Deluxe de Kena: Bridge of Spirits incluye:",
      "text": [
        "El juego Kena: Bridge of Spirits",
        "Banda sonora original en formato digital",
        "Aspecto de Rot dorado",
        "Bastón exclusivo de Kena",
        "Hoja de pegatinas exclusiva en formato físico",
        "Gorros de celebración para Rot"
      ],
      "images": [
        {
          "url": "/kena-bridge-of-spirits-deluxe-content.webp"
        }
      ]
    },
    "description": {
      "main": "Kena: Bridge of the Spirits es un juego de acción y aventuras con historia ambientado en un mundo encantador repleto de exploración y combates vertiginosos. Los jugadores encontrarán y harán crecer a un equipo de espíritus compañeros denominados ‘Rot’, los cuales mejorarán las habilidades y crearán nuevas formas de manipular el entorno. Trabajar con el apoyo de Sony y las funciones de nueva generación de PS5 nos brindó la oportunidad de ampliar la inmersiva experiencia que teníamos en mente y mejorar las exclusivas mecánicas de juego de este juego.",
      "modes": []
    },
    "screens": [
      {
        url640: "/640w_360h_kena-bridge-of-spirits_01.webp",
        url1920: "/1920w_1080h_kena-bridge-of-spirits_01.webp"
      },
      {
        url640: "/640w_360h_kena-bridge-of-spirits_02.webp",
        url1920: "/1920w_1080h_kena-bridge-of-spirits_02.webp"
      },
      {
        url640: "/640w_360h_kena-bridge-of-spirits_03.webp",
        url1920: "/1920w_1080h_kena-bridge-of-spirits_03.webp"
      },
    ],
    "techInfos": {
      "platform": "PS5",
      "maker": "Ember Lab",
      "franchise": "Kena: Bridge of Spirits",
      "genres": [
        "Aventura",
      ],
      "region": "ESP",
      "pegi": "12+"
    }
  },

  {
    "productId": "100004",
    "title": "The Messenger",
    "imageUrl": "/374w_480h_the-messenger-ps5-portada.webp",
    "price": 26.95,
    "path": "/producto/the-messenger-ps5-estandar/100004",
    "platformEdition": "Estándar",
    "textPrevPrice": "Por solo",
    "publisher": "Devolver Digital",
    "description": {
      "main": "Mientras un ejército demoníaco asedia su aldea, un joven ninja se adentra en un mundo maldito para llevar un pergamino crucial para la supervivencia de su clan. Lo que empieza como un clásico juego de acción y plataformas no tarda en convertirse en una extensa aventura de viajes en el tiempo llena de emoción, sorpresas y humor.",
      "modes": [
        {
          title: "¡Incluye el DLC Picnic Panic!",
          text: "¡La épica historia de The Messenger continúa en un DLC vacacional lleno de acción tropical! En la Isla de los Vuduitos, el demonio Barma'thazël ha capturado a unas criaturillas indefensas para usarlas en sus rituales oscuros. ¡Solo el heroico Mensajero puede salvarlas en una aventura que combina vacaciones y misión de rescate!"
        },
        {
          title: "The Messenger (juego base)+",
          text: "Banda sonora original del reconocido compositor de chiptune Rainbowdragoneyes, creada a mano usando Famitracker. Sprites, animaciones y fondos de 8 y 16 bits diseñados meticulosamente, con el espíritu de los clásicos."
        }
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_the-messenger_01.webp",
        url1920: "/1920w_1080h_the-messenger_01.webp"
      },
      {
        url640: "/640w_360h_the-messenger_02.webp",
        url1920: "/1920w_1080h_the-messenger_02.webp"
      },
    ],
    "techInfos": {
      "platform": "PS5",
      "maker": "Devolver Digital",
      "franchise": "The Messenger",
      "genres": [
        "Arcade",
        "Acción",
        "Aventura",
      ],
      "developer": "Sabotage",
      "textLanguages": ["Español"],
      "region": "ESP",
      "pegi": "16+"
    }
  },

  {
    "productId": "100006",
    "title": "Elden Ring: Nightreign",
    "imageUrl": "/374w_480h_elden-ring-nightreign-ps5-portada.webp",
    "price": 209.99,
    "path": "/producto/elden-ring-nightreign-ps5-estandar/100006",
    "platformEdition": "Estándar",
    "textPrevPrice": "Por solo",
    "description": {
      "main": "Es una aventura independiente dentro del universo de ELDEN RING que se creó reimaginando el diseño central del juego para ofrecer a los jugadores una nueva experiencia de juego.",
      "modes": [
        {
          title: "ASCIENDAN JUNTOS",
          text: "Une fuerzas con otros jugadores para enfrentar la noche acechante y sus peligros en un modo cooperativo de 3 jugadores."
        },
        {
          title: "LUCHA CON HEROÍSMO",
          text: "Controla a héroes con destrezas únicas: cada uno posee sus propias habilidades y un estilo distintivo. Aunque son formidables por separado, sus habilidades crean sinergias poderosas cuando forman equipo."
        },
        {
          title: "ENFRÉNTATE A LA NOCHE",
          text: "Supera una implacable amenaza ambiental que altera el terreno entre cada sesión de juego y derrota al imponente jefe de esa noche."
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_elden-ring-nightreign_01.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_01.webp"
      },
      {
        url640: "/640w_360h_elden-ring-nightreign_02.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_02.webp"
      },
      {
        url640: "/640w_360h_elden-ring-nightreign_03.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_03.webp"
      },
    ],
    "techInfos": {
      "platform": "PS5",
      "maker": "Bandai Namco",
      "franchise": "Elden Ring",
      "genres": [
        "Rol/RPG",
        "Acción",
      ],
      "developer": "From Software",
      "textLanguages": ["Español"],
      "region": "ESP",
      "pegi": "18+"
    }
  },

  {
    "productId": "100009",
    "title": "Elden Ring: Nightreign Collector Edition",
    "imageUrl": "/374w_480h_elden-ring-nightreign-collector-edition-ps5-portada.webp",
    "price": 199.99,
    "path": "/producto/elden-ring-nightreign-collector-edition-ps5-coleccionista/100009",
    "platformEdition": "Coleccionista",
    "textPrevPrice": "Por solo",
    "content": {
      "title": "Esta edición incluye:",
      "text": [
        "Juego completo",
        "DLC (Disponible trás lanzamiento)",
        "Steelbook",
        "Banda Sonora Digital",
        "Estatua de Sylvestre (25cm)",
        "8 Cartas de Azotes de la Noche",
        "Libro de arte de tapa dura (40 Paginas)"
      ],
      "images": [
        {
          "url": "/elden-ring-nightreign-collector-edition-content.webp"
        }
      ]
    },
    "description": {
      "main": "Es una aventura independiente dentro del universo de ELDEN RING que se creó reimaginando el diseño central del juego para ofrecer a los jugadores una nueva experiencia de juego.",
      "modes": [
        {
          title: "ASCIENDAN JUNTOS",
          text: "Une fuerzas con otros jugadores para enfrentar la noche acechante y sus peligros en un modo cooperativo de 3 jugadores."
        },
        {
          title: "LUCHA CON HEROÍSMO",
          text: "Controla a héroes con destrezas únicas: cada uno posee sus propias habilidades y un estilo distintivo. Aunque son formidables por separado, sus habilidades crean sinergias poderosas cuando forman equipo."
        },
        {
          title: "ENFRÉNTATE A LA NOCHE",
          text: "Supera una implacable amenaza ambiental que altera el terreno entre cada sesión de juego y derrota al imponente jefe de esa noche."
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_elden-ring-nightreign_01.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_01.webp"
      },
      {
        url640: "/640w_360h_elden-ring-nightreign_02.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_02.webp"
      },
      {
        url640: "/640w_360h_elden-ring-nightreign_03.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_03.webp"
      },
    ],
    "techInfos": {
      "platform": "PS5",
      "maker": "Bandai Namco",
      "franchise": "Elden Ring",
      "genres": [
        "Rol/RPG",
        "Acción",
      ],
      "developer": "From Software",
      "textLanguages": ["Español"],
      "region": "ESP",
      "pegi": "18+"
    }
  },

  {
    "productId": "100013",
    "title": "Spellcaster University",
    "imageUrl": "/374w_480h_spellcaster-university-ps5-portada.webp",
    "price": 32.95,
    "path": "/producto/spellcaster-university-ps5/100013",
    "platformEdition": "",
    "textPrevPrice": "Por solo",
    "news": true,
    "publisher": "Red Art Games",
    "description": {
      "main": "En Spellcaster University tendrás la oportunidad de dirigir una escuela de magia en un pintoresco mundo de fantasía heroica. Constrúyela a tu gusto, ocúpate de las finanzas, contrata profesores… ¿Quieres convertirla en una academia de magia negra que acoja a los mayores eruditos en nigromancia y demonología? ¿O en un lugar en armonía con la naturaleza que sea un vivero de druidas y chamanes? O también podrías entrenar magos aventureros, duchos en el arte del sigilo y el combate cuerpo a cuerpo. Eso sí, tendrás que sobrevivir a los despiadados ataques de las tribus de orcos y al férreo control de las autoridades académicas.",
      "modes": [
        {
          title: "CONSTRUYE",
          text: "Construye tu escuela mediante un sistema original basado en mazos de cartas. No habrá dos partidas iguales."
        },
        {
          title: "MAZOS DIFERENTES",
          text: "Accede a los diferentes mazos en función de la magia que se enseñe en tu escuela. Toma decisiones y aprovecha las oportunidades para crear una escuela única en el mundo."
        },
        {
          title: "EXPLORA",
          text: "Explora el mazo arcano para obtener artefactos de extraños poderes y salas que desafían la realidad."
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_spellcaster-university_01.webp",
        url1920: "/1920w_1080h_spellcaster-university_01.webp"
      },
      {
        url640: "/640w_360h_spellcaster-university_02.webp",
        url1920: "/1920w_1080h_spellcaster-university_02.webp"
      },
    ],
    "techInfos": {
      "platform": "PS5",
      "maker": "Red Art Games",
      "genres": [
        "Simulación",
        "Estrategia",
      ],
      "region": "ESP",
      "pegi": "7+"
    }
  },

  {
    "productId": "100016",
    "title": "Persona 5 Royal",
    "imageUrl": "/374w_480h_persona-5-royal-ps5-portada.webp",
    "price": 56.95,
    "offerPrice": 47.99,
    "path": "/producto/persona-5-royal-ps5-estandar/100016",
    "platformEdition": "Estándar",
    "textPrevPrice": "Por solo",
    "news": true,
    "publisher": "Sega, Atlus",
    "description": {
      "main": 'Prepárate para la premiada experiencia RPG en esta edición definitiva de Persona 5 Royal, ¡con un tesoro de contenidos descargables incluido! Tras verse obligado a cambiarse a otro instituto en Tokio, el protagonista tiene un extraño sueño. "Eres, sin lugar a dudas, prisionero del destino. La perdición te aguarda en el futuro". Con el objetivo de su "rehabilitación" en mente, deberá ponerse la máscara de un Ladrón Fantasma para salvar el mundo de sus distorsionados deseos',
      "modes": [
        {
          title: "EXPLORA",
          text: "Explorar Tokio, desbloquear Personas, personalizar tu propia Guarida de los Ladrones, vivir finales alternativos y mucho más. "
        },
        {
          title: "DESAFIA",
          text: "Conviértete en el Ladrón Fantasma definitivo y desafía las convenciones, descubre el poder que llevas dentro y lucha por la justicia en la versión definitiva de Personal 5 Royal."
        },
        {
          title: "INCLUYE",
          text: "Más de 40 objetos de contenido descargable lanzado anteriormente "
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_persona-5-royal_01.webp",
        url1920: "/1920w_1080h_persona-5-royal_01.webp"
      },
      {
        url640: "/640w_360h_persona-5-royal_02.webp",
        url1920: "/1920w_1080h_persona-5-royal_02.webp"
      },
      {
        url640: "/640w_360h_persona-5-royal_03.webp",
        url1920: "/1920w_1080h_persona-5-royal_03.webp"
      },
    ],
    "techInfos": {
      "platform": "PS5",
      "maker": "Sega",
      "franchise": "Persona",
      "developer": "Atlus",
      "genres": [
        "Aventura",
        "Rol/RPG",
        "Manga"
      ],
      "textLanguages": [
        "Español"
      ],
      "voiceLanguages": [
        "Japonés",
        "Inglés"
      ],
      "region": "ESP",
      "pegi": "16+"
    }
  },
]

const ps4Games = [
  {
    "productId": "100002",
    "title": "Kena: Bridge of Spirits Edición Deluxe",
    "imageUrl": "/374w_480h_kena-bridge-of-spirits-ps4-portada.webp",
    "price": 30.95,
    "path": "/producto/kena-bridge-of-spirits-edicion-deluxe-ps4-deluxe/100002",
    "platformEdition": "Deluxe",
    "textPrevPrice": "Por solo",
    "content": {
      "title": "La Edición Deluxe de Kena: Bridge of Spirits incluye:",
      "text": [
        "El juego Kena: Bridge of Spirits",
        "Banda sonora original en formato digital",
        "Aspecto de Rot dorado",
        "Bastón exclusivo de Kena",
        "Hoja de pegatinas exclusiva en formato físico",
        "Gorros de celebración para Rot"
      ],
      "images": [
        {
          "url": "/kena-bridge-of-spirits-deluxe-content.webp"
        }
      ]
    },
    "description": {
      "main": "Kena: Bridge of the Spirits es un juego de acción y aventuras con historia ambientado en un mundo encantador repleto de exploración y combates vertiginosos. Los jugadores encontrarán y harán crecer a un equipo de espíritus compañeros denominados ‘Rot’, los cuales mejorarán las habilidades y crearán nuevas formas de manipular el entorno. Trabajar con el apoyo de Sony y las funciones de nueva generación de PS5 nos brindó la oportunidad de ampliar la inmersiva experiencia que teníamos en mente y mejorar las exclusivas mecánicas de juego de este juego.",
      "modes": []
    },
    "screens": [
      {
        url640: "/640w_360h_kena-bridge-of-spirits_01.webp",
        url1920: "/1920w_1080h_kena-bridge-of-spirits_01.webp"
      },
      {
        url640: "/640w_360h_kena-bridge-of-spirits_02.webp",
        url1920: "/1920w_1080h_kena-bridge-of-spirits_02.webp"
      },
      {
        url640: "/640w_360h_kena-bridge-of-spirits_03.webp",
        url1920: "/1920w_1080h_kena-bridge-of-spirits_03.webp"
      },
    ],
    "techInfos": {
      "platform": "PS4",
      "maker": "Ember Lab",
      "franchise": "Kena: Bridge of Spirits",
      "genres": [
        "Aventura",
      ],
      "region": "ESP",
      "pegi": "12+"
    }
  },

  {
    "productId": "100007",
    "title": "Elden Ring: Nightreign",
    "imageUrl": "/374w_480h_elden-ring-nightreign-ps4-portada.webp",
    "price": 36.95,
    "offerPrice": 31.95,
    "path": "/producto/elden-ring-nightreign-ps4-estandar/100007",
    "platformEdition": "Estándar",
    "textPrevPrice": "Por solo",
    "description": {
      "main": "Es una aventura independiente dentro del universo de ELDEN RING que se creó reimaginando el diseño central del juego para ofrecer a los jugadores una nueva experiencia de juego.",
      "modes": [
        {
          title: "ASCIENDAN JUNTOS",
          text: "Une fuerzas con otros jugadores para enfrentar la noche acechante y sus peligros en un modo cooperativo de 3 jugadores."
        },
        {
          title: "LUCHA CON HEROÍSMO",
          text: "Controla a héroes con destrezas únicas: cada uno posee sus propias habilidades y un estilo distintivo. Aunque son formidables por separado, sus habilidades crean sinergias poderosas cuando forman equipo."
        },
        {
          title: "ENFRÉNTATE A LA NOCHE",
          text: "Supera una implacable amenaza ambiental que altera el terreno entre cada sesión de juego y derrota al imponente jefe de esa noche."
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_elden-ring-nightreign_01.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_01.webp"
      },
      {
        url640: "/640w_360h_elden-ring-nightreign_02.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_02.webp"
      },
      {
        url640: "/640w_360h_elden-ring-nightreign_03.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_03.webp"
      },
    ],
    "techInfos": {
      "platform": "PS4",
      "maker": "Bandai Namco",
      "franchise": "Elden Ring",
      "genres": [
        "Rol/RPG",
        "Acción",
      ],
      "developer": "From Software",
      "textLanguages": ["Español"],
      "region": "ESP",
      "pegi": "18+"
    }
  },
  {
    "productId": "100010",
    "title": "Elden Ring: Nightreign Collector Edition",
    "imageUrl": "/374w_480h_elden-ring-nightreign-collector-edition-ps4-portada.webp",
    "price": 209.99,
    "path": "/producto/elden-ring-nightreign-collector-edition-ps4-coleccionista/100010",
    "platformEdition": "Coleccionista",
    "textPrevPrice": "Por solo",
    "content": {
      "title": "Esta edición incluye:",
      "text": [
        "Juego completo",
        "DLC (Disponible trás lanzamiento)",
        "Steelbook",
        "Banda Sonora Digital",
        "Estatua de Sylvestre (25cm)",
        "8 Cartas de Azotes de la Noche",
        "Libro de arte de tapa dura (40 Paginas)"
      ],
      "images": [
        {
          "url": "/elden-ring-nightreign-collector-edition-content.webp"
        }
      ]
    },
    "description": {
      "main": "Es una aventura independiente dentro del universo de ELDEN RING que se creó reimaginando el diseño central del juego para ofrecer a los jugadores una nueva experiencia de juego.",
      "modes": [
        {
          title: "ASCIENDAN JUNTOS",
          text: "Une fuerzas con otros jugadores para enfrentar la noche acechante y sus peligros en un modo cooperativo de 3 jugadores."
        },
        {
          title: "LUCHA CON HEROÍSMO",
          text: "Controla a héroes con destrezas únicas: cada uno posee sus propias habilidades y un estilo distintivo. Aunque son formidables por separado, sus habilidades crean sinergias poderosas cuando forman equipo."
        },
        {
          title: "ENFRÉNTATE A LA NOCHE",
          text: "Supera una implacable amenaza ambiental que altera el terreno entre cada sesión de juego y derrota al imponente jefe de esa noche."
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_elden-ring-nightreign_01.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_01.webp"
      },
      {
        url640: "/640w_360h_elden-ring-nightreign_02.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_02.webp"
      },
      {
        url640: "/640w_360h_elden-ring-nightreign_03.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_03.webp"
      },
    ],
    "techInfos": {
      "platform": "PS4",
      "maker": "Bandai Namco",
      "franchise": "Elden Ring",
      "genres": [
        "Rol/RPG",
        "Acción",
      ],
      "developer": "From Software",
      "textLanguages": ["Español"],
      "region": "ESP",
      "pegi": "18+"
    }
  },

  {
    "productId": "100014",
    "title": "Spellcaster University",
    "imageUrl": "/374w_480h_spellcaster-university-ps4-portada.webp",
    "price": 32.95,
    "path": "/producto/spellcaster-university-ps4/100014",
    "platformEdition": "",
    "textPrevPrice": "Por solo",
    "publisher": "Red Art Games",
    "description": {
      "main": "En Spellcaster University tendrás la oportunidad de dirigir una escuela de magia en un pintoresco mundo de fantasía heroica. Constrúyela a tu gusto, ocúpate de las finanzas, contrata profesores… ¿Quieres convertirla en una academia de magia negra que acoja a los mayores eruditos en nigromancia y demonología? ¿O en un lugar en armonía con la naturaleza que sea un vivero de druidas y chamanes? O también podrías entrenar magos aventureros, duchos en el arte del sigilo y el combate cuerpo a cuerpo. Eso sí, tendrás que sobrevivir a los despiadados ataques de las tribus de orcos y al férreo control de las autoridades académicas.",
      "modes": [
        {
          title: "CONSTRUYE",
          text: "Construye tu escuela mediante un sistema original basado en mazos de cartas. No habrá dos partidas iguales."
        },
        {
          title: "MAZOS DIFERENTES",
          text: "Accede a los diferentes mazos en función de la magia que se enseñe en tu escuela. Toma decisiones y aprovecha las oportunidades para crear una escuela única en el mundo."
        },
        {
          title: "EXPLORA",
          text: "Explora el mazo arcano para obtener artefactos de extraños poderes y salas que desafían la realidad."
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_spellcaster-university_01.webp",
        url1920: "/1920w_1080h_spellcaster-university_01.webp"
      },
      {
        url640: "/640w_360h_spellcaster-university_02.webp",
        url1920: "/1920w_1080h_spellcaster-university_02.webp"
      },
    ],
    "techInfos": {
      "platform": "PS4",
      "maker": "Red Art Games",
      "genres": [
        "Simulación",
        "Estrategia",
      ],
      "region": "ESP",
      "pegi": "7+"
    }
  },

  {
    "productId": "100017",
    "title": "Persona 5 Royal",
    "imageUrl": "/374w_480h_persona-5-royal-ps4-portada.webp",
    "price": 56.95,
    "path": "/producto/persona-5-royal-ps4-estandar/100017",
    "platformEdition": "Estándar",
    "textPrevPrice": "Por solo",
    "news": true,
    "publisher": "Sega, Atlus",
    "description": {
      "main": 'Prepárate para la premiada experiencia RPG en esta edición definitiva de Persona 5 Royal, ¡con un tesoro de contenidos descargables incluido! Tras verse obligado a cambiarse a otro instituto en Tokio, el protagonista tiene un extraño sueño. "Eres, sin lugar a dudas, prisionero del destino. La perdición te aguarda en el futuro". Con el objetivo de su "rehabilitación" en mente, deberá ponerse la máscara de un Ladrón Fantasma para salvar el mundo de sus distorsionados deseos',
      "modes": [
        {
          title: "EXPLORA",
          text: "Explorar Tokio, desbloquear Personas, personalizar tu propia Guarida de los Ladrones, vivir finales alternativos y mucho más. "
        },
        {
          title: "DESAFIA",
          text: "Conviértete en el Ladrón Fantasma definitivo y desafía las convenciones, descubre el poder que llevas dentro y lucha por la justicia en la versión definitiva de Personal 5 Royal."
        },
        {
          title: "INCLUYE",
          text: "Más de 40 objetos de contenido descargable lanzado anteriormente "
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_persona-5-royal_01.webp",
        url1920: "/1920w_1080h_persona-5-royal_01.webp"
      },
      {
        url640: "/640w_360h_persona-5-royal_02.webp",
        url1920: "/1920w_1080h_persona-5-royal_02.webp"
      },
      {
        url640: "/640w_360h_persona-5-royal_03.webp",
        url1920: "/1920w_1080h_persona-5-royal_03.webp"
      },
    ],
    "techInfos": {
      "platform": "PS4",
      "maker": "Sega",
      "franchise": "Persona",
      "developer": "Atlus",
      "genres": [
        "Aventura",
        "Rol/RPG",
        "Manga"
      ],
      "textLanguages": [
        "Español"
      ],
      "voiceLanguages": [
        "Japonés",
        "Inglés"
      ],
      "region": "ESP",
      "pegi": "16+"
    }
  },

  {
    "productId": "100023",
    "title": "Clock Tower Rewind",
    "imageUrl": "/374w_480h_clock-tower-rewind-ps4-eeuu-portada.webp",
    "price": 56.95,
    "path": "/producto/clock-tower-rewind-ps4-estandar-eeuu/100023",
    "platformEdition": "Estándar - EEUU",
    "textPrevPrice": "Por solo",
    "news": true,
    "description": {
      "main": 'Vuelve atrás en el tiempo con uno de los pioneros del género del terror de supervivencia. Traducido y lanzado por primera vez fuera de Japón, Clock Tower: Rebobinado es el resurgimiento del terrorífico clásico de 16 bits que te desafía a explorar los inquietantes confines de la mansión de la familia Barrows. Tomas el rol de la huérfana adolescente Jennifer, y debes explorar cada rincón perturbador para encontrar objetos, revelar secretos y descubrir distintas formas de evadir al Hombretijera, un psicópata e imparable asesino que usa cizallas. Prueba el modo original para experimentar Clock Tower al igual que cuando fue lanzado por primera vez en 1995 o juega en el modo mejorado que incluye contenido adicional y mejoras. Las funciones adicionales incluyen una nueva presentación animada, canciones temáticas vocales de apertura y cierre, cinemáticas de cómic animadas, entrevista con los creadores, galería de arte, arte en los bordes, estados de guardado y un reproductor de música. El reloj corre… ¿Puedes sobrevivir?',
      "modes": [
        {
          title: "POR FIN",
          text: "El clásico de terror de supervivencia, Clock Tower, se tradujo oficialmente y sale por primera vez de Japón."
        },
        {
          title: "ELIGE",
          text: "Elige entre el modo original o el mejorado, que incluye varias incorporaciones a la jugabilidad y mejoras de calidad de vida."
        },
        {
          title: "INCLUYE",
          text: "Nueva presentación animada, cinemáticas de cómic animadas y canciones temáticas vocales interpretadas por Mary Elizabeth McGlynn. Incluye una galería de arte, un reproductor de música, entrevistas con los creadores y detrás de escena, estados de guardado y otras modernas incorporaciones."
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_clock-tower-rewind_01.webp",
        url1920: "/1920w_1080h_clock-tower-rewind_01.webp"
      },
      {
        url640: "/640w_360h_clock-tower-rewind_02.webp",
        url1920: "/1920w_1080h_clock-tower-rewind_02.webp"
      },
    ],
    "techInfos": {
      "platform": "PS4",
      "maker": "Limited Run",
      "imported": true,
      "genres": [
        "Aventura",
        "Indie"
      ],
      "textLanguages": [
        "Español"
      ],
      "region": "EEUU",
      "pegi": "7+"
    }
  },
];

const xboxSeriesGames = [
  {
    "productId": "100003",
    "title": "Kena: Bridge of Spirits Edición Deluxe",
    "imageUrl": "/374w_480h_kena-bridge-of-spirits-xbox-series-xbox-one-portada.webp",
    "price": 30.95,
    "offerPrice": 28.99,
    "path": "/producto/kena-bridge-of-spirits-edicion-deluxe-xbox-series-xbox-one-deluxe/100003",
    "platformEdition": "Deluxe",
    "textPrevPrice": "Por solo",
    "content": {
      "title": "La Edición Deluxe de Kena: Bridge of Spirits incluye:",
      "text": [
        "El juego Kena: Bridge of Spirits",
        "Banda sonora original en formato digital",
        "Aspecto de Rot dorado",
        "Bastón exclusivo de Kena",
        "Hoja de pegatinas exclusiva en formato físico",
        "Gorros de celebración para Rot"
      ],
      "images": [
        {
          "url": "/kena-bridge-of-spirits-deluxe-content.webp"
        }
      ]
    },
    "description": {
      "main": "Kena: Bridge of the Spirits es un juego de acción y aventuras con historia ambientado en un mundo encantador repleto de exploración y combates vertiginosos. Los jugadores encontrarán y harán crecer a un equipo de espíritus compañeros denominados ‘Rot’, los cuales mejorarán las habilidades y crearán nuevas formas de manipular el entorno. Trabajar con el apoyo de Sony y las funciones de nueva generación de PS5 nos brindó la oportunidad de ampliar la inmersiva experiencia que teníamos en mente y mejorar las exclusivas mecánicas de juego de este juego.",
      "modes": []
    },
    "screens": [
      {
        url640: "/640w_360h_kena-bridge-of-spirits_01.webp",
        url1920: "/1920w_1080h_kena-bridge-of-spirits_01.webp"
      },
      {
        url640: "/640w_360h_kena-bridge-of-spirits_02.webp",
        url1920: "/1920w_1080h_kena-bridge-of-spirits_02.webp"
      },
      {
        url640: "/640w_360h_kena-bridge-of-spirits_03.webp",
        url1920: "/1920w_1080h_kena-bridge-of-spirits_03.webp"
      },
    ],
    "techInfos": {
      "platform": "Xbox Series, Xbox One",
      "maker": "Ember Lab",
      "franchise": "Kena: Bridge of Spirits",
      "genres": [
        "Aventura",
      ],
      "region": "ESP",
      "pegi": "12+"
    }
  },
  {
    "productId": "100008",
    "title": "Elden Ring: Nightreign",
    "imageUrl": "/374w_480h_elden-ring-nightreign-xbox-series-portada.webp",
    "price": 36.95,
    "path": "/producto/elden-ring-nightreign-xbox-series-estandar/100008",
    "platformEdition": "Estándar",
    "textPrevPrice": "Por solo",
    "description": {
      "main": "Es una aventura independiente dentro del universo de ELDEN RING que se creó reimaginando el diseño central del juego para ofrecer a los jugadores una nueva experiencia de juego.",
      "modes": [
        {
          title: "ASCIENDAN JUNTOS",
          text: "Une fuerzas con otros jugadores para enfrentar la noche acechante y sus peligros en un modo cooperativo de 3 jugadores."
        },
        {
          title: "LUCHA CON HEROÍSMO",
          text: "Controla a héroes con destrezas únicas: cada uno posee sus propias habilidades y un estilo distintivo. Aunque son formidables por separado, sus habilidades crean sinergias poderosas cuando forman equipo."
        },
        {
          title: "ENFRÉNTATE A LA NOCHE",
          text: "Supera una implacable amenaza ambiental que altera el terreno entre cada sesión de juego y derrota al imponente jefe de esa noche."
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_elden-ring-nightreign_01.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_01.webp"
      },
      {
        url640: "/640w_360h_elden-ring-nightreign_02.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_02.webp"
      },
      {
        url640: "/640w_360h_elden-ring-nightreign_03.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_03.webp"
      },
    ],
    "techInfos": {
      "platform": "Xbox Series",
      "maker": "Bandai Namco",
      "franchise": "Elden Ring",
      "genres": [
        "Rol/RPG",
        "Acción",
      ],
      "developer": "From Software",
      "textLanguages": ["Español"],
      "region": "ESP",
      "pegi": "18+"
    }
  },
  {
    "productId": "100011",
    "title": "Elden Ring: Nightreign Collector Edition",
    "imageUrl": "/374w_480h_elden-ring-nightreign-collector-edition-xbox-series-portada.webp",
    "price": 209.99,
    "path": "/producto/elden-ring-nightreign-collector-edition-xbox-series-coleccionista/100011",
    "platformEdition": "Coleccionista",
    "textPrevPrice": "Por solo",
    "content": {
      "title": "Esta edición incluye:",
      "text": [
        "Juego completo",
        "DLC (Disponible trás lanzamiento)",
        "Steelbook",
        "Banda Sonora Digital",
        "Estatua de Sylvestre (25cm)",
        "8 Cartas de Azotes de la Noche",
        "Libro de arte de tapa dura (40 Paginas)"
      ],
      "images": [
        {
          "url": "/elden-ring-nightreign-collector-edition-content.webp"
        }
      ]
    },
    "description": {
      "main": "Es una aventura independiente dentro del universo de ELDEN RING que se creó reimaginando el diseño central del juego para ofrecer a los jugadores una nueva experiencia de juego.",
      "modes": [
        {
          title: "ASCIENDAN JUNTOS",
          text: "Une fuerzas con otros jugadores para enfrentar la noche acechante y sus peligros en un modo cooperativo de 3 jugadores."
        },
        {
          title: "LUCHA CON HEROÍSMO",
          text: "Controla a héroes con destrezas únicas: cada uno posee sus propias habilidades y un estilo distintivo. Aunque son formidables por separado, sus habilidades crean sinergias poderosas cuando forman equipo."
        },
        {
          title: "ENFRÉNTATE A LA NOCHE",
          text: "Supera una implacable amenaza ambiental que altera el terreno entre cada sesión de juego y derrota al imponente jefe de esa noche."
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_elden-ring-nightreign_01.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_01.webp"
      },
      {
        url640: "/640w_360h_elden-ring-nightreign_02.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_02.webp"
      },
      {
        url640: "/640w_360h_elden-ring-nightreign_03.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_03.webp"
      },
    ],
    "techInfos": {
      "platform": "Xbox Series",
      "maker": "Bandai Namco",
      "franchise": "Elden Ring",
      "genres": [
        "Rol/RPG",
        "Acción",
      ],
      "developer": "From Software",
      "textLanguages": ["Español"],
      "region": "ESP",
      "pegi": "18+"
    }
  },

  {
    "productId": "100018",
    "title": "Persona 5 Royal",
    "imageUrl": "/374w_480h_persona-5-royal-xbox-series-xbox-one-portada.webp",
    "price": 56.95,
    "path": "/producto/persona-5-royal-xbox-series-xbox-one-estandar/100018",
    "platformEdition": "Estándar",
    "textPrevPrice": "Por solo",
    "publisher": "Sega, Atlus",
    "description": {
      "main": 'Prepárate para la premiada experiencia RPG en esta edición definitiva de Persona 5 Royal, ¡con un tesoro de contenidos descargables incluido! Tras verse obligado a cambiarse a otro instituto en Tokio, el protagonista tiene un extraño sueño. "Eres, sin lugar a dudas, prisionero del destino. La perdición te aguarda en el futuro". Con el objetivo de su "rehabilitación" en mente, deberá ponerse la máscara de un Ladrón Fantasma para salvar el mundo de sus distorsionados deseos',
      "modes": [
        {
          title: "EXPLORA",
          text: "Explorar Tokio, desbloquear Personas, personalizar tu propia Guarida de los Ladrones, vivir finales alternativos y mucho más. "
        },
        {
          title: "DESAFIA",
          text: "Conviértete en el Ladrón Fantasma definitivo y desafía las convenciones, descubre el poder que llevas dentro y lucha por la justicia en la versión definitiva de Personal 5 Royal."
        },
        {
          title: "INCLUYE",
          text: "Más de 40 objetos de contenido descargable lanzado anteriormente "
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_persona-5-royal_01.webp",
        url1920: "/1920w_1080h_persona-5-royal_01.webp"
      },
      {
        url640: "/640w_360h_persona-5-royal_02.webp",
        url1920: "/1920w_1080h_persona-5-royal_02.webp"
      },
      {
        url640: "/640w_360h_persona-5-royal_03.webp",
        url1920: "/1920w_1080h_persona-5-royal_03.webp"
      },
    ],
    "techInfos": {
      "platform": "Xbox Series, Xbox One",
      "maker": "Sega",
      "franchise": "Persona",
      "developer": "Atlus",
      "genres": [
        "Aventura",
        "Rol/RPG",
        "Manga"
      ],
      "textLanguages": [
        "Español"
      ],
      "voiceLanguages": [
        "Japonés",
        "Inglés"
      ],
      "region": "ESP",
      "pegi": "16+"
    }
  },

  {
    "productId": "100021",
    "title": "The Eternal Life of Goldman",
    "imageUrl": "/374w_480h_the-eternal-life-of-goldman-xbox-series-portada.webp",
    "price": 29.99,
    "path": "/producto/the-eternal-life-of-goldman-xbox-series-estandar/100021",
    "platformEdition": "Estándar",
    "textPrevPrice": "Por solo",
    "news": true,
    "publisher": "Nighthawk Interactive",
    "description": {
      "main": 'Un cuento que engaña… The Eternal Life of Goldman narra una aventura dinámica y al mismo tiempo oscura que entrelaza leyendas, cuentos de hadas y mitos. Aborda el género desde una perspectiva poco habitual y ofrece sorpresas a cada paso. Llegarás al archipiélago con una extraña misión: matar a la deidad, la criatura mística de la que todo el mu.ndo habla pero que nadie ha visto. Para dar con ella, deberás adentrarte en los innumerables secretos que guardan estas islas. Descubrirás un lugar marcado por la tragedia y repleto de personajes excéntricos y contrastes alucinantes',
      "modes": [
        {
          title: "",
          text: "1. Vive una aventura dinámica y al mismo tiempo oscura, dibujada por completo a mano y animada fotograma a fotograma con técnicas clásicas."
        },
        {
          title: "",
          text: "2. Ahonda en los secretos del archipiélago para encontrar a la misteriosa deidad y derrotarla."
        },
        {
          title: "",
          text: "3. Mejora tu bastón con piezas nuevas, desbloquea habilidades, explora secretos ocultos y enfréntate a criaturas increíbles!"
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_the-eternal-life-of-goldman_01.webp",
        url1920: "/1920w_1080h_the-eternal-life-of-goldman_01.webp"
      },
      {
        url640: "/640w_360h_the-eternal-life-of-goldman_02.webp",
        url1920: "/1920w_1080h_the-eternal-life-of-goldman_02.webp"
      },
    ],
    "techInfos": {
      "platform": "Xbox Series",
      "maker": "THQ Nordic",
      "franchise": "The Eternal Life of Goldman",
      "developer": "Weappy",
      "genres": [
        "Aventura",
        "Plataformas",
      ],
      "textLanguages": [
        "Español"
      ],
      "region": "ESP",
      "pegi": "12+"
    }
  },

  {
    "productId": "100024",
    "title": "Clock Tower Rewind",
    "imageUrl": "/374w_480h_clock-tower-rewind-xbox-series-eeuu-portada.webp",
    "price": 56.95,
    "path": "/producto/clock-tower-rewind-xbox-series-estandar-eeuu/100024",
    "platformEdition": "Estándar - EEUU",
    "textPrevPrice": "Por solo",
    "news": true,
    "description": {
      "main": 'Vuelve atrás en el tiempo con uno de los pioneros del género del terror de supervivencia. Traducido y lanzado por primera vez fuera de Japón, Clock Tower: Rebobinado es el resurgimiento del terrorífico clásico de 16 bits que te desafía a explorar los inquietantes confines de la mansión de la familia Barrows. Tomas el rol de la huérfana adolescente Jennifer, y debes explorar cada rincón perturbador para encontrar objetos, revelar secretos y descubrir distintas formas de evadir al Hombretijera, un psicópata e imparable asesino que usa cizallas. Prueba el modo original para experimentar Clock Tower al igual que cuando fue lanzado por primera vez en 1995 o juega en el modo mejorado que incluye contenido adicional y mejoras. Las funciones adicionales incluyen una nueva presentación animada, canciones temáticas vocales de apertura y cierre, cinemáticas de cómic animadas, entrevista con los creadores, galería de arte, arte en los bordes, estados de guardado y un reproductor de música. El reloj corre… ¿Puedes sobrevivir?',
      "modes": [
        {
          title: "POR FIN",
          text: "El clásico de terror de supervivencia, Clock Tower, se tradujo oficialmente y sale por primera vez de Japón."
        },
        {
          title: "ELIGE",
          text: "Elige entre el modo original o el mejorado, que incluye varias incorporaciones a la jugabilidad y mejoras de calidad de vida."
        },
        {
          title: "INCLUYE",
          text: "Nueva presentación animada, cinemáticas de cómic animadas y canciones temáticas vocales interpretadas por Mary Elizabeth McGlynn. Incluye una galería de arte, un reproductor de música, entrevistas con los creadores y detrás de escena, estados de guardado y otras modernas incorporaciones."
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_clock-tower-rewind_01.webp",
        url1920: "/1920w_1080h_clock-tower-rewind_01.webp"
      },
      {
        url640: "/640w_360h_clock-tower-rewind_02.webp",
        url1920: "/1920w_1080h_clock-tower-rewind_02.webp"
      },
    ],
    "techInfos": {
      "platform": "Xbox Series",
      "maker": "Limited Run",
      "imported": true,
      "genres": [
        "Aventura",
        "Indie"
      ],
      "textLanguages": [
        "Español"
      ],
      "region": "EEUU",
      "pegi": "7+"
    }
  },
]

const nintendoSwitchGames = [
  {
    "productId": "100005",
    "title": "The Messenger",
    "imageUrl": "/374w_480h_the-messenger-switch-portada.webp",
    "price": 26.95,
    "path": "/producto/the-messenger-switch-estandar/100005",
    "platformEdition": "Estándar",
    "textPrevPrice": "Por solo",
    "publisher": "Devolver Digital",
    "description": {
      "main": "Mientras un ejército demoníaco asedia su aldea, un joven ninja se adentra en un mundo maldito para llevar un pergamino crucial para la supervivencia de su clan. Lo que empieza como un clásico juego de acción y plataformas no tarda en convertirse en una extensa aventura de viajes en el tiempo llena de emoción, sorpresas y humor.",
      "modes": [
        {
          title: "¡Incluye el DLC Picnic Panic!",
          text: "¡La épica historia de The Messenger continúa en un DLC vacacional lleno de acción tropical! En la Isla de los Vuduitos, el demonio Barma'thazël ha capturado a unas criaturillas indefensas para usarlas en sus rituales oscuros. ¡Solo el heroico Mensajero puede salvarlas en una aventura que combina vacaciones y misión de rescate!"
        },
        {
          title: "The Messenger (juego base)+",
          text: "Banda sonora original del reconocido compositor de chiptune Rainbowdragoneyes, creada a mano usando Famitracker. Sprites, animaciones y fondos de 8 y 16 bits diseñados meticulosamente, con el espíritu de los clásicos."
        }
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_the-messenger_01.webp",
        url1920: "/1920w_1080h_the-messenger_01.webp"
      },
      {
        url640: "/640w_360h_the-messenger_02.webp",
        url1920: "/1920w_1080h_the-messenger_02.webp"
      },
    ],
    "techInfos": {
      "platform": "Switch",
      "maker": "Devolver Digital",
      "franchise": "The Messenger",
      "genres": [
        "Arcade",
        "Acción",
        "Aventura",
      ],
      "developer": "Sabotage",
      "textLanguages": ["Español"],
      "region": "ESP",
      "pegi": "16+"
    }
  },

  {
    "productId": "100015",
    "title": "Spellcaster University",
    "imageUrl": "/374w_480h_spellcaster-university-switch-portada.webp",
    "price": 32.95,
    "path": "/producto/spellcaster-university-switch/100015",
    "platformEdition": "",
    "textPrevPrice": "Por solo",
    "publisher": "Red Art Games",
    "description": {
      "main": "En Spellcaster University tendrás la oportunidad de dirigir una escuela de magia en un pintoresco mundo de fantasía heroica. Constrúyela a tu gusto, ocúpate de las finanzas, contrata profesores… ¿Quieres convertirla en una academia de magia negra que acoja a los mayores eruditos en nigromancia y demonología? ¿O en un lugar en armonía con la naturaleza que sea un vivero de druidas y chamanes? O también podrías entrenar magos aventureros, duchos en el arte del sigilo y el combate cuerpo a cuerpo. Eso sí, tendrás que sobrevivir a los despiadados ataques de las tribus de orcos y al férreo control de las autoridades académicas.",
      "modes": [
        {
          title: "CONSTRUYE",
          text: "Construye tu escuela mediante un sistema original basado en mazos de cartas. No habrá dos partidas iguales."
        },
        {
          title: "MAZOS DIFERENTES",
          text: "Accede a los diferentes mazos en función de la magia que se enseñe en tu escuela. Toma decisiones y aprovecha las oportunidades para crear una escuela única en el mundo."
        },
        {
          title: "EXPLORA",
          text: "Explora el mazo arcano para obtener artefactos de extraños poderes y salas que desafían la realidad."
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_spellcaster-university_01.webp",
        url1920: "/1920w_1080h_spellcaster-university_01.webp"
      },
      {
        url640: "/640w_360h_spellcaster-university_02.webp",
        url1920: "/1920w_1080h_spellcaster-university_02.webp"
      },
    ],
    "techInfos": {
      "platform": "Switch",
      "maker": "Red Art Games",
      "genres": [
        "Simulación",
        "Estrategia",
      ],
      "region": "ESP",
      "pegi": "7+"
    }
  },

  {
    "productId": "100019",
    "title": "Persona 5 Royal",
    "imageUrl": "/374w_480h_persona-5-royal-switch-portada.webp",
    "price": 56.95,
    "offerPrice": 49.99,
    "path": "/producto/persona-5-royal-switch-estandar/100019",
    "platformEdition": "Estándar",
    "textPrevPrice": "Por solo",
    "publisher": "Sega, Atlus",
    "description": {
      "main": 'Prepárate para la premiada experiencia RPG en esta edición definitiva de Persona 5 Royal, ¡con un tesoro de contenidos descargables incluido! Tras verse obligado a cambiarse a otro instituto en Tokio, el protagonista tiene un extraño sueño. "Eres, sin lugar a dudas, prisionero del destino. La perdición te aguarda en el futuro". Con el objetivo de su "rehabilitación" en mente, deberá ponerse la máscara de un Ladrón Fantasma para salvar el mundo de sus distorsionados deseos',
      "modes": [
        {
          title: "EXPLORA",
          text: "Explorar Tokio, desbloquear Personas, personalizar tu propia Guarida de los Ladrones, vivir finales alternativos y mucho más. "
        },
        {
          title: "DESAFIA",
          text: "Conviértete en el Ladrón Fantasma definitivo y desafía las convenciones, descubre el poder que llevas dentro y lucha por la justicia en la versión definitiva de Personal 5 Royal."
        },
        {
          title: "INCLUYE",
          text: "Más de 40 objetos de contenido descargable lanzado anteriormente "
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_persona-5-royal_01.webp",
        url1920: "/1920w_1080h_persona-5-royal_01.webp"
      },
      {
        url640: "/640w_360h_persona-5-royal_02.webp",
        url1920: "/1920w_1080h_persona-5-royal_02.webp"
      },
      {
        url640: "/640w_360h_persona-5-royal_03.webp",
        url1920: "/1920w_1080h_persona-5-royal_03.webp"
      },
    ],
    "techInfos": {
      "platform": "Switch",
      "maker": "Sega",
      "franchise": "Persona",
      "developer": "Atlus",
      "genres": [
        "Aventura",
        "Rol/RPG",
        "Manga"
      ],
      "textLanguages": [
        "Español"
      ],
      "voiceLanguages": [
        "Japonés",
        "Inglés"
      ],
      "region": "ESP",
      "pegi": "16+"
    }
  },

  {
    "productId": "100022",
    "title": "The Eternal Life of Goldman",
    "imageUrl": "/374w_480h_the-eternal-life-of-goldman-switch-portada.webp",
    "price": 29.99,
    "path": "/producto/the-eternal-life-of-goldman-switch-estandar/100022",
    "platformEdition": "Estándar",
    "textPrevPrice": "Por solo",
    "publisher": "Nighthawk Interactive",
    "description": {
      "main": 'Un cuento que engaña… The Eternal Life of Goldman narra una aventura dinámica y al mismo tiempo oscura que entrelaza leyendas, cuentos de hadas y mitos. Aborda el género desde una perspectiva poco habitual y ofrece sorpresas a cada paso. Llegarás al archipiélago con una extraña misión: matar a la deidad, la criatura mística de la que todo el mu.ndo habla pero que nadie ha visto. Para dar con ella, deberás adentrarte en los innumerables secretos que guardan estas islas. Descubrirás un lugar marcado por la tragedia y repleto de personajes excéntricos y contrastes alucinantes',
      "modes": [
        {
          title: "",
          text: "1. Vive una aventura dinámica y al mismo tiempo oscura, dibujada por completo a mano y animada fotograma a fotograma con técnicas clásicas."
        },
        {
          title: "",
          text: "2. Ahonda en los secretos del archipiélago para encontrar a la misteriosa deidad y derrotarla."
        },
        {
          title: "",
          text: "3. Mejora tu bastón con piezas nuevas, desbloquea habilidades, explora secretos ocultos y enfréntate a criaturas increíbles!"
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_the-eternal-life-of-goldman_01.webp",
        url1920: "/1920w_1080h_the-eternal-life-of-goldman_01.webp"
      },
      {
        url640: "/640w_360h_the-eternal-life-of-goldman_02.webp",
        url1920: "/1920w_1080h_the-eternal-life-of-goldman_02.webp"
      },
    ],
    "techInfos": {
      "platform": "Switch",
      "maker": "THQ Nordic",
      "franchise": "The Eternal Life of Goldman",
      "developer": "Weappy",
      "genres": [
        "Aventura",
        "Plataformas",
      ],
      "textLanguages": [
        "Español"
      ],
      "region": "ESP",
      "pegi": "12+"
    }
  },

  {
    "productId": "100025",
    "title": "Clock Tower Rewind",
    "imageUrl": "/374w_480h_clock-tower-rewind-switch-eeuu-portada.webp",
    "price": 56.95,
    "path": "/producto/clock-tower-rewind-switch-estandar-eeuu/100025",
    "platformEdition": "Estándar - EEUU",
    "textPrevPrice": "Por solo",
    "description": {
      "main": 'Vuelve atrás en el tiempo con uno de los pioneros del género del terror de supervivencia. Traducido y lanzado por primera vez fuera de Japón, Clock Tower: Rebobinado es el resurgimiento del terrorífico clásico de 16 bits que te desafía a explorar los inquietantes confines de la mansión de la familia Barrows. Tomas el rol de la huérfana adolescente Jennifer, y debes explorar cada rincón perturbador para encontrar objetos, revelar secretos y descubrir distintas formas de evadir al Hombretijera, un psicópata e imparable asesino que usa cizallas. Prueba el modo original para experimentar Clock Tower al igual que cuando fue lanzado por primera vez en 1995 o juega en el modo mejorado que incluye contenido adicional y mejoras. Las funciones adicionales incluyen una nueva presentación animada, canciones temáticas vocales de apertura y cierre, cinemáticas de cómic animadas, entrevista con los creadores, galería de arte, arte en los bordes, estados de guardado y un reproductor de música. El reloj corre… ¿Puedes sobrevivir?',
      "modes": [
        {
          title: "POR FIN",
          text: "El clásico de terror de supervivencia, Clock Tower, se tradujo oficialmente y sale por primera vez de Japón."
        },
        {
          title: "ELIGE",
          text: "Elige entre el modo original o el mejorado, que incluye varias incorporaciones a la jugabilidad y mejoras de calidad de vida."
        },
        {
          title: "INCLUYE",
          text: "Nueva presentación animada, cinemáticas de cómic animadas y canciones temáticas vocales interpretadas por Mary Elizabeth McGlynn. Incluye una galería de arte, un reproductor de música, entrevistas con los creadores y detrás de escena, estados de guardado y otras modernas incorporaciones."
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_clock-tower-rewind_01.webp",
        url1920: "/1920w_1080h_clock-tower-rewind_01.webp"
      },
      {
        url640: "/640w_360h_clock-tower-rewind_02.webp",
        url1920: "/1920w_1080h_clock-tower-rewind_02.webp"
      },
    ],
    "techInfos": {
      "platform": "Switch",
      "maker": "Limited Run",
      "imported": true,
      "genres": [
        "Aventura",
        "Indie"
      ],
      "textLanguages": [
        "Español"
      ],
      "region": "EEUU",
      "pegi": "7+"
    }
  },

  {
    "productId": "100029",
    "title": "Life is Strange True Colors (Código de descarga)",
    "imageUrl": "/374w_480h_life-is-strange-true-colors-codigo-de-descarga-switch-portada.webp",
    "price": 56.95,
    "offerPrice": 38.99,
    "path": "/producto/life-is-strange-true-colors-codigo-de-descarga-switch-estandar-codigo-descarga/100029",
    "platformEdition": "Estándar - Código de descarga",
    "textPrevPrice": "Por solo",
    "news": true,
    "publisher": "Square Enix",
    "description": {
      "main": '¡Comienza una nueva etapa en la premiada serie Life is Strange con una nueva protagonista y un emocionante misterio por resolver!',
      "modes": [
        {
          title: "",
          text: "Alex Chen siempre ha ocultado su maldición: una habilidad sobrenatural para sentir, absorber y manipular los sentimientos intensos de los demás, que percibe como auras de colores."
        },
        {
          title: "",
          text: "Tras la muerte de su hermano, supuestamente accidental, Alex debe aprender a controlar su poder para descubrir la verdad y los oscuros secretos que oculta un pueblo pequeño."
        },
        {
          title: "LA VERDAD DOLERÁ",
          text: "Descubre los impactantes secretos que rodean la muerte de tu hermano en una aventura cargada de emociones."
        },
        {
          title: "SIÉNTELO TODO",
          text: "Cambia el destino y cambia vidas con el poder de la empatía."
        },
        {
          title: "ENCUENTRA LA FORMA DE EXPRESARTE",
          text: "Y elige el estilo de Alex a partir de los 24 atuendos del armario."
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_life-is-strange-true-colors_01.webp",
        url1920: "/1920w_1080h_life-is-strange-true-colors_01.webp"
      },
      {
        url640: "/640w_360h_life-is-strange-true-colors_02.webp",
        url1920: "/1920w_1080h_life-is-strange-true-colors_02.webp"
      },
    ],
    "techInfos": {
      "platform": "Switch",
      "maker": "Square Enix",
      "franchise": "Life Is Strange",
      "developer": "DONTNOD Entertainment",
      "genres": [
        "Acción",
        "Aventura",
      ],
      "region": "ESP",
      "pegi": "18+"
    }
  },
]

const pcGames = [
  {
    "productId": "100012",
    "title": "Elden Ring: Nightreign Collector Edition",
    "imageUrl": "/374w_480h_elden-ring-nightreign-collector-edition-pc-portada.webp",
    "price": 209.99,
    "path": "/producto/elden-ring-nightreign-collector-edition-pc-coleccionista/100012",
    "platformEdition": "Coleccionista",
    "textPrevPrice": "Por solo",
    "content": {
      "title": "Esta edición incluye:",
      "text": [
        "Juego completo",
        "DLC (Disponible trás lanzamiento)",
        "Steelbook",
        "Banda Sonora Digital",
        "Estatua de Sylvestre (25cm)",
        "8 Cartas de Azotes de la Noche",
        "Libro de arte de tapa dura (40 Paginas)"
      ],
      "images": [
        {
          "url": "/elden-ring-nightreign-collector-edition-content.webp"
        }
      ]
    },
    "description": {
      "main": "Es una aventura independiente dentro del universo de ELDEN RING que se creó reimaginando el diseño central del juego para ofrecer a los jugadores una nueva experiencia de juego.",
      "modes": [
        {
          title: "ASCIENDAN JUNTOS",
          text: "Une fuerzas con otros jugadores para enfrentar la noche acechante y sus peligros en un modo cooperativo de 3 jugadores."
        },
        {
          title: "LUCHA CON HEROÍSMO",
          text: "Controla a héroes con destrezas únicas: cada uno posee sus propias habilidades y un estilo distintivo. Aunque son formidables por separado, sus habilidades crean sinergias poderosas cuando forman equipo."
        },
        {
          title: "ENFRÉNTATE A LA NOCHE",
          text: "Supera una implacable amenaza ambiental que altera el terreno entre cada sesión de juego y derrota al imponente jefe de esa noche."
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_elden-ring-nightreign_01.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_01.webp"
      },
      {
        url640: "/640w_360h_elden-ring-nightreign_02.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_02.webp"
      },
      {
        url640: "/640w_360h_elden-ring-nightreign_03.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_03.webp"
      },
    ],
    "techInfos": {
      "platform": "PC",
      "maker": "Bandai Namco",
      "franchise": "Elden Ring",
      "genres": [
        "Rol/RPG",
        "Acción",
      ],
      "developer": "From Software",
      "textLanguages": ["Español"],
      "region": "ESP",
      "pegi": "18+"
    }
  },

  {
    "productId": "100020",
    "title": "Persona 5 Royal",
    "imageUrl": "/374w_480h_persona-5-royal-pc-portada.webp",
    "price": 56.95,
    "path": "/producto/persona-5-royal-pc-estandar/100020",
    "platformEdition": "Estándar",
    "textPrevPrice": "Por solo",
    "publisher": "Sega, Atlus",
    "description": {
      "main": 'Prepárate para la premiada experiencia RPG en esta edición definitiva de Persona 5 Royal, ¡con un tesoro de contenidos descargables incluido! Tras verse obligado a cambiarse a otro instituto en Tokio, el protagonista tiene un extraño sueño. "Eres, sin lugar a dudas, prisionero del destino. La perdición te aguarda en el futuro". Con el objetivo de su "rehabilitación" en mente, deberá ponerse la máscara de un Ladrón Fantasma para salvar el mundo de sus distorsionados deseos',
      "modes": [
        {
          title: "EXPLORA",
          text: "Explorar Tokio, desbloquear Personas, personalizar tu propia Guarida de los Ladrones, vivir finales alternativos y mucho más. "
        },
        {
          title: "DESAFIA",
          text: "Conviértete en el Ladrón Fantasma definitivo y desafía las convenciones, descubre el poder que llevas dentro y lucha por la justicia en la versión definitiva de Personal 5 Royal."
        },
        {
          title: "INCLUYE",
          text: "Más de 40 objetos de contenido descargable lanzado anteriormente "
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_persona-5-royal_01.webp",
        url1920: "/1920w_1080h_persona-5-royal_01.webp"
      },
      {
        url640: "/640w_360h_persona-5-royal_02.webp",
        url1920: "/1920w_1080h_persona-5-royal_02.webp"
      },
      {
        url640: "/640w_360h_persona-5-royal_03.webp",
        url1920: "/1920w_1080h_persona-5-royal_03.webp"
      },
    ],
    "techInfos": {
      "platform": "PC",
      "maker": "Sega",
      "franchise": "Persona",
      "developer": "Atlus",
      "genres": [
        "Aventura",
        "Rol/RPG",
        "Manga"
      ],
      "textLanguages": [
        "Español"
      ],
      "voiceLanguages": [
        "Japonés",
        "Inglés"
      ],
      "region": "ESP",
      "pegi": "16+"
    }
  },

  {
    "productId": "100027",
    "title": "The Eternal Life of Goldman",
    "imageUrl": "/374w_480h_the-eternal-life-of-goldman-pc-portada.webp",
    "price": 29.99,
    "path": "/producto/the-eternal-life-of-goldman-pc-estandar/100027",
    "platformEdition": "Estándar",
    "textPrevPrice": "Por solo",
    "publisher": "Nighthawk Interactive",
    "description": {
      "main": 'Un cuento que engaña… The Eternal Life of Goldman narra una aventura dinámica y al mismo tiempo oscura que entrelaza leyendas, cuentos de hadas y mitos. Aborda el género desde una perspectiva poco habitual y ofrece sorpresas a cada paso. Llegarás al archipiélago con una extraña misión: matar a la deidad, la criatura mística de la que todo el mu.ndo habla pero que nadie ha visto. Para dar con ella, deberás adentrarte en los innumerables secretos que guardan estas islas. Descubrirás un lugar marcado por la tragedia y repleto de personajes excéntricos y contrastes alucinantes',
      "modes": [
        {
          title: "",
          text: "1. Vive una aventura dinámica y al mismo tiempo oscura, dibujada por completo a mano y animada fotograma a fotograma con técnicas clásicas."
        },
        {
          title: "",
          text: "2. Ahonda en los secretos del archipiélago para encontrar a la misteriosa deidad y derrotarla."
        },
        {
          title: "",
          text: "3. Mejora tu bastón con piezas nuevas, desbloquea habilidades, explora secretos ocultos y enfréntate a criaturas increíbles!"
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_the-eternal-life-of-goldman_01.webp",
        url1920: "/1920w_1080h_the-eternal-life-of-goldman_01.webp"
      },
      {
        url640: "/640w_360h_the-eternal-life-of-goldman_02.webp",
        url1920: "/1920w_1080h_the-eternal-life-of-goldman_02.webp"
      },
    ],
    "techInfos": {
      "platform": "PC",
      "maker": "THQ Nordic",
      "franchise": "The Eternal Life of Goldman",
      "developer": "Weappy",
      "genres": [
        "Aventura",
        "Plataformas",
      ],
      "textLanguages": [
        "Español"
      ],
      "region": "ESP",
      "pegi": "12+"
    }
  },

  {
    "productId": "100026",
    "title": "Clock Tower Rewind",
    "imageUrl": "/374w_480h_clock-tower-rewind-pc-eeuu-portada.webp",
    "price": 56.95,
    "offerPrice": 48.99,
    "path": "/producto/clock-tower-rewind-pc-estandar-eeuu/100026",
    "platformEdition": "Estándar - EEUU",
    "textPrevPrice": "Por solo",
    "description": {
      "main": 'Vuelve atrás en el tiempo con uno de los pioneros del género del terror de supervivencia. Traducido y lanzado por primera vez fuera de Japón, Clock Tower: Rebobinado es el resurgimiento del terrorífico clásico de 16 bits que te desafía a explorar los inquietantes confines de la mansión de la familia Barrows. Tomas el rol de la huérfana adolescente Jennifer, y debes explorar cada rincón perturbador para encontrar objetos, revelar secretos y descubrir distintas formas de evadir al Hombretijera, un psicópata e imparable asesino que usa cizallas. Prueba el modo original para experimentar Clock Tower al igual que cuando fue lanzado por primera vez en 1995 o juega en el modo mejorado que incluye contenido adicional y mejoras. Las funciones adicionales incluyen una nueva presentación animada, canciones temáticas vocales de apertura y cierre, cinemáticas de cómic animadas, entrevista con los creadores, galería de arte, arte en los bordes, estados de guardado y un reproductor de música. El reloj corre… ¿Puedes sobrevivir?',
      "modes": [
        {
          title: "POR FIN",
          text: "El clásico de terror de supervivencia, Clock Tower, se tradujo oficialmente y sale por primera vez de Japón."
        },
        {
          title: "ELIGE",
          text: "Elige entre el modo original o el mejorado, que incluye varias incorporaciones a la jugabilidad y mejoras de calidad de vida."
        },
        {
          title: "INCLUYE",
          text: "Nueva presentación animada, cinemáticas de cómic animadas y canciones temáticas vocales interpretadas por Mary Elizabeth McGlynn. Incluye una galería de arte, un reproductor de música, entrevistas con los creadores y detrás de escena, estados de guardado y otras modernas incorporaciones."
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_clock-tower-rewind_01.webp",
        url1920: "/1920w_1080h_clock-tower-rewind_01.webp"
      },
      {
        url640: "/640w_360h_clock-tower-rewind_02.webp",
        url1920: "/1920w_1080h_clock-tower-rewind_02.webp"
      },
    ],
    "techInfos": {
      "platform": "PC",
      "maker": "Limited Run",
      "imported": true,
      "genres": [
        "Aventura",
        "Indie"
      ],
      "textLanguages": [
        "Español"
      ],
      "region": "EEUU",
      "pegi": "7+"
    }
  },

  {
    "productId": "100028",
    "title": "Elden Ring: Nightreign",
    "imageUrl": "/374w_480h_elden-ring-nightreign-pc-portada.webp",
    "price": 209.99,
    "path": "/producto/elden-ring-nightreign-pc-estandar/100028",
    "platformEdition": "Estándar",
    "textPrevPrice": "Por solo",
    "news": true,
    "description": {
      "main": "Es una aventura independiente dentro del universo de ELDEN RING que se creó reimaginando el diseño central del juego para ofrecer a los jugadores una nueva experiencia de juego.",
      "modes": [
        {
          title: "ASCIENDAN JUNTOS",
          text: "Une fuerzas con otros jugadores para enfrentar la noche acechante y sus peligros en un modo cooperativo de 3 jugadores."
        },
        {
          title: "LUCHA CON HEROÍSMO",
          text: "Controla a héroes con destrezas únicas: cada uno posee sus propias habilidades y un estilo distintivo. Aunque son formidables por separado, sus habilidades crean sinergias poderosas cuando forman equipo."
        },
        {
          title: "ENFRÉNTATE A LA NOCHE",
          text: "Supera una implacable amenaza ambiental que altera el terreno entre cada sesión de juego y derrota al imponente jefe de esa noche."
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_elden-ring-nightreign_01.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_01.webp"
      },
      {
        url640: "/640w_360h_elden-ring-nightreign_02.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_02.webp"
      },
      {
        url640: "/640w_360h_elden-ring-nightreign_03.webp",
        url1920: "/1920w_1080h_elden-ring-nightreign_03.webp"
      },
    ],
    "techInfos": {
      "platform": "PC",
      "maker": "Bandai Namco",
      "franchise": "Elden Ring",
      "genres": [
        "Rol/RPG",
        "Acción",
      ],
      "developer": "From Software",
      "textLanguages": ["Español"],
      "region": "ESP",
      "pegi": "18+"
    }
  },


  {
    "productId": "100030",
    "title": "Life is Strange True Colors",
    "imageUrl": "/374w_480h_life-is-strange-true-colors-pc-portada.webp",
    "price": 56.95,
    "path": "/producto/life-is-strange-true-colors-pc-estandar/100030",
    "platformEdition": "Estándar",
    "textPrevPrice": "Por solo",
    "news": true,
    "publisher": "Square Enix",
    "description": {
      "main": '¡Comienza una nueva etapa en la premiada serie Life is Strange con una nueva protagonista y un emocionante misterio por resolver!',
      "modes": [
        {
          title: "",
          text: "Alex Chen siempre ha ocultado su maldición: una habilidad sobrenatural para sentir, absorber y manipular los sentimientos intensos de los demás, que percibe como auras de colores."
        },
        {
          title: "",
          text: "Tras la muerte de su hermano, supuestamente accidental, Alex debe aprender a controlar su poder para descubrir la verdad y los oscuros secretos que oculta un pueblo pequeño."
        },
        {
          title: "LA VERDAD DOLERÁ",
          text: "Descubre los impactantes secretos que rodean la muerte de tu hermano en una aventura cargada de emociones."
        },
        {
          title: "SIÉNTELO TODO",
          text: "Cambia el destino y cambia vidas con el poder de la empatía."
        },
        {
          title: "ENCUENTRA LA FORMA DE EXPRESARTE",
          text: "Y elige el estilo de Alex a partir de los 24 atuendos del armario."
        },
      ]
    },
    "screens": [
      {
        url640: "/640w_360h_life-is-strange-true-colors_01.webp",
        url1920: "/1920w_1080h_life-is-strange-true-colors_01.webp"
      },
      {
        url640: "/640w_360h_life-is-strange-true-colors_02.webp",
        url1920: "/1920w_1080h_life-is-strange-true-colors_02.webp"
      },
    ],
    "techInfos": {
      "platform": "PC",
      "maker": "Square Enix",
      "franchise": "Life Is Strange",
      "developer": "DONTNOD Entertainment",
      "genres": [
        "Acción",
        "Aventura",
      ],
      "region": "ESP",
      "pegi": "18+"
    }
  },
]

const products = [
  ...ps5Games,
  ...ps4Games,
  ...xboxSeriesGames,
  ...nintendoSwitchGames,
  ...pcGames
]


const tops = [
  { ...ps5Games[0] },
  { ...ps4Games[0] },
  { ...xboxSeriesGames[0] },
  { ...nintendoSwitchGames[0] },
  { ...pcGames[0] },
  { ...xboxSeriesGames[1] },
  { ...ps4Games[1] },
  { ...ps5Games[2] },
  { ...ps4Games[2] },
];

const offers = products.filter(product => product.offerPrice ? product : null)

const news = () => {
  const newsProducts = products.filter(product => product.news ? product : null)
  newsProducts.sort((productA, productB) => {
    if (productA.productId > productB.productId)
      return 1;
    return 0;
  })
  return newsProducts;
}

const mainBanner = [
  {
    "title": ps5Games[0].title,
    "subTitle": "!Una historia epica llega de accion y sueños!",
    "imageUrl": ps5Games[0].screens[0].url1920,
    "imageHref": ps5Games[0].path,
    "posterPricingTitle": "Desde solo",
    "posterPrincingPrice": ps5Games[0].price,
    "btnPoster": "Ver detalles"
  },

  {
    "title": ps4Games[2].title,
    "subTitle": "!Continua con Elder Ring!",
    "imageUrl": ps4Games[2].screens[0].url1920,
    "imageHref": ps4Games[2].path,
    "posterPricingTitle": "Desde solo",
    "posterPrincingPrice": ps4Games[2].price,
    "btnPoster": "Ver detalles"
  },

]

const homeGaleryImages = [
  {
    "imageUrl": "/elden-ring-nightreign-collector-edition-content.webp",
    "href": "/producto/elden-ring-nightreign-collector-edition-ps5-coleccionista/100009"
  },
  {
    "imageUrl": "/kena-bridge-of-spirits-deluxe-content.webp",
    "href": "/producto/kena-bridge-of-spirits-edicion-deluxe-ps4-deluxe/100002"
  }
]

const app = express();

app.use(cors())


app.get("/news/videogames", (request, response, next) => {
  response.json(news());

})

app.get("/news/figures", (request, response, next) => {
  response.json(news());
})

app.get("/offers/videogames", (request, response, next) => {
  response.json(offers);
})

app.get("/tops/videogames", (request, response, next) => {
  response.json(tops);
})

app.get("/playstation/5/videogames", (request, response, next) => {
  response.json(ps5Games);
})

app.get("/playstation/4/videogames", (request, response, next) => {
  response.json(ps4Games);
})

app.get("/xbox/seriesx/videogames", (request, response, next) => {
  response.json(xboxSeriesGames);
})

app.get("/pc/videogames", (request, response, next) => {
  response.json(pcGames);
})

app.get("/nitendo/switch/videogames", (request, response, next) => {
  response.json(nintendoSwitchGames);
})

app.get("/home/mainbanner", (request, response, next) => {
  response.json(mainBanner);
})

app.get("/home/galery", (request, response, next) => {
  response.json(homeGaleryImages);
})

app.get("/products/tops", (request, response, next) => {
  response.json(tops);
})

app.get("/products/:id", (request, response) => {
  if (!request.params.id) response.json();

  response.json(
    products.find(product => product.productId === request.params.id ? product : null
    ));
})

app.listen(8000, () => {
  console.log("Server up")
})
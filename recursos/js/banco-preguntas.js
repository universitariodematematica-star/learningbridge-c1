/*
==================================================
LEARNING BRIDGE C1
BANCO DE PREGUNTAS DEL SIMULADOR DE EXAMEN
==================================================

Para agregar preguntas, incorpora nuevos objetos
dentro del arreglo LEARNING_BRIDGE_QUESTION_BANK.

TIPOS DISPONIBLES:

1. multiple-choice: cuatro opciones.
2. true-false: verdadero o falso.

ESTRUCTURA DE UNA PREGUNTA:

{
    id: "q001",
    type: "multiple-choice",
    question: "Write the question here.",
    options: [
        { value: "A", text: "First option" },
        { value: "B", text: "Second option" },
        { value: "C", text: "Third option" },
        { value: "D", text: "Fourth option" }
    ],
    correctAnswer: "B"
}

PARA VERDADERO O FALSO:

{
    id: "q002",
    type: "true-false",
    question: "The statement is correct.",
    options: [
        { value: "true", text: "True" },
        { value: "false", text: "False" }
    ],
    correctAnswer: "true"
}

REGLAS:
- Cada pregunta debe tener un identificador único.
- Las preguntas de selección múltiple deben tener cuatro opciones.
- Las preguntas de verdadero o falso deben tener dos opciones.
- La respuesta correcta debe coincidir con el valor
  de una de las opciones.
- No se deben repetir identificadores.
*/

window.LEARNING_BRIDGE_QUESTION_BANK = [

    {
        id: "inf001",
        type: "multiple-choice",
        question: "¿Qué es el hardware según los apuntes?",
        options: [
            { value: "A", text: "Los programas y aplicaciones que hacen funcionar la computadora" },
            { value: "B", text: "Todo lo que puedes tocar físicamente de una computadora" },
            { value: "C", text: "Las redes de conexión a internet y Wi-Fi" },
            { value: "D", text: "Los sitios web de consulta académica" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf002",
        type: "multiple-choice",
        question: "¿Cuál de las siguientes opciones es un ejemplo de hardware?",
        options: [
            { value: "A", text: "Google Chrome" },
            { value: "B", text: "WhatsApp" },
            { value: "C", text: "El teclado" },
            { value: "D", text: "Paint" }
        ],
        correctAnswer: "C"
    },

    {
        id: "inf003",
        type: "multiple-choice",
        question: "¿Cómo se define el software en el cuaderno?",
        options: [
            { value: "A", text: "Los programas y aplicaciones que hacen que una computadora, celular o tablet funcione" },
            { value: "B", text: "Todos los componentes físicos que se pueden tocar como el monitor" },
            { value: "C", text: "La batería y los motores de un vehículo robot" },
            { value: "D", text: "El cartón y los sorbetes de un proyecto escolar" }
        ],
        correctAnswer: "A"
    },

    {
        id: "inf004",
        type: "multiple-choice",
        question: "¿Cuáles son ejemplos de software mencionados en el documento?",
        options: [
            { value: "A", text: "Mouse, procesador e impresora" },
            { value: "B", text: "Videojuegos, WhatsApp, Google Chrome, Paint y Word" },
            { value: "C", text: "Pantalla, disco duro y teclado" },
            { value: "D", text: "Motor DC, portapilas y sensores" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf005",
        type: "multiple-choice",
        question: "¿Cuáles son las funciones principales de la computadora indicadas en los apuntes?",
        options: [
            { value: "A", text: "Escribir texto, guardar archivos y calcular números" },
            { value: "B", text: "Soldar piezas de metal y fabricar motores" },
            { value: "C", text: "Programar sensores de luz exclusivamente" },
            { value: "D", text: "Cortar cartón y ensamblar llantas de juguetes" }
        ],
        correctAnswer: "A"
    },

    {
        id: "inf006",
        type: "multiple-choice",
        question: "Dentro de la ciudadanía digital, ¿en qué consiste la pauta de \"Cuidarme\"?",
        options: [
            { value: "A", text: "Tratar bien a las personas en internet" },
            { value: "B", text: "No compartir mi contraseña" },
            { value: "C", text: "No publicar datos personales de otras personas" },
            { value: "D", text: "Mirar videos educativos únicamente" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf007",
        type: "multiple-choice",
        question: "¿Qué acción promueve el principio de \"No compartir\" en la ciudadanía digital?",
        options: [
            { value: "A", text: "No publicar datos personales" },
            { value: "B", text: "Evitar el uso de juegos en línea" },
            { value: "C", text: "No conectar la computadora a internet" },
            { value: "D", text: "No usar programas como Word o Paint" }
        ],
        correctAnswer: "A"
    },

    {
        id: "inf008",
        type: "multiple-choice",
        question: "Según la evolución de las computadoras, ¿qué característica tenían en el año 1940?",
        options: [
            { value: "A", text: "Aparecieron las primeras computadoras personales" },
            { value: "B", text: "Eran enormes y ocupaban habitaciones completas" },
            { value: "C", text: "Se volvieron más comunes en casas y escuelas" },
            { value: "D", text: "Eran pequeñas, rápidas y tenían internet" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf009",
        type: "multiple-choice",
        question: "¿En qué época o año aparecieron las primeras computadoras personales?",
        options: [
            { value: "A", text: "1940" },
            { value: "B", text: "1950 - 1960" },
            { value: "C", text: "1970" },
            { value: "D", text: "2000" }
        ],
        correctAnswer: "C"
    },

    {
        id: "inf010",
        type: "multiple-choice",
        question: "¿Qué cambio ocurrió en la evolución de las computadoras entre 1980 y 1990?",
        options: [
            { value: "A", text: "Se hicieron por primera vez más pequeñas que una habitación" },
            { value: "B", text: "Se volvieron más comunes en las casas y escuelas" },
            { value: "C", text: "Aparecieron los primeros robots aspiradores" },
            { value: "D", text: "Se empezaron a utilizar únicamente para cirugías" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf011",
        type: "multiple-choice",
        question: "¿Qué es un vehículo robot según el contenido de robótica educativa?",
        options: [
            { value: "A", text: "Un programa informático para calcular números" },
            { value: "B", text: "Un vehículo que puede desplazarse y realizar acciones de manera automática o mediante control remoto" },
            { value: "C", text: "Un motor DC conectado a una pantalla de computadora" },
            { value: "D", text: "Una computadora personal fabricada en 1970" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf012",
        type: "multiple-choice",
        question: "En un vehículo robot, ¿cuál es la función del controlador?",
        options: [
            { value: "A", text: "Mover directamente las ruedas del vehículo" },
            { value: "B", text: "Procesar la información y decidir qué acción realizar" },
            { value: "C", text: "Proporcionar la energía eléctrica al sistema" },
            { value: "D", text: "Detectar únicamente la luz del entorno" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf013",
        type: "multiple-choice",
        question: "¿Cuál es la función específica de los motores en un vehículo robot?",
        options: [
            { value: "A", text: "Detectar obstáculos a distancia" },
            { value: "B", text: "Permitir mover las ruedas" },
            { value: "C", text: "Guardar los archivos de texto" },
            { value: "D", text: "Almacenar programas de software" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf014",
        type: "multiple-choice",
        question: "¿Qué elemento proporciona la energía necesaria para que funcione el vehículo robot?",
        options: [
            { value: "A", text: "El controlador" },
            { value: "B", text: "La batería" },
            { value: "C", text: "El engranaje blanco" },
            { value: "D", text: "El sorbete pequeño" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf015",
        type: "multiple-choice",
        question: "¿En qué consiste el uso de la robótica en la industria?",
        options: [
            { value: "A", text: "Sembrar y cosechar cultivos agrícolas" },
            { value: "B", text: "Fabricar productos y ensamblar piezas" },
            { value: "C", text: "Realizar cirugías y rehabilitación médica" },
            { value: "D", text: "Investigar lugares peligrosos exclusivamente" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf016",
        type: "multiple-choice",
        question: "¿En cuáles de los siguientes ámbitos SE UTILIZA la robótica según los apuntes?",
        options: [
            { value: "A", text: "Industria, medicina, agricultura, educación, hogares y exploración" },
            { value: "B", text: "Únicamente en laboratorios de computación personal" },
            { value: "C", text: "Exclusivamente en aplicaciones de redes sociales como WhatsApp" },
            { value: "D", text: "Solamente en la fabricación de teclados y mouses" }
        ],
        correctAnswer: "A"
    },

    {
        id: "inf017",
        type: "multiple-choice",
        question: "¿Cuál es el objetivo principal del proyecto \"Mi Medio de Transporte Robot\"?",
        options: [
            { value: "A", text: "Investigar medios de transporte y principios de robótica para diseñar y construir un prototipo de transporte robot" },
            { value: "B", text: "Instalar navegadores de internet en computadoras escolares" },
            { value: "C", text: "Fabricar llantas de juguete de metal" },
            { value: "D", text: "Reparar computadoras antiguas del año 1940" }
        ],
        correctAnswer: "A"
    },

    {
        id: "inf018",
        type: "multiple-choice",
        question: "¿Cuántas y cuáles son las fases del proyecto \"Mi Medio de Transporte Robot\"?",
        options: [
            { value: "A", text: "2 fases: Planificación y Construcción" },
            { value: "B", text: "4 fases: Diseño y planificación, Creación e implementación, Producto final y Presentación de proyecto final" },
            { value: "C", text: "3 fases: Materiales, Ensamble y Pruebas" },
            { value: "D", text: "5 fases: Cartón, Silicón, Llantas, Motor y Batería" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf019",
        type: "multiple-choice",
        question: "¿Qué materiales se especifican en la Fase 1 del proyecto de prototipo de transporte robot?",
        options: [
            { value: "A", text: "2 trozos de cartón, pistola de silicón, 4 sorbetes, 4 llantas de juguete con metal, liga elástica, engranaje blanco, motor DC, portapilas, cables e interruptor" },
            { value: "B", text: "Computadora personal, disco duro, impresora y cable de internet" },
            { value: "C", text: "Pantalla táctil, procesador, mouse y WhatsApp" },
            { value: "D", text: "10 motores industriales, batería de automóvil y láminas de acero" }
        ],
        correctAnswer: "A"
    },

    {
        id: "inf020",
        type: "multiple-choice",
        question: "Según el procedimiento de construcción del prototipo, ¿qué forma se les da a los cartones en el paso 1?",
        options: [
            { value: "A", text: "Forma de vehículo deportivo" },
            { value: "B", text: "Forma de casa" },
            { value: "C", text: "Forma de círculo perfecto" },
            { value: "D", text: "Forma de rectángulo sin recortes" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf021",
        type: "multiple-choice",
        question: "¿Cuáles de los siguientes elementos son ejemplos explícitos de hardware en el cuaderno?",
        options: [
            { value: "A", text: "WhatsApp, Paint, Word y Google Chrome" },
            { value: "B", text: "El teclado, el mouse, la pantalla, el procesador, el disco duro y la impresora" },
            { value: "C", text: "Videojuegos y aplicaciones de redes sociales" },
            { value: "D", text: "La liga elástica y los sorbetes de jugo" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf022",
        type: "multiple-choice",
        question: "De acuerdo con los apuntes, ¿cuáles son los usos principales de la computadora?",
        options: [
            { value: "A", text: "Fabricar piezas metálicas e imprimir en 3D" },
            { value: "B", text: "Estudiar, jugar, crear y comunicar" },
            { value: "C", text: "Programar únicamente sensores de luz" },
            { value: "D", text: "Cortar cartón y ensamblar llantas" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf023",
        type: "multiple-choice",
        question: "¿Para qué actividades se utiliza internet según lo señalado en el documento?",
        options: [
            { value: "A", text: "Para conectar un motor DC a una batería" },
            { value: "B", text: "Para estudiar (buscar información), jugar (juegos en línea) y ver (mirar videos educativos)" },
            { value: "C", text: "Para controlar computadoras gigantes de 1940" },
            { value: "D", text: "Para recortar cartones sobrantes" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf024",
        type: "multiple-choice",
        question: "En el ámbito de la ciudadanía digital, ¿en qué consiste la pauta de \"Respetar\"?",
        options: [
            { value: "A", text: "No publicar fotografías en redes sociales" },
            { value: "B", text: "No compartir las contraseñas con compañeros" },
            { value: "C", text: "Tratar bien a las personas" },
            { value: "D", text: "Instalar programas antivirus en la computadora" }
        ],
        correctAnswer: "C"
    },

    {
        id: "inf025",
        type: "multiple-choice",
        question: "Según la tabla sobre la evolución de las computadoras, ¿qué ocurrió entre 1950 y 1960?",
        options: [
            { value: "A", text: "Aparecieron los teléfonos inteligentes con internet" },
            { value: "B", text: "Se hicieron un poco más pequeñas y rápidas" },
            { value: "C", text: "Ocupaban habitaciones completas" },
            { value: "D", text: "Se hicieron muy comunes en casas y escuelas" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf026",
        type: "multiple-choice",
        question: "¿Qué característica principal destacó en las computadoras en el año 2000?",
        options: [
            { value: "A", text: "Eran gigantescas y requerían habitaciones enteras" },
            { value: "B", text: "Fueron más rápidas y tenían internet" },
            { value: "C", text: "Carecían de pantallas y teclados" },
            { value: "D", text: "Aparecieron las primeras computadoras personales" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf027",
        type: "multiple-choice",
        question: "¿Cómo son las computadoras en la actualidad (año 2026) y para qué se usan?",
        options: [
            { value: "A", text: "Solo se usan para videojuegos y mirar películas" },
            { value: "B", text: "Son pequeñas, rápidas y las usamos para estudiar, jugar, trabajar y comunicarnos" },
            { value: "C", text: "Necesitan sorbetes y un motor DC para encender" },
            { value: "D", text: "Funcionan únicamente mediante un control remoto" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf028",
        type: "multiple-choice",
        question: "¿Por qué le gusta al estudiante la robótica educativa según sus apuntes?",
        options: [
            { value: "A", text: "Porque le permite reparar computadoras de 1970" },
            { value: "B", text: "Porque puede aprender mientras construye y programa robots, usando su imaginación para crear diferentes cosas" },
            { value: "C", text: "Porque reemplaza el uso de hardware y software" },
            { value: "D", text: "Porque enseña a fabricar monitores e impresoras" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf029",
        type: "multiple-choice",
        question: "¿Qué aspectos debe pensar el estudiante al momento de construir un robot?",
        options: [
            { value: "A", text: "Cuántas horas debe estar conectado a internet" },
            { value: "B", text: "Cómo hacer que funcione, qué piezas necesita y cómo programarlo para que haga lo que quiere" },
            { value: "C", text: "Cómo cambiar la contraseña de su correo electrónico" },
            { value: "D", text: "De qué color pintar el procesador" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf030",
        type: "multiple-choice",
        question: "¿Cuáles son los tres movimientos automáticos que puede realizar un vehículo robot?",
        options: [
            { value: "A", text: "Volar, flotar y sumergirse" },
            { value: "B", text: "Avanzar, retroceder y girar" },
            { value: "C", text: "Saltar, correr y escalar" },
            { value: "D", text: "Vibrar, emitir sonidos y encender luces" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf031",
        type: "multiple-choice",
        question: "¿Qué función cumplen los sensores en un vehículo robot?",
        options: [
            { value: "A", text: "Suministrar la energía eléctrica al circuito" },
            { value: "B", text: "Detectar obstáculos, distancia, luz u otros elementos" },
            { value: "C", text: "Permitir mover las ruedas en distintas direcciones" },
            { value: "D", text: "Almacenar archivos creados en Paint y Word" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf032",
        type: "multiple-choice",
        question: "¿En qué consiste la característica de \"Autonomía\" en los vehículos robot?",
        options: [
            { value: "A", text: "Funcionan sin necesidad de motores ni baterías" },
            { value: "B", text: "Algunos pueden desplazarse sin que una persona los controle directamente" },
            { value: "C", text: "Se conectan a internet para actualizar software" },
            { value: "D", text: "Requieren siempre el uso de teclado y mouse" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf033",
        type: "multiple-choice",
        question: "¿Cuál es el propósito general de la robótica según el texto?",
        options: [
            { value: "A", text: "Sustituir todos los libros por computadoras" },
            { value: "B", text: "Crear y utilizar robots que realizan tareas de manera automática o ayudan a las personas con mayor rapidez, precisión y seguridad" },
            { value: "C", text: "Diseñar únicamente videojuegos para tablets" },
            { value: "D", text: "Enseñar navegación por páginas web de compras" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf034",
        type: "multiple-choice",
        question: "¿Para qué se utiliza la robótica en el campo de la medicina?",
        options: [
            { value: "A", text: "Para fabricar llantas de vehículos de juguete" },
            { value: "B", text: "En cirugías y rehabilitación" },
            { value: "C", text: "Para sembrar y cosechar cultivos agrícolas" },
            { value: "D", text: "En robots aspiradores de uso doméstico" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf035",
        type: "multiple-choice",
        question: "¿En qué tareas se aplica la robótica dentro de la agricultura?",
        options: [
            { value: "A", text: "Para investigar lugares peligrosos o inaccesibles" },
            { value: "B", text: "Para sembrar, cosechar y controlar cultivos" },
            { value: "C", text: "Para aprender programación escolar" },
            { value: "D", text: "Para ensamblar piezas plásticas industriales" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf036",
        type: "multiple-choice",
        question: "¿Cómo se utiliza la robótica en los hogares según los apuntes?",
        options: [
            { value: "A", text: "En la fabricación de computadoras personales" },
            { value: "B", text: "En robots aspiradores y otros dispositivos" },
            { value: "C", text: "En la realización de intervenciones quirúrgicas" },
            { value: "D", text: "En el control automático de cultivos" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf037",
        type: "multiple-choice",
        question: "¿En qué consiste el uso de la robótica en la exploración?",
        options: [
            { value: "A", text: "En crear dibujos y presentaciones digitales" },
            { value: "B", text: "En investigar lugares peligrosos o difíciles de alcanzar" },
            { value: "C", text: "En instalar aplicaciones como WhatsApp y Chrome" },
            { value: "D", text: "En guardar contraseñas de redes sociales" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf038",
        type: "multiple-choice",
        question: "¿Cuál es el título del video de YouTube y su canal de referencia citados en la Fase 1 del proyecto?",
        options: [
            { value: "A", text: "\"Robots Industriales\" del canal TechWorld" },
            { value: "B", text: "\"Built a Working Racer From Recycled Cardboard\" del canal Hanecraft Builder" },
            { value: "C", text: "\"Evolución de las computadoras\" del canal EducaBot" },
            { value: "D", text: "\"Programando motores DC\" del canal Robótica Fácil" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf039",
        type: "multiple-choice",
        question: "¿Qué tipo de sorbetes y engranaje se piden en la lista de materiales del proyecto?",
        options: [
            { value: "A", text: "2 sorbetes grandes y 1 engranaje metálico negro" },
            { value: "B", text: "4 sorbetes pequeños y 1 engranaje pequeño blanco" },
            { value: "C", text: "6 sorbetes rígidos y 1 engranaje rojo" },
            { value: "D", text: "4 sorbetes flexibles y 1 engranaje de aluminio" }
        ],
        correctAnswer: "B"
    },

    {
        id: "inf040",
        type: "multiple-choice",
        question: "Según el procedimiento de construcción, ¿qué se pega y coloca sobre los cartones en los pasos 2 a 6?",
        options: [
            { value: "A", text: "Se pegan con cinta transparente y se instalan 2 motores de energía solar" },
            { value: "B", text: "Se pegan los 2 cartones con silicón, se pegan 2 sorbetes de jugo, se colocan 4 llantas con su metal, una liga elástica y un engranaje en el medio, y el motor DC" },
            { value: "C", text: "Se instalan 4 impresoras, un procesador y cables de red" },
            { value: "D", text: "Se colocan únicamente los sorbetes sin usar silicón ni cartón" }
        ],
        correctAnswer: "B"
    }

,
{
        "id":  "inf041",
        "explanation":  "El hardware es la parte física y tangible de la computadora, como el teclado, el mouse y la pantalla.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "El hardware es todo lo que puedes tocar físicamente de una computadora."
    },
    {
        "id":  "inf042",
        "explanation":  "Google Chrome y WhatsApp son programas y aplicaciones, por lo tanto, son ejemplos de software.",
        "type":  "true-false",
        "correctAnswer":  "false",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "Google Chrome y WhatsApp son ejemplos de hardware."
    },
    {
        "id":  "inf043",
        "explanation":  "El procesador y el disco duro son componentes físicos de una computadora.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "El procesador y el disco duro forman parte del hardware de una computadora."
    },
    {
        "id":  "inf044",
        "explanation":  "Los apuntes definen el software como los programas y aplicaciones que permiten funcionar a estos dispositivos.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "El software incluye los programas y aplicaciones que hacen que una computadora, celular o tablet funcione."
    },
    {
        "id":  "inf045",
        "explanation":  "Paint y Word son programas informáticos, es decir, software. No son elementos físicos.",
        "type":  "true-false",
        "correctAnswer":  "false",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "Paint y Word son componentes físicos que se pueden tocar."
    },
    {
        "id":  "inf046",
        "explanation":  "La categoría Crear consiste en dibujar y hacer presentaciones. Jugar videojuegos corresponde a la categoría Jugar.",
        "type":  "true-false",
        "correctAnswer":  "false",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "Según el cuaderno, la función de \"Crear\" en la computadora se refiere únicamente a jugar videojuegos."
    },
    {
        "id":  "inf047",
        "explanation":  "Los apuntes clasifican hablar con amigos por internet dentro del uso Comunicar.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "Hablar con amigos por internet corresponde al uso de \"Comunicar\" en la computadora."
    },
    {
        "id":  "inf048",
        "explanation":  "Esas son las tres funciones enumeradas en la sección de funciones de la computadora.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "Las tres funciones principales de la computadora mencionadas son escribir texto, guardar archivos y calcular números."
    },
    {
        "id":  "inf049",
        "explanation":  "La categoría Ver se refiere específicamente a mirar videos educativos.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "El uso de internet clasificado como \"Ver\" consiste en mirar videos educativos."
    },
    {
        "id":  "inf050",
        "explanation":  "Buscar información para una tarea corresponde a la categoría Estudiar, no a Jugar.",
        "type":  "true-false",
        "correctAnswer":  "false",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "Buscar información para una tarea es un uso de internet clasificado dentro de la categoría \"Jugar\"."
    },
    {
        "id":  "inf051",
        "explanation":  "La pauta Cuidarme establece expresamente que no se debe compartir la contraseña.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "La pauta de ciudadanía digital \"Cuidarme\" indica que no debes compartir tu contraseña."
    },
    {
        "id":  "inf052",
        "explanation":  "Respetar significa tratar bien a las personas. No publicar datos personales corresponde a No compartir.",
        "type":  "true-false",
        "correctAnswer":  "false",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "La regla de ciudadanía digital \"Respetar\" significa publicar todos los datos de tus amigos."
    },
    {
        "id":  "inf053",
        "explanation":  "La pauta No compartir indica que no se deben publicar datos personales.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "El principio de \"No compartir\" en ciudadanía digital promueve no publicar datos personales."
    },
    {
        "id":  "inf054",
        "explanation":  "En 1940 las computadoras eran enormes y ocupaban habitaciones completas.",
        "type":  "true-false",
        "correctAnswer":  "false",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "En el año 1940, las computadoras eran pequeñas y portátiles."
    },
    {
        "id":  "inf055",
        "explanation":  "La tabla de evolución registra que durante ese período se hicieron un poco más pequeñas y rápidas.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "Entre 1950 y 1960, las computadoras se hicieron un poco más pequeñas y rápidas."
    },
    {
        "id":  "inf056",
        "explanation":  "Los apuntes sitúan la aparición de las primeras computadoras personales en la década de 1970.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "Las primeras computadoras personales aparecieron en la década de 1970."
    },
    {
        "id":  "inf057",
        "explanation":  "Ese es el cambio principal registrado para el período 1980-1990.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "Entre 1980 y 1990, las computadoras se volvieron más comunes en casas y escuelas."
    },
    {
        "id":  "inf058",
        "explanation":  "Los apuntes indican que en el año 2000 las computadoras eran más rápidas y tenían internet.",
        "type":  "true-false",
        "correctAnswer":  "false",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "En el año 2000, las computadoras no contaban con acceso a internet."
    },
    {
        "id":  "inf059",
        "explanation":  "Esa es la descripción de las computadoras actuales que aparece en la tabla de evolución.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "En el año 2026, las computadoras son pequeñas, rápidas y se usan para estudiar, jugar, trabajar y comunicarse."
    },
    {
        "id":  "inf060",
        "explanation":  "La robótica educativa permite aprender construyendo y programando robots y utilizando la imaginación.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "La robótica educativa permite aprender mientras se construyen y programan robots usando la imaginación."
    },
    {
        "id":  "inf061",
        "explanation":  "Es necesario pensar cómo hacer que funcione, qué piezas se necesitan y cómo programarlo.",
        "type":  "true-false",
        "correctAnswer":  "false",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "Al construir un robot, no es necesario pensar en las piezas ni en cómo programarlo."
    },
    {
        "id":  "inf062",
        "explanation":  "Un vehículo robot puede desplazarse de manera automática o mediante control remoto.",
        "type":  "true-false",
        "correctAnswer":  "false",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "Un vehículo robot solo puede desplazarse mediante control remoto, sin posibilidad de movimiento automático."
    },
    {
        "id":  "inf063",
        "explanation":  "Avanzar, retroceder y girar son los tres movimientos automáticos descritos en los apuntes.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "El movimiento automático de un vehículo robot le permite avanzar, retroceder y girar."
    },
    {
        "id":  "inf064",
        "explanation":  "Los sensores detectan obstáculos, distancia y luz. La batería proporciona la energía eléctrica.",
        "type":  "true-false",
        "correctAnswer":  "false",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "Los sensores en un vehículo robot se encargan de suministrar la energía eléctrica al sistema."
    },
    {
        "id":  "inf065",
        "explanation":  "El controlador procesa la información recibida y determina qué acción debe realizar el vehículo.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "El controlador es el componente que procesa la información y decide qué acción realizar."
    },
    {
        "id":  "inf066",
        "explanation":  "Los motores permiten mover las ruedas. No tienen como función almacenar instrucciones.",
        "type":  "true-false",
        "correctAnswer":  "false",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "Los motores en un vehículo robot sirven para almacenar las instrucciones de programación."
    },
    {
        "id":  "inf067",
        "explanation":  "La batería suministra la energía necesaria para el funcionamiento del vehículo robot.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "La batería proporciona la energía necesaria para que el vehículo robot funcione."
    },
    {
        "id":  "inf068",
        "explanation":  "La programación establece las instrucciones que el vehículo robot debe seguir para realizar tareas.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "La programación permite al vehículo robot seguir instrucciones para realizar diferentes tareas."
    },
    {
        "id":  "inf069",
        "explanation":  "La autonomía significa que algunos vehículos robot pueden desplazarse sin que una persona los controle directamente.",
        "type":  "true-false",
        "correctAnswer":  "false",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "La autonomía significa que todos los vehículos robot requieren siempre que una persona los controle directamente."
    },
    {
        "id":  "inf070",
        "explanation":  "La robótica ayuda a realizar tareas con mayor rapidez, precisión y seguridad.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "La robótica permite realizar trabajos con mayor rapidez, precisión y seguridad."
    },
    {
        "id":  "inf071",
        "explanation":  "En la industria se utiliza para fabricar productos y ensamblar piezas. Las cirugías y la rehabilitación corresponden a la medicina.",
        "type":  "true-false",
        "correctAnswer":  "false",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "En la industria, la robótica se utiliza principalmente para cirugías y rehabilitación."
    },
    {
        "id":  "inf072",
        "explanation":  "La robótica agrícola permite sembrar, cosechar y controlar cultivos.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "En la agricultura, la robótica se aplica para sembrar, cosechar y controlar cultivos."
    },
    {
        "id":  "inf073",
        "explanation":  "En educación, la robótica se utiliza para aprender programación y tecnología.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "La robótica en el ámbito educativo sirve para aprender programación y tecnología."
    },
    {
        "id":  "inf074",
        "explanation":  "Los robots aspiradores son un ejemplo de aplicación de la robótica en los hogares.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "En los hogares, la robótica se utiliza en dispositivos como robots aspiradores."
    },
    {
        "id":  "inf075",
        "explanation":  "La robótica de exploración permite investigar lugares peligrosos o de difícil acceso.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "La robótica de exploración se usa para investigar lugares peligrosos o difíciles de alcanzar."
    },
    {
        "id":  "inf076",
        "explanation":  "Estas son las cuatro habilidades clave descritas en el objetivo del proyecto.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "El objetivo del proyecto busca desarrollar la creatividad, el pensamiento lógico, la resolución de problemas y el trabajo colaborativo."
    },
    {
        "id":  "inf077",
        "explanation":  "El proyecto consta de cuatro fases: diseño y planificación, creación e implementación, producto final y presentación del proyecto final.",
        "type":  "true-false",
        "correctAnswer":  "false",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "El proyecto consta de únicamente 2 fases."
    },
    {
        "id":  "inf078",
        "explanation":  "Hanecraft Builder figura como el canal del video \"Built a Working Racer From Recycled Cardboard\".",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "El canal de YouTube de referencia en la Fase 1 es \"Hanecraft Builder\"."
    },
    {
        "id":  "inf079",
        "explanation":  "Los cuatro sorbetes pequeños, las cuatro llantas, el engranaje blanco y el motor DC aparecen en la lista de materiales de la Fase 1.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "Entre los materiales del proyecto figuran 4 sorbetes pequeños, 4 llantas de carros de juguete, un engranaje blanco y un motor DC."
    },
    {
        "id":  "inf080",
        "explanation":  "El procedimiento indica recortar los cartones en forma de casa y guardar los trozos sobrantes.",
        "type":  "true-false",
        "correctAnswer":  "true",
        "options":  [
                        {
                            "text":  "Verdadero",
                            "value":  "true"
                        },
                        {
                            "text":  "Falso",
                            "value":  "false"
                        }
                    ],
        "question":  "En el paso 1 del procedimiento, los cartones se cortan en forma de casa y se deben guardar los trozos sobrantes."
    }
,
{
        id: "inf081", type: "multiple-choice",
        question: "Es todo lo que puedes tocar físicamente de una computadora, como el teclado, el mouse y la pantalla.",
        options: [{value:"A",text:"Software"},{value:"B",text:"Hardware"},{value:"C",text:"Ciudadanía digital"},{value:"D",text:"Robótica educativa"}],
        correctAnswer: "B"
    },
    {
        id: "inf082", type: "multiple-choice",
        question: "Son los programas y aplicaciones que hacen que una computadora, celular o tablet funcione.",
        options: [{value:"A",text:"Hardware"},{value:"B",text:"Portapilas"},{value:"C",text:"Software"},{value:"D",text:"Controlador"}],
        correctAnswer: "C"
    },
    {
        id: "inf083", type: "multiple-choice",
        question: "Componente físico que se toca y permite ingresar texto a la computadora mediante teclas.",
        options: [{value:"A",text:"El teclado"},{value:"B",text:"Word"},{value:"C",text:"Google Chrome"},{value:"D",text:"WhatsApp"}],
        correctAnswer: "A"
    },
    {
        id: "inf084", type: "multiple-choice",
        question: "Componente interno de hardware encargado de procesar la información de la computadora.",
        options: [{value:"A",text:"Paint"},{value:"B",text:"El procesador"},{value:"C",text:"El software"},{value:"D",text:"El navegador web"}],
        correctAnswer: "B"
    },
    {
        id: "inf085", type: "multiple-choice",
        question: "Componente de hardware utilizado para almacenar archivos de manera permanente en el equipo.",
        options: [{value:"A",text:"Disco duro"},{value:"B",text:"Batería"},{value:"C",text:"WhatsApp"},{value:"D",text:"Interruptor"}],
        correctAnswer: "A"
    },
    {
        id: "inf086", type: "multiple-choice",
        question: "Aplicación de mensajería citada en el cuaderno como un ejemplo de software.",
        options: [{value:"A",text:"Mouse"},{value:"B",text:"WhatsApp"},{value:"C",text:"Impresora"},{value:"D",text:"Pantalla"}],
        correctAnswer: "B"
    },
    {
        id: "inf087", type: "multiple-choice",
        question: "Programa utilizado para navegar en internet que sirve como ejemplo de software.",
        options: [{value:"A",text:"El teclado"},{value:"B",text:"Google Chrome"},{value:"C",text:"El procesador"},{value:"D",text:"Motor DC"}],
        correctAnswer: "B"
    },
    {
        id: "inf088", type: "multiple-choice",
        question: "Aplicación de dibujo mencionada entre los ejemplos de software.",
        options: [{value:"A",text:"Paint"},{value:"B",text:"Impresora"},{value:"C",text:"Disco duro"},{value:"D",text:"Pantalla"}],
        correctAnswer: "A"
    },
    {
        id: "inf089", type: "multiple-choice",
        question: "Procesador de texto citado en los apuntes como ejemplo de software.",
        options: [{value:"A",text:"Word"},{value:"B",text:"Mouse"},{value:"C",text:"Teclado"},{value:"D",text:"Sensor"}],
        correctAnswer: "A"
    },
    {
        id: "inf090", type: "multiple-choice",
        question: "Uso de la computadora definido específicamente como hacer tareas y buscar información.",
        options: [{value:"A",text:"Jugar"},{value:"B",text:"Estudiar"},{value:"C",text:"Crear"},{value:"D",text:"Comunicar"}],
        correctAnswer: "B"
    },
    {
        id: "inf091", type: "multiple-choice",
        question: "Uso de la computadora definido en los apuntes como dibujar y hacer presentaciones.",
        options: [{value:"A",text:"Comunicar"},{value:"B",text:"Estudiar"},{value:"C",text:"Crear"},{value:"D",text:"Jugar"}],
        correctAnswer: "C"
    },
    {
        id: "inf092", type: "multiple-choice",
        question: "Uso de la computadora definido en el cuaderno como hablar con amigos por internet.",
        options: [{value:"A",text:"Estudiar"},{value:"B",text:"Crear"},{value:"C",text:"Comunicar"},{value:"D",text:"Jugar"}],
        correctAnswer: "C"
    },
    {
        id: "inf093", type: "multiple-choice",
        question: "Uso de internet que se define concretamente como mirar videos educativos.",
        options: [{value:"A",text:"Estudiar"},{value:"B",text:"Ver"},{value:"C",text:"Jugar"},{value:"D",text:"Cuidarme"}],
        correctAnswer: "B"
    },
    {
        id: "inf094", type: "multiple-choice",
        question: "Uso de internet definido en los apuntes como buscar información para una tarea.",
        options: [{value:"A",text:"Estudiar"},{value:"B",text:"Ver"},{value:"C",text:"Jugar"},{value:"D",text:"Respetar"}],
        correctAnswer: "A"
    },
    {
        id: "inf095", type: "multiple-choice",
        question: "Pauta de ciudadanía digital que se resume en la indicación de no compartir mi contraseña.",
        options: [{value:"A",text:"Respetar"},{value:"B",text:"No compartir"},{value:"C",text:"Cuidarme"},{value:"D",text:"Autonomía"}],
        correctAnswer: "C"
    },
    {
        id: "inf096", type: "multiple-choice",
        question: "Pauta de ciudadanía digital definida con la regla de tratar bien a las personas.",
        options: [{value:"A",text:"Cuidarme"},{value:"B",text:"Respetar"},{value:"C",text:"No compartir"},{value:"D",text:"Programación"}],
        correctAnswer: "B"
    },
    {
        id: "inf097", type: "multiple-choice",
        question: "Pauta de ciudadanía digital que se sintetiza en la indicación de no publicar datos personales.",
        options: [{value:"A",text:"Cuidarme"},{value:"B",text:"Respetar"},{value:"C",text:"No compartir"},{value:"D",text:"Educación"}],
        correctAnswer: "C"
    },
    {
        id: "inf098", type: "multiple-choice",
        question: "Época de la historia en la que las computadoras eran enormes y ocupaban habitaciones completas.",
        options: [{value:"A",text:"1950 - 1960"},{value:"B",text:"1940"},{value:"C",text:"1970"},{value:"D",text:"2000"}],
        correctAnswer: "B"
    },
    {
        id: "inf099", type: "multiple-choice",
        question: "Período en el que las computadoras se hicieron un poco más pequeñas y rápidas.",
        options: [{value:"A",text:"1940"},{value:"B",text:"1950 - 1960"},{value:"C",text:"1980 - 1990"},{value:"D",text:"2026"}],
        correctAnswer: "B"
    },
    {
        id: "inf100", type: "multiple-choice",
        question: "Año en el que aparecieron las primeras computadoras personales.",
        options: [{value:"A",text:"1940"},{value:"B",text:"1950"},{value:"C",text:"1970"},{value:"D",text:"2000"}],
        correctAnswer: "C"
    },
    {
        id: "inf101", type: "multiple-choice",
        question: "Período en el que las computadoras se volvieron más comunes en las casas y escuelas.",
        options: [{value:"A",text:"1940"},{value:"B",text:"1970"},{value:"C",text:"1980 - 1990"},{value:"D",text:"2026"}],
        correctAnswer: "C"
    },
    {
        id: "inf102", type: "multiple-choice",
        question: "Año en la tabla de evolución en el que las computadoras destacan por ser más rápidas y tener internet.",
        options: [{value:"A",text:"1940"},{value:"B",text:"1970"},{value:"C",text:"2000"},{value:"D",text:"1950 - 1960"}],
        correctAnswer: "C"
    },
    {
        id: "inf103", type: "multiple-choice",
        question: "Año en el que se describe que las computadoras son pequeñas, rápidas y se usan para estudiar, jugar, trabajar y comunicarnos.",
        options: [{value:"A",text:"1970"},{value:"B",text:"1990"},{value:"C",text:"2026"},{value:"D",text:"1940"}],
        correctAnswer: "C"
    },
    {
        id: "inf104", type: "multiple-choice",
        question: "Vehículo que puede desplazarse y realizar acciones de manera automática o mediante control remoto.",
        options: [{value:"A",text:"Vehículo robot"},{value:"B",text:"Computadora personal"},{value:"C",text:"Software educativo"},{value:"D",text:"Procesador de texto"}],
        correctAnswer: "A"
    },
    {
        id: "inf105", type: "multiple-choice",
        question: "Característica del vehículo robot que le permite realizar acciones como avanzar, retroceder y girar.",
        options: [{value:"A",text:"Autonomía"},{value:"B",text:"Movimiento automático"},{value:"C",text:"Sensores"},{value:"D",text:"Batería"}],
        correctAnswer: "B"
    },
    {
        id: "inf106", type: "multiple-choice",
        question: "Componente del vehículo robot encargado de detectar obstáculos, distancia, luz u otros elementos.",
        options: [{value:"A",text:"Motores"},{value:"B",text:"Sensores"},{value:"C",text:"Batería"},{value:"D",text:"Software"}],
        correctAnswer: "B"
    },
    {
        id: "inf107", type: "multiple-choice",
        question: "Componente del vehículo robot que procesa la información y decide qué acción realizar.",
        options: [{value:"A",text:"Controlador"},{value:"B",text:"Batería"},{value:"C",text:"Sensores"},{value:"D",text:"Engranaje"}],
        correctAnswer: "A"
    },
    {
        id: "inf108", type: "multiple-choice",
        question: "Componentes del vehículo robot que permiten mover las ruedas.",
        options: [{value:"A",text:"Sensores"},{value:"B",text:"Motores"},{value:"C",text:"Controlador"},{value:"D",text:"Programación"}],
        correctAnswer: "B"
    },
    {
        id: "inf109", type: "multiple-choice",
        question: "Componente que proporciona la energía necesaria para funcionar al vehículo robot.",
        options: [{value:"A",text:"Batería"},{value:"B",text:"Controlador"},{value:"C",text:"Sensores"},{value:"D",text:"Sorbetes"}],
        correctAnswer: "A"
    },
    {
        id: "inf110", type: "multiple-choice",
        question: "Característica por la cual algunos vehículos robot pueden desplazarse sin que una persona los controle directamente.",
        options: [{value:"A",text:"Autonomía"},{value:"B",text:"Movimiento automático"},{value:"C",text:"Sensores"},{value:"D",text:"Hardware"}],
        correctAnswer: "A"
    },
    {
        id: "inf111", type: "multiple-choice",
        question: "Área de aplicación de la robótica utilizada específicamente para fabricar productos y ensamblar piezas.",
        options: [{value:"A",text:"Medicina"},{value:"B",text:"Industria"},{value:"C",text:"Agricultura"},{value:"D",text:"Educación"}],
        correctAnswer: "B"
    },
    {
        id: "inf112", type: "multiple-choice",
        question: "Área de aplicación de la robótica utilizada en intervenciones de cirugías y rehabilitación.",
        options: [{value:"A",text:"Industria"},{value:"B",text:"Medicina"},{value:"C",text:"Exploración"},{value:"D",text:"Hogares"}],
        correctAnswer: "B"
    },
    {
        id: "inf113", type: "multiple-choice",
        question: "Área de aplicación de la robótica utilizada para sembrar, cosechar y controlar cultivos.",
        options: [{value:"A",text:"Agricultura"},{value:"B",text:"Medicina"},{value:"C",text:"Industria"},{value:"D",text:"Educación"}],
        correctAnswer: "A"
    },
    {
        id: "inf114", type: "multiple-choice",
        question: "Área de aplicación de la robótica orientada a aprender programación y tecnología.",
        options: [{value:"A",text:"Educación"},{value:"B",text:"Exploración"},{value:"C",text:"Industria"},{value:"D",text:"Medicina"}],
        correctAnswer: "A"
    },
    {
        id: "inf115", type: "multiple-choice",
        question: "Área de aplicación de la robótica presente en robots aspiradores y otros dispositivos domésticos.",
        options: [{value:"A",text:"Industria"},{value:"B",text:"Hogares"},{value:"C",text:"Exploración"},{value:"D",text:"Agricultura"}],
        correctAnswer: "B"
    },
    {
        id: "inf116", type: "multiple-choice",
        question: "Área de aplicación de la robótica utilizada para investigar lugares peligrosos o difíciles de alcanzar.",
        options: [{value:"A",text:"Exploración"},{value:"B",text:"Medicina"},{value:"C",text:"Educación"},{value:"D",text:"Hogares"}],
        correctAnswer: "A"
    },
    {
        id: "inf117", type: "multiple-choice",
        question: "Nombre oficial del proyecto que busca investigar medios de transporte y principios de robótica para construir un prototipo.",
        options: [{value:"A",text:"Mi Medio de Transporte Robot"},{value:"B",text:"Hanecraft Builder"},{value:"C",text:"Vehículo Automático 2026"},{value:"D",text:"Informática Escolar"}],
        correctAnswer: "A"
    },
    {
        id: "inf118", type: "multiple-choice",
        question: "Canal de YouTube referenciado en la Fase 1 del proyecto como fuente de inspiración para el transporte.",
        options: [{value:"A",text:"Hanecraft Builder"},{value:"B",text:"Robótica Educativa"},{value:"C",text:"Tech Builder"},{value:"D",text:"YouTube Edu"}],
        correctAnswer: "A"
    },
    {
        id: "inf119", type: "multiple-choice",
        question: "Nombre de la primera fase del proyecto Mi Medio de Transporte Robot.",
        options: [{value:"A",text:"Creación e implementación"},{value:"B",text:"Diseño y planificación"},{value:"C",text:"Producto final"},{value:"D",text:"Presentación de proyecto final"}],
        correctAnswer: "B"
    },
    {
        id: "inf120", type: "multiple-choice",
        question: "Nombre de la segunda fase del proyecto Mi Medio de Transporte Robot.",
        options: [{value:"A",text:"Diseño y planificación"},{value:"B",text:"Creación e implementación"},{value:"C",text:"Producto final"},{value:"D",text:"Presentación de proyecto final"}],
        correctAnswer: "B"
    }
,
{
    id: "inf121",
    type: "fill-in-the-blank",
    question: "El _____ es todo lo que puedes tocar físicamente de una computadora.",
    options: [
        { value: "A", text: "Software" },
        { value: "B", text: "Hardware" },
        { value: "C", text: "Navegador" },
        { value: "D", text: "Servidor" }
    ],
    correctAnswer: "B"
},
{
    id: "inf122",
    type: "fill-in-the-blank",
    question: "Los programas y aplicaciones que hacen que una computadora, celular o tablet funcione se denominan _____.",
    options: [
        { value: "A", text: "Hardware" },
        { value: "B", text: "Sensores" },
        { value: "C", text: "Software" },
        { value: "D", text: "Motores" }
    ],
    correctAnswer: "C"
},
{
    id: "inf123",
    type: "fill-in-the-blank",
    question: "Un ejemplo de hardware mencionado en el cuaderno para ingresar texto a la computadora es el _____.",
    options: [
        { value: "A", text: "teclado" },
        { value: "B", text: "Word" },
        { value: "C", text: "Google Chrome" },
        { value: "D", text: "Paint" }
    ],
    correctAnswer: "A"
},
{
    id: "inf124",
    type: "fill-in-the-blank",
    question: "El _____ es un componente de hardware encargado de procesar la información de la computadora.",
    options: [
        { value: "A", text: "software" },
        { value: "B", text: "procesador" },
        { value: "C", text: "navegador" },
        { value: "D", text: "interruptor" }
    ],
    correctAnswer: "B"
},
{
    id: "inf125",
    type: "fill-in-the-blank",
    question: "Aplicaciones como WhatsApp, Paint y Word son ejemplos de _____.",
    options: [
        { value: "A", text: "hardware" },
        { value: "B", text: "software" },
        { value: "C", text: "componentes físicos" },
        { value: "D", text: "controladores" }
    ],
    correctAnswer: "B"
},
{
    id: "inf126",
    type: "fill-in-the-blank",
    question: "El uso de la computadora definido como \"hacer tareas y buscar información\" corresponde a _____.",
    options: [
        { value: "A", text: "Estudiar" },
        { value: "B", text: "Jugar" },
        { value: "C", text: "Crear" },
        { value: "D", text: "Comunicar" }
    ],
    correctAnswer: "A"
},
{
    id: "inf127",
    type: "fill-in-the-blank",
    question: "La acción de \"dibujar y hacer presentaciones\" en la computadora se clasifica dentro del uso _____.",
    options: [
        { value: "A", text: "Comunicar" },
        { value: "B", text: "Crear" },
        { value: "C", text: "Estudiar" },
        { value: "D", text: "Jugar" }
    ],
    correctAnswer: "B"
},
{
    id: "inf128",
    type: "fill-in-the-blank",
    question: "Dentro de los usos de la computadora, \"hablar con amigos por internet\" pertenece a la categoría _____.",
    options: [
        { value: "A", text: "Estudiar" },
        { value: "B", text: "Crear" },
        { value: "C", text: "Comunicar" },
        { value: "D", text: "Jugar" }
    ],
    correctAnswer: "C"
},
{
    id: "inf129",
    type: "fill-in-the-blank",
    question: "Una de las funciones principales de la computadora mencionadas en los apuntes es calcular _____.",
    options: [
        { value: "A", text: "gráficos" },
        { value: "B", text: "números" },
        { value: "C", text: "piezas" },
        { value: "D", text: "motores" }
    ],
    correctAnswer: "B"
},
{
    id: "inf130",
    type: "fill-in-the-blank",
    question: "El uso de internet definido específicamente como \"mirar videos educativos\" corresponde a _____.",
    options: [
        { value: "A", text: "Ver" },
        { value: "B", text: "Jugar" },
        { value: "C", text: "Estudiar" },
        { value: "D", text: "Respetar" }
    ],
    correctAnswer: "A"
},
{
    id: "inf131",
    type: "fill-in-the-blank",
    question: "La pauta de ciudadanía digital denominada \"Cuidarme\" consiste en no compartir tu _____.",
    options: [
        { value: "A", text: "nombre" },
        { value: "B", text: "contraseña" },
        { value: "C", text: "tarea" },
        { value: "D", text: "computadora" }
    ],
    correctAnswer: "B"
},
{
    id: "inf132",
    type: "fill-in-the-blank",
    question: "En ciudadanía digital, la regla de \"Respetar\" significa tratar bien a las _____.",
    options: [
        { value: "A", text: "computadoras" },
        { value: "B", text: "personas" },
        { value: "C", text: "máquinas" },
        { value: "D", text: "contraseñas" }
    ],
    correctAnswer: "B"
},
{
    id: "inf133",
    type: "fill-in-the-blank",
    question: "El principio de \"No compartir\" indica expresamente que no debes publicar datos _____.",
    options: [
        { value: "A", text: "personales" },
        { value: "B", text: "numéricos" },
        { value: "C", text: "escolares" },
        { value: "D", text: "digitales" }
    ],
    correctAnswer: "A"
},
{
    id: "inf134",
    type: "fill-in-the-blank",
    question: "En el año 1940, las computadoras eran enormes y ocupaban _____ completas.",
    options: [
        { value: "A", text: "cajas" },
        { value: "B", text: "habitaciones" },
        { value: "C", text: "mesas" },
        { value: "D", text: "escuelas" }
    ],
    correctAnswer: "B"
},
{
    id: "inf135",
    type: "fill-in-the-blank",
    question: "Entre 1950 y 1960, las computadoras se hicieron un poco más pequeñas y _____.",
    options: [
        { value: "A", text: "lentas" },
        { value: "B", text: "rápidas" },
        { value: "C", text: "pesadas" },
        { value: "D", text: "difíciles" }
    ],
    correctAnswer: "B"
},
{
    id: "inf136",
    type: "fill-in-the-blank",
    question: "En el año 1970 aparecieron las primeras computadoras _____.",
    options: [
        { value: "A", text: "portátiles" },
        { value: "B", text: "personales" },
        { value: "C", text: "industriales" },
        { value: "D", text: "mecánicas" }
    ],
    correctAnswer: "B"
},
{
    id: "inf137",
    type: "fill-in-the-blank",
    question: "Durante el período de 1980 - 1990, las computadoras se volvieron más comunes en las casas y _____.",
    options: [
        { value: "A", text: "escuelas" },
        { value: "B", text: "industrias" },
        { value: "C", text: "hospitales" },
        { value: "D", text: "habitaciones" }
    ],
    correctAnswer: "A"
},
{
    id: "inf138",
    type: "fill-in-the-blank",
    question: "En el año 2000, las computadoras destacan por ser más rápidas y contar con _____.",
    options: [
        { value: "A", text: "internet" },
        { value: "B", text: "inteligencia artificial" },
        { value: "C", text: "sensores de luz" },
        { value: "D", text: "motores DC" }
    ],
    correctAnswer: "A"
},
{
    id: "inf139",
    type: "fill-in-the-blank",
    question: "En el año 2026, las computadoras son pequeñas, rápidas y se usan para estudiar, jugar, trabajar y _____.",
    options: [
        { value: "A", text: "comunicarnos" },
        { value: "B", text: "programar motores" },
        { value: "C", text: "construir casas" },
        { value: "D", text: "soldar piezas" }
    ],
    correctAnswer: "A"
},
{
    id: "inf140",
    type: "fill-in-the-blank",
    question: "La robótica educativa permite aprender mientras se construyen y programan robots usando la _____.",
    options: [
        { value: "A", text: "imaginación" },
        { value: "B", text: "calculadora" },
        { value: "C", text: "televisión" },
        { value: "D", text: "memoria" }
    ],
    correctAnswer: "A"
},
{
    id: "inf141",
    type: "fill-in-the-blank",
    question: "Un vehículo robot es un vehículo que puede desplazarse y realizar acciones de manera automática o mediante control _____.",
    options: [
        { value: "A", text: "manual" },
        { value: "B", text: "remoto" },
        { value: "C", text: "mecánico" },
        { value: "D", text: "digital" }
    ],
    correctAnswer: "B"
},
{
    id: "inf142",
    type: "fill-in-the-blank",
    question: "El movimiento automático de un vehículo robot le permite avanzar, retroceder y _____.",
    options: [
        { value: "A", text: "volar" },
        { value: "B", text: "girar" },
        { value: "C", text: "saltar" },
        { value: "D", text: "flotar" }
    ],
    correctAnswer: "B"
},
{
    id: "inf143",
    type: "fill-in-the-blank",
    question: "Los _____ en un vehículo robot se encargan de detectar obstáculos, distancia, luz u otros elementos.",
    options: [
        { value: "A", text: "motores" },
        { value: "B", text: "sensores" },
        { value: "C", text: "interruptores" },
        { value: "D", text: "cartones" }
    ],
    correctAnswer: "B"
},
{
    id: "inf144",
    type: "fill-in-the-blank",
    question: "El componente que procesa la información y decide qué acción realizar en el vehículo robot es el _____.",
    options: [
        { value: "A", text: "motor" },
        { value: "B", text: "controlador" },
        { value: "C", text: "sorbete" },
        { value: "D", text: "cartón" }
    ],
    correctAnswer: "B"
},
{
    id: "inf145",
    type: "fill-in-the-blank",
    question: "Los motores en un vehículo robot sirven para permitir mover las _____.",
    options: [
        { value: "A", text: "luces" },
        { value: "B", text: "ruedas" },
        { value: "C", text: "baterías" },
        { value: "D", text: "antenas" }
    ],
    correctAnswer: "B"
},
{
    id: "inf146",
    type: "fill-in-the-blank",
    question: "La energía necesaria para que el vehículo robot funcione es proporcionada por la _____.",
    options: [
        { value: "A", text: "batería" },
        { value: "B", text: "rueda" },
        { value: "C", text: "liga" },
        { value: "D", text: "pantalla" }
    ],
    correctAnswer: "A"
},
{
    id: "inf147",
    type: "fill-in-the-blank",
    question: "La _____ permite al vehículo robot seguir instrucciones para realizar diferentes tareas.",
    options: [
        { value: "A", text: "rueda" },
        { value: "B", text: "programación" },
        { value: "C", text: "batería" },
        { value: "D", text: "tijera" }
    ],
    correctAnswer: "B"
},
{
    id: "inf148",
    type: "fill-in-the-blank",
    question: "La característica de _____ implica que algunos vehículos robot pueden desplazarse sin que una persona los controle directamente.",
    options: [
        { value: "A", text: "velocidad" },
        { value: "B", text: "autonomía" },
        { value: "C", text: "potencia" },
        { value: "D", text: "precisión" }
    ],
    correctAnswer: "B"
},
{
    id: "inf149",
    type: "fill-in-the-blank",
    question: "El propósito general de la robótica es ayudar a las personas a realizar trabajos con mayor rapidez, precisión y _____.",
    options: [
        { value: "A", text: "seguridad" },
        { value: "B", text: "esfuerzo" },
        { value: "C", text: "costo" },
        { value: "D", text: "lentitud" }
    ],
    correctAnswer: "A"
},
{
    id: "inf150",
    type: "fill-in-the-blank",
    question: "En la industria, la robótica se utiliza principalmente para fabricar productos y ensamblar _____.",
    options: [
        { value: "A", text: "cultivos" },
        { value: "B", text: "piezas" },
        { value: "C", text: "medicinas" },
        { value: "D", text: "alimentos" }
    ],
    correctAnswer: "B"
},
{
    id: "inf151",
    type: "fill-in-the-blank",
    question: "En el campo de la medicina, los robots se aplican en cirugías y _____.",
    options: [
        { value: "A", text: "rehabilitación" },
        { value: "B", text: "cosechas" },
        { value: "C", text: "ensamblaje" },
        { value: "D", text: "educación" }
    ],
    correctAnswer: "A"
},
{
    id: "inf152",
    type: "fill-in-the-blank",
    question: "En la agricultura, la robótica se utiliza para sembrar, cosechar y controlar _____.",
    options: [
        { value: "A", text: "cultivos" },
        { value: "B", text: "cirugías" },
        { value: "C", text: "productos" },
        { value: "D", text: "habitaciones" }
    ],
    correctAnswer: "A"
},
{
    id: "inf153",
    type: "fill-in-the-blank",
    question: "El uso de la robótica en el ámbito educativo sirve para aprender tecnología y _____.",
    options: [
        { value: "A", text: "programación" },
        { value: "B", text: "agricultura" },
        { value: "C", text: "medicina" },
        { value: "D", text: "exploración" }
    ],
    correctAnswer: "A"
},
{
    id: "inf154",
    type: "fill-in-the-blank",
    question: "En los hogares, la robótica se aplica en dispositivos como los robots _____.",
    options: [
        { value: "A", text: "aspiradores" },
        { value: "B", text: "agrícolas" },
        { value: "C", text: "quirúrgicos" },
        { value: "D", text: "industriales" }
    ],
    correctAnswer: "A"
},
{
    id: "inf155",
    type: "fill-in-the-blank",
    question: "La robótica de exploración se utiliza para investigar lugares peligrosos o difíciles de _____.",
    options: [
        { value: "A", text: "alcanzar" },
        { value: "B", text: "reparar" },
        { value: "C", text: "limpiar" },
        { value: "D", text: "programar" }
    ],
    correctAnswer: "A"
},
{
    id: "inf156",
    type: "fill-in-the-blank",
    question: "El objetivo del proyecto \"Mi Medio de Transporte Robot\" busca desarrollar la creatividad, el pensamiento lógico, la resolución de problemas y el trabajo _____.",
    options: [
        { value: "A", text: "colaborativo" },
        { value: "B", text: "individual" },
        { value: "C", text: "industrial" },
        { value: "D", text: "automático" }
    ],
    correctAnswer: "A"
},
{
    id: "inf157",
    type: "fill-in-the-blank",
    question: "El proyecto \"Mi Medio de Transporte Robot\" se estructura en un total de _____ fases.",
    options: [
        { value: "A", text: "dos" },
        { value: "B", text: "tres" },
        { value: "C", text: "cuatro" },
        { value: "D", text: "cinco" }
    ],
    correctAnswer: "C"
},
{
    id: "inf158",
    type: "fill-in-the-blank",
    question: "El canal de YouTube de referencia para ver el prototipo de transporte robot se llama _____ Builder.",
    options: [
        { value: "A", text: "Tech" },
        { value: "B", text: "Hanecraft" },
        { value: "C", text: "Robo" },
        { value: "D", text: "Edu" }
    ],
    correctAnswer: "B"
},
{
    id: "inf159",
    type: "fill-in-the-blank",
    question: "En la lista de materiales del proyecto se especifican 4 sorbetes pequeños de _____.",
    options: [
        { value: "A", text: "agua" },
        { value: "B", text: "jugo" },
        { value: "C", text: "cartón" },
        { value: "D", text: "plástico rígido" }
    ],
    correctAnswer: "B"
},
{
    id: "inf160",
    type: "fill-in-the-blank",
    question: "En el paso 1 del procedimiento de construcción, los cartones se recortan dándoles forma de _____.",
    options: [
        { value: "A", text: "vehículo" },
        { value: "B", text: "casa" },
        { value: "C", text: "círculo" },
        { value: "D", text: "barco" }
    ],
    correctAnswer: "B"
}
];

const lesson04InterviewQuestions = [
    "Could you tell me a little about yourself?",
    "What are your strongest personal qualities?",
    "What would you say is your greatest weakness?",
    "What educational background do you have?",
    "What skills have you developed through your education or training?",
    "Do you have any previous work experience?",
    "What were your main responsibilities in your previous job?",
    "What did you learn from your previous work experience?",
    "Why are you interested in this position?",
    "What do you know about our company?",
    "Why do you think you are the right person for this job?",
    "How do you handle stressful situations at work?",
    "Can you describe a problem you faced and how you solved it?",
    "Do you prefer working independently or as part of a team? Why?",
    "How do you organize your time and prioritize your tasks?",
    "How do you respond to criticism or feedback?",
    "How would you handle a disagreement with a coworker?",
    "What motivates you to do your best at work?",
    "Where do you see yourself professionally in five years?",
    "Is there anything else you would like us to know about you?"
];

// Control de la actividad D: Job Interview
document.addEventListener("DOMContentLoaded", function () {

    const preguntas = lesson04InterviewQuestions;

    const elementoPregunta = document.getElementById("lesson04-interview-question");
    const campoRespuesta = document.getElementById("lesson04-interview-answer");
    const contador = document.getElementById("lesson04-interview-counter");
    const progreso = document.getElementById("lesson04-interview-progress");
    const botonAnterior = document.getElementById("lesson04-previous");
    const botonSiguiente = document.getElementById("lesson04-next");
    const botonImprimir = document.getElementById("lesson04-print");

    if (
        !Array.isArray(preguntas) ||
        preguntas.length !== 20 ||
        !elementoPregunta ||
        !campoRespuesta ||
        !contador ||
        !progreso ||
        !botonAnterior ||
        !botonSiguiente ||
        !botonImprimir
    ) {
        return;
    }

    const claveAlmacenamiento = "learningbridge_lesson04_job_interview_answers_v1";

    let respuestas = Array(20).fill("");
    let preguntaActual = 0;

    // Recuperar el progreso guardado.
    try {
        const datosGuardados = localStorage.getItem(claveAlmacenamiento);

        if (datosGuardados) {
            const datos = JSON.parse(datosGuardados);

            if (Array.isArray(datos.answers)) {
                respuestas = respuestas.map(function (_, indice) {
                    return typeof datos.answers[indice] === "string"
                        ? datos.answers[indice]
                        : "";
                });
            }

            if (
                Number.isInteger(datos.currentIndex) &&
                datos.currentIndex >= 0 &&
                datos.currentIndex < 20
            ) {
                preguntaActual = datos.currentIndex;
            }
        }
    } catch (error) {
        console.warn("The saved interview progress could not be recovered.", error);
    }

    // Guardar las respuestas y la pregunta actual.
    function guardarProgreso() {
        try {
            localStorage.setItem(
                claveAlmacenamiento,
                JSON.stringify({
                    answers: respuestas,
                    currentIndex: preguntaActual
                })
            );
        } catch (error) {
            console.warn("The interview progress could not be saved.", error);
        }
    }

    // Contar las palabras de una respuesta.
    function contarPalabras(texto) {
        const limpio = texto.trim();

        return limpio === ""
            ? 0
            : limpio.split(/\s+/).length;
    }

    // Actualizar contador y botones.
    function actualizarEstado() {
        const totalPalabras = contarPalabras(campoRespuesta.value);
        const respuestaCompleta = totalPalabras >= 75;

        contador.textContent = totalPalabras + " / 75 words";
        contador.classList.toggle("is-complete", respuestaCompleta);

        botonAnterior.hidden = preguntaActual === 0;

        botonSiguiente.hidden = !(
            preguntaActual < 19 && respuestaCompleta
        );

        botonImprimir.hidden = !(
            preguntaActual === 19 && respuestaCompleta
        );
    }

    // Mostrar la pregunta correspondiente.
    function mostrarPregunta() {
        progreso.textContent =
            "Question " + (preguntaActual + 1) + " of 20";

        elementoPregunta.textContent =
            preguntas[preguntaActual];

        campoRespuesta.value =
            respuestas[preguntaActual];

        actualizarEstado();
    }

    // Guardar cada modificación automáticamente.
    campoRespuesta.addEventListener("input", function () {
        respuestas[preguntaActual] = campoRespuesta.value;
        guardarProgreso();
        actualizarEstado();
    });

    // Regresar a la pregunta anterior.
    botonAnterior.addEventListener("click", function () {
        respuestas[preguntaActual] = campoRespuesta.value;

        if (preguntaActual > 0) {
            preguntaActual--;
            guardarProgreso();
            mostrarPregunta();
        }
    });

    // Avanzar cuando la respuesta tenga al menos 75 palabras.
    botonSiguiente.addEventListener("click", function () {
        respuestas[preguntaActual] = campoRespuesta.value;

        if (
            preguntaActual < 19 &&
            contarPalabras(respuestas[preguntaActual]) >= 75
        ) {
            preguntaActual++;
            guardarProgreso();
            mostrarPregunta();
        }
    });

    // Escapar caracteres para proteger el documento imprimible.
    function escaparHTML(texto) {
        return texto.replace(/[&<>"']/g, function (caracter) {
            const equivalencias = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            };

            return equivalencias[caracter];
        });
    }

    // Generar el documento con las 20 preguntas y respuestas.
    function imprimirRespuestas() {
        respuestas[preguntaActual] = campoRespuesta.value;
        guardarProgreso();

        if (
            preguntaActual !== 19 ||
            contarPalabras(respuestas[19]) < 75
        ) {
            return;
        }

        const ventanaImpresion = window.open("", "_blank");

        if (!ventanaImpresion) {
            alert("Please allow pop-ups to print your interview answers.");
            return;
        }

        const contenidoPreguntas = preguntas.map(function (pregunta, indice) {
            return `
                <section class="question">
                    <h2>Question ${indice + 1}</h2>
                    <p class="question-text">${escaparHTML(pregunta)}</p>
                    <h3>Your answer</h3>
                    <p class="answer">${escaparHTML(respuestas[indice])}</p>
                </section>
            `;
        }).join("");

        const documento = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Job Interview - Answers</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        color: #222;
                        line-height: 1.6;
                        max-width: 850px;
                        margin: 35px auto;
                        padding: 0 25px;
                    }

                    h1 {
                        text-align: center;
                        margin-bottom: 30px;
                    }

                    .question {
                        margin-bottom: 28px;
                        padding-bottom: 18px;
                        border-bottom: 1px solid #ccc;
                        break-inside: avoid;
                    }

                    .question h2 {
                        font-size: 17px;
                        color: #5c1d53;
                    }

                    .question h3 {
                        font-size: 14px;
                        margin-bottom: 5px;
                    }

                    .question-text {
                        font-weight: bold;
                    }

                    .answer {
                        white-space: pre-wrap;
                        overflow-wrap: break-word;
                    }

                    @media print {
                        body {
                            margin: 0;
                            padding: 10mm;
                        }

                        .question {
                            break-inside: avoid;
                        }
                    }
                </style>
            </head>
            <body>
                <h1>Job Interview - My Answers</h1>
                ${contenidoPreguntas}
            </body>
            </html>
        `;

        ventanaImpresion.document.open();
        ventanaImpresion.document.write(documento);
        ventanaImpresion.document.close();
        ventanaImpresion.focus();

        setTimeout(function () {
            ventanaImpresion.print();
        }, 500);
    }

    botonImprimir.addEventListener("click", imprimirRespuestas);

    // Recuperar y mostrar la pregunta guardada al abrir la página.
    mostrarPregunta();

    // Identificador para comprobar que el controlador está activo.
    window.lesson04InterviewController = true;

});

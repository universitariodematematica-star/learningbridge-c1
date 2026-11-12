/*
==================================================
LEARNING BRIDGE C1
MOTOR DEL SIMULADOR DE EXAMEN
==================================================

FUNCIONES:
1. Validar el banco de preguntas.
2. Seleccionar 10 preguntas aleatoriamente.
3. Reconocer el tipo de cada pregunta.
4. Mostrar las opciones correspondientes.
5. Evaluar las respuestas.
6. Calcular una calificación sobre 10.

El banco debe estar cargado antes de este archivo.
*/

(function () {

    "use strict";

    const PREGUNTAS_POR_EXAMEN = 10;

    function validarBanco(banco) {

        if (!Array.isArray(banco)) {
            return {
                validas: [],
                invalidas: 1
            };
        }

        const cantidadesID = new Map();

        banco.forEach(function (pregunta) {

            if (
                pregunta &&
                typeof pregunta.id === "string" &&
                pregunta.id.trim() !== ""
            ) {
                const id = pregunta.id.trim();

                cantidadesID.set(
                    id,
                    (cantidadesID.get(id) || 0) + 1
                );
            }

        });

        const validas = [];
        let invalidas = 0;

        banco.forEach(function (pregunta) {

            let valida = true;

            if (
                !pregunta ||
                typeof pregunta !== "object" ||
                Array.isArray(pregunta)
            ) {
                invalidas++;
                return;
            }

            if (
                typeof pregunta.id !== "string" ||
                pregunta.id.trim() === ""
            ) {
                valida = false;
            } else if (cantidadesID.get(pregunta.id.trim()) !== 1) {
                valida = false;
            }

            if (
                typeof pregunta.question !== "string" ||
                pregunta.question.trim() === ""
            ) {
                valida = false;
            }

            let cantidadOpciones = 0;

            if (
                pregunta.type === "multiple-choice" ||
                pregunta.type === "fill-in-the-blank"
            ) {
                cantidadOpciones = 4;
            } else if (pregunta.type === "true-false") {
                cantidadOpciones = 2;
            } else {
                valida = false;
            }

            if (
                !Array.isArray(pregunta.options) ||
                pregunta.options.length !== cantidadOpciones
            ) {
                valida = false;
            } else {

                const valores = [];

                pregunta.options.forEach(function (opcion) {

                    if (
                        !opcion ||
                        typeof opcion.value !== "string" ||
                        opcion.value.trim() === "" ||
                        typeof opcion.text !== "string" ||
                        opcion.text.trim() === ""
                    ) {
                        valida = false;
                    } else {
                        valores.push(opcion.value);
                    }

                });

                if (new Set(valores).size !== valores.length) {
                    valida = false;
                }

                if (
                    pregunta.type === "true-false" &&
                    (
                        !valores.includes("true") ||
                        !valores.includes("false")
                    )
                ) {
                    valida = false;
                }

                if (
                    typeof pregunta.correctAnswer !== "string" ||
                    !valores.includes(pregunta.correctAnswer)
                ) {
                    valida = false;
                }

            }

            if (valida) {
                validas.push(pregunta);
            } else {
                invalidas++;
            }

        });

        return {
            validas: validas,
            invalidas: invalidas
        };

    }


    function mezclarPreguntas(lista) {

        const resultado = [...lista];

        for (let i = resultado.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            const temporal = resultado[i];

            resultado[i] = resultado[j];
            resultado[j] = temporal;

        }

        return resultado;

    }


    function crearElemento(etiqueta, clase, texto) {

        const elemento = document.createElement(etiqueta);

        if (clase) {
            elemento.className = clase;
        }

        if (texto !== undefined) {
            elemento.textContent = texto;
        }

        return elemento;

    }


    function iniciarSimulador() {

        const estado = document.getElementById("exam-status");
        const botonInicio = document.getElementById("btn-start-exam");
        const areaExamen = document.getElementById("exam-area");
        const contenedorPreguntas = document.getElementById("exam-questions");
        const botonEvaluar = document.getElementById("btn-evaluate-exam");
        const resultados = document.getElementById("exam-results");
        const puntuacion = document.getElementById("exam-score");
        const resumen = document.getElementById("exam-summary");
        const progreso = document.getElementById("exam-progress");

        if (
            !estado ||
            !botonInicio ||
            !areaExamen ||
            !contenedorPreguntas ||
            !botonEvaluar ||
            !resultados ||
            !puntuacion ||
            !resumen ||
            !progreso
        ) {
            console.error(
                "Simulador de examen: no se encontraron los elementos HTML necesarios."
            );
            return;
        }

        const banco = window.LEARNING_BRIDGE_QUESTION_BANK;
        const revision = validarBanco(banco);

        const preguntasValidas = revision.validas;

        let examenActual = [];


        // INFORMACIÓN DEL BANCO

        if (preguntasValidas.length < PREGUNTAS_POR_EXAMEN) {

            estado.textContent =
                "El banco de preguntas contiene " +
                preguntasValidas.length +
                " preguntas válidas. Se necesitan al menos 10 para iniciar un examen.";

            botonInicio.disabled = true;

        } else {

            estado.textContent =
                "El banco de preguntas está listo. " +
                preguntasValidas.length +
                " preguntas válidas disponibles.";

            botonInicio.disabled = false;

        }

        if (revision.invalidas > 0) {

            estado.textContent +=
                " Preguntas no válidas omitidas: " +
                revision.invalidas +
                ".";

        }


        // PRESENTAR UNA PREGUNTA

        function presentarPregunta(pregunta, indice) {

            const tarjeta = crearElemento(
                "article",
                "exam-question"
            );

            const titulo = crearElemento(
                "h3",
                "",
                "Pregunta " + (indice + 1)
            );

            const tipo = crearElemento(
                "span",
                "exam-question-type",
                pregunta.type === "multiple-choice"
                    ? "Selección múltiple"
                    : pregunta.type === "fill-in-the-blank"
                        ? "Completar espacios en blanco"
                        : "Verdadero o falso"
            );

            const enunciado = crearElemento(
                "p",
                "exam-question-text",
                pregunta.question
            );

            const opciones = crearElemento(
                "fieldset",
                "exam-options"
            );

            const instruccion = crearElemento(
                "legend",
                "",
                "Selecciona una respuesta."
            );

            opciones.appendChild(instruccion);

            pregunta.options.forEach(function (opcion) {

                const etiqueta = crearElemento(
                    "label",
                    "exam-option"
                );

                const entrada = document.createElement("input");

                entrada.type = "radio";
                entrada.name = "exam-question-" + indice;
                entrada.value = opcion.value;

                const texto = crearElemento(
                    "span",
                    "",
                    opcion.text
                );

                etiqueta.appendChild(entrada);
                etiqueta.appendChild(texto);

                opciones.appendChild(etiqueta);

            });

            const retroalimentacion = crearElemento(
                "p",
                "exam-question-feedback"
            );

            retroalimentacion.id = "exam-feedback-" + indice;
            retroalimentacion.setAttribute("aria-live", "polite");

            tarjeta.appendChild(titulo);
            tarjeta.appendChild(tipo);
            tarjeta.appendChild(enunciado);
            tarjeta.appendChild(opciones);
            tarjeta.appendChild(retroalimentacion);

            return tarjeta;

        }


        // INICIAR EXAMEN

        botonInicio.addEventListener("click", function () {

            if (preguntasValidas.length < PREGUNTAS_POR_EXAMEN) {
                return;
            }

            examenActual = mezclarPreguntas(
                preguntasValidas
            ).slice(0, PREGUNTAS_POR_EXAMEN);

            contenedorPreguntas.replaceChildren();

            examenActual.forEach(function (pregunta, indice) {

                const elemento = presentarPregunta(
                    pregunta,
                    indice
                );

                contenedorPreguntas.appendChild(elemento);

            });

            progreso.textContent =
                "Se seleccionaron 10 preguntas aleatoriamente de un banco de " +
                preguntasValidas.length +
                ".";

            puntuacion.textContent = "";
            resumen.textContent = "";

            resultados.hidden = true;
            areaExamen.hidden = false;

        });


        // EVALUAR EXAMEN

        botonEvaluar.addEventListener("click", function () {

            if (examenActual.length !== PREGUNTAS_POR_EXAMEN) {
                return;
            }

            let correctas = 0;
            let respondidas = 0;

            examenActual.forEach(function (pregunta, indice) {

                const seleccionada = document.querySelector(
                    'input[name="exam-question-' + indice + '"]:checked'
                );

                const retroalimentacion = document.getElementById(
                    "exam-feedback-" + indice
                );

                if (!seleccionada) {

                    retroalimentacion.textContent =
                        "Sin responder.";

                    retroalimentacion.className =
                        "exam-question-feedback is-unanswered";

                    return;

                }

                respondidas++;

                if (
                    seleccionada.value === pregunta.correctAnswer
                ) {

                    correctas++;

                    retroalimentacion.textContent =
                        "¡Correcto!" +
                        (pregunta.explanation
                            ? " Explicación: " + pregunta.explanation
                            : "");

                    retroalimentacion.className =
                        "exam-question-feedback is-correct";

                } else {

                    const respuestaCorrecta = pregunta.options.find(
                        function (opcion) {
                            return opcion.value === pregunta.correctAnswer;
                        }
                    );

                    retroalimentacion.textContent =
                        "Incorrecto. Respuesta correcta: " +
                        respuestaCorrecta.text +
                        (pregunta.explanation
                            ? " Explicación: " + pregunta.explanation
                            : "");

                    retroalimentacion.className =
                        "exam-question-feedback is-incorrect";

                }

            });

            puntuacion.textContent =
                "Tu calificación: " +
                correctas +
                " / " +
                PREGUNTAS_POR_EXAMEN;

            resumen.textContent =
                "Respondidas: " +
                respondidas +
                " / " +
                PREGUNTAS_POR_EXAMEN +
                " | Sin responder: " +
                (PREGUNTAS_POR_EXAMEN - respondidas);

            resultados.hidden = false;

        });

    }


    document.addEventListener(
        "DOMContentLoaded",
        iniciarSimulador
    );

})();

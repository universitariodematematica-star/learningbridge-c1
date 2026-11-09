window.LearningBridge = window.LearningBridge || {};

window.LearningBridge.initGrammarPractice = function () {
    const questions = [
        {
            sentence: "My brother (had already won / had already been winning) the swim meet when the diving competition began.",
            options: ["had already won", "had already been winning"],
            answer: 0
        },
        {
            sentence: "The house was completely dark when I got home because the family (had gone / had been going) to bed.",
            options: ["had gone", "had been going"],
            answer: 0
        },
        {
            sentence: "The audience (had stood / had been standing) in line for hours to buy tickets when they canceled the concert.",
            options: ["had stood", "had been standing"],
            answer: 1
        },
        {
            sentence: "The women's tennis team (had practiced / had been practicing) on a grass court four times before today's event started.",
            options: ["had practiced", "had been practicing"],
            answer: 0
        },
        {
            sentence: "My friend (had already seen / had already been seeing) Lila Downs in concert, so we decided not to go.",
            options: ["had already seen", "had already been seeing"],
            answer: 0
        },
        {
            sentence: "By the time the guests arrived, my mother (had already prepared / had already been preparing) dinner.",
            options: ["had already prepared", "had already been preparing"],
            answer: 0
        },
        {
            sentence: "The children were exhausted because they (had played / had been playing) outside all afternoon.",
            options: ["had played", "had been playing"],
            answer: 1
        },
        {
            sentence: "She (had completed / had been completing) three research projects before she graduated.",
            options: ["had completed", "had been completing"],
            answer: 0
        },
        {
            sentence: "When the teacher entered the classroom, the students (had talked / had been talking) for several minutes.",
            options: ["had talked", "had been talking"],
            answer: 1
        },
        {
            sentence: "I recognized the song immediately because I (had heard / had been hearing) it many times before.",
            options: ["had heard", "had been hearing"],
            answer: 0
        },
        {
            sentence: "The streets were wet because it (had rained / had been raining) throughout the night.",
            options: ["had rained", "had been raining"],
            answer: 1
        },
        {
            sentence: "The mechanic (had repaired / had been repairing) the car, so it was ready for the journey.",
            options: ["had repaired", "had been repairing"],
            answer: 0
        },
        {
            sentence: "The actors (had rehearsed / had been rehearsing) for weeks before the opening night.",
            options: ["had rehearsed", "had been rehearsing"],
            answer: 1
        },
        {
            sentence: "By the end of the year, the author (had written / had been writing) five novels.",
            options: ["had written", "had been writing"],
            answer: 0
        },
        {
            sentence: "They (had argued / had been arguing) for nearly an hour when the manager finally intervened.",
            options: ["had argued", "had been arguing"],
            answer: 1
        },
        {
            sentence: "Before moving abroad, he (had saved / had been saving) enough money to buy an apartment.",
            options: ["had saved", "had been saving"],
            answer: 0
        },
        {
            sentence: "She was tired because she (had worked / had been working) since early morning.",
            options: ["had worked", "had been working"],
            answer: 1
        },
        {
            sentence: "We did not want any food because we (had already eaten / had already been eating) lunch.",
            options: ["had already eaten", "had already been eating"],
            answer: 0
        },
        {
            sentence: "I (had looked / had been looking) for my keys for half an hour when I finally found them.",
            options: ["had looked", "had been looking"],
            answer: 1
        },
        {
            sentence: "Before she became famous, the singer (had recorded / had been recording) several albums.",
            options: ["had recorded", "had been recording"],
            answer: 0
        }
    ];

    const questionsContainer = document.getElementById("lb-practice-questions");
    const evaluateButton = document.getElementById("lb-practice-evaluate");
    const feedback = document.getElementById("lb-practice-feedback");

    if (!questionsContainer || !evaluateButton || !feedback) return;

    questionsContainer.innerHTML = "";

    questions.forEach((question, index) => {
        const article = document.createElement("div");
        article.className = "lb-practice-question";
        article.dataset.question = index;

        const sentence = document.createElement("p");
        sentence.className = "lb-practice-sentence";
        sentence.textContent = (index + 1) + ". " + question.sentence;

        const options = document.createElement("div");
        options.className = "lb-practice-options";

        question.options.forEach((option, optionIndex) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "lb-option-button";
            button.textContent = option;
            button.dataset.option = optionIndex;
            button.setAttribute("aria-pressed", "false");

            button.addEventListener("click", function () {
                if (evaluateButton.disabled) return;

                options.querySelectorAll(".lb-option-button").forEach(item => {
                    item.classList.remove("lb-option-selected");
                    item.setAttribute("aria-pressed", "false");
                });

                button.classList.add("lb-option-selected");
                button.setAttribute("aria-pressed", "true");
            });

            options.appendChild(button);
        });

        article.appendChild(sentence);
        article.appendChild(options);
        questionsContainer.appendChild(article);
    });

    evaluateButton.addEventListener("click", function () {
        let score = 0;
        let unanswered = 0;

        questions.forEach((question, index) => {
            const article = questionsContainer.querySelector(
                '[data-question="' + index + '"]'
            );

            const buttons = article.querySelectorAll(".lb-option-button");
            const selected = article.querySelector(".lb-option-selected");

            buttons.forEach(button => {
                button.disabled = true;
                button.classList.remove("lb-option-selected");
                button.setAttribute("aria-pressed", "false");
            });

            buttons[question.answer].classList.add("lb-option-correct");

            if (!selected) {
                unanswered++;
                return;
            }

            const selectedIndex = Number(selected.dataset.option);

            const indicator = document.createElement("span");
            indicator.className = "lb-answer-indicator";

            if (selectedIndex === question.answer) {
                score++;
                indicator.classList.add("lb-answer-check");
                indicator.textContent = "✓";
            } else {
                buttons[selectedIndex].classList.add("lb-option-incorrect");
                indicator.classList.add("lb-answer-cross");
                indicator.textContent = "✗";
            }

            selected.insertAdjacentElement("afterend", indicator);
        });

        feedback.textContent =
            "Your score: " + score + " out of " + questions.length + "." +
            (unanswered > 0 ? " Unanswered questions: " + unanswered + "." : "");

        feedback.classList.add("lb-feedback-visible");
        evaluateButton.disabled = true;
    });
};

window.LearningBridge.initListeningPractice = function () {
    const questions = [
        {
            question: "Which educational document does the material analyzed in the audio come from?",
            options: [
                "A 500-page book about sports history.",
                'A lesson labeled "Unit 1, Lesson 1" from an English curriculum.',
                "The official script of an Olympic sports documentary.",
                "A technical manual on biomechanics for gymnasts."
            ],
            answer: 1
        },
        {
            question: "How old was Kohei Uchimura when he joined Japan's national gymnastics team?",
            options: ["15 years old.", "18 years old.", "20 years old.", "12 years old."],
            answer: 1
        },
        {
            question: "According to the audio, how many years had Uchimura been practicing gymnastics when he joined the national team at age eighteen?",
            options: ["5 years.", "10 years.", "15 years.", "18 years."],
            answer: 2
        },
        {
            question: "According to the podcast's chronological account, at what age did Uchimura begin gymnastics training?",
            options: ["At the age of 3.", "At the age of 6.", "At the age of 9.", "At the age of 12."],
            answer: 0
        },
        {
            question: "On which apparatus and at which Olympic Games did Uchimura suffer a notable fall in his biography?",
            options: [
                "On the horizontal bar at the 2008 Beijing Olympics.",
                "During the dismount from the pommel horse at the 2012 London Olympics.",
                "During the floor exercise at the 2016 Rio Olympics.",
                "On the rings at a national competition in Tokyo."
            ],
            answer: 1
        },
        {
            question: "Despite Uchimura's fall at the 2012 London Olympics, what result did his team achieve?",
            options: [
                "They were disqualified from the competition.",
                "They won the gold medal.",
                "They won the silver medal.",
                "They finished fourth without a medal."
            ],
            answer: 2
        },
        {
            question: "Which other public figure is used in the lesson to contrast formal and informal training?",
            options: [
                "A multi-award-winning Olympic swimmer.",
                "An internationally acclaimed Grammy-winning singer, Lila Downs.",
                "A professional classical ballet dancer.",
                "A haute couture fashion designer."
            ],
            answer: 1
        },
        {
            question: "How does the audio describe the impact of manipulating verb tenses in storytelling?",
            options: [
                "As a memorization rule with no real application.",
                'As "the architecture of time travel" in storytelling.',
                "As an obstacle to developing speaking fluency.",
                "As a method used exclusively in poetic translation."
            ],
            answer: 1
        },
        {
            question: "How is Kohei Uchimura's life outside the gym described in the text?",
            options: [
                "He is surprisingly relaxed and leads a very normal life.",
                "He is an obsessive athlete who is inaccessible around the clock.",
                "He is a reclusive coach with no social life.",
                "He is a public figure who constantly appears on television."
            ],
            answer: 0
        },
        {
            question: "What is the central purpose of the lesson analyzed in the audio?",
            options: [
                "To teach physical training techniques for elite athletes.",
                "To use the biographies of two exceptional people to teach the subtleties of past-tense grammar and frame personal success.",
                "To promote folk music in secondary schools.",
                "To evaluate the performance of Olympic judges in 2012."
            ],
            answer: 1
        },
        {
            question: "In what year did Kohei Uchimura join Japan's national gymnastics team, according to the biography?",
            options: ["In 2004.", "In 2007.", "In 2010.", "In 2012."],
            answer: 1
        },
        {
            question: "How is Uchimura's sporting career characterized after he joined the national team?",
            options: [
                "As a short career that ended after his first international competition.",
                "As a constant, uninterrupted progression year after year.",
                "As a series of temporary retirements interrupted by other sports.",
                "As a career devoted exclusively to theoretical teaching."
            ],
            answer: 1
        },
        {
            question: "According to the podcast, what determines how we frame the story of a fall during a competition?",
            options: [
                "The Olympic committee's immediate decision.",
                "A tiny, almost invisible mechanism: the verb tense we use.",
                "The compulsory repetition of the routine.",
                "The number of spectators in the stadium."
            ],
            answer: 1
        },
        {
            question: 'How does the audio describe the educational material ("Unit 1, Lesson 1") used as the basis for the analysis?',
            options: [
                "As a dense textbook of more than 500 pages.",
                'As an unassuming educational document that goes unnoticed.',
                "As a script for a Hollywood movie.",
                "As a scientific report on applied biomechanics."
            ],
            answer: 1
        },
        {
            question: "Besides Uchimura, which other outstanding figure is used in the lesson to illustrate the debate between formal and informal training?",
            options: [
                "A world-famous classical ballet dancer.",
                "An internationally acclaimed Grammy-winning singer.",
                "A twentieth-century self-taught painter.",
                "A scientist specializing in quantum physics."
            ],
            answer: 1
        },
        {
            question: "According to the podcast's reflection, when does linguistic or grammatical knowledge become most valuable?",
            options: [
                "When endless lists of irregular verbs are memorized for an exam.",
                "When abstract rules are connected to real-life achievements and struggles.",
                "When every word is translated literally into another language.",
                "When it is used exclusively in formal academic settings."
            ],
            answer: 1
        },
        {
            question: "In a sport such as gymnastics, how does the audio describe the seriousness of a fall during a routine?",
            options: [
                "As a minor mistake that does not affect the final score.",
                "As a devastating event in a sport decided by fractions of a point.",
                "As a desirable mistake that demonstrates improvisational ability.",
                "As an action punished by a lifetime ban."
            ],
            answer: 1
        },
        {
            question: "What striking psychological contrast is highlighted about Uchimura's life outside the sport?",
            options: [
                "He is very talkative in the gym but completely reserved outside it.",
                "He combines extreme concentration during training with a relaxed, normal life outside the gym.",
                "He dislikes public competitions but trains in front of cameras all day.",
                "He dislikes gymnastics but competes because of family pressure."
            ],
            answer: 1
        },
        {
            question: "What statement about Uchimura's reputation is highlighted at the beginning of his biography?",
            options: [
                "He is considered by some to be the greatest gymnast of all time.",
                "He was the youngest gymnast in history to win an Olympic medal.",
                "He invented the pommel horse in modern gymnastics.",
                "He competed only at the regional level in Japan."
            ],
            answer: 0
        },
        {
            question: "What metaphor does the podcast use to describe the manipulation of verb tenses in storytelling?",
            options: [
                "The compass of language learning.",
                "The architecture of time travel in storytelling.",
                "The map of historical memory.",
                "The mechanism of literary translation."
            ],
            answer: 1
        }
    ];

    const questionsContainer = document.getElementById("lb-listening-questions");
    const evaluateButton = document.getElementById("lb-listening-evaluate");
    const feedback = document.getElementById("lb-listening-feedback");

    if (!questionsContainer || !evaluateButton || !feedback) return;

    questionsContainer.innerHTML = "";

    questions.forEach((question, index) => {
        const article = document.createElement("div");
        article.className = "lb-practice-question";
        article.dataset.question = index;

        const title = document.createElement("p");
        title.className = "lb-practice-sentence";
        title.textContent = (index + 1) + ". " + question.question;

        const options = document.createElement("div");
        options.className = "lb-practice-options";

        question.options.forEach((option, optionIndex) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "lb-option-button";
            button.textContent = String.fromCharCode(65 + optionIndex) + ") " + option;
            button.dataset.option = optionIndex;
            button.setAttribute("aria-pressed", "false");

            button.addEventListener("click", function () {
                if (evaluateButton.disabled) return;

                options.querySelectorAll(".lb-option-button").forEach(item => {
                    item.classList.remove("lb-option-selected");
                    item.setAttribute("aria-pressed", "false");
                });

                button.classList.add("lb-option-selected");
                button.setAttribute("aria-pressed", "true");
            });

            options.appendChild(button);
        });

        article.appendChild(title);
        article.appendChild(options);
        questionsContainer.appendChild(article);
    });

    evaluateButton.addEventListener("click", function () {
        let score = 0;
        let unanswered = 0;

        questions.forEach((question, index) => {
            const article = questionsContainer.querySelector(
                '[data-question="' + index + '"]'
            );

            const buttons = article.querySelectorAll(".lb-option-button");
            const selected = article.querySelector(".lb-option-selected");
            const selectedIndex = selected ? Number(selected.dataset.option) : -1;

            buttons.forEach(button => {
                button.disabled = true;
                button.classList.remove("lb-option-selected");
                button.setAttribute("aria-pressed", "false");
            });

            buttons[question.answer].classList.add("lb-option-correct");

            if (selectedIndex === -1) {
                unanswered++;
                return;
            }

            const indicator = document.createElement("span");
            indicator.className = "lb-answer-indicator";

            if (selectedIndex === question.answer) {
                score++;
                indicator.classList.add("lb-answer-check");
                indicator.textContent = "✓";
            } else {
                buttons[selectedIndex].classList.add("lb-option-incorrect");
                indicator.classList.add("lb-answer-cross");
                indicator.textContent = "✗";
            }

            buttons[selectedIndex].insertAdjacentElement("afterend", indicator);
        });

        feedback.textContent =
            "Your score: " + score + " out of " + questions.length + "." +
            (unanswered > 0 ? " Unanswered questions: " + unanswered + "." : "");

        feedback.classList.add("lb-feedback-visible");
        evaluateButton.disabled = true;
    });
};
window.LearningBridge.initGrammarBoard = function () {
    const modal = document.getElementById("lb-grammar-board-modal");
    const openButton = document.getElementById("lb-open-grammar-board");
    const closeButton = document.getElementById("lb-close-grammar-board");
    const storageKey = "learningBridgeGrammarBoard_v1";

    if (!modal || !openButton || !closeButton) {
        return;
    }

    const tables = Array.from(modal.querySelectorAll(".lb-grammar-table"));

    // Restore previously saved examples.
    try {
        const savedData = localStorage.getItem(storageKey);

        if (savedData) {
            const examples = JSON.parse(savedData);

            if (Array.isArray(examples)) {
                tables.forEach((table, tableIndex) => {
                    const cells = table.querySelectorAll(
                        'td[contenteditable="true"]'
                    );

                    const savedCells = examples[tableIndex];

                    if (Array.isArray(savedCells)) {
                        cells.forEach((cell, cellIndex) => {
                            if (typeof savedCells[cellIndex] === "string") {
                                cell.textContent = savedCells[cellIndex];
                            }
                        });
                    }
                });
            }
        }
    } catch (error) {
        console.warn("Could not restore Grammar Board data:", error);
    }

    // Save all editable cells automatically.
    const saveExamples = function () {
        const examples = tables.map(table => {
            return Array.from(
                table.querySelectorAll('td[contenteditable="true"]')
            ).map(cell => cell.textContent);
        });

        try {
            localStorage.setItem(storageKey, JSON.stringify(examples));
        } catch (error) {
            console.warn("Could not save Grammar Board data:", error);
        }
    };

    modal.querySelectorAll('td[contenteditable="true"]').forEach(cell => {
        cell.addEventListener("input", saveExamples);
    });

    const openModal = function () {
        modal.hidden = false;
        document.body.classList.add("lb-grammar-board-open");
        closeButton.focus();
    };

    const closeModal = function () {
        modal.hidden = true;
        document.body.classList.remove("lb-grammar-board-open");
        openButton.focus();
    };

    openButton.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !modal.hidden) {
            closeModal();
        }
    });
};
document.addEventListener("DOMContentLoaded", function () {
    window.LearningBridge.initGrammarPractice();
    window.LearningBridge.initListeningPractice();
    window.LearningBridge.initGrammarBoard();
});





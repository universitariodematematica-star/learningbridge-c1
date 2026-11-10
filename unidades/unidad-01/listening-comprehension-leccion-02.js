(function () {
    "use strict";

    const questions = [
        {
            question: "What cultural metaphor contrasts the conversation with the lived reality of a career transition?",
            options: [
                { text: "Crossing a clearly defined physical border versus wandering without a map through a dense, dark forest.", correct: true },
                { text: "Sailing across the open sea versus climbing a mountain.", correct: false },
                { text: "Building a stone bridge versus flying in an airplane.", correct: false },
                { text: "Passing a formal examination versus writing a book.", correct: false }
            ]
        },
        {
            question: "Why does Lida decide to take up computer graphics?",
            options: [
                { text: "Because her university required her to do so.", correct: false },
                { text: "Because she attended a technical job fair.", correct: false },
                { text: "Because she was fascinated and inspired by cutting-edge animated films.", correct: true },
                { text: "Because she was rejected from the architecture program.", correct: false }
            ]
        },
        {
            question: "What professional field does Jonathan decide on because of his love for animals?",
            options: [
                { text: "Marine biology.", correct: false },
                { text: "Environmental conservation in national parks.", correct: false },
                { text: "Agronomy and animal science.", correct: false },
                { text: "Veterinary medicine.", correct: true }
            ]
        },
        {
            question: "What career change does Magdalena make after beginning her studies?",
            options: [
                { text: "She starts in law and switches to fine arts.", correct: false },
                { text: "She starts in cultural anthropology and switches to medicine.", correct: true },
                { text: "She starts in graphic design and switches to journalism.", correct: false },
                { text: "She starts in biology and switches to social work.", correct: false }
            ]
        },
        {
            question: "According to the conversation, why does Nora have to sign up for a math refresher course?",
            options: [
                { text: "Because she failed the medical school entrance exam.", correct: false },
                { text: "Because she needs math for engineering school and has not used it since secondary school.", correct: true },
                { text: "Because she wants to get an athletic scholarship at university.", correct: false },
                { text: "Because her current employer asked her to.", correct: false }
            ]
        },
        {
            question: "Which institution does Gary decide to apply to because of his passion for environmental conservation?",
            options: [
                { text: "The Environmental Sciences Institute.", correct: false },
                { text: "The Wildlife Center.", correct: true },
                { text: "The School of Dentistry.", correct: false },
                { text: "A medical research laboratory.", correct: false }
            ]
        },
        {
            question: "What grammatical and conceptual difference is explained between apply to and apply for?",
            options: [
                { text: "Apply to is used for commercial jobs, while apply for is used for public universities.", correct: false },
                { text: "Apply to presents an institution as a destination, while apply for refers to a specific position or benefit.", correct: true },
                { text: "Apply to requires the passive voice, while apply for requires the present perfect continuous.", correct: false },
                { text: "There is no difference; both prepositions are interchangeable in every context.", correct: false }
            ]
        },
        {
            question: "Which educational institution was Iris afraid of being rejected by before she was accepted elsewhere?",
            options: [
                { text: "The National Dance Conservatory.", correct: false },
                { text: "The Wright Flight School.", correct: false },
                { text: "The Wright College of Music.", correct: true },
                { text: "The Oaxaca Institute of Arts.", correct: false }
            ]
        },
        {
            question: "What psychological and grammatical effect does the passive voice have in the expression be rejected by?",
            options: [
                { text: "It gives the applicant complete control over the process.", correct: false },
                { text: "It places the applicant in a position of vulnerability and powerlessness in relation to the institution.", correct: true },
                { text: "It completely eliminates the need for a conjugated verb.", correct: false },
                { text: "It turns the action into a continuous and unlimited process.", correct: false }
            ]
        },
        {
            question: "Which program or school were only two students from the class accepted to this year?",
            options: [
                { text: "Law school.", correct: false },
                { text: "Architecture school.", correct: false },
                { text: "Medical school.", correct: true },
                { text: "Flight school.", correct: false }
            ]
        },
        {
            question: "What is Matt's situation regarding flight school?",
            options: [
                { text: "He was rejected and decided to switch to medicine.", correct: false },
                { text: "He has already enrolled and started classes this month.", correct: false },
                { text: "He has been accepted, but he will not officially enroll until next year.", correct: true },
                { text: "He signed up for a preparatory course but dropped out of the program.", correct: false }
            ]
        },
        {
            question: "What does enrolling in represent in the process of a career transition?",
            options: [
                { text: "The first informal step toward trying a hobby.", correct: false },
                { text: "An optional step that requires no formal documentation.", correct: false },
                { text: "The final step of official and legally binding commitment to an institution.", correct: true },
                { text: "An action in the distant past with no present relevance.", correct: false }
            ]
        },
        {
            question: "Which time adverbs commonly accompany the present perfect for recently completed actions?",
            options: [
                { text: "Yesterday, in 2016, last year.", correct: false },
                { text: "Just, recently, lately.", correct: true },
                { text: "Always, every day, usually.", correct: false },
                { text: "Tomorrow, next week, soon.", correct: false }
            ]
        },
        {
            question: "Why is the sentence 'She has applied for the position last week' grammatically incorrect?",
            options: [
                { text: "Because the verb apply cannot take a preposition in the past.", correct: false },
                { text: "Because the specific time expression 'last week' places the action in the finished past, conflicting with the present perfect, which connects the past to the present.", correct: true },
                { text: "Because the auxiliary verb had must be added.", correct: false },
                { text: "Because the present perfect can only be used with stative verbs.", correct: false }
            ]
        },
        {
            question: "How is the essential function of the present perfect defined when narrating life transitions?",
            options: [
                { text: "As a time marker that locks events in the distant past.", correct: false },
                { text: "As a grammatical bridge connecting a past action to the present moment.", correct: true },
                { text: "As a rule used exclusively in formal emails.", correct: false },
                { text: "As a structure used only in hypothetical questions.", correct: false }
            ]
        },
        {
            question: "What aspect of a career transition does the present perfect continuous emphasize?",
            options: [
                { text: "The definite completion and delivery of a final certificate.", correct: false },
                { text: "Ongoing effort, active work, and a process still in progress.", correct: true },
                { text: "Automatic rejection by an academic institution.", correct: false },
                { text: "Complete inactivity after making a career decision.", correct: false }
            ]
        },
        {
            question: "Why should adverbs such as ever, never, already, or yet NOT be used with the present perfect continuous?",
            options: [
                { text: "Because they are adverbs exclusive to the simple past.", correct: false },
                { text: "Because they indicate a finite limit or boundary that conflicts with the continuous nature of the tense.", correct: true },
                { text: "Because they modify only countable nouns.", correct: false },
                { text: "Because they are forbidden in British English.", correct: false }
            ]
        },
        {
            question: "What strict rule is mentioned regarding stative verbs such as know, believe, or understand?",
            options: [
                { text: "They must always be used in the passive voice.", correct: false },
                { text: "They should not be used in continuous tenses; for example, we do not say 'I've been knowing him'.", correct: true },
                { text: "They always require the preposition for.", correct: false },
                { text: "They can only be conjugated in the future tense.", correct: false }
            ]
        },
        {
            question: "Which analogy does the speaker use to explain the difference between continuous verbs and stative verbs?",
            options: [
                { text: "The difference between a car and an airplane.", correct: false },
                { text: "The difference between a treadmill, representing active action, and a photograph, representing a state that either exists or does not.", correct: true },
                { text: "The difference between a printed book and a movie.", correct: false },
                { text: "The difference between a seed and a mature tree.", correct: false }
            ]
        },
        {
            question: "What was Vanessa's original major before she decided to switch to social work?",
            options: [
                { text: "Cultural anthropology.", correct: false },
                { text: "Biology.", correct: true },
                { text: "English literature.", correct: false },
                { text: "Fine arts and design.", correct: false }
            ]
        },
        {
            question: "Which phrase does Vanessa use with her mentor to explain that her decision to leave science was carefully considered?",
            options: [
                { text: "\"I just got bored of science yesterday.\"", correct: false },
                { text: "\"I've given it some thought and decided science just isn't for me.\"", correct: true },
                { text: "\"I was rejected by the science department.\"", correct: false },
                { text: "\"I never liked studying biology.\"", correct: false }
            ]
        },
        {
            question: "In the anecdote about the technology company interviewer, why did the candidate ruin his chances by using the wrong verb tense?",
            options: [
                { text: "Because he said 'I wanted to work here' in the simple past, making his desire sound finished or abandoned.", correct: true },
                { text: "Because he used the present perfect continuous too much instead of the simple future.", correct: false },
                { text: "Because he did not know the difference between apply to and apply for.", correct: false },
                { text: "Because he forgot to mention the name of the university he graduated from.", correct: false }
            ]
        },
        {
            question: "Which conversational strategy or idiom does Vanessa use to ask her mentor for guidance without sounding demanding?",
            options: [
                { text: "\"Steer me in the right direction.\"", correct: true },
                { text: "\"Give me a job right now.\"", correct: false },
                { text: "\"Correct me if I'm wrong, but you owe me a favor.\"", correct: false },
                { text: "\"I haven't decided on anything yet.\"", correct: false }
            ]
        },
        {
            question: "How does Vanessa's mentor respond after hearing her plans for graduate studies in social work?",
            options: [
                { text: "He suggests that she return to biology immediately.", correct: false },
                { text: "He gladly offers to write her a letter of recommendation.", correct: true },
                { text: "He tells her that she must enroll in medical school immediately.", correct: false },
                { text: "He explains that he does not have time to advise her.", correct: false }
            ]
        },
        {
            question: "What conversational strategy is used with the expression 'Thanks for asking...'?",
            options: [
                { text: "To express appreciation for someone's interest in you.", correct: true },
                { text: "To correct someone who makes a grammatical mistake.", correct: false },
                { text: "To refuse to answer a personal question about the future.", correct: false },
                { text: "To give directions to someone who is lost.", correct: false }
            ]
        },
        {
            question: "What is the conversational purpose of the expression 'Correct me if I'm wrong, but...'?",
            options: [
                { text: "To formally apologize for being late.", correct: false },
                { text: "To state what you believe about someone or something cautiously or tentatively.", correct: true },
                { text: "To demand an immediate answer during a job interview.", correct: false },
                { text: "To abruptly end a business conversation.", correct: false }
            ]
        },
        {
            question: "What function does the conversational expression 'As a matter of fact...' serve?",
            options: [
                { text: "To introduce a controversial or unsupported opinion.", correct: false },
                { text: "To present a relevant fact or directly confirm what is being discussed.", correct: true },
                { text: "To ask a mentor for financial assistance.", correct: false },
                { text: "To indicate that a conversation has ended.", correct: false }
            ]
        },
        {
            question: "According to the conversation's conclusion, why is mastering grammar essential during a career transition?",
            options: [
                { text: "Because it allows people to memorize vocabulary lists without understanding their context.", correct: false },
                { text: "Because grammar is not just about correctness; it is also a strategy for controlling the narrative of your own personal journey.", correct: true },
                { text: "Because it guarantees passing international exams without studying.", correct: false },
                { text: "Because it eliminates the need to write cover letters.", correct: false }
            ]
        },
        {
            question: "What linguistic dilemma does the speaker raise at the very end about English grammar rules?",
            options: [
                { text: "That English always requires the simple past when talking about athletic achievements.", correct: false },
                { text: "That by prohibiting continuous forms with verbs such as know or understand, grammar may make us less patient with our own ongoing learning process, forcing us to see knowledge as a completed state, like a photograph.", correct: true },
                { text: "That there are no suitable prepositions for describing career changes in adulthood.", correct: false },
                { text: "That the passive voice should be eliminated from academic contexts.", correct: false }
            ]
        },
        {
            question: "What is the main lesson Vanessa teaches us by getting her mentor to offer a recommendation without directly asking for one?",
            options: [
                { text: "That job interviews should avoid the present perfect.", correct: false },
                { text: "That by framing the timeline correctly and choosing appropriate collocations, you communicate credibility and readiness for the present.", correct: true },
                { text: "That it is better to change careers impulsively without consulting a mentor.", correct: false },
                { text: "That technical vocabulary is more important than attitude and conversational strategies.", correct: false }
            ]
        }
    ];

    function shuffle(items) {
        const result = [...items];

        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }

        return result;
    }

    const container = document.getElementById("lb-comprehension-questions-02");
    const progress = document.getElementById("lb-comprehension-progress-02");

    if (!container || !progress) {
        return;
    }

    const displayedQuestions = shuffle(questions).map(question => ({
        question: question.question,
        options: shuffle(question.options),
        selectedOption: null
    }));

    const evaluateButton = document.getElementById("lb-comprehension-evaluate-02");

    if (!evaluateButton) {
        return;
    }

    let evaluated = false;

    function renderQuestions() {
        displayedQuestions.forEach((question, questionIndex) => {
            const article = document.createElement("article");
            article.className = "lb-practice-question";

            const heading = document.createElement("p");
            heading.className = "lb-practice-sentence";
            heading.textContent = (questionIndex + 1) + ". " + question.question;

            const optionsContainer = document.createElement("div");
            optionsContainer.className = "lb-practice-options";

            const feedback = document.createElement("p");
            feedback.className = "lb-practice-feedback";
            feedback.setAttribute("aria-live", "polite");

            question.options.forEach((option, optionIndex) => {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "lb-option-button";
                button.textContent = String.fromCharCode(65 + optionIndex) + ") " + option.text;

                button.addEventListener("click", function () {
                    if (evaluated) {
                        return;
                    }

                    question.selectedOption = optionIndex;

                    optionsContainer.querySelectorAll("button").forEach(optionButton => {
                        optionButton.classList.remove("lb-option-selected");
                    });

                    button.classList.add("lb-option-selected");
                });

                optionsContainer.appendChild(button);
            });

            article.appendChild(heading);
            article.appendChild(optionsContainer);
            article.appendChild(feedback);

            container.appendChild(article);
        });
    }

    function evaluateQuestions() {
        if (evaluated) {
            return;
        }

        evaluated = true;

        let score = 0;
        let unanswered = 0;

        const questionArticles = container.querySelectorAll(".lb-practice-question");

        displayedQuestions.forEach((question, questionIndex) => {
            const article = questionArticles[questionIndex];
            const buttons = article.querySelectorAll(".lb-option-button");
            const feedback = article.querySelector(".lb-practice-feedback");

            const correctIndex = question.options.findIndex(option => option.correct);
            const correctOption = question.options[correctIndex];

            buttons.forEach(button => {
                button.disabled = true;
            });

            if (question.selectedOption === null) {
                unanswered++;

                feedback.textContent = "Not answered. Correct answer: " + correctOption.text;
                feedback.classList.add("lb-feedback-visible");

                return;
            }

            if (question.options[question.selectedOption].correct) {
                score++;

                buttons[question.selectedOption].classList.add("lb-option-correct");

                feedback.textContent = "Correct!";
            } else {
                buttons[question.selectedOption].classList.add("lb-option-incorrect");

                feedback.textContent = "Correct answer: " + correctOption.text;
            }

            feedback.classList.add("lb-feedback-visible");
        });

        progress.textContent =
            "Your score: " + score + " / " + displayedQuestions.length +
            (unanswered > 0 ? " | Unanswered: " + unanswered : "");

        evaluateButton.disabled = true;
    }

    evaluateButton.addEventListener("click", evaluateQuestions);

    renderQuestions();
})();
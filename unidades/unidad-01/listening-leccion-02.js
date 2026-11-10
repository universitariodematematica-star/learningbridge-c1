const questions = [
    {
        sentence: "Jonathan {blank} a career as a veterinarian because he loves animals.",
        answer: "decided on"
    },
    {
        sentence: "\"So, Vanessa, have you {blank} a career yet?\"",
        answer: "decided on"
    },
    {
        sentence: "After careful reflection, she {blank} leaving science because it just wasn't for her.",
        answer: "decided on"
    },
    {
        sentence: "It took her several weeks of overthinking to {blank} the right graduate program.",
        answer: "decide on"
    },
    {
        sentence: "Lida was so impressed by animated films that she decided to {blank} computer graphics.",
        answer: "take up"
    },
    {
        sentence: "\"Actually, I've been thinking of {blank} social work.\"",
        answer: "taking up"
    },
    {
        sentence: "He decided to {blank} yoga to help calm down his nerves.",
        answer: "take up"
    },
    {
        sentence: "When transitioning to a new phase of life, many people {blank} a new hobby or discipline.",
        answer: "take up"
    },
    {
        sentence: "Gary is interested in environmental conservation, so he {blank} a job at the Wildlife Center.",
        answer: "applied for"
    },
    {
        sentence: "She {blank} a position at the Science Institute last week.",
        answer: "applied for"
    },
    {
        sentence: "She has {blank} a position in a medical research lab.",
        answer: "applied for"
    },
    {
        sentence: "Lately, she has been getting ready to {blank} that new position.",
        answer: "apply for"
    },
    {
        sentence: "\"I hope it's not too late to {blank} dental school.\"",
        answer: "apply to"
    },
    {
        sentence: "Have you ever considered {blank} graduate school?",
        answer: "applying to"
    },
    {
        sentence: "She has {blank} two different graduate programs this year.",
        answer: "applied to"
    },
    {
        sentence: "\"I'm going to {blank} architecture school this year.\"",
        answer: "apply to"
    },
    {
        sentence: "Nora {blank} a refresher course in math before entering engineering school.",
        answer: "signed up for"
    },
    {
        sentence: "We haven't {blank} the professional development course yet.",
        answer: "signed up for"
    },
    {
        sentence: "I still haven't {blank} lifeguard training.",
        answer: "signed up for"
    },
    {
        sentence: "\"My parents won't even let me {blank} motorcycle lessons!\"",
        answer: "sign up for"
    },
    {
        sentence: "Magdalena started out in cultural anthropology but soon {blank} medicine.",
        answer: "switched to"
    },
    {
        sentence: "\"I started out in art, but I'm {blank} graphic design.\"",
        answer: "switching to"
    },
    {
        sentence: "Vanessa started out as a biology major before deciding to {blank} social work.",
        answer: "switch to"
    },
    {
        sentence: "He worked as an English teacher for years before deciding to {blank} a different career.",
        answer: "switch to"
    },
    {
        sentence: "Only two students from our class {blank} medical school this year.",
        answer: "were accepted to"
    },
    {
        sentence: "She has just {blank} a top-notch business school.",
        answer: "been accepted to"
    },
    {
        sentence: "Matt was thrilled when he {blank} flight school.",
        answer: "was accepted into"
    },
    {
        sentence: "Iris couldn't believe she had {blank} the Wright College of Music.",
        answer: "been rejected by"
    },
    {
        sentence: "She was terrified of {blank} her dream school, but luckily she was accepted elsewhere.",
        answer: "being rejected by"
    },
    {
        sentence: "Matt won't officially {blank} flight school until next year.",
        answer: "enroll in"
    }
];




let displayedQuestions = [];

function shuffleQuestions(items) {
    const shuffled = [...items];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

function renderListeningQuestions() {
    const container = document.getElementById("lb-listening-questions-02");

    if (!container) return;

    displayedQuestions = shuffleQuestions(questions);

    container.innerHTML = "";

    displayedQuestions.forEach((question, index) => {
        const article = document.createElement("div");
        article.className = "lb-practice-question";

        const sentence = document.createElement("p");
        sentence.className = "lb-practice-sentence";

        const parts = question.sentence.split("{blank}");

        sentence.append(document.createTextNode((index + 1) + ". " + parts[0]));

        const input = document.createElement("input");
        input.type = "text";
        input.className = "lb-listening-answer-02";
        input.autocomplete = "off";
        input.setAttribute("aria-label", "Answer " + (index + 1));

        sentence.appendChild(input);
        sentence.append(document.createTextNode(parts[1]));

        article.appendChild(sentence);
        container.appendChild(article);
    });
}

renderListeningQuestions();



const evaluateButton = document.getElementById("lb-listening-evaluate-02");
const questionsContainer = document.getElementById("lb-listening-questions-02");
const feedback = document.getElementById("lb-listening-feedback-02");

if (evaluateButton && questionsContainer && feedback) {
    evaluateButton.addEventListener("click", function () {
        let score = 0;
        let unanswered = 0;

        const inputs = questionsContainer.querySelectorAll(".lb-listening-answer-02");

        displayedQuestions.forEach((question, index) => {
            const input = inputs[index];

            const userAnswer = input.value.trim().toLowerCase().replace(/\s+/g, " ");
            const correctAnswer = question.answer.trim().toLowerCase().replace(/\s+/g, " ");

            input.disabled = true;

            const indicator = document.createElement("span");
            indicator.className = "lb-answer-indicator";

            if (userAnswer === correctAnswer) {
                score++;
                indicator.classList.add("lb-answer-check");
                indicator.textContent = "\u2713";
            } else {
                if (userAnswer === "") {
                    unanswered++;
                }

                indicator.classList.add("lb-answer-cross");
                indicator.textContent = "\u2717";
            }

            input.insertAdjacentElement("afterend", indicator);
        });

        feedback.textContent =
            "Your score: " + score + " out of " + displayedQuestions.length + "." +
            (unanswered > 0 ? " Unanswered questions: " + unanswered + "." : "");

        feedback.classList.add("lb-feedback-visible");
        evaluateButton.disabled = true;
    });
}

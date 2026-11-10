(function () {
    "use strict";

    const questions = [
        {
            sentence: "1. In 2016, I (have enrolled in / enrolled in) the computer graphics program.",
            options: ["have enrolled in", "enrolled in"],
            answer: 1
        },
        {
            sentence: "2. I still (haven't been receiving / haven't received) an acceptance letter.",
            options: ["haven't been receiving", "haven't received"],
            answer: 1
        },
        {
            sentence: "3. No one (saw / has seen) Mike lately.",
            options: ["saw", "has seen"],
            answer: 1
        },
        {
            sentence: "4. We (haven't been signing up / haven't signed up) for the professional development course yet.",
            options: ["haven't been signing up", "haven't signed up"],
            answer: 1
        },
        {
            sentence: "5. The class (has started / started) at 9:00 sharp yesterday.",
            options: ["has started", "started"],
            answer: 1
        },
        {
            sentence: "6. Lately, she's (been getting / got) ready to apply for that new position.",
            options: ["been getting", "got"],
            answer: 0
        },
        {
            sentence: "7. The admissions office (has just sent / has just been sending) the acceptance email to all applicants.",
            options: ["has just sent", "has just been sending"],
            answer: 0
        },
        {
            sentence: "8. I (have been preparing / have prepared) for the interview for three weeks, and I am still working on my answers.",
            options: ["have been preparing", "have prepared"],
            answer: 0
        },
        {
            sentence: "9. I (have known / have been knowing) Professor Green since my first semester.",
            options: ["have known", "have been knowing"],
            answer: 0
        },
        {
            sentence: "10. She (visited / has visited) the campus last Friday.",
            options: ["visited", "has visited"],
            answer: 0
        },
        {
            sentence: "11. We (have completed / have been completing) four application forms so far.",
            options: ["have completed", "have been completing"],
            answer: 0
        },
        {
            sentence: "12. I (have already submitted / have already been submitting) my application, so I can relax now.",
            options: ["have already submitted", "have already been submitting"],
            answer: 0
        },
        {
            sentence: "13. He (has owned / has been owning) this apartment since 2020.",
            options: ["has owned", "has been owning"],
            answer: 0
        },
        {
            sentence: "14. They (have been discussing / have discussed) the proposal all morning, and they are still discussing it.",
            options: ["have been discussing", "have discussed"],
            answer: 0
        },
        {
            sentence: "15. She (hasn't replied / didn't reply) to my email yet.",
            options: ["hasn't replied", "didn't reply"],
            answer: 0
        },
        {
            sentence: "16. I (met / have met) the dean two days ago.",
            options: ["met", "have met"],
            answer: 0
        },
        {
            sentence: "17. We (have taken / have been taking) the entrance test twice.",
            options: ["have taken", "have been taking"],
            answer: 0
        },
        {
            sentence: "18. The research team (has been working / has worked) on the project recently, and it is not finished yet.",
            options: ["has been working", "has worked"],
            answer: 0
        },
        {
            sentence: "19. Have you ever (applied / been applying) for a scholarship?",
            options: ["applied", "been applying"],
            answer: 0
        },
        {
            sentence: "20. I (have believed / have been believing) that education can change lives for many years.",
            options: ["have believed", "have been believing"],
            answer: 0
        }
    ];

    const questionsContainer = document.getElementById("lb-grammar-questions-02");
    const evaluateButton = document.getElementById("lb-grammar-evaluate-02");
    const feedback = document.getElementById("lb-grammar-feedback-02");

    if (!questionsContainer || !evaluateButton || !feedback) return;

    questionsContainer.innerHTML = "";

    questions.forEach((question, index) => {
        const article = document.createElement("div");
        article.className = "lb-practice-question";
        article.dataset.question = index;

        const sentence = document.createElement("p");
        sentence.className = "lb-practice-sentence";
        sentence.textContent = question.sentence;

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

            const selectedIndex = selected
                ? Number(selected.dataset.option)
                : -1;

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
                indicator.textContent = "\u2713";
            } else {
                buttons[selectedIndex].classList.add("lb-option-incorrect");
                indicator.classList.add("lb-answer-cross");
                indicator.textContent = "\u2717";
            }

            buttons[selectedIndex].insertAdjacentElement("afterend", indicator);
        });

        feedback.textContent =
            "Your score: " + score + " out of " + questions.length + "." +
            (unanswered > 0
                ? " Unanswered questions: " + unanswered + "."
                : "");

        feedback.classList.add("lb-feedback-visible");
        evaluateButton.disabled = true;
    });
})();

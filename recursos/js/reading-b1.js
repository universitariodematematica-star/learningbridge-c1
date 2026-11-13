const questions = [
    // GROUP 1: LITERAL COMPREHENSION (12)
    {
        question: "Where was the unused room offered by the university located?",
        options: [
            "On the ground floor of the cafeteria",
            "On the second floor of an old building near the library",
            "In the basement of the main university building",
            "On the third floor of the student center"
        ],
        answer: 1
    },
    {
        question: "What furniture was inside the unused room before the students started cleaning it?",
        options: [
            "Four new wooden desks and a glass cabinet",
            "Three broken chairs, two dusty metal shelves, a narrow cupboard, and an old wooden table",
            "Five soft armchairs and three round plastic tables",
            "Two long benches, a whiteboard, and four metal chairs"
        ],
        answer: 1
    },
    {
        question: "Which student on the committee was responsible for managing the budget?",
        options: [
            "Sofia, an architecture student",
            "David, a language student",
            "Ana, a mathematics student",
            "An unnamed student from the student club"
        ],
        answer: 2
    },
    {
        question: "What suggestion was made by a student who used a wheelchair?",
        options: [
            "Buying bright yellow chairs for better visibility",
            "Placing all desks near the main entrance",
            "Leaving wide spaces between the furniture so everyone could move around easily",
            "Installing a soft carpet across the entire floor"
        ],
        answer: 2
    },
    {
        question: "Why did the committee choose a cheaper rectangular table instead of the round table?",
        options: [
            "The round table was too expensive and would take up too much space",
            "The rectangular table was made of glass and looked more modern",
            "The shop owner offered the round table for free",
            "The rectangular table was large enough for forty people"
        ],
        answer: 0
    },
    {
        question: "Which colors did Sofia suggest for the walls to make the room brighter?",
        options: [
            "Dark blue and light grey",
            "Light green and warm white",
            "Bright red and soft orange",
            "Pure black and silver"
        ],
        answer: 1
    },
    {
        question: "What piece of art was donated by a local artist and placed near the entrance?",
        options: [
            "A photograph of Riverside University",
            "A wooden sculpture of a reading lamp",
            "A colorful picture of a traditional Ecuadorian market",
            "A black-and-white painting of the library"
        ],
        answer: 2
    },
    {
        question: "How long did it take the volunteers to complete the work in the room?",
        options: [
            "Two complete weeks",
            "Five consecutive Sundays",
            "Three Saturdays",
            "One single weekend"
        ],
        answer: 2
    },
    {
        question: "Why was the official opening of the room delayed by one day?",
        options: [
            "The painters needed to apply a second coat of paint",
            "A technician had to install additional electrical outlets and check the lights for safety",
            "The furniture shop delivered the wrong desks",
            "The university director was unavailable to inspect the room"
        ],
        answer: 1
    },
    {
        question: "What special activity happened in the study space on Monday and Wednesday afternoons?",
        options: [
            "The student club held language examinations",
            "A volunteer group helped classmates with difficult subjects",
            "The university director gave weekly speeches",
            "A local artist held painting workshops"
        ],
        answer: 1
    },
    {
        question: "How did the university solve the problem when students reported that the room was too warm in the afternoon?",
        options: [
            "By installing a large air conditioner",
            "By opening all the windows permanently",
            "By providing a fan",
            "By moving all desks away from the windows"
        ],
        answer: 2
    },
    {
        question: "What important lesson did the committee learn at the end of the semester?",
        options: [
            "Buying expensive furniture is necessary for a good study space",
            "Planning was just as important as decorating",
            "The room should only be used by mathematics students",
            "Glass cabinets are better than metal shelves for storing heavy books"
        ],
        answer: 1
    },

    // GROUP 2: VOCABULARY IN CONTEXT (8)
    {
        question: "In the reading, what is a cupboard?",
        options: [
            "A large soft seat where two or three people can sit together",
            "A piece of furniture with doors used for storing things",
            "A tall lamp used to illuminate dark corners",
            "A long wooden board placed on top of a desk"
        ],
        answer: 1
    },
    {
        question: "In the reading, what does committee mean?",
        options: [
            "A large group of professors who grade student projects",
            "A class where students learn how to decorate rooms",
            "A small group of people chosen to do a specific task",
            "A commercial company that sells university furniture"
        ],
        answer: 2
    },
    {
        question: "In the reading, what does budget refer to?",
        options: [
            "The total amount of time students spend studying together",
            "The official list of rules for using the study room",
            "The plan for how much money is available and how it will be spent",
            "The number of volunteers who helped clean the building"
        ],
        answer: 2
    },
    {
        question: "In the sentence about the rectangular table, what does practical mean?",
        options: [
            "Very rare and difficult to find in local shops",
            "Useful, suitable, and sensible for a specific purpose",
            "Extremely bright and colorful in design",
            "Made entirely of modern glass and metal"
        ],
        answer: 1
    },
    {
        question: "In the reading, what does donated mean?",
        options: [
            "Gave something for free to help a cause or group",
            "Sold an old object at a very high price",
            "Borrowed an item for a short period of time",
            "Repaired a broken object using basic tools"
        ],
        answer: 0
    },
    {
        question: "In the reading, what are electrical outlets?",
        options: [
            "Small windows that let fresh air into a room",
            "Fixtures on a wall where equipment is plugged in to get electricity",
            "Wooden doors used to separate different study areas",
            "Plastic boxes used to store old books and papers"
        ],
        answer: 1
    },
    {
        question: "In the reading, what does cooperation mean?",
        options: [
            "Working together with others to achieve a shared goal",
            "Studying alone without asking anyone for help",
            "Buying expensive furniture for a university building",
            "Following strict rules without expressing any opinions"
        ],
        answer: 0
    },
    {
        question: "In the reading, what does inclusive mean?",
        options: [
            "Reserved only for students with the highest academic grades",
            "Designed to welcome and be accessible to all kinds of people",
            "Completely silent at all hours of the day",
            "Located far away from the busy parts of campus"
        ],
        answer: 1
    },

    // GROUP 3: INFERENCES AND DEDUCTIONS (10)
    {
        question: "Why did the students decide to ask the university for a room to study in?",
        options: [
            "They wanted a private office reserved only for their committee",
            "Existing campus study options were often overcrowded, noisy, or unavailable",
            "The university library had permanently closed",
            "They were unhappy with the quality of the academic books"
        ],
        answer: 1
    },
    {
        question: "What can be inferred about the student committee's main priority when planning the study space?",
        options: [
            "Making the room look modern for social media photographs",
            "Ensuring the space was functional and adaptable for different learners",
            "Spending as much money as possible",
            "Restricting access to mathematics and architecture students"
        ],
        answer: 1
    },
    {
        question: "Why did the committee choose old metal shelves instead of a modern glass cabinet?",
        options: [
            "The shop owner forced them to buy the metal shelves",
            "The metal shelves were fragile and lighter to carry",
            "They wanted a durable, affordable option and also wanted to reduce waste",
            "Glass cabinets were illegal in university buildings"
        ],
        answer: 2
    },
    {
        question: "What does the wheelchair user's suggestion tell us about the students' needs?",
        options: [
            "All students wanted more furniture in the center of the room",
            "The room needed to be accessible to people with different mobility needs",
            "Students wanted to create a sports area",
            "The students preferred to study outside"
        ],
        answer: 1
    },
    {
        question: "How did the committee handle disagreement among students about the decoration?",
        options: [
            "They ignored all suggestions and chose a black-and-white theme",
            "They kept the walls simple and added a few colorful objects",
            "They cancelled the project",
            "They allowed each student to paint a separate wall"
        ],
        answer: 1
    },
    {
        question: "What does the decision to delay the opening by one day reveal about the committee?",
        options: [
            "They cared more about student safety than meeting the original date",
            "They forgot to organize the painting work",
            "They wanted to postpone their examinations",
            "They planned to charge students for electricity"
        ],
        answer: 0
    },
    {
        question: "What does the committee's response to student feedback show about its management style?",
        options: [
            "It refused to change anything after opening the room",
            "It listened to users and made practical improvements",
            "It asked students to pay for an air conditioner",
            "It closed the room every afternoon"
        ],
        answer: 1
    },
    {
        question: "What can be inferred about the university director's attitude toward the project?",
        options: [
            "She was disappointed because professional designers were not hired",
            "She respected the students' organization and careful use of money",
            "She ordered the students to remove the furniture",
            "She criticized the donated books"
        ],
        answer: 1
    },
    {
        question: "Beyond providing desks and books, what broader benefit did the study space bring to the university?",
        options: [
            "It generated major financial profits",
            "It encouraged cooperation, academic support, and a sense of community",
            "It replaced all regular university classes",
            "It became a place for weekend parties"
        ],
        answer: 1
    },
    {
        question: "What can we understand about the students from the fact that they continued improving the room after it opened?",
        options: [
            "They believed the project was finished and needed no further attention",
            "They were willing to listen, learn, and respond to new needs",
            "They wanted to replace all the furniture",
            "They preferred to close the room during the semester"
        ],
        answer: 1
    },

    // GROUP 4: MAIN IDEAS AND SUPPORTING DETAILS (6)
    {
        question: "What is the main idea of the entire reading passage?",
        options: [
            "A group of students worked together to transform an empty room into an inclusive study space",
            "The university spent a large amount of money on modern furniture",
            "Students preferred studying in noisy cafeterias",
            "An architecture student decorated a luxury room"
        ],
        answer: 0
    },
    {
        question: "Which statement best expresses the main idea of the paragraph about choosing furniture?",
        options: [
            "The committee chose blue chairs because they were Sofia's favorite color",
            "The committee made practical and budget-friendly choices when selecting furniture",
            "Local shop owners refused to sell furniture",
            "Round tables are always better than rectangular tables"
        ],
        answer: 1
    },
    {
        question: "What is the main purpose of the paragraph describing the electrical problem?",
        options: [
            "To describe how volunteers cleaned the windows",
            "To explain how the students solved a safety problem before opening the room",
            "To list the rules for borrowing books",
            "To explain why the director cancelled the project"
        ],
        answer: 1
    },
    {
        question: "Which of the following is a supporting detail rather than a main idea of the project?",
        options: [
            "The students planned a useful study space for different learning needs",
            "A local artist donated a colorful picture of a traditional market",
            "The committee managed a limited budget",
            "The group prioritized accessibility and safety"
        ],
        answer: 1
    },
    {
        question: "Which statement best expresses the main idea of the paragraph about student feedback?",
        options: [
            "The university bought an air conditioner",
            "The room was permanently closed because it was too warm",
            "The committee collected feedback and made practical improvements",
            "Former students returned to teach mathematics classes"
        ],
        answer: 2
    },
    {
        question: "Which statement best summarizes the main conclusion of the text?",
        options: [
            "A study space only needs expensive furniture to be successful",
            "Teamwork and planning helped students turn an unused room into a valuable community space",
            "Students should avoid group projects",
            "University renovation projects always require professional builders"
        ],
        answer: 1
    },

    // GROUP 5: CAUSES, CONSEQUENCES AND PROBLEM SOLVING (8)
    {
        question: "What initial problem caused the students to ask the university for a study room?",
        options: [
            "Students were failing because professors gave too much homework",
            "The library was often full, the cafeteria was noisy, and empty classrooms were not always open",
            "The committee wanted a private office for social events",
            "The university required students to clean an abandoned building"
        ],
        answer: 1
    },
    {
        question: "Why did the committee choose a cheaper rectangular table instead of a large round table?",
        options: [
            "The shop owner refused to deliver the round table",
            "The round table was too expensive and would take up too much space",
            "University rules required rectangular tables",
            "The rectangular table was made of glass"
        ],
        answer: 1
    },
    {
        question: "What were two benefits of repainting the old metal shelves instead of buying a glass cabinet?",
        options: [
            "They avoided a fragile cabinet, saved money, and reduced waste",
            "They avoided carrying furniture upstairs and painting the walls",
            "They avoided asking the director for permission",
            "They avoided buying books and desks"
        ],
        answer: 0
    },
    {
        question: "How did the committee solve the disagreement about the room's decoration?",
        options: [
            "They painted half the walls black and the other half yellow",
            "They kept the walls simple and used a few colorful objects",
            "They hired an interior designer",
            "They cancelled the decoration plan"
        ],
        answer: 1
    },
    {
        question: "What safety problem did the students identify before opening the room, and how was it solved?",
        options: [
            "The chairs were broken, so they bought twenty new armchairs",
            "Cables could cross the floor, so a technician installed additional electrical outlets",
            "The room had no lights, so students brought candles",
            "The door lock was old, so the entrance was replaced"
        ],
        answer: 1
    },
    {
        question: "What was the consequence of fixing the electrical safety problem?",
        options: [
            "The project ran out of money",
            "The official opening was delayed by one day",
            "The director cancelled the project",
            "Students were banned from charging laptops"
        ],
        answer: 1
    },
    {
        question: "How did the committee respond when students requested more dictionaries and science books?",
        options: [
            "They forced every student to donate two books",
            "They created a donation list and received books from teachers and former students",
            "They spent all the remaining money on textbooks",
            "They borrowed books without permission"
        ],
        answer: 1
    },
    {
        question: "What positive result came from the volunteer study sessions on Monday and Wednesday afternoons?",
        options: [
            "Students received help from classmates with difficult subjects",
            "The committee started charging fees for tutoring",
            "The university replaced all regular classes",
            "Students no longer needed examinations"
        ],
        answer: 0
    },

    // GROUP 6: PURPOSE, OPINIONS AND INTERPRETATION (6)
    {
        question: "What is the main purpose of the author in telling the story of the study space?",
        options: [
            "To explain why old university buildings should be demolished",
            "To show how cooperation and planning can transform an unused space into a valuable place for students",
            "To explain how to start a furniture business",
            "To prove that professors should manage all student rooms"
        ],
        answer: 1
    },
    {
        question: "What was the student committee's attitude toward the design of the room?",
        options: [
            "They wanted a luxury office that students could not use",
            "They believed the room should be practical and useful for different learners, not just attractive",
            "They wanted to restrict access to students with high grades",
            "They preferred only expensive, brand-new furniture"
        ],
        answer: 1
    },
    {
        question: "What opinion did the university director express when she inspected the study room?",
        options: [
            "She was disappointed because the room had no expensive decorations",
            "She was pleased with the practical design and emphasized organization, respect, and cooperation",
            "She demanded that all second-hand furniture be removed",
            "She suggested that only mathematics students should use the room"
        ],
        answer: 1
    },
    {
        question: "What core value did the students demonstrate when they delayed the room's opening by one day?",
        options: [
            "They prioritized personal convenience over university rules",
            "They showed that safety was more important than meeting the original date",
            "They believed electrical maintenance was unnecessary",
            "They valued decoration more than equipment"
        ],
        answer: 1
    },
    {
        question: "According to the committee's reflection at the end of the semester, what makes a study space truly inclusive?",
        options: [
            "Buying attractive furniture from expensive stores",
            "Ensuring that people can enter, move around safely, and use the available resources",
            "Keeping the room locked for most students",
            "Painting every wall with bright colors"
        ],
        answer: 1
    },
    {
        question: "What general message does the final paragraph convey about the completed study space?",
        options: [
            "A room must be perfect before students can use it",
            "Cooperation can turn a neglected area into a meaningful place where students feel connected",
            "Students should study alone at home",
            "Transforming a room is only useful if it makes money"
        ],
        answer: 1
    }
];

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const quizSection = document.getElementById("quiz-section");

let currentQuestion = 0;
let correctAnswers = 0;
let answered = false;

function showQuestion() {
    answered = false;

    const item = questions[currentQuestion];
    const questionNumber = currentQuestion + 1;
    const progress = (questionNumber / questions.length) * 100;

    quizContainer.innerHTML = `
        <div class="quiz-progress">
            <div class="quiz-progress-info">
                <span>Question ${questionNumber} of ${questions.length}</span>
                <span>${Math.round(progress)}% completed</span>
            </div>
            <div class="quiz-progress-track">
                <div class="quiz-progress-fill" style="width: ${progress}%"></div>
            </div>
        </div>

        <h2 class="question-title">${item.question}</h2>

        <div class="answer-options">
            ${item.options.map((option, index) => `
                <label class="answer-option" data-index="${index}">
                    <input type="radio" name="answer" value="${index}">
                    <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                    <span class="option-text">${option}</span>
                </label>
            `).join("")}
        </div>

        <div class="quiz-navigation">
            <button type="button" id="next-question" disabled>
                Next Question
            </button>
        </div>
    `;

    const radioButtons = quizContainer.querySelectorAll('input[name="answer"]');
    const nextButton = document.getElementById("next-question");

    radioButtons.forEach(radio => {
        radio.addEventListener("change", () => {
            if (answered) return;

            answered = true;

            const selectedAnswer = Number(radio.value);

            if (selectedAnswer === item.answer) {
                correctAnswers++;
            }

            radioButtons.forEach(button => {
                button.disabled = true;
            });

            radio.closest(".answer-option").classList.add("selected");

            nextButton.disabled = false;

            if (currentQuestion === questions.length - 1) {
                nextButton.textContent = "Finish Quiz";
            }
        });
    });

    nextButton.addEventListener("click", () => {
        if (!answered) return;

        currentQuestion++;

        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    });
}

function showResults() {
    quizSection.hidden = true;
    resultContainer.hidden = false;

    const totalQuestions = questions.length;
    const grade = Math.trunc((correctAnswers / totalQuestions) * 100) / 100 * 10;
    const finalGrade = Math.trunc(grade * 100) / 100;

    resultContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p class="result-message">You have finished the reading comprehension exercise.</p>

        <div class="grade-display">
            <span class="grade-number">${finalGrade.toFixed(2)}</span>
            <span class="grade-scale">/ 10</span>
        </div>

        <div class="result-details">
            <p><strong>Correct answers:</strong> ${correctAnswers}</p>
            <p><strong>Incorrect answers:</strong> ${totalQuestions - correctAnswers}</p>
            <p><strong>Total questions:</strong> ${totalQuestions}</p>
        </div>

        <button type="button" id="restart-quiz">Try Again</button>
    `;

    document.getElementById("restart-quiz").addEventListener("click", () => {
        currentQuestion = 0;
        correctAnswers = 0;
        answered = false;

        resultContainer.hidden = true;
        quizSection.hidden = false;

        showQuestion();

        window.scrollTo({ top: quizSection.offsetTop - 20, behavior: "smooth" });
    });

    window.scrollTo({ top: resultContainer.offsetTop - 20, behavior: "smooth" });
}

if (questions.length !== 50) {
    console.error("Error: The question bank must contain exactly 50 questions.");
} else {
    showQuestion();
}

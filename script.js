```javascript
/* =========================
   MODO ESCURO
========================= */

const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkMode.textContent = "☀️";
    } else {
        darkMode.textContent = "🌙";
    }

});


/* =========================
   ELEMENTOS
========================= */

const message = document.getElementById("gameMessage");
const quizGame = document.getElementById("quizGame");
const clickGame = document.getElementById("clickGame");
const trueFalseGame = document.getElementById("trueFalseGame");


function hideGames() {

    message.classList.add("hidden");

    quizGame.classList.add("hidden");

    clickGame.classList.add("hidden");

    trueFalseGame.classList.add("hidden");
}


/* =========================
   QUIZ
========================= */

function startQuiz() {

    hideGames();

    quizGame.classList.remove("hidden");

    let score = 0;

    const questions = [
        {
            question: "Qual linguagem é utilizada para estruturar páginas web?",
            options: ["HTML", "CSS", "JavaScript"],
            answer: "HTML"
        },

        {
            question: "Qual linguagem é utilizada para estilizar páginas?",
            options: ["HTML", "CSS", "Python"],
            answer: "CSS"
        },

        {
            question: "Qual linguagem adiciona interatividade ao site?",
            options: ["JavaScript", "HTML", "CSS"],
            answer: "JavaScript"
        }
    ];

    let current = 0;

    function showQuestion() {

        const q = questions[current];

        quizGame.innerHTML = `
            <h2>🧠 ${q.question}</h2>

            <div class="quiz-options">
                ${q.options.map(option => `
                    <button onclick="answerQuiz('${option}')">
                        ${option}
                    </button>
                `).join("")}
            </div>

            <p>Questão ${current + 1} de ${questions.length}</p>
        `;
    }

    window.answerQuiz = function(answer) {

        if (answer === questions[current].answer) {
            score++;
        }

        current++;

        if (current < questions.length) {

            showQuestion();

        } else {

            quizGame.innerHTML = `
                <h2>🏆 Quiz finalizado!</h2>

                <p>
                    Você acertou
                    <strong>${score}</strong>
                    de
                    <strong>${questions.length}</strong>
                    questões.
                </p>

                <button onclick="startQuiz()">
                    Jogar novamente
                </button>
            `;
        }
    };

    showQuestion();
}


/* =========================
   DESAFIO DE CLIQUES
========================= */

function startClickGame() {

    hideGames();

    clickGame.classList.remove("hidden");

    let clicks = 0;

    let time = 10;

    clickGame.innerHTML = `
        <h2>🎯 Desafio de Cliques</h2>

        <p>
            Clique o máximo possível em 10 segundos!
        </p>

        <h3 id="timer">Tempo: 10s</h3>

        <h3 id="clicks">
            Cliques: 0
        </h3>

        <button id="clickButton">
            CLIQUE!
        </button>
    `;

    const button = document.getElementById("clickButton");

    const counter = document.getElementById("clicks");

    const timer = document.getElementById("timer");

    button.addEventListener("click", () => {

        clicks++;

        counter.textContent = `Cliques: ${clicks}`;

    });


    const interval = setInterval(() => {

        time--;

        timer.textContent = `Tempo: ${time}s`;

        if (time <= 0) {

            clearInterval(interval);

            button.disabled = true;

            timer.textContent = "⏰ Tempo encerrado!";

            button.textContent = "Fim!";

        }

    }, 1000);

}


/* =========================
   VERDADEIRO OU FALSO
========================= */

function startTrueFalse() {

    hideGames();

    trueFalseGame.classList.remove("hidden");

    let score = 0;

    let current = 0;

    const questions = [

        {
            text: "HTML é uma linguagem de marcação.",
            answer: true
        },

        {
            text: "CSS é utilizado para criar bancos de dados.",
            answer: false
        },

        {
            text: "JavaScript pode adicionar interatividade a uma página.",
            answer: true
        }

    ];


    function showQuestion() {

        const q = questions[current];

        trueFalseGame.innerHTML = `

            <h2>🃏 Verdadeiro ou Falso</h2>

            <p>
                ${q.text}
            </p>

            <div class="quiz-options">

                <button onclick="answerTrueFalse(true)">
                    ✅ Verdadeiro
                </button>

                <button onclick="answerTrueFalse(false)">
                    ❌ Falso
                </button>

            </div>

            <small>
                Questão ${current + 1} de ${questions.length}
            </small>

        `;
    }


    window.answerTrueFalse = function(answer) {

        if (answer === questions[current].answer) {
            score++;
        }

        current++;

        if (current < questions.length) {

            showQuestion();

        } else {

            trueFalseGame.innerHTML = `

                <h2>🏆 Resultado</h2>

                <p>
                    Você acertou
                    <strong>${score}</strong>
                    de
                    <strong>${questions.length}</strong>.
                </p>

                <button onclick="startTrueFalse()">
                    Jogar novamente
                </button>

            `;
        }

    };


    showQuestion();

}
```

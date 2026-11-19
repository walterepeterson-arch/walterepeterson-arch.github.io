
/* =====================================================
   AIRLINE CORNER - QUIZ SYSTEM
   Uses the existing training-question-bank.js
   ===================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "airlineCornerQuizProgress";

  let allQuestions = [];
  let questions = [];
  let currentQuestion = 0;
  let score = 0;
  let answered = false;
  let selectedLevel = "mixed";
  let selectedCount = "10";

  let progress = {
    attempts: 0,
    bestScore: 0,
    lastScore: 0
  };

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) {
      progress = { ...progress, ...saved };
    }
  } catch (error) {
    console.warn("Quiz progress could not be loaded.");
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.warn("Quiz progress could not be saved.");
    }
  }

  function createStyles() {
    if (document.getElementById("airlineQuizStyles")) return;

    const style = document.createElement("style");
    style.id = "airlineQuizStyles";

    style.textContent = `
      .ac-quiz-wrap {
        background: #fff;
        border: 1px solid #dce4ed;
        border-radius: 12px;
        padding: 25px;
        box-shadow: 0 3px 12px rgba(20,45,70,.05);
      }

      .ac-quiz-intro {
        margin-bottom: 22px;
      }

      .ac-quiz-intro h3 {
        color: #102b46;
        margin-bottom: 8px;
      }

      .ac-quiz-intro p {
        color: #687789;
        font-size: 14px;
      }

      .ac-quiz-settings {
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(180px,1fr));
        gap: 16px;
        margin: 22px 0;
      }

      .ac-quiz-settings label {
        display: block;
        font-weight: bold;
        color: #102b46;
        margin-bottom: 7px;
        font-size: 14px;
      }

      .ac-quiz-settings select {
        width: 100%;
        padding: 12px;
        border: 1px solid #dce4ed;
        border-radius: 6px;
        background: white;
        font-size: 15px;
      }

      .ac-quiz-button {
        border: none;
        border-radius: 6px;
        padding: 12px 20px;
        background: #102b46;
        color: white;
        font-weight: bold;
        cursor: pointer;
        margin: 5px 5px 5px 0;
      }

      .ac-quiz-button.gold {
        background: #d5a642;
        color: #172b40;
      }

      .ac-quiz-button:disabled {
        opacity: .55;
        cursor: not-allowed;
      }

      .ac-quiz-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(120px,1fr));
        gap: 12px;
        margin: 20px 0;
      }

      .ac-quiz-stat {
        background: #f3f6fa;
        padding: 15px;
        border-radius: 8px;
        text-align: center;
      }

      .ac-quiz-stat strong {
        display: block;
        font-size: 25px;
        color: #1769aa;
      }

      .ac-quiz-stat span {
        font-size: 12px;
        color: #687789;
      }

      .ac-quiz-progress {
        height: 9px;
        background: #e6edf4;
        border-radius: 10px;
        overflow: hidden;
        margin: 12px 0 22px;
      }

      .ac-quiz-progress-fill {
        height: 100%;
        width: 0;
        background: #1769aa;
        transition: width .3s;
      }

      .ac-quiz-level {
        color: #1769aa;
        font-size: 12px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .ac-quiz-question {
        color: #102b46;
        font-size: 21px;
        line-height: 1.5;
        margin: 12px 0 20px;
      }

      .ac-quiz-choice {
        display: block;
        width: 100%;
        text-align: left;
        padding: 15px;
        margin: 10px 0;
        background: white;
        border: 1px solid #dce4ed;
        border-radius: 7px;
        cursor: pointer;
        font-size: 15px;
        color: #253447;
      }

      .ac-quiz-choice:hover:not(:disabled) {
        background: #eaf3fb;
        border-color: #1769aa;
      }

      .ac-quiz-choice:disabled {
        cursor: default;
        opacity: 1;
      }

      .ac-quiz-choice.correct {
        background: #e8f6ed;
        border: 2px solid #26834a;
        color: #155b30;
      }

      .ac-quiz-choice.wrong {
        background: #fff0ef;
        border: 2px solid #c63d36;
        color: #8c2520;
      }

      .ac-quiz-feedback {
        padding: 15px;
        margin: 18px 0;
        border-radius: 7px;
        background: #f3f6fa;
        line-height: 1.6;
      }

      .ac-quiz-feedback.correct {
        background: #e8f6ed;
        color: #155b30;
      }

      .ac-quiz-feedback.wrong {
        background: #fff0ef;
        color: #8c2520;
      }

      .ac-quiz-result {
        text-align: center;
        padding: 25px 10px;
      }

      .ac-quiz-result h3 {
        color: #102b46;
        font-size: 26px;
        margin-bottom: 12px;
      }

      .ac-quiz-result .big-score {
        color: #1769aa;
        font-size: 48px;
        font-weight: bold;
        margin: 15px 0;
      }

      .ac-quiz-small {
        color: #687789;
        font-size: 13px;
        margin-top: 12px;
      }

      @media(max-width:600px) {
        .ac-quiz-wrap { padding: 16px; }
        .ac-quiz-question { font-size: 18px; }
      }
    `;

    document.head.appendChild(style);
  }

  function makeElement(tag, className, text) {
    const element = document.createElement(tag);

    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;

    return element;
  }

  function addOption(parent, value, label) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    parent.appendChild(option);
  }

  function renderQuiz() {
    const section = document.getElementById("quiz");
    if (!section) return;

    createStyles();

    allQuestions = Array.isArray(window.AIRLINE_QUESTION_BANK)
      ? window.AIRLINE_QUESTION_BANK
      : [];

    section.innerHTML = "";

    const heading = makeElement("div", "section-heading");
    heading.appendChild(makeElement("h2", "", "Knowledge Check & Quiz"));
    heading.appendChild(makeElement(
      "p",
      "",
      "Test your understanding of airline travel and passenger services."
    ));

    section.appendChild(heading);

    const wrap = makeElement("div", "ac-quiz-wrap");

    const intro = makeElement("div", "ac-quiz-intro");
    intro.appendChild(makeElement("h3", "", "Airline Corner Training Quiz"));
    intro.appendChild(makeElement(
      "p",
      "",
      "Choose your difficulty level and begin your assessment. Read each question carefully before selecting an answer."
    ));

    wrap.appendChild(intro);

    if (!allQuestions.length) {
      wrap.appendChild(makeElement(
        "p",
        "ac-quiz-feedback wrong",
        "Question bank not found. Please check training-question-bank.js."
      ));
      section.appendChild(wrap);
      return;
    }

    const stats = makeElement("div", "ac-quiz-stats");

    const statData = [
      ["19", "Available Questions"],
      [String(progress.attempts), "Attempts"],
      [progress.bestScore + "%", "Best Score"]
    ];

    statData.forEach(function (item) {
      const box = makeElement("div", "ac-quiz-stat");
      box.appendChild(makeElement("strong", "", item[0]));
      box.appendChild(makeElement("span", "", item[1]));
      stats.appendChild(box);
    });

    wrap.appendChild(stats);

    const settings = makeElement("div", "ac-quiz-settings");

    const levelBox = document.createElement("div");
    const levelLabel = makeElement("label", "", "Difficulty Level");
    const levelSelect = document.createElement("select");
    levelSelect.id = "acQuizLevel";

    addOption(levelSelect, "mixed", "Mixed Practice");
    addOption(levelSelect, "beginner", "Beginner");
    addOption(levelSelect, "intermediate", "Intermediate");
    addOption(levelSelect, "advanced", "Advanced");

    levelBox.appendChild(levelLabel);
    levelBox.appendChild(levelSelect);

    const countBox = document.createElement("div");
    const countLabel = makeElement("label", "", "Number of Questions");
    const countSelect = document.createElement("select");
    countSelect.id = "acQuizCount";

    addOption(countSelect, "5", "5 Questions");
    addOption(countSelect, "10", "10 Questions");
    addOption(countSelect, "all", "All Available Questions");

    countBox.appendChild(countLabel);
    countBox.appendChild(countSelect);

    settings.appendChild(levelBox);
    settings.appendChild(countBox);
    wrap.appendChild(settings);

    const startButton = makeElement(
      "button",
      "ac-quiz-button gold",
      "Start Quiz"
    );
    startButton.type = "button";
    startButton.addEventListener("click", startQuiz);

    wrap.appendChild(startButton);

    const quizArea = makeElement("div");
    quizArea.id = "acQuizArea";
    quizArea.hidden = true;
    wrap.appendChild(quizArea);

    section.appendChild(wrap);
  }

  function startQuiz() {
    const levelSelect = document.getElementById("acQuizLevel");
    const countSelect = document.getElementById("acQuizCount");
    const area = document.getElementById("acQuizArea");

    selectedLevel = levelSelect.value;
    selectedCount = countSelect.value;

    let pool = allQuestions.filter(function (question) {
      return selectedLevel === "mixed" || question.l === selectedLevel;
    });

    pool = pool.slice().sort(function () {
      return Math.random() - 0.5;
    });

    const requestedCount = selectedCount === "all"
      ? pool.length
      : Number(selectedCount);

    questions = pool.slice(0, requestedCount);

    if (!questions.length) {
      area.hidden = false;
      area.textContent = "No questions are available for this level.";
      return;
    }

    currentQuestion = 0;
    score = 0;
    answered = false;

    area.hidden = false;
    showQuestion();
  }

  function showQuestion() {
     answered = false;
    const area = document.getElementById("acQuizArea");
    const question = questions[currentQuestion];

    area.innerHTML = "";

    const count = makeElement(
      "div",
      "ac-quiz-level",
      "QUESTION " + (currentQuestion + 1) + " OF " + questions.length
    );

    area.appendChild(count);

    const track = makeElement("div", "ac-quiz-progress");
    const fill = makeElement("div", "ac-quiz-progress-fill");

    fill.style.width =
      (currentQuestion / questions.length * 100) + "%";

    track.appendChild(fill);
    area.appendChild(track);

    const levelNames = {
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced"
    };

    area.appendChild(makeElement(
      "div",
      "ac-quiz-small",
      "Level: " + (levelNames[question.l] || question.l)
    ));

    area.appendChild(makeElement(
      "h3",
      "ac-quiz-question",
      question.q
    ));

    const choices = makeElement("div", "ac-quiz-choices");

    question.a.forEach(function (answer, index) {
      const button = makeElement(
        "button",
        "ac-quiz-choice",
        String.fromCharCode(65 + index) + ". " + answer
      );

      button.type = "button";

      button.addEventListener("click", function () {
        answerQuestion(index);
      });

      choices.appendChild(button);
    });

    area.appendChild(choices);

    const feedback = makeElement("div", "ac-quiz-feedback");
    feedback.id = "acQuizFeedback";
    feedback.hidden = true;
    area.appendChild(feedback);

    const nextButton = makeElement(
      "button",
      "ac-quiz-button gold",
      "Next Question"
    );

    nextButton.id = "acQuizNext";
    nextButton.hidden = true;
    nextButton.type = "button";
    nextButton.addEventListener("click", nextQuestion);

    area.appendChild(nextButton);
  }

  function answerQuestion(selectedIndex) {
    if (answered) return;

    answered = true;

    const question = questions[currentQuestion];
    const correctIndex = question.c;
    const buttons = document.querySelectorAll(".ac-quiz-choice");

    buttons.forEach(function (button, index) {
      button.disabled = true;

      if (index === correctIndex) {
        button.classList.add("correct");
      } else if (index === selectedIndex) {
        button.classList.add("wrong");
      }
    });

    const feedback = document.getElementById("acQuizFeedback");
    feedback.hidden = false;

    if (selectedIndex === correctIndex) {
      score++;
      feedback.className = "ac-quiz-feedback correct";
      feedback.textContent = "Correct! " + question.e;
    } else {
      feedback.className = "ac-quiz-feedback wrong";
      feedback.textContent =
        "Incorrect. The correct answer is: " +
        question.a[correctIndex] + ". " + question.e;
    }

    const nextButton = document.getElementById("acQuizNext");
    nextButton.hidden = false;

    nextButton.textContent =
      currentQuestion === questions.length - 1
        ? "View Results"
        : "Next Question";
  }

  function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }

  function showResults() {
    const area = document.getElementById("acQuizArea");
    const percentage = Math.round((score / questions.length) * 100);

    progress.attempts++;
    progress.lastScore = percentage;
    progress.bestScore = Math.max(progress.bestScore, percentage);

    saveProgress();

    area.innerHTML = "";

    const result = makeElement("div", "ac-quiz-result");

    result.appendChild(makeElement("h3", "", "Quiz Completed!"));

    result.appendChild(makeElement(
      "p",
      "",
      "You have completed your Airline Corner knowledge assessment."
    ));

    result.appendChild(makeElement(
      "div",
      "big-score",
      percentage + "%"
    ));

    result.appendChild(makeElement(
      "h3",
      "",
      score + " out of " + questions.length + " correct"
    ));

    let message = "Keep practising. Review the handbook and try again.";

    if (percentage >= 80) {
      message = "Excellent work! You have demonstrated strong knowledge.";
    } else if (percentage >= 60) {
      message = "Good effort! A little more revision will help you improve.";
    }

    result.appendChild(makeElement("p", "", message));

    const best = makeElement(
      "p",
      "ac-quiz-small",
      "Your best score: " + progress.bestScore + "%"
    );

    result.appendChild(best);

    const retry = makeElement(
      "button",
      "ac-quiz-button gold",
      "Try Again"
    );

    retry.type = "button";
    retry.addEventListener("click", renderQuiz);

    result.appendChild(retry);

    const review = makeElement(
      "button",
      "ac-quiz-button",
      "Choose Another Level"
    );

    review.type = "button";
    review.addEventListener("click", renderQuiz);

    result.appendChild(review);

    area.appendChild(result);

    const stats = document.querySelector(".ac-quiz-stats");

    if (stats) {
      stats.children[1].querySelector("strong").textContent =
        progress.attempts;

      stats.children[2].querySelector("strong").textContent =
        progress.bestScore + "%";
    }
  }

  document.addEventListener("DOMContentLoaded", renderQuiz);

})();

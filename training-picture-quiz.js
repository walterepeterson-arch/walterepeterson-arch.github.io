
/* =========================================================
   AIRLINE CORNER - AIRLINE PICTURE QUIZ
   Separate picture quiz. Does not replace the main quiz.
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_KEY = "airlineCornerPictureQuiz";
  const PASS_MARK = 70;

  const questions = [
    {
      airline: "Air Canada",
      image: "https://www.google.com/s2/favicons?domain=aircanada.com&sz=256",
      options: ["Air Canada", "Air India", "Lufthansa", "United Airlines"],
      answer: "Air Canada",
      fact: "Air Canada is Canada's largest airline. Its IATA airline code is AC."
    },
    {
      airline: "American Airlines",
      image: "https://www.google.com/s2/favicons?domain=aa.com&sz=256",
      options: ["Delta Air Lines", "American Airlines", "British Airways", "WestJet"],
      answer: "American Airlines",
      fact: "American Airlines uses the IATA airline code AA."
    },
    {
      airline: "Delta Air Lines",
      image: "https://www.google.com/s2/favicons?domain=delta.com&sz=256",
      options: ["United Airlines", "Air France", "Delta Air Lines", "KLM"],
      answer: "Delta Air Lines",
      fact: "Delta Air Lines uses the IATA airline code DL."
    },
    {
      airline: "United Airlines",
      image: "https://www.google.com/s2/favicons?domain=united.com&sz=256",
      options: ["United Airlines", "American Airlines", "Air Canada", "Emirates"],
      answer: "United Airlines",
      fact: "United Airlines uses the IATA airline code UA."
    },
    {
      airline: "WestJet",
      image: "https://www.google.com/s2/favicons?domain=westjet.com&sz=256",
      options: ["Air Canada", "WestJet", "Alaska Airlines", "JetBlue"],
      answer: "WestJet",
      fact: "WestJet is a Canadian airline headquartered in Calgary. Its IATA code is WS."
    },
    {
      airline: "Air India",
      image: "https://www.google.com/s2/favicons?domain=airindia.com&sz=256",
      options: ["Singapore Airlines", "Air India", "Qatar Airways", "Etihad Airways"],
      answer: "Air India",
      fact: "Air India uses the IATA airline code AI."
    }
  ];

  let quizQuestions = [];
  let current = 0;
  let score = 0;
  let locked = false;

  let savedProgress = {
    attempts: 0,
    bestScore: 0,
    lastScore: 0
  };

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) {
      savedProgress = Object.assign(savedProgress, saved);
    }
  } catch (error) {
    console.warn("Picture quiz progress could not be loaded.");
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedProgress));
    } catch (error) {
      console.warn("Picture quiz progress could not be saved.");
    }
  }

  function addStyles() {
    if (document.getElementById("acPictureQuizStyles")) return;

    const style = document.createElement("style");
    style.id = "acPictureQuizStyles";

    style.textContent = `
      .ac-picture-card {
        margin-top: 25px;
        padding: 25px;
        background: #ffffff;
        border: 1px solid #dce4ed;
        border-radius: 12px;
        box-shadow: 0 3px 12px rgba(20,45,70,.05);
      }

      .ac-picture-card h3 {
        color: #102b46;
        margin-bottom: 8px;
      }

      .ac-picture-card p {
        color: #687789;
      }

      .ac-picture-stats {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 18px 0;
      }

      .ac-picture-stat {
        flex: 1;
        min-width: 110px;
        padding: 13px;
        background: #f3f6fa;
        border-radius: 8px;
        text-align: center;
      }

      .ac-picture-stat strong {
        display: block;
        color: #1769aa;
        font-size: 23px;
      }

      .ac-picture-stat span {
        color: #687789;
        font-size: 12px;
      }

      .ac-picture-question {
        margin-top: 22px;
        padding: 20px;
        background: #f7f9fc;
        border-radius: 10px;
        text-align: center;
      }

      .ac-picture-image {
        width: 150px;
        height: 150px;
        object-fit: contain;
        padding: 15px;
        margin: 18px auto;
        background: white;
        border: 1px solid #dce4ed;
        border-radius: 12px;
        display: block;
      }

      .ac-picture-options {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
        margin-top: 20px;
      }

      .ac-picture-option {
        padding: 14px 10px;
        border: 1px solid #dce4ed;
        border-radius: 7px;
        background: white;
        color: #253447;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
      }

      .ac-picture-option:hover:not(:disabled) {
        background: #eaf3fb;
        border-color: #1769aa;
      }

      .ac-picture-option:disabled {
        cursor: default;
        opacity: 1;
      }

      .ac-picture-option.correct {
        background: #e8f6ed;
        border: 2px solid #26834a;
        color: #155b30;
      }

      .ac-picture-option.wrong {
        background: #fff0ef;
        border: 2px solid #c63d36;
        color: #8c2520;
      }

      .ac-picture-feedback {
        margin-top: 18px;
        padding: 15px;
        border-radius: 8px;
        line-height: 1.6;
      }

      .ac-picture-feedback.correct {
        background: #e8f6ed;
        color: #155b30;
      }

      .ac-picture-feedback.wrong {
        background: #fff0ef;
        color: #8c2520;
      }

      .ac-picture-button {
        margin: 18px 8px 0 0;
        padding: 12px 20px;
        border: 0;
        border-radius: 6px;
        background: #102b46;
        color: white;
        font-weight: bold;
        cursor: pointer;
      }

      .ac-picture-button.gold {
        background: #d5a642;
        color: #172b40;
      }

      .ac-picture-progress {
        height: 8px;
        margin: 15px 0;
        background: #e6edf4;
        border-radius: 10px;
        overflow: hidden;
      }

      .ac-picture-progress-fill {
        height: 100%;
        width: 0;
        background: #1769aa;
        transition: width .3s;
      }

      .ac-picture-result {
        padding: 25px 10px;
        text-align: center;
      }

      .ac-picture-result .score {
        margin: 15px 0;
        color: #1769aa;
        font-size: 44px;
        font-weight: bold;
      }

      @media(max-width: 550px) {
        .ac-picture-card { padding: 16px; }
        .ac-picture-options { grid-template-columns: 1fr; }
        .ac-picture-image { width: 125px; height: 125px; }
      }
    `;

    document.head.appendChild(style);
  }

  function element(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  }

  function createPictureQuiz(section) {
    if (!section || section.querySelector("#acPictureQuiz")) return;

    addStyles();

    const card = element("div", "ac-picture-card");
    card.id = "acPictureQuiz";

    card.appendChild(element("h3", "", "Airline Picture Quiz"));
    card.appendChild(element(
      "p",
      "",
      "Identify the airline from its logo. Choose the correct airline name to earn points."
    ));

    const stats = element("div", "ac-picture-stats");

    [
      [String(questions.length), "Picture Questions"],
      [String(savedProgress.attempts), "Attempts"],
      [savedProgress.bestScore + "%", "Best Score"]
    ].forEach(function (item) {
      const box = element("div", "ac-picture-stat");
      box.appendChild(element("strong", "", item[0]));
      box.appendChild(element("span", "", item[1]));
      stats.appendChild(box);
    });

    card.appendChild(stats);

    const start = element("button", "ac-picture-button gold", "Start Picture Quiz");
    start.type = "button";
    start.addEventListener("click", startQuiz);
    card.appendChild(start);

    const area = element("div");
    area.id = "acPictureArea";
    card.appendChild(area);

    section.appendChild(card);
  }

  function startQuiz() {
    quizQuestions = questions.slice().sort(function () {
      return Math.random() - 0.5;
    });

    current = 0;
    score = 0;
    locked = false;

    showQuestion();
  }

  function showQuestion() {
    locked = false;

    const area = document.getElementById("acPictureArea");
    const q = quizQuestions[current];

    area.innerHTML = "";

    area.appendChild(element(
      "p",
      "ac-picture-small",
      "QUESTION " + (current + 1) + " OF " + quizQuestions.length
    ));

    const track = element("div", "ac-picture-progress");
    const fill = element("div", "ac-picture-progress-fill");
    fill.style.width = (current / quizQuestions.length * 100) + "%";
    track.appendChild(fill);
    area.appendChild(track);

    const questionBox = element("div", "ac-picture-question");
    questionBox.appendChild(element("h3", "", "Which airline does this logo belong to?"));

    const image = document.createElement("img");
    image.className = "ac-picture-image";
    image.src = q.image;
    image.alt = "Airline logo picture";
    image.loading = "lazy";
    image.onerror = function () {
      image.alt = "Logo image unavailable. Please use the airline name options.";
      image.style.display = "none";
    };

    questionBox.appendChild(image);
    area.appendChild(questionBox);

    const options = element("div", "ac-picture-options");

    q.options.forEach(function (option) {
      const button = element("button", "ac-picture-option", option);
      button.type = "button";
      button.addEventListener("click", function () {
        answerQuestion(option, button);
      });
      options.appendChild(button);
    });

    area.appendChild(options);

    const feedback = element("div", "ac-picture-feedback");
    feedback.id = "acPictureFeedback";
    feedback.hidden = true;
    area.appendChild(feedback);

    const next = element("button", "ac-picture-button gold", "Next Question");
    next.id = "acPictureNext";
    next.hidden = true;
    next.type = "button";
    next.addEventListener("click", nextQuestion);
    area.appendChild(next);
  }

  function answerQuestion(selected, selectedButton) {
    if (locked) return;
    locked = true;

    const q = quizQuestions[current];
    const buttons = document.querySelectorAll(
      "#acPictureQuiz .ac-picture-option"
    );

    buttons.forEach(function (button) {
      button.disabled = true;

      if (button.textContent === q.answer) {
        button.classList.add("correct");
      }
    });

    const feedback = document.getElementById("acPictureFeedback");
    feedback.hidden = false;

    if (selected === q.answer) {
      score++;
      feedback.className = "ac-picture-feedback correct";
      feedback.textContent = "Correct! " + q.fact;
    } else {
      selectedButton.classList.add("wrong");
      feedback.className = "ac-picture-feedback wrong";
      feedback.textContent =
        "Not quite. The correct answer is " + q.answer + ". " + q.fact;
    }

    const next = document.getElementById("acPictureNext");
    next.hidden = false;
    next.textContent =
      current === quizQuestions.length - 1 ? "View Results" : "Next Question";
  }

  function nextQuestion() {
    current++;

    if (current < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }

  function showResults() {
    const area = document.getElementById("acPictureArea");
    const percentage = Math.round((score / quizQuestions.length) * 100);

    savedProgress.attempts++;
    savedProgress.lastScore = percentage;
    savedProgress.bestScore = Math.max(savedProgress.bestScore, percentage);
    saveProgress();

    area.innerHTML = "";

    const result = element("div", "ac-picture-result");
    result.appendChild(element("h3", "", "Picture Quiz Completed!"));
    result.appendChild(element(
      "div",
      "score",
      percentage + "%"
    ));
    result.appendChild(element(
      "h3",
      "",
      score + " out of " + quizQuestions.length + " correct"
    ));

    result.appendChild(element(
      "p",
      "",
      percentage >= PASS_MARK
        ? "Well done! You passed this picture quiz."
        : "Keep practising. Review the airline logos and try again."
    ));

    result.appendChild(element(
      "p",
      "",
      "Your best score: " + savedProgress.bestScore + "%"
    ));

    const retry = element("button", "ac-picture-button gold", "Try Again");
    retry.type = "button";
    retry.addEventListener("click", startQuiz);
    result.appendChild(retry);

    area.appendChild(result);

    const stats = document.querySelectorAll(
      "#acPictureQuiz .ac-picture-stat strong"
    );

    if (stats.length === 3) {
      stats[1].textContent = savedProgress.attempts;
      stats[2].textContent = savedProgress.bestScore + "%";
    }
  }

  function initialise() {
    const section = document.getElementById("quiz");
    if (!section) return;

    createPictureQuiz(section);

    // Re-add the picture quiz if the main quiz redraws its section.
    const observer = new MutationObserver(function () {
      if (!section.querySelector("#acPictureQuiz")) {
        createPictureQuiz(section);
      }
    });

    observer.observe(section, {
      childList: true,
      subtree: false
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialise);
  } else {
    initialise();
  }

})();

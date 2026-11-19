
/* ==========================================================
   AIRLINE CORNER - PROFESSIONAL QUIZ CENTRE
   Picture quizzes, airport codes, airline codes, hubs,
   geography, timed tests, feedback and saved results.
   ========================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "airlineCornerProfessionalQuiz";
  const PASS_MARK = 70;

  let mode = "";
  let questions = [];
  let questionIndex = 0;
  let score = 0;
  let answers = [];
  let locked = false;
  let secondsLeft = 0;
  let timer = null;
  let timedMode = false;

  let history = {
    attempts: 0,
    bestScore: 0,
    lastScore: 0,
    lastMode: ""
  };

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) history = { ...history, ...saved };
  } catch (error) {
    console.warn("Quiz history could not be loaded.");
  }

  function saveHistory() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    } catch (error) {
      console.warn("Quiz history could not be saved.");
    }
  }

  /* ---------------- QUESTION COLLECTIONS ---------------- */

  const airportCodes = [
    ["CCU", "Kolkata", ["Kolkata", "Mumbai", "Delhi", "Chennai"]],
    ["JFK", "New York - John F. Kennedy", ["New York", "Boston", "Chicago", "Washington"]],
    ["LAX", "Los Angeles", ["Los Angeles", "San Francisco", "San Diego", "Las Vegas"]],
    ["ORD", "Chicago O'Hare", ["Chicago", "Dallas", "Denver", "Detroit"]],
    ["YYZ", "Toronto Pearson", ["Toronto", "Vancouver", "Calgary", "Montreal"]],
    ["YVR", "Vancouver International", ["Vancouver", "Toronto", "Ottawa", "Edmonton"]],
    ["YUL", "Montréal-Trudeau", ["Montreal", "Quebec City", "Toronto", "Halifax"]],
    ["YYC", "Calgary International", ["Calgary", "Winnipeg", "Vancouver", "Ottawa"]],
    ["ATL", "Hartsfield-Jackson Atlanta", ["Atlanta", "Miami", "Orlando", "Charlotte"]],
    ["DFW", "Dallas/Fort Worth", ["Dallas/Fort Worth", "Houston", "Austin", "Phoenix"]],
    ["SFO", "San Francisco International", ["San Francisco", "Seattle", "Los Angeles", "Portland"]],
    ["MIA", "Miami International", ["Miami", "Tampa", "Orlando", "Atlanta"]],
    ["SEA", "Seattle-Tacoma", ["Seattle", "Portland", "Denver", "Boston"]],
    ["BOS", "Boston Logan", ["Boston", "New York", "Philadelphia", "Baltimore"]],
    ["IAD", "Washington Dulles", ["Washington", "New York", "Richmond", "Pittsburgh"]],
    ["YOW", "Ottawa International", ["Ottawa", "Toronto", "Montreal", "Quebec City"]],
    ["YHZ", "Halifax Stanfield", ["Halifax", "St. John's", "Moncton", "Quebec City"]],
    ["YWG", "Winnipeg Richardson", ["Winnipeg", "Calgary", "Edmonton", "Regina"]]
  ];

  const airlineCodes = [
    ["AC", "Air Canada", ["Air Canada", "American Airlines", "Air India", "Alaska Airlines"]],
    ["AA", "American Airlines", ["American Airlines", "Air Canada", "Allegiant Air", "Air India"]],
    ["UA", "United Airlines", ["United Airlines", "Delta Air Lines", "WestJet", "Air Canada"]],
    ["DL", "Delta Air Lines", ["Delta Air Lines", "United Airlines", "JetBlue", "American Airlines"]],
    ["WS", "WestJet", ["WestJet", "Air Canada", "Porter Airlines", "Alaska Airlines"]],
    ["AI", "Air India", ["Air India", "Air Canada", "American Airlines", "IndiGo"]],
    ["AS", "Alaska Airlines", ["Alaska Airlines", "American Airlines", "Air Canada", "United Airlines"]],
    ["B6", "JetBlue", ["JetBlue", "Delta Air Lines", "United Airlines", "WestJet"]],
    ["WJ", "Not a current standard example in this quiz", ["WestJet", "Air Canada", "American Airlines", "United Airlines"]]
  ];

  const hubQuestions = [
    {
      q: "Which city is a major hub for Delta Air Lines?",
      a: ["Atlanta", "Toronto", "Vancouver", "Calgary"],
      c: 0,
      e: "Atlanta is Delta Air Lines' largest hub."
    },
    {
      q: "Which airport is a major hub for American Airlines?",
      a: ["Dallas/Fort Worth", "Vancouver", "Montreal", "Halifax"],
      c: 0,
      e: "Dallas/Fort Worth is a major American Airlines hub."
    },
    {
      q: "Which airport is a major hub for United Airlines?",
      a: ["Chicago O'Hare", "Toronto Pearson", "Calgary", "Ottawa"],
      c: 0,
      e: "Chicago O'Hare is one of United Airlines' major hubs."
    },
    {
      q: "Which airport is Air Canada's largest hub?",
      a: ["Toronto Pearson", "New York JFK", "Dallas/Fort Worth", "Atlanta"],
      c: 0,
      e: "Toronto Pearson is Air Canada's largest hub."
    },
    {
      q: "Which city is a major WestJet hub?",
      a: ["Calgary", "Boston", "Chicago", "Miami"],
      c: 0,
      e: "Calgary is a major WestJet hub."
    },
    {
      q: "Which airport is a major Alaska Airlines hub?",
      a: ["Seattle-Tacoma", "Toronto Pearson", "Atlanta", "Montreal"],
      c: 0,
      e: "Seattle-Tacoma is a major Alaska Airlines hub."
    }
  ];

  const geographyQuestions = [
    {
      q: "Toronto Pearson Airport (YYZ) is in which Canadian province?",
      a: ["Ontario", "Quebec", "Alberta", "British Columbia"],
      c: 0,
      e: "Toronto is in Ontario."
    },
    {
      q: "Vancouver International Airport (YVR) is in which province?",
      a: ["British Columbia", "Ontario", "Manitoba", "Nova Scotia"],
      c: 0,
      e: "Vancouver is in British Columbia."
    },
    {
      q: "Montréal-Trudeau Airport (YUL) is in which province?",
      a: ["Quebec", "Ontario", "Alberta", "Saskatchewan"],
      c: 0,
      e: "Montreal is in Quebec."
    },
    {
      q: "John F. Kennedy Airport (JFK) is in which US state?",
      a: ["New York", "California", "Florida", "Illinois"],
      c: 0,
      e: "JFK is in New York City, New York."
    },
    {
      q: "Los Angeles International Airport (LAX) is in which state?",
      a: ["California", "Texas", "Nevada", "Arizona"],
      c: 0,
      e: "Los Angeles is in California."
    },
    {
      q: "O'Hare International Airport (ORD) is in which state?",
      a: ["Illinois", "Ohio", "Michigan", "Wisconsin"],
      c: 0,
      e: "Chicago O'Hare is in Illinois."
    },
    {
      q: "Calgary International Airport (YYC) is in which province?",
      a: ["Alberta", "Ontario", "Quebec", "Manitoba"],
      c: 0,
      e: "Calgary is in Alberta."
    },
    {
      q: "Halifax Stanfield Airport (YHZ) is in which province?",
      a: ["Nova Scotia", "New Brunswick", "Ontario", "Quebec"],
      c: 0,
      e: "Halifax is in Nova Scotia."
    }
  ];

  const pictureQuestions = [
    {
      q: "Identify the airline represented by this picture.",
      img: "https://www.google.com/s2/favicons?domain=aircanada.com&sz=256",
      a: ["Air Canada", "Air India", "American Airlines", "WestJet"],
      c: 0,
      e: "This image represents the Air Canada website identity."
    },
    {
      q: "Identify the airline represented by this picture.",
      img: "https://www.google.com/s2/favicons?domain=aa.com&sz=256",
      a: ["American Airlines", "Alaska Airlines", "Air Canada", "United Airlines"],
      c: 0,
      e: "This image represents American Airlines."
    },
    {
      q: "Identify the airline represented by this picture.",
      img: "https://www.google.com/s2/favicons?domain=delta.com&sz=256",
      a: ["Delta Air Lines", "United Airlines", "JetBlue", "WestJet"],
      c: 0,
      e: "This image represents Delta Air Lines."
    },
    {
      q: "Identify the airline represented by this picture.",
      img: "https://www.google.com/s2/favicons?domain=united.com&sz=256",
      a: ["United Airlines", "American Airlines", "Air Canada", "Air India"],
      c: 0,
      e: "This image represents United Airlines."
    },
    {
      q: "Identify the airline represented by this picture.",
      img: "https://www.google.com/s2/favicons?domain=westjet.com&sz=256",
      a: ["WestJet", "Air Canada", "Delta Air Lines", "JetBlue"],
      c: 0,
      e: "This image represents WestJet."
    },
    {
      q: "Identify the airline represented by this picture.",
      img: "https://www.google.com/s2/favicons?domain=airindia.com&sz=256",
      a: ["Air India", "Air Canada", "Alaska Airlines", "United Airlines"],
      c: 0,
      e: "This image represents Air India."
    }
  ];

  /* ---------------- QUIZ STYLES ---------------- */

  function addStyles() {
    if (document.getElementById("acProfessionalQuizCSS")) return;

    const style = document.createElement("style");
    style.id = "acProfessionalQuizCSS";

    style.textContent = `
      #quiz .section-heading { margin-bottom: 24px; }

      .acq-shell {
        background: #fff;
        border: 1px solid #dce4ed;
        border-radius: 15px;
        padding: 25px;
        box-shadow: 0 5px 22px rgba(16,43,70,.06);
      }

      .acq-banner {
        background: linear-gradient(125deg,#102b46,#1769aa);
        color: white;
        border-radius: 12px;
        padding: 27px;
        margin-bottom: 22px;
      }

      .acq-banner small {
        color: #f4d58a;
        letter-spacing: 2px;
        font-weight: bold;
      }

      .acq-banner h3 {
        color: white;
        font-size: 25px;
        margin: 8px 0;
      }

      .acq-banner p { color: #e5edf5; }

      .acq-stats {
        display: grid;
        grid-template-columns: repeat(3,minmax(0,1fr));
        gap: 12px;
        margin: 18px 0 24px;
      }

      .acq-stat {
        background: #f3f6fa;
        border-radius: 9px;
        text-align: center;
        padding: 15px 8px;
      }

      .acq-stat strong {
        display: block;
        color: #1769aa;
        font-size: 25px;
      }

      .acq-stat span {
        color: #687789;
        font-size: 12px;
      }

      .acq-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
        gap: 15px;
      }

      .acq-mode {
        border: 1px solid #dce4ed;
        border-radius: 11px;
        padding: 19px;
        background: white;
        text-align: left;
        cursor: pointer;
        transition: .2s;
        min-height: 150px;
      }

      .acq-mode:hover {
        border-color: #1769aa;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(16,43,70,.09);
      }

      .acq-mode .symbol {
        font-size: 30px;
        margin-bottom: 9px;
      }

      .acq-mode strong {
        display: block;
        color: #102b46;
        font-size: 16px;
        margin-bottom: 6px;
      }

      .acq-mode span {
        color: #687789;
        font-size: 13px;
        line-height: 1.5;
      }

      .acq-button {
        border: 0;
        border-radius: 7px;
        padding: 12px 19px;
        background: #102b46;
        color: white;
        font-weight: bold;
        cursor: pointer;
        margin: 5px 6px 5px 0;
      }

      .acq-button.gold {
        background: #d5a642;
        color: #172b40;
      }

      .acq-button.light {
        background: #eaf3fb;
        color: #1769aa;
      }

      .acq-button:disabled { opacity: .55; cursor: not-allowed; }

      .acq-topline {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
        color: #687789;
        font-size: 13px;
        font-weight: bold;
      }

      .acq-track {
        height: 9px;
        background: #e6edf4;
        border-radius: 20px;
        overflow: hidden;
        margin: 13px 0 24px;
      }

      .acq-track-fill {
        height: 100%;
        background: #d5a642;
        transition: width .25s;
      }

      .acq-question {
        color: #102b46;
        font-size: 22px;
        line-height: 1.45;
        margin: 16px 0;
      }

      .acq-picture {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 175px;
        background: #f3f6fa;
        border: 1px solid #dce4ed;
        border-radius: 10px;
        padding: 20px;
        margin: 15px 0;
      }

      .acq-picture img {
        max-width: 100%;
        max-height: 145px;
        width: auto;
        height: auto;
        object-fit: contain;
      }

      .acq-map {
        width: 100%;
        max-height: 290px;
        object-fit: contain;
        background: #f3f6fa;
        border: 1px solid #dce4ed;
        border-radius: 10px;
        margin: 14px 0;
      }

      .acq-option {
        display: block;
        width: 100%;
        text-align: left;
        border: 1px solid #dce4ed;
        border-radius: 8px;
        background: white;
        color: #253447;
        padding: 14px 16px;
        margin: 9px 0;
        cursor: pointer;
        font-size: 15px;
      }

      .acq-option:hover:not(:disabled) {
        border-color: #1769aa;
        background: #eaf3fb;
      }

      .acq-option.correct {
        background: #e8f6ed;
        border: 2px solid #26834a;
        color: #155b30;
      }

      .acq-option.incorrect {
        background: #fff0ef;
        border: 2px solid #c63d36;
        color: #8c2520;
      }

      .acq-option:disabled { cursor: default; opacity: 1; }

      .acq-answer-input {
        width: 100%;
        padding: 15px;
        border: 1px solid #cbd6e2;
        border-radius: 8px;
        font-size: 17px;
        margin: 10px 0;
      }

      .acq-feedback {
        border-radius: 8px;
        padding: 15px;
        margin: 18px 0;
        line-height: 1.6;
      }

      .acq-feedback.good { background: #e8f6ed; color: #155b30; }
      .acq-feedback.bad { background: #fff0ef; color: #8c2520; }

      .acq-result { text-align: center; padding: 20px 5px; }
      .acq-result h3 { color: #102b46; font-size: 25px; }
      .acq-score {
        color: #1769aa;
        font-size: 52px;
        font-weight: bold;
        margin: 12px 0;
      }

      .acq-review {
        text-align: left;
        background: #f3f6fa;
        border-radius: 8px;
        padding: 14px;
        margin: 10px 0;
      }

      .acq-muted { color: #687789; font-size: 13px; }
      .acq-hidden { display: none !important; }

      @media(max-width:600px) {
        .acq-shell { padding: 15px; }
        .acq-banner { padding: 20px; }
        .acq-stats { grid-template-columns: 1fr 1fr 1fr; }
        .acq-question { font-size: 19px; }
      }
    `;

    document.head.appendChild(style);
  }

  /* ---------------- SMALL HELPERS ---------------- */

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function shuffle(list) {
    const copy = list.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function normalise(value) {
    return String(value || "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]/g, "");
  }

  function stopTimer() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  function updateTimer() {
    const node = document.getElementById("acqTimer");
    if (node) node.textContent = "Time left: " + secondsLeft + "s";
  }

  /* ---------------- QUIZ HOME ---------------- */

  function renderHome() {
    stopTimer();

    const section = document.getElementById("quiz");
    if (!section) return;

    addStyles();
    section.innerHTML = "";

    section.appendChild(el("div", "section-heading", ""));
    section.querySelector(".section-heading").appendChild(
      el("h2", "", "Airline Corner Quiz Academy")
    );
    section.querySelector(".section-heading").appendChild(
      el("p", "", "Professional airline, airport and travel training assessments.")
    );

    const shell = el("div", "acq-shell");
    const banner = el("div", "acq-banner");

    banner.appendChild(el("small", "", "LEARN • PRACTISE • ACHIEVE"));
    banner.appendChild(el("h3", "", "Professional Quiz & Assessment Centre"));
    banner.appendChild(el(
      "p",
      "",
      "Build your airline knowledge through picture challenges, airport codes, airline codes, geography and timed assessments."
    ));

    shell.appendChild(banner);

    const stats = el("div", "acq-stats");
    [
      [String(history.attempts), "Quiz Attempts"],
      [history.bestScore + "%", "Best Score"],
      [String((window.AIRLINE_QUESTION_BANK || []).length), "Training Questions"]
    ].forEach(function (item) {
      const box = el("div", "acq-stat");
      box.appendChild(el("strong", "", item[0]));
      box.appendChild(el("span", "", item[1]));
      stats.appendChild(box);
    });
    shell.appendChild(stats);

    shell.appendChild(el("h3", "", "Choose Your Challenge"));
    shell.appendChild(el("p", "acq-muted", "Select a quiz category to begin."));

    const grid = el("div", "acq-grid");

    const modes = [
      ["📝", "Professional Assessment", "Multiple-choice training questions with explanations.", "assessment"],
      ["🖼️", "Airline Picture Quiz", "Identify airlines from their picture and brand icon.", "picture"],
      ["🛫", "Airport Code Challenge", "Type the city or airport for the IATA code.", "airport"],
      ["🎫", "Airline Code Challenge", "Type the airline name for the two-letter code.", "airline"],
      ["🌐", "Airline Hub Cities", "Match airlines with their major hub cities.", "hubs"],
      ["🗺️", "USA & Canada Geography", "Use a North America map reference to answer airport location questions.", "geography"],
      ["⏱️", "60-Second Challenge", "Answer as many mixed questions as you can before time runs out.", "timed"]
    ];

    modes.forEach(function (item) {
      const card = el("button", "acq-mode");
      card.type = "button";
      card.appendChild(el("div", "symbol", item[0]));
      card.appendChild(el("strong", "", item[1]));
      card.appendChild(el("span", "", item[2]));
      card.addEventListener("click", function () {
        beginMode(item[3]);
      });
      grid.appendChild(card);
    });

    shell.appendChild(grid);

    const note = el(
      "p",
      "acq-muted",
      "Scores are saved in this browser on this device. They are not connected to a student account or central database."
    );
    note.style.marginTop = "20px";
    shell.appendChild(note);

    section.appendChild(shell);
  }

  /* ---------------- BUILD QUESTIONS ---------------- */

  function getAssessmentQuestions() {
    const bank = Array.isArray(window.AIRLINE_QUESTION_BANK)
      ? window.AIRLINE_QUESTION_BANK
      : [];

    return bank.map(function (item) {
      return {
        type: "choice",
        q: item.q,
        a: item.a,
        c: item.c,
        e: item.e,
        level: item.l || "General"
      };
    });
  }

  function getAirportQuestions() {
    return airportCodes.map(function (item) {
      return {
        type: "text",
        q: "Which city or airport is represented by the IATA code " + item[0] + "?",
        answer: item[1],
        accepted: [item[1]],
        e: item[0] + " is the IATA code for " + item[1] + "."
      };
    });
  }

  function getAirlineQuestions() {
    return airlineCodes
      .filter(function (item) {
        return item[0] !== "WJ";
      })
      .map(function (item) {
        return {
          type: "text",
          q: "Which airline uses the IATA designator " + item[0] + "?",
          answer: item[1],
          accepted: [item[1]],
          e: item[0] + " is the IATA airline designator for " + item[1] + "."
        };
      });
  }

  function getHubQuestions() {
    return hubQuestions.map(function (item) {
      return {
        type: "choice",
        q: item.q,
        a: item.a,
        c: item.c,
        e: item.e,
        level: "Intermediate"
      };
    });
  }

  function getGeographyQuestions() {
    return geographyQuestions.map(function (item) {
      return {
        type: "choice",
        q: item.q,
        a: item.a,
        c: item.c,
        e: item.e,
        level: "Geography",
        map: true
      };
    });
  }

  function getPictureQuestions() {
    return pictureQuestions.map(function (item) {
      return {
        type: "choice",
        q: item.q,
        a: item.a,
        c: item.c,
        e: item.e,
        img: item.img,
        level: "Picture Identification"
      };
    });
  }

  function beginMode(selectedMode) {
    mode = selectedMode;
    score = 0;
    questionIndex = 0;
    answers = [];
    locked = false;
    timedMode = selectedMode === "timed";

    let pool = [];

    if (selectedMode === "assessment") pool = getAssessmentQuestions();
    if (selectedMode === "picture") pool = getPictureQuestions();
    if (selectedMode === "airport") pool = getAirportQuestions();
    if (selectedMode === "airline") pool = getAirlineQuestions();
    if (selectedMode === "hubs") pool = getHubQuestions();
    if (selectedMode === "geography") pool = getGeographyQuestions();

    if (selectedMode === "timed") {
      pool = shuffle(
        getAssessmentQuestions()
          .concat(getHubQuestions())
          .concat(getGeographyQuestions())
      );
      pool = pool.concat(pool);
      secondsLeft = 60;
    }

    questions = shuffle(pool);

    if (!questions.length) {
      renderHome();
      return;
    }

    if (timedMode) startTimer();

    renderQuestion();
  }

  /* ---------------- TIMER ---------------- */

  function startTimer() {
    stopTimer();
    timer = setInterval(function () {
      secondsLeft--;
      updateTimer();

      if (secondsLeft <= 0) {
        stopTimer();
        finishQuiz(true);
      }
    }, 1000);
  }

  /* ---------------- QUESTION SCREEN ---------------- */

  function renderQuestion() {
    const section = document.getElementById("quiz");
    const question = questions[questionIndex];

    locked = false;
    section.innerHTML = "";

    const heading = el("div", "section-heading");
    heading.appendChild(el("h2", "", "Airline Corner Assessment"));
    heading.appendChild(el("p", "", "Read the question carefully and select or enter your answer."));
    section.appendChild(heading);

    const shell = el("div", "acq-shell");

    const top = el("div", "acq-topline");
    top.appendChild(el(
      "span",
      "",
      "QUESTION " + (questionIndex + 1) + " OF " + questions.length
    ));

    const modeNames = {
      assessment: "Professional Assessment",
      picture: "Airline Picture Quiz",
      airport: "Airport Code Challenge",
      airline: "Airline Code Challenge",
      hubs: "Airline Hub Cities",
      geography: "USA & Canada Geography",
      timed: "60-Second Challenge"
    };

    top.appendChild(el("span", "", modeNames[mode] || "Quiz"));

    if (timedMode) {
      const timerNode = el("span", "", "Time left: " + secondsLeft + "s");
      timerNode.id = "acqTimer";
      top.appendChild(timerNode);
    }

    shell.appendChild(top);

    const track = el("div", "acq-track");
    const fill = el("div", "acq-track-fill");
    fill.style.width = (questionIndex / questions.length * 100) + "%";
    track.appendChild(fill);
    shell.appendChild(track);

    if (question.level) {
      shell.appendChild(el("p", "acq-muted", "Category: " + question.level));
    }

    shell.appendChild(el("h3", "acq-question", question.q));

    if (question.img) {
      const picture = el("div", "acq-picture");
      const image = document.createElement("img");
      image.src = question.img;
      image.alt = "Airline picture quiz image";
      image.loading = "lazy";
      image.onerror = function () {
        picture.textContent = "Picture could not be loaded. Check your internet connection.";
      };
      picture.appendChild(image);
      shell.appendChild(picture);
    }

    if (question.map) {
      const map = document.createElement("img");
      map.className = "acq-map";
      map.src = "https://commons.wikimedia.org/wiki/Special:FilePath/North_America_blank_map_with_state_and_province_boundaries.png";
      map.alt = "Blank map showing North American state and province boundaries";
      map.loading = "lazy";
      shell.appendChild(map);
    }

    if (question.type === "text") {
      const input = document.createElement("input");
      input.type = "text";
      input.id = "acqTypedAnswer";
      input.className = "acq-answer-input";
      input.placeholder = "Type your answer here...";
      input.autocomplete = "off";
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") submitTypedAnswer();
      });
      shell.appendChild(input);

      const submit = el("button", "acq-button gold", "Submit Answer");
      submit.type = "button";
      submit.addEventListener("click", submitTypedAnswer);
      shell.appendChild(submit);

      setTimeout(function () {
        if (document.getElementById("acqTypedAnswer")) {
          document.getElementById("acqTypedAnswer").focus();
        }
      }, 50);
    } else {
      const options = el("div", "acq-options");

      question.a.forEach(function (choice, index) {
        const button = el(
          "button",
          "acq-option",
          String.fromCharCode(65 + index) + ". " + choice
        );
        button.type = "button";
        button.addEventListener("click", function () {
          submitChoice(index);
        });
        options.appendChild(button);
      });

      shell.appendChild(options);
    }

    const feedback = el("div", "acq-feedback");
    feedback.id = "acqFeedback";
    feedback.hidden = true;
    shell.appendChild(feedback);

    const next = el("button", "acq-button gold", "Next Question");
    next.id = "acqNext";
    next.type = "button";
    next.hidden = true;
    next.addEventListener("click", nextQuestion);
    shell.appendChild(next);

    const exit = el("button", "acq-button light", "Exit Quiz");
    exit.type = "button";
    exit.addEventListener("click", renderHome);
    shell.appendChild(exit);

    section.appendChild(shell);
  }

  /* ---------------- ANSWER HANDLING ---------------- */

  function showFeedback(isCorrect, explanation, selectedText, correctText) {
    if (locked) return;
    locked = true;

    const feedback = document.getElementById("acqFeedback");
    feedback.hidden = false;
    feedback.className = "acq-feedback " + (isCorrect ? "good" : "bad");

    feedback.textContent =
      (isCorrect ? "Correct! " : "Not quite. ") +
      explanation +
      (isCorrect ? "" : " Correct answer: " + correctText);

    const next = document.getElementById("acqNext");
    next.hidden = false;
    next.textContent =
      questionIndex === questions.length - 1 || (timedMode && secondsLeft <= 0)
        ? "View Results"
        : "Next Question";

    if (isCorrect) score++;

    answers.push({
      question: questions[questionIndex].q,
      selected: selectedText,
      correct: correctText,
      isCorrect: isCorrect,
      explanation: explanation
    });
  }

  function submitChoice(index) {
    if (locked) return;

    const question = questions[questionIndex];
    const buttons = document.querySelectorAll(".acq-option");

    buttons.forEach(function (button, buttonIndex) {
      button.disabled = true;
      if (buttonIndex === question.c) button.classList.add("correct");
      if (buttonIndex === index && index !== question.c) {
        button.classList.add("incorrect");
      }
    });

    showFeedback(
      index === question.c,
      question.e,
      question.a[index],
      question.a[question.c]
    );
  }

  function submitTypedAnswer() {
    if (locked) return;

    const input = document.getElementById("acqTypedAnswer");
    if (!input) return;

    const entered = input.value.trim();
    if (!entered) {
      input.focus();
      return;
    }

    const question = questions[questionIndex];
    const accepted = question.accepted || [question.answer];

    const isCorrect = accepted.some(function (item) {
      return normalise(item) === normalise(entered);
    });

    input.disabled = true;

    const submit = document.querySelector(".acq-button.gold");
    if (submit) submit.disabled = true;

    showFeedback(
      isCorrect,
      question.e,
      entered,
      question.answer
    );
  }

  function nextQuestion() {
    if (!locked) return;

    questionIndex++;

    if (questionIndex >= questions.length) {
      finishQuiz(false);
    } else {
      renderQuestion();
    }
  }

  /* ---------------- RESULTS & REVIEW ---------------- */

  function finishQuiz(timeExpired) {
    stopTimer();

    const section = document.getElementById("quiz");
    const total = answers.length;
    const percentage = total ? Math.round((score / total) * 100) : 0;
    const passed = percentage >= PASS_MARK;

    history.attempts++;
    history.lastScore = percentage;
    history.bestScore = Math.max(history.bestScore, percentage);
    history.lastMode = mode;
    saveHistory();

    section.innerHTML = "";

    const heading = el("div", "section-heading");
    heading.appendChild(el("h2", "", "Assessment Results"));
    heading.appendChild(el("p", "", "Your Airline Corner quiz report."));
    section.appendChild(heading);

    const shell = el("div", "acq-shell");
    const result = el("div", "acq-result");

    result.appendChild(el("h3", "", timeExpired ? "Time's Up!" : "Quiz Completed"));
    result.appendChild(el("div", "acq-score", percentage + "%"));
    result.appendChild(el(
      "h3",
      "",
      score + " correct out of " + total + " answered"
    ));

    result.appendChild(el(
      "p",
      "",
      passed
        ? "PASS — You achieved the " + PASS_MARK + "% pass mark."
        : "NOT YET PASSED — You need " + PASS_MARK + "% to pass. Keep practising."
    ));

    result.appendChild(el(
      "p",
      "acq-muted",
      "Best score: " + history.bestScore + "% | Total attempts: " + history.attempts
    ));

    result.appendChild(el(
      "p",
      "acq-muted",
      "This is a practice result, not an accredited qualification or official certificate."
    ));

    shell.appendChild(result);

    const reviewHeading = el("h3", "", "Answer Review");
    reviewHeading.style.marginTop = "20px";
    shell.appendChild(reviewHeading);

    answers.forEach(function (item, index) {
      const review = el("div", "acq-review");
      review.appendChild(el("strong", "", (index + 1) + ". " + item.question));
      review.appendChild(el(
        "p",
        "",
        (item.isCorrect ? "✓ Your answer: " : "✗ Your answer: ") +
        item.selected
      ));
      if (!item.isCorrect) {
        review.appendChild(el("p", "", "Correct answer: " + item.correct));
      }
      review.appendChild(el("p", "acq-muted", item.explanation));
      shell.appendChild(review);
    });

    const again = el("button", "acq-button gold", "Try This Quiz Again");
    again.type = "button";
    again.addEventListener("click", function () {
      beginMode(mode);
    });
    shell.appendChild(again);

    const home = el("button", "acq-button", "Back to Quiz Centre");
    home.type = "button";
    home.addEventListener("click", renderHome);
    shell.appendChild(home);

    section.appendChild(shell);
  }

  /* ---------------- STARTUP ---------------- */

  function initialise() {
    if (!document.getElementById("quiz")) return;
    renderHome();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialise);
  } else {
    initialise();
  }

})();

/* =========================================================
AIRLINE CORNER - AIRLINE LOGO CHALLENGE

40 airline logo pictures, 4 answer options each.
Regions: USA, UK, Middle East, Australia & Oceania.

HOW LOGOS ARE LOADED
Put the logo image files in a folder called  airline-logos/
next to airline-corner.html. File names are listed in the
"airlines" array below (the "file" value), for example:
  airline-logos/delta.png
The quiz tries .png, .svg, .webp, then .jpg for each name.
========================================================= */

(function () {

"use strict";

const STORAGE_KEY = "airlineCornerLogoQuiz";
const LOGO_FOLDER = "airline-logos/";
const LOGO_EXTENSIONS = ["png", "svg", "webp", "jpg"];
const PASS_MARK = 70;

const airlines = [

/* ---------- USA ---------- */
{ name: "American Airlines", code: "AA", region: "USA", file: "american-airlines" },
{ name: "Delta Air Lines", code: "DL", region: "USA", file: "delta" },
{ name: "United Airlines", code: "UA", region: "USA", file: "united" },
{ name: "Southwest Airlines", code: "WN", region: "USA", file: "southwest" },
{ name: "JetBlue", code: "B6", region: "USA", file: "jetblue" },
{ name: "Alaska Airlines", code: "AS", region: "USA", file: "alaska" },
{ name: "Frontier Airlines", code: "F9", region: "USA", file: "frontier" },
{ name: "Allegiant Air", code: "G4", region: "USA", file: "allegiant" },
{ name: "Sun Country Airlines", code: "SY", region: "USA", file: "sun-country" },
{ name: "Hawaiian Airlines", code: "HA", region: "USA", file: "hawaiian" },

/* ---------- UK ---------- */
{ name: "British Airways", code: "BA", region: "UK", file: "british-airways" },
{ name: "Virgin Atlantic", code: "VS", region: "UK", file: "virgin-atlantic" },
{ name: "easyJet", code: "U2", region: "UK", file: "easyjet" },
{ name: "Jet2", code: "LS", region: "UK", file: "jet2" },
{ name: "TUI Airways", code: "BY", region: "UK", file: "tui-airways" },
{ name: "Loganair", code: "LM", region: "UK", file: "loganair" },
{ name: "Aurigny", code: "GR", region: "UK", file: "aurigny" },
{ name: "Blue Islands", code: "SI", region: "UK", file: "blue-islands" },
{ name: "Eastern Airways", code: "T3", region: "UK", file: "eastern-airways" },
{ name: "Ryanair", code: "FR", region: "UK", file: "ryanair" },

/* ---------- MIDDLE EAST ---------- */
{ name: "Emirates", code: "EK", region: "Middle East", file: "emirates" },
{ name: "Qatar Airways", code: "QR", region: "Middle East", file: "qatar-airways" },
{ name: "Etihad Airways", code: "EY", region: "Middle East", file: "etihad" },
{ name: "Saudia", code: "SV", region: "Middle East", file: "saudia" },
{ name: "flydubai", code: "FZ", region: "Middle East", file: "flydubai" },
{ name: "Air Arabia", code: "G9", region: "Middle East", file: "air-arabia" },
{ name: "Gulf Air", code: "GF", region: "Middle East", file: "gulf-air" },
{ name: "Oman Air", code: "WY", region: "Middle East", file: "oman-air" },
{ name: "Kuwait Airways", code: "KU", region: "Middle East", file: "kuwait-airways" },
{ name: "Royal Jordanian", code: "RJ", region: "Middle East", file: "royal-jordanian" },

/* ---------- AUSTRALIA & OCEANIA ---------- */
{ name: "Qantas", code: "QF", region: "Australia", file: "qantas" },
{ name: "Virgin Australia", code: "VA", region: "Australia", file: "virgin-australia" },
{ name: "Jetstar", code: "JQ", region: "Australia", file: "jetstar" },
{ name: "Rex (Regional Express)", code: "ZL", region: "Australia", file: "rex" },
{ name: "Alliance Airlines", code: "QQ", region: "Australia", file: "alliance" },
{ name: "Link Airways", code: "FC", region: "Australia", file: "link-airways" },
{ name: "Airnorth", code: "TL", region: "Australia", file: "airnorth" },
{ name: "Air New Zealand", code: "NZ", region: "Australia", file: "air-new-zealand" },
{ name: "Fiji Airways", code: "FJ", region: "Australia", file: "fiji-airways" },
{ name: "QantasLink", code: "QF", region: "Australia", file: "qantaslink" }

];

const REGION_LABELS = {
  "USA": "USA",
  "UK": "UK",
  "Middle East": "Middle East",
  "Australia": "Australia & Oceania"
};

let questions = [];
let current = 0;
let score = 0;
let locked = false;
let missed = [];
let regionStats = {};

let saved = {
  attempts: 0,
  bestScore: 0,
  lastScore: 0
};

try {
  saved = Object.assign(
    saved,
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
  );
} catch (error) {
  console.warn("Logo quiz progress could not be loaded.");
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  } catch (error) {
    console.warn("Logo quiz progress could not be saved.");
  }
}

function addStyles() {

if (document.getElementById("acLogoQuizStyles")) return;

const style = document.createElement("style");
style.id = "acLogoQuizStyles";

style.textContent = `

.ac-logo-card {
margin-top: 25px;
padding: 25px;
background: #fff;
border: 1px solid #dce4ed;
border-radius: 12px;
box-shadow: 0 3px 12px rgba(20,45,70,.05);
}

.ac-logo-card h3 {
color: #102b46;
margin-bottom: 8px;
}

.ac-logo-stats {
display: flex;
flex-wrap: wrap;
gap: 12px;
margin: 18px 0;
}

.ac-logo-stat {
flex: 1;
min-width: 100px;
padding: 13px;
text-align: center;
background: #f3f6fa;
border-radius: 8px;
}

.ac-logo-stat strong {
display: block;
color: #1769aa;
font-size: 23px;
}

.ac-logo-stat span {
color: #687789;
font-size: 12px;
}

.ac-logo-instructions {
padding: 15px;
background: #f3f6fa;
border-radius: 8px;
color: #34465a;
line-height: 1.6;
}

.ac-logo-regions {
display: flex;
flex-wrap: wrap;
gap: 8px;
margin-top: 14px;
}

.ac-logo-chip {
padding: 5px 12px;
background: #102b46;
color: #fff;
border-radius: 20px;
font-size: 12px;
font-weight: bold;
}

.ac-logo-toolbar {
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 10px;
margin: 12px 0;
color: #34465a;
font-weight: bold;
}

.ac-logo-bar {
height: 8px;
background: #e3eaf2;
border-radius: 6px;
overflow: hidden;
margin-bottom: 16px;
}

.ac-logo-bar div {
height: 100%;
width: 0;
background: #3b9b65;
transition: width .25s;
}

.ac-logo-prompt {
margin: 6px 0 14px;
padding: 14px;
text-align: center;
background: #102b46;
color: #fff;
border-radius: 9px;
font-weight: bold;
}

.ac-logo-stage {
display: flex;
align-items: center;
justify-content: center;
min-height: 220px;
padding: 20px;
background: #ffffff;
border: 1px solid #dce4ed;
border-radius: 10px;
}

.ac-logo-stage img {
display: block;
max-width: 100%;
max-height: 180px;
object-fit: contain;
}

.ac-logo-missing {
padding: 20px;
text-align: center;
color: #8c2520;
background: #fff0ef;
border: 1px dashed #d94b45;
border-radius: 8px;
font-size: 14px;
line-height: 1.5;
}

.ac-logo-options {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 12px;
margin-top: 16px;
}

.ac-logo-option {
padding: 15px 12px;
background: #f3f6fa;
border: 2px solid #dce4ed;
border-radius: 8px;
color: #102b46;
font-size: 15px;
font-weight: bold;
text-align: center;
cursor: pointer;
transition: background .15s, border-color .15s;
}

.ac-logo-option:hover:not(:disabled) {
background: #fdf3d6;
border-color: #f0c75e;
}

.ac-logo-option:focus {
outline: none;
border-color: #102b46;
}

.ac-logo-option.correct {
background: #e8f6ed;
border-color: #3b9b65;
color: #155b30;
}

.ac-logo-option.wrong {
background: #fff0ef;
border-color: #d94b45;
color: #8c2520;
}

.ac-logo-option:disabled {
cursor: default;
}

.ac-logo-feedback {
margin-top: 15px;
padding: 14px;
border-radius: 8px;
line-height: 1.5;
}

.ac-logo-feedback.good {
background: #e8f6ed;
color: #155b30;
}

.ac-logo-feedback.bad {
background: #fff0ef;
color: #8c2520;
}

.ac-logo-button {
margin: 15px 8px 0 0;
padding: 12px 20px;
border: 0;
border-radius: 6px;
background: #102b46;
color: white;
font-weight: bold;
cursor: pointer;
}

.ac-logo-button.gold {
background: #d5a642;
color: #172b40;
}

.ac-logo-result {
padding: 25px 10px;
text-align: center;
}

.ac-logo-result .score {
margin: 15px 0;
color: #1769aa;
font-size: 44px;
font-weight: bold;
}

.ac-logo-breakdown {
display: flex;
flex-wrap: wrap;
gap: 10px;
justify-content: center;
margin: 18px 0;
}

.ac-logo-breakdown div {
min-width: 120px;
padding: 11px;
background: #f3f6fa;
border-radius: 8px;
}

.ac-logo-breakdown strong {
display: block;
color: #1769aa;
font-size: 20px;
}

.ac-logo-breakdown span {
color: #687789;
font-size: 12px;
}

.ac-logo-missed {
margin: 16px auto 0;
max-width: 560px;
padding: 14px;
background: #fff0ef;
color: #8c2520;
border-radius: 8px;
text-align: left;
line-height: 1.6;
font-size: 14px;
}

@media(max-width:550px) {
.ac-logo-card { padding: 15px; }
.ac-logo-toolbar { font-size: 13px; }
.ac-logo-options { grid-template-columns: 1fr; }
.ac-logo-stage { min-height: 170px; }
.ac-logo-stage img { max-height: 140px; }
}

`;

document.head.appendChild(style);

}

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
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

function buildQuestions() {

  return shuffle(airlines).map(function (airline) {

    const sameRegion = shuffle(airlines.filter(function (item) {
      return item.region === airline.region && item.name !== airline.name;
    }));

    const otherRegion = shuffle(airlines.filter(function (item) {
      return item.region !== airline.region;
    }));

    /* 2 look-alike options from the same region + 1 from another region */
    const wrong = sameRegion.slice(0, 2).concat(otherRegion.slice(0, 1));

    return {
      airline: airline,
      options: shuffle(wrong.concat(airline))
    };

  });

}

function loadLogo(container, airline) {

  container.innerHTML = "";

  const img = document.createElement("img");
  img.alt = "Airline logo - which airline is this?";
  img.draggable = false;

  let index = 0;

  img.onerror = function () {
    index++;
    if (index < LOGO_EXTENSIONS.length) {
      img.src = LOGO_FOLDER + airline.file + "." + LOGO_EXTENSIONS[index];
    } else {
      container.innerHTML = "";
      container.appendChild(el(
        "div",
        "ac-logo-missing",
        "Logo file not found. Add " + LOGO_FOLDER + airline.file +
        ".png to your website folder to show this logo."
      ));
    }
  };

  img.src = LOGO_FOLDER + airline.file + "." + LOGO_EXTENSIONS[0];
  container.appendChild(img);

}

function createQuiz() {

  const section = document.getElementById("quiz");
  if (!section || section.querySelector("#acLogoQuiz")) return;

  addStyles();

  const card = el("div", "ac-logo-card");
  card.id = "acLogoQuiz";

  card.appendChild(el("h3", "", "Airline Logo Challenge"));

  card.appendChild(el(
    "p",
    "",
    "Recognise the airlines of the USA, UK, Middle East and Australia from their logos."
  ));

  const instructions = el("div", "ac-logo-instructions");
  instructions.textContent =
    "How to play: A logo appears on screen. Choose the correct airline from four options. " +
    "There are " + airlines.length + " logos in total. Score " + PASS_MARK + "% or more to pass.";
  card.appendChild(instructions);

  const regions = el("div", "ac-logo-regions");
  Object.keys(REGION_LABELS).forEach(function (key) {
    regions.appendChild(el("span", "ac-logo-chip", REGION_LABELS[key]));
  });
  card.appendChild(regions);

  const stats = el("div", "ac-logo-stats");

  [
    [String(saved.bestScore) + "%", "Best Score"],
    [String(saved.attempts), "Attempts"],
    [String(airlines.length), "Airline Logos"]
  ].forEach(function (item) {
    const box = el("div", "ac-logo-stat");
    box.appendChild(el("strong", "", item[0]));
    box.appendChild(el("span", "", item[1]));
    stats.appendChild(box);
  });

  card.appendChild(stats);

  const start = el("button", "ac-logo-button gold", "Start Logo Challenge");
  start.type = "button";
  start.addEventListener("click", startQuiz);
  card.appendChild(start);

  const area = el("div");
  area.id = "acLogoArea";
  card.appendChild(area);

  section.appendChild(card);

}

function startQuiz() {

  const area = document.getElementById("acLogoArea");
  if (!area) return;

  questions = buildQuestions();
  current = 0;
  score = 0;
  locked = false;
  missed = [];
  regionStats = {};

  Object.keys(REGION_LABELS).forEach(function (key) {
    regionStats[key] = { correct: 0, total: 0 };
  });

  area.innerHTML = "";

  const toolbar = el("div", "ac-logo-toolbar");

  const progress = el("span", "", "Logo 1 / " + questions.length);
  progress.id = "acLogoProgress";

  const scoreBox = el("span", "", "Score: 0");
  scoreBox.id = "acLogoScore";

  toolbar.appendChild(progress);
  toolbar.appendChild(scoreBox);
  area.appendChild(toolbar);

  const bar = el("div", "ac-logo-bar");
  const fill = document.createElement("div");
  fill.id = "acLogoBarFill";
  bar.appendChild(fill);
  area.appendChild(bar);

  const stage = el("div", "ac-logo-stage");
  stage.id = "acLogoStage";
  area.appendChild(stage);

  area.appendChild(el("div", "ac-logo-prompt", "Which airline does this logo belong to?"));

  const options = el("div", "ac-logo-options");
  options.id = "acLogoOptions";
  area.appendChild(options);

  const feedback = el("div", "ac-logo-feedback");
  feedback.id = "acLogoFeedback";
  feedback.hidden = true;
  area.appendChild(feedback);

  const next = el("button", "ac-logo-button gold", "Next Logo");
  next.id = "acLogoNext";
  next.type = "button";
  next.hidden = true;
  next.addEventListener("click", nextQuestion);
  area.appendChild(next);

  showQuestion();

}

function showQuestion() {

  const question = questions[current];

  locked = false;

  document.getElementById("acLogoProgress").textContent =
    "Logo " + (current + 1) + " / " + questions.length;

  document.getElementById("acLogoScore").textContent = "Score: " + score;

  document.getElementById("acLogoBarFill").style.width =
    Math.round((current / questions.length) * 100) + "%";

  loadLogo(document.getElementById("acLogoStage"), question.airline);

  const optionsBox = document.getElementById("acLogoOptions");
  optionsBox.innerHTML = "";

  question.options.forEach(function (airline) {
    const button = el("button", "ac-logo-option", airline.name);
    button.type = "button";
    button.dataset.name = airline.name;
    button.addEventListener("click", function () {
      chooseAnswer(airline, button);
    });
    optionsBox.appendChild(button);
  });

  document.getElementById("acLogoFeedback").hidden = true;
  document.getElementById("acLogoNext").hidden = true;

}

function chooseAnswer(selected, button) {

  if (locked) return;
  locked = true;

  const correct = questions[current].airline;
  const feedback = document.getElementById("acLogoFeedback");
  const next = document.getElementById("acLogoNext");

  regionStats[correct.region].total++;

  const allButtons = document.querySelectorAll("#acLogoOptions .ac-logo-option");

  allButtons.forEach(function (item) {
    item.disabled = true;
    if (item.dataset.name === correct.name) {
      item.classList.add("correct");
    }
  });

  feedback.hidden = false;

  if (selected.name === correct.name) {

    score++;
    regionStats[correct.region].correct++;

    button.classList.add("correct");
    feedback.className = "ac-logo-feedback good";
    feedback.textContent =
      "Correct! This is " + correct.name + " (IATA code " + correct.code + ").";

  } else {

    missed.push(correct.name + " (" + correct.code + ")");

    button.classList.add("wrong");
    feedback.className = "ac-logo-feedback bad";
    feedback.textContent =
      "Not quite. That logo is " + correct.name +
      " (IATA code " + correct.code + "), not " + selected.name + ".";

  }

  document.getElementById("acLogoScore").textContent = "Score: " + score;

  next.hidden = false;
  next.textContent = current === questions.length - 1 ? "View Results" : "Next Logo";

}

function nextQuestion() {

  current++;

  if (current >= questions.length) {
    finishQuiz();
    return;
  }

  showQuestion();

}

function finishQuiz() {

  locked = true;

  const total = questions.length;
  const percentage = Math.round((score / total) * 100);

  saved.attempts++;
  saved.lastScore = percentage;
  saved.bestScore = Math.max(saved.bestScore, percentage);
  saveProgress();

  const area = document.getElementById("acLogoArea");
  if (!area) return;

  area.innerHTML = "";

  const result = el("div", "ac-logo-result");

  result.appendChild(el("h3", "", "Challenge Completed!"));
  result.appendChild(el("div", "score", percentage + "%"));
  result.appendChild(el("h3", "", score + " out of " + total + " logos identified"));

  result.appendChild(el(
    "p",
    "",
    percentage >= PASS_MARK
      ? "Well done! You passed the Airline Logo Challenge."
      : "Keep practising and try again. You can improve your score."
  ));

  const breakdown = el("div", "ac-logo-breakdown");

  Object.keys(REGION_LABELS).forEach(function (key) {
    const data = regionStats[key];
    const box = document.createElement("div");
    box.appendChild(el("strong", "", data.correct + " / " + data.total));
    box.appendChild(el("span", "", REGION_LABELS[key]));
    breakdown.appendChild(box);
  });

  result.appendChild(breakdown);

  result.appendChild(el("p", "", "Best score: " + saved.bestScore + "%"));

  if (missed.length) {
    const missedBox = el("div", "ac-logo-missed");
    missedBox.appendChild(el("strong", "", "Airlines to review:"));
    missedBox.appendChild(document.createElement("br"));
    missedBox.appendChild(document.createTextNode(missed.join(", ")));
    result.appendChild(missedBox);
  }

  const retry = el("button", "ac-logo-button gold", "Try Again");
  retry.type = "button";
  retry.addEventListener("click", startQuiz);
  result.appendChild(retry);

  area.appendChild(result);

  const stats = document.querySelectorAll("#acLogoQuiz .ac-logo-stat strong");

  if (stats.length === 3) {
    stats[0].textContent = saved.bestScore + "%";
    stats[1].textContent = saved.attempts;
  }

}

function initialise() {

  createQuiz();

  const section = document.getElementById("quiz");
  if (!section) return;

  const observer = new MutationObserver(function () {
    if (!section.querySelector("#acLogoQuiz")) {
      createQuiz();
    }
  });

  observer.observe(section, { childList: true });

}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialise);
} else {
  initialise();
}

})();

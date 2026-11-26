/* =========================================================
AIRLINE CORNER - AIRLINE CODE CHALLENGE

40 airline IATA codes, 4 answer options each.
Regions: USA, UK, Middle East, Australia & Oceania.
No pictures needed.
========================================================= */

(function () {

"use strict";

const STORAGE_KEY = "airlineCornerCodeQuiz";
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
{ name: "Air Niugini", code: "PX", region: "Australia", file: "air-niugini" }

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
  console.warn("Code quiz progress could not be loaded.");
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  } catch (error) {
    console.warn("Code quiz progress could not be saved.");
  }
}

function addStyles() {

if (document.getElementById("acCodeQuizStyles")) return;

const style = document.createElement("style");
style.id = "acCodeQuizStyles";

style.textContent = `

.ac-code-card {
margin-top: 25px;
padding: 25px;
background: #fff;
border: 1px solid #dce4ed;
border-radius: 12px;
box-shadow: 0 3px 12px rgba(20,45,70,.05);
}

.ac-code-card h3 {
color: #102b46;
margin-bottom: 8px;
}

.ac-code-stats {
display: flex;
flex-wrap: wrap;
gap: 12px;
margin: 18px 0;
}

.ac-code-stat {
flex: 1;
min-width: 100px;
padding: 13px;
text-align: center;
background: #f3f6fa;
border-radius: 8px;
}

.ac-code-stat strong {
display: block;
color: #1769aa;
font-size: 23px;
}

.ac-code-stat span {
color: #687789;
font-size: 12px;
}

.ac-code-instructions {
padding: 15px;
background: #f3f6fa;
border-radius: 8px;
color: #34465a;
line-height: 1.6;
}

.ac-code-regions {
display: flex;
flex-wrap: wrap;
gap: 8px;
margin-top: 14px;
}

.ac-code-chip {
padding: 5px 12px;
background: #102b46;
color: #fff;
border-radius: 20px;
font-size: 12px;
font-weight: bold;
}

.ac-code-toolbar {
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 10px;
margin: 12px 0;
color: #34465a;
font-weight: bold;
}

.ac-code-bar {
height: 8px;
background: #e3eaf2;
border-radius: 6px;
overflow: hidden;
margin-bottom: 16px;
}

.ac-code-bar div {
height: 100%;
width: 0;
background: #3b9b65;
transition: width .25s;
}

.ac-code-prompt {
margin: 6px 0 14px;
padding: 14px;
text-align: center;
background: #102b46;
color: #fff;
border-radius: 9px;
font-weight: bold;
}

.ac-code-stage {
display: flex;
align-items: center;
justify-content: center;
min-height: 220px;
padding: 20px;
background: #ffffff;
border: 1px solid #dce4ed;
border-radius: 10px;
}

.ac-code-stage img {
display: block;
max-width: 100%;
max-height: 180px;
object-fit: contain;
}

.ac-code-missing {
padding: 20px;
text-align: center;
color: #8c2520;
background: #fff0ef;
border: 1px dashed #d94b45;
border-radius: 8px;
font-size: 14px;
line-height: 1.5;
}

.ac-code-options {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 12px;
margin-top: 16px;
}

.ac-code-option {
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

.ac-code-option:hover:not(:disabled) {
background: #fdf3d6;
border-color: #f0c75e;
}

.ac-code-option:focus {
outline: none;
border-color: #102b46;
}

.ac-code-option.correct {
background: #e8f6ed;
border-color: #3b9b65;
color: #155b30;
}

.ac-code-option.wrong {
background: #fff0ef;
border-color: #d94b45;
color: #8c2520;
}

.ac-code-option:disabled {
cursor: default;
}

.ac-code-feedback {
margin-top: 15px;
padding: 14px;
border-radius: 8px;
line-height: 1.5;
}

.ac-code-feedback.good {
background: #e8f6ed;
color: #155b30;
}

.ac-code-feedback.bad {
background: #fff0ef;
color: #8c2520;
}

.ac-code-button {
margin: 15px 8px 0 0;
padding: 12px 20px;
border: 0;
border-radius: 6px;
background: #102b46;
color: white;
font-weight: bold;
cursor: pointer;
}

.ac-code-button.gold {
background: #d5a642;
color: #172b40;
}

.ac-code-result {
padding: 25px 10px;
text-align: center;
}

.ac-code-result .score {
margin: 15px 0;
color: #1769aa;
font-size: 44px;
font-weight: bold;
}

.ac-code-breakdown {
display: flex;
flex-wrap: wrap;
gap: 10px;
justify-content: center;
margin: 18px 0;
}

.ac-code-breakdown div {
min-width: 120px;
padding: 11px;
background: #f3f6fa;
border-radius: 8px;
}

.ac-code-breakdown strong {
display: block;
color: #1769aa;
font-size: 20px;
}

.ac-code-breakdown span {
color: #687789;
font-size: 12px;
}

.ac-code-missed {
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

.ac-code-big {
font-size: 72px;
font-weight: bold;
color: #102b46;
letter-spacing: 6px;
}

@media(max-width:550px) {
.ac-code-big { font-size: 54px; }
.ac-code-card { padding: 15px; }
.ac-code-toolbar { font-size: 13px; }
.ac-code-options { grid-template-columns: 1fr; }
.ac-code-stage { min-height: 170px; }
.ac-code-stage img { max-height: 140px; }
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

function showCode(container, airline) {

  container.innerHTML = "";
  container.appendChild(el("div", "ac-code-big", airline.code));

}

function createQuiz(grid) {

  const section = document.getElementById("quiz");
  if (!section || !grid || !grid.parentNode) return;

  const old = document.getElementById("acCodeQuiz");
  if (old) old.remove();

  addStyles();

  const card = el("div", "ac-code-card");
  card.id = "acCodeQuiz";

  card.appendChild(el("h3", "", "Airline Code Challenge"));

  card.appendChild(el(
    "p",
    "",
    "Learn the two-character IATA airline codes of airlines from the USA, UK, Middle East and Australia."
  ));

  const instructions = el("div", "ac-code-instructions");
  instructions.textContent =
    "How to play: An airline code appears on screen. Choose the airline that uses this code from four options. " +
    "There are " + airlines.length + " airline codes in total. Score " + PASS_MARK + "% or more to pass.";
  card.appendChild(instructions);

  const regions = el("div", "ac-code-regions");
  Object.keys(REGION_LABELS).forEach(function (key) {
    regions.appendChild(el("span", "ac-code-chip", REGION_LABELS[key]));
  });
  card.appendChild(regions);

  const stats = el("div", "ac-code-stats");

  [
    [String(saved.bestScore) + "%", "Best Score"],
    [String(saved.attempts), "Attempts"],
    [String(airlines.length), "Airline Codes"]
  ].forEach(function (item) {
    const box = el("div", "ac-code-stat");
    box.appendChild(el("strong", "", item[0]));
    box.appendChild(el("span", "", item[1]));
    stats.appendChild(box);
  });

  card.appendChild(stats);

  const start = el("button", "ac-code-button gold", "Start Code Challenge");
  start.type = "button";
  start.addEventListener("click", startQuiz);
  card.appendChild(start);

  const back = el("button", "ac-code-button", "\u2190 Back to Quiz Menu");
  back.type = "button";
  back.addEventListener("click", function () {
    card.remove();
    grid.style.display = "";
  });
  card.appendChild(back);

  const area = el("div");
  area.id = "acCodeArea";
  card.appendChild(area);

  grid.style.display = "none";
  grid.parentNode.insertBefore(card, grid.nextSibling);

}

function startQuiz() {

  const area = document.getElementById("acCodeArea");
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

  const toolbar = el("div", "ac-code-toolbar");

  const progress = el("span", "", "Question 1 / " + questions.length);
  progress.id = "acCodeProgress";

  const scoreBox = el("span", "", "Score: 0");
  scoreBox.id = "acCodeScore";

  toolbar.appendChild(progress);
  toolbar.appendChild(scoreBox);
  area.appendChild(toolbar);

  const bar = el("div", "ac-code-bar");
  const fill = document.createElement("div");
  fill.id = "acCodeBarFill";
  bar.appendChild(fill);
  area.appendChild(bar);

  const stage = el("div", "ac-code-stage");
  stage.id = "acCodeStage";
  area.appendChild(stage);

  area.appendChild(el("div", "ac-code-prompt", "Which airline uses this code?"));

  const options = el("div", "ac-code-options");
  options.id = "acCodeOptions";
  area.appendChild(options);

  const feedback = el("div", "ac-code-feedback");
  feedback.id = "acCodeFeedback";
  feedback.hidden = true;
  area.appendChild(feedback);

  const next = el("button", "ac-code-button gold", "Next Code");
  next.id = "acCodeNext";
  next.type = "button";
  next.hidden = true;
  next.addEventListener("click", nextQuestion);
  area.appendChild(next);

  showQuestion();

}

function showQuestion() {

  const question = questions[current];

  locked = false;

  document.getElementById("acCodeProgress").textContent =
    "Question " + (current + 1) + " / " + questions.length;

  document.getElementById("acCodeScore").textContent = "Score: " + score;

  document.getElementById("acCodeBarFill").style.width =
    Math.round((current / questions.length) * 100) + "%";

  showCode(document.getElementById("acCodeStage"), question.airline);

  const optionsBox = document.getElementById("acCodeOptions");
  optionsBox.innerHTML = "";

  question.options.forEach(function (airline) {
    const button = el("button", "ac-code-option", airline.name);
    button.type = "button";
    button.dataset.name = airline.name;
    button.addEventListener("click", function () {
      chooseAnswer(airline, button);
    });
    optionsBox.appendChild(button);
  });

  document.getElementById("acCodeFeedback").hidden = true;
  document.getElementById("acCodeNext").hidden = true;

}

function chooseAnswer(selected, button) {

  if (locked) return;
  locked = true;

  const correct = questions[current].airline;
  const feedback = document.getElementById("acCodeFeedback");
  const next = document.getElementById("acCodeNext");

  regionStats[correct.region].total++;

  const allButtons = document.querySelectorAll("#acCodeOptions .ac-code-option");

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
    feedback.className = "ac-code-feedback good";
    feedback.textContent =
      "Correct! " + correct.code + " is " + correct.name + ".";

  } else {

    missed.push(correct.name + " (" + correct.code + ")");

    button.classList.add("wrong");
    feedback.className = "ac-code-feedback bad";
    feedback.textContent =
      "Not quite. " + correct.code + " is the code for " + correct.name + ", not " + selected.name + ".";

  }

  document.getElementById("acCodeScore").textContent = "Score: " + score;

  next.hidden = false;
  next.textContent = current === questions.length - 1 ? "View Results" : "Next Code";

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

  const area = document.getElementById("acCodeArea");
  if (!area) return;

  area.innerHTML = "";

  const result = el("div", "ac-code-result");

  result.appendChild(el("h3", "", "Challenge Completed!"));
  result.appendChild(el("div", "score", percentage + "%"));
  result.appendChild(el("h3", "", score + " out of " + total + " codes identified"));

  result.appendChild(el(
    "p",
    "",
    percentage >= PASS_MARK
      ? "Well done! You passed the Airline Code Challenge."
      : "Keep practising and try again. You can improve your score."
  ));

  const breakdown = el("div", "ac-code-breakdown");

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
    const missedBox = el("div", "ac-code-missed");
    missedBox.appendChild(el("strong", "", "Airlines to review:"));
    missedBox.appendChild(document.createElement("br"));
    missedBox.appendChild(document.createTextNode(missed.join(", ")));
    result.appendChild(missedBox);
  }

  const retry = el("button", "ac-code-button gold", "Try Again");
  retry.type = "button";
  retry.addEventListener("click", startQuiz);
  result.appendChild(retry);

  area.appendChild(result);

  const stats = document.querySelectorAll("#acCodeQuiz .ac-code-stat strong");

  if (stats.length === 3) {
    stats[0].textContent = saved.bestScore + "%";
    stats[1].textContent = saved.attempts;
  }

}

/* Finds the "Airline Code Challenge" menu card that was clicked */
function findClickedCard(target) {

  const section = document.getElementById("quiz");
  if (!section || !target || !section.contains(target)) return null;
  if (target.closest && target.closest("#acCodeQuiz")) return null;

  let node = target;

  while (node && node !== section) {
    const text = node.textContent || "";
    if (text.indexOf("Airline Code Challenge") !== -1) {
      if (text.indexOf("Airport Code Challenge") !== -1) return null;
      return node;
    }
    node = node.parentNode;
  }

  return null;

}

/* Hides the two menu cards that are not wanted */
function hideExtraCards() {

  const section = document.getElementById("quiz");
  if (!section) return;

  const unwanted = ["Airline Hub Cities", "USA & Canada Geography"];

  section.querySelectorAll("*").forEach(function (node) {
    if (node.id === "acCodeQuiz" || node.closest("#acCodeQuiz")) return;
    const text = node.textContent || "";
    if (text.indexOf("Airport Code Challenge") !== -1) return;
    if (!node.parentNode) return;
    const parentText = node.parentNode.textContent || "";
    if (parentText.indexOf("Airport Code Challenge") === -1) return;
    const isUnwanted = unwanted.some(function (name) {
      return text.indexOf(name) !== -1;
    });
    if (isUnwanted && node.style.display !== "none") {
      node.style.display = "none";
    }
  });

}

function initialise() {

  /* Open this quiz only when the Airline Code Challenge card is clicked */
  document.addEventListener("click", function (event) {

    const card = findClickedCard(event.target);
    if (!card) return;

    let grid = card.parentNode;

    while (
      grid &&
      grid.id !== "quiz" &&
      (grid.textContent || "").indexOf("Airport Code Challenge") === -1
    ) {
      grid = grid.parentNode;
    }

    if (!grid || grid.id === "quiz") return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    createQuiz(grid);

  }, true);

  const section = document.getElementById("quiz");
  if (!section) return;

  hideExtraCards();

  const observer = new MutationObserver(hideExtraCards);
  observer.observe(section, { childList: true, subtree: true });

}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialise);
} else {
  initialise();
}

})();

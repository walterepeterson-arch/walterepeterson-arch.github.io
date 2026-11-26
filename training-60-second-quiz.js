/* =========================================================
AIRLINE CORNER - 60-SECOND CHALLENGE (EASY)

Answer as many easy questions as you can in 60 seconds.
Opens only when the "60-Second Challenge" card is clicked.
25 easy general questions (no airline or airport codes).
========================================================= */

(function () {

"use strict";

const STORAGE_KEY = "airlineCornerEasy60v2";
const TOTAL_TIME = 60;
const FEEDBACK_MS = 600;

function q(text, correct, wrong1, wrong2, wrong3) {
  return { q: text, answer: correct, options: [correct, wrong1, wrong2, wrong3] };
}

const bank = [

q("What do you show to board the plane?", "Boarding pass", "Hotel key", "Library card", "Gift card"),
q("What does ETA stand for?", "Estimated Time of Arrival", "Early Ticket Approval", "Every Travel Agent", "Extra Time Allowed"),
q("What does ETD stand for?", "Estimated Time of Departure", "Early Ticket Date", "Extra Travel Day", "Estimated Travel Distance"),
q("What does PNR stand for?", "Passenger Name Record", "Plane Name Register", "Pilot Name Report", "Price Name Rate"),
q("What does IATA stand for?", "International Air Transport Association", "International Airline Travel Agency", "Internal Air Ticket Authority", "Indian Air Transport Association"),
q("Which cabin class is usually the cheapest?", "Economy", "First Class", "Business Class", "Suites"),
q("A one-way ticket means you travel...", "In one direction only", "There and back", "To three cities", "Without luggage"),
q("A round-trip ticket means you travel...", "There and back", "In one direction only", "Only on weekdays", "To two different countries"),
q("Who flies the aircraft?", "Pilot", "Passenger", "Check-in agent", "Baggage handler"),
q("Where do passengers leave their bags at the airport?", "Check-in counter", "Gate lounge", "Control tower", "Runway"),
q("Which company makes the Airbus A320?", "Airbus", "Boeing", "Embraer", "Bombardier"),
q("Which company makes the Boeing 737?", "Boeing", "Airbus", "Embraer", "ATR"),
q("Which document do you need to travel to another country?", "Passport", "Library card", "Gym card", "Movie ticket"),
q("What is the job of a flight attendant?", "Keeping passengers safe and comfortable", "Flying the plane", "Repairing the engine", "Loading the luggage"),
q("What is the long strip where planes take off and land?", "Runway", "Platform", "Harbour", "Highway"),
q("Where do passengers wait before boarding the plane?", "Departure gate", "Runway", "Cockpit", "Cargo hold"),
q("What is the pilots' room at the front of the plane called?", "Cockpit", "Galley", "Hangar", "Terminal"),
q("What is the kitchen area on an aircraft called?", "Galley", "Cockpit", "Hangar", "Runway"),
q("A non-stop flight...", "Does not stop between departure and arrival", "Stops in three cities", "Only flies at night", "Has no passengers"),
q("What does it mean to board a plane?", "To get on the plane", "To get off the plane", "To buy a ticket", "To pack a bag"),
q("What is hand luggage?", "A small bag you carry onto the plane", "A bag kept in the cargo hold", "A bag only pilots use", "A lost bag"),
q("What is an e-ticket?", "An electronic ticket", "A paper-only ticket", "A ticket for a bus", "A ticket for a hotel"),
q("What does a delayed flight mean?", "The flight leaves later than planned", "The flight leaves earlier", "The flight changes airline", "The flight will not operate"),
q("What does a cancelled flight mean?", "The flight will not operate", "The flight leaves late", "The flight leaves early", "The flight changes seat"),
q("What is the airport building where passengers check in?", "Terminal", "Hangar", "Control tower", "Runway")

];

let timer = null;
let secondsLeft = TOTAL_TIME;
let running = false;
let pool = [];
let poolIndex = 0;
let current = null;
let score = 0;
let answered = 0;
let locked = false;

let saved = {
  attempts: 0,
  bestScore: 0
};

try {
  saved = Object.assign(
    saved,
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
  );
} catch (error) {
  console.warn("60-second quiz progress could not be loaded.");
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  } catch (error) {
    console.warn("60-second quiz progress could not be saved.");
  }
}

function addStyles() {

if (document.getElementById("acTimedStyles")) return;

const style = document.createElement("style");
style.id = "acTimedStyles";

style.textContent = `

.ac-timed-card {
margin-top: 25px;
padding: 25px;
background: #fff;
border: 1px solid #dce4ed;
border-radius: 12px;
box-shadow: 0 3px 12px rgba(20,45,70,.05);
}

.ac-timed-card h3 {
color: #102b46;
margin-bottom: 8px;
}

.ac-timed-instructions {
padding: 15px;
background: #f3f6fa;
border-radius: 8px;
color: #34465a;
line-height: 1.6;
}

.ac-timed-stats {
display: flex;
flex-wrap: wrap;
gap: 12px;
margin: 18px 0;
}

.ac-timed-stat {
flex: 1;
min-width: 100px;
padding: 13px;
text-align: center;
background: #f3f6fa;
border-radius: 8px;
}

.ac-timed-stat strong {
display: block;
color: #1769aa;
font-size: 23px;
}

.ac-timed-stat span {
color: #687789;
font-size: 12px;
}

.ac-timed-toolbar {
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 10px;
margin: 12px 0;
color: #34465a;
font-weight: bold;
font-size: 18px;
}

.ac-timed-clock {
color: #1769aa;
}

.ac-timed-clock.low {
color: #d94b45;
}

.ac-timed-bar {
height: 8px;
background: #e3eaf2;
border-radius: 6px;
overflow: hidden;
margin-bottom: 16px;
}

.ac-timed-bar div {
height: 100%;
width: 100%;
background: #d5a642;
transition: width 1s linear;
}

.ac-timed-question {
padding: 22px 16px;
text-align: center;
background: #102b46;
color: #fff;
border-radius: 9px;
font-size: 20px;
font-weight: bold;
line-height: 1.4;
}

.ac-timed-options {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 12px;
margin-top: 16px;
}

.ac-timed-option {
padding: 17px 12px;
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

.ac-timed-option:hover:not(:disabled) {
background: #fdf3d6;
border-color: #f0c75e;
}

.ac-timed-option.correct {
background: #e8f6ed;
border-color: #3b9b65;
color: #155b30;
}

.ac-timed-option.wrong {
background: #fff0ef;
border-color: #d94b45;
color: #8c2520;
}

.ac-timed-option:disabled {
cursor: default;
}

.ac-timed-button {
margin: 15px 8px 0 0;
padding: 12px 20px;
border: 0;
border-radius: 6px;
background: #102b46;
color: white;
font-weight: bold;
cursor: pointer;
}

.ac-timed-button.gold {
background: #d5a642;
color: #172b40;
}

.ac-timed-result {
padding: 25px 10px;
text-align: center;
}

.ac-timed-result .score {
margin: 15px 0;
color: #1769aa;
font-size: 52px;
font-weight: bold;
}

@media(max-width:550px) {
.ac-timed-card { padding: 15px; }
.ac-timed-options { grid-template-columns: 1fr; }
.ac-timed-question { font-size: 18px; }
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

function stopTimer() {
  if (timer) clearInterval(timer);
  timer = null;
  running = false;
}

/* NOTE: this card uses the id "acCodeQuiz" on purpose, so the Back
   button script knows a quiz is open. Only one quiz is open at a time. */
function createQuiz(grid) {

  const section = document.getElementById("quiz");
  if (!section || !grid || !grid.parentNode) return;

  stopTimer();

  const old = document.getElementById("acCodeQuiz");
  if (old) old.remove();

  addStyles();

  const card = el("div", "ac-timed-card");
  card.id = "acCodeQuiz";

  card.appendChild(el("h3", "", "60-Second Challenge"));

  card.appendChild(el(
    "p",
    "",
    "Answer as many of the " + bank.length + " easy questions as you can before the time runs out."
  ));

  const instructions = el("div", "ac-timed-instructions");
  instructions.textContent =
    "How to play: Press Start. A question appears with four answers. " +
    "Tap the correct answer to move straight to the next question. " +
    "There are " + bank.length + " questions and you have 60 seconds. Every correct answer is one point.";
  card.appendChild(instructions);

  const stats = el("div", "ac-timed-stats");

  [
    [String(saved.bestScore), "Best Score"],
    [String(saved.attempts), "Attempts"],
    [String(bank.length), "Questions"]
  ].forEach(function (item) {
    const box = el("div", "ac-timed-stat");
    box.appendChild(el("strong", "", item[0]));
    box.appendChild(el("span", "", item[1]));
    stats.appendChild(box);
  });

  card.appendChild(stats);

  const start = el("button", "ac-timed-button gold", "Start 60-Second Challenge");
  start.type = "button";
  start.addEventListener("click", startQuiz);
  card.appendChild(start);

  const back = el("button", "ac-timed-button", "\u2190 Back to Quiz Menu");
  back.type = "button";
  back.addEventListener("click", function () {
    stopTimer();
    card.remove();
    grid.style.display = "";
  });
  card.appendChild(back);

  const area = el("div");
  area.id = "acTimedArea";
  card.appendChild(area);

  grid.style.display = "none";
  grid.parentNode.insertBefore(card, grid.nextSibling);

}

function nextFromPool() {

  if (poolIndex >= pool.length) return null;

  const item = pool[poolIndex];
  poolIndex++;

  return {
    q: item.q,
    answer: item.answer,
    options: shuffle(item.options)
  };

}

function startQuiz() {

  const area = document.getElementById("acTimedArea");
  if (!area) return;

  stopTimer();

  pool = shuffle(bank);
  poolIndex = 0;
  score = 0;
  answered = 0;
  locked = false;
  secondsLeft = TOTAL_TIME;
  running = true;

  area.innerHTML = "";

  const toolbar = el("div", "ac-timed-toolbar");

  const clock = el("span", "ac-timed-clock", "Time: " + secondsLeft + "s");
  clock.id = "acTimedClock";

  const scoreBox = el("span", "", "Score: 0");
  scoreBox.id = "acTimedScore";

  toolbar.appendChild(clock);
  toolbar.appendChild(scoreBox);
  area.appendChild(toolbar);

  const bar = el("div", "ac-timed-bar");
  const fill = document.createElement("div");
  fill.id = "acTimedFill";
  bar.appendChild(fill);
  area.appendChild(bar);

  const question = el("div", "ac-timed-question");
  question.id = "acTimedQuestion";
  area.appendChild(question);

  const options = el("div", "ac-timed-options");
  options.id = "acTimedOptions";
  area.appendChild(options);

  showQuestion();

  timer = setInterval(tick, 1000);

}

function tick() {

  secondsLeft--;

  const clock = document.getElementById("acTimedClock");
  const fill = document.getElementById("acTimedFill");

  if (!clock) {
    stopTimer();
    return;
  }

  clock.textContent = "Time: " + Math.max(secondsLeft, 0) + "s";
  clock.classList.toggle("low", secondsLeft <= 10);

  if (fill) {
    fill.style.width = Math.max(secondsLeft, 0) / TOTAL_TIME * 100 + "%";
  }

  if (secondsLeft <= 0) {
    finishQuiz();
  }

}

function showQuestion() {

  if (!running) return;

  current = nextFromPool();
  locked = false;

  if (!current) {
    finishQuiz();
    return;
  }

  document.getElementById("acTimedQuestion").textContent = current.q;

  const optionsBox = document.getElementById("acTimedOptions");
  optionsBox.innerHTML = "";

  current.options.forEach(function (text) {
    const button = el("button", "ac-timed-option", text);
    button.type = "button";
    button.addEventListener("click", function () {
      chooseAnswer(text, button);
    });
    optionsBox.appendChild(button);
  });

}

function chooseAnswer(text, button) {

  if (locked || !running) return;
  locked = true;

  answered++;

  const buttons = document.querySelectorAll("#acTimedOptions .ac-timed-option");

  buttons.forEach(function (item) {
    item.disabled = true;
    if (item.textContent === current.answer) {
      item.classList.add("correct");
    }
  });

  if (text === current.answer) {
    score++;
    document.getElementById("acTimedScore").textContent = "Score: " + score;
  } else {
    button.classList.add("wrong");
  }

  setTimeout(function () {
    if (running) showQuestion();
  }, FEEDBACK_MS);

}

function finishQuiz() {

  stopTimer();
  locked = true;

  saved.attempts++;
  saved.bestScore = Math.max(saved.bestScore, score);
  saveProgress();

  const area = document.getElementById("acTimedArea");
  if (!area) return;

  area.innerHTML = "";

  const result = el("div", "ac-timed-result");

  result.appendChild(el(
    "h3",
    "",
    secondsLeft <= 0 ? "Time Is Up!" : "All Questions Answered!"
  ));
  result.appendChild(el("div", "score", score + " / " + bank.length));
  result.appendChild(el(
    "h3",
    "",
    score + " correct out of " + answered + " answered"
  ));

  result.appendChild(el(
    "p",
    "",
    score >= 18
      ? "Excellent work! You are fast and sharp."
      : "Well done! Try again to beat your score."
  ));

  result.appendChild(el("p", "", "Best score: " + saved.bestScore));

  const retry = el("button", "ac-timed-button gold", "Try Again");
  retry.type = "button";
  retry.addEventListener("click", startQuiz);
  result.appendChild(retry);

  area.appendChild(result);

  const stats = document.querySelectorAll("#acCodeQuiz .ac-timed-stat strong");

  if (stats.length === 3) {
    stats[0].textContent = saved.bestScore;
    stats[1].textContent = saved.attempts;
  }

}

/* Finds the "60-Second Challenge" menu card that was clicked */
function findClickedCard(target) {

  const section = document.getElementById("quiz");
  if (!section || !target || !section.contains(target)) return null;
  if (target.closest && target.closest("#acCodeQuiz")) return null;

  let node = target;

  while (node && node !== section) {
    const text = node.textContent || "";
    if (text.indexOf("60-Second Challenge") !== -1) {
      if (text.indexOf("Airport Code Challenge") !== -1) return null;
      return node;
    }
    node = node.parentNode;
  }

  return null;

}

function initialise() {

  /* Open this quiz only when the 60-Second Challenge card is clicked */
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

}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialise);
} else {
  initialise();
}

})();

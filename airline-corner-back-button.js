/* =========================================================
AIRLINE CORNER - BACK BUTTON

Adds a "Back" button (top-left) on every page, and makes
the browser / phone Back button work between the pages
(Home -> Quiz -> a quiz) of Airline Corner.
========================================================= */

(function () {

"use strict";

let currentSection = "home";
let fromHistory = false;
let lastSub = false;

function quizSection() {
  return document.getElementById("quiz");
}

/* True when a quiz (not the 5-card menu) is on screen */
function inQuizScreen() {
  const quiz = quizSection();
  if (!quiz) return false;
  if (quiz.querySelector("#acCodeQuiz")) return true;
  return Boolean(quiz.querySelector(".acq-shell")) && !quiz.querySelector(".acq-grid");
}

/* Clicks the quiz's own exit button to return to the 5-card menu */
function exitToMenu() {

  const quiz = quizSection();
  if (!quiz) return false;

  const mine = quiz.querySelector("#acCodeQuiz");

  if (mine) {
    const backButton = Array.from(mine.querySelectorAll("button")).find(function (item) {
      return /back to quiz menu/i.test(item.textContent);
    });
    if (backButton) {
      backButton.click();
      return true;
    }
  }

  const exitButton = Array.from(quiz.querySelectorAll("button")).find(function (item) {
    return /exit quiz|back to menu|quiz menu|main menu|return/i.test(item.textContent);
  });

  if (exitButton) {
    exitButton.click();
    return true;
  }

  return false;

}

function pushEntry(sectionId, isSub) {
  const state = history.state;
  const index = state && typeof state.idx === "number" ? state.idx : 0;
  try {
    history.pushState({ s: sectionId, sub: Boolean(isSub), idx: index + 1 }, "");
  } catch (error) {
    console.warn("Back button history could not be updated.");
  }
}

function addStyles() {

  if (document.getElementById("acBackStyles")) return;

  const style = document.createElement("style");
  style.id = "acBackStyles";

  style.textContent = `
#acBackBar {
position: absolute;
top: 64px;
left: 18px;
z-index: 15;
}
#acBackBar button {
padding: 11px 20px;
border: 0;
border-radius: 6px;
background: #d5a642;
color: #172b40;
font-weight: bold;
font-size: 14px;
cursor: pointer;
box-shadow: 0 2px 8px rgba(0,0,0,.25);
}
#acBackBar button:hover {
background: #f0c75e;
}
@media(max-width:600px) {
#acBackBar { top: 58px; left: 10px; }
#acBackBar button { padding: 8px 14px; font-size: 13px; }
}
`;

  document.head.appendChild(style);

}

function updateBar() {
  const bar = document.getElementById("acBackBar");
  if (bar) bar.style.display = "block";
}

function goBack() {

  const state = history.state;

  if (inQuizScreen()) {
    if (state && state.sub) {
      history.back();
      return;
    }
    if (exitToMenu()) return;
  }

  if (state && typeof state.idx === "number" && state.idx > 0) {
    history.back();
    return;
  }

  if (currentSection === "home") {
    window.location.href = "index.html";
    return;
  }

  window.showSection("home");

}

function buildBar() {

  if (!document.body || document.getElementById("acBackBar")) return;

  addStyles();

  const bar = document.createElement("div");
  bar.id = "acBackBar";

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "\u2190 Back";
  button.addEventListener("click", goBack);

  bar.appendChild(button);
  document.body.appendChild(bar);

}

function wrapShowSection() {

  const original = window.showSection;
  if (typeof original !== "function") return false;

  window.showSection = function (sectionId, clickedButton) {

    original(sectionId, clickedButton);

    currentSection = sectionId;

    const state = history.state;
    const same = state && state.s === sectionId && !state.sub;

    if (!fromHistory && !same) {
      pushEntry(sectionId, false);
    }

    updateBar();

  };

  return true;

}

function watchQuiz() {

  const quiz = quizSection();
  if (!quiz) return;

  const observer = new MutationObserver(function () {

    const sub = inQuizScreen();

    if (sub && !lastSub && currentSection === "quiz") {
      pushEntry("quiz", true);
    }

    lastSub = sub;
    updateBar();

  });

  observer.observe(quiz, { childList: true, subtree: true });

}

function initialise() {

  if (!wrapShowSection()) return;

  buildBar();
  watchQuiz();

  try {
    history.replaceState({ s: "home", sub: false, idx: 0 }, "");
  } catch (error) {
    console.warn("Back button history could not be started.");
  }

  window.addEventListener("popstate", function (event) {

    const state = event.state;
    const target = state && state.s ? state.s : "home";
    const wantsSub = Boolean(state && state.sub);

    fromHistory = true;

    try {
      if (inQuizScreen() && !wantsSub) {
        exitToMenu();
      }
      window.showSection(target);
    } finally {
      fromHistory = false;
    }

    lastSub = inQuizScreen();
    updateBar();

  });

  updateBar();

}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialise);
} else {
  initialise();
}

})();

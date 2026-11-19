
/* =========================================================
   AIRLINE CORNER - USA STATES MAP CHALLENGE
   Original interactive 50-state map quiz.
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_KEY = "airlineCornerUSMapQuiz";
  const TOTAL_TIME = 300;

  const states = {
    "01": "Alabama", "02": "Alaska", "04": "Arizona",
    "05": "Arkansas", "06": "California", "08": "Colorado",
    "09": "Connecticut", "10": "Delaware", "12": "Florida",
    "13": "Georgia", "15": "Hawaii", "16": "Idaho",
    "17": "Illinois", "18": "Indiana", "19": "Iowa",
    "20": "Kansas", "21": "Kentucky", "22": "Louisiana",
    "23": "Maine", "24": "Maryland", "25": "Massachusetts",
    "26": "Michigan", "27": "Minnesota", "28": "Mississippi",
    "29": "Missouri", "30": "Montana", "31": "Nebraska",
    "32": "Nevada", "33": "New Hampshire", "34": "New Jersey",
    "35": "New Mexico", "36": "New York", "37": "North Carolina",
    "38": "North Dakota", "39": "Ohio", "40": "Oklahoma",
    "41": "Oregon", "42": "Pennsylvania", "44": "Rhode Island",
    "45": "South Carolina", "46": "South Dakota", "47": "Tennessee",
    "48": "Texas", "49": "Utah", "50": "Vermont",
    "51": "Virginia", "53": "Washington", "54": "West Virginia",
    "55": "Wisconsin", "56": "Wyoming"
  };

  let mapFeatures = [];
  let questionOrder = [];
  let current = 0;
  let score = 0;
  let secondsLeft = TOTAL_TIME;
  let timer = null;
  let locked = false;
  let mapReady = false;

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
    console.warn("Map quiz progress could not be loaded.");
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    } catch (error) {
      console.warn("Map quiz progress could not be saved.");
    }
  }

  function addStyles() {
    if (document.getElementById("acUSMapStyles")) return;

    const style = document.createElement("style");
    style.id = "acUSMapStyles";

    style.textContent = `
      .ac-usmap-card {
        margin-top: 25px;
        padding: 25px;
        background: #fff;
        border: 1px solid #dce4ed;
        border-radius: 12px;
        box-shadow: 0 3px 12px rgba(20,45,70,.05);
      }

      .ac-usmap-card h3 {
        color: #102b46;
        margin-bottom: 8px;
      }

      .ac-usmap-stats {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 18px 0;
      }

      .ac-usmap-stat {
        flex: 1;
        min-width: 100px;
        padding: 13px;
        text-align: center;
        background: #f3f6fa;
        border-radius: 8px;
      }

      .ac-usmap-stat strong {
        display: block;
        color: #1769aa;
        font-size: 23px;
      }

      .ac-usmap-stat span {
        color: #687789;
        font-size: 12px;
      }

      .ac-usmap-instructions {
        padding: 15px;
        background: #f3f6fa;
        border-radius: 8px;
        color: #34465a;
        line-height: 1.6;
      }

      .ac-usmap-target {
        margin: 18px 0;
        padding: 18px;
        text-align: center;
        background: #102b46;
        color: white;
        border-radius: 9px;
      }

      .ac-usmap-target strong {
        display: block;
        margin-top: 5px;
        color: #f3c65e;
        font-size: 27px;
      }

      .ac-usmap-toolbar {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 10px;
        margin: 12px 0;
        color: #34465a;
        font-weight: bold;
      }

      .ac-usmap-board {
        width: 100%;
        overflow: hidden;
        background: #eef4f8;
        border: 1px solid #dce4ed;
        border-radius: 10px;
      }

      .ac-usmap-board svg {
        display: block;
        width: 100%;
        height: auto;
      }

      .ac-usmap-state {
        fill: #c8d8e6;
        stroke: #ffffff;
        stroke-width: 1.2;
        cursor: pointer;
        transition: fill .15s;
      }

      .ac-usmap-state:hover {
        fill: #f0c75e;
      }

      .ac-usmap-state.correct {
        fill: #3b9b65;
        cursor: default;
      }

      .ac-usmap-state.wrong {
        fill: #d94b45;
      }

      .ac-usmap-state:focus {
        outline: none;
        stroke: #102b46;
        stroke-width: 3;
      }

      .ac-usmap-feedback {
        margin-top: 15px;
        padding: 14px;
        border-radius: 8px;
        line-height: 1.5;
      }

      .ac-usmap-feedback.good {
        background: #e8f6ed;
        color: #155b30;
      }

      .ac-usmap-feedback.bad {
        background: #fff0ef;
        color: #8c2520;
      }

      .ac-usmap-button {
        margin: 15px 8px 0 0;
        padding: 12px 20px;
        border: 0;
        border-radius: 6px;
        background: #102b46;
        color: white;
        font-weight: bold;
        cursor: pointer;
      }

      .ac-usmap-button.gold {
        background: #d5a642;
        color: #172b40;
      }

      .ac-usmap-button:disabled {
        opacity: .5;
        cursor: not-allowed;
      }

      .ac-usmap-result {
        padding: 25px 10px;
        text-align: center;
      }

      .ac-usmap-result .score {
        margin: 15px 0;
        color: #1769aa;
        font-size: 44px;
        font-weight: bold;
      }

      .ac-usmap-legend {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        margin-top: 12px;
        color: #536477;
        font-size: 13px;
      }

      .ac-usmap-dot {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 5px;
        border-radius: 3px;
        vertical-align: middle;
      }

      @media(max-width:550px) {
        .ac-usmap-card { padding: 15px; }
        .ac-usmap-toolbar { font-size: 13px; }
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

  function loadScript(url) {
    return new Promise(function (resolve, reject) {
      const existing = Array.from(document.scripts).find(function (script) {
        return script.src === url;
      });

      if (existing) {
        if (existing.dataset.loaded === "yes") {
          resolve();
        } else {
          existing.addEventListener("load", resolve, { once: true });
          existing.addEventListener("error", reject, { once: true });
        }
        return;
      }

      const script = document.createElement("script");
      script.src = url;
      script.async = true;

      script.onload = function () {
        script.dataset.loaded = "yes";
        resolve();
      };

      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async function loadMapLibraries() {
    if (window.d3 && window.topojson) return;

    await loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/d3/7.9.0/d3.min.js"
    );

    await loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/topojson-client/3.1.0/topojson-client.min.js"
    );
  }

  async function loadMapData() {
    if (mapFeatures.length) return;

    const response = await fetch(
      "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"
    );

    if (!response.ok) {
      throw new Error("The USA map data could not be loaded.");
    }

    const topology = await response.json();

    mapFeatures = window.topojson
      .feature(topology, topology.objects.states)
      .features
      .filter(function (feature) {
        const id = String(feature.id).padStart(2, "0");
        return Boolean(states[id]);
      })
      .map(function (feature) {
        return Object.assign({}, feature, {
          stateCode: String(feature.id).padStart(2, "0"),
          stateName: states[String(feature.id).padStart(2, "0")]
        });
      });

    if (mapFeatures.length !== 50) {
      throw new Error("The map did not return all 50 states.");
    }
  }

  function createQuiz() {
    const section = document.getElementById("quiz");
    if (!section || section.querySelector("#acUSMapQuiz")) return;

    addStyles();

    const card = el("div", "ac-usmap-card");
    card.id = "acUSMapQuiz";

    card.appendChild(el("h3", "", "USA States Map Challenge"));
    card.appendChild(el(
      "p",
      "",
      "Learn to recognise all 50 U.S. states by their locations on the map."
    ));

    const instructions = el("div", "ac-usmap-instructions");
    instructions.textContent =
      "How to play: A state name will appear above the map. Find that state and click its location. Correct answers turn green. Complete all 50 states before the timer runs out.";
    card.appendChild(instructions);

    const stats = el("div", "ac-usmap-stats");

    [
      [String(saved.bestScore) + "%", "Best Score"],
      [String(saved.attempts), "Attempts"],
      ["50", "U.S. States"]
    ].forEach(function (item) {
      const box = el("div", "ac-usmap-stat");
      box.appendChild(el("strong", "", item[0]));
      box.appendChild(el("span", "", item[1]));
      stats.appendChild(box);
    });

    card.appendChild(stats);

    const start = el("button", "ac-usmap-button gold", "Start 50-State Challenge");
    start.type = "button";
    start.addEventListener("click", startQuiz);
    card.appendChild(start);

    const area = el("div");
    area.id = "acUSMapArea";
    card.appendChild(area);

    section.appendChild(card);
  }

  function drawMap() {
    const board = document.getElementById("acUSMapBoard");
    if (!board) return;

    board.innerHTML = "";

    const width = 960;
    const height = 600;

    const svg = window.d3
      .select(board)
      .append("svg")
      .attr("viewBox", "0 0 " + width + " " + height)
      .attr("role", "img")
      .attr("aria-label", "Interactive map of the 50 United States");

    const collection = {
      type: "FeatureCollection",
      features: mapFeatures
    };

    const projection = window.d3.geoAlbersUsa()
      .fitSize([width - 35, height - 35], collection);

    const path = window.d3.geoPath().projection(projection);

    svg.append("g")
      .selectAll("path")
      .data(mapFeatures)
      .join("path")
      .attr("class", "ac-usmap-state")
      .attr("data-code", function (d) { return d.stateCode; })
      .attr("data-name", function (d) { return d.stateName; })
      .attr("d", path)
      .attr("tabindex", 0)
      .attr("role", "button")
      .attr("aria-label", function (d) { return d.stateName; })
      .on("click", function (event, d) {
        chooseState(d.stateName, this);
      })
      .on("keydown", function (event, d) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          chooseState(d.stateName, this);
        }
      });
  }

  async function startQuiz() {
    const area = document.getElementById("acUSMapArea");
    if (!area) return;

    clearInterval(timer);
    area.innerHTML = "<p>Loading the interactive USA map...</p>";

    try {
      await loadMapLibraries();
      await loadMapData();
    } catch (error) {
      area.innerHTML = "";
      const message = el(
        "p",
        "",
        "The map could not load. Please check your internet connection and refresh the page to try again."
      );
      area.appendChild(message);
      console.error(error);
      return;
    }

    questionOrder = mapFeatures.slice().sort(function () {
      return Math.random() - 0.5;
    });

    current = 0;
    score = 0;
    secondsLeft = TOTAL_TIME;
    locked = false;

    area.innerHTML = "";

    const toolbar = el("div", "ac-usmap-toolbar");
    toolbar.id = "acUSMapToolbar";

    const progress = el("span", "", "States identified: 0 / 50");
    progress.id = "acUSMapProgress";

    const clock = el("span", "", "Time: 5:00");
    clock.id = "acUSMapClock";

    toolbar.appendChild(progress);
    toolbar.appendChild(clock);
    area.appendChild(toolbar);

    const target = el("div", "ac-usmap-target");
    target.appendChild(el("span", "", "FIND THIS STATE"));
    target.appendChild(el("strong", "", questionOrder[0].stateName));
    target.id = "acUSMapTarget";
    area.appendChild(target);

    const board = el("div", "ac-usmap-board");
    board.id = "acUSMapBoard";
    area.appendChild(board);

    const legend = el("div", "ac-usmap-legend");

    [
      ["#c8d8e6", "Not yet identified"],
      ["#3b9b65", "Correctly identified"],
      ["#d94b45", "Incorrect click"]
    ].forEach(function (item) {
      const span = document.createElement("span");
      const dot = el("i", "ac-usmap-dot");
      dot.style.background = item[0];
      span.appendChild(dot);
      span.appendChild(document.createTextNode(item[1]));
      legend.appendChild(span);
    });

    area.appendChild(legend);

    const feedback = el("div", "ac-usmap-feedback");
    feedback.id = "acUSMapFeedback";
    feedback.hidden = true;
    area.appendChild(feedback);

    const next = el("button", "ac-usmap-button gold", "Next State");
    next.id = "acUSMapNext";
    next.type = "button";
    next.hidden = true;
    next.addEventListener("click", nextQuestion);
    area.appendChild(next);

    drawMap();
    startTimer();
  }

  function startTimer() {
    clearInterval(timer);

    timer = setInterval(function () {
      secondsLeft--;

      const clock = document.getElementById("acUSMapClock");
      if (clock) {
        const minutes = Math.floor(secondsLeft / 60);
        const seconds = secondsLeft % 60;

        clock.textContent =
          "Time: " + minutes + ":" + String(seconds).padStart(2, "0");
      }

      if (secondsLeft <= 0) {
        finishQuiz(true);
      }
    }, 1000);
  }

  function chooseState(selected, pathElement) {
    if (locked) return;

    const target = questionOrder[current].stateName;
    const feedback = document.getElementById("acUSMapFeedback");

    if (selected === target) {
      locked = true;
      score++;

      window.d3.select(pathElement).classed("correct", true);

      feedback.hidden = false;
      feedback.className = "ac-usmap-feedback good";
      feedback.textContent = "Correct! You found " + target + ".";

      document.getElementById("acUSMapProgress").textContent =
        "States identified: " + score + " / 50";

      const next = document.getElementById("acUSMapNext");
      next.hidden = false;
      next.textContent = current === 49 ? "View Results" : "Next State";
    } else {
      window.d3.select(pathElement).classed("wrong", true);

      feedback.hidden = false;
      feedback.className = "ac-usmap-feedback bad";
      feedback.textContent =
        "That is " + selected + ". Look for " + target + " and try again.";

      window.setTimeout(function () {
        if (pathElement && pathElement.isConnected) {
          window.d3.select(pathElement).classed("wrong", false);
        }
      }, 700);
    }
  }

  function nextQuestion() {
    current++;

    if (current >= 50) {
      finishQuiz(false);
      return;
    }

    locked = false;

    const target = document.getElementById("acUSMapTarget");
    target.querySelector("strong").textContent =
      questionOrder[current].stateName;

    const feedback = document.getElementById("acUSMapFeedback");
    feedback.hidden = true;

    document.getElementById("acUSMapNext").hidden = true;
  }

  function finishQuiz(timeExpired) {
    clearInterval(timer);
    locked = true;

    const percentage = Math.round((score / 50) * 100);

    saved.attempts++;
    saved.lastScore = percentage;
    saved.bestScore = Math.max(saved.bestScore, percentage);
    saveProgress();

    const area = document.getElementById("acUSMapArea");
    if (!area) return;

    area.innerHTML = "";

    const result = el("div", "ac-usmap-result");
    result.appendChild(el(
      "h3",
      "",
      timeExpired ? "Time Is Up!" : "Challenge Completed!"
    ));

    result.appendChild(el("div", "score", percentage + "%"));

    result.appendChild(el(
      "h3",
      "",
      score + " out of 50 states identified"
    ));

    result.appendChild(el(
      "p",
      "",
      percentage >= 70
        ? "Well done! You passed the USA States Map Challenge."
        : "Keep practising and try again. You can improve your score."
    ));

    result.appendChild(el(
      "p",
      "",
      "Best score: " + saved.bestScore + "%"
    ));

    const retry = el("button", "ac-usmap-button gold", "Try Again");
    retry.type = "button";
    retry.addEventListener("click", startQuiz);
    result.appendChild(retry);

    area.appendChild(result);

    const stats = document.querySelectorAll(
      "#acUSMapQuiz .ac-usmap-stat strong"
    );

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
      if (!section.querySelector("#acUSMapQuiz")) {
        createQuiz();
      }
    });

    observer.observe(section, {
      childList: true
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialise);
  } else {
    initialise();
  }

})();

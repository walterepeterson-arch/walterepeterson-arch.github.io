
/* AMADEUS AIRLINE LEARNING ACADEMY
   Independent educational training simulator.
*/

const lessons = [
{
 id:1, title:"Introduction to Airline Industry", icon:"✈",
 category:"Airline Basics", duration:"15 min",
 description:"Understand how the airline and travel industry operates.",
 content:[
 ["What is the airline industry?","The airline industry provides air transportation for passengers and cargo. It includes airlines, airports, travel agencies, ground handlers and reservation technology providers."],
 ["Important industry participants","Airlines operate flights. Airports provide infrastructure. Travel agencies sell travel services. GDS platforms distribute travel content to travel sellers."],
 ["Important terms","PNR: Passenger Name Record. GDS: Global Distribution System. IATA: International Air Transport Association. ICAO: International Civil Aviation Organization."],
 ["Learning objective","Understand the relationship between airlines, travel agents, passengers and reservation systems."]
 ]
},
{
 id:2, title:"Introduction to Amadeus GDS", icon:"💻",
 category:"Amadeus", duration:"20 min",
 description:"Learn what Amadeus is and how travel agents use it.",
 content:[
 ["What is Amadeus?","Amadeus is a travel technology company providing solutions used by airlines, travel agencies and other travel businesses."],
 ["What is a GDS?","A Global Distribution System helps travel sellers access travel content and services from multiple suppliers."],
 ["Why do agents use Amadeus?","Agents can work with flight availability, passenger reservations, fares and ticketing workflows, depending on their access and training."],
 ["Important distinction","Amadeus is a technology provider. An airline owns or controls its own inventory, fares and ticketing policies."]
 ]
},
{
 id:3, title:"Airport Codes - IATA", icon:"🌍",
 category:"Airline Basics", duration:"15 min",
 description:"Learn airport codes and international city abbreviations.",
 content:[
 ["What are IATA airport codes?","IATA airport location identifiers are commonly three letters, used in airline schedules, reservations and travel documents."],
 ["Examples","CCU = Kolkata. DEL = Delhi. BOM = Mumbai. LHR = London Heathrow. JFK = New York JFK."],
 ["Why are they important?","Airport codes help agents identify departure, arrival and connecting locations accurately."],
 ["Practice","Always check the correct airport, especially in cities with multiple airports."]
 ]
},
{
 id:4, title:"Airline Codes", icon:"🛫",
 category:"Airline Basics", duration:"15 min",
 description:"Understand airline identification codes.",
 content:[
 ["Airline designators","IATA airline designators are generally two characters, which may be letters or a combination of letters and numbers."],
 ["Examples","AI = Air India. EK = Emirates. SQ = Singapore Airlines. BA = British Airways."],
 ["Flight identification","A flight number is commonly displayed using the airline designator followed by a number."],
 ["Important","Do not confuse airline designators with airport codes or ICAO identifiers."]
 ]
},
{
 id:5, title:"Flight Availability", icon:"📅",
 category:"Cryptic", duration:"25 min",
 description:"Understand flight schedules and availability displays.",
 content:[
 ["Flight availability","Availability displays help an agent examine possible flights, dates, routes and booking classes."],
 ["Availability command","A common Amadeus cryptic availability entry is AN, followed by route and date information."],
 ["Booking classes","Booking class letters identify reservation inventory categories. Their meaning and availability depend on airline rules."],
 ["Important","A displayed seat count is not a guarantee of a confirmed reservation."]
 ]
},
{
 id:6, title:"Passenger Name Record (PNR)", icon:"👤",
 category:"Cryptic", duration:"30 min",
 description:"Learn the basic elements of a passenger reservation.",
 content:[
 ["What is a PNR?","A Passenger Name Record is a record containing information related to a passenger's itinerary and booking."],
 ["Common elements","A booking can contain passenger names, itinerary segments, contact information, ticketing arrangements and other service information."],
 ["Record locator","A booking reference is used to identify a reservation. Its format and availability depend on the system."],
 ["Important","Passenger information must be entered accurately and handled securely."]
 ]
},
{
 id:7, title:"Passenger Details and SSR", icon:"🧳",
 category:"Cryptic", duration:"25 min",
 description:"Learn passenger information and special service requests.",
 content:[
 ["Passenger details","Passenger names must match the applicable travel document requirements and airline rules."],
 ["SSR meaning","SSR stands for Special Service Request. It communicates specific passenger requirements to the airline."],
 ["Examples","Wheelchair assistance, meal requests and other special services may be requested using the applicable airline procedures."],
 ["Important","A requested service is not necessarily confirmed until the airline has accepted it."]
 ]
},
{
 id:8, title:"Fare and Pricing", icon:"💰",
 category:"Ticketing", duration:"30 min",
 description:"Understand fares, taxes and pricing basics.",
 content:[
 ["What is an airfare?","An airfare is the price charged for air transportation under the applicable fare conditions."],
 ["Fare components","The total price may include a base fare, taxes, fees and other applicable charges."],
 ["Fare rules","Conditions can cover advance purchase, changes, cancellations, refundability and baggage."],
 ["Important","Always review the actual fare conditions before advising a customer."]
 ]
},
{
 id:9, title:"Ticketing Fundamentals", icon:"🎫",
 category:"Ticketing", duration:"30 min",
 description:"Learn the difference between a booking and an issued ticket.",
 content:[
 ["What is ticketing?","Ticketing is the process of issuing an electronic ticket after the applicable requirements are satisfied."],
 ["Booking versus ticketing","A reservation and an issued ticket are different things. A confirmed booking does not automatically mean a ticket has been issued."],
 ["Electronic ticket","An electronic ticket records the ticket information in the airline's ticketing system."],
 ["Important","Only issue tickets through authorised systems and after checking payment and airline requirements."]
 ]
},
{
 id:10, title:"Reissue and Refund", icon:"🔄",
 category:"Ticketing", duration:"30 min",
 description:"Understand changes, cancellations and refunds.",
 content:[
 ["Ticket reissue","A reissue changes an existing ticket according to applicable airline and fare rules."],
 ["Refund","A refund returns eligible amounts according to the ticket conditions and airline policy."],
 ["Change fees","A ticket change may involve a penalty, fare difference, taxes or other charges."],
 ["Important","Never promise a refund amount without reviewing the ticket and applicable rules."]
 ]
},
{
 id:11, title:"Baggage and Airline Services", icon:"🧳",
 category:"Airline Basics", duration:"20 min",
 description:"Understand baggage rules and passenger services.",
 content:[
 ["Baggage allowance","Baggage allowances vary by airline, route, cabin, fare and frequent flyer status."],
 ["Checked baggage","Checked baggage is handed to the airline for carriage in the aircraft hold."],
 ["Cabin baggage","Cabin baggage is carried by the passenger, subject to airline size and weight restrictions."],
 ["Passenger services","Airlines may provide meals, wheelchair assistance, seating and other services according to eligibility."]
 ]
},
{
 id:12, title:"Introduction to Amadeus Altéa", icon:"🖥️",
 category:"Altéa", duration:"30 min",
 description:"Understand the airline passenger service system.",
 content:[
 ["What is Altéa?","Amadeus Altéa is a suite of airline IT solutions used by airlines for passenger service processes."],
 ["Core areas","Depending on the airline implementation, passenger service processes can involve reservations, inventory, departure control and passenger handling."],
 ["Departure control","Departure control processes are associated with airport operations such as check-in and boarding."],
 ["Important","Altéa implementations and screens differ between airlines. This course introduces concepts, not a live airline system."]
 ]
}
];

/* VIDEO LEARNING CENTRE
   These links open YouTube search results, not embedded official courses.
   Replace them with your own authorised videos when available.
*/

const videos = [
{
 title:"Introduction to Amadeus GDS",
 description:"Understand the fundamentals of Global Distribution Systems.",
 icon:"🎥",
 query:"Amadeus GDS beginner training"
},
{
 title:"Amadeus Cryptic Commands",
 description:"Explore reservation commands and terminal concepts.",
 icon:"💻",
 query:"Amadeus cryptic commands tutorial"
},
{
 title:"PNR and Flight Reservations",
 description:"Learn the building blocks of passenger reservations.",
 icon:"✈️",
 query:"Amadeus PNR training tutorial"
},
{
 title:"Airline Ticketing",
 description:"Understand ticketing, fares and airline processes.",
 icon:"🎫",
 query:"Amadeus airline ticketing training"
},
{
 title:"Amadeus Altéa Introduction",
 description:"Explore airline passenger service concepts.",
 icon:"🖥️",
 query:"Amadeus Altea training introduction"
},
{
 title:"Airline Industry Fundamentals",
 description:"Learn about airlines, airports and travel operations.",
 icon:"🌍",
 query:"airline industry basics training"
}
];

/* QUESTION POOL */

const questionPool = [
{
 category:"airline",
 q:"What does IATA stand for?",
 a:["International Air Transport Association","International Airline Travel Agency","Indian Air Transport Association","International Airport Travel Association"],
 correct:0,
 explanation:"IATA stands for International Air Transport Association."
},
{
 category:"airline",
 q:"What is the IATA location code for Kolkata?",
 a:["DEL","CCU","BOM","MAA"],
 correct:1,
 explanation:"CCU is the IATA airport code for Kolkata."
},
{
 category:"airline",
 q:"What does GDS mean?",
 a:["Global Distribution System","General Departure Schedule","Global Departure Service","Government Distribution Service"],
 correct:0,
 explanation:"GDS means Global Distribution System."
},
{
 category:"airline",
 q:"Which organisation assigns three-letter IATA airport location identifiers?",
 a:["ICAO","IATA","UNESCO","WHO"],
 correct:1,
 explanation:"IATA assigns its three-character location identifiers."
},
{
 category:"amadeus",
 q:"What does PNR stand for?",
 a:["Passenger Name Record","Personal Number Reference","Passenger Network Reservation","Personal Name Registration"],
 correct:0,
 explanation:"PNR means Passenger Name Record."
},
{
 category:"amadeus",
 q:"What is the main purpose of a GDS?",
 a:["Control airport security","Distribute travel content to travel sellers","Operate aircraft engines","Issue passports"],
 correct:1,
 explanation:"A GDS distributes travel content and services to travel sellers."
},
{
 category:"amadeus",
 q:"Which entry is commonly used to display flight availability in Amadeus Cryptic?",
 a:["AN","NM","TK","RF"],
 correct:0,
 explanation:"AN is a common Amadeus availability transaction code. Full entries require additional route and date details."
},
{
 category:"amadeus",
 q:"What does SSR stand for?",
 a:["Special Service Request","Standard Seat Reservation","System Service Record","Special Schedule Report"],
 correct:0,
 explanation:"SSR means Special Service Request."
},
{
 category:"ticketing",
 q:"Does a confirmed reservation always mean a ticket has been issued?",
 a:["Yes, always","No, they are different processes","Only for international flights","Only for business class"],
 correct:1,
 explanation:"A booking and an issued electronic ticket are separate."
},
{
 category:"ticketing",
 q:"What is a fare rule?",
 a:["An aircraft maintenance instruction","A set of conditions governing a fare","A passenger passport","An airport terminal number"],
 correct:1,
 explanation:"Fare rules define the conditions attached to an airfare."
},
{
 category:"ticketing",
 q:"What may be involved in a ticket reissue?",
 a:["Only changing the passenger's name","Fare difference and applicable penalties","Automatically cancelling the booking","Changing the aircraft registration"],
 correct:1,
 explanation:"A reissue can involve a fare difference and penalties under the applicable rules."
},
{
 category:"ticketing",
 q:"What is an electronic ticket?",
 a:["A printed boarding gate","A digital record of a ticket","A passenger visa","A baggage tag"],
 correct:1,
 explanation:"An electronic ticket is a digital record of the ticket information."
},
{
 category:"airline",
 q:"Which airport code represents Delhi?",
 a:["CCU","BOM","DEL","BLR"],
 correct:2,
 explanation:"DEL is the IATA airport code for Delhi."
},
{
 category:"amadeus",
 q:"What is Amadeus Altéa?",
 a:["An aircraft model","An airline IT and passenger service solution suite","A travel insurance policy","An airport terminal"],
 correct:1,
 explanation:"Altéa is an airline technology solution suite."
},
{
 category:"airline",
 q:"What is checked baggage?",
 a:["Baggage carried in the aircraft hold","Baggage stored under a passenger seat","A passenger's hand luggage","An airport security document"],
 correct:0,
 explanation:"Checked baggage is accepted by the airline and carried in the aircraft hold."
},
{
 category:"amadeus",
 q:"What does GDS stand for in the context of travel distribution?",
 a:["Global Distribution System","General Data Service","Ground Departure System","Global Document Service"],
 correct:0,
 explanation:"GDS stands for Global Distribution System."
},
{
 category:"ticketing",
 q:"What should an agent check before promising a ticket refund?",
 a:["Only the passenger's age","Applicable ticket conditions and airline rules","The aircraft colour","The airport weather"],
 correct:1,
 explanation:"Refund eligibility and amounts depend on ticket conditions and airline rules."
},
{
 category:"airline",
 q:"What does ICAO stand for?",
 a:["International Civil Aviation Organization","Indian Commercial Airline Office","International Cabin Aviation Organisation","International Cargo Association Office"],
 correct:0,
 explanation:"ICAO stands for International Civil Aviation Organization."
}
];

/* SAVE AND LOAD STUDENT PROGRESS */

const STORAGE_KEY = "amadeusAcademyProgressV1";

function defaultProgress() {
 return {
   completed:[],
   points:0,
   attempted:0,
   correct:0,
   best:0,
   quizRuns:0
 };
}

let progress = defaultProgress();

try {
 const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
 if (saved && Array.isArray(saved.completed)) {
   progress = {...defaultProgress(),...saved};
 }
} catch(e) {
 console.warn("Could not load saved progress.");
}

function saveProgress() {
 localStorage.setItem(STORAGE_KEY,JSON.stringify(progress));
 updateDashboard();
}

function updateDashboard() {
 const completed = progress.completed.length;
 const percent = Math.round(completed / lessons.length * 100);
 const accuracy = progress.attempted
   ? Math.round(progress.correct / progress.attempted * 100)
   : 0;

 document.getElementById("statLessons").textContent = lessons.length;
 document.getElementById("statCompleted").textContent = completed;
 document.getElementById("statPoints").textContent = progress.points;
 document.getElementById("statAccuracy").textContent = accuracy + "%";

 document.getElementById("progressPercent").textContent = percent + "%";
 document.getElementById("progressCount").textContent =
   completed + " of " + lessons.length + " lessons completed";

 document.getElementById("progressFill").style.width = percent + "%";
 document.getElementById("progressCircle").style.background =
   `conic-gradient(var(--green) ${percent * 3.6}deg, #e9eef4 0deg)`;

 document.getElementById("totalPoints").textContent = progress.points;
 document.getElementById("bestScore").textContent = progress.best + "%";

 document.getElementById("achievements").innerHTML = `
   <div class="achievement ${completed>=1?"":"locked"}">🏅 First Lesson</div>
   <div class="achievement ${completed>=5?"":"locked"}">⭐ Five Lessons</div>
   <div class="achievement ${completed>=12?"":"locked"}">🏆 Academy Explorer</div>
   <div class="achievement ${progress.points>=100?"":"locked"}">💎 100 Points</div>
   <div class="achievement ${progress.best>=80?"":"locked"}">🎯 Quiz Champion</div>
 `;
}

/* DISPLAY LESSON CARDS */

function renderLessons() {
 const grid = document.getElementById("courseGrid");

 grid.innerHTML = lessons.map(lesson => {
   const done = progress.completed.includes(lesson.id);

   return `
   <article class="course-card">
     <div class="course-icon">${lesson.icon}</div>
     <span class="eyebrow">${lesson.category}</span>
     <h3>${lesson.id}. ${lesson.title}</h3>
     <p>${lesson.description}</p>
     <div class="course-meta">
       <span>${lesson.duration}</span>
       <button data-lesson="${lesson.id}">
         ${done ? "Review Lesson" : "Start Lesson →"}
       </button>
     </div>
     ${done ? '<p class="completed-label">✓ Completed</p>' : ""}
   </article>`;
 }).join("");

 grid.querySelectorAll("[data-lesson]").forEach(button => {
   button.addEventListener("click",() => openLesson(Number(button.dataset.lesson)));
 });
}

/* VIDEO CARDS */

function renderVideos() {
 document.getElementById("videoGrid").innerHTML = videos.map(video => `
   <article class="video-card">
     <div class="video-art">${video.icon}</div>
     <div class="video-info">
       <h3>${video.title}</h3>
       <p>${video.description}</p>
       <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(video.query)}"
          target="_blank" rel="noopener noreferrer">Find training videos ↗</a>
     </div>
   </article>
 `).join("");
}

/* OPEN AND COMPLETE LESSONS */

let currentLesson = null;

function openLesson(id) {
 currentLesson = lessons.find(item => item.id === id);
 if (!currentLesson) return;

 document.getElementById("lessonCategory").textContent =
   currentLesson.category.toUpperCase();

 document.getElementById("lessonTitle").textContent =
   currentLesson.icon + " " + currentLesson.title;

 document.getElementById("lessonContent").innerHTML =
   currentLesson.content.map((item,index) => `
     <h3>${index+1}. ${item[0]}</h3>
     <p>${item[1]}</p>
   `).join("");

 const completeButton = document.getElementById("completeLesson");
 completeButton.textContent = progress.completed.includes(id)
   ? "Already Completed ✓"
   : "Mark as Completed ✓";

 document.getElementById("lessonModal").classList.add("open");
}

document.getElementById("closeModal").addEventListener("click",() => {
 document.getElementById("lessonModal").classList.remove("open");
});

document.getElementById("lessonModal").addEventListener("click",e => {
 if(e.target.id === "lessonModal") {
   document.getElementById("lessonModal").classList.remove("open");
 }
});

document.getElementById("completeLesson").addEventListener("click",() => {
 if(!currentLesson) return;

 if(!progress.completed.includes(currentLesson.id)) {
   progress.completed.push(currentLesson.id);
   progress.points += 20;
   saveProgress();
   renderLessons();
 }

 document.getElementById("completeLesson").textContent = "Completed ✓";
});

document.getElementById("lessonQuiz").addEventListener("click",() => {
 document.getElementById("lessonModal").classList.remove("open");
 document.getElementById("quiz").scrollIntoView({behavior:"smooth"});
});

/* QUIZ ENGINE */

let quizCategory = "all";
let currentQuestions = [];
let questionIndex = 0;
let quizPoints = 0;
let selectedAnswer = null;
let answered = false;

document.querySelectorAll(".category-btn").forEach(button => {
 button.addEventListener("click",() => {
   document.querySelectorAll(".category-btn").forEach(b=>b.classList.remove("active"));
   button.classList.add("active");
   quizCategory = button.dataset.category;
 });
});

function shuffle(items) {
 const result = [...items];
 for(let i=result.length-1;i>0;i--) {
   const j=Math.floor(Math.random()*(i+1));
   [result[i],result[j]]=[result[j],result[i]];
 }
 return result;
}

document.getElementById("startQuiz").addEventListener("click",startQuiz);

function startQuiz() {
 let available = questionPool.filter(q =>
   quizCategory === "all" || q.category === quizCategory
 );

 if(available.length===0) return;

 currentQuestions = shuffle(available).slice(0,Math.min(5,available.length));
 questionIndex = 0;
 quizPoints = 0;
 selectedAnswer = null;
 answered = false;

 document.getElementById("quizTitle").textContent =
   "Your " + (quizCategory==="all"?"Airline":quizCategory) + " Quiz";

 showQuestion();
}

function showQuestion() {
 const q = currentQuestions[questionIndex];
 const total = currentQuestions.length;

 document.getElementById("quizBar").style.width =
   ((questionIndex/total)*100) + "%";

 document.getElementById("quizScore").textContent =
   quizPoints + " POINTS";

 document.getElementById("quizArea").innerHTML = `
   <div class="eyebrow">QUESTION ${questionIndex+1} OF ${total}</div>
   <div class="question">${q.q}</div>
   <div id="answerOptions">
     ${q.a.map((answer,index)=>`
       <button class="answer-option" data-answer="${index}">
         ${String.fromCharCode(65+index)}. ${answer}
       </button>
     `).join("")}
   </div>
   <div id="quizFeedback"></div>
   <button class="btn primary" id="nextQuestion" disabled>
     ${questionIndex===total-1?"See Results":"Next Question →"}
   </button>
 `;

 document.querySelectorAll("[data-answer]").forEach(button => {
   button.addEventListener("click",() => chooseAnswer(Number(button.dataset.answer)));
 });

 document.getElementById("nextQuestion").addEventListener("click",nextQuestion);
}

function chooseAnswer(index) {
 if(answered) return;
 answered = true;

 const q = currentQuestions[questionIndex];
 const correct = index===q.correct;

 progress.attempted++;
 if(correct) {
   progress.correct++;
   quizPoints += 10;
 }

 document.querySelectorAll("[data-answer]").forEach(button => {
   const choice = Number(button.dataset.answer);
   button.disabled = true;

   if(choice===q.correct) button.classList.add("correct");
   else if(choice===index) button.classList.add("wrong");
 });

 document.getElementById("quizFeedback").innerHTML = `
   <div class="feedback">
     <strong>${correct?"✓ Correct! +10 points":"✗ Not quite."}</strong><br>
     ${q.explanation}
   </div>
 `;

 document.getElementById("nextQuestion").disabled = false;
}

function nextQuestion() {
 if(!answered) return;

 questionIndex++;

 if(questionIndex<currentQuestions.length) {
   answered = false;
   showQuestion();
 } else {
   finishQuiz();
 }
}

function finishQuiz() {
 const total = currentQuestions.length;
 const correct = quizPoints/10;
 const percentage = Math.round(correct/total*100);

 progress.points += quizPoints;
 progress.quizRuns++;
 progress.best = Math.max(progress.best,percentage);

 saveProgress();

 document.getElementById("quizBar").style.width = "100%";

 document.getElementById("quizArea").innerHTML = `
   <div style="text-align:center;padding:25px 5px">
     <div style="font-size:55px">🏆</div>
     <h2 style="color:var(--navy)">Quiz Completed!</h2>
     <h1 style="font-size:45px;color:var(--green)">${percentage}%</h1>
     <p>You answered ${correct} out of ${total} questions correctly.</p>
     <p><strong>You earned ${quizPoints} quiz points!</strong></p>
     <button class="btn primary" id="retryQuiz" style="margin-top:20px">
       Try Another Quiz
     </button>
   </div>
 `;

 document.getElementById("retryQuiz").addEventListener("click",startQuiz);
}

/* PRACTICE LAB */

let currentLab = "cryptic";

const crypticCommands = {
 "HELP": {
  output:"AVAILABLE TRAINING COMMANDS:\nHELP - Show help\nAN - Flight availability concept\nNM - Passenger name concept\nSS - Segment sell concept\nAP - Contact information concept\nTK - Ticketing arrangement concept\nER - End and retrieve concept\nPNR - View a sample reservation\nCLEAR - Clear terminal"
 },
 "AN": {
  output:"AVAILABILITY TRAINING DISPLAY\n\nExample entry format: AN15DEC CCUDEL\n\nTRAINING RESULT:\nCCU - DEL\nSample flight options displayed.\nClass availability and schedules are illustrative only."
 },
 "NM": {
  output:"PASSENGER NAME CONCEPT\n\nExample format: NM1PETERSON/WALTER\n\nTRAINING RESULT:\nPassenger name entry recognised.\nNo real passenger record has been created."
 },
 "SS": {
  output:"FLIGHT SEGMENT SELL CONCEPT\n\nExample format: SS1Y1\n\nTRAINING RESULT:\nIllustrative sell entry recognised.\nActual booking requires a valid availability display and live authorised system."
 },
 "AP": {
  output:"CONTACT INFORMATION CONCEPT\n\nContact details are an important part of passenger reservation records.\n\nActual syntax and required contact formats depend on the system and airline."
 },
 "TK": {
  output:"TICKETING ARRANGEMENT CONCEPT\n\nTicketing arrangements contain ticketing time limits and other ticketing-related information.\n\nAlways verify the applicable airline requirements."
 },
 "ER": {
  output:"END AND RETRIEVE CONCEPT\n\nER is a common Amadeus cryptic transaction used to end a transaction and retrieve a record where applicable.\n\nThis simulator does not create or retrieve a real PNR."
 },
 "PNR": {
  output:"SAMPLE TRAINING PNR\n\nRECORD: TRAINING ONLY\nNAME: PETERSON/WALTER\nROUTE: CCU - DEL\nSTATUS: ILLUSTRATIVE\nTICKET: NOT ISSUED\n\nThis is fictional data for practice."
 }
};

const alteaCommands = {
 "HELP": {
  output:"ALTÉA CONCEPT TRAINING\n\nHELP - Show available topics\nCHECKIN - Check-in process\nBOARDING - Boarding process\nBAGGAGE - Baggage process\nSEAT - Seat assignment concept\nPNR - Passenger record concept\nCLEAR - Clear terminal"
 },
 "CHECKIN": {
  output:"ALTÉA CHECK-IN CONCEPT\n\n1. Identify the passenger and booking.\n2. Verify travel documents and applicable requirements.\n3. Check eligibility and itinerary.\n4. Assign a seat according to airline rules.\n5. Process baggage where applicable.\n6. Complete check-in and boarding pass procedures.\n\nTraining simulation only."
 },
 "BOARDING": {
  output:"BOARDING CONCEPT\n\n1. Confirm boarding eligibility.\n2. Validate boarding pass.\n3. Check passenger and flight information.\n4. Process boarding according to airline procedures.\n\nNo actual passenger is processed."
 },
 "BAGGAGE": {
  output:"BAGGAGE PROCESS\n\n1. Check baggage allowance.\n2. Verify weight and applicable restrictions.\n3. Record baggage details.\n4. Issue the relevant baggage identification.\n5. Follow airline handling procedures."
 },
 "SEAT": {
  output:"SEAT ASSIGNMENT CONCEPT\n\nSeat assignment depends on availability, cabin, fare, passenger eligibility and airline policies.\n\nThis simulator does not access an actual seat map."
 },
 "PNR": {
  output:"PASSENGER RECORD CONCEPT\n\nA passenger record can contain names, itinerary, contact details, service requests and ticket information.\n\nTraining example only."
 }
};

function setLab(lab) {
 currentLab = lab;

 document.querySelectorAll(".lab-tab").forEach(button => {
   button.classList.toggle("active",button.dataset.lab===lab);
 });

 document.getElementById("terminalOutput").textContent = "";

 document.getElementById("terminalIntro").textContent =
   lab==="cryptic"
    ? "Welcome to Amadeus Cryptic Training Lab. Type HELP to see available exercises."
    : "Welcome to Altéa Concepts Training Lab. Type HELP to explore airline passenger service exercises.";

 renderExamples();
}

document.querySelectorAll(".lab-tab").forEach(button => {
 button.addEventListener("click",()=>setLab(button.dataset.lab));
});

function renderExamples() {
 const commands = currentLab==="cryptic"
  ? ["HELP","AN","NM","SS","AP","TK","ER","PNR"]
  : ["HELP","CHECKIN","BOARDING","BAGGAGE","SEAT","PNR"];

 document.getElementById("commandExamples").innerHTML =
  commands.map(command=>`
    <button class="example-command" data-command="${command}">
      ${command}
    </button>
  `).join("");

 document.querySelectorAll("[data-command]").forEach(button=>{
   button.addEventListener("click",()=>{
     document.getElementById("commandInput").value=button.dataset.command;
     runCommand();
   });
 });
}

function runCommand() {
 const input = document.getElementById("commandInput");
 const command = input.value.trim().toUpperCase();
 if(!command) return;

 const database = currentLab==="cryptic" ? crypticCommands : alteaCommands;
 let result = database[command];

 if(!result && currentLab==="cryptic" && command.startsWith("AN")) {
   result = crypticCommands.AN;
 }

 const output = document.getElementById("terminalOutput");

 if(result) {
   output.textContent = "AMADEUS > " + command + "\n\n" + result.output +
     "\n\n--------------------------------\n";
 } else {
   output.textContent = "AMADEUS > " + command +
     "\n\nCommand not available in this training simulator.\nType HELP to see the available exercises.\n\n--------------------------------\n";
 }

 input.value="";
}

document.getElementById("runCommand").addEventListener("click",runCommand);

document.getElementById("commandInput").addEventListener("keydown",event=>{
 if(event.key==="Enter") runCommand();
});

/* MOBILE NAVIGATION */

document.getElementById("menuToggle").addEventListener("click",()=>{
 document.getElementById("navigation").classList.toggle("open");
});

document.querySelectorAll("#navigation a").forEach(link=>{
 link.addEventListener("click",()=>{
   document.getElementById("navigation").classList.remove("open");
 });
});

/* RESET STUDENT PROGRESS */

document.getElementById("resetProgress").addEventListener("click",()=>{
 const confirmReset = confirm(
  "Are you sure? This will erase your saved lessons, quiz scores and points on this browser."
 );

 if(!confirmReset) return;

 progress = defaultProgress();
 saveProgress();
 renderLessons();

 document.getElementById("quizScore").textContent = "0 POINTS";
 alert("Your local learning progress has been reset.");
});

/* START ACADEMY */

renderLessons();
renderVideos();
renderExamples();
updateDashboard();

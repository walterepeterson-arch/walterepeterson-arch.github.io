
// Shared website interactions and Airline Corner learning features.
(function(){
 const menuToggle=document.getElementById('menuToggle');
 const mainNav=document.getElementById('mainNav');
 if(menuToggle && mainNav){
  menuToggle.addEventListener('click',()=>{
   const open=menuToggle.getAttribute('aria-expanded')==='true';
   menuToggle.setAttribute('aria-expanded',String(!open));
   mainNav.classList.toggle('is-open',!open);
  });
  mainNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
   mainNav.classList.remove('is-open');
   menuToggle.setAttribute('aria-expanded','false');
  }));
 }
})();

const lessons=[
 ["Aircraft manufacturers and aircraft basics","Recognise Boeing and Airbus aircraft families and understand aircraft substitution."],
 ["USA & Canada geography and time zones","Study U.S. states, Canadian provinces and territories, capitals, local times and daylight saving."],
 ["Airlines, airline codes and ticket stock","Understand IATA airline designators, ticket accounting prefixes, ICAO codes and codeshares."],
 ["Airport codes: how to read and use them","Learn how three-letter airport identifiers work and why metro areas may have several airports."],
 ["Cancellations, refunds and travel credits","Distinguish voluntary cancellations from airline cancellations and verify applicable passenger rights."],
 ["Changes, delays, cancellations and rerouting","Understand fare differences, waivers, schedule changes, no-shows and disruption handling."],
 ["Name corrections, DOB and codeshares","Check identity details and identify validating, marketing and operating carriers."],
 ["Pets and service animals","Verify pet acceptance, service-animal requirements and route-specific documentation."],
 ["Unaccompanied minors (UMNR)","Check age bands, routes, connections, fees and handover requirements."],
 ["Baggage basics and security screening","Understand personal items, cabin baggage, checked baggage and restricted goods."],
 ["The professional agent workflow","Use a repeatable process to discover, verify, compare, explain, confirm and document."],
 ["Knowledge checks, case studies and answer key","Review key concepts and practise professional judgement."]
];

const questionBank=window.AIRLINE_QUESTION_BANK||[];

const videos=[
 ["Introduction to Amadeus GDS","Understand the fundamentals of Global Distribution Systems.","Amadeus GDS beginner training"],
 ["Amadeus Cryptic Commands","Explore reservation commands and terminal concepts.","Amadeus cryptic commands tutorial"],
 ["PNR and Flight Reservations","Learn the building blocks of passenger reservations.","Amadeus PNR training tutorial"],
 ["Airline Ticketing","Understand ticketing, fares and airline processes.","Amadeus airline ticketing training"],
 ["Amadeus Altéa Introduction","Explore airline passenger service concepts.","Amadeus Altea training introduction"],
 ["Airline Industry Fundamentals","Learn about airlines, airports and travel operations.","airline industry basics training"]
];

let saved;
try{
 saved=JSON.parse(localStorage.getItem('airlineCornerProgress')||'null');
}catch(e){
 saved=null;
}

if(!saved||!Array.isArray(saved.done)){
 saved={done:[],attempts:0,best:0};
}

let selectedLesson=0;
let questions=[];
let qIndex=0;
let correct=0;
let answered=false;

function openPanel(id){
 document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
 const panel=document.getElementById(id);
 if(!panel)return;
 panel.classList.add('active');
 panel.scrollIntoView({behavior:'smooth',block:'start'});
 if(id==='progress')renderProgress();
}

function renderLessons(){
 const list=document.getElementById('lessonList');
 if(!list)return;

 list.innerHTML=lessons.map((l,i)=>`
  <article class="lesson">
   <h3>${String(i+1).padStart(2,'0')} · ${l[0]}</h3>
   <p>${saved.done.includes(i)?'✓ Completed':'Not completed'}</p>
   <button class="${saved.done.includes(i)?'done':''}" onclick="showLesson(${i})">
    ${saved.done.includes(i)?'Review chapter':'Open chapter'}
   </button>
  </article>
 `).join('');
}

function showLesson(i){
 selectedLesson=i;
 document.getElementById('modalTitle').textContent=lessons[i][0];
 document.getElementById('modalBody').innerHTML=`
  <p>${lessons[i][1]}</p>
  <p><strong>Study activity:</strong> Write down three important points from this chapter in your notebook.</p>
 `;
 document.getElementById('completeButton').textContent=
  saved.done.includes(i)?'Completed ✓':'Mark as completed ✓';
 document.getElementById('lessonModal').classList.add('show');
}

function closeLesson(){
 document.getElementById('lessonModal').classList.remove('show');
}

function completeLesson(){
 if(!saved.done.includes(selectedLesson)){
  saved.done.push(selectedLesson);
 }
 saveData();
 renderLessons();
 document.getElementById('completeButton').textContent='Completed ✓';
}

function saveData(){
 localStorage.setItem('airlineCornerProgress',JSON.stringify(saved));
 renderProgress();
}

function renderProgress(){
 const completed=document.getElementById('completedCount');
 const attempts=document.getElementById('quizCount');
 const best=document.getElementById('bestScore');
 const progress=document.getElementById('progressText');

 if(completed)completed.textContent=saved.done.length;
 if(attempts)attempts.textContent=saved.attempts;
 if(best)best.textContent=saved.best+'%';
 if(progress)progress.textContent=saved.done.length+' of '+lessons.length+' lessons completed.';
}

function startQuiz(){
 const level=document.getElementById('level').value;
 questions=questionBank.filter(q=>q.l===level).sort(()=>Math.random()-.5);
 qIndex=0;
 correct=0;

 document.getElementById('quizStart').hidden=true;
 document.getElementById('quizResult').hidden=true;
 document.getElementById('quizRun').hidden=false;

 if(!questions.length){
  document.getElementById('questionText').textContent='No questions are available for this level yet.';
  document.getElementById('choices').innerHTML='';
  document.getElementById('feedback').textContent='Please check the question bank.';
  return;
 }

 showQuestion();
}

function showQuestion(){
 answered=false;
 const q=questions[qIndex];

 document.getElementById('questionCount').textContent=
  'QUESTION '+(qIndex+1)+' OF '+questions.length;

 document.getElementById('questionText').textContent=q.q;
 document.getElementById('quizBar').style.width=
  (qIndex/questions.length*100)+'%';

 document.getElementById('feedback').textContent='';
 document.getElementById('nextQuestion').hidden=true;

 document.getElementById('choices').innerHTML=q.a.map((a,i)=>`
  <button class="choice" onclick="answerQuestion(${i})">
   ${String.fromCharCode(65+i)}. ${a}
  </button>
 `).join('');
}

function answerQuestion(n){
 if(answered)return;
 answered=true;

 const q=questions[qIndex];

 if(n===q.c){
  correct++;
  document.getElementById('feedback').textContent='Correct! '+q.e;
  document.getElementById('feedback').style.color='var(--green)';
 }else{
  document.getElementById('feedback').textContent=
   'Incorrect. Correct answer: '+q.a[q.c]+'. '+q.e;
  document.getElementById('feedback').style.color='var(--red)';
 }

 document.querySelectorAll('.choice').forEach((b,i)=>{
  b.disabled=true;
  if(i===q.c)b.classList.add('correct');
  else if(i===n)b.classList.add('wrong');
 });

 document.getElementById('nextQuestion').hidden=false;
 document.getElementById('nextQuestion').textContent=
  qIndex===questions.length-1?'See results':'Next question';
}

function nextQuestion(){
 qIndex++;

 if(qIndex<questions.length){
  showQuestion();
  return;
 }

 const score=Math.round(correct/questions.length*100);
 saved.attempts++;
 saved.best=Math.max(saved.best,score);
 saveData();

 document.getElementById('quizRun').hidden=true;
 document.getElementById('quizResult').hidden=false;
 document.getElementById('quizResult').innerHTML=`
  <h3>Quiz completed!</h3>
  <p>Your score: <strong>${correct} out of ${questions.length} (${score}%)</strong></p>
  <button class="primary" onclick="againQuiz()">Try again</button>
 `;
}

function againQuiz(){
 document.getElementById('quizStart').hidden=false;
 document.getElementById('quizResult').hidden=true;
}

function resetProgress(){
 if(confirm('Are you sure you want to reset all your saved progress?')){
  saved={done:[],attempts:0,best:0};
  saveData();
  renderLessons();
 }
}

function runCommand(){
 const commandInput=document.getElementById('command');
 const c=commandInput.value.trim().toUpperCase();
 let output='';

 if(c==='HELP'||c==='HE'){
  output='DEMO COMMANDS:\nHELP — show commands\nAIRLINE — sample airline codes\nAIRPORT — sample airport codes\nIG — sample training sign-in message';
 }else if(c==='AIRLINE'){
  output='AC — Air Canada\nAA — American Airlines\nDL — Delta Air Lines\nUA — United Airlines\nBA — British Airways\nAI — Air India';
 }else if(c==='AIRPORT'){
  output='CCU — Kolkata\nDEL — Delhi\nBOM — Mumbai\nJFK — New York\nLHR — London Heathrow\nYYZ — Toronto Pearson';
 }else if(c==='IG'){
  output='DEMO ONLY: This is not a live Amadeus sign-in. No connection to a reservation system is available.';
 }else{
  output='Command not included in this beginner demo. Type HELP.';
 }

 document.getElementById('terminalOutput').textContent=output;
 commandInput.value='';
}

function initAirlineCorner(){
 const command=document.getElementById('command');
 const modal=document.getElementById('lessonModal');
 const videoList=document.getElementById('videoList');

 if(!command||!modal||!videoList)return;

 command.addEventListener('keydown',e=>{
  if(e.key==='Enter')runCommand();
 });

 modal.addEventListener('click',e=>{
  if(e.target.id==='lessonModal')closeLesson();
 });

 videoList.innerHTML=videos.map(v=>`
  <article class="lesson">
   <h3>${v[0]}</h3>
   <p>${v[1]}</p>
   <a class="action" target="_blank" rel="noopener noreferrer"
      href="https://www.youtube.com/results?search_query=${encodeURIComponent(v[2])}">
      Find training videos ↗
   </a>
  </article>
 `).join('');

 renderLessons();
 renderProgress();
}

if(document.getElementById('lessonModal')){
 initAirlineCorner();
}

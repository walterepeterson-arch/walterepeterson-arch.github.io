
// Shared website interactions and Airline Corner learning features.
(function(){
 const menuToggle=document.getElementById('menuToggle');
 const mainNav=document.getElementById('mainNav');
 if(menuToggle && mainNav){
  menuToggle.addEventListener('click',()=>{
   const open=menuToggle.getAttribute('aria-expanded')==='true';
   menuToggle.setAttribute('aria-expanded',String(!open));
   mainNav.classList.toggle('is-open',!open)
  });
  mainNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
   mainNav.classList.remove('is-open');
   menuToggle.setAttribute('aria-expanded','false')
  }));
 }
})();

const lessons=[
["Aircraft Manufacturers","Airbus and Boeing are major commercial aircraft manufacturers. Learn to recognise the common aircraft families and understand that the aircraft assigned to a flight can change."],
["USA and Canada Geography","Study the states of the United States, provinces and territories of Canada, their capitals and major cities. Learn the locations of important airports."],
["Airline Names and Codes","Learn airline names and their two-character IATA designators. Examples include American Airlines AA, Delta DL, United UA and Air Canada AC."],
["IATA Codes and Ticket Prefixes","An airline designator and a ticket numeric prefix are different identifiers. Learn their purposes and verify numeric prefixes from an authorised, current reference."],
["World Airlines","Build a reference of airlines around the world. Record their country, airline name, IATA code and current operating status."],
["USA Airport Codes","Learn the three-letter IATA codes of major airports in the United States and the cities they serve."],
["Canada Airport Codes","Learn major Canadian airport codes such as YYZ Toronto, YVR Vancouver, YYC Calgary and YUL Montreal."],
["Cancellation Policies","Cancellation and refund conditions depend on airline, route, fare type, ticket issue date and applicable law. Always check the exact ticket rules."],
["Changes and Rebooking","Learn about change fees, fare differences, rebooking, waivers and airline schedule changes. Confirm the conditions before promising a customer anything."],
["Passenger Name Corrections","Passenger names must meet travel-document requirements. A minor spelling correction is not necessarily the same as changing the passenger to another person."],
["Pet Travel Policies","Pet acceptance depends on airline, route, animal size, carrier dimensions, aircraft and destination rules. Confirm the current policy before booking."],
["Unaccompanied Minors","Age limits, fees, connection restrictions and service requirements differ between airlines. Check the child's age on every travel date."],
["Baggage Rules","Check personal-item, cabin-bag and checked-bag limits. Rules can depend on the fare, route, cabin and operating carrier."],
["Customer Service and Verification","Confirm the traveller's details, itinerary, ticket conditions and current airline policy. Explain clearly when information needs further verification."]
];

const questionBank = window.AIRLINE_QUESTION_BANK || [];

const videos=[
["Introduction to Amadeus GDS","Understand the fundamentals of Global Distribution Systems.","Amadeus GDS beginner training"],
["Amadeus Cryptic Commands","Explore reservation commands and terminal concepts.","Amadeus cryptic commands tutorial"],
["PNR and Flight Reservations","Learn the building blocks of passenger reservations.","Amadeus PNR training tutorial"],
["Airline Ticketing","Understand ticketing, fares and airline processes.","Amadeus airline ticketing training"],
["Amadeus Altéa Introduction","Explore airline passenger service concepts.","Amadeus Altea training introduction"],
["Airline Industry Fundamentals","Learn about airlines, airports and travel operations."]
];

let saved;
try{
 saved=JSON.parse(localStorage.getItem('airlineCornerProgress')||'null')
}catch(e){
 saved=null
}
if(!saved||!Array.isArray(saved.done)){
 saved={done:[],attempts:0,best:0}
}

let selectedLesson=0;
let questions=[];
let qIndex=0;
let correct=0;
let answered=false;

function openPanel(id){
 document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
 document.getElementById(id).classList.add('active');
 document.getElementById(id).scrollIntoView({behavior:'smooth',block:'start'});
 if(id==='progress')renderProgress()
}

function renderLessons(){
 document.getElementById('lessonList').innerHTML=lessons.map((l,i)=>`
 <article class="lesson">
 <h3>${String(i+1).padStart(2,'0')} · ${l[0]}</h3>
 <p>${saved.done.includes(i)?'✓ Completed':'Not completed'}</p>
 <button class="${saved.done.includes(i)?'done':''}" onclick="showLesson(${i})">
 ${saved.done.includes(i)?'Review chapter':'Open chapter'}
 </button>
 </article>`).join('')
}

function showLesson(i){
 selectedLesson=i;
 document.getElementById('modalTitle').textContent=lessons[i][0];
 document.getElementById('modalBody').innerHTML=`
 <p>${lessons[i][1]}</p>
 <p><strong>Study activity:</strong> Write down three important points from this chapter in your notebook.</p>`;
 document.getElementById('completeButton').textContent=saved.done.includes(i)?'Completed ✓':'Mark as completed ✓';
 document.getElementById('lessonModal').classList.add('show')
}

function closeLesson(){
 document.getElementById('lessonModal').classList.remove('show')
}

function completeLesson(){
 if(!saved.done.includes(selectedLesson))saved.done.push(selectedLesson);
 saveData();
 renderLessons();
 document.getElementById('completeButton').textContent='Completed ✓'
}

function saveData(){
 localStorage.setItem('airlineCornerProgress',JSON.stringify(saved));
 renderProgress()
}

function renderProgress(){
 document.getElementById('completedCount').textContent=saved.done.length;
 document.getElementById('quizCount').textContent=saved.attempts;
 document.getElementById('bestScore').textContent=saved.best+'%';
 document.getElementById('progressText').textContent=saved.done.length+' of '+lessons.length+' lessons completed.'
}

function startQuiz(){
 const level=document.getElementById('level').value;
 questions=questionBank.filter(q=>q.l===level).sort(()=>Math.random()-.5);
 qIndex=0;
 correct=0;
 document.getElementById('quizStart').hidden=true;
 document.getElementById('quizResult').hidden=true;
 document.getElementById('quizRun').hidden=false;
 if(questions.length===0){
  document.getElementById('questionText').textContent='No questions are available for this level yet.';
  document.getElementById('choices').innerHTML='';
  document.getElementById('questionCount').textContent='QUIZ UNAVAILABLE';
  return
 }
 showQuestion()
}

function showQuestion(){
 answered=false;
 const q=questions[qIndex];
 document.getElementById('questionCount').textContent='QUESTION '+(qIndex+1)+' OF '+questions.length;
 document.getElementById('questionText').textContent=q.q;
 document.getElementById('quizBar').style.width=(qIndex/questions.length*100)+'%';
 document.getElementById('feedback').textContent='';
 document.getElementById('nextQuestion').hidden=true;
 document.getElementById('choices').innerHTML=q.a.map((a,i)=>`
 <button class="choice" onclick="answerQuestion(${i})">
 ${String.fromCharCode(65+i)}. ${a}
 </button>`).join('')
}

function answerQuestion(n){
 if(answered)return;
 answered=true;
 const q=questions[qIndex];
 if(n===q.c){
  correct++;
  document.getElementById('feedback').textContent='Correct! '+q.e;
  document.getElementById('feedback').style.color='var(--green)'
 }else{
  document.getElementById('feedback').textContent='Incorrect. Correct answer: '+q.a[q.c]+'. '+q.e;
  document.getElementById('feedback').style.color='var(--red)'
 }
 document.querySelectorAll('.choice').forEach((b,i)=>{
  b.disabled=true;
  if(i===q.c)b.classList.add('correct');
  else if(i===n)b.classList.add('wrong')
 });
 document.getElementById('nextQuestion').hidden=false;
 document.getElementById('nextQuestion').textContent=qIndex===questions.length-1?'See results':'Next question'
}

function nextQuestion(){
 qIndex++;
 if(qIndex<questions.length){
  showQuestion();
  return
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
 <button class="primary" onclick="againQuiz()">Try again</button>`
}

function againQuiz(){
 document.getElementById('quizStart').hidden=false;
 document.getElementById('quizResult').hidden=true
}

function resetProgress(){
 if(confirm('Are you sure you want to reset all your saved progress?')){
  saved={done:[],attempts:0,best:0};
  saveData();
  renderLessons()
 }
}

function runCommand(){
 const c=document.getElementById('command').value.trim().toUpperCase();
 let output='';
 if(c==='HELP'||c==='HE')
  output='DEMO COMMANDS:\nHELP — show commands\nAIRLINE — sample airline codes\nAIRPORT — sample airport codes\nIG — sample training sign-in message';
 else if(c==='AIRLINE')
  output='AC — Air Canada\nAA — American Airlines\nDL — Delta Air Lines\nUA — United Airlines\nBA — British Airways\nAI — Air India';
 else if(c==='AIRPORT')
  output='CCU — Kolkata\nDEL — Delhi\nBOM — Mumbai\nJFK — New York\nLHR — London Heathrow\nYYZ — Toronto Pearson';
 else if(c==='IG')
  output='DEMO ONLY: This is not a live Amadeus sign-in. No connection to a reservation system is available.';
 else
  output='Command not included in this beginner demo. Type HELP.';
 document.getElementById('terminalOutput').textContent=output;
 document.getElementById('command').value=''
}

function initAirlineCorner(){
 const command=document.getElementById('command');
 const modal=document.getElementById('lessonModal');
 const videoList=document.getElementById('videoList');
 if(!command || !modal || !videoList)return;
 command.addEventListener('keydown',e=>{if(e.key==='Enter')runCommand()});
 modal.addEventListener('click',e=>{if(e.target.id==='lessonModal')closeLesson()});
 videoList.innerHTML=videos.map(v=>`
 <article class="lesson">
 <h3>${v[0]}</h3>
 <p>${v[1]}</p>
 <a class="action" target="_blank" rel="noopener noreferrer"
 href="https://www.youtube.com/results?search_query=${encodeURIComponent(v[2])}">
 Find training videos ↗
 </a>
 </article>`).join('');
 renderLessons();
 renderProgress()
}

if(document.getElementById('lessonList'))initAirlineCorner();

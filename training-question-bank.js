
/* WALTER E PETERSON
   USA & CANADA AIRLINE SALES AGENT TRAINING
   ADDITIONAL QUESTION POOLS
*/

const trainingQuestionBank = [

/* 1. AIRCRAFT MANUFACTURERS */
{
pool:"Aircraft Manufacturers",category:"airline",
q:"Which company manufactures the Boeing 737?",
a:["Airbus","Boeing","Embraer","Bombardier"],
correct:1,
explanation:"The Boeing 737 is manufactured by Boeing."
},
{
pool:"Aircraft Manufacturers",category:"airline",
q:"Where is Boeing headquartered according to the training material?",
a:["Seattle, Washington","Arlington, Virginia","New York","Miami"],
correct:1,
explanation:"The supplied training material lists Arlington, Virginia."
},
{
pool:"Aircraft Manufacturers",category:"airline",
q:"Where is the Airbus A220 manufactured?",
a:["Quebec, Canada","Texas, USA","Germany","Japan"],
correct:0,
explanation:"The training material identifies Quebec, Canada, as an A220 production location."
},

/* 2. USA AND CANADA GEOGRAPHY */
{
pool:"Geography",category:"airline",
q:"What is the capital of Canada?",
a:["Toronto","Vancouver","Ottawa","Montreal"],
correct:2,
explanation:"Ottawa is the capital of Canada."
},
{
pool:"Geography",category:"airline",
q:"What is the capital of California?",
a:["Los Angeles","San Francisco","Sacramento","San Diego"],
correct:2,
explanation:"Sacramento is the capital of California."
},
{
pool:"Geography",category:"airline",
q:"What is the capital of New York State?",
a:["New York City","Albany","Buffalo","Rochester"],
correct:1,
explanation:"Albany is the capital of New York State."
},
{
pool:"Geography",category:"airline",
q:"Which Canadian province has Toronto as its capital city?",
a:["Quebec","Alberta","Ontario","Manitoba"],
correct:2,
explanation:"Toronto is the capital of Ontario."
},

/* 3. USA AND CANADA AIRLINES */
{
pool:"USA and Canada Airlines",category:"airline",
q:"What is the IATA designator for American Airlines?",
a:["DL","AA","UA","AS"],
correct:1,
explanation:"American Airlines uses the IATA designator AA."
},
{
pool:"USA and Canada Airlines",category:"airline",
q:"Which airline uses the code DL?",
a:["Delta Air Lines","United Airlines","Southwest Airlines","Alaska Airlines"],
correct:0,
explanation:"DL is the IATA designator for Delta Air Lines."
},
{
pool:"USA and Canada Airlines",category:"airline",
q:"What is the IATA code for United Airlines?",
a:["AA","UA","AC","AS"],
correct:1,
explanation:"United Airlines uses UA."
},
{
pool:"USA and Canada Airlines",category:"airline",
q:"Which airline uses the code WN?",
a:["WestJet","Southwest Airlines","JetBlue","Frontier"],
correct:1,
explanation:"WN is the IATA designator for Southwest Airlines."
},
{
pool:"USA and Canada Airlines",category:"airline",
q:"What is the IATA code for Air Canada?",
a:["AC","WS","PD","F8"],
correct:0,
explanation:"Air Canada uses AC."
},
{
pool:"USA and Canada Airlines",category:"airline",
q:"Which airline uses the designator WS?",
a:["WestJet","Air Canada","Porter Airlines","Flair Airlines"],
correct:0,
explanation:"WS is the IATA designator for WestJet."
},
{
pool:"USA and Canada Airlines",category:"airline",
q:"What is the IATA code for JetBlue?",
a:["B6","F9","NK","WN"],
correct:0,
explanation:"JetBlue uses B6."
},

/* 4. TICKET NUMERIC PREFIXES */
{
pool:"Ticket Numeric Prefixes",category:"ticketing",
q:"What is the ticket numeric prefix for American Airlines in the supplied training table?",
a:["001","006","016","027"],
correct:0,
explanation:"The supplied table lists American Airlines as 001."
},
{
pool:"Ticket Numeric Prefixes",category:"ticketing",
q:"What is the ticket numeric prefix for Delta Air Lines in the supplied table?",
a:["001","006","014","016"],
correct:1,
explanation:"The supplied table lists Delta Air Lines as 006."
},
{
pool:"Ticket Numeric Prefixes",category:"ticketing",
q:"What is the ticket numeric prefix for United Airlines in the supplied table?",
a:["016","027","526","838"],
correct:0,
explanation:"The supplied table lists United Airlines as 016."
},
{
pool:"Ticket Numeric Prefixes",category:"ticketing",
q:"What is the ticket numeric prefix for Air Canada in the supplied table?",
a:["838","451","014","001"],
correct:2,
explanation:"The supplied table lists Air Canada as 014."
},

/* 5. INTERNATIONAL AIRLINES */
{
pool:"International Airlines",category:"airline",
q:"Which airline uses the code 6E?",
a:["AirAsia","IndiGo","Scoot","Vueling"],
correct:1,
explanation:"6E is the IATA designator for IndiGo."
},
{
pool:"International Airlines",category:"airline",
q:"Which airline uses the code FR?",
a:["Ryanair","EasyJet","Wizz Air","Norwegian"],
correct:0,
explanation:"FR is the IATA designator for Ryanair."
},
{
pool:"International Airlines",category:"airline",
q:"What is the IATA designator for Singapore Airlines?",
a:["TR","SQ","VN","AK"],
correct:1,
explanation:"Singapore Airlines uses SQ."
},
{
pool:"International Airlines",category:"airline",
q:"Which airline uses the code VY?",
a:["Vueling","Vietnam Airlines","Wizz Air","Jetstar"],
correct:0,
explanation:"VY is the designator for Vueling."
},

/* 6. USA AIRPORT CODES */
{
pool:"USA Airport Codes",category:"airline",
q:"What is the airport code for Los Angeles International Airport?",
a:["SFO","LAX","SAN","BUR"],
correct:1,
explanation:"LAX is Los Angeles International Airport."
},
{
pool:"USA Airport Codes",category:"airline",
q:"What is the airport code for John F. Kennedy International Airport?",
a:["LGA","EWR","JFK","IAD"],
correct:2,
explanation:"JFK is New York's John F. Kennedy International Airport."
},
{
pool:"USA Airport Codes",category:"airline",
q:"Which airport uses the code ORD?",
a:["Chicago O'Hare","Chicago Midway","Boston Logan","Denver"],
correct:0,
explanation:"ORD is Chicago O'Hare International Airport."
},
{
pool:"USA Airport Codes",category:"airline",
q:"What is the airport code for Miami International Airport?",
a:["MCO","MIA","TPA","FLL"],
correct:1,
explanation:"MIA is Miami International Airport."
},
{
pool:"USA Airport Codes",category:"airline",
q:"Which airport uses the code ATL?",
a:["Augusta","Atlanta Hartsfield-Jackson","Austin","Atlantic City"],
correct:1,
explanation:"ATL is Atlanta Hartsfield-Jackson International Airport."
},
{
pool:"USA Airport Codes",category:"airline",
q:"What is the airport code for San Francisco International Airport?",
a:["SJC","SAN","SFO","OAK"],
correct:2,
explanation:"SFO is San Francisco International Airport."
},
{
pool:"USA Airport Codes",category:"airline",
q:"Which airport uses the code DFW?",
a:["Dallas Love Field","Dallas/Fort Worth International","Denver International","Detroit"],
correct:1,
explanation:"DFW is Dallas/Fort Worth International Airport."
},
{
pool:"USA Airport Codes",category:"airline",
q:"What is the airport code for Seattle-Tacoma International Airport?",
a:["SEA","GEG","PDX","PSC"],
correct:0,
explanation:"SEA is Seattle-Tacoma International Airport."
},
{
pool:"USA Airport Codes",category:"airline",
q:"Which airport uses the code BOS?",
a:["Baltimore","Boston Logan","Buffalo","Boise"],
correct:1,
explanation:"BOS is Boston Logan International Airport."
},

/* 7. CANADA AIRPORT CODES */
{
pool:"Canada Airport Codes",category:"airline",
q:"What is the airport code for Toronto Pearson International Airport?",
a:["YUL","YOW","YYZ","YVR"],
correct:2,
explanation:"YYZ is Toronto Pearson International Airport."
},
{
pool:"Canada Airport Codes",category:"airline",
q:"Which airport uses the code YVR?",
a:["Calgary","Vancouver","Winnipeg","Edmonton"],
correct:1,
explanation:"YVR is Vancouver International Airport."
},
{
pool:"Canada Airport Codes",category:"airline",
q:"What is the airport code for Montreal-Trudeau International Airport?",
a:["YUL","YQB","YYC","YHZ"],
correct:0,
explanation:"YUL is Montreal-Trudeau International Airport."
},
{
pool:"Canada Airport Codes",category:"airline",
q:"Which airport uses the code YYC?",
a:["Edmonton","Calgary","Ottawa","Toronto"],
correct:1,
explanation:"YYC is Calgary International Airport."
},
{
pool:"Canada Airport Codes",category:"airline",
q:"What is the airport code for Ottawa Macdonald-Cartier International Airport?",
a:["YOW","YUL","YEG","YWG"],
correct:0,
explanation:"YOW is Ottawa Macdonald-Cartier International Airport."
},

/* 8. CANCELLATION POLICIES */
{
pool:"Cancellation Policies",category:"ticketing",
q:"According to the supplied training notes, what is the general major-airline 24-hour cancellation rule?",
a:["Full refund within 24 hours if booked at least 2 days before departure","No refund under any circumstances","Only a baggage refund","A mandatory $200 fee"],
correct:0,
explanation:"This is the general rule described in the supplied notes. Actual airline and legal conditions must be checked."
},
{
pool:"Cancellation Policies",category:"ticketing",
q:"What generally happens when a passenger cancels a refundable ticket?",
a:["The ticket is always forfeited","It may be refunded to the original payment method","It becomes a baggage voucher","It must be transferred to another passenger"],
correct:1,
explanation:"Refundable fares are generally eligible for a refund to the original payment method, subject to their terms."
},
{
pool:"Cancellation Policies",category:"ticketing",
q:"What should an agent check before confirming a cancellation refund?",
a:["Only the airline logo","The fare rules and current airline policy","The aircraft manufacturer","The passenger's seat number only"],
correct:1,
explanation:"Always review the ticket conditions and the airline's current policy."
},

/* 9. CHANGES, DELAYS AND REROUTING */
{
pool:"Changes and Delays",category:"ticketing",
q:"When a change fee is waived, what may the passenger still need to pay?",
a:["Nothing ever","The fare difference","A passport fee","An airport code fee"],
correct:1,
explanation:"A fare difference may still apply even when the change fee is waived."
},
{
pool:"Changes and Delays",category:"ticketing",
q:"What is a no-show?",
a:["A passenger who misses the flight without changing or cancelling in time","A passenger who checks in early","A passenger with extra baggage","A flight that arrives early"],
correct:0,
explanation:"A no-show occurs when a passenger does not travel and has not complied with the applicable change or cancellation requirements."
},
{
pool:"Changes and Delays",category:"ticketing",
q:"If a passenger rejects a significant flight change and qualifies under applicable US refund rules, what may they be entitled to?",
a:["A full refund","A free upgrade only","A new passport","A guaranteed hotel"],
correct:0,
explanation:"Applicable US DOT rules may require a refund when a significant change occurs and the passenger chooses not to travel."
},
{
pool:"Changes and Delays",category:"ticketing",
q:"What should an agent do when a flight is rerouted to a different airport?",
a:["Ignore the change","Check the airline's assistance and refund obligations","Issue a new passport","Delete the booking"],
correct:1,
explanation:"Check the airline's rerouting arrangements and the passenger's applicable rights."
},

/* 10. NAME CORRECTIONS */
{
pool:"Name Corrections",category:"ticketing",
q:"What is a minor name correction?",
a:["Changing the ticket to another passenger","Correcting a spelling error for the same traveller","Changing the destination","Changing the airline"],
correct:1,
explanation:"A minor correction fixes an error while retaining the same traveller."
},
{
pool:"Name Corrections",category:"ticketing",
q:"Are ticket name transfers to another person generally permitted?",
a:["Always","Generally no","Only on international flights","Only after boarding"],
correct:1,
explanation:"Most airlines prohibit transferring a ticket to a different passenger."
},
{
pool:"Name Corrections",category:"ticketing",
q:"What may be required to correct a passenger's date of birth?",
a:["Identity documentation","A new ticket for another person","A baggage receipt","An airport map"],
correct:0,
explanation:"The airline may require passport or other identity documentation."
},

/* 11. PET POLICIES */
{
pool:"Pet Policies",category:"airline",
q:"Which pets are commonly accepted in the cabin, subject to airline rules?",
a:["Large horses","Small dogs and cats in approved carriers","All wild animals","Livestock"],
correct:1,
explanation:"Small dogs and cats are commonly accepted in approved carriers, subject to airline restrictions."
},
{
pool:"Pet Policies",category:"airline",
q:"What must an airline-approved pet carrier generally allow?",
a:["The pet to stand, turn and lie down comfortably","The pet to escape easily","The carrier to remain open","The pet to sit on another passenger"],
correct:0,
explanation:"The carrier must provide suitable space and meet airline and applicable animal transport requirements."
},
{
pool:"Pet Policies",category:"airline",
q:"What is generally discouraged when preparing a pet for air travel?",
a:["A veterinary check","Carrier familiarisation","Sedation without veterinary guidance","Checking airline rules"],
correct:2,
explanation:"Sedation is generally discouraged because of potential health risks."
},
{
pool:"Pet Policies",category:"airline",
q:"Are emotional support animals automatically treated as service animals under US DOT rules?",
a:["Yes","No","Only on domestic flights","Only in business class"],
correct:1,
explanation:"US DOT rules no longer classify emotional support animals as service animals."
},

/* 12. UNACCOMPANIED MINORS */
{
pool:"UMNR Policies",category:"airline",
q:"What does UMNR stand for?",
a:["Unaccompanied Minor","United Minor Reservation","Universal Member Number Record","Unlisted Minor Request"],
correct:0,
explanation:"UMNR means Unaccompanied Minor."
},
{
pool:"UMNR Policies",category:"airline",
q:"According to the supplied notes, what is the mandatory UMNR age range for United Airlines?",
a:["2–4","5–14","15–18","8–17"],
correct:1,
explanation:"The supplied training material lists mandatory service for ages 5–14."
},
{
pool:"UMNR Policies",category:"airline",
q:"According to the supplied notes, which airline does not offer UMNR service?",
a:["United Airlines","Delta Air Lines","Frontier Airlines","American Airlines"],
correct:2,
explanation:"The supplied notes state that Frontier does not offer UMNR service."
},
{
pool:"UMNR Policies",category:"airline",
q:"What should a parent provide for an unaccompanied minor?",
a:["Only a boarding pass","Required forms, contact details and pickup arrangements","Only a baggage tag","No documentation"],
correct:1,
explanation:"UMNR arrangements require the relevant forms and contact and pickup information."
},
{
pool:"UMNR Policies",category:"airline",
q:"What should the person collecting a child at the destination carry?",
a:["Valid identification","A restaurant receipt","The aircraft registration","A printed airport map only"],
correct:0,
explanation:"The designated pickup person should carry valid identification."
},

/* 13. BAGGAGE POLICIES */
{
pool:"Baggage Policies",category:"airline",
q:"Where should a personal item normally fit?",
a:["In the aircraft hold only","Under the seat in front of the passenger","In the cockpit","In the overhead bin only"],
correct:1,
explanation:"A personal item is generally required to fit under the seat in front of the passenger."
},
{
pool:"Baggage Policies",category:"airline",
q:"What is the typical maximum linear dimension for checked baggage in the supplied notes?",
a:["100 cm","120 cm","158 cm","200 cm"],
correct:2,
explanation:"The supplied notes give 158 cm (62 inches) as a common linear dimension limit."
},
{
pool:"Baggage Policies",category:"airline",
q:"What is the typical economy checked baggage weight allowance shown in the notes?",
a:["10 kg","15 kg","23 kg","40 kg"],
correct:2,
explanation:"The supplied notes list 23 kg (50 lb) as a typical economy allowance, not a universal rule."
},
{
pool:"Baggage Policies",category:"airline",
q:"What is the typical cabin bag size in the supplied notes?",
a:["55 × 35 × 23 cm","80 × 60 × 40 cm","30 × 20 × 10 cm","100 × 80 × 50 cm"],
correct:0,
explanation:"The supplied notes give 55 × 35 × 23 cm as a typical cabin bag size."
},
{
pool:"Baggage Policies",category:"airline",
q:"What is the common cabin liquid container limit in the supplied notes?",
a:["500 ml","250 ml","100 ml","1 litre"],
correct:2,
explanation:"The notes describe the common 100 ml container limit, subject to applicable security rules."
},
{
pool:"Baggage Policies",category:"airline",
q:"Which item may be restricted because of safety regulations?",
a:["A book","A flammable liquid","A soft toy","A cotton shirt"],
correct:1,
explanation:"Flammable liquids are subject to dangerous goods and security restrictions."
}
];

/* Add these questions to the existing academy question pool */
questionPool.push(...trainingQuestionBank);

console.log(
    "Additional airline training questions loaded:",
    trainingQuestionBank.length
);

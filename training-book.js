
/* =========================================================
   AIRLINE CORNER - PROFESSIONAL TRAINING HANDBOOK
   File: training-book.js
   Trainer: WALTER
   Updated Learning Edition: November 2026

   This file contains:
   - 12 professional training chapters
   - Appendix A: USA Airport Directory
   - Appendix B: Canadian Airport Directory
   - Appendix C: Policy Verification
   - Thank You page
   - Chapter navigation
   - Reading progress
   - Completed chapter tracking
   ========================================================= */

(function () {
  "use strict";

  const chapters = [

    // CHAPTER 1
    {
      title: "Chapter 1: Aircraft Manufacturers and Aircraft Basics",
      content: `
        <h2>Chapter 1: Aircraft Manufacturers and Aircraft Basics</h2>

        <h3>1.1 Introduction to Commercial Aviation</h3>
        <p>
          Commercial aviation is the transportation of passengers and cargo
          by aircraft operated by airlines. A travel sales agent should
          understand basic aircraft terminology because passengers may ask
          questions about aircraft types, seating, comfort and flight duration.
        </p>

        <h3>1.2 Major Aircraft Manufacturers</h3>
        <p>Some of the major manufacturers of commercial aircraft include:</p>

        <table style="width:100%;border-collapse:collapse;margin:15px 0;">
          <tr style="background:#eaf3fb;">
            <th style="padding:10px;border:1px solid #ddd;text-align:left;">Manufacturer</th>
            <th style="padding:10px;border:1px solid #ddd;text-align:left;">Country</th>
            <th style="padding:10px;border:1px solid #ddd;text-align:left;">Examples</th>
          </tr>
          <tr>
            <td style="padding:10px;border:1px solid #ddd;">Airbus</td>
            <td style="padding:10px;border:1px solid #ddd;">Europe</td>
            <td style="padding:10px;border:1px solid #ddd;">A320, A321, A350, A380</td>
          </tr>
          <tr>
            <td style="padding:10px;border:1px solid #ddd;">Boeing</td>
            <td style="padding:10px;border:1px solid #ddd;">United States</td>
            <td style="padding:10px;border:1px solid #ddd;">737, 777, 787, 747</td>
          </tr>
          <tr>
            <td style="padding:10px;border:1px solid #ddd;">Embraer</td>
            <td style="padding:10px;border:1px solid #ddd;">Brazil</td>
            <td style="padding:10px;border:1px solid #ddd;">E175, E190, E195</td>
          </tr>
          <tr>
            <td style="padding:10px;border:1px solid #ddd;">ATR</td>
            <td style="padding:10px;border:1px solid #ddd;">France and Italy</td>
            <td style="padding:10px;border:1px solid #ddd;">ATR 42, ATR 72</td>
          </tr>
        </table>

        <h3>1.3 Aircraft Categories</h3>
        <p><strong>Narrow-body aircraft:</strong> Generally have one passenger aisle. They are commonly used for domestic and short-to-medium-haul flights.</p>
        <p><strong>Wide-body aircraft:</strong> Have two passenger aisles and are commonly used for long-haul international flights.</p>
        <p><strong>Regional aircraft:</strong> Smaller aircraft often used for shorter routes and regional connections.</p>

        <h3>1.4 Important Aircraft Terms</h3>
        <ul>
          <li><strong>Cabin:</strong> The area where passengers sit.</li>
          <li><strong>Cockpit:</strong> The flight deck where pilots operate the aircraft.</li>
          <li><strong>Fuselage:</strong> The main body of the aircraft.</li>
          <li><strong>Wing:</strong> The aircraft structure that generates lift.</li>
          <li><strong>Landing gear:</strong> The wheels and supporting structure used during landing and ground movement.</li>
          <li><strong>Seat configuration:</strong> The arrangement of seats inside the aircraft.</li>
        </ul>

        <h3>1.5 Passenger Cabin Classes</h3>
        <ul>
          <li>Economy Class</li>
          <li>Premium Economy</li>
          <li>Business Class</li>
          <li>First Class</li>
        </ul>
        <p>
          Not every airline or aircraft offers all four classes. Cabin names,
          facilities and seat arrangements vary by airline and aircraft.
        </p>

        <div class="notice">
          <strong>Agent Tip:</strong> Never promise a particular aircraft,
          seat type or cabin feature without checking the airline's current
          booking information.
        </div>

        <h3>1.6 What a Travel Agent Should Know</h3>
        <p>A professional agent should be able to explain the difference between aircraft categories, identify the aircraft shown in a booking, and direct passengers to the airline for aircraft-specific seat or accessibility information.</p>

        <h3>Chapter Summary</h3>
        <p>Aircraft knowledge helps agents understand flight products, passenger expectations and the basic terminology used by airlines.</p>
      `
    },

    // CHAPTER 2
    {
      title: "Chapter 2: USA and Canada Geography and Time Zones",
      content: `
        <h2>Chapter 2: USA and Canada Geography and Time Zones</h2>

        <h3>2.1 Why Geography Matters</h3>
        <p>
          Travel agents working with North American itineraries must understand
          major cities, airport locations, connecting routes and time zones.
          Incorrect time-zone calculations can cause missed flights and
          incorrect passenger advice.
        </p>

        <h3>2.2 Major Regions of the United States</h3>
        <ul>
          <li><strong>Northeast:</strong> New York, Boston, Philadelphia and Washington, D.C.</li>
          <li><strong>Southeast:</strong> Atlanta, Miami, Orlando and Charlotte.</li>
          <li><strong>Midwest:</strong> Chicago, Detroit, Minneapolis and St. Louis.</li>
          <li><strong>Southwest:</strong> Dallas, Houston, Phoenix and Las Vegas.</li>
          <li><strong>West:</strong> Los Angeles, San Francisco, Seattle and San Diego.</li>
        </ul>

        <h3>2.3 Major Regions of Canada</h3>
        <ul>
          <li><strong>Western Canada:</strong> Vancouver, Calgary and Edmonton.</li>
          <li><strong>Central Canada:</strong> Toronto, Ottawa and Montreal.</li>
          <li><strong>Atlantic Canada:</strong> Halifax, Moncton and St. John's.</li>
          <li><strong>Northern Canada:</strong> Yellowknife, Iqaluit and Whitehorse.</li>
        </ul>

        <h3>2.4 North American Time Zones</h3>
        <p>Commonly encountered time-zone names include:</p>
        <ul>
          <li>Eastern Time (ET)</li>
          <li>Central Time (CT)</li>
          <li>Mountain Time (MT)</li>
          <li>Pacific Time (PT)</li>
          <li>Atlantic Time (AT)</li>
          <li>Newfoundland Time (NT)</li>
        </ul>

        <p>
          Some regions observe daylight saving time and others do not.
          Time-zone rules can also change by location and date.
        </p>

        <h3>2.5 Understanding Flight Times</h3>
        <p>
          Airline schedules generally show departure and arrival times in
          the local time of each airport. A flight departing at 10:00 AM
          in New York and arriving at 1:00 PM in Los Angeles does not mean
          that the flight lasted only three hours.
        </p>

        <h3>2.6 Date Changes and Overnight Flights</h3>
        <p>
          International flights may arrive on the following calendar day.
          Always check the date as well as the time when preparing an itinerary.
        </p>

        <div class="notice">
          <strong>Agent Tip:</strong> Use a reliable time-zone converter
          or airline schedule. Never calculate a passenger's connection
          based only on the clock difference without checking the travel date.
        </div>

        <h3>Chapter Summary</h3>
        <p>Geography and time-zone knowledge help agents plan accurate itineraries, explain connections and reduce travel confusion.</p>
      `
    },

    // CHAPTER 3
    {
      title: "Chapter 3: Airlines, Airline Codes and Ticket Stock",
      content: `
        <h2>Chapter 3: Airlines, Airline Codes and Ticket Stock</h2>

        <h3>3.1 Understanding Airlines</h3>
        <p>
          An airline is an organisation that operates aircraft to transport
          passengers, cargo or both. Airlines may operate domestic,
          international, regional or specialised services.
        </p>

        <h3>3.2 Airline Business Models</h3>
        <ul>
          <li><strong>Full-service airline:</strong> Usually offers several cabin classes and a range of passenger services.</li>
          <li><strong>Low-cost airline:</strong> Often separates optional services and charges them individually.</li>
          <li><strong>Regional airline:</strong> Operates shorter routes and connects smaller cities with larger hubs.</li>
          <li><strong>Charter airline:</strong> Operates flights arranged for specific groups or travel programmes.</li>
        </ul>

        <h3>3.3 Airline Designator Codes</h3>
        <p>
          IATA airline designator codes are commonly two characters.
          They are used in reservations, schedules and ticketing.
        </p>

        <table style="width:100%;border-collapse:collapse;margin:15px 0;">
          <tr style="background:#eaf3fb;">
            <th style="padding:10px;border:1px solid #ddd;text-align:left;">Airline</th>
            <th style="padding:10px;border:1px solid #ddd;text-align:left;">Example IATA Code</th>
          </tr>
          <tr><td style="padding:10px;border:1px solid #ddd;">Air India</td><td style="padding:10px;border:1px solid #ddd;">AI</td></tr>
          <tr><td style="padding:10px;border:1px solid #ddd;">Air Canada</td><td style="padding:10px;border:1px solid #ddd;">AC</td></tr>
          <tr><td style="padding:10px;border:1px solid #ddd;">American Airlines</td><td style="padding:10px;border:1px solid #ddd;">AA</td></tr>
          <tr><td style="padding:10px;border:1px solid #ddd;">United Airlines</td><td style="padding:10px;border:1px solid #ddd;">UA</td></tr>
          <tr><td style="padding:10px;border:1px solid #ddd;">Delta Air Lines</td><td style="padding:10px;border:1px solid #ddd;">DL</td></tr>
          <tr><td style="padding:10px;border:1px solid #ddd;">British Airways</td><td style="padding:10px;border:1px solid #ddd;">BA</td></tr>
        </table>

        <p>Codes should always be checked against a current airline or industry reference before ticketing.</p>

        <h3>3.4 What Is Ticket Stock?</h3>
        <p>
          Ticket stock identifies the airline whose ticket document is
          issued. Electronic tickets commonly contain a ticket number
          beginning with a three-digit airline accounting code.
        </p>

        <p>
          The validating carrier is important because it relates to ticket
          issuance, ticketing authority and applicable airline rules.
        </p>

        <h3>3.5 Marketing Carrier and Operating Carrier</h3>
        <p><strong>Marketing carrier:</strong> The airline whose flight number is displayed and sold.</p>
        <p><strong>Operating carrier:</strong> The airline that actually operates the aircraft.</p>

        <h3>3.6 Airline Alliances</h3>
        <p>Major global airline alliances include:</p>
        <ul>
          <li>Star Alliance</li>
          <li>oneworld</li>
          <li>SkyTeam</li>
        </ul>

        <p>Alliance membership does not mean that every airline policy, baggage rule or ticket condition is identical.</p>

        <div class="notice">
          <strong>Agent Tip:</strong> Before issuing or changing a ticket,
          identify the validating carrier and review the fare rules and
          ticketing conditions.
        </div>

        <h3>Chapter Summary</h3>
        <p>Airline codes, ticket stock and carrier identification are essential for accurate reservations and ticket servicing.</p>
      `
    },

    // CHAPTER 4
    {
      title: "Chapter 4: Airport Codes - How to Read and Use Them",
      content: `
        <h2>Chapter 4: Airport Codes - How to Read and Use Them</h2>

        <h3>4.1 What Is an Airport Code?</h3>
        <p>
          An airport code is an identifier used to distinguish airports
          and locations in airline systems, travel documents and schedules.
        </p>

        <h3>4.2 IATA Airport Codes</h3>
        <p>
          IATA airport codes usually contain three letters. They are
          commonly displayed on tickets, baggage tags and flight itineraries.
        </p>

        <table style="width:100%;border-collapse:collapse;margin:15px 0;">
          <tr style="background:#eaf3fb;">
            <th style="padding:10px;border:1px solid #ddd;text-align:left;">Airport</th>
            <th style="padding:10px;border:1px solid #ddd;text-align:left;">Code</th>
            <th style="padding:10px;border:1px solid #ddd;text-align:left;">Country</th>
          </tr>
          <tr><td style="padding:10px;border:1px solid #ddd;">John F. Kennedy International</td><td style="padding:10px;border:1px solid #ddd;">JFK</td><td style="padding:10px;border:1px solid #ddd;">USA</td></tr>
          <tr><td style="padding:10px;border:1px solid #ddd;">Los Angeles International</td><td style="padding:10px;border:1px solid #ddd;">LAX</td><td style="padding:10px;border:1px solid #ddd;">USA</td></tr>
          <tr><td style="padding:10px;border:1px solid #ddd;">Chicago O'Hare</td><td style="padding:10px;border:1px solid #ddd;">ORD</td><td style="padding:10px;border:1px solid #ddd;">USA</td></tr>
          <tr><td style="padding:10px;border:1px solid #ddd;">Toronto Pearson</td><td style="padding:10px;border:1px solid #ddd;">YYZ</td><td style="padding:10px;border:1px solid #ddd;">Canada</td></tr>
          <tr><td style="padding:10px;border:1px solid #ddd;">Vancouver International</td><td style="padding:10px;border:1px solid #ddd;">YVR</td><td style="padding:10px;border:1px solid #ddd;">Canada</td></tr>
          <tr><td style="padding:10px;border:1px solid #ddd;">Montréal-Trudeau</td><td style="padding:10px;border:1px solid #ddd;">YUL</td><td style="padding:10px;border:1px solid #ddd;">Canada</td></tr>
          <tr><td style="padding:10px;border:1px solid #ddd;">Kolkata International</td><td style="padding:10px;border:1px solid #ddd;">CCU</td><td style="padding:10px;border:1px solid #ddd;">India</td></tr>
        </table>

        <h3>4.3 Airport Codes and City Codes</h3>
        <p>
          Some cities have more than one airport. A city or metropolitan
          code may represent multiple airports, while an individual airport
          code identifies a specific airport.
        </p>

        <p>
          For example, the New York area includes JFK, LaGuardia (LGA)
          and Newark Liberty (EWR). Do not assume that all airports in
          a city are equally convenient for a passenger.
        </p>

        <h3>4.4 IATA and ICAO Codes</h3>
        <ul>
          <li><strong>IATA:</strong> Commonly three-letter airport codes used in passenger-facing travel systems.</li>
          <li><strong>ICAO:</strong> Commonly four-letter location indicators used in aviation operations and flight planning.</li>
        </ul>

        <h3>4.5 Checking an Airport Code</h3>
        <ol>
          <li>Confirm the passenger's intended city.</li>
          <li>Identify the correct airport.</li>
          <li>Check the airport code.</li>
          <li>Confirm the departure and arrival airports on the itinerary.</li>
          <li>Check terminal and transfer requirements where applicable.</li>
        </ol>

        <div class="notice">
          <strong>Agent Tip:</strong> Always confirm the full airport name
          with the passenger. A three-letter code alone may not make the
          intended airport clear.
        </div>

        <h3>Chapter Summary</h3>
        <p>Correct airport identification is essential for bookings, connections, transfers and passenger communication.</p>
      `
    },

    // CHAPTER 5
    {
      title: "Chapter 5: Cancellations, Refunds and Travel Credits",
      content: `
        <h2>Chapter 5: Cancellations, Refunds and Travel Credits</h2>

        <h3>5.1 Introduction</h3>
        <p>
          Passengers may request cancellation or a refund for many reasons.
          A professional travel agent must understand the difference between
          cancellation, refund, credit and ticket validity.
        </p>

        <h3>5.2 Cancellation</h3>
        <p>
          Cancellation means that a reservation or ticketed journey is
          cancelled according to the applicable booking and ticket conditions.
          Cancelling a reservation does not automatically mean that the
          passenger receives a full refund.
        </p>

        <h3>5.3 Refund</h3>
        <p>
          A refund is the return of an eligible amount under the fare rules,
          airline policy and applicable law.
        </p>

        <h3>5.4 Travel Credit and Vouchers</h3>
        <p>
          An airline may issue a travel credit or voucher instead of returning
          money to the original payment method. These products may have
          restrictions, expiry dates and usage conditions.
        </p>

        <h3>5.5 Refund Types</h3>
        <ul>
          <li><strong>Voluntary refund:</strong> Requested by the passenger.</li>
          <li><strong>Involuntary refund:</strong> May arise from airline disruption or another qualifying circumstance.</li>
          <li><strong>Partial refund:</strong> Only an eligible portion of the ticket value is returned.</li>
          <li><strong>Unused ticket:</strong> A ticket where none of the flight coupons has been used.</li>
          <li><strong>Partially used ticket:</strong> A ticket where one or more flight coupons have already been used.</li>
        </ul>

        <h3>5.6 Before Processing a Refund</h3>
        <ol>
          <li>Verify the passenger and booking details.</li>
          <li>Identify the ticket number and validating carrier.</li>
          <li>Check whether the ticket is unused or partially used.</li>
          <li>Read the applicable fare rules.</li>
          <li>Check cancellation penalties and refund conditions.</li>
          <li>Check taxes and other refundable amounts.</li>
          <li>Explain the expected process and timeline without guaranteeing an unconfirmed result.</li>
          <li>Document the request and retain the relevant reference number.</li>
        </ol>

        <h3>5.7 Important Distinction</h3>
        <p>
          A refund to the original payment method, a travel voucher and a
          future travel credit are not the same thing. Explain exactly
          which option is being offered.
        </p>

        <div class="notice">
          <strong>Agent Tip:</strong> Never promise a full refund until
          the fare conditions and airline decision have been checked.
        </div>

        <h3>Chapter Summary</h3>
        <p>Accurate refund handling requires careful review of ticket status, fare conditions, airline rules and applicable passenger protections.</p>
      `
    },

    // CHAPTER 6
    {
      title: "Chapter 6: Changes, Delays, Cancellations and Rerouting",
      content: `
        <h2>Chapter 6: Changes, Delays, Cancellations and Rerouting</h2>

        <h3>6.1 Schedule Changes</h3>
        <p>
          An airline may change a flight's departure time, arrival time,
          operating aircraft, flight number or route. These changes may
          affect a passenger's connection or overall travel plan.
        </p>

        <h3>6.2 Flight Delays</h3>
        <p>
          A delay occurs when a flight operates later than its scheduled
          departure or arrival time. The reason may include weather,
          technical issues, air traffic restrictions or operational matters.
        </p>

        <h3>6.3 Flight Cancellation</h3>
        <p>
          A cancellation means that the scheduled flight will not operate.
          The airline may offer alternative flights, a refund or other
          assistance according to the applicable rules.
        </p>

        <h3>6.4 Rerouting and Rebooking</h3>
        <p>
          Rerouting means arranging an alternative journey when the original
          itinerary cannot be operated as planned.
        </p>

        <h3>6.5 Important Agent Workflow</h3>
        <ol>
          <li>Check the latest flight status.</li>
          <li>Identify whether the change is voluntary or involuntary.</li>
          <li>Check the ticket status and airline instructions.</li>
          <li>Review available alternative flights.</li>
          <li>Check connection times and airport changes.</li>
          <li>Confirm any additional fare or ticketing requirements.</li>
          <li>Explain the options clearly to the passenger.</li>
          <li>Document the final decision and confirmation.</li>
        </ol>

        <h3>6.6 Minimum Connection Time</h3>
        <p>
          Minimum connection time is the required time between connecting
          flights at an airport under applicable conditions. Requirements
          may vary by airport, terminal, carrier, itinerary and passenger
          circumstances.
        </p>

        <h3>6.7 Passenger Rights</h3>
        <p>
          Passenger rights differ according to the country, route, airline,
          disruption circumstances and applicable legislation.
        </p>

        <p>
          In the United States, consult the Department of Transportation.
          In Canada, consult the Canadian Transportation Agency. Do not
          assume that one country's rules apply to every journey.
        </p>

        <div class="notice">
          <strong>Agent Tip:</strong> When a flight changes, check the
          entire itinerary. A small schedule adjustment can create a
          missed connection later in the journey.
        </div>

        <h3>Chapter Summary</h3>
        <p>Disruption handling requires quick verification, accurate rebooking information and clear passenger communication.</p>
      `
    },

    // CHAPTER 7
    {
      title: "Chapter 7: Name Corrections, DOB and Codeshares",
      content: `
        <h2>Chapter 7: Name Corrections, DOB and Codeshares</h2>

        <h3>7.1 Passenger Name Accuracy</h3>
        <p>
          Passenger names must be entered carefully and must meet the
          airline's requirements and applicable travel-document rules.
          Errors can cause airport check-in or boarding problems.
        </p>

        <h3>7.2 Name Correction Versus Name Change</h3>
        <p><strong>Name correction:</strong> A permitted correction to a booking where the passenger remains the same person.</p>
        <p><strong>Name change:</strong> Replacing one passenger with another person. This may not be permitted on many airline tickets.</p>

        <h3>7.3 Common Name Issues</h3>
        <ul>
          <li>Misspelled first name.</li>
          <li>Misspelled surname.</li>
          <li>Missing or extra letters.</li>
          <li>Incorrect name order.</li>
          <li>Differences between booking and travel documents.</li>
          <li>Special characters or spacing differences.</li>
        </ul>

        <h3>7.4 Date of Birth</h3>
        <p>
          Date of birth can affect passenger classification, age-based
          fares, infant and child rules, and security or travel-document
          checks. It must be entered accurately when required.
        </p>

        <h3>7.5 Codeshare Flights</h3>
        <p>
          A codeshare is an arrangement where one airline markets a flight
          that is operated by another airline. The booking may display one
          airline's flight number while another airline operates the aircraft.
        </p>

        <h3>7.6 What Agents Must Check</h3>
        <ul>
          <li>Marketing carrier.</li>
          <li>Operating carrier.</li>
          <li>Ticketing carrier.</li>
          <li>Check-in arrangements.</li>
          <li>Baggage handling rules.</li>
          <li>Seat selection conditions.</li>
          <li>Special service request arrangements.</li>
        </ul>

        <div class="notice">
          <strong>Agent Tip:</strong> Never alter a passenger name without
          checking the airline's specific correction policy and obtaining
          the required authorisation.
        </div>

        <h3>Chapter Summary</h3>
        <p>Passenger data accuracy and codeshare knowledge are essential for reliable booking and ticket servicing.</p>
      `
    },

    // CHAPTER 8
    {
      title: "Chapter 8: Pets and Service Animals",
      content: `
        <h2>Chapter 8: Pets and Service Animals</h2>

        <h3>8.1 Introduction</h3>
        <p>
          Passengers may travel with household pets or qualifying service
          animals. Airline procedures and government requirements can differ
          significantly by route and destination.
        </p>

        <h3>8.2 Common Pet Travel Categories</h3>
        <ul>
          <li>Pets travelling in the cabin, where permitted.</li>
          <li>Pets transported in the aircraft hold under approved arrangements.</li>
          <li>Animals transported as cargo.</li>
          <li>Service animals recognised under applicable rules.</li>
        </ul>

        <h3>8.3 Before Confirming Pet Travel</h3>
        <ol>
          <li>Check whether the airline accepts the animal.</li>
          <li>Check route and aircraft restrictions.</li>
          <li>Check carrier or container requirements.</li>
          <li>Check weight, size and breed restrictions where applicable.</li>
          <li>Check required documentation.</li>
          <li>Check destination country import rules.</li>
          <li>Confirm space and approval with the airline.</li>
        </ol>

        <h3>8.4 Service Animals</h3>
        <p>
          Service animal definitions and acceptance requirements differ
          between jurisdictions. Do not assume that a household pet,
          emotional support animal and service animal are treated in
          the same way.
        </p>

        <h3>8.5 International Animal Travel</h3>
        <p>
          International travel may require health certificates, vaccinations,
          permits, identification and inspection. Requirements may depend
          on the country of departure, transit and destination.
        </p>

        <div class="notice">
          <strong>Agent Tip:</strong> Never confirm animal transportation
          based only on a general airline statement. Verify the exact route,
          animal category, documentation and available capacity.
        </div>

        <h3>Chapter Summary</h3>
        <p>Pet and service animal bookings require careful checking of airline procedures and government regulations.</p>
      `
    },

    // CHAPTER 9
    {
      title: "Chapter 9: Unaccompanied Minors (UMNR)",
      content: `
        <h2>Chapter 9: Unaccompanied Minors (UMNR)</h2>

        <h3>9.1 What Is an Unaccompanied Minor?</h3>
        <p>
          An unaccompanied minor is a child travelling without an accompanying
          adult who meets the airline's definition and requirements.
          Airlines may provide supervised travel services for eligible children.
        </p>

        <h3>9.2 Age Requirements</h3>
        <p>
          Age limits, mandatory supervision and optional services vary
          by airline and route. There is no single age policy that applies
          to every airline.
        </p>

        <h3>9.3 Booking Information</h3>
        <p>An agent may need to collect and verify:</p>
        <ul>
          <li>Child's full name and date of birth.</li>
          <li>Flight details and route.</li>
          <li>Parent or guardian information.</li>
          <li>Contact details of the person delivering the child.</li>
          <li>Contact details of the person collecting the child.</li>
          <li>Required consent and travel documents.</li>
        </ul>

        <h3>9.4 Important Booking Checks</h3>
        <ol>
          <li>Check the airline's minimum and maximum age rules.</li>
          <li>Check whether the service is mandatory or optional.</li>
          <li>Check whether connecting flights are permitted.</li>
          <li>Check whether codeshare flights are permitted.</li>
          <li>Check the service fee.</li>
          <li>Confirm the required forms and identification.</li>
          <li>Ensure the airline confirms the service.</li>
        </ol>

        <h3>9.5 Airport Procedures</h3>
        <p>
          The delivering adult and collecting adult may need to follow
          specific airport procedures. Identification and authorisation
          may be required.
        </p>

        <div class="notice">
          <strong>Agent Tip:</strong> Never assume that an unaccompanied
          minor can travel on a connection or codeshare. Check every
          operating carrier's requirements.
        </div>

        <h3>Chapter Summary</h3>
        <p>Unaccompanied minor bookings require accurate age verification, contact information and airline approval.</p>
      `
    },

    // CHAPTER 10
    {
      title: "Chapter 10: Baggage Basics and Security Screening",
      content: `
        <h2>Chapter 10: Baggage Basics and Security Screening</h2>

        <h3>10.1 Types of Baggage</h3>
        <ul>
          <li><strong>Cabin baggage:</strong> Items carried by the passenger into the aircraft cabin.</li>
          <li><strong>Checked baggage:</strong> Baggage accepted by the airline and transported in the aircraft hold.</li>
          <li><strong>Personal item:</strong> A smaller item that may be allowed in addition to cabin baggage under airline rules.</li>
          <li><strong>Special baggage:</strong> Items such as sports equipment or musical instruments that may require special handling.</li>
        </ul>

        <h3>10.2 Weight and Piece Concepts</h3>
        <p><strong>Weight concept:</strong> Baggage allowance is based on total permitted weight.</p>
        <p><strong>Piece concept:</strong> Baggage allowance is based on the number of permitted bags and their individual limits.</p>

        <h3>10.3 Baggage Allowance</h3>
        <p>
          Baggage allowances vary according to airline, fare, route, cabin,
          frequent-flyer status and ticket conditions.
        </p>

        <h3>10.4 Excess Baggage</h3>
        <p>
          Excess baggage charges may apply when the passenger exceeds the
          permitted weight, dimensions or number of bags. The airline
          determines applicable fees and acceptance conditions.
        </p>

        <h3>10.5 Restricted and Prohibited Items</h3>
        <p>
          Aviation security rules restrict or prohibit certain dangerous
          goods and items. Rules can differ between cabin baggage and
          checked baggage.
        </p>

        <h3>10.6 Security Screening</h3>
        <p>
          Passengers and their belongings may be screened before boarding.
          Security procedures are controlled by the relevant airport
          and government authorities.
        </p>

        <h3>10.7 Damaged, Delayed or Lost Baggage</h3>
        <p>
          Passengers should report baggage problems promptly to the
          responsible airline or baggage service desk and retain the
          relevant report reference.
        </p>

        <div class="notice">
          <strong>Agent Tip:</strong> Never quote a universal baggage
          allowance. Check the actual itinerary, fare and operating
          airline's current baggage rules.
        </div>

        <h3>Chapter Summary</h3>
        <p>Baggage knowledge helps agents explain allowances, restrictions and procedures while reducing airport difficulties.</p>
      `
    },

    // CHAPTER 11
    {
      title: "Chapter 11: The Professional Agent Workflow",
      content: `
        <h2>Chapter 11: The Professional Agent Workflow</h2>

        <h3>11.1 The Role of a Travel Sales Agent</h3>
        <p>
          A professional travel sales agent helps customers understand
          travel options, compares suitable itineraries and assists with
          reservations and ticket servicing.
        </p>

        <h3>11.2 Understanding the Passenger's Requirements</h3>
        <p>Before searching for flights, establish:</p>
        <ul>
          <li>Origin and destination.</li>
          <li>Travel dates.</li>
          <li>One-way, return or multi-city journey.</li>
          <li>Number of passengers and passenger types.</li>
          <li>Preferred cabin class.</li>
          <li>Baggage and special service needs.</li>
          <li>Budget and schedule preferences.</li>
        </ul>

        <h3>11.3 Searching for Flights</h3>
        <p>
          Compare flight schedules, connection times, airports, baggage
          conditions and fare rules. A low fare is not necessarily the
          best option for every passenger.
        </p>

        <h3>11.4 Before Ticket Issuance</h3>
        <ol>
          <li>Verify passenger names.</li>
          <li>Verify dates and airports.</li>
          <li>Check the itinerary and connections.</li>
          <li>Review the fare conditions.</li>
          <li>Explain baggage and optional charges.</li>
          <li>Confirm the total price and payment conditions.</li>
          <li>Obtain passenger approval.</li>
          <li>Issue the ticket only when authorised and permitted.</li>
        </ol>

        <h3>11.5 Customer Communication</h3>
        <p>
          Use clear and professional language. Explain what is confirmed,
          what is pending and what depends on airline approval.
        </p>

        <h3>11.6 Record Keeping</h3>
        <p>
          Maintain accurate records of booking references, ticket numbers,
          passenger requests, airline responses and service actions.
          Protect passenger information and follow applicable privacy rules.
        </p>

        <h3>11.7 Professional Conduct</h3>
        <ul>
          <li>Be accurate and honest.</li>
          <li>Never invent airline policy.</li>
          <li>Do not guarantee an unconfirmed service.</li>
          <li>Protect passenger information.</li>
          <li>Explain charges before processing.</li>
          <li>Escalate issues when necessary.</li>
        </ul>

        <div class="notice">
          <strong>Agent Tip:</strong> Accuracy is more important than speed.
          A few extra seconds checking a booking can prevent a costly mistake.
        </div>

        <h3>Chapter Summary</h3>
        <p>A professional agent combines product knowledge, accurate booking procedures, clear communication and responsible customer service.</p>
      `
    },

    // CHAPTER 12
    {
      title: "Chapter 12: Knowledge Checks, Case Studies and Answer Key",
      content: `
        <h2>Chapter 12: Knowledge Checks, Case Studies and Answer Key</h2>

        <h3>12.1 Purpose of Knowledge Checks</h3>
        <p>
          Knowledge checks help students review the concepts covered in
          the handbook. They should be used to identify areas requiring
          further study.
        </p>

        <h3>12.2 Practice Questions</h3>

        <p><strong>Question 1:</strong> What is the IATA code for Toronto Pearson International Airport?</p>
        <p>A. YVR &nbsp; B. YYZ &nbsp; C. YUL &nbsp; D. YOW</p>
        <p><strong>Answer:</strong> B. YYZ</p>

        <p><strong>Question 2:</strong> Which manufacturer produces the Boeing 787?</p>
        <p>A. Airbus &nbsp; B. ATR &nbsp; C. Boeing &nbsp; D. Embraer</p>
        <p><strong>Answer:</strong> C. Boeing</p>

        <p><strong>Question 3:</strong> What does a codeshare arrangement mean?</p>
        <p><strong>Answer:</strong> One airline markets a flight operated by another airline.</p>

        <p><strong>Question 4:</strong> Does cancelling a booking always guarantee a full refund?</p>
        <p><strong>Answer:</strong> No. Refund eligibility depends on fare conditions, airline rules and applicable law.</p>

        <p><strong>Question 5:</strong> What should an agent check before confirming pet travel?</p>
        <p><strong>Answer:</strong> Airline acceptance, route restrictions, animal requirements, documentation and destination rules.</p>

        <h3>12.3 Case Study 1: Incorrect Passenger Name</h3>
        <p>
          A passenger notices that their surname has been entered incorrectly
          after booking.
        </p>
        <p><strong>Professional response:</strong> Verify the passenger's travel documents, identify the ticketing carrier and contact the airline or authorised ticketing channel to establish the permitted correction procedure.</p>

        <h3>12.4 Case Study 2: Missed Connection</h3>
        <p>
          A passenger's incoming flight is delayed and the connection
          may be missed.
        </p>
        <p><strong>Professional response:</strong> Check the latest flight status, ticket conditions, airline protection arrangements and available alternatives. Do not promise a specific rebooking until confirmed.</p>

        <h3>12.5 Case Study 3: Baggage Allowance</h3>
        <p>
          A passenger asks whether they can carry two checked bags.
        </p>
        <p><strong>Professional response:</strong> Check the exact fare, route, cabin, ticket and operating carrier baggage rules before answering.</p>

        <h3>12.6 Final Professional Checklist</h3>
        <ul>
          <li>I can identify common aircraft manufacturers.</li>
          <li>I understand North American time zones.</li>
          <li>I can identify airline and airport codes.</li>
          <li>I understand basic ticket stock terminology.</li>
          <li>I can explain the difference between cancellation and refund.</li>
          <li>I understand schedule changes and rebooking.</li>
          <li>I know how to check name correction requirements.</li>
          <li>I can identify pet and service animal booking considerations.</li>
          <li>I understand unaccompanied minor procedures.</li>
          <li>I can check baggage allowances and restrictions.</li>
          <li>I understand the professional agent workflow.</li>
        </ul>

        <h3>Final Message</h3>
        <p>
          A successful airline travel sales agent is accurate, patient,
          professional and committed to continuous learning. Always verify
          current airline policies and official regulations before advising
          passengers or processing a booking.
        </p>
      `
    },

    // APPENDIX A
    {
      title: "Appendix A: USA Airport Code Study Directory",
      content: `
        <h2>Appendix A: USA Airport Code Study Directory</h2>

        <p>
          This study directory provides examples of major United States
          airports. It is a learning reference, not a complete airport list.
        </p>

        <table style="width:100%;border-collapse:collapse;margin:15px 0;">
          <tr style="background:#eaf3fb;">
            <th style="padding:9px;border:1px solid #ddd;text-align:left;">Airport / City</th>
            <th style="padding:9px;border:1px solid #ddd;text-align:left;">Code</th>
          </tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">New York - John F. Kennedy</td><td style="padding:9px;border:1px solid #ddd;">JFK</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">New York - LaGuardia</td><td style="padding:9px;border:1px solid #ddd;">LGA</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Newark</td><td style="padding:9px;border:1px solid #ddd;">EWR</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Los Angeles</td><td style="padding:9px;border:1px solid #ddd;">LAX</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">San Francisco</td><td style="padding:9px;border:1px solid #ddd;">SFO</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Chicago O'Hare</td><td style="padding:9px;border:1px solid #ddd;">ORD</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Atlanta</td><td style="padding:9px;border:1px solid #ddd;">ATL</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Miami</td><td style="padding:9px;border:1px solid #ddd;">MIA</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Dallas/Fort Worth</td><td style="padding:9px;border:1px solid #ddd;">DFW</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Houston Intercontinental</td><td style="padding:9px;border:1px solid #ddd;">IAH</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Seattle-Tacoma</td><td style="padding:9px;border:1px solid #ddd;">SEA</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Boston Logan</td><td style="padding:9px;border:1px solid #ddd;">BOS</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Washington Dulles</td><td style="padding:9px;border:1px solid #ddd;">IAD</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Denver</td><td style="padding:9px;border:1px solid #ddd;">DEN</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Las Vegas</td><td style="padding:9px;border:1px solid #ddd;">LAS</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Orlando</td><td style="padding:9px;border:1px solid #ddd;">MCO</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Phoenix</td><td style="padding:9px;border:1px solid #ddd;">PHX</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Detroit</td><td style="padding:9px;border:1px solid #ddd;">DTW</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Minneapolis-Saint Paul</td><td style="padding:9px;border:1px solid #ddd;">MSP</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Philadelphia</td><td style="padding:9px;border:1px solid #ddd;">PHL</td></tr>
        </table>

        <h3>Study Exercise</h3>
        <p>Practise identifying each airport by its code. Learn the city, state and airport name together rather than memorising the three letters alone.</p>
      `
    },

    // APPENDIX B
    {
      title: "Appendix B: Canadian Airport Code Study Directory",
      content: `
        <h2>Appendix B: Canadian Airport Code Study Directory</h2>

        <p>
          This directory contains examples of important Canadian airports
          for travel agent training.
        </p>

        <table style="width:100%;border-collapse:collapse;margin:15px 0;">
          <tr style="background:#eaf3fb;">
            <th style="padding:9px;border:1px solid #ddd;text-align:left;">Airport / City</th>
            <th style="padding:9px;border:1px solid #ddd;text-align:left;">Code</th>
          </tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Toronto Pearson</td><td style="padding:9px;border:1px solid #ddd;">YYZ</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Toronto Billy Bishop</td><td style="padding:9px;border:1px solid #ddd;">YTZ</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Vancouver</td><td style="padding:9px;border:1px solid #ddd;">YVR</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Montréal-Trudeau</td><td style="padding:9px;border:1px solid #ddd;">YUL</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Ottawa</td><td style="padding:9px;border:1px solid #ddd;">YOW</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Calgary</td><td style="padding:9px;border:1px solid #ddd;">YYC</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Edmonton</td><td style="padding:9px;border:1px solid #ddd;">YEG</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Halifax</td><td style="padding:9px;border:1px solid #ddd;">YHZ</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Winnipeg</td><td style="padding:9px;border:1px solid #ddd;">YWG</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Quebec City</td><td style="padding:9px;border:1px solid #ddd;">YQB</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Victoria</td><td style="padding:9px;border:1px solid #ddd;">YYJ</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">St. John's</td><td style="padding:9px;border:1px solid #ddd;">YYT</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Saskatoon</td><td style="padding:9px;border:1px solid #ddd;">YXE</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Regina</td><td style="padding:9px;border:1px solid #ddd;">YQR</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Kelowna</td><td style="padding:9px;border:1px solid #ddd;">YLW</td></tr>
          <tr><td style="padding:9px;border:1px solid #ddd;">Yellowknife</td><td style="padding:9px;border:1px solid #ddd;">YZF</td></tr>
        </table>

        <h3>Study Exercise</h3>
        <p>Practise matching Canadian airport codes with their cities and provinces or territories. Confirm the exact airport before making a reservation.</p>
      `
    },

    // APPENDIX C
    {
      title: "Appendix C: Policy Verification and Source Notes",
      content: `
        <h2>Appendix C: Policy Verification and Source Notes</h2>

        <h3>Why Verification Matters</h3>
        <p>
          Airline policies and government travel requirements change.
          A training handbook should teach the method of checking a policy,
          not encourage agents to rely on outdated information.
        </p>

        <h3>Recommended Official References</h3>
        <ul>
          <li>
            <strong>IATA:</strong>
            <a href="https://www.iata.org/" target="_blank" rel="noopener">www.iata.org</a>
            - Industry information and standards.
          </li>
          <li>
            <strong>U.S. Department of Transportation:</strong>
            <a href="https://www.transportation.gov/airconsumer" target="_blank" rel="noopener">Air Consumer Protection</a>
            - Passenger protection and airline consumer information.
          </li>
          <li>
            <strong>Canadian Transportation Agency:</strong>
            <a href="https://otc-cta.gc.ca/" target="_blank" rel="noopener">otc-cta.gc.ca</a>
            - Canadian air passenger protection information.
          </li>
          <li>
            <strong>U.S. Transportation Security Administration:</strong>
            <a href="https://www.tsa.gov/" target="_blank" rel="noopener">www.tsa.gov</a>
            - U.S. airport security information.
          </li>
          <li>
            <strong>Government of Canada:</strong>
            <a href="https://www.canada.ca/" target="_blank" rel="noopener">www.canada.ca</a>
            - Canadian government travel and border information.
          </li>
          <li>
            <strong>U.S. Customs and Border Protection:</strong>
            <a href="https://www.cbp.gov/" target="_blank" rel="noopener">www.cbp.gov</a>
            - U.S. border and customs information.
          </li>
        </ul>

        <h3>Airline-Specific Verification</h3>
        <p>
          For ticket changes, refunds, baggage, pets, unaccompanied minors,
          name corrections, check-in and special services, consult the
          operating airline and ticketing carrier.
        </p>

        <h3>Verification Checklist</h3>
        <ol>
          <li>Identify the exact airline and operating carrier.</li>
          <li>Identify the passenger's route and travel date.</li>
          <li>Check the applicable fare conditions.</li>
          <li>Read the current official airline policy.</li>
          <li>Check government requirements for the route.</li>
          <li>Record the source and date of verification.</li>
          <li>Explain any uncertainty to the passenger.</li>
        </ol>

        <div class="notice">
          <strong>Important:</strong> This handbook is educational material.
          It is not a substitute for airline manuals, government regulations,
          professional accreditation or live reservation-system training.
        </div>

        <h3>Trainer's Note</h3>
        <p>
          Students should practise checking official sources and learn
          to distinguish confirmed policy from general industry knowledge.
        </p>
      `
    },

    // THANK YOU PAGE
    {
      title: "Thank You - Airline Corner",
      content: `
        <div style="text-align:center;padding:45px 15px;">
          <p style="font-size:14px;letter-spacing:3px;color:#b68a2e;font-weight:bold;">
            AIRLINE CORNER
          </p>

          <h2 style="font-size:34px;margin:25px 0;">
            THANK YOU
          </h2>

          <div style="width:90px;height:3px;background:#d5a642;margin:20px auto;"></div>

          <h3 style="font-size:22px;color:#1769aa;">
            Your Learning Journey Continues
          </h3>

          <p style="max-width:600px;margin:20px auto;">
            Congratulations on completing the Airline Travel Sales Agent
            Professional Training Handbook.
          </p>

          <p style="max-width:600px;margin:20px auto;">
            Continue learning, practise your knowledge and always maintain
            accuracy, professionalism and excellent customer service.
          </p>

          <p style="margin-top:35px;font-weight:bold;font-size:19px;">
            With Best Wishes
          </p>

          <p style="font-size:23px;color:#b68a2e;font-weight:bold;margin-top:8px;">
            WALTER
          </p>

          <p style="color:#687789;margin-top:12px;">
            Trainer | Airline Corner
          </p>
        </div>
      `
    }

  ];

  const STORAGE_KEY = "airlineCornerBookProgress";

  let currentChapter = -1;
  let completedChapters = loadProgress();

  function loadProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return Array.isArray(saved) ? saved : [];
    } catch (error) {
      return [];
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completedChapters));
    } catch (error) {
      console.warn("Could not save handbook progress.", error);
    }
  }

  function getElement(id) {
    return document.getElementById(id);
  }

  function updateProgress() {
    const total = chapters.length;
    const completed = completedChapters.length;
    const percentage = Math.round((completed / total) * 100);

    const bookFill = getElement("bookProgressFill");
    const overallFill = getElement("overallProgressFill");
    const summary = getElement("progressSummary");
    const overallText = getElement("overallProgressText");
    const completeLabel = getElement("bookCompleteLabel");

    if (bookFill) {
      bookFill.style.width = percentage + "%";
    }

    if (overallFill) {
      overallFill.style.width = percentage + "%";
    }

    if (summary) {
      summary.textContent =
        completed + " of " + total + " handbook sections completed.";
    }

    if (overallText) {
      overallText.textContent = percentage + "% completed";
    }

    if (completeLabel) {
      completeLabel.textContent =
        completed + " of " + total + " sections completed";
    }

    renderContents();
  }

  function renderContents() {
    const list = getElement("bookContentsList");
    if (!list) return;

    list.innerHTML = "";

    chapters.forEach(function(chapter, index) {
      const button = document.createElement("button");

      const isCompleted = completedChapters.includes(index);
      const isActive = currentChapter === index;

      button.type = "button";
      button.className = isActive ? "active" : "";

      button.textContent =
        (isCompleted ? "✓ " : "") +
        (index + 1) + ". " +
        chapter.title;

      button.addEventListener("click", function() {
        openChapter(index);
      });

      list.appendChild(button);
    });
  }

  function markChapterComplete() {
    if (currentChapter < 0 || currentChapter >= chapters.length) {
      return;
    }

    if (!completedChapters.includes(currentChapter)) {
      completedChapters.push(currentChapter);
      saveProgress();
    }

    updateProgress();
    openChapter(currentChapter);
  }

  function openChapter(index) {
    if (index < 0 || index >= chapters.length) {
      return;
    }

    currentChapter = index;

    const cover = getElement("bookCover");
    const page = getElement("bookPage");
    const label = getElement("bookChapterLabel");
    const readingLabel = getElement("bookReadingLabel");
    const previous = getElement("bookPrev");
    const next = getElement("bookNext");
    const homeButton = getElement("bookHomeButton");

    if (cover) cover.style.display = "none";

    if (page) {
      page.style.display = "block";

      const isCompleted = completedChapters.includes(index);

      page.innerHTML =
        '<div style="max-width:800px;margin:auto;">' +
          '<div style="font-size:12px;color:#687789;letter-spacing:1px;margin-bottom:18px;">' +
            'AIRLINE CORNER PROFESSIONAL TRAINING HANDBOOK' +
          '</div>' +
          chapters[index].content +
          '<div style="margin-top:30px;padding-top:18px;border-top:1px solid #dce4ed;">' +
            '<button type="button" id="markChapterComplete" class="btn btn-gold">' +
              (isCompleted ? '✓ Chapter Completed' : 'Mark Chapter Complete') +
            '</button>' +
          '</div>' +
        '</div>';

      const completeButton = getElement("markChapterComplete");

      if (completeButton) {
        completeButton.addEventListener("click", markChapterComplete);

        if (isCompleted) {
          completeButton.style.opacity = "0.8";
        }
      }
    }

    if (label) {
      label.textContent = "SECTION " + (index + 1) + " OF " + chapters.length;
    }

    if (readingLabel) {
      readingLabel.textContent = chapters[index].title;
    }

    if (previous) {
      previous.disabled = index === 0;
    }

    if (next) {
      next.disabled = index === chapters.length - 1;
    }

    if (homeButton) {
      homeButton.style.display = "inline-block";
    }

    renderContents();
    updateProgress();

    if (page) {
      page.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function showContents() {
    const sidebar = getElement("bookContents");

    if (sidebar) {
      sidebar.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function showCover() {
    currentChapter = -1;

    const cover = getElement("bookCover");
    const page = getElement("bookPage");
    const label = getElement("bookChapterLabel");
    const readingLabel = getElement("bookReadingLabel");
    const previous = getElement("bookPrev");
    const next = getElement("bookNext");
    const homeButton = getElement("bookHomeButton");

    if (cover) cover.style.display = "flex";
    if (page) page.style.display = "none";

    if (label) label.textContent = "AIRLINE CORNER HANDBOOK";
    if (readingLabel) readingLabel.textContent = "Your learning journey";

    if (previous) previous.disabled = true;
    if (next) next.disabled = false;

    if (homeButton) homeButton.style.display = "none";

    renderContents();
    updateProgress();
  }

  function nextChapter() {
    if (currentChapter === -1) {
      openChapter(0);
      return;
    }

    if (currentChapter < chapters.length - 1) {
      openChapter(currentChapter + 1);
    }
  }

  function previousChapter() {
    if (currentChapter > 0) {
      openChapter(currentChapter - 1);
    }
  }

  function initialiseBook() {
    const startButton = getElement("bookStartButton");
    const previous = getElement("bookPrev");
    const next = getElement("bookNext");
    const contentsButton = getElement("bookContentsButton");
    const homeButton = getElement("bookHomeButton");

    if (startButton) {
      startButton.addEventListener("click", function() {
        openChapter(0);
      });
    }

    if (previous) {
      previous.addEventListener("click", previousChapter);
    }

    if (next) {
      next.addEventListener("click", nextChapter);
    }

    if (contentsButton) {
      contentsButton.addEventListener("click", showContents);
    }

    if (homeButton) {
      homeButton.addEventListener("click", showCover);
    }

    renderContents();
    updateProgress();
    showCover();
  }

  // Public access for other Airline Corner scripts if needed.
  window.AIRLINE_CORNER_BOOK = {
    chapters: chapters,
    openChapter: openChapter,
    nextChapter: nextChapter,
    previousChapter: previousChapter,
    showContents: showContents,
    showCover: showCover,
    markChapterComplete: markChapterComplete,
    updateProgress: updateProgress,
    getCompletedChapters: function() {
      return completedChapters.slice();
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiseBook);
  } else {
    initialiseBook();
  }

})();

(() => {
  const join = (...parts) => parts.join("");

  const exactCopy = new Map([
    ["About Us", "About"],
    ["About the Council", "Product Vision"],
    ["Members & Leadership", "Current State"],
    ["Policies", "Principles"],
    ["All Policies & Priorities", "All Principles"],
    ["Resources", "Library"],
    ["All Resources", "All Library"],
    ["CIO Handbook", "Orbit Handbook"],
    ["CISO Handbook", "Trust Handbook"],
    ["News", "Updates"],
    ["Privacy Policy", "Privacy"],
    ["FOIA", "Docs"],
    ["USA.gov", "Docs"],
    ["Office of Management and Budget", "Roadmap"],
    ["We're hiring", "Start planning"],
    ["Meet the Council", "Read the vision"],
    ["Explore all policies", "Explore Orbit principles"],
    ["View the full set of Council priorities and guidance.", "See the product principles behind Orbit's planning system."],
    [join("Federal tech", "nology built to serve millions."), "Plan your week, focus your day, understand your progress."],
    [
      "Eight priorities guide how the Federal CIO modernizes government technology.",
      "One connected loop for planning, focus, goals, and reflection.",
    ],
    ["People & Culture", "Weekly Planning"],
    [
      "The U.S. Tech Force is about building durable capability and professional identity across government.",
      "Turn scattered work into a believable weekly plan with a clear next action.",
    ],
    ["Simplify, Don't Repackage", "Focus Sessions"],
    [
      "Modernization starts with a blank whiteboard and a hard question: what problem are we actually solving?",
      "Move from plan to action with a timer that keeps effort connected to the workspace.",
    ],
    ["Build Bespoke Rarely", "Tasks With Context"],
    [
      "Most core capabilities are commodities now. Custom systems mean long-term ownership of every bug, every patch, and every compliance requirement.",
      "Keep todos as the canonical task surface while goals, analytics, and history stay close.",
    ],
    ["Architecture-First Procurement", "Goals And Momentum"],
    [
      "Clear reference architectures, defined in functional terms, get us to better outcomes faster.",
      "Track long-term goals, progress, status, and completion as durable product data.",
    ],
    ["Design to Reduce Interaction", "Journal And Review"],
    [
      "The best digital service is often the one where nothing happens because nothing needed to.",
      "Capture dated notes and use reflection to adjust the next plan.",
    ],
    ["Scale Through Shared Services", "Library Memory"],
    [
      "Breaking down silos across identity, data exchange, cybersecurity, and cloud services creates compounding returns.",
      "Keep saved context, recent notes, planner snippets, and useful references in one surface.",
    ],
    ["Practical AI Adoption", "Contextual AI Planner"],
    [
      "Every federal employee should have access to baseline AI-enabled productivity tools.",
      "Use AI where it reduces planning friction and can rely on real product context.",
    ],
    ["Measure What Matters", "Analytics That Explain Progress"],
    [
      "Talent retention and impact. Fewer manual data calls. Fewer duplicative information requests.",
      "Connect tasks, focus sessions, and goals into a clearer view of momentum.",
    ],
    [
      "This work is shaped by federal technology leaders who care deeply about how government systems serve the public. If you're motivated by impact and scale, there's a place for you here.",
      "Orbit is shaped around a single user's planning rhythm: decide what matters, focus on the next action, track momentum, and reflect before the next week.",
    ],
    ["Stay close to what's next.", "Keep the weekly loop close."],
    ["Subscribe", "Join Orbit"],
    ["September 26, 2025", "Roadmap"],
    ["January 15, 2025", "Planner"],
    ["October 31, 2024", "Calendar"],
    [
      "AI Transparency Listening Session with the White House Office of Management and Budget",
      "Planner persistence becomes core workspace data",
    ],
    [
      "The White House Office of Management and Budget (OMB) is leading a series of listening sessions to learn more from industry about their approaches to AI transparency and auditable risk management.",
      "Weekly plans, chat history, and completion state belong closer to Orbit's durable product model.",
    ],
    ["AI in Action: 5 Essential Findings from the 2024 Federal AI Use Case Inventory", "Structured AI planning contract"],
    [
      "This year, agencies publicly reported more than 1,700 ways they are using Artificial Intelligence (AI) to advance their missions and deliver better experiences to the public.",
      "Planner output should be structured, testable, and grounded in real workspace data.",
    ],
    ["CISO Council and CDO Council Release Joint Guide on Federal Zero Trust Data Security", "Calendar context is next"],
    [
      "Today, the CISO Council and CDO Council released the Federal Zero Trust (ZT) Data Security Guide, a first-of-its-kind document and key deliverable of OMB M-22-09, Moving the U.S. Government Towards Zero Trust Cybersecurity Principles. M-22-09 charged the Federal CDO Council and Federal CISO Council to convene a cross-agency working group of data and security experts to develop a data security guide for Federal agencies.",
      "The first integration should help Orbit plan around time before adding broad intake surfaces.",
    ],
    ["Artificial Intelligence", "AI Planner"],
    ["Cybersecurity", "Data Boundaries"],
    ["Technology Leadership, Unified Purpose", "A calm operating surface for personal progress"],
    ["Federal Agencies", "Core Surfaces"],
    ["24+", "7+"],
    ["Sub-Councils", "Planning Loop"],
    ["2", "4 steps"],
    ["Established", "Product State"],
    ["2002", "Active"],
    [
      "Aligning federal IT strategy and improving how government delivers digital services.",
      "Orbit connects planning, focused execution, goals, journal notes, analytics, and library context in one personal workspace.",
    ],
    ["Purpose", "Purpose"],
    [
      join("The CIO", " Council brings together Chief Information Officers from across the federal government to improve how agencies design, acquire, develop, and manage information resources."),
      "Orbit helps one person turn planning into an actionable weekly rhythm instead of a static backlog.",
    ],
    ["Browse policies and priorities", "Explore product principles"],
    ["Vision", "Vision"],
    [
      join("The CIO", " Council promotes a prosperous future for the United States through the strategic use of federal information technology."),
      "Orbit should feel like one quiet system where tasks, focus, goals, journal, analytics, library, and AI planning reinforce each other.",
    ],
    ["Statutory requirements", "Read roadmap"],
    ["Five mandates from Congress shape how we operate.", "Four habits shape the core Orbit loop."],
    [
      "Develop recommendations for OMB on government information resources management policies",
      "Capture and shape work into a believable plan.",
    ],
    [
      "Share experiences, best practices, and innovative approaches to information resources management",
      "Execute with a focused timer and a clear next action.",
    ],
    [
      "Assist the Federal CIO in identifying and coordinating multi-agency projects that improve government performance through technology",
      "Track momentum through goals, analytics, and recent history.",
    ],
    [
      "Promote the development and use of common performance measures for agency information resources management",
      "Reflect through journal notes and adjust the next plan.",
    ],
    [
      "Work with OPM to assess and address hiring, training, and professional development of the federal IT workforce",
      "Make important planning context durable across sessions and devices.",
    ],
    ["Explore Opportunities", "Open workspace"],
    ["How the Council operates and coordinates across federal agencies.", "How Orbit keeps daily work connected."],
    ["Operations", "Weekly Rhythm"],
    [
      join("The CIO", " Council conducts monthly meetings with Chief Information Officers, Chief Information Security Officers, and their representatives to discuss key priorities, exchange best practices, and ensure alignment across federal agencies on government-wide technology initiatives."),
      "The planner is the front door for deciding what matters now, what should wait, and what action comes next.",
    ],
    ["CISO Council", "Focus System"],
    [
      "The CISO Council brings together federal security leaders to coordinate on identity management, risk assessment, vulnerability response, and shared security services. It sets standards and measures performance across government systems.",
      "The timer turns intention into focused sessions and gives analytics real activity to measure.",
    ],
    ["Digital Experience Council", "Reflection And Review"],
    [
      "Established under OMB Memorandum M-23-22, the DX Council coordinates across agencies to deliver simple, seamless, and secure digital services. It drives standards for how the public interacts with government online.",
      "Journal notes and recent history help the next plan learn from what actually happened.",
    ],
    ["Related Councils", "Connected Surfaces"],
    ["Privacy Statement", "Orbit Privacy"],
    [
      "Thank you for visiting CIO.gov. Our privacy policy is clear - unless you choose to provide additional information to us, we will collect no personal information about you other than statistical information.",
      "Orbit stores personal planning context so the product can connect tasks, focus, goals, journal, analytics, and planning decisions without becoming noisy.",
    ],
    ["Information We Gather", "Workspace Data Boundaries"],
    ["The only information that is automatically collected and stored is:", "The product separates durable workspace data from browser-local preferences."],
    ["Cookies and CIO.gov", "Local State In Orbit"],
    ["Information You Send Us", "Planning Context You Add"],
    ["Links to Other Sites", "Connected Product Surfaces"],
    ["Accessibility Policy", "Orbit Accessibility"],
    ["We are committed to making all of our Internet documents accessible to everyone.", "Orbit's interface should stay calm, intentional, readable, and easy to scan."],
    ["About CIO.gov Accessibility", "About Orbit Usability"],
    ["Plug-ins and File Viewers", "Interface Surfaces"],
    ["What to do if you have trouble", "When Workflows Feel Unclear"],
    ["Need Assistance?", "Need A Clearer Route?"],
    ["Interested in Technology?", "Build the next layer of Orbit."],
    ["CAREERS", "ROADMAP"],
    [
      "Join the federal government to modernize federal IT systems and deliver the most secure and effective services to the American people.",
      "The next phase is reliability and focused integration: persistence, planner contracts, app shell clarity, stronger tests, and calendar context.",
    ],
    [
      "We are always looking for great candidates to help modernize federal IT and serve the American public.",
      "Orbit's roadmap is about making the existing single-user loop more durable, better connected, and more trustworthy.",
    ],
    ["Computer Scientists", "Persistence Model"],
    ["Research and develop solutions to complex computing problems.", "Move the right planner and library states into durable product data."],
    ["IT Project Managers", "Planner Contract"],
    ["Lead and coordinate federal IT initiatives and teams.", "Make AI output structured, grounded, and easy to verify."],
    ["IT Specialists", "App Shell"],
    ["Support and maintain critical government technology systems.", "Keep shared layout behavior and route ownership clear."],
    ["Chief Information Officers", "Calendar Context"],
    ["Executive leadership positions driving agency technology strategy.", "Let Orbit plan around time before broad integrations."],
    ["Want to work with us?", "What needs to be added next?"],
    [
      "To learn more about technology job opportunities, and for helpful hints for searching and applying, visit USA Jobs.",
      "Start with persistence, planner reliability, clearer app structure, verification, and focused scheduling context.",
    ],
    ["Explore USA Jobs", "Open planner"],
    ["Already work with us?", "Already using Orbit?"],
    [
      "Check out our latest news and resources to see how you can get involved and continue to grow your federal technology career.",
      "Use updates and resources to follow how the product loop becomes more durable over time.",
    ],
    ["Latest News", "Product updates"],
    ["Back to Home", "Back to Home"],
  ]);

  const pageCards = {
    "/policies-and-priorities": {
      h1: ["Product Principles"],
      h3: [
        "Focus Area",
        "Weekly Planning",
        "Focus Sessions",
        "Tasks With Context",
        "Durable Persistence",
        "Planner Contract",
        "Workspace Data",
        "Goals And Momentum",
        "Journal Review",
        "Library Memory",
        "Helpful Intelligence",
        "Analytics That Explain Progress",
        "Calm By Default",
        "One Personal Workspace",
        "Honest Scope",
        "Calendar Context",
        "Route Clarity",
        "Operational Trust",
      ],
      p: [
        "Area",
        "Turn scattered work into an actionable weekly rhythm instead of a static backlog.",
        "Move from intention to execution with a focused timer and a clear next action.",
        "Keep todos as the canonical task surface while related product surfaces stay connected.",
        "Make important planning data survive across sessions and devices.",
        "Give AI planning a structured, testable response format grounded in product context.",
        "Clarify which product state is synced and which state remains local by design.",
        "Track long-term goals, progress, status, and completion state.",
        "Use dated notes to reflect on what changed and adjust the next plan.",
        "Keep useful planning snippets, recent notes, and saved references close.",
        "Use AI only where it reduces planning friction and avoids extra ceremony.",
        "Connect tasks, sessions, and goals into a clearer view of progress.",
      ],
    },
    "/news": {
      h1: ["Product Updates"],
      h3: [
        "Planner Persistence Moves Forward",
        "Structured AI Planning Contract",
        "Calendar Context Comes First",
        "Public Promise Gets Tighter",
        "Verification Deepens",
        "Library Boundaries Get Clearer",
        "Settings Stay Quiet",
        "Route Model Stays Simple",
        "Operational Trust Improves",
        "Focus Loop Remains Core",
      ],
      p: [
        "Topics",
        "Connect",
        "Planner plans, chat history, and completion state need a clearer durability model because they are part of the core experience.",
        "Planner output should be structured, testable, and grounded in tasks, goals, and future scheduling context.",
        "The first external context source should help Orbit plan around real time, not become a broad intake surface.",
        "The public landing copy should only promise capabilities that match the implemented product.",
        "Tests around planner behavior, auth flow, and data boundaries are the next trust layer.",
        "Library pins and snippets need a clearer synced-versus-local ownership boundary.",
        "Settings should stay simple and avoid mixing preferences with credential-like data.",
        "The app keeps /todos as the canonical task route while removed landing routes stay out of the product model.",
      ],
    },
    "/resources": {
      h1: ["Orbit Resources"],
      h3: [
        "Subject",
        "Role",
        "Dashboard",
        "Todos",
        "Timer",
        "Planner",
        "Goals",
        "Journal",
        "Analytics",
        "Library",
        "Settings",
        "Program",
        "Current State",
        "Roadmap",
      ],
      p: [
        "Type",
        "A practical map of Orbit's connected product surfaces and data boundaries.",
        "Use resources to understand what exists now, what is durable, and what should be added next.",
        "The authenticated home for seeing what needs attention now.",
        "The canonical synced task store and source of task CRUD.",
        "The focus session flow that powers analytics and goal reward logic.",
        "The AI-assisted weekly planning surface and planning chat.",
        "Long-term goals, progress, status, and completion state.",
        "Dated reflection entries and recent notes used by the library.",
        "A combined view of todos, focus sessions, and settings-derived behavior.",
        "A memory surface for recent notes, planner snippets, and saved references.",
      ],
    },
    "/handbook": {
      h3: [
        "1. Core Loop",
        "1.1 Planning",
        "1.2 Focus",
        "1.3 Tasks",
        "1.4 Goals",
        "1.5 Journal",
        "1.6 Analytics",
        "2. Data Boundaries",
        "2.1 Synced Domains",
        "2.2 Local Domains",
        "2.3 Known Gaps",
      ],
    },
  };

  function firstTextNode(element) {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      if (walker.currentNode.nodeValue.trim()) return walker.currentNode;
    }
    return null;
  }

  function setElementText(element, value) {
    const node = firstTextNode(element);
    if (!node) return;
    node.nodeValue = node.nodeValue.replace(node.nodeValue.trim(), value);
  }

  function replaceExactText(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const normalized = node.nodeValue.replace(/\s+/g, " ").trim();
      if (exactCopy.has(normalized)) {
        node.nodeValue = node.nodeValue.replace(node.nodeValue.trim(), exactCopy.get(normalized));
      }
    });
  }

  function applyOrderedCopy() {
    const path = Object.keys(pageCards).find((prefix) => window.location.pathname.startsWith(prefix));
    if (!path) return;

    const copy = pageCards[path];
    for (const [tag, values] of Object.entries(copy)) {
      document.querySelectorAll(`main ${tag}`).forEach((element, index) => {
        const value = values[index] || values[(index - 1) % Math.max(values.length - 1, 1) + 1];
        if (value) setElementText(element, value);
      });
    }
  }

  function updateAttributes() {
    document.querySelectorAll("img[alt]").forEach((image) => {
      if (image.alt.includes(join("CIO", " Council")) || image.alt.toLowerCase().includes("federal")) {
        image.alt = "Orbit";
      }
    });
  }

  function run() {
    replaceExactText(document.body);
    applyOrderedCopy();
    updateAttributes();
    document.documentElement.setAttribute("data-orbit-copy-ready", "true");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }
})();

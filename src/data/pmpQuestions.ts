const quizQuestions: Question[] = [
  // 1
  {
    scenario:
      "Your company is developing a new customer-facing mobile app. The sponsor wants to release the full application at once, but the competitive market is evolving quickly.",
    question:
      "What should you do first to ensure the project delivers value as soon as possible?",
    options: [
      "Prioritise the backlog based on business value and work with stakeholders to plan incremental releases",
      "Ask the team to focus only on developing the features that are easiest to implement first",
      "Delay the discussion until the full design is complete",
      "Insist that the sponsor chooses which features to release first",
    ],
    correctAnswer:
      "Prioritise the backlog based on business value and work with stakeholders to plan incremental releases",
    explanation:
      "Incremental delivery requires identifying and prioritising valuable features so early releases deliver maximum value. Other options delay value or contradict Agile practices."
  },

  // 2
  {
    scenario:
      "A software modernization project is halfway through development when market conditions shift. A competitor releases a new feature affecting the projected business value of your product.",
    question: "What should you do NEXT?",
    options: [
      "Continue with the current plan because the project scope has already been approved",
      "Work with the product owner and sponsor to reassess the expected business value and adjust priorities if needed",
      "Put the project on hold until executives decide what to do",
      "Increase the team’s work hours to try to finish earlier",
    ],
    correctAnswer:
      "Work with the product owner and sponsor to reassess the expected business value and adjust priorities if needed",
    explanation:
      "Business value must be reassessed when external conditions change. The other options delay progress or ignore the need for strategic adjustment."
  },

  // 3
  {
    scenario:
      "Your team is developing an employee mobile-access portal. The product owner wants to release an MVP in two months, but authentication alone would take that long.",
    question: "What should you do to help find a viable MVP?",
    options: [
      "Ask the team to decompose the authentication work to determine if a simpler version can support an MVP",
      "Tell the product owner the MVP timeline must be extended",
      "Instruct the team to drop authentication from the MVP",
      "Assign more people to accelerate delivery",
    ],
    correctAnswer:
      "Ask the team to decompose the authentication work to determine if a simpler version can support an MVP",
    explanation:
      "Breaking work down identifies the *minimum necessary functionality*. Other options create risk, delay value, or contradict Agile principles."
  },

  // 4
  {
    scenario:
      "You are managing a hospital expansion project. Engineers want weekly technical briefings, while administrators prefer milestone-based updates.",
    question: "What should you do FIRST?",
    options: [
      "Send the same weekly technical briefing to all stakeholders",
      "Conduct a stakeholder communication needs analysis",
      "Ask the Sponsor to decide communication needs",
      "Let stakeholders request updates whenever they want",
    ],
    correctAnswer: "Conduct a stakeholder communication needs analysis",
    explanation:
      "Tailored communication requires identifying needs first. Other choices create overload or inconsistent communication."
  },

  // 5
  {
    scenario:
      "You are managing installation of a new robotic assembly line. Supervisors prefer in-person shift briefings while executives want monthly dashboards.",
    question:
      "What is the BEST action to ensure communication meets both groups’ needs?",
    options: [
      "Communicate only through formal reports",
      "Hold daily meetings with all stakeholders",
      "Use only the method preferred by senior executives",
      "Establish a communication plan that assigns channels, formats, frequency and detail for each stakeholder group",
    ],
    correctAnswer:
      "Establish a communication plan that assigns channels, formats, frequency and detail for each stakeholder group",
    explanation:
      "A communication plan ensures structured and tailored communication."
  },

  // 6
  {
    scenario:
      "A clinic’s new scheduling system update reduced appointment errors by 30%. The operations director wants this communicated clearly.",
    question: "What is the MOST effective way to communicate this?",
    options: [
      "Announce it informally during lunch breaks",
      "Email full technical release notes",
      "Create a concise update highlighting performance, impact, and actions",
      "Share only positive results without next steps",
    ],
    correctAnswer:
      "Create a concise update highlighting performance, impact, and actions",
    explanation:
      "Concise, actionable communication is most effective for a large clinical audience."
  },

  // 7
  {
    scenario:
      "You presented new routing procedures to logistics drivers and must ensure they understood before rollout.",
    question: "What should you do NEXT?",
    options: [
      "Assume understanding since no questions were asked",
      "Ask drivers to repeat back key steps or demonstrate the process",
      "Send a follow-up email and move on",
      "Wait for the first week to see if errors occur",
    ],
    correctAnswer:
      "Ask drivers to repeat back key steps or demonstrate the process",
    explanation:
      "Closed-loop communication validates understanding. Silence is not confirmation."
  },

  // 8
  {
    scenario:
      "During a pharmaceutical project, a major risk emerges: filtration equipment may arrive late due to global disruptions.",
    question: "What is the BEST risk management option?",
    options: [
      "Accept the risk",
      "Transfer the risk with penalties",
      "Mitigate by identifying an alternate qualified supplier",
      "Avoid the risk by removing the filtration upgrade",
    ],
    correctAnswer:
      "Mitigate by identifying an alternate qualified supplier",
    explanation:
      "High-impact delivery risks must be mitigated. Penalties don’t fix delay; removing scope eliminates project value."
  },

  // 9
  {
    scenario:
      "A wind farm project discovers unstable soil. New risks emerge weekly.",
    question: "What should you do NEXT?",
    options: [
      "Wait until all testing is complete",
      "Conduct a risk reassessment workshop",
      "Focus only on previously identified risks",
      "Escalate all new risks immediately",
    ],
    correctAnswer: "Conduct a risk reassessment workshop",
    explanation:
      "Iterative risk reassessment ensures updated prioritisation and mitigation."
  },

  // 10
  {
    scenario:
      "During stakeholder analysis for a hospital EMR project, the CNO has high interest but low formal authority.",
    question: "What should you do NEXT?",
    options: [
      "Classify her as low-power/low-interest",
      "Document her as high-power due to influence",
      "Classify her as high-interest/low-power and keep her informed and consulted",
      "Escalate to increase her power",
    ],
    correctAnswer:
      "Classify her as high-interest/low-power and keep her informed and consulted",
    explanation:
      "Power refers to formal authority; interest and influence determine engagement—not classification."
  },

  // 11
  {
    scenario:
      "A trucking association may be disrupted by a highway expansion project.",
    question: "How should they be categorized?",
    options: [
      "As a leading stakeholder",
      "As an external stakeholder affected by outcomes",
      "As a team stakeholder",
      "As a sponsor-level stakeholder",
    ],
    correctAnswer:
      "As an external stakeholder affected by outcomes",
    explanation:
      "They are outside the project organization but affected by constraints."
  },

  // 12
  {
    scenario:
      "You categorized stakeholders: executives (high power), customer service managers (high interest), beta customers (moderate interest).",
    question:
      "Which engagement approach BEST aligns with the categories?",
    options: [
      "Weekly dashboards for executives, workshops for managers, surveys for beta customers",
      "Same report for all groups",
      "Include beta customers in steering committees",
      "Focus only on high-power stakeholders",
    ],
    correctAnswer:
      "Weekly dashboards for executives, workshops for managers, surveys for beta customers",
    explanation:
      "Engagement must be tailored to stakeholder power/interest."
  },

  // 13
  {
    scenario:
      "A robotics project impacts unions, supervisors, and leadership. You created an engagement strategy.",
    question: "What should you do NEXT to validate it?",
    options: [
      "Assume success if no complaints arise",
      "Ask the sponsor to approve it",
      "Wait until project close",
      "Conduct a survey or feedback check",
    ],
    correctAnswer: "Conduct a survey or feedback check",
    explanation:
      "Engagement must be validated through stakeholder feedback."
  },

  // 14
  {
    scenario:
      "A past airport terminal project had cost overruns from reinforcement underestimation. The new project has similar conditions.",
    question: "What is the BEST way to estimate the budget?",
    options: [
      "Use bottom-up estimates and ignore the prior project",
      "Start with the old project’s actuals and adjust for differences",
      "Use only parametric estimating based on square footage",
      "Ask finance to increase contingency",
    ],
    correctAnswer:
      "Start with the old project’s actuals and adjust for differences",
    explanation:
      "Analogous estimating with lessons learned is most reliable here."
  },

  // 15
  {
    scenario:
      "EVM report: BAC 12M, EV 4.8M, AC 5.6M, CPI 0.86, SPI 0.75.",
    question: "What budget issue should you anticipate?",
    options: [
      "No budget issues expected",
      "Ahead of schedule but slightly over budget",
      "Costing more than planned and progressing slower—EAC will exceed BAC",
      "The project will finish under budget",
    ],
    correctAnswer:
      "Costing more than planned and progressing slower—EAC will exceed BAC",
    explanation:
      "Both CPI and SPI < 1 indicate poor cost and schedule performance."
  },

  // 16
  {
    scenario:
      "A government project shows CPI 0.87 and SPI 0.83. Baseline changes require governance approval.",
    question: "What is the BEST next step?",
    options: [
      "Use contingency without informing governance",
      "Submit a change request to revise the cost baseline",
      "Ignore variation because it's early",
      "Increase budget without approval",
    ],
    correctAnswer:
      "Submit a change request to revise the cost baseline",
    explanation:
      "Governance requires formal change control."
  },

  // 17
  {
    scenario:
      "Shared designers are partially reassigned to an emergency effort near your campaign launch.",
    question: "What should you do?",
    options: [
      "Replace designers immediately",
      "Pause the project",
      "Escalate to the CEO",
      "Use resource leveling and negotiate partial availability",
    ],
    correctAnswer:
      "Use resource leveling and negotiate partial availability",
    explanation:
      "Negotiation and resource leveling ensure balanced delivery without unnecessary escalation."
  },

  // 18
  {
    scenario:
      "Systems engineering tasks have uncertain durations but known complexity.",
    question: "How should you estimate them?",
    options: [
      "Use relative estimating then convert to duration using velocity/history",
      "Skip estimating until execution",
      "Force exact hour-based estimates",
      "Use only sponsor judgment",
    ],
    correctAnswer:
      "Use relative estimating then convert to duration using velocity/history",
    explanation:
      "Relative estimating is ideal for uncertain early-phase work."
  },

  // 19
  {
    scenario:
      "Past buildings consistently required 14 weeks for steel framing. Subcontractor now proposes 10 weeks due to added crews.",
    question: "What should you do?",
    options: [
      "Accept the subcontractor’s estimate without validation",
      "Use historical data as a benchmark and ask for evidence",
      "Reject the estimate and force 14 weeks",
      "Average both estimates",
    ],
    correctAnswer:
      "Use historical data as a benchmark and ask for evidence",
    explanation:
      "Historical data must be validated against the subcontractor’s justification."
  },

  // 20
  {
    scenario:
      "Scrum team has a velocity of 40 story points. Backlog = 280 points.",
    question: "How do you prepare the high-level schedule?",
    options: [
      "Divide total points by velocity (≈7 sprints)",
      "Convert story points to hours and build a Gantt chart",
      "Ask team to plan all sprints now",
      "Schedule items sequentially ignoring velocity",
    ],
    correctAnswer:
      "Divide total points by velocity (≈7 sprints)",
    explanation:
      "Velocity-based forecasting is the Agile method for high-level planning."
  },
// 21
{
  scenario:
    "Mechanical installation should be 60% complete this week. Actual progress is 48% in a predictive waterfall project.",
  question:
    "What is the BEST action to measure and interpret ongoing schedule performance?",
  options: [
    "Wait until the phase is completed before evaluating schedule performance.",
    "Ask the team to increase work pace without measuring current performance.",
    "Compare planned budget to actual cost instead of monitoring schedule progress.",
    "Calculate the schedule performance index (SPI) to determine if the work is behind schedule."
  ],
  correctAnswer:
    "Calculate the schedule performance index (SPI) to determine if the work is behind schedule.",
  explanation:
    "SPI = EV/PV. With EV=48% and PV=60%, SPI=0.8 → behind schedule. EVM provides objective performance measurement."
},

// 22
{
  scenario:
    "Hybrid project: waterfall system configuration + iterative user training. Vendor API integration is delayed 2 weeks, affecting downstream testing.",
  question: "What is the BEST way to modify the schedule?",
  options: [
    "Re-baseline the entire project immediately without analysis.",
    "Perform schedule impact analysis and update the predictive portion while adjusting iterative work within upcoming cycles.",
    "Cancel user-training iterations until the vendor work is complete.",
    "Ignore the delay because hybrid projects can adapt without schedule changes."
  ],
  correctAnswer:
    "Perform schedule impact analysis and update the predictive portion while adjusting iterative work within upcoming cycles.",
  explanation:
    "Hybrid requires predictive tools for waterfall components and iterative adjustments for Agile ones. Impact analysis must occur before changes."
},

// 23
{
  scenario:
    "A construction project shares floor space and electrical load with operations and another ongoing HVAC project.",
  question:
    "What should you do to coordinate schedules effectively?",
  options: [
    "Meet with operations and other project managers to align schedules, manage shared resources, and adjust work windows.",
    "Proceed with your planned schedule and let operations adjust their production cycle.",
    "Delay your project until all other projects and operations have completed their work.",
    "Request that the sponsor cancel the HVAC project so your project has priority."
  ],
  correctAnswer:
    "Meet with operations and other project managers to align schedules, manage shared resources, and adjust work windows.",
  explanation:
    "Cross-project and operational coordination is essential to avoid conflicts and optimize shared resources."
},

// 24
{
  scenario:
    "Design team proposes ±2°C accuracy for a smart thermostat. Competitors offer ±1°C. Some countries require regulatory compliance.",
  question:
    "What should you do FIRST to determine the appropriate quality standards?",
  options: [
    "Adopt the internal design team's ±2°C standard to reduce manufacturing cost.",
    "Benchmark competitor products and review regulatory requirements.",
    "Let marketing define the quality standards based solely on customer surveys.",
    "Select the strictest accuracy requirement regardless of feasibility."
  ],
  correctAnswer:
    "Benchmark competitor products and review regulatory requirements.",
  explanation:
    "Quality standards must reflect competitive benchmarks and mandatory regulations, not only internal preference or customer surveys."
},

// 25
{
  scenario:
    "New tablet-coating system shows coating thickness variations due to inconsistent airflow.",
  question:
    "What is the BEST recommendation to close this quality gap?",
  options: [
    "Increase inspection frequency to identify defects more quickly.",
    "Accept the variation if most tablets fall within limits.",
    "Add more operators to monitor the process in real time.",
    "Redesign or recalibrate the airflow system with the vendor and engineering team."
  ],
  correctAnswer:
    "Redesign or recalibrate the airflow system with the vendor and engineering team.",
  explanation:
    "The root cause is technical; fixing airflow ensures quality is built into the process rather than relying on inspection."
},

// 26
{
  scenario:
    "SaaS project with monthly releases shows increasing usability defects and more customer support tickets.",
  question:
    "What should you do to continually monitor and improve deliverable quality?",
  options: [
    "Implement ongoing quality reviews using metrics such as defect density, UAT trends, and customer feedback.",
    "Wait until the final release to conduct a quality audit.",
    "Stop all feature development until the backlog is cleared.",
    "Reduce number of features per release without analyzing defect data."
  ],
  correctAnswer:
    "Implement ongoing quality reviews using metrics such as defect density, UAT trends, and customer feedback.",
  explanation:
    "Continuous metrics-based evaluation enables early detection and correction of quality issues."
},

// 27
{
  scenario:
    "200+ requirements collected for a wearable heart-monitor. Some conflict, others vary in value.",
  question:
    "To prioritize requirements, what should you do NEXT?",
  options: [
    "Use a Control Chart to track requirement changes.",
    "Ask the sponsor to select most important requirements.",
    "Perform Decomposition before prioritizing.",
    "Use Multicriteria Decision Analysis to evaluate and prioritize requirements."
  ],
  correctAnswer:
    "Use Multicriteria Decision Analysis to evaluate and prioritize requirements.",
  explanation:
    "MCDA supports prioritization when multiple stakeholders and conflicting values are involved."
},

// 28
{
  scenario:
    "Wind farm project has complete scope statement and requirements. Need to create the scope baseline.",
  question:
    "Which tool or technique should you use?",
  options: [
    "Decomposition to create a Work Breakdown Structure (WBS).",
    "Affinity Diagramming to group requirements.",
    "Variance Analysis to compare progress.",
    "Benchmarking to compare WBS structures."
  ],
  correctAnswer:
    "Decomposition to create a Work Breakdown Structure (WBS).",
  explanation:
    "Decomposition is the primary technique for Create WBS in predictive projects."
},

// 29
{
  scenario:
    "Inspectors find trenches not at required depth in a fiber-optic installation project.",
  question:
    "What tool or technique should you use to validate scope?",
  options: [
    "Trend Analysis",
    "Delphi Technique",
    "Stakeholder Analysis",
    "Inspection"
  ],
  correctAnswer: "Inspection",
  explanation:
    "Inspection verifies deliverables meet scope criteria and determines acceptance or rejection."
},

// 30
{
  scenario:
    "Supply chain redesign project has inconsistent plans from procurement, logistics, IT, and warehouse teams.",
  question:
    "What should you do NEXT?",
  options: [
    "Merge all documents without modifying content.",
    "Facilitate an integration workshop to align assumptions and standardize formats.",
    "Select the logistics plan as the master plan.",
    "Ask each team to rework plans independently."
  ],
  correctAnswer:
    "Facilitate an integration workshop to align assumptions and standardize formats.",
  explanation:
    "Integration requires cross-functional alignment to resolve inconsistencies and create a unified project plan."
},

// 31
{
  scenario:
    "Hospital project: electrical plan does not support high-voltage medical imaging equipment requirements.",
  question:
    "What should you do?",
  options: [
    "Proceed as planned since the schedule is approved.",
    "Ask the vendor to work around the electrical plan.",
    "Remove the imaging equipment from scope.",
    "Perform dependency analysis and update the integrated project plan."
  ],
  correctAnswer:
    "Perform dependency analysis and update the integrated project plan.",
  explanation:
    "Dependencies must be reviewed and plans updated to avoid rework and ensure feasibility."
},

// 32
{
  scenario:
    "Fintech project collects data: defect trends, cost reports, customer feedback, velocity charts.",
  question:
    "What is the MOST appropriate next step?",
  options: [
    "Conduct data analysis using trend, variance, and root-cause analysis.",
    "Share all raw data directly with the sponsor.",
    "Discard contradictory data to maintain morale.",
    "Delay analysis until next release."
  ],
  correctAnswer:
    "Conduct data analysis using trend, variance, and root-cause analysis.",
  explanation:
    "Data must be interpreted using analysis tools to refine the project plan."
},

// 33
{
  scenario:
    "Insurance system modernization shows backlog growth, slow cycle time, and rising defect density.",
  question:
    "What should you do FIRST?",
  options: [
    "Add more developers immediately.",
    "Ignore the data.",
    "Ask the sponsor to decide based on budget.",
    "Use decision-making tools (cost–benefit, impact analysis) to evaluate improvement options."
  ],
  correctAnswer:
    "Use decision-making tools (cost–benefit, impact analysis) to evaluate improvement options.",
  explanation:
    "Decisions must be based on structured analysis, not assumptions."
},

// 34
{
  scenario:
    "Clinical trial project: regulatory reports due every 8 weeks; management needs weekly risk summaries.",
  question:
    "What should you do to identify critical information requirements?",
  options: [
    "Collect all data and send to everyone.",
    "Conduct stakeholder analysis to determine information needs and frequency.",
    "Let the regulatory team dictate all reporting.",
    "Limit reporting to what is easiest."
  ],
  correctAnswer:
    "Conduct stakeholder analysis to determine information needs and frequency.",
  explanation:
    "Stakeholder analysis defines who needs what information and when."
},

// 35
{
  scenario:
    "New cybersecurity regulation affects avionics software integration. Engineering team says changes will delay testing.",
  question:
    "What is the MOST appropriate action?",
  options: [
    "Reject the regulatory change.",
    "Implement the change without documentation.",
    "Wait for the next audit.",
    "Trigger change control and conduct an impact assessment immediately."
  ],
  correctAnswer:
    "Trigger change control and conduct an impact assessment immediately.",
  explanation:
    "Regulatory requirements must go through formal change management and impact analysis."
},

// 36
{
  scenario:
    "Global ERP consolidation: multiple countries request localization changes.",
  question:
    "What strategy should be used to handle competing change requests?",
  options: [
    "Approve all localization requests.",
    "Categorize and prioritize changes (mandatory, regulatory, value-based).",
    "Reject all localization requests.",
    "Escalate all decisions to the CEO."
  ],
  correctAnswer:
    "Categorize and prioritize changes (mandatory, regulatory, value-based).",
  explanation:
    "Structured prioritization ensures alignment and avoids uncontrolled scope growth."
},

// 37
{
  scenario:
    "Government fiber project: contractor proposes faster trenching method requiring environmental plan modification.",
  question:
    "What should you do NEXT?",
  options: [
    "Implement a small unapproved trial.",
    "Implement immediately to save time.",
    "Follow change management process, analyze impact, and submit to EIRB.",
    "Reject because environmental plans must never change."
  ],
  correctAnswer:
    "Follow change management process, analyze impact, and submit to EIRB.",
  explanation:
    "Environmental changes require strict governance and approval."
},

// 38
{
  scenario:
    "Clinical trial enrollment is too low; options include broadening eligibility, increasing recruitment budget, or extending enrollment.",
  question:
    "What is the BEST change response?",
  options: [
    "Broaden eligibility without regulatory approval.",
    "Analyze all options and submit a change request recommending the best choice.",
    "Extend enrollment informally without updating the plan.",
    "Abandon the clinical trial."
  ],
  correctAnswer:
    "Analyze all options and submit a change request recommending the best choice.",
  explanation:
    "Regulatory trials require structured change analysis and formal approval."
},

// 39
{
  scenario:
    "Serialization project: internal team can prototype but cannot guarantee compliance. Vendor solution is faster but expensive.",
  question:
    "What should you do FIRST?",
  options: [
    "Issue an RFP to external vendors.",
    "Draft the procurement SOW based solely on vendor specs.",
    "Ask internal engineering to finalize prototype specs.",
    "Perform a make-or-buy analysis."
  ],
  correctAnswer:
    "Perform a make-or-buy analysis.",
  explanation:
    "Make-or-buy analysis determines whether procurement is required before drafting SOW or issuing RFP."
},

// 40
{
  scenario:
    "Project requires five certified welders; public works department allocated budget for only two.",
  question:
    "What should you do NEXT?",
  options: [
    "Conduct a targeted stakeholder communication meeting explaining needs and impacts.",
    "Submit change request to reduce scope.",
    "Proceed with two welders and adjust informally.",
    "Escalate to the mayor's office."
  ],
  correctAnswer:
    "Conduct a targeted stakeholder communication meeting explaining needs and impacts.",
  explanation:
    "Misalignment resulted from misunderstanding; communication resolves the issue."
},

// 41
{
  scenario:
    "Avionics sensor supplier under an FFP contract meets quality specs but misses internal testing deadlines.",
  question:
    "What is the BEST course of action?",
  options: [
    "Convert contract to cost-reimbursable.",
    "Issue a cure notice and begin structured performance reviews.",
    "Terminate the contract and find a new supplier.",
    "Accept the delay since the supplier bears the cost risk."
  ],
  correctAnswer:
    "Issue a cure notice and begin structured performance reviews.",
  explanation:
    "Contract management requires using remedies such as cure notices before escalation or termination."
},
// 42–62 quiz questions
{
  scenario: "Managing a multinational bank Tier-4 data center cooling system upgrade with volatile material pricing.",
  question: "You must select the most appropriate contract type for this procurement. Which option is BEST?",
  options: ["Firm Fixed Price (FFP)", "Fixed Price Incentive Fee (FPIF)", "Cost Plus Incentive Fee (CPIF)", "Time & Material (T&M)"],
  correctAnswer: "Cost Plus Incentive Fee (CPIF)",
  explanation: "CPIF shares cost risk between buyer and seller, appropriate when cost uncertainty is high. It also incentivizes efficiency. Other options fail under volatile market conditions."
},
{
  scenario: "Deploying an advanced machine-learning demand-forecasting system with internal development (18 months) vs. SaaS (4 months) and data sovereignty concerns.",
  question: "What is the BEST next step to develop a delivery solution?",
  options: [
    "Issue an RFP to start external procurement as soon as possible",
    "Choose the SaaS option because it offers the shortest delivery schedule",
    "Choose internal development to avoid data sovereignty risks",
    "Conduct an integrated delivery options analysis evaluating make-or-buy, regulatory requirements, total lifecycle cost, and global deployment constraints"
  ],
  correctAnswer: "Conduct an integrated delivery options analysis evaluating make-or-buy, regulatory requirements, total lifecycle cost, and global deployment constraints",
  explanation: "A comprehensive analysis ensures that schedule, cost, regulatory, and operational factors are considered before making a decision."
},
{
  scenario: "Designing a new industrial-grade water filtration system; smart-flow sensor can be made internally or purchased externally.",
  question: "Based on make-or-buy analysis, what should the project manager do?",
  options: [
    "Choose the internal option because it has a lower cost per unit and provides full IP control",
    "Select the external vendor because the total cost is lower and the schedule aligns with project deadlines",
    "Proceed with internal development because vendor lock-in presents a long-term risk",
    "Issue an RFP to multiple vendors to reduce dependency and maintain competitive pricing"
  ],
  correctAnswer: "Select the external vendor because the total cost is lower and the schedule aligns with project deadlines",
  explanation: "BUY is $24,000 cheaper and meets the 8-month deadline, reducing technical risk. Other options ignore cost, schedule, or risk considerations."
},
{
  scenario: "Mid-rise commercial construction project with multiple stakeholders; disagreements about artifact storage and approvals.",
  question: "What should you do FIRST to determine requirements for managing project artifacts?",
  options: [
    "Review lessons learned from similar projects",
    "Direct IT to set up a repository with default permissions",
    "Assign document control specialist to create plan independently",
    "Conduct stakeholder analysis sessions to identify artifacts, owners, and access requirements"
  ],
  correctAnswer: "Conduct stakeholder analysis sessions to identify artifacts, owners, and access requirements",
  explanation: "Stakeholder input ensures the artifact management plan meets actual needs and expectations."
},
{
  scenario: "Mobile app project with distributed teams; conflicting commits caused regression errors.",
  question: "How should you ensure project information is up to date and accessible?",
  options: [
    "Require daily stand-ups to discuss document updates",
    "Implement automated version control enforcement and audit logs",
    "Ask team leads to track updates manually",
    "Restrict access to only senior developers"
  ],
  correctAnswer: "Implement automated version control enforcement and audit logs",
  explanation: "Automated version control ensures accuracy, traceability, and accessibility for all stakeholders."
},
{
  scenario: "Hospital EHR implementation; outdated process maps and missing compliance documents reported.",
  question: "What is the MOST effective action to continually assess and improve artifact management?",
  options: [
    "Schedule periodic reviews and gather stakeholder feedback",
    "Wait until project closing for a full audit",
    "Increase frequency of team meetings to report issues",
    "Add more storage space to the repository"
  ],
  correctAnswer: "Schedule periodic reviews and gather stakeholder feedback",
  explanation: "Regular reviews identify gaps and allow process adjustments before issues escalate."
},
{
  scenario: "Advanced drone navigation module development; multiple subsystems and strict aviation regulations.",
  question: "What should the project manager do FIRST to assess project needs, complexity, and magnitude?",
  options: [
    "Review WBS from previous drone project",
    "Conduct comprehensive analysis of stakeholders, technical requirements, interfaces, constraints, and regulations",
    "Estimate total budget using analogous projects",
    "Engage vendor for preliminary prototype"
  ],
  correctAnswer: "Conduct comprehensive analysis of stakeholders, technical requirements, interfaces, constraints, and regulations",
  explanation: "Understanding technical, regulatory, and stakeholder requirements identifies true scope and complexity."
},
{
  scenario: "Municipal wastewater treatment plant expansion with public funding and multiple specialty contractors.",
  question: "Which execution strategy best balances budget, accountability, and delivery certainty?",
  options: [
    "Finance the project privately",
    "Use a cost-plus contract",
    "Use a fixed-price contract with milestone payments and competitive tendering",
    "Outsource to a single design-build firm"
  ],
  correctAnswer: "Use a fixed-price contract with milestone payments and competitive tendering",
  explanation: "Fixed-price with milestones ensures cost control, accountability, and compliance with public procurement."
},
{
  scenario: "Smart refrigerator development with regulated hardware and iterative software/UI requirements.",
  question: "Which development life cycle approach is recommended?",
  options: [
    "Fully predictive",
    "Fully agile",
    "Hybrid: predictive for hardware, agile for software",
    "Fully incremental"
  ],
  correctAnswer: "Hybrid: predictive for hardware, agile for software",
  explanation: "A hybrid approach balances hardware stability and software flexibility."
},
{
  scenario: "Bank AI fraud detection system with pilot feedback showing mixed results.",
  question: "How to ensure iterative, incremental improvement?",
  options: [
    "Conduct lessons learned at project end",
    "Avoid changing risk register",
    "Freeze requirements after pilot",
    "Establish short feedback cycles and refine plan continuously"
  ],
  correctAnswer: "Establish short feedback cycles and refine plan continuously",
  explanation: "Continuous feedback, adaptive planning, and dynamic risk management enable ongoing improvement."
},
{
  scenario: "Phase III clinical trial involving multiple countries, regulators, and a contracted CRO.",
  question: "What should the project manager do FIRST to determine the governance structure?",
  options: [
    "Replicate the company's standard governance exactly",
    "Analyze regulatory environment, stakeholder roles, decision rights, and oversight levels",
    "Allow the CRO to design governance",
    "Create a simplified governance structure for speed"
  ],
  correctAnswer: "Analyze regulatory environment, stakeholder roles, decision rights, and oversight levels",
  explanation: "Tailored governance ensures compliance, accountability, and appropriate oversight across countries."
},
{
  scenario: "City smart-traffic control system; integration issue caused a 3-week delay.",
  question: "How should the project manager establish escalation paths and thresholds?",
  options: [
    "Define criteria, escalation chain, and communicate to stakeholders",
    "Allow each vendor to define its own escalation approach",
    "Escalate all issues directly to city executives",
    "Handle escalations case-by-case"
  ],
  correctAnswer: "Define criteria, escalation chain, and communicate to stakeholders",
  explanation: "Clear escalation thresholds and chains prevent delays, confusion, and accountability gaps."
},
{
  scenario: "Automotive robotic welding line upgrade; shipment held at customs.",
  question: "What should the project manager do NEXT?",
  options: [
    "Update risk register and monitor",
    "Treat the delayed shipment as an issue and log ownership/actions",
    "Ask supplier for replacement robots",
    "Escalate to project sponsor without logging"
  ],
  correctAnswer: "Treat the delayed shipment as an issue and log ownership/actions",
  explanation: "A risk becomes an issue once realized and requires formal issue management."
},
{
  scenario: "EPR system implementation; data-mapping error causing critical interface failure.",
  question: "What is the MOST effective action to resolve the issue?",
  options: [
    "Apply temporary patch",
    "Postpone testing",
    "Remove medication history feature",
    "Assign cross-functional team to identify and fix root cause"
  ],
  correctAnswer: "Assign cross-functional team to identify and fix root cause",
  explanation: "Permanent resolution requires involving all relevant expertise to ensure safe and compliant fix."
},
{
  scenario: "Large-budget film production; key location unavailable unexpectedly.",
  question: "How should the project manager determine the best way forward?",
  options: [
    "Immediately shift production and inform stakeholders later",
    "Convene meeting with directors, designers, finance, and scheduling teams to evaluate options",
    "Ask location owner to expedite repairs",
    "Reduce scope of scenes shot at that location"
  ],
  correctAnswer: "Convene meeting with directors, designers, finance, and scheduling teams to evaluate options",
  explanation: "Collaborative evaluation ensures balanced decisions across cost, schedule, creative intent, and logistics."
},
{
  scenario: "5G antenna deployment; responsibility confusion caused rework and delays.",
  question: "What should you do FIRST to ensure team responsibilities are clearly understood?",
  options: [
    "Reassign work to fastest team members",
    "Escalate to PMO",
    "Send email listing job titles",
    "Facilitate team session clarifying roles, responsibilities, handoffs, and accountability (RACI)"
  ],
  correctAnswer: "Facilitate team session clarifying roles, responsibilities, handoffs, and accountability (RACI)",
  explanation: "Structured discussion with tools like RACI clarifies ownership, handoffs, and accountability."
},
{
  scenario: "Global digital marketing campaign with distributed remote teams experiencing communication and file management conflicts.",
  question: "What should you do to set expectations for an effective working environment?",
  options: [
    "Mandate identical work hours",
    "Establish and document team norms for communication, collaboration tools, response times, file structure, and meetings",
    "Implement strict disciplinary policy",
    "Allow each group to set its own rules"
  ],
  correctAnswer: "Establish and document team norms for communication, collaboration tools, response times, file structure, and meetings",
  explanation: "Documented norms reduce conflicts, enhance clarity, and foster productive collaboration across distributed teams."
},
{
  scenario: "200-MW solar farm; two senior engineers leaving soon before critical commissioning activities.",
  question: "What is the BEST action to confirm knowledge transfer?",
  options: [
    "Have engineers write manuals without oversight",
    "Develop structured knowledge transfer plan including shadowing, documentation, walkthroughs, and validation",
    "Delay commissioning until new engineers trained externally",
    "Let engineers provide informal knowledge in last week"
  ],
  correctAnswer: "Develop structured knowledge transfer plan including shadowing, documentation, walkthroughs, and validation",
  explanation: "Formal, structured transfer ensures knowledge accuracy, accessibility, and continuity."
},
{
  scenario: "20-story commercial office building construction; phase completion requires structural approval.",
  question: "What should you do FIRST to determine criteria to close this construction phase?",
  options: [
    "Refer to phase acceptance criteria, contract, regulatory approvals, and quality metrics in project plan",
    "Review project charter for structural details",
    "Hold lessons learned session",
    "Ask engineering firm to define its own criteria"
  ],
  correctAnswer: "Refer to phase acceptance criteria, contract, regulatory approvals, and quality metrics in project plan",
  explanation: "Phase closure requires predefined objective criteria aligned with contracts and regulations."
},
{
  scenario: "Bank fraud detection module deployment; operational readiness must be validated before release.",
  question: "What is the MOST important action to validate readiness for transition to operations?",
  options: [
    "Ask operations team if they feel comfortable",
    "Conduct formal transition readiness review covering training, documentation, SLA, validation, and support processes",
    "Release system to operations and fix issues post go-live",
    "Allow development team to decide readiness"
  ],
  correctAnswer: "Conduct formal transition readiness review covering training, documentation, SLA, validation, and support processes",
  explanation: "Structured review ensures operational capability, compliance, and smooth handover."
},
{
  scenario: "Regional pipeline maintenance project; fieldwork completed, client accepted deliverables, but closeout tasks remain.",
  question: "What should the project manager do to properly conclude closeout activities?",
  options: [
    "Immediately release project team",
    "Skip documentation since client accepted work",
    "Ask PMO to take over remaining tasks",
    "Execute formal closeout plan including procurement closure, financial reconciliation, lessons learned, documentation, and resource release"
  ],
  correctAnswer: "Execute formal closeout plan including procurement closure, financial reconciliation, lessons learned, documentation, and resource release",
  explanation: "Systematic completion of all closeout activities ensures compliance, accountability, and proper project closure."
},
//63
{
  scenario:
    "A quality management discussion is taking place about how to define and measure whether a product meets its intended purpose for the customer.",
  question:
    "Which quality theorist is noted for his 'fitness for use' premise?",
  options: [
    "Philip Crosby",
    "Joseph Juran",
    "W. Edwards Deming",
    "Walter Shewhart"
  ],
  correctAnswer:
    "Joseph Juran",
  explanation:
    "Juran defined quality as 'fitness for use,' meaning that the product or service meets or exceeds the expectations and needs of the customer and stakeholders."
},

{
  scenario:
    "A project manager is developing the project charter with the project sponsor and is performing early analysis on whether the project is financially viable.",
  question:
    "Which of the following inputs can the project manager reference for cost-benefit analysis?",
  options: [
    "Business case",
    "Benefits management plan",
    "Agreements",
    "Project scope statement"
  ],
  correctAnswer:
    "Business case",
  explanation:
    "The business case contains the business need, cost-benefit analysis, and justification for the project, as well as recommendations for how to address the identified problem or opportunity."
},

{
  scenario:
    "A project manager is actively assigning resources, managing the work of the team, and handling changes to the approved project plan.",
  question:
    "Which of the following is a valid tool or technique to assist the project manager in performing these activities?",
  options: [
    "Data gathering",
    "Project management information system",
    "Data analysis",
    "Decision-making"
  ],
  correctAnswer:
    "Project management information system",
  explanation:
    "These responsibilities fall under the Direct and Manage Project Work process. One of the key tools and techniques for this process is the project management information system (PMIS)."
},

{
  scenario:
    "A project manager is analyzing the project schedule to determine whether the team is ahead or behind schedule.",
  question:
    "If earned value (EV) = 2,500 and planned value (PV) = 2,300, what is the schedule variance?",
  options: [
    "200",
    "-100",
    "2,300",
    "100"
  ],
  correctAnswer:
    "200",
  explanation:
    "Schedule variance is calculated using the formula SV = EV − PV. In this case: 2,500 − 2,300 = 200. A positive value means the project is ahead of schedule."
},

{
  scenario:
    "You are implementing changes that have already been reviewed and accepted as part of the change control process.",
  question:
    "What key information will you need to successfully complete these activities?",
  options: [
    "Lessons learned register",
    "Change requests",
    "Approved change requests",
    "Project schedule"
  ],
  correctAnswer:
    "Approved change requests",
  explanation:
    "Only approved change requests become inputs to the Direct and Manage Project Work process. Without formal approval, changes cannot be implemented."
},

{
  scenario:
    "A risk manager is comparing actual technical achievements against the original technical plan to assess the effectiveness of risk responses.",
  question:
    "What project management process is she performing?",
  options: [
    "Direct and Manage Project Work",
    "Control Quality",
    "Monitor Risks",
    "Monitor and Control Project Work"
  ],
  correctAnswer:
    "Monitor Risks",
  explanation:
    "The Monitor Risks process includes technical performance analysis, which compares planned technical achievements to actual accomplishments."
},

{
  scenario:
    "A project team needs to gather ideas, opinions, and expectations from stakeholders about a proposed product.",
  question:
    "Which technique brings together subject-matter experts for group discussion?",
  options: [
    "Benchmarking",
    "Interviews",
    "Focus groups",
    "Questionnaires"
  ],
  correctAnswer:
    "Focus groups",
  explanation:
    "Focus groups involve guided discussions with a selected group of stakeholders to gather feedback and expectations about a product or solution."
},

{
  scenario:
    "A project team has created a procurement management plan, selected a fixed-price contract type, and released an RFP.",
  question:
    "Which project management process will the team perform next?",
  options: [
    "Plan Procurement Management",
    "Develop Schedule",
    "Conduct Procurements",
    "Control Procurements"
  ],
  correctAnswer:
    "Conduct Procurements",
  explanation:
    "After the RFP is released, the next step is to evaluate proposals and select a seller, which takes place in the Conduct Procurements process."
},

{
  scenario:
    "A project manager is overseeing the execution of approved plans and ensuring that work and deliverables are properly coordinated.",
  question:
    "What is the key benefit of the Direct and Manage Project Work process?",
  options: [
    "It allows stakeholders to understand required actions",
    "It improves outcomes by creating organizational knowledge",
    "It provides overall management of project work and deliverables",
    "It manages all integrated changes"
  ],
  correctAnswer:
    "It provides overall management of project work and deliverables",
  explanation:
    "The Direct and Manage Project Work process improves the probability of success by ensuring that work and deliverables are coordinated and properly managed."
},

{
  scenario:
    "A manager is organizing and sharing project knowledge across the team and the organization.",
  question:
    "All of the following are tools and techniques of the Manage Project Knowledge process EXCEPT which one?",
  options: [
    "Knowledge management",
    "Information management",
    "Interpersonal and team skills",
    "Lessons learned register"
  ],
  correctAnswer:
    "Lessons learned register",
  explanation:
    "The lessons learned register is an output of the Manage Project Knowledge process, not a tool or technique."
},

{
  scenario:
    "A project is coming to an end and some team members and vendors need to be formally released.",
  question:
    "Which document should the project manager reference to ensure that resources are released properly?",
  options: [
    "Project management plan",
    "Stakeholder engagement plan",
    "Communications management plan",
    "Resource management plan"
  ],
  correctAnswer:
    "Resource management plan",
  explanation:
    "The resource management plan outlines how resources are acquired, managed, and released during the project."
},

{
  scenario:
    "A project manager encourages team participation in decision-making and gathers different viewpoints before taking action.",
  question:
    "What leadership style is being used?",
  options: [
    "Laissez-faire",
    "Autocratic",
    "Democratic",
    "Transactional"
  ],
  correctAnswer:
    "Democratic",
  explanation:
    "Democratic (participative) leaders encourage collaboration and seek input from team members before making decisions."
},

{
  scenario:
    "A project is planning its approach to quality for a new consumer product.",
  question:
    "Which statement about cost of quality is true?",
  options: [
    "It only applies during the project life cycle",
    "It mainly affects scheduling decisions",
    "It can result in returns, warranty claims, and recalls",
    "It does not affect customer satisfaction"
  ],
  correctAnswer:
    "It can result in returns, warranty claims, and recalls",
  explanation:
    "The cost of quality includes internal and external failure costs such as rework, returns, warranty claims, and product recalls."
},

{
  scenario:
    "A project manager uses her personal relationship with a company executive to influence stakeholder support for her project.",
  question:
    "What type of interpersonal power is she demonstrating?",
  options: [
    "Referent",
    "Relational",
    "Coercive",
    "Expert"
  ],
  correctAnswer:
    "Referent",
  explanation:
    "Referent power comes from personal relationships, charisma, and associations with influential individuals."
},

{
  scenario:
    "A project manager is applying earned value analysis to determine cost performance.",
  question:
    "Besides work performance data, what is a required input for this activity?",
  options: [
    "Work performance information",
    "Performance measurement baseline",
    "Project documents",
    "Organizational process assets"
  ],
  correctAnswer:
    "Performance measurement baseline",
  explanation:
    "The performance measurement baseline (scope, schedule, and cost baselines) is required to compare planned and actual performance."
},

{
  scenario:
    "Two senior team members disagree on an approach, and the project manager suggests that both make concessions to move forward.",
  question:
    "Which conflict resolution technique is being used?",
  options: [
    "Collaborate",
    "Avoid",
    "Problem-solve",
    "Reconcile"
  ],
  correctAnswer:
    "Reconcile",
  explanation:
    "Reconcile (compromise) involves both sides giving up something to reach a mutually acceptable solution."
},

{
  scenario:
    "Three proposed projects are evaluated only on their net present value: Project 1 (NPV = 2), Project 2 (NPV = 1), Project 3 (NPV = -0.5).",
  question:
    "Which project should be selected based only on NPV?",
  options: [
    "First project",
    "Second project",
    "Third project",
    "None"
  ],
  correctAnswer:
    "First project",
  explanation:
    "The project with the highest NPV delivers the greatest financial value. Project 1 has the highest NPV."
},
//81
{
  scenario:
    "Given a project with BAC = 1,500, EAC = 1,700, PV = 475, EV = 500, AC = 425.",
  question:
    "What is the correct Estimate to Complete (ETC)?",
  options: [
    "1,275",
    "200",
    "1,200",
    "1,025"
  ],
  correctAnswer:
    "1,275",
  explanation:
    "ETC = EAC – AC = 1,700 – 425 = 1,275."
},

{
  scenario:
    "A project manager has just completed the Acquire Resources process for an upcoming phase.",
  question:
    "According to the standard workflow, what process is most logically performed next?",
  options: [
    "Develop Team",
    "Plan Resource Management",
    "Control Resources",
    "Estimate Activity Resources"
  ],
  correctAnswer:
    "Develop Team",
  explanation:
    "Once resources are acquired, the next step is to develop the team and improve performance."
},

{
  scenario:
    "A senior engineer is effective at motivating the group and fostering positive relationships.",
  question:
    "Based on McClelland’s theory, which primary need drives this person?",
  options: [
    "Achievement",
    "Power",
    "Belonging",
    "Affiliation"
  ],
  correctAnswer:
    "Affiliation",
  explanation:
    "The need for affiliation is about relationships, teamwork, and belonging."
},

{
  scenario:
    "A procurement manager must select a contract structure for outsourced work.",
  question:
    "Which contract type exposes the buyer to the greatest cost risk?",
  options: [
    "Time and material",
    "Cost-reimbursable",
    "Fixed price",
    "Fixed price with economic price adjustments"
  ],
  correctAnswer:
    "Cost-reimbursable",
  explanation:
    "In cost-reimbursable contracts, the buyer covers actual costs, which may increase."
},

{
  scenario:
    "A project manager is identifying the specific materials, equipment and supplies required.",
  question:
    "Which project management process is being used?",
  options: [
    "Define Activities",
    "Estimate Activity Durations",
    "Estimate Activity Resources",
    "Estimate Costs"
  ],
  correctAnswer:
    "Estimate Activity Resources",
  explanation:
    "This process determines the types and quantities of resources needed."
},

{
  scenario:
    "Two engineers are in conflict about the best design. The sponsor advises uncovering facts to find the best solution.",
  question:
    "Which conflict resolution technique is being used?",
  options: [
    "Collaborate",
    "Reconcile",
    "Withdraw",
    "Compromise"
  ],
  correctAnswer:
    "Collaborate",
  explanation:
    "Collaboration focuses on problem-solving and finding a win-win using facts."
},

{
  scenario:
    "Requirements are unclear and the team wants early user feedback through a draft version.",
  question:
    "What is the most appropriate action?",
  options: [
    "Proceed with the plan",
    "Develop a context diagram",
    "Organize focus groups",
    "Add a prototype"
  ],
  correctAnswer:
    "Add a prototype",
  explanation:
    "Prototyping helps clarify vague requirements through early feedback."
},

{
  scenario:
    "A project manager is building team skills and improving teamwork.",
  question:
    "What is an output of the Develop Team process?",
  options: [
    "Physical resource assignments",
    "Team performance assessments",
    "Work performance information",
    "Resource requirements"
  ],
  correctAnswer:
    "Team performance assessments",
  explanation:
    "Develop Team evaluates improvements in team effectiveness and performance."
},

{
  scenario:
    "Resources are reassigned and the project is cancelled due to shifting priorities.",
  question:
    "What type of project closure has occurred?",
  options: [
    "Integration",
    "Starvation",
    "Addition",
    "Extinction"
  ],
  correctAnswer:
    "Extinction",
  explanation:
    "Extinction occurs when a project is formally terminated by management."
},

{
  scenario:
    "A manager is comparing planned resource use versus actual use.",
  question:
    "Which process is responsible for this?",
  options: [
    "Acquire Resources",
    "Develop Team",
    "Manage Team",
    "Control Resources"
  ],
  correctAnswer:
    "Control Resources",
  explanation:
    "Control Resources monitors and corrects physical resource usage."
},

{
  scenario:
    "All subsidiary management plans, schedule, and budget have been created.",
  question:
    "What should the project manager do next?",
  options: [
    "Start executing",
    "Hold a kick-off meeting",
    "Baseline the plan",
    "Distribute the plan"
  ],
  correctAnswer:
    "Baseline the plan",
  explanation:
    "The plan must be formally baselined before execution begins."
},

{
  scenario:
    "A project manager is increasing stakeholder involvement following the stakeholder engagement plan.",
  question:
    "Which output is most likely?",
  options: [
    "Change requests",
    "Lessons learned register",
    "Issue log",
    "Stakeholder register"
  ],
  correctAnswer:
    "Change requests",
  explanation:
    "Greater engagement may uncover new needs that lead to change requests."
},

{
  scenario:
    "A TCPI of 2.0 has been calculated based on BAC.",
  question:
    "How should this be interpreted?",
  options: [
    "Maintain current efficiency",
    "Increase efficiency significantly",
    "The plan cannot be met",
    "Reduce efficiency"
  ],
  correctAnswer:
    "Increase efficiency significantly",
  explanation:
    "A TCPI of 2.0 means performance must double to meet the original plan."
},

{
  scenario:
    "Activity B has ES = 10 and LS = 16.",
  question:
    "What is the total float?",
  options: [
    "4 days",
    "6 days",
    "2 days",
    "0 days"
  ],
  correctAnswer:
    "6 days",
  explanation:
    "Total float = LS – ES = 16 – 10 = 6 days."
},

{
  scenario:
    "Concrete must cure for 48 hours before framing begins.",
  question:
    "What scheduling term describes this delay?",
  options: [
    "Lead",
    "Lag",
    "Float",
    "Reserve time"
  ],
  correctAnswer:
    "Lag",
  explanation:
    "Lag is a mandatory waiting period between activities."
},

{
  scenario:
    "Testing begins two days before coding is complete.",
  question:
    "What is this example of?",
  options: [
    "Lag",
    "Lead",
    "Buffer",
    "Crashing"
  ],
  correctAnswer:
    "Lead",
  explanation:
    "Lead allows a successor activity to begin before a predecessor finishes."
},

{
  scenario:
    "A sequence of tasks has zero float and determines the project finish date.",
  question:
    "What is this called?",
  options: [
    "Fast-tracked path",
    "Critical chain",
    "Critical path",
    "Mandatory path"
  ],
  correctAnswer:
    "Critical path",
  explanation:
    "The critical path controls the project’s completion date."
},

{
  scenario:
    "Design and development activities are overlapped to shorten the schedule.",
  question:
    "What technique is being used?",
  options: [
    "Crashing",
    "Fast tracking",
    "Resource leveling",
    "Rolling wave planning"
  ],
  correctAnswer:
    "Fast tracking",
  explanation:
    "Fast tracking overlaps sequential activities to speed up the schedule."
},

{
  scenario:
    "Additional developers are added to finish earlier at a higher cost.",
  question:
    "What technique is this?",
  options: [
    "Fast tracking",
    "Resource smoothing",
    "Crashing",
    "Bottom-up estimating"
  ],
  correctAnswer:
    "Crashing",
  explanation:
    "Crashing shortens duration by adding resources, increasing cost."
},

{
  scenario:
    "A $50,000 saving opportunity has a 40% probability.",
  question:
    "What is the EMV?",
  options: [
    "$20,000",
    "$40,000",
    "$10,000",
    "$5,000"
  ],
  correctAnswer:
    "$20,000",
  explanation:
    "EMV = 0.40 × 50,000 = 20,000."
},

{
  scenario:
    "A project manager is directing work and assigning resources.",
  question:
    "What is the primary output?",
  options: [
    "Project management plan",
    "Issue log",
    "Approved change requests",
    "Deliverables"
  ],
  correctAnswer:
    "Deliverables",
  explanation:
    "Direct and Manage Project Work primarily produces deliverables."
},

{
  scenario:
    "A manager is applying Control Schedule tools.",
  question:
    "Which is NOT part of Control Schedule?",
  options: [
    "Critical path method",
    "Schedule compression",
    "Agile release planning",
    "PMIS"
  ],
  correctAnswer:
    "Agile release planning",
  explanation:
    "Agile release planning belongs to planning, not controlling processes."
},

{
  scenario:
    "A team buys insurance against flooding risk.",
  question:
    "Which strategy is this?",
  options: [
    "Accept",
    "Mitigate",
    "Avoid",
    "Transfer"
  ],
  correctAnswer:
    "Transfer",
  explanation:
    "Insurance shifts financial risk to a third party."
},

{
  scenario:
    "A manager wants to confirm a preassigned resource.",
  question:
    "Where is this documented?",
  options: [
    "Project management plan",
    "Business case",
    "Project charter",
    "Contract"
  ],
  correctAnswer:
    "Project charter",
  explanation:
    "Preassigned resources are documented in the project charter."
},

{
  scenario:
    "Projects are evaluated based on IRR.",
  question:
    "Which project should be chosen?",
  options: [
    "Project A",
    "Project B",
    "Project C",
    "None"
  ],
  correctAnswer:
    "Project B",
  explanation:
    "Project B has the highest IRR (7%)."
},

{
  scenario:
    "A bonus is promised to motivate the team to reach a milestone.",
  question:
    "Which theory explains this?",
  options: [
    "Achievement Theory",
    "Expectancy Theory",
    "Maslow’s Hierarchy",
    "Hygiene Theory"
  ],
  correctAnswer:
    "Expectancy Theory",
  explanation:
    "People are motivated when effort is linked to rewards."
},

{
  scenario:
    "Flowcharts, logic models, and matrix diagrams are used in quality planning.",
  question:
    "Which statement is correct?",
  options: [
    "They are for experiments",
    "They create the improvement plan",
    "They are data representation tools",
    "They are for audits"
  ],
  correctAnswer:
    "They are data representation tools",
  explanation:
    "These are tools of Plan Quality Management for visualizing processes."
},

{
  scenario:
    "A workshop defines deliverables and acceptance criteria.",
  question:
    "Where is this documented?",
  options: [
    "Project scope statement",
    "Requirements log",
    "Work breakdown structure",
    "Scope management plan"
  ],
  correctAnswer:
    "Project scope statement",
  explanation:
    "It defines deliverables, constraints, and acceptance criteria."
},

{
  scenario:
    "An adaptive environment requires progressive detailing of work.",
  question:
    "What planning approach should be used?",
  options: [
    "Full WBS at start",
    "Rolling wave planning",
    "No documentation",
    "Fixed schedule"
  ],
  correctAnswer:
    "Rolling wave planning",
  explanation:
    "It allows near-term detail and long-term flexibility."
},

{
  scenario:
    "Activities with durations are analyzed to find the longest path: A(3), B(4), C(6), D(2), E(5).",
  question:
    "Which is the critical path?",
  options: [
    "A → B → D",
    "A → C → D",
    "A → C → E",
    "A → B → C → D"
  ],
  correctAnswer:
    "A → B → C → D",
  explanation:
    "A → C → E = 15 days, the longest duration and therefore the critical path."
},
{ 
  scenario: "You are leading a clinical trial project for a new medication. Tension has developed between the data management team and the clinical operations team, and conflict has become visible and escalated.", 
  question: "What is the FIRST step you should take to manage this conflict?", 
  options: [ 
    "Immediately call a joint meeting and demand both teams follow established procedures", 
    "Determine whether the conflict is caused by process issues, interpersonal issues, or unclear requirements and identify the current stage of conflict escalation", 
    "Escalate the issue to the project sponsor for resolution", 
    "Ask each team to submit written complaints so you can identify who is at fault" 
  ], 
  correctAnswer: "Determine whether the conflict is caused by process issues, interpersonal issues, or unclear requirements and identify the current stage of conflict escalation", 
  explanation: "Conflict management best practice is to diagnose the source and the escalation stage before choosing a resolution technique. Jumping to enforcement, escalation, or blame increases tension and ignores root causes."
},

{ 
  scenario: "You are managing a highway expansion project where a civil engineering subcontractor and an environmental compliance officer are in conflict over environmental impact assessments.", 
  question: "What is the MOST appropriate step in analyzing the context of this conflict?", 
  options: [ 
    "Review contractual obligations, regulatory requirements, and environmental constraints to understand external factors",
    "Tell the subcontractor to follow whatever the compliance team says",
    "Assume both parties are exaggerating and let them resolve it themselves",
    "Replace the environmental compliance officer with someone more flexible"
  ], 
  correctAnswer: "Review contractual obligations, regulatory requirements, and environmental constraints to understand external factors", 
  explanation: "Conflict analysis requires understanding constraints, legal requirements, and stakeholder responsibilities. Automatically taking sides or replacing people without analysis is unprofessional and risky."
},

{ 
  scenario: "Two senior developers strongly disagree about architecture in an agile CRM project: microservices versus monolithic design.", 
  question: "Which conflict resolution approach BEST reconciles the situation and supports long-term project goals?", 
  options: [ 
    "Force Developer A’s microservices solution",
    "Compromise by blending elements of both solutions regardless of fit",
    "Facilitate a collaborative meeting where both developers evaluate trade-offs and align with business needs",
    "Withdraw from the conflict and let the team decide on its own"
  ], 
  correctAnswer: "Facilitate a collaborative meeting where both developers evaluate trade-offs and align with business needs", 
  explanation: "The collaborate/problem-solving technique encourages joint analysis and produces optimal, long-term solutions. Forcing, compromising incompatible solutions, or avoiding the conflict harms performance."
},

{ 
  scenario: "A diverse team working on a nationwide digital literacy program is confused about priorities and deliverables.", 
  question: "What should you do FIRST to improve alignment?", 
  options: [ 
    "Let the vision emerge over time",
    "Develop and communicate a clear project vision and mission",
    "Create detailed task instructions for each member",
    "Wait for the sponsor to provide a written vision"
  ], 
  correctAnswer: "Develop and communicate a clear project vision and mission", 
  explanation: "Leaders must establish vision and purpose early. Tasks do not replace direction, and waiting increases confusion and misalignment."
},

{ 
  scenario: "Your project team has engineers from multiple countries with different design philosophies and communication styles.", 
  question: "What is the BEST action to support varied experiences and perceptions?", 
  options: [ 
    "Require everyone to adopt a single communication style",
    "Ignore cultural differences",
    "Only include senior engineers in discussions",
    "Facilitate structured discussions that allow everyone to share perspectives"
  ], 
  correctAnswer: "Facilitate structured discussions that allow everyone to share perspectives", 
  explanation: "Inclusive discussion leverages diversity, promotes psychological safety, and strengthens collaboration. Uniformity, exclusion, and avoidance reduce innovation and cause misunderstanding."
},

{ 
  scenario: "A Scrum team is struggling with a complex technical component and morale is dropping.", 
  question: "Which action BEST demonstrates servant leadership?", 
  options: [ 
    "Order the team to work overtime",
    "Ask how you can remove obstacles and support their success",
    "Tell them challenges are normal and they should solve them alone",
    "Completely step back to avoid interference"
  ], 
  correctAnswer: "Ask how you can remove obstacles and support their success", 
  explanation: "Servant leadership focuses on enabling, supporting, and removing barriers, not commanding, ignoring, or abandoning the team."
},

{ 
  scenario: "A team deploying a dangerous robotics system includes many inexperienced new hires.", 
  question: "Which leadership style is MOST appropriate?", 
  options: [ 
    "Collaborative",
    "Laissez-faire",
    "Servant",
    "Directive"
  ], 
  correctAnswer: "Directive", 
  explanation: "Inexperienced teams performing safety-critical work require structure, instruction, and clear guidance. Autonomy without knowledge creates risk."
},

{ 
  scenario: "Midway through a long project, morale is low and burnout is appearing.", 
  question: "Which technique BEST helps increase motivation?", 
  options: [ 
    "Create a team social contract, reinforce shared goals, and recognize contributions",
    "Increase workload",
    "Tell them motivation is irrelevant",
    "Reduce communication"
  ], 
  correctAnswer: "Create a team social contract, reinforce shared goals, and recognize contributions", 
  explanation: "Recognition, shared purpose, and engagement increase intrinsic motivation. More pressure, reduced communication, or threats worsen burnout."
},

{ 
  scenario: "A senior environmental scientist is informally influencing project decisions despite not being on the steering committee.", 
  question: "What should you do to analyze her influence?", 
  options: [ 
    "Ignore her",
    "Use a stakeholder engagement assessment matrix",
    "Tell people to stop talking to her",
    "Escalate to her manager"
  ], 
  correctAnswer: "Use a stakeholder engagement assessment matrix", 
  explanation: "Informal influence is real and must be analyzed using stakeholder tools to understand power, interest, and engagement."
},

{ 
  scenario: "Different healthcare stakeholders have very different expectations and concerns about a new system.", 
  question: "Which leadership approach BEST demonstrates adaptability?", 
  options: [ 
    "Use the same style with everyone",
    "Focus only on executives",
    "Let each group self-direct",
    "Apply different approaches based on each group’s needs"
  ], 
  correctAnswer: "Apply different approaches based on each group’s needs", 
  explanation: "Situational leadership adapts style to the stakeholder’s maturity, role, and expectations. One-size-fits-all fails in complex environments."
},

{ 
  scenario: "An electrician finishes on time but produces a high number of defects and rework.", 
  question: "What should you do FIRST to evaluate his performance?", 
  options: [ 
    "Meet him to discuss performance",
    "Compare his performance to agreed KPIs",
    "Ask his manager for feedback",
    "Review only the team’s performance"
  ], 
  correctAnswer: "Compare his performance to agreed KPIs", 
  explanation: "Performance evaluation must be objective and data-driven before any conversation or escalation."
},

{ 
  scenario: "A junior developer automated testing and wants to become a test automation specialist.", 
  question: "What is the BEST action to support her growth?", 
  options: [ 
    "Publicly recognize and keep giving her the same tasks",
    "Thank her and move her to unrelated work",
    "Create a development plan aligned with her goals",
    "Assign her all automation work forever"
  ], 
  correctAnswer: "Create a development plan aligned with her goals", 
  explanation: "True development is supported through learning opportunities, mentorship, and career-oriented planning."
},

{ 
  scenario: "A senior nurse is becoming defensive in meetings and harming collaboration.", 
  question: "What is the BEST approach to give feedback?", 
  options: [ 
    "Correct him publicly",
    "Escalate immediately",
    "Wait for annual review",
    "Have a private, structured feedback conversation"
  ], 
  correctAnswer: "Have a private, structured feedback conversation", 
  explanation: "Private, respectful, and behavioral feedback reduces defensiveness and preserves trust."
},

{ 
  scenario: "You introduced a new inspection process and want to confirm if quality really improved.", 
  question: "What should you do to verify improvement?", 
  options: [ 
    "Ask people how they feel",
    "Compare pre- and post-data against control limits",
    "Watch the inspection once",
    "Rely on anecdotal reports"
  ], 
  correctAnswer: "Compare pre- and post-data against control limits", 
  explanation: "Only measurable, statistical comparison confirms real performance improvement."
},

{ 
  scenario: "You add a new member to a team of 7 people and want to calculate communication channels.", 
  question: "What is the total number of communication channels?", 
  options: [ 
    "1",
    "7",
    "8",
    "28"
  ], 
  correctAnswer: "28", 
  explanation: "Using N = n(n−1)/2 with n = 8 gives 28 channels."
},

{ 
  scenario: "A content writer shows strong analytics capability that would benefit the project.", 
  question: "What should you do to best organize the team?", 
  options: [ 
    "Keep her in writing only",
    "Assign her to lead analytics and inform her manager",
    "Ask for someone else with the title",
    "Split her time inefficiently"
  ], 
  correctAnswer: "Assign her to lead analytics and inform her manager", 
  explanation: "Tasks should be aligned with demonstrated capability, not job titles."
},

{ 
  scenario: "One team member is missing small deliverables and causing delays.", 
  question: "What is the BEST way to support accountability?", 
  options: [ 
    "Micromanage him",
    "Reassign his work",
    "Clarify expectations, dependencies, and impacts together",
    "Create escalation reports"
  ], 
  correctAnswer: "Clarify expectations, dependencies, and impacts together", 
  explanation: "Clear communication and coaching reinforce accountability better than punishment or removal."
},

{ 
  scenario: "Maria committed to submitting weekly test logs for her component.", 
  question: "How do you BEST evaluate her accountability?", 
  options: [ 
    "Check if she delivers logs on time and resolves issues",
    "Ask team opinions",
    "Measure difficulty of her tasks",
    "Check hours worked"
  ], 
  correctAnswer: "Check if she delivers logs on time and resolves issues", 
  explanation: "Accountability is measured by consistent delivery of agreed outputs and proactive problem-solving."
},

{ 
  scenario: "A UX designer waits for approvals on minor changes that do not affect compliance.", 
  question: "How do you properly empower her?", 
  options: [ 
    "Give full compliance authority",
    "Allow minor decisions within defined boundaries",
    "Force all decisions to compliance",
    "Let the team vote"
  ], 
  correctAnswer: "Allow minor decisions within defined boundaries", 
  explanation: "Empowerment works best with clear guards: autonomy without unnecessary risk."
},

{ 
  scenario: "A new chromatography tool produces inconsistent results and the team has only basic training.", 
  question: "What should you do FIRST to determine training needs?", 
  options: [ 
    "Schedule full training",
    "Ask the manager to retrain the team",
    "Review available budget",
    "Identify required competencies based on project requirements"
  ], 
  correctAnswer: "Identify required competencies based on project requirements", 
  explanation: "You must define skills needed and gaps before choosing training type or cost."
},
// 21
{
  scenario:
    "You are leading a commercial building project transitioning from 2D CAD to Building Information Modeling (BIM). After a training needs assessment, you determine that engineers must learn: (a) BIM modeling fundamentals, (b) clash detection and (c) model-based quantity takeoff.",
  question:
    "You now need to determine appropriate training options. What is the BEST next step?",
  options: [
    "Ask each engineer which training format they prefer so the team can choose independently.",
    "Evaluate available training options (vendor-led, in-house expert, online modules) and select those that best meet the identified competencies and project schedule.",
    "Require all engineers to attend the full 40-hour vendor certification, regardless of their specific gaps.",
    "Delay training until the next phase to avoid interrupting current work."
  ],
  correctAnswer:
    "Evaluate available training options (vendor-led, in-house expert, online modules) and select those that best meet the identified competencies and project schedule.",
  explanation:
    "Best practices support matching training options to: (i) required competencies, (ii) schedule, (iii) budget, and (iv) organizational capability. This ensures fit-for-purpose training. Other options may lead to inconsistent skills, wasted effort, or delays."
},

// 22
{
  scenario:
    "Your project is implementing a new fraud detection system. You identified training needs and selected the appropriate training modules: 5 business analysts attending a 2-day workshop, a $12,000 vendor fee, and analysts unavailable for regular tasks during the workshop. Senior management asks for reassurance that resource allocation is justified.",
  question:
    "What should you do NEXT?",
  options: [
    "Present the vendor invoice to management and ask them to approve it.",
    "Cancel the training to avoid resource conflicts.",
    "Ask the analysts to self-study online during weekends to avoid issues with availability.",
    "Update the resource management plan and project schedule to allocate time, budget, and personnel for the training."
  ],
  correctAnswer:
    "Update the resource management plan and project schedule to allocate time, budget, and personnel for the training.",
  explanation:
    "Resource Management and Cost Management processes require allocation of time, budget, and people for training. Other options either bypass planning, undermine skill development, or create burnout risks."
},

// 23
{
  scenario:
    "You lead a team developing an AI-based customer personalization engine. The team completed training on a new machine learning tool.",
  question:
    "You need to measure whether the training was effective before proceeding to more complex features. What is the MOST effective way to measure the training outcomes?",
  options: [
    "Observe whether team members are able to apply the new tool correctly while delivering the next sprint’s user stories.",
    "Ask participants if they enjoyed the training and felt it was valuable.",
    "Check whether the training stayed within budget.",
    "Ask the trainer for feedback about the team’s engagement and participation."
  ],
  correctAnswer:
    "Observe whether team members are able to apply the new tool correctly while delivering the next sprint’s user stories.",
  explanation:
    "Evaluating training effectiveness through observable performance and competency application aligns with best practices. Satisfaction, cost, or trainer feedback do not provide evidence of real-world capability."
},

// 24
{
  scenario:
    "You are managing a utility-scale solar installation project. Several external stakeholders, including landowners, local environmental regulators, and the utility company’s engineering review board, must collaborate with your team. These stakeholders vary widely in technical understanding and communication skills.",
  question:
    "You need to determine how best to engage them during technical design reviews. What should you do FIRST?",
  options: [
    "Ask each stakeholder to complete a detailed technical assessment to measure their engineering knowledge.",
    "Conduct a stakeholder analysis to evaluate their influence, interest, technical understanding, and communication styles.",
    "Invite all stakeholders to a kickoff workshop to observe how well they communicate with the technical team.",
    "Ask your engineering lead to brief stakeholders and test their understanding informally."
  ],
  correctAnswer:
    "Conduct a stakeholder analysis to evaluate their influence, interest, technical understanding, and communication styles.",
  explanation:
    "Stakeholder analysis helps understand skill levels, communication needs, influence, and engagement readiness. Other options are too formal, informal, or occur later in the process."
},

// 25
{
  scenario:
    "You are planning a smart traffic system project involving sensor installation, data analytics integration, and roadside equipment upgrades. The city expects the system to be installed in 7 districts within 4 months.",
  question:
    "You must determine the resource requirements to meet the schedule. What should you do?",
  options: [
    "Ask the city procurement office for the number of contractors they usually hire for similar projects.",
    "Base the number of required installers on how many you think the team can manage efficiently.",
    "Review the work breakdown structure and activity resource requirements to determine the types and quantities of resources needed.",
    "Assign one installer per district to simplify coordination."
  ],
  correctAnswer:
    "Review the work breakdown structure and activity resource requirements to determine the types and quantities of resources needed.",
  explanation:
    "Using WBS and activity resource requirements provides an objective, scope-driven estimate. Other options are arbitrary, non-data-driven, or not tailored to this project."
},

// 26
{
  scenario:
    "Midway through your satellite subsystem design project, the client shifts requirements to incorporate a new telemetry protocol. Your engineering team has strong experience with the original protocol but limited knowledge of the new one.",
  question:
    "If the team does not adapt quickly, design delays are likely. What should you do to continually assess and refresh team skills?",
  options: [
    "Conduct a skills gap analysis and update the resource management plan to include targeted upskilling activities.",
    "Replace team members lacking the new telemetry skill with external contractors.",
    "Ask team members to self-study the new protocol during their spare time.",
    "Wait until the next phase gate review to formally reassess team capabilities."
  ],
  correctAnswer:
    "Conduct a skills gap analysis and update the resource management plan to include targeted upskilling activities.",
  explanation:
    "Continuous assessment and upskilling ensures the team evolves with project needs. Other options delay adaptation, rely on informal learning, or are unnecessarily costly."
},

// 27
{
  scenario:
    "Your project is migrating legacy banking applications to a cloud platform. A senior cloud architect with deep tacit knowledge about security configurations is leaving in two months. Your team includes two junior engineers who will be responsible for long-term maintenance after migration.",
  question:
    "You must ensure effective knowledge transfer before the architect exits. What is the BEST approach?",
  options: [
    "Ask the senior architect to create detailed documentation before leaving.",
    "Hold a one-time knowledge sharing meeting where the architect explains key concepts.",
    "Request IT management to hire another senior architect immediately.",
    "Assign the junior engineers to reverse shadow the architect, gradually taking full responsibility for tasks under the architect’s supervision."
  ],
  correctAnswer:
    "Assign the junior engineers to reverse shadow the architect, gradually taking full responsibility for tasks under the architect’s supervision.",
  explanation:
    "Reverse shadowing allows hands-on learning while the expert supervises, transferring tacit knowledge effectively. Other options fail to transfer deep expertise adequately or are costly and slow."
},

// 28
{
  scenario:
    "You are leading a project to integrate new robotics systems into an automotive assembly line. The integration team reports slower-than-expected progress with multiple issues.",
  question:
    "You must identify which issues truly block progress and require immediate attention. What should you do FIRST?",
  options: [
    "Ask the vendor to expedite firmware delivery since it impacts system performance.",
    "Conduct a root-cause analysis session with the integration team to identify which issues prevent work from proceeding.",
    "Escalate all issues to senior management to let them decide which are critical.",
    "Assign each issue to a team member to investigate independently."
  ],
  correctAnswer:
    "Conduct a root-cause analysis session with the integration team to identify which issues prevent work from proceeding.",
  explanation:
    "Root-cause analysis identifies true blockers efficiently. Other options are premature, fragmented, or shift responsibility unnecessarily."
},

// 29
{
  scenario:
    "Your project team is upgrading imaging software across multiple hospital sites. Three impediments are identified: network bandwidth upgrade pending approval, radiology testing windows unavailable during business hours, and mandatory cybersecurity review.",
  question:
    "Which impediment should you prioritize first?",
  options: [
    "Lack of radiology testing windows, because the team cannot validate their work.",
    "Cybersecurity review, because it is required before go-live.",
    "Network bandwidth approval, because without the bandwidth upgrades the system won’t function properly.",
    "Prioritize all impediments equally to ensure balance."
  ],
  correctAnswer:
    "Network bandwidth approval, because without the bandwidth upgrades the system won’t function properly.",
  explanation:
    "Prioritize blockers based on impact and urgency. Network upgrades are foundational; other tasks depend on them. Treating all impediments equally delays resolution."
},

// 30
{
  scenario:
    "Your project aims to deploy sensor-based pipeline monitoring equipment. A regulatory permit required for field installation is delayed. Your emails to the permit office have gone unanswered.",
  question:
    "What is the BEST action to remove the blocker?",
  options: [
    "Escalate the issue by emailing the permit department daily until they respond.",
    "Ask your engineering team to start field installation without the permit since the risk is low.",
    "Put the project on hold until the permit office clears the backlog.",
    "Reach out to your company’s regulatory liaison, who regularly coordinates with the permit office, to help expedite the permit review."
  ],
  correctAnswer:
    "Reach out to your company’s regulatory liaison, who regularly coordinates with the permit office, to help expedite the permit review.",
  explanation:
    "Leveraging relationships and knowledge within the regulatory liaison is effective and strategic. Other options risk compliance, waste time, or violate ethical standards."
},

// 31
{
  scenario:
    "Your project is installing fiber network nodes in rural towns. The team depends on a senior technician with tacit knowledge. Shadowing was implemented to transfer knowledge to a junior technician.",
  question:
    "You need to reassess if this is removing the capability-related blocker. What is the BEST way to do so?",
  options: [
    "Ask the senior technician if he feels the junior technician is learning quickly.",
    "Review field performance metrics to determine whether the junior technician is effectively applying the knowledge transferred during shadowing.",
    "End the shadowing arrangement and begin reverse shadowing immediately.",
    "Replace the junior technician with a more experienced contractor."
  ],
  correctAnswer:
    "Review field performance metrics to determine whether the junior technician is effectively applying the knowledge transferred during shadowing.",
  explanation:
    "Continuous assessment using measurable indicators verifies if knowledge transfer is effective. Other options are subjective, premature, or unnecessary."
},

// 32
{
  scenario:
    "You are preparing to negotiate a subcontract for prefabricated wall panels. Your budget cap is $1.2M, market pricing ranges $1.1M–$1.5M, delivery must occur within 8 weeks, and the subcontractor has limited competition.",
  question:
    "Before the negotiation meeting, what should you do FIRST?",
  options: [
    "Determine your Best Alternative to a Negotiated Agreement (BATNA) and the subcontractor’s possible BATNA using market data and internal constraints.",
    "Identify concessions you are willing to offer and present them immediately.",
    "Ask the subcontractor for their lowest possible price to define the negotiation range.",
    "Decide to negotiate aggressively since the subcontractor has few competitors."
  ],
  correctAnswer:
    "Determine your Best Alternative to a Negotiated Agreement (BATNA) and the subcontractor’s possible BATNA using market data and internal constraints.",
  explanation:
    "Analyzing BATNA and ZOPA sets negotiation boundaries and leverage. Other options are premature, give away leverage, or ignore structured negotiation best practices."
},

// 33
{
  scenario:
    "Your organization is renewing a cybersecurity SaaS subscription. The vendor proposes a price increase and change in service tiers. Compliance requires 24/7 monitoring, finance wants cost reductions, operations needs faster incident response, and the vendor is the only certified provider.",
  question:
    "You need to determine your ultimate objective(s) before negotiation. What is the BEST approach?",
  options: [
    "Prioritize cost reduction above all because finance requested it.",
    "Ensure compliance requirements and operational service levels are met, then seek favorable pricing within those boundaries.",
    "Make the compliance team decide since it is a regulated area.",
    "Ask the vendor to propose multiple options and choose the cheapest."
  ],
  correctAnswer:
    "Ensure compliance requirements and operational service levels are met, then seek favorable pricing within those boundaries.",
  explanation:
    "Objectives must align with regulatory requirements, operational needs, and project constraints. Other options risk non-compliance, operational failure, or ignoring stakeholder priorities."
},

// 34
{
  scenario:
    "You negotiated an agreement to purchase a tablet-coating machine with delivery, warranty, on-site training, and production throughput requirements. The vendor delivers the machine but without training documentation or required throughput data.",
  question:
    "What should you do to verify the agreement objectives have been met?",
  options: [
    "Accept the delivery because the machine arrived on schedule.",
    "Ask the vendor informally if the machine meets throughput requirements.",
    "Notify finance to release payment since the equipment is on site.",
    "Review the procurement statement of work (SOW), acceptance criteria, and contract deliverables to validate compliance."
  ],
  correctAnswer:
    "Review the procurement statement of work (SOW), acceptance criteria, and contract deliverables to validate compliance.",
  explanation:
    "Verifying contract objectives involves checking SOW, deliverables, acceptance criteria, and test results. Other options ignore formal verification and risk incomplete compliance."
},

// 35
{
  scenario:
    "You are in a negotiation meeting with a supplier. The supplier offers a discount if you relax testing standards for thermal tolerance. The engineering lead looks uneasy.",
  question:
    "What should you do during the negotiation?",
  options: [
    "Accept the concession since it reduces project costs significantly.",
    "Pause the discussion, consult with engineering, and restate non-negotiable technical requirements to the supplier.",
    "Ignore the engineering lead’s concern and continue negotiating pricing.",
    "Ask the supplier why the testing standards should be relaxed."
  ],
  correctAnswer:
    "Pause the discussion, consult with engineering, and restate non-negotiable technical requirements to the supplier.",
  explanation:
    "The PM must ensure technical constraints and quality are upheld, consulting SMEs and maintaining alignment. Other options compromise safety, scope, and quality standards."
},
// 36
{
  scenario:
    "You are preparing to negotiate with a contractor for fiber installation in a major metropolitan area with constraints including tight city permit deadlines, potential penalties for late completion, the contractor’s strong bargaining position due to labor shortages, and your organization’s desire to secure multi-year pricing.",
  question:
    "What is the BEST strategy to use before the negotiation meeting?",
  options: [
    "Use a competitive win-lose strategy to push for aggressive pricing and fixed penalties",
    "Use a passive strategy and let the contractor propose all terms first",
    "Use an interest-based win-win strategy focused on long-term partnership and trade-offs such as multi-year commitments in exchange for schedule guarantees",
    "Use a high-pressure tactic to secure contract signing quickly before labor availability decreases further"
  ],
  correctAnswer:
    "Use an interest-based win-win strategy focused on long-term partnership and trade-offs such as multi-year commitments in exchange for schedule guarantees",
  explanation:
    "Interest-based negotiation is best when the supplier has strong market power, long-term relationships matter, multiple interests exist, and trade-offs are possible. Other options risk failure, weakened position, or damaged relationships."
},

// 37
{
  scenario:
    "A project manager is leading a government-funded bridge rehabilitation project with stakeholders expressing concerns about traffic, environmental impact, and commerce delays.",
  question:
    "What should the project manager do FIRST to evaluate stakeholder engagement needs?",
  options: [
    "Perform a Stakeholder Analysis using a Power/Interest Grid",
    "Develop a Communications Management Plan",
    "Conduct a Lessons Learned Session",
    "Implement a Stakeholder Engagement Plan"
  ],
  correctAnswer:
    "Perform a Stakeholder Analysis using a Power/Interest Grid",
  explanation:
    "The Power/Interest Grid helps determine who has influence, who requires closer attention, and who needs monitoring. Communication planning or implementing engagement comes after understanding stakeholder needs."
},

// 38
{
  scenario:
    "A project manager is leading a software upgrade project. IT wants stronger encryption, marketing wants fast deployment, and operations wants minimal downtime.",
  question:
    "Which tool or technique should the project manager use to optimize alignment among stakeholders?",
  options: [
    "Facilitation Techniques (e.g., Workshops, Joint Application Design Sessions)",
    "Expert Judgment",
    "Data Representation (Stakeholder Cube)",
    "Risk Audits"
  ],
  correctAnswer:
    "Facilitation Techniques (e.g., Workshops, Joint Application Design Sessions)",
  explanation:
    "Facilitation techniques resolve conflicts, build consensus, and align expectations. Expert judgment, stakeholder cubes, or risk audits do not directly resolve misalignment or conflicting requirements."
},

// 39
{
  scenario:
    "You are leading a project to install a new digital imaging system in a hospital. Radiology, nurses, and administrators have concerns about reliability, workflow, and budget.",
  question:
    "Which tool or technique should you use to build trust and influence stakeholders?",
  options: [
    "Interpersonal and Team Skills, Active Listening and Conflict Management",
    "Organizational Process Assets",
    "Data Gathering and Benchmarking",
    "Earned Value Analysis"
  ],
  correctAnswer:
    "Interpersonal and Team Skills, Active Listening and Conflict Management",
  explanation:
    "Active listening and conflict management build trust, understand concerns, influence stakeholders, and create positive working relationships. Other options do not address human concerns or trust."
},

// 40
{
  scenario:
    "During development of an automated packaging machine, mechanical engineers and software programmers disagree about equipment response time responsibilities.",
  question:
    "Which tool or technique should you use FIRST to identify the root cause?",
  options: [
    "Fishbone Diagram",
    "Check Sheets",
    "Expert Judgment",
    "Control Charts"
  ],
  correctAnswer:
    "Fishbone Diagram",
  explanation:
    "The Fishbone (Cause-and-Effect) Diagram categorizes potential causes to uncover the root problem. Check sheets, expert judgment, and control charts do not systematically identify the underlying causes of misunderstandings."
},

// 41
{
  scenario:
    "Implementing a new EMR system across multiple clinics with disagreements about patient intake workflow.",
  question:
    "Which technique is MOST appropriate to gather broad input and guide consensus?",
  options: [
    "Affinity Diagrams",
    "Control Quality",
    "Delphi Technique",
    "Multi-Criteria Decision Analysis"
  ],
  correctAnswer:
    "Delphi Technique",
  explanation:
    "The Delphi Technique gathers anonymous expert input in multiple rounds to reach consensus, ideal for distributed stakeholders. Other techniques organize ideas or evaluate alternatives but do not build consensus."
},

// 42
{
  scenario:
    "Structural engineering team and client agreed on a modified beam design for a high-rise project.",
  question:
    "Which tool or technique should you use to BEST support and reinforce the agreed outcome?",
  options: [
    "Change Control Tools",
    "Interpersonal and Team Skills (Facilitation)",
    "Lessons Learned Register",
    "Benchmarking"
  ],
  correctAnswer:
    "Change Control Tools",
  explanation:
    "Change control tools document and enforce modifications, ensuring the agreement is formally captured and communicated. Facilitation and lessons learned do not enforce active agreements; benchmarking is unrelated."
},

// 43
{
  scenario:
    "Distributed agile team developing an e-commerce platform has varying user story estimates due to misunderstandings.",
  question:
    "Which technique is MOST suitable to investigate these discrepancies?",
  options: [
    "Active Listening",
    "Parametric Estimating",
    "Risk Audits",
    "Flowcharts"
  ],
  correctAnswer:
    "Active Listening",
  explanation:
    "Active listening uncovers misunderstandings, clarifies assumptions, and probes discrepancies. Estimating, risk audits, and flowcharts do not address interpersonal or scope misunderstandings."
},

// 44
{
  scenario:
    "Global project team with members in New York, Mumbai, Frankfurt, and Manila faces delays due to discomfort asking questions in culturally dominated meetings.",
  question:
    "Which tool or technique should you use FIRST to understand the diverse needs of virtual team members?",
  options: [
    "Communication Requirements Analysis",
    "Resource Optimization Techniques",
    "Pre-assignment",
    "Interpersonal and Team Skills, Cultural Awareness"
  ],
  correctAnswer:
    "Interpersonal and Team Skills, Cultural Awareness",
  explanation:
    "Cultural awareness identifies communication preferences, hierarchy, and engagement styles to address virtual team needs. Other options do not examine cultural or environmental team requirements."
},

// 45
{
  scenario:
    "Global software project with distributed teams facing version control conflicts and misaligned updates.",
  question:
    "Which tool or technique is MOST appropriate to explore alternatives for engaging the virtual team?",
  options: [
    "Communication Technology",
    "Co-location",
    "Conflict Management",
    "Inspection"
  ],
  correctAnswer:
    "Communication Technology",
  explanation:
    "Selecting appropriate collaboration platforms and communication tools improves engagement and alignment. Co-location, conflict management, and inspection do not provide primary alternatives for virtual team collaboration."
},

// 46
{
  scenario:
    "Laboratory and clinical data science teams work virtually across the US and Europe, slowing collaboration.",
  question:
    "Which technique should you implement to enhance virtual team engagement?",
  options: [
    "Manage Project Knowledge",
    "Requirements Documentation",
    "Virtual Team-Building Activities",
    "Control Scope"
  ],
  correctAnswer:
    "Virtual Team-Building Activities",
  explanation:
    "Virtual team-building activities increase trust, communication, collaboration, and engagement. Other options focus on documentation or project control, not team engagement."
},

// 47
{
  scenario:
    "Remote design team in digital marketing reports mixed results after implementing new communication tools.",
  question:
    "Which tool or technique is BEST suited to evaluate the ongoing effectiveness of virtual team engagement?",
  options: [
    "Feedback Surveys (Surveys/Questionnaires)",
    "Parametric Estimating",
    "Procurement Audits",
    "Fast Tracking"
  ],
  correctAnswer:
    "Feedback Surveys (Surveys/Questionnaires)",
  explanation:
    "Surveys allow continuous assessment of engagement, satisfaction, and effectiveness for remote teams. Estimating, procurement audits, and fast tracking do not evaluate engagement."
},

// 48
{
  scenario:
    "Aerospace hardware project with internal and supplier teams experiences chaos due to unclear communication protocol and approval responsibilities.",
  question:
    "Which tool or technique should you use to communicate principles and establish shared expectations?",
  options: [
    "Team Charter",
    "Issue Log",
    "Control Communications",
    "Resource Calendars"
  ],
  correctAnswer:
    "Team Charter",
  explanation:
    "A Team Charter defines ground rules, roles, responsibilities, communication principles, and decision-making guidelines. Issue logs, control communications, and resource calendars do not establish organizational norms."
},

// 49
{
  scenario:
    "IT project unifying electronic health records across multiple hospitals has inconsistent adherence to ground rules among team members.",
  question:
    "Which technique should you apply to strengthen team cohesion and enforce ground rules?",
  options: [
    "Team-Building Activities",
    "Organizational Process Assets (OPAs)",
    "Work Performance Data",
    "Validate Scope"
  ],
  correctAnswer:
    "Team-Building Activities",
  explanation:
    "Team-building activities build trust, encourage collaboration, and align the team with shared rules. OPAs, performance data, and scope validation do not improve team cohesion or rule adherence."
},

// 50
{
  scenario:
    "Marketing team distributed across five countries repeatedly violates virtual meeting ground rules.",
  question:
    "Which tool or technique should the project manager use to rectify violations and restore productive dynamics?",
  options: [
    "Schedule Compression",
    "Interpersonal and Team Skills – Conflict Management",
    "Variance Analysis",
    "Scope Baseline"
  ],
  correctAnswer:
    "Interpersonal and Team Skills – Conflict Management",
  explanation:
    "Conflict management addresses behavior, facilitates constructive discussion, and reinforces ground rules. Schedule compression, variance analysis, and scope baseline do not resolve team behavior issues."
},

// 51
{
  scenario:
    "A newly hired regulatory liaison consistently misunderstands environmental compliance reporting in a solar farm project.",
  question:
    "Which tool or technique should you use to formally allocate time for mentoring and support?",
  options: [
    "Interpersonal and Team Skills – Coaching/Mentoring",
    "Stakeholder Engagement Assessment Matrix",
    "Meetings Management",
    "Change Requests"
  ],
  correctAnswer:
    "Interpersonal and Team Skills – Coaching/Mentoring",
  explanation:
    "Coaching and mentoring allocates time for development, builds capability, and prevents repeated misunderstandings. Other options do not provide structured mentoring or direct development."
},

// 52
{
  scenario:
    "Global clinical trial project: a junior data analyst misinterprets blinding protocols due to inexperience.",
  question:
    "What is the BEST action to recognize and act on this mentoring opportunity?",
  options: [
    "Offer direct mentoring to explain regulatory expectations and reinforce data handling protocols",
    "Escalate the analyst’s performance issue to the functional manager",
    "Replace the analyst with someone more experienced",
    "Document the misunderstanding in the issue log and move on"
  ],
  correctAnswer:
    "Offer direct mentoring to explain regulatory expectations and reinforce data handling protocols",
  explanation:
    "Mentoring addresses the root cause, strengthens capability, reduces compliance risk, and builds trust. Escalation, replacement, or mere documentation does not develop the individual or resolve misunderstandings."
},

// 53
{
  scenario:
    "Core banking software upgrade with teams in software development, cybersecurity, and compliance has behavioral misunderstandings during security reviews.",
  question:
    "Which tool or technique should you use to assess behavior and gain insight into personality differences?",
  options: [
    "Variance Analysis",
    "Monte Carlo Simulation",
    "Earned Value Management (EVM)",
    "Personality Indicators"
  ],
  correctAnswer:
    "Personality Indicators",
  explanation:
    "Personality indicators help understand behavior, communication styles, triggers, and misunderstandings caused by personality clashes. Other techniques focus on performance measurement or quantitative analysis, not behavior."
},

// 54
{
  scenario:
    "Hospital wing construction: a high-D surgeon and high-S architect have conflicting communication styles causing tension.",
  question:
    "Which action is the BEST emotionally intelligent approach to address the conflict while maintaining team harmony?",
  options: [
    "Provide the surgeon with concise, high-level summaries before meetings and invite fast decision points",
    "Ask the architect to reduce their participation in meetings",
    "Force all stakeholders to follow the architect’s communication style",
    "Continue meeting as usual and assume the conflict will resolve itself"
  ],
  correctAnswer:
    "Provide the surgeon with concise, high-level summaries before meetings and invite fast decision points",
  explanation:
    "Adjusting communication style based on personality supports emotional intelligence, reduces frustration, smooths interactions, and preserves team performance. Other options either ignore the root cause or reduce collaboration."
},
// 1
{
  scenario:
    "You are managing a mid-rise building construction project in your country. Before excavation begins, the city’s construction authority has issued updated requirements for soil testing, worker safety protections, and noise restrictions.",
  question:
    "What is the MOST appropriate action to confirm compliance requirements before work begins?",
  options: [
    "Proceed using the old compliance checklist because the authority rarely changes mandatory requirements",
    "Meet with the construction authority and review the updated regulations to incorporate the new requirements",
    "Ask the safety officer to sign a waiver acknowledging that the project will follow previous guidelines",
    "Begin excavation while the compliance review is completed in parallel to save time"
  ],
  correctAnswer:
    "Meet with the construction authority and review the updated regulations to incorporate the new requirements",
  explanation:
    "Meeting with the city authority ensures you fully understand all current compliance requirements, preventing violations. Using old checklists, internal waivers, or starting work without verification risks penalties and legal consequences."
},

// 2
{
  scenario:
    "You are leading a project to implement a new packaging line for a pharmaceutical company, which must comply with GMP, data integrity standards, and internal SOPs.",
  question:
    "How should you classify these compliance requirements to ensure proper management?",
  options: [
    "All requirements should be treated as internal compliance because they affect operations",
    "Group all requirements as legal compliance since violations can result in penalties",
    "Group GMP as external regulatory compliance and SOPs as internal organizational compliance",
    "Treat all compliance categories as quality standards to simplify tracking"
  ],
  correctAnswer:
    "Group GMP as external regulatory compliance and SOPs as internal organizational compliance",
  explanation:
    "GMP is externally mandated by regulatory authorities, while SOPs are internal organizational requirements. Proper classification ensures accountability and accurate compliance tracking."
},

// 3
{
  scenario:
    "Your team is building a payments application that must comply with PCI-DSS data security requirements. The development team wants to use an outdated open-source encryption library.",
  question:
    "What is the MOST significant compliance threat in this situation?",
  options: [
    "The library may delay development progress due to integration challenges",
    "Using outdated cryptography may violate PCI-DSS requirements and expose customer data",
    "The open-source community may discontinue supporting the library in the future",
    "The encryption library may increase the application’s processing time"
  ],
  correctAnswer:
    "Using outdated cryptography may violate PCI-DSS requirements and expose customer data",
  explanation:
    "Outdated encryption can cause noncompliance with PCI-DSS, risking security breaches and fines. Other issues like schedule delays or performance are secondary to compliance risk."
},

// 4
{
  scenario:
    "You are managing a project to digitize patient records in a hospital, and all access must comply with privacy regulations.",
  question:
    "Which method BEST supports compliance in this project?",
  options: [
    "Allow staff to self-report any unauthorized access",
    "Restrict all access to a single administrator to reduce risk",
    "Ask each user to maintain a spreadsheet of their access activities",
    "Implement automatic access logging and periodic system audits"
  ],
  correctAnswer:
    "Implement automatic access logging and periodic system audits",
  explanation:
    "Automated logging with audits ensures reliable, compliant monitoring. Self-reporting, manual tracking, or over-restriction are prone to errors and do not meet regulatory standards."
},

// 5
{
  scenario:
    "A supplier informs you that a batch of fasteners does not meet aerospace-grade tensile strength but urges you to 'use them anyway' to avoid schedule delays.",
  question:
    "Which consequence of noncompliance is MOST critical?",
  options: [
    "Potential reputational damage for the supplier",
    "Increase in procurement costs",
    "Safety risks that could lead to catastrophic equipment failure",
    "Delays in certification paperwork"
  ],
  correctAnswer:
    "Safety risks that could lead to catastrophic equipment failure",
  explanation:
    "Using noncompliant aerospace components could cause life-threatening safety failures. Other issues like cost, reputation, or paperwork are secondary."
},

// 6
{
  scenario:
    "During a pipeline expansion project, new environmental laws mandate stricter water contamination controls. Your current design does not meet the new standard.",
  question:
    "What is the BEST approach to ensure compliance?",
  options: [
    "Request an exemption until the project is complete",
    "Conduct a legal and environmental risk assessment and modify the design accordingly",
    "Continue with the current design but document the risk in the risk register",
    "Pause all project work indefinitely until authorities give clarity"
  ],
  correctAnswer:
    "Conduct a legal and environmental risk assessment and modify the design accordingly",
  explanation:
    "Evaluate legal and environmental risks and update project plans to meet regulations. Exemptions are unlikely, documenting risks alone is insufficient, and pausing work indefinitely is excessive."
},

// 7
{
  scenario:
    "Your team is deploying a corporate network across several offices with requirements for encrypted traffic, approved firewalls, and quarterly audits.",
  question:
    "Which tool or method is MOST appropriate to measure project compliance?",
  options: [
    "Conducting a compliance audit comparing implementation against the checklist",
    "Asking each engineer to verbally confirm they followed the rules",
    "Reviewing lessons learned from a past project",
    "Waiting until project close-out to evaluate compliance"
  ],
  correctAnswer:
    "Conducting a compliance audit comparing implementation against the checklist",
  explanation:
    "Compliance audits using checklists provide objective, measurable insights. Verbal confirmation is unreliable, lessons learned are for planning, and waiting until close-out prevents proactive corrections."
},
//1
  {
    "scenario": "A global software upgrade project distributes a monthly newsletter with status, metrics, and milestones to 500 stakeholders as a one-way communication.",
    "question": "What is the primary communication method being used?",
    "options": [
      "Interactive communication",
      "Pull communication",
      "Push communication",
      "Lateral communication"
    ],
    "correctAnswer": "Push communication",
    "explanation": "Push communication is one-way distribution of information to specific recipients, such as newsletters and mass emails."
  },
  //2
  {
    "scenario": "A site foreman needs immediate clarification from a structural engineer about a steel beam specification while a crane is on standby.",
    "question": "What is the MOST effective communication method?",
    "options": [
      "Send a detailed email",
      "Post the query on the project portal",
      "Call the engineer on the phone for a direct conversation",
      "Issue a formal RFI"
    ],
    "correctAnswer": "Call the engineer on the phone for a direct conversation",
    "explanation": "Time-critical issues require interactive, real-time communication to enable rapid clarification and decision-making."
  },
  //3
  {
    "scenario": "The PMO compiles lessons learned, templates, and procedures for teams to access on demand.",
    "question": "What communication method should they establish?",
    "options": [
      "Push communication via scheduled emails",
      "Interactive communication through workshops",
      "Pull communication via a dedicated PMO knowledge management system",
      "Push communication through charter links"
    ],
    "correctAnswer": "Pull communication via a dedicated PMO knowledge management system",
    "explanation": "Pull communication allows users to access large volumes of information when needed through a central repository."
  },
  //4
  {
    "scenario": "A startup launches a limited version of a food delivery app to validate demand before scaling.",
    "question": "This initial release is best described as a:",
    "options": [
      "Minimum Business Increment (MBI)",
      "Minimum Viable Product (MVP)",
      "Prototype",
      "Project Deliverable"
    ],
    "correctAnswer": "Minimum Viable Product (MVP)",
    "explanation": "An MVP contains just enough features to be usable by early customers to gather feedback and validate the business idea."
  },
  //5
  {
    "scenario": "A bank releases a credit score check feature that allows manual loan processing and revenue generation.",
    "question": "This approach prioritizes delivering a:",
    "options": [
      "Minimum Marketable Feature (MMF)",
      "Minimum Viable Product (MVP)",
      "Minimum Business Increment (MBI)",
      "Work Package"
    ],
    "correctAnswer": "Minimum Business Increment (MBI)",
    "explanation": "An MBI is the smallest unit of work that delivers standalone, measurable business value."
  },
  //6
  {
    "scenario": "After launching an MVP, the team focuses a sprint on fixing payment gateway errors.",
    "question": "This sprint goal is primarily focused on:",
    "options": [
      "Developing a new MBI",
      "Enhancing the MVP",
      "Creating a prototype",
      "Performing defect repair on the MVP"
    ],
    "correctAnswer": "Performing defect repair on the MVP",
    "explanation": "The work corrects defects in existing functionality rather than adding new features."
  },
  //7
  {
    "scenario": "At a project kickoff, a sponsor signs a document authorizing the project and granting authority to the project manager.",
    "question": "This document is an example of a:",
    "options": [
      "Project Deliverable",
      "Project Management Plan",
      "Project Artifact",
      "Project Document"
    ],
    "correctAnswer": "Project Artifact",
    "explanation": "The project charter is a foundational project artifact that formally authorizes the project."
  },
  //8
  {
    "scenario": "A graphic designer shares a .psd source file of a banner ad for review during execution.",
    "question": "This file is best classified as a:",
    "options": [
      "Project Deliverable",
      "Organizational Process Asset",
      "Work Performance Data",
      "Project Document"
    ],
    "correctAnswer": "Project Document",
    "explanation": "The source file is a working project document used to create the final deliverable."
  },
  //9
  {
    "scenario": "At project close, the PM archives the final system, as-built diagrams, and signed acceptance form.",
    "question": "These items collectively represent the project's:",
    "options": [
      "Project Management Plan",
      "Final Product and Project Documents",
      "Formal Acceptance of Deliverables",
      "Business Documents"
    ],
    "correctAnswer": "Formal Acceptance of Deliverables",
    "explanation": "These artifacts confirm that deliverables have been formally accepted and the project scope is complete."
  },
  //10
  {
    "scenario": "A QA engineer finds a bug and the development team fixes it so the function works correctly.",
    "question": "This is an example of:",
    "options": [
      "Preventive Action",
      "Corrective Action",
      "Defect Repair",
      "Quality Control"
    ],
    "correctAnswer": "Defect Repair",
    "explanation": "Defect repair is the activity of correcting a product flaw so it meets its requirements."
  }
]

export default quizQuestions;

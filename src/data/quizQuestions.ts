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
]

export default quizQuestions;

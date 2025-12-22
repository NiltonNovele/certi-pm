const scrumQuestions: Question[] = [
  // 1
  {
    scenario: "",
    question: "1.	A Scrum Team avoids discussing real problems in Retrospectives. What should the Scrum Master do?",
    options: [
      "Introduce anonymous feedback tools",
      "Ask management to attend Retrospectives",
      "Coach the team to build psychological safety",
      "Change the Retrospective format"
    ],
    correctAnswer: "Coach the team to build psychological safety",
    explanation: "Meaningful inspection and adaptation require trust and safety. A Scrum Master addresses root causes (fear, lack of trust), not surface symptoms. Tools may help temporarily but do not create trust. Management presence often increases fear and silence. Format changes do not fix behavioural issues."
  },
  // 2
  {
    scenario: "",
    question: "2.	A Product Owner prioritises backlog items based on stakeholder pressure rather than value. What should the Scrum Master do?",
    options: [
      "Escalate to senior management",
      "Coach the Product Owner on value-based ordering",
      "Let Developers challenge the Product Owner",
      "Accept it as the Product Owner’s decision"
    ],
    correctAnswer: "Coach the Product Owner on value-based ordering",
    explanation: "The Scrum Master is accountable for coaching the Product Owner in value maximisation and effective backlog management. Escalation prevents learning and collaboration. Developers challenging ordering creates role conflict. Passive stance ignores Scrum Master accountability."
  },
  // 3
  {
    scenario: "",
    question: "Mid-Sprint, Developers realise they cannot meet the Sprint Goal unless scope is reduced. What should happen?",
    options: [
      "Cancel the Sprint",
      "Developers renegotiate scope with the Product Owner",
      "Scrum Master decides what to drop",
      "Developers work overtime"
    ],
    correctAnswer: "Developers renegotiate scope with the Product Owner",
    explanation: "Sprint scope is negotiable; the Sprint Goal is not. Collaboration between Developers and Product Owner preserves focus and value. Sprint cancellation is rare and only by Product Owner. Scrum Master does not manage scope. Violates sustainable pace."
  },
  // 4
  {
    scenario: "",
    question: "The Definition of Done differs per Developer. What should the Scrum Master do?",
    options: [
      "Enforce a strict Definition of Done",
      "Facilitate creation of a shared Definition of Done",
      "Let it evolve naturally",
      "Ask the Product Owner to define it"
    ],
    correctAnswer: "Facilitate creation of a shared Definition of Done",
    explanation: "A shared Definition of Done ensures transparency and consistent quality. Facilitation supports self-management. Enforcement is command-and-control. Inconsistent quality undermines transparency. Product Owner does not define technical quality."
  },
  // 5
  {
    scenario: "",
    question: "Stakeholders demand fixed scope and dates. What should the Scrum Master do?",
    options: [
      "Agree to keep stakeholders happy",
      "Educate stakeholders on empiricism",
      "Ask Developers for more precise estimates",
      "Switch to Waterfall"
    ],
    correctAnswer: "Educate stakeholders on empiricism",
    explanation: "Scrum is empirical. Educating stakeholders aligns expectations with uncertainty and learning. Agreeing with the sake of keeping stakeholders happy sacrifices agility and transparency. Educating stakeholders on empiricism creates false certainty. Switching to waterfall abandons Scrum."
  },
  // 6
  {
    scenario: "",
    question: "Sprint Reviews are treated as demos only. What should the Scrum Master do?",
    options: [
      "Shorten the Sprint Review",
      "Replace it with written reports",
      "Facilitate collaborative inspection and adaptation",
      "Invite only executives"
    ],
    correctAnswer: "Facilitate collaborative inspection and adaptation",
    explanation: "Sprint Reviews exist to inspect outcomes and adapt plans collaboratively with stakeholders. Duration is not the problem. Replacing sprint reviews with written reports reduces transparency and interaction. Inviting only executives limits feedback diversity."
  },
  // 7
  {
    scenario: "",
    question: "Developers frequently ask the Scrum Master to make decisions. What does this indicate?",
    options: [
      "High trust",
      "Healthy delegation",
      "Lack of self-management",
      "Strong leadership"
    ],
    correctAnswer: "Lack of self-management",
    explanation: "Self-management requires decision-making autonomy. Dependence indicates low maturity. Trust does not equal dependency. Delegation goes the opposite direction. Leadership is distributed, not centralised."
  },
  // 8
  {
    scenario: "",
    question: "Management compares velocities across teams. What should the Scrum Master do?",
    options: [
      "Normalise velocities",
      "Explain that velocity is team-specific",
      "Increase estimation accuracy",
      "Accept comparison"
    ],
    correctAnswer: "Explain that velocity is team-specific",
    explanation: "Velocity is a forecasting tool, not a performance metric. Normalizing velocity manipulates data. Increasing estimation accuracy does not address misuse. Accepting comparison enables harmful behaviour."
  },
  // 9
  {
    scenario: "",
    question: "Teams depend on a shared component team. What should the Scrum Master do?",
    options: [
      "Accept the dependency",
      "Add buffers",
      "Coach management on reducing dependencies",
      "Track dependencies"
    ],
    correctAnswer: "Coach management on reducing dependencies",
    explanation: "A Scrum Master addresses system-level impediments, not just team issues. Accepting the dependency is passive and anti-agile. Adding buffers treats symptoms. Transparency without change is insufficient."
  },
  // 10
  {
    scenario: "",
    question: "Improvements are never implemented. What should the Scrum Master focus on?",
    options: [
      "Fewer action items",
      "Assigning owners",
      "Making improvements visible and inspectable",
      "New facilitation techniques"
    ],
    correctAnswer: "Making improvements visible and inspectable",
    explanation: "Inspection and adaptation require visibility and follow-up. Quantity is not the issue. Ownership alone doesn’t ensure learning. Techniques don’t solve accountability gaps."
  },
  // 11
  {
    scenario: "",
    question: "If senior managers attend the Daily Scrum, what should the Scrum Master?",
    options: [
      "Allow it",
      "Cancel the Daily Scrum",
      "Educate on its purpose",
      "Shorten it"
    ],
    correctAnswer: "Educate on its purpose",
    explanation: "Understanding purpose prevents misuse while preserving the event. Allowing senior managers to attend undermines self-management. Cancelling the daily scrum is overreaction. Shortening the daily scrum is only symptom-focused."
  },
  // 12
  {
    scenario: "",
    question: "When developers argue frequently. The Scrum Master should:",
    options: [
      "Decide who is right",
      "Escalate",
      "Facilitate constructive conflict",
      "Separate them"
    ],
    correctAnswer: "Facilitate constructive conflict",
    explanation: "Healthy conflict drives learning when facilitated well. Deciding who is right removes ownership. Escalation avoids growth. Separating the developers only treats symptoms."
  },
  // 13
  {
    scenario: "",
    question: "The Product Backlog is unclear. So the Scrum Master should:",
    options: [
      "Rewrite it",
      "Coach the Product Owner",
      "Ask Developers to fix it",
      "Ignore it"
    ],
    correctAnswer: "Coach the Product Owner",
    explanation: "Backlog clarity is the Product Owner’s accountability; the Scrum Master coaches."
  },
  // 14
  {
    scenario: "",
    question: "If the Sprint Goals are vague, the Scrum Master should?",
    options: [
      "Define them",
      "Facilitate better Sprint Planning",
      "Shorten the Sprint",
      "Enforce templates"
    ],
    correctAnswer: "Facilitate better Sprint Planning",
    explanation: "The Scrum Master facilitates quality planning without taking ownership. The Scrum Master should not define the Sprint Goal. Shortening the Sprint avoids the real issue. Enforcing templates limits thinking."
  },
  // 15
  {
    scenario: "",
    question: "15.	Scrum Master is primarily expected to:",
    options: [
      "Accept hierarchy",
      "Coach managers on self-management",
      "Ask Developers to comply",
      "Ignore it"
    ],
    correctAnswer: "Coach managers on self-management",
    explanation: "Scrum Masters challenge organisational impediments. Accepting hierarchy is anti-agile. Asking developers to comply disempowers the team. Doing nothing is passive."
  },
  // 16
  {
    scenario: "",
    question: "Best stance?",
    options: [
      "Expert",
      "Servant-Leader",
      "Project Manager",
      "Controller"
    ],
    correctAnswer: "Servant-Leader",
    explanation: "Servant leadership enables autonomy and learning. Expertise over-relies on authority. Project Manager is not a Scrum role. Passiveness is anti-Scrum."
  },
  // 17
  {
    scenario: "",
    question: "The Team wants a Definition of Ready. So the Scrum Master should:",
    options: [
      "Forbid it",
      "Encourage experimentation and inspect impact",
      "Enforce strict rules",
      "Ignore the request"
    ],
    correctAnswer: "Encourage experimentation and inspect impact",
    explanation: "Scrum favours empiricism over dogma. Forbidding it is dogmatic. Enforcing strict rules reduces flexibility. Ignoring the request misses coaching opportunity."
  },
  // 18
  {
    scenario: "",
    question: "If the Team works overtime every Sprint, the Scrum Master should:",
    options: [
      "Praise commitment",
      "Coach sustainable pace",
      "Reduce scope unilaterally",
      "Add more people"
    ],
    correctAnswer: "Coach sustainable pace",
    explanation: "Sustainability is a Scrum principle. Praising it encourages burnout. Reducing scope unilaterally oversteps role. Consider Brooks’ Law before adding more people."
  },
  // 19
  {
    scenario: "",
    question: "If there is no Product Goal, the Scrum Master should?",
    options: [
      "Create one",
      "Coach the Product Owner",
      "Ask stakeholders",
      "Ignore it"
    ],
    correctAnswer: "Coach the Product Owner",
    explanation: "Product Goal is the Product Owner’s accountability. Scrum should not create it, else it is role violation. Asking stakeholders dilutes accountability. Ignoring it undermines focus."
  },
  // 20
  {
    scenario: "",
    question: "Hiding problems violates which value most?",
    options: [
      "Focus",
      "Respect",
      "Openness",
      "Courage"
    ],
    correctAnswer: "Openness",
    explanation: "Transparency depends on openness. Focus, respect and courage are relevant but secondary."
  },
  // 21
  {
    scenario: "",
    question: "Manipulated metrics weaken which pillar?",
    options: [
      "Transparency",
      "Inspection",
      "Adaptation",
      "Commitment"
    ],
    correctAnswer: "Transparency",
    explanation: "False data destroys transparency. Inspection and adaptation depend on transparency. Commitment is a Scrum value, not a pillar."
  },
  // 22
  {
    scenario: "",
    question: "Success is best measured by?",
    options: [
      "Team dependency",
      "Compliance",
      "Team autonomy",
      "Documentation"
    ],
    correctAnswer: "Team autonomy",
    explanation: "Autonomy indicates maturity and effectiveness. The other options are output-focused or harmful."
  },
  // 23
  {
    scenario: "",
    question: "Which is an anti-pattern?",
    options: [
      "Asking powerful questions",
      "Giving answers immediately",
      "Facilitating dialogue",
      "Challenging assumptions"
    ],
    correctAnswer: "Giving answers immediately",
    explanation: "Immediate answers create dependency. The other options are core coaching behaviours."
  },
  // 24
  {
    scenario: "",
    question: "Trust is built through?",
    options: [
      "Detailed plans",
      "Frequent inspection and adaptation",
      "Contracts",
      "Status reports"
    ],
    correctAnswer: "Frequent inspection and adaptation",
    explanation: "Trust comes from learning and delivery, not promises."
  },
  // 25
  {
    scenario: "",
    question: "Who owns quality?",
    options: [
      "Scrum Master",
      "Product Owner",
      "Developers",
      "Entire Scrum Team"
    ],
    correctAnswer: "Entire Scrum Team",
    explanation: "Quality is a shared accountability."
  },
  // 26
  {
    scenario: "",
    question: "The Product Owner can change Sprint scope at any time to maximise value.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "While the Product Owner owns value, Sprint scope changes are negotiated with Developers. The Sprint Goal provides focus and stability."
  },
  // 27
  {
    scenario: "",
    question: "27.	If a Scrum Team consistently meets Sprint Goals, the Scrum Master’s work is mostly complete.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "Meeting Sprint Goals does not guarantee long-term value delivery, organisational agility nor sustainable pace. The Scrum Master works beyond the team, addressing systemic impediments and organisational change."
  },
  // 28
  {
    scenario: "",
    question: "A Definition of Ready is required by Scrum to improve Sprint Planning effectiveness.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "Scrum does not define or require a Definition of Ready. Teams may experiment with it, but it is not mandatory. Treating it as a rule reduces flexibility."
  },
  // 29
  {
    scenario: "",
    question: "A Scrum Master should challenge organisational policies that prevent Scrum Teams from being self-managing.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "The Scrum Master is accountable for removing impediments, including organisational and cultural barriers. This requires coaching leaders, making systemic issues visible and acting as a change agent."
  },
  // 30
  {
    scenario: "",
    question: "Who can cancel a Sprint?",
    options: ["Scrum Master", "Developers", "Product Owner", "Stakeholders"],
    correctAnswer: "Product Owner",
    explanation: "Only the Product Owner can cancel when the Sprint Goal becomes obsolete."
  },
    {
    scenario: "A Product Owner frequently changes priorities during the Sprint and justifies it by saying “maximising value is my accountability.” Developers are frustrated and losing focus.",
    question: "What is the best action for the Scrum Master?",
    options: [
      "Ask Developers to accept the changes because the Product Owner owns value",
      "Facilitate a discussion about the Sprint Goal, value, and focus",
      "Escalate the issue to senior management",
      "Ask the Product Owner to stop attending Daily Scrums"
    ],
    correctAnswer: "Facilitate a discussion about the Sprint Goal, value, and focus",
    explanation: "Maximising value does not override the need for focus. The Scrum Master facilitates a shared understanding of Sprint Goal integrity, trade-offs between responsiveness and stability and how value is maximised within a Sprint. This preserves collaboration and respects all accountabilities."
  },
  //31
  {
    scenario: "",
    question: "A Product Owner frequently changes priorities during the Sprint and justifies it by saying “maximising value is my accountability.” Developers are frustrated and losing focus. What is the best action for the Scrum Master?",
    options: [
      "Ask Developers to accept the changes because the Product Owner owns value",
      "Facilitate a discussion about the Sprint Goal, value, and focus",
      "Escalate the issue to senior management",
      "Ask the Product Owner to stop attending Daily Scrums"
    ],
    correctAnswer: "Facilitate a discussion about the Sprint Goal, value, and focus",
    explanation: "Maximising value does not override the need for focus. The Scrum Master facilitates a shared understanding of Sprint Goal integrity, trade-offs between responsiveness and stability and how value is maximised within a Sprint. This preserves collaboration and respects all accountabilities."
  },
  // 32
  {
    scenario: "",
    question: "Management mandates individual performance KPIs for Developers to “increase accountability.” What should the Scrum Master do?",
    options: [
      "Help define individual KPIs aligned with Sprint Goals",
      "Explain how individual KPIs undermine team accountability and empiricism",
      "Ask Developers to accept KPIs temporarily",
      "Replace KPIs with velocity targets"
    ],
    correctAnswer: "Explain how individual KPIs undermine team accountability and empiricism",
    explanation: "Scrum is built on team accountability. Individual KPIs reduce collaboration, encourage local optimisation and distort transparency. The Scrum Master coaches leadership on system thinking."
  },
  // 33
  {
    scenario: "",
    question: "A Scrum Team’s velocity is increasing every Sprint, but customer satisfaction is declining. What should the Scrum Master focus on first?",
    options: [
      "Improving estimation accuracy",
      "Facilitating a conversation about outcomes versus outputs",
      "Slowing the team down",
      "Asking management to redefine success metrics"
    ],
    correctAnswer: "Facilitating a conversation about outcomes versus outputs",
    explanation: "Scrum emphasises value over output. The key issue is not speed but whether delivered increments achieve desired outcomes and alignment with Product Goals and customer needs. The Scrum Master creates awareness before proposing changes."
  },
  // 34
  {
    scenario: "",
    question: "A Scrum Team works well, but organisational policies require multiple approvals before release, delaying feedback by months. What is the most appropriate Scrum Master response?",
    options: [
      "Accept the policies as external constraints",
      "Help the team plan releases less frequently",
      "Coach management on the cost of delayed feedback and explore alternatives",
      "Create detailed release documentation to speed approvals"
    ],
    correctAnswer: "Coach management on the cost of delayed feedback and explore alternatives",
    explanation: "The Scrum Master acts beyond the team, makes systemic impediments visible and coaches leadership on flow, risk, and feedback loops. This aligns with the Scrum Master’s role as a change agent."
  },
  // 35
  {
    scenario: "",
    question: "A Scrum Master should resolve conflicts within the Scrum Team to maintain harmony and productivity.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "The Scrum Master facilitates conflict rather than resolving it for the team. Healthy conflict encourages diverse perspectives, leads to better decisions and builds team maturity."
  },
  // 36
  {
    scenario: "",
    question: "Velocity can be used to compare the productivity of different Scrum Teams if they use the same estimation technique.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "Velocity is context-specific and meaningful only to the team that generates it. Using velocity as a comparison metric destroys transparency."
  },
  // 37
  {
    scenario: "",
    question: "Which of the following are the accountabilities defined in Scrum?",
    options: [
      "Project Manager, Product Owner, Developers",
      "Product Owner, Scrum Master, Developers",
      "Scrum Master, Team Lead, Developers",
      "Product Owner, Scrum Master, Testers"
    ],
    correctAnswer: "Product Owner, Scrum Master, Developers",
    explanation: "The Scrum Guide defines three accountabilities: Product Owner, Scrum Master and Developers. Together they form the Scrum Team."
  },
  // 38
  {
    scenario: "",
    question: "What is the maximum length of a Sprint?",
    options: ["Two weeks", "One calendar month", "Four weeks excluding holidays", "No fixed limit"],
    correctAnswer: "One calendar month",
    explanation: "The Scrum Guide states that a Sprint is one month or less."
  },
  // 39
  {
    scenario: "",
    question: "Who has the authority to cancel a Sprint?",
    options: ["Scrum Master", "Developers", "Product Owner", "Stakeholders"],
    correctAnswer: "Product Owner",
    explanation: "Only the Product Owner may cancel a Sprint, and only if the Sprint Goal becomes obsolete."
  },
  // 40
  {
    scenario: "",
    question: "What is the primary purpose of the Daily Scrum?",
    options: [
      "Report progress to management",
      "Inspect progress toward the Sprint Goal and adapt the plan",
      "Update the Product Backlog",
      "Resolve technical issues"
    ],
    correctAnswer: "Inspect progress toward the Sprint Goal and adapt the plan",
    explanation: "The Daily Scrum exists to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as needed."
  },
  // 41
  {
    scenario: "",
    question: "Who is accountable for ordering the Product Backlog?",
    options: ["Scrum Master", "Developers", "Product Owner", "Stakeholders"],
    correctAnswer: "Product Owner",
    explanation: "The Scrum Guide clearly assigns Product Backlog ordering to the Product Owner."
  },
  // 42
  {
    scenario: "",
    question: "Which statement best describes a Product Increment?",
    options: [
      "Any work completed during the Sprint",
      "A potentially releasable, usable version of the product",
      "All Product Backlog items selected for the Sprint",
      "A prototype for stakeholder review"
    ],
    correctAnswer: "A potentially releasable, usable version of the product",
    explanation: "An Increment must be usable, potentially releasable and meet the Definition of Done (DoD)."
  },
  // 43
  {
    scenario: "",
    question: "Which statement about the Definition of Done is correct?",
    options: [
      "It is optional and rarely needed",
      "It describes when work is ready to start",
      "It creates transparency on what “Done” means",
      "It is defined only by the Product Owner"
    ],
    correctAnswer: "It creates transparency on what “Done” means",
    explanation: "The Definition of Done creates shared understanding and ensures transparency and quality. Scrum requires a Definition of Done."
  },
  // 44
  {
    scenario: "",
    question: "Which of the following is NOT a Scrum Value?",
    options: ["Openness", "Respect", "Accountability", "Courage"],
    correctAnswer: "Accountability",
    explanation: "The five Scrum Values are: Commitment, Focus, Openness, Respect and Courage."
  },
  // 45
  {
    scenario: "",
    question: "What is the main outcome of a Sprint Review?",
    options: [
      "Approval of completed work",
      "Updated Product Backlog",
      "Performance evaluation of the Scrum Team",
      "A detailed project plan"
    ],
    correctAnswer: "Updated Product Backlog",
    explanation: "The Sprint Review results in inspection of the Increment and adaptation of the Product Backlog."
  },
  // 46
  {
    scenario: "",
    question: "Which is a core accountability of the Scrum Master?",
    options: [
      "Assigning tasks to Developers",
      "Maximising product value",
      "Establishing Scrum as defined in the Scrum Guide",
      "Estimating Product Backlog items"
    ],
    correctAnswer: "Establishing Scrum as defined in the Scrum Guide",
    explanation: "The Scrum Master is accountable for establishing Scrum, coaching the organisation and team and ensuring Scrum is understood and enacted."
  },
  // 47
  {
    scenario: "",
    question: "A Scrum Team repeatedly ignores the Definition of Done to “meet deadlines.” What is the most appropriate Scrum Master response?",
    options: [
      "Enforce the Definition of Done and reject incomplete work",
      "Escalate to management to enforce quality",
      "Coach the Scrum Team on transparency, risk, and long-term value",
      "Allow exceptions temporarily to maintain trust"
    ],
    correctAnswer: "Coach the Scrum Team on transparency, risk, and long-term value",
    explanation: "The Scrum Master coaches understanding of why the Definition of Done exists: transparency, risk reduction, and value protection."
  },
  // 48
  {
    scenario: "",
    question: "The Product Owner insists on adding work mid-Sprint due to a “high-value opportunity.” What should guide the decision?",
    options: [
      "Stakeholder urgency",
      "The Product Owner’s authority",
      "The Sprint Goal",
      "The Developers’ workload"
    ],
    correctAnswer: "The Sprint Goal",
    explanation: "The Sprint Goal is the single objective of the Sprint and provides decision-making guidance when trade-offs arise."
  },
  // 49
  {
    scenario: "",
    question: "Which situation most clearly breaks empiricism?",
    options: [
      "Developers re-estimate backlog items",
      "Velocity is used to forecast",
      "Metrics are manipulated to look good",
      "Stakeholders disagree with priorities"
    ],
    correctAnswer: "Metrics are manipulated to look good",
    explanation: "Empiricism depends on transparency. Manipulated metrics destroy transparency and invalidate inspection and adaptation."
  },
  // 50
  {
    scenario: "",
    question: "Which behaviour most strongly indicates a failed Sprint Review?",
    options: [
      "Few stakeholders attend",
      "No demo is shown",
      "No discussion leads to Product Backlog adaptation",
      "The meeting finishes early"
    ],
    correctAnswer: "No discussion leads to Product Backlog adaptation",
    explanation: "Without backlog adaptation, the Sprint Review loses its purpose."
  },
  // 51
  {
    scenario: "",
    question: "Developers ask the Scrum Master to assign tasks because “it’s faster.” What does this signal?",
    options: [
      "High efficiency",
      "Trust in the Scrum Master",
      "Low self-management maturity",
      "Poor Sprint Planning"
    ],
    correctAnswer: "Low self-management maturity",
    explanation: "Self-management includes deciding how work is done. Task assignment requests indicate dependency."
  },
  // 52
  {
    scenario: "",
    question: "A Scrum Team delivers regularly but lacks a Product Goal. What is the biggest risk?",
    options: [
      "Lower velocity",
      "Stakeholder dissatisfaction",
      "Optimising outputs instead of outcomes",
      "Poor Sprint Planning"
    ],
    correctAnswer: "Optimising outputs instead of outcomes",
    explanation: "Without a Product Goal, teams risk delivering features without achieving meaningful outcomes."
  },
  // 53
  {
    scenario: "",
    question: "Which situation requires the Scrum Master to take a clear stance, not remain neutral?",
    options: [
      "Two Developers disagree on a technical solution",
      "Stakeholders debate priorities",
      "Management assigns tasks to Developers",
      "Product Owner changes backlog ordering"
    ],
    correctAnswer: "Management assigns tasks to Developers",
    explanation: "Management assigning tasks violates Scrum’s self-management principle. The Scrum Master must actively challenge this."
  },
  // 54
  {
    scenario: "",
    question: "Which risk is most associated with a rigid Definition of Ready?",
    options: [
      "Lower predictability",
      "Reduced transparency",
      "Reduced adaptability",
      "Lower quality"
    ],
    correctAnswer: "Reduced adaptability",
    explanation: "A rigid DoR can prevent learning, experimentation, and responsiveness to change."
  },
  // 55
  {
    scenario: "",
    question: "Management wants higher velocity across all teams. The best Scrum Master’s response is?",
    options: [
      "Help teams estimate larger story points",
      "Normalise velocities",
      "Redirect focus to value and outcomes",
      "Introduce individual productivity metrics"
    ],
    correctAnswer: "Redirect focus to value and outcomes",
    explanation: "Velocity is an internal planning metric. Value delivery is the real measure of success."
  },
  // 56
  {
    scenario: "",
    question: "Multiple Increments are completed but never released. Which statement is most accurate?",
    options: [
      "This violates Scrum",
      "Release must happen every Sprint",
      "Increments must be releasable, not released",
      "Product Owner approval is missing"
    ],
    correctAnswer: "Increments must be releasable, not released",
    explanation: "Scrum requires Increments to be potentially releasable, not necessarily released."
  },
  // 57
  {
    scenario: "",
    question: "Which outcome best indicates Scrum Master effectiveness?",
    options: [
      "Teams follow Scrum events correctly",
      "Management is satisfied",
      "Teams solve problems without the Scrum Master",
      "Velocity increases steadily"
    ],
    correctAnswer: "Teams solve problems without the Scrum Master",
    explanation: "An effective Scrum Master creates independence, not reliance."
  },
  // 58
  {
    scenario: "",
    question: "Which is the most harmful Retrospective anti-pattern?",
    options: [
      "Low energy",
      "Few action items",
      "Same issues repeated with no change",
      "Short meeting"
    ],
    correctAnswer: "Same issues repeated with no change",
    explanation: "Failure to adapt means inspection is pointless, breaking empiricism."
  },
  // 59
  {
    scenario: "",
    question: "Who is accountable for ensuring Scrum Team transparency?",
    options: [
      "Product Owner",
      "Scrum Master",
      "Developers",
      "Entire Scrum Team"
    ],
    correctAnswer: "Entire Scrum Team",
    explanation: "Transparency is a shared responsibility, enabled by all roles."
  },
  // 60
  {
    scenario: "",
    question: "What is the primary purpose of estimation in Scrum?",
    options: [
      "To create accurate delivery commitments",
      "To enable forecasting and decision-making under uncertainty",
      "To measure team productivity",
      "To control developer performance"
    ],
    correctAnswer: "To enable forecasting and decision-making under uncertainty",
    explanation: "Scrum treats estimation as a forecasting tool, not a commitment. It supports decisions such as scope trade-offs and release planning under uncertainty."
  },
    {
    scenario: "",
    question: "Why does Scrum commonly favour relative estimation over absolute estimation?",
    options: [
      "It is faster and easier",
      "It produces more accurate numbers",
      "It reduces cognitive bias and false precision",
      "It is required by the Scrum Guide"
    ],
    correctAnswer: "It reduces cognitive bias and false precision",
    explanation: "Relative estimation reduces anchoring and false precision by comparing work items rather than predicting absolute effort. Speed is a side effect, not the core reason. Scrum does not mandate estimation techniques"
  },
  {
    scenario: "",
    question: "Which practice most clearly indicates misuse of story points?",
    options: [
      "Re-estimating backlog items as more is learned",
      "Using story points to compare teams",
      "Estimating by consensus",
      "Using historical data for forecasting"
    ],
    correctAnswer: "Using story points to compare teams",
    explanation: "Story points are team-specific. Comparing teams destroys context and encourages gaming. Re-estimation is healthy. Consensus supports shared understanding. Using historical data for forecasting aligns with empiricism"
  },
  {
    scenario: "",
    question: "Who is responsible for estimating Product Backlog items?",
    options: [
      "The Product Owner",
      "The Scrum Master",
      "The Developers",
      "Stakeholders"
    ],
    correctAnswer: "The Developers",
    explanation: "Developers estimate because they are accountable for creating the Increment and understand the work best. The PO prioritises, not estimates. The Scrum Master facilitates, not decides. Stakeholders provide input, not estimates"
  },
  {
    scenario: "",
    question: "A Scrum Team proposes stopping estimation entirely. What is the most appropriate Scrum Master response?",
    options: [
      "Reject the idea because estimation is mandatory",
      "Support the experiment and inspect its impact",
      "Escalate to management",
      "Replace story points with hours"
    ],
    correctAnswer: "Support the experiment and inspect its impact",
    explanation: "Scrum encourages experimentation. If the team can still forecast and make decisions, removing estimates may be valid. Estimation is not mandatory. No need to escalate since no rule is being broken. Hours increase false precision"
  },
  {
    scenario: "",
    question: "Which statement best reflects Scrum’s position on estimates?",
    options: [
      "Estimates are commitments to deliver scope",
      "Estimates become commitments once approved",
      "Estimates support learning and forecasting",
      "Estimates must be accurate within 10%"
    ],
    correctAnswer: "Estimates support learning and forecasting",
    explanation: "Estimates are forecasts, expected to change as knowledge increases. Scrum rejects false accuracy"
  },
  {
    scenario: "",
    question: "What is the main benefit of Planning Poker?",
    options: [
      "Faster estimation",
      "Forcing consensus",
      "Surfacing different assumptions and risks",
      "Producing statistically valid estimates"
    ],
    correctAnswer: "Surfacing different assumptions and risks",
    explanation: "The discussion triggered by divergent estimates reveals hidden complexity and risks."
  },
  {
    scenario: "",
    question: "A team’s velocity increases significantly over time. What is the most likely explanation?",
    options: [
      "Developers are working harder",
      "Estimates are inflating",
      "The team’s understanding and capability improved",
      "Scrum Master intervention"
    ],
    correctAnswer: "The team’s understanding and capability improved",
    explanation: "As teams learn the domain and reduce uncertainty, throughput often improves naturally."
  },
  {
    scenario: "",
    question: "Which statement about the Increment is true?",
    options: [
      "It must be released at the end of every Sprint",
      "It must be usable and potentially releasable",
      "It can be incomplete if time runs out",
      "It is owned by the Product Owner"
    ],
    correctAnswer: "It must be usable and potentially releasable",
    explanation: "Each Increment must be usable and meet the Definition of Done, making it potentially releasable. Release is optional. Incomplete work is not an Increment. The Increment is a Scrum Team outcome"
  },
  {
    scenario: "",
    question: "What happens during the Sprint Review?",
    options: [
      "The Scrum Team inspects the Increment and adapts the Product Backlog",
      "The Scrum Team discusses team performance",
      "The Scrum Master enforces Scrum rules",
      "Developers estimate future work"
    ],
    correctAnswer: "The Scrum Team inspects the Increment and adapts the Product Backlog",
    explanation: "The Sprint Review focuses on inspecting the Increment and adapting the Product Backlog collaboratively with stakeholders. Discussion on team performance occurs in the Sprint Retrospective. Enforcement is not the purpose. Estimation is not central to the Review"
  },
  {
    scenario: "",
    question: "What is the primary focus of the Sprint Retrospective?",
    options: [
      "Inspecting the Increment",
      "Planning the next Sprint",
      "Improving team effectiveness",
      "Reviewing velocity"
    ],
    correctAnswer: "Improving team effectiveness",
    explanation: "The Sprint Retrospective exists to plan ways to increase quality and effectiveness."
  },
  {
    scenario: "",
    question: "Which of the following is not a Scrum Value?",
    options: [
      "Focus",
      "Courage",
      "Respect",
      "Efficiency"
    ],
    correctAnswer: "Efficiency",
    explanation: "The Scrum Values are Commitment, Focus, Openness, Respect, and Courage. Efficiency is not listed."
  },
  {
    scenario: "",
    question: "What is the recommended size of a Scrum Team?",
    options: [
      "3–9 people including the Scrum Master",
      "5–11 people including all roles",
      "10 or fewer people",
      "7 ± 2 people"
    ],
    correctAnswer: "10 or fewer people",
    explanation: "The Scrum Guide states that a Scrum Team is typically 10 or fewer people, including the Product Owner and Scrum Master."
  },
  {
    scenario: "",
    question: "Which of the following is not a Product Backlog attribute?",
    options: [
      "Description",
      "Order",
      "Size",
      "Status"
    ],
    correctAnswer: "Status",
    explanation: "The Scrum Guide defines Product Backlog attributes as description, order, and size. “Status” is not included."
  },
  {
    scenario: "",
    question: "Which is a mandatory input to Sprint Planning?",
    options: [
      "Sprint Retrospective outcomes",
      "Product Backlog",
      "Velocity chart",
      "Release plan"
    ],
    correctAnswer: "Product Backlog",
    explanation: "Sprint Planning requires the Product Backlog to select items and define the Sprint Goal."
  },
  {
    scenario: "",
    question: "Who is required to attend the Daily Scrum?",
    options: [
      "Developers only",
      "Entire Scrum Team",
      "Scrum Master only",
      "Product Owner only"
    ],
    correctAnswer: "Developers only",
    explanation: "The Daily Scrum is an event for Developers. Others may attend but are not required."
  },
  {
    scenario: "",
    question: "For a one-month Sprint, what is the maximum time-box of the Sprint Review?",
    options: [
      "2 hours",
      "3 hours",
      "4 hours",
      "No time-box"
    ],
    correctAnswer: "4 hours",
    explanation: "The Scrum Guide specifies a maximum of 4 hours for the Sprint Review for a one-month Sprint."
  },
  {
    scenario: "",
    question: "If multiple Scrum Teams work on the same product, what is required?",
    options: [
      "A Product Owner per team",
      "One Product Backlog",
      "Separate Sprint Reviews",
      "One Scrum Master for all teams"
    ],
    correctAnswer: "One Product Backlog",
    explanation: "There must be one Product Backlog for the product, regardless of the number of teams. Scrum requires one Product Owner per product. Sprint Reviews can be joint or separate. Scrum does not mandate one Scrum Master for all teams."
  },
  {
    scenario: "",
    question: "Which artifact provides transparency of work remaining in the Sprint?",
    options: [
      "Product Backlog",
      "Sprint Backlog",
      "Increment",
      "Definition of Done"
    ],
    correctAnswer: "Sprint Backlog",
    explanation: "The Sprint Backlog makes visible the work planned and remaining for the Sprint. The product backlog shows future work. Increment shows completed work. DoD defines quality, not progress"
  },
  {
    scenario: "",
    question: "What are Developers accountable for?",
    options: [
      "Maximising value",
      "Managing stakeholders",
      "Creating a usable Increment",
      "Coaching the organisation"
    ],
    correctAnswer: "Creating a usable Increment",
    explanation: "Developers are accountable for creating a usable Increment each Sprint."
  },
  {
    scenario: "",
    question: "If a Sprint is cancelled, what happens to completed Product Backlog items?",
    options: [
      "They are discarded",
      "They must be re-estimated",
      "They are reviewed and accepted if they meet the Definition of Done",
      "They are automatically released"
    ],
    correctAnswer: "They are reviewed and accepted if they meet the Definition of Done",
    explanation: "Completed items that meet the Definition of Done are reviewed and may be accepted, even if the Sprint is cancelled."
  }
]
export default scrumQuestions;

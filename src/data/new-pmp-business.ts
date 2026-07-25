export interface QuizQuestion {
  scenario: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    scenario:
      "At project initiation, stakeholders express uncertainty about decision authority, reporting expectations, and escalation paths. The sponsor wants to avoid delays caused by unclear governance once execution begins.",

    question:
      "What should the project manager do?",

    options: [
      "Define and document a governance framework that clarifies decision authority, reporting expectations, and escalation paths.",
      "Observe how decisions are made during early execution and formalize governance practices based on actual behaviors.",
      "Rely on the sponsor to provide direction on key decisions as they arise to maintain momentum.",
      "Prioritize delivery planning activities first and address governance structures once execution stabilizes.",
    ],

    correctAnswer:
      "Define and document a governance framework that clarifies decision authority, reporting expectations, and escalation paths.",

    explanation:
      "Establishing a clear governance framework early helps align stakeholders on how decisions are made, how information is reported, and when escalation is required. This clarity reduces uncertainty, supports timely decision-making, and prevents delays once execution pressure increases.",
  },

  {
    scenario:
      "During initiation, stakeholders agree on high-level objectives but define project success differently. Some emphasize schedule and cost performance, while others focus on benefits realization and stakeholder value. The sponsor asks how project success will be measured.",

    question:
      "What should the project manager do?",

    options: [
      "Defer defining success metrics until delivery results and outcomes are visible.",
      "Use standard schedule and cost metrics to ensure consistent and objective measurement.",
      "Allow each stakeholder group to apply its own success criteria independently.",
      "Define success metrics that balance delivery performance with value and outcome realization.",
    ],

    correctAnswer:
      "Define success metrics that balance delivery performance with value and outcome realization.",

    explanation:
      "Effective governance requires a shared definition of success that reflects both delivery performance and value outcomes. Defining balanced success metrics early aligns stakeholders and supports consistent, value-informed decision-making.",
  },

  {
    scenario:
      "During planning, the project team anticipates decisions that may exceed the project manager’s authority, such as budget trade-offs and scope prioritization. The sponsor wants assurance that decisions will be escalated consistently and at the right time.",

    question:
      "What should the project manager do?",

    options: [
      "Escalate all significant decisions to governance to avoid delays.",
      "Define escalation paths and decision thresholds as part of the governance framework.",
      "Allow the team to decide when escalation is necessary on a case-by-case basis.",
      "Address escalation only when conflicts arise during execution.",
    ],

    correctAnswer:
      "Define escalation paths and decision thresholds as part of the governance framework.",

    explanation:
      "Clear escalation paths and thresholds are a core element of project governance. Defining them up front ensures timely, consistent decision-making and prevents unnecessary escalation or delays.",
  },

  {
    scenario:
      "During execution, the project team must ensure ongoing compliance with regulatory and internal requirements while delivery activities continue at pace. The sponsor asks how compliance will be supported without slowing down the project unnecessarily.",

    question:
      "What should the project manager do?",

    options: [
      "Escalate compliance monitoring to governance to manage.",
      "Pause delivery periodically to perform dedicated compliance checks.",
      "Rely on external audits to confirm compliance at key milestones.",
      "Apply compliance-supporting methods integrated into normal project activities.",
    ],

    correctAnswer:
      "Rely on external audits to confirm compliance at key milestones.",

    explanation:
      "Effective governance includes defining reporting rules that support decision-making. Aligning reporting expectations with governance needs improves clarity and avoids unnecessary reporting overhead.",
  },

  {
    scenario:
      "Early in the project, the sponsor emphasizes the importance of ethical behavior, transparency, and compliance with organizational policies. Team members come from different backgrounds and are accustomed to different ways of working.",

    question:
      "What should the project manager do?",

    options: [
      "Establish and communicate ethical and compliance expectations as part of project governance.",
      "Assume organizational policies are understood and will be followed without explicit discussion.",
      "Address ethical and compliance issues only if violations are identified during execution.",
      "Escalate ethical expectations to governance to communicate them formally to the team.",
    ],

    correctAnswer:
      "Establish and communicate ethical and compliance expectations as part of project governance.",

    explanation:
      "Project governance includes defining and reinforcing ethical behavior and compliance expectations. Establishing these expectations early promotes consistent conduct, transparency, and alignment across diverse team members.",
  },

  {
    scenario:
      "At project initiation, new regulatory, security, and sustainability requirements apply to the project. Several stakeholders assume compliance will be handled later by specialized functions. The sponsor asks how compliance will be addressed from the start.",

    question:
      "What should the project manager do?",

    options: [
      "Identify compliance requirements and integrate them into project plans.",
      "Rely on functional experts to manage compliance.",
      "Address compliance only during audits or formal reviews.",
      "Escalate compliance responsibility to governance without further analysis.",
    ],

    correctAnswer:
      "Identify compliance requirements and integrate them into project plans.",

    explanation:
      "Planning and managing compliance starts with identifying requirements and integrating them into project plans. Early action reduces risk and supports compliant delivery throughout execution.",
  },

  {
    scenario:
      "During planning, the project is subject to multiple compliance obligations, including regulatory, security, health and safety, and sustainability requirements. The sponsor asks how these obligations will be managed without treating all compliance items the same way.",

    question:
      "What should the project manager do?",

    options: [
      "Focus only on mandatory regulatory compliance and treat others as optional.",
      "Apply the same controls and reporting approach to all compliance requirements.",
      "Classify compliance requirements into categories for tailored oversight.",
      "Escalate all compliance requirements to governance for centralized control.",
    ],

    correctAnswer:
      "Classify compliance requirements into categories for tailored oversight.",

    explanation:
      "Classifying compliance requirements allows the project manager to apply appropriate oversight based on risk and impact rather than using a one-size-fits-all approach.",
  },

  {
    scenario:
      "During execution, the project operates across multiple locations with different regulatory environments. Recent changes in local practices and suppliers raise concerns about potential compliance gaps. The sponsor asks how compliance risks will be identified and addressed proactively.",

    question:
      "What should the project manager do?",

    options: [
      "Assume compliance requirements remain satisfied once project plans are approved.",
      "Identify potential compliance threats and assess their impact on project delivery.",
      "Rely on scheduled audits only to identify and address compliance issues.",
      "Escalate compliance concerns to governance without prior impact analysis.",
    ],

    correctAnswer:
      "Identify potential compliance threats and assess their impact on project delivery.",

    explanation:
      "Effective governance includes proactively identifying compliance threats and assessing their potential impact. Early analysis supports timely mitigation and reduces the risk of regulatory violations during execution.",
  },

  {
    scenario:
      "Following several recent conflicts, the project manager notices that team members and external stakeholders handle disagreements inconsistently. Some escalate issues immediately, while others avoid raising concerns altogether. As a result, similar conflicts are handled differently across the project.",

    question:
      "What should the project manager do?",

    options: [
      "Ask the sponsor to define how conflicts should be escalated and resolved.",
      "Encourage team members to resolve conflicts informally before raising them to the project level.",
      "Address conflict situations individually as they arise to minimize disruption.",
      "Communicate clear conflict management principles and expectations to both the team and stakeholders.",
    ],

    correctAnswer:
      "Communicate clear conflict management principles and expectations to both the team and stakeholders.",

    explanation:
      "Supporting compliance is most effective when methods are integrated into normal project activities. This reduces disruption while maintaining consistent adherence to requirements.",
  },

  {
    scenario:
      "During planning, the project manager identifies that failure to meet certain compliance requirements could lead to penalties, reputational damage, or operational disruption. The sponsor asks how these consequences will be considered in decision-making.",

    question:
      "What should the project manager do?",

    options: [
      "Analyze the consequences of noncompliance to inform project decisions.",
      "Assume consequences are acceptable unless compliance issues occur.",
      "Focus only on legal penalties and ignore reputational or operational impacts.",
      "Escalate all compliance consequences to governance without further analysis.",
    ],

    correctAnswer:
      "Analyze the consequences of noncompliance to inform project decisions.",

    explanation:
      "Understanding the consequences of noncompliance enables informed decisions about prioritization, controls, and trade-offs. This supports proactive risk management and responsible governance.",
  },

  {
    scenario:
      "During execution, multiple change requests are submitted that affect scope, schedule, and cost. Stakeholders are pushing for quick decisions to maintain momentum, but impacts have not yet been fully analyzed. The sponsor asks how changes will be handled.",

    question:
      "What should the project manager do?",

    options: [
      "Allow the team to implement urgent changes while conducting impact analysis in parallel to maintain progress.",
      "Perform a high-level impact assessment and approve changes, documenting details later.",
      "Apply the change control process to evaluate impacts and decision thresholds before approving any changes.",
      "Submit all change requests to governance for approval, regardless of impact, to ensure oversight.",
    ],

    correctAnswer:
      "Apply the change control process to evaluate impacts and decision thresholds before approving any changes.",

    explanation:
      "Managing and controlling changes requires using the established change control process to analyze impacts and apply decision thresholds before approval. This ensures informed, transparent decisions and maintains control while balancing delivery momentum.",
  },

  {
    scenario:
      "After several change requests are submitted, some stakeholders assume the changes are already approved and begin planning around them. Others are unsure which changes are still under review. The sponsor asks how confusion around change status will be avoided.",

    question:
      "What should the project manager do?",

    options: [
      "Allow stakeholders to track change status informally through team discussions.",
      "Communicate the status of proposed changes clearly and consistently to stakeholders.",
      "Share change decisions only after all requests are fully approved.",
      "Escalate stakeholder confusion to governance for clarification.",
    ],

    correctAnswer:
      "Communicate the status of proposed changes clearly and consistently to stakeholders.",

    explanation:
      "Effective change control includes transparent communication of change status. Clearly indicating whether changes are proposed, under review, approved, or rejected prevents assumptions and misalignment.",
  },

  {
    scenario:
      "Several change requests have been reviewed and approved. Some teams begin implementing changes immediately, while others continue working to the original plan, creating inconsistencies across deliverables. The sponsor asks how approved changes will be executed consistently.",

    question:
      "What should the project manager do?",

    options: [
      "Escalate inconsistent implementation to governance for formal enforcement only.",
      "Allow teams to implement approved changes when they are ready.",
      "Focus on updating documentation first and implement changes later.",
      "Implement approved changes in a coordinated manner and update affected plans.",
    ],

    correctAnswer:
      "Implement approved changes in a coordinated manner and update affected plans.",

    explanation:
      "Managing changes includes ensuring approved changes are implemented consistently across the project. Coordinated implementation and plan updates maintain alignment and reduce execution risk.",
  },

  {
    scenario:
      "After several changes are approved and implemented, team members continue to reference outdated project documents, leading to confusion about scope and priorities. The sponsor asks how this issue will be prevented going forward.",

    question:
      "What should the project manager do?",

    options: [
      "Update project documentation to reflect approved changes and control access to current versions.",
      "Reinforce use of approved changes through team communication without updating documents.",
      "Allow teams to update documents individually as they adapt to the changes.",
      "Escalate document usage issues to governance for formal resolution.",
    ],

    correctAnswer:
      "Update project documentation to reflect approved changes and control access to current versions.",

    explanation:
      "Managing and controlling changes includes keeping project documentation current and accessible. Updating documents and controlling access to current versions establishes a single source of truth and reduces confusion during execution.",
  },

  {
    scenario:
      "After several approved changes are implemented, the project team notices unexpected impacts on workload and delivery sequencing. Stakeholders ask whether these impacts should be addressed now or after the next review cycle.",

    question:
      "What should the project manager do?",

    options: [
      "Continue execution and address impacts during the next formal review.",
      "Assess the impacts of implemented changes and adjust plans as needed.",
      "Revert the approved changes to restore the original plan.",
      "Escalate the impacts to governance without further analysis.",
    ],

    correctAnswer:
      "Assess the impacts of implemented changes and adjust plans as needed.",

    explanation:
      "Managing changes includes monitoring their effects after implementation. Assessing impacts and adjusting plans as needed helps maintain alignment and prevents compounding issues.",
  },

  {
    scenario:
      "During execution, several impediments are reported by the team, including delayed inputs from another department and unclear decision ownership. Some impediments appear minor individually, but together they may affect delivery flow. The sponsor asks which issues require immediate attention.",

    question:
      "What should the project manager do?",

    options: [
      "Focus on impediments that already affect milestones and key deliverables.",
      "Address impediments based strictly on the order they are reported by the team.",
      "Evaluate the impact of impediments on delivery flow and prioritize them accordingly.",
      "Escalate reported impediments to governance for visibility and direction.",
    ],

    correctAnswer:
      "Evaluate the impact of impediments on delivery flow and prioritize them accordingly.",

    explanation:
      "Managing impediments requires evaluating their combined and individual impact on delivery. Prioritizing based on impact enables timely intervention before minor issues collectively disrupt flow.",
  },

  {
    scenario:
      "During execution, the team reports multiple impediments affecting different workstreams. Some issues frustrate the team but have limited delivery impact, while others threaten critical dependencies. The sponsor asks how impediments will be addressed without losing focus.",

    question:
      "What should the project manager do?",

    options: [
      "Address impediments based on team frustration levels to maintain engagement.",
      "Prioritize impediments based on impact and urgency and highlight those that threaten delivery.",
      "Focus on resolving impediments that are most visible across workstreams and key dependencies.",
      "Escalate impediments to governance to determine resolution priorities.",
    ],

    correctAnswer:
      "Prioritize impediments based on impact and urgency and highlight those that threaten delivery.",

    explanation:
      "Effective impediment management requires prioritizing issues based on impact and urgency. Highlighting impediments that threaten delivery ensures focus remains on protecting critical dependencies.",
  },

  {
    scenario:
      "An impediment affecting a critical dependency has been identified. Several resolution options exist, ranging from short-term workarounds to more permanent structural fixes. The sponsor asks how the issue should be addressed without introducing unnecessary disruption.",

    question:
      "What should the project manager do?",

    options: [
      "Apply an intervention strategy proportionate to the impediment’s impact.",
      "Implement the fastest available workaround to restore progress immediately.",
      "Delay action until a permanent solution can be fully designed.",
      "Escalate the impediment to governance to choose the intervention.",
    ],

    correctAnswer:
      "Apply an intervention strategy proportionate to the impediment’s impact.",

    explanation:
      "Effective issue management requires selecting an intervention strategy that matches the impact and urgency of the impediment. Proportionate responses minimize disruption while protecting delivery.",
  },

  {
    scenario:
      "After an intervention is applied to remove a major impediment, delivery resumes. However, the team reports that secondary issues are emerging. The sponsor asks how the situation should be managed going forward.",

    question:
      "What should the project manager do?",

    options: [
      "Escalate emerging issues to governance for direction and approval.",
      "Maintain the current intervention until delivery objectives are fully achieved.",
      "Remove the workaround and return to the original approach to restore stability.",
      "Reassess the situation and adapt the intervention as new issues and impacts emerge.",
    ],

    correctAnswer:
      "Reassess the situation and adapt the intervention as new issues and impacts emerge.",

    explanation:
      "Managing impediments and issues is an iterative activity. Ongoing reassessment allows the project manager to adapt interventions as conditions change and address secondary effects before they disrupt delivery.",
  },

  {
    scenario:
      "During execution, a previously identified risk begins to materialize and is now causing delays in a dependent activity. The team continues to track it as a risk, while delivery impact is increasing. The sponsor asks how the situation should be handled.",

    question:
      "What should the project manager do?",

    options: [
      "Continue managing it as a risk while monitoring the effectiveness of planned responses.",
      "Treat the situation as an issue and take action to address the delivery impact.",
      "Update the risk register and review the situation at the next risk review meeting.",
      "Escalate the situation to governance for awareness before taking corrective action.",
    ],

    correctAnswer:
      "Treat the situation as an issue and take action to address the delivery impact.",

    explanation:
      "When a risk materializes and begins to affect delivery, it becomes an issue. Managing it as an issue enables immediate corrective action to reduce impact and restore delivery flow.",
  },

  {
    scenario:
      "Early in execution, the environment shows increasing uncertainty due to external dependencies, technology changes, and resource availability. Some team members believe risks should be addressed only when issues arise. The sponsor asks how risks will be managed proactively.",

    question:
      "What should the project manager do?",

    options: [
      "Focus on impediments that already affect milestones and key deliverables.",
      "Address impediments based strictly on the order they are reported by the team.",
      "Evaluate the impact of impediments on delivery flow and prioritize them accordingly.",
      "Escalate reported impediments to governance for visibility and direction.",
    ],

    correctAnswer:
      "Address impediments based strictly on the order they are reported by the team.",

    explanation:
      "Proactive risk management begins with early identification and documentation. This enables analysis, monitoring, and timely responses before risks materialize and affect delivery.",
  },

  {
    scenario:
      "After identifying several risks, the team has limited time and data to analyze them in depth. Some stakeholders suggest treating all risks the same to save time, while others want to focus only on the most visible threats. The sponsor asks how risk analysis will be performed.",

    question:
      "What should the project manager do?",

    options: [
      "Focus analysis on risks that are most visible to stakeholders to maintain confidence and support.",
      "Apply a uniform level of analysis to all identified risks to ensure consistency across decisions.",
      "Prioritize risks using likelihood and impact and adjust the depth of analysis based on exposure.",
      "Request governance direction on the analysis approach before prioritizing identified risks.",
    ],

    correctAnswer:
      "Prioritize risks using likelihood and impact and adjust the depth of analysis based on exposure.",

    explanation:
      "Using likelihood and impact enables proportional analysis and ensures limited time and data are focused on the most significant risks.",
  },

  {
    scenario:
      "During execution, several risks are being tracked and responses have been planned. However, conditions are changing and some risks appear to be increasing in likelihood while others are becoming less relevant. The sponsor asks how risk exposure will be kept current.",

    question:
      "What should the project manager do?",

    options: [
      "Escalate observed changes in risk exposure to governance without updating risk documentation.",
      "Maintain the original risk assessments to preserve consistency with the approved baseline.",
      "Focus monitoring efforts only on risks that already have approved response plans in place.",
      "Monitor risks regularly and update risk assessments and response strategies as conditions evolve.",
    ],

    correctAnswer:
      "Monitor risks regularly and update risk assessments and response strategies as conditions evolve.",

    explanation:
      "Risk management is a continuous activity. Regular monitoring and updating of assessments and responses ensures that risk exposure reflects current conditions and supports timely, informed action.",
  },

  {
    scenario:
      "Early in the project, stakeholders have different expectations about how risks will be identified, analyzed, and addressed. Some expect detailed analysis for every risk, while others want a lightweight approach to maintain speed. The sponsor asks how risk management will be structured.",

    question:
      "What should the project manager do?",

    options: [
      "Define a tailored risk approach with roles, thresholds, and analysis depth based on exposure.",
      "Require the same detailed quantitative analysis for all risks to ensure rigor and consistency.",
      "Manage risks through informal team discussions and track only major risks as they arise.",
      "Ask governance to define the risk approach and then align the project to that decision.",
    ],

    correctAnswer:
      "Define a tailored risk approach with roles, thresholds, and analysis depth based on exposure.",

    explanation:
      "A tailored approach sets clear expectations and ensures the level of analysis is proportionate to risk exposure. Defining roles, thresholds, and analysis depth balances rigor with speed and supports consistent decision-making.",
  },

  {
    scenario:
      "Early in the project, stakeholders have different expectations about how risks will be identified, analyzed, and addressed. Some expect detailed analysis for every risk, while others want a lightweight approach to maintain speed. The sponsor asks how risk management will be structured.",

    question:
      "What should the project manager do?",

    options: [
      "Update the risk register selectively when high-impact risks require immediate attention.",
      "Allow teams to track risks locally and consolidate information only before major reviews.",
      "Use a centralized risk register that is actively maintained and reviewed at agreed intervals.",
      "Assign ownership of risk tracking to governance to ensure consistency and oversight.",
    ],

    correctAnswer:
      "Use a centralized risk register that is actively maintained and reviewed at agreed intervals.",

    explanation:
      "A single, actively maintained risk register provides consistent, current risk information. Regular review supports prioritization, accountability, and timely decision-making as risk exposure evolves.",
  },

  {
    scenario:
      "During execution, the team identifies several process improvements that could reduce rework and improve delivery flow. However, lessons learned are currently captured only at project closure. The sponsor asks how continuous improvement will be supported during the project.",

    question:
      "What should the project manager do?",

    options: [
      "Apply lessons learned during execution to improve ongoing project performance.",
      "Capture lessons learned only at project closure to avoid disruption.",
      "Allow each team to decide independently whether to apply improvements.",
      "Escalate improvement decisions to governance for approval.",
    ],

    correctAnswer:
      "Apply lessons learned during execution to improve ongoing project performance.",

    explanation:
      "Continuous improvement requires using lessons learned throughout execution, not only at closure. Applying insights as they emerge improves performance and reduces repeated issues.",
  },

  {
    scenario:
      "As improvement actions are implemented during the project, some processes become outdated and no longer reflect current ways of working. Team members continue to follow old procedures, creating inefficiencies. The sponsor asks how continuous improvement will be sustained.",

    question:
      "What should the project manager do?",

    options: [
      "Submit process updates to governance for formal approval before implementation.",
      "Maintain existing processes to preserve stability and avoid frequent changes.",
      "Allow teams to adjust processes locally without formal documentation.",
      "Update processes to reflect current practices and incorporate lessons learned.",
    ],

    correctAnswer:
      "Update processes to reflect current practices and incorporate lessons learned.",

    explanation:
      "Sustaining continuous improvement requires that processes evolve with actual practices. Updating processes and incorporating lessons learned ensures improvements are retained and applied consistently across the project.",
  },

  {
    scenario:
      "During execution, several improvements prove effective and are repeatedly applied by the team. However, these practices are not documented outside the project, limiting reuse in future initiatives. The sponsor asks how these improvements will be preserved.",

    question:
      "What should the project manager do?",

    options: [
      "Keep improvement practices within the project team to maintain flexibility.",
      "Capture and update improvement practices in organizational process assets.",
      "Record improvement practices informally for reference during the project.",
      "Escalate responsibility for documenting improvements to governance.",
    ],

    correctAnswer:
      "Capture and update improvement practices in organizational process assets.",

    explanation:
      "Sustaining continuous improvement requires that effective practices are captured and shared beyond the project. Updating organizational process assets enables organizational learning and reuse in future initiatives.",
  },

  {
    scenario:
      "Midway through execution, recurring issues continue to appear despite being discussed in prior retrospectives. Lessons learned are documented, but teams do not consistently apply them to current work. The sponsor asks how continuous improvement will translate into better results.",

    question:
      "What should the project manager do?",

    options: [
      "Allow teams to choose which lessons to apply locally.",
      "Continue documenting lessons learned for use in future projects.",
      "Integrate lessons learned into current work practices.",
      "Escalate limited adoption of lessons learned to governance.",
    ],

    correctAnswer:
      "Integrate lessons learned into current work practices.",

    explanation:
      "Continuous improvement requires applying lessons learned to ongoing work. Integrating them into current practices helps prevent recurrence of known issues and improves results.",
  },

  {
    scenario:
      "During execution, feedback indicates that some deliverables meet technical requirements but fall short of user expectations. The team focuses on meeting specifications, while feedback is captured but not acted upon. The sponsor asks how improvement will be driven.",

    question:
      "What should the project manager do?",

    options: [
      "Escalate feedback concerns to governance for decision.",
      "Continue delivering to specifications to avoid scope creep.",
      "Capture feedback for review after project completion.",
      "Use feedback to adjust approaches and improve outcomes.",
    ],

    correctAnswer:
      "Use feedback to adjust approaches and improve outcomes.",

    explanation:
      "Continuous improvement relies on using feedback to refine approaches and better meet expectations. Acting on feedback during delivery improves outcomes and satisfaction.",
  },

  {
    scenario:
      "Early in execution, Senior Leadership introduces new ways of working that differ from existing organizational norms. Some teams adapt quickly, while others resist the changes and continue using familiar practices. The sponsor asks how adoption will be supported.",

    question:
      "What should the project manager do?",

    options: [
      "Assess organizational culture and tailor change actions to improve adoption and sustainment.",
      "Enforce the new ways of working uniformly across teams to accelerate consistent adoption.",
      "Let teams decide how and when to adopt the new practices based on local preferences.",
      "Escalate resistance to governance to mandate compliance and resolve adoption delays.",
    ],

    correctAnswer:
      "Assess organizational culture and tailor change actions to improve adoption and sustainment.",

    explanation:
      "Adoption improves when change actions fit the organization’s culture and resistance drivers. Tailoring the approach supports engagement, reduces friction, and increases the likelihood of sustained adoption.",
  },

  {
    scenario:
      "Midway through execution, an organizational restructuring changes reporting lines and decision authority for several project stakeholders. The team is uncertain how this will affect approvals and day-to-day coordination. The sponsor asks how the project team will adapt.",

    question:
      "What should the project manager do?",

    options: [
      "Pause affected work until the organization completes the restructuring.",
      "Continue operating under the original structure to maintain stability.",
      "Assess the impact of the organizational change and adjust roles accordingly.",
      "Escalate all coordination issues to governance without analysis.",
    ],

    correctAnswer:
      "Assess the impact of the organizational change and adjust roles accordingly.",

    explanation:
      "Supporting organizational change requires evaluating how changes affect roles and authority. Adjusting roles maintains alignment and reduces disruption.",
  },

  {
    scenario:
      "As new processes are introduced, some stakeholders understand the change but struggle to apply it consistently in their daily work. Adoption is uneven across teams, and benefits are not being fully realized. The sponsor asks how adoption will be improved.",

    question:
      "What should the project manager do?",

    options: [
      "Reinforce the importance of the change and rely on compliance to improve over time.",
      "Identify adoption barriers and apply targeted actions that support consistent daily use.",
      "Allow teams to adopt the new processes at different speeds based on local readiness.",
      "Escalate adoption gaps to governance to mandate consistent application across teams.",
    ],

    correctAnswer:
      "Identify adoption barriers and apply targeted actions that support consistent daily use.",

    explanation:
      "Effective adoption requires identifying practical barriers and addressing them with targeted actions that enable consistent use and benefit realization.",
  },

  {
    scenario:
      "As organizational changes are rolled out, some stakeholders feel excluded from decision-making and show reduced engagement. Adoption is slowing, and informal resistance is increasing. The sponsor asks how engagement can be improved.",

    question:
      "What should the project manager do?",

    options: [
      "Escalate stakeholder resistance to governance to enforce adoption expectations.",
      "Communicate finalized change decisions consistently without involving stakeholders further.",
      "Limit engagement to formal status updates to reduce debate and resistance.",
      "Actively engage stakeholders in change discussions and address their concerns directly.",
    ],

    correctAnswer:
      "Actively engage stakeholders in change discussions and address their concerns directly.",

    explanation:
      "Sustained change adoption depends on engagement. Involving stakeholders in discussions and addressing concerns builds trust, increases buy-in, and reduces informal resistance.",
  },

  {
    scenario:
      "As changes are introduced, some teams misunderstand how the changes affect their roles and daily responsibilities. Confusion leads to inconsistent behaviors and reduced performance. The sponsor asks how clarity will be improved.",

    question:
      "What should the project manager do?",

    options: [
      "Communicate change impacts and expectations clearly.",
      "Allow teams to interpret the changes based on their local context.",
      "Focus communication only on high-level change objectives.",
      "Escalate role confusion to governance for clarification.",
    ],

    correctAnswer:
      "Communicate change impacts and expectations clearly.",

    explanation:
      "Effective adoption requires identifying practical barriers and addressing them with targeted actions that enable consistent use and benefit realization.",
  },

  {
    scenario:
      "During execution, external conditions begin to shift, including new regulations, emerging technologies, and changes in market demand. The sponsor asks how the project will stay aware of external changes that could affect delivery.",

    question:
      "What should the project manager do?",

    options: [
      "Escalate monitoring of external changes to governance.",
      "Focus only on internal project performance indicators.",
      "React to external changes only after they affect scope or schedule.",
      "Monitor external business environment changes relevant to the project.",
    ],

    correctAnswer:
      "Monitor external business environment changes relevant to the project.",

    explanation:
      "Evaluating the external business environment includes actively monitoring relevant changes, such as regulatory, technological, and market developments. Early awareness enables timely assessment and response.",
  },

  {
    scenario:
      "Several external changes have been identified, including new regulatory guidance and shifts in customer expectations. Some changes could affect project outcomes more than others. The sponsor asks how these changes will be handled without overreacting to every signal.",

    question:
      "What should the project manager do?",

    options: [
      "Assess external changes and prioritize them according to their impact on project objectives.",
      "Address external changes using the same response approach regardless of their impact.",
      "Observe external changes and respond only after they affect project performance.",
      "Refer external changes to governance for direction before determining next steps.",
    ],

    correctAnswer:
      "Assess external changes and prioritize them according to their impact on project objectives.",

    explanation:
      "Evaluating external changes based on their impact allows proportionate responses and focuses attention on changes that meaningfully influence project outcomes.",
  },

  {
    scenario:
      "During execution, external conditions continue to evolve, with periodic updates to regulations and market trends. Some changes initially seem minor but could become more significant over time. The sponsor asks how the project will remain responsive to these evolving conditions.",

    question:
      "What should the project manager do?",

    options: [
      "Perform a one-time assessment of external conditions during planning.",
      "Review external conditions and reassess impact on the project.",
      "Monitor external changes only when major disruptions occur.",
      "Escalate all external condition updates to governance immediately.",
    ],

    correctAnswer:
      "Review external conditions and reassess impact on the project.",

    explanation:
      "Evaluating the external business environment is an ongoing activity. Regular review allows reassessment of relevance and impact as conditions evolve, supporting timely and proportionate responses.",
  },

  {
    scenario:
      "During execution, a new regulatory requirement is announced that affects only a subset of project deliverables. Ignoring the change could create compliance risk, whereas applying it broadly would increase cost and delay. The sponsor asks how the impact should be handled.",

    question:
      "What should the project manager do?",

    options: [
      "Assess the impact on scope or backlog and adjust only the affected work.",
      "Apply the regulatory requirement to scope or backlog items across the entire project.",
      "Defer changes to scope or backlog until the regulation is formally enforced.",
      "Escalate the regulatory change for direction without assessing scope or backlog impact.",
    ],

    correctAnswer:
      "Defer changes to scope or backlog until the regulation is formally enforced.",

    explanation:
      "Evaluating the specific impact on scope or backlog enables compliance while limiting unnecessary cost and schedule impact to unaffected deliverables.",
  },

  {
    scenario:
      "Several external changes are identified at the same time, including new competitor actions, regulatory updates, and supply market shifts. Addressing all of them immediately would strain project capacity. The sponsor asks how the Project Manager will decide what to act on first.",

    question:
      "What should the project manager do?",

    options: [
      "Refer external changes to governance to determine prioritization and next steps.",
      "Address external changes sequentially based on the order they were identified.",
      "Focus primarily on regulatory changes and postpone other external responses.",
      "Prioritize external changes by assessing their impact on objectives and urgency.",
    ],

    correctAnswer:
      "Prioritize external changes by assessing their impact on objectives and urgency.",

    explanation:
      "Prioritizing external changes based on impact and urgency enables proportionate responses and focuses limited capacity on what most affects project outcomes.",
  },
];

export default quizQuestions;
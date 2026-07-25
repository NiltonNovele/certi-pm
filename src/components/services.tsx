"use client";

import React, { useEffect, useMemo, useState } from "react";
import { getCalApi } from "@calcom/embed-react";
import {
  GraduationCap,
  Briefcase,
  ClipboardCheck,
  Target,
  User,
  Mail,
  Building2,
  MessageSquare,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  CalendarDays,
  ShieldCheck,
  Clock3,
  ChevronRight,
} from "lucide-react";

/* =========================
   TYPES
========================= */
interface Service {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  coverImage: string;
  icon: React.ReactNode;
}

interface IndividualService {
  id: string;
  title: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  outcome: string;
  coverImage: string;
}

/* =========================
   BUSINESS SERVICES
========================= */
const services: Service[] = [
  {
    id: "consulting",
    title: "Management & Project Consulting",
    subtitle: "Solve Problems. Create Value.",
    shortDescription:
      "Objective consulting services to improve organizational performance and decision-making.",
    longDescription:
      "We assess and support private and not-for-profit organizations to solve complex problems, create sustainable value, maximize growth, and improve performance. Our approach combines structured analysis, management insight, and practical implementation support to help organizations make better decisions and deliver measurable results.",
    coverImage: "/const.jpg",
    icon: <Briefcase className="h-5 w-5" />,
    features: [
      "Management research for decision making",
      "Organizational assessment & diagnostics",
      "Opportunity identification & solution design",
      "Implementation support & change management",
      "Objective, data-driven consultancy",
    ],
  },
  {
    id: "project-management",
    title: "Project & Program Management",
    subtitle: "Deliver with Confidence",
    shortDescription:
      "End-to-end project and program management services.",
    longDescription:
      "We manage projects and programs by ensuring the right governance, structure, and delivery approach are applied from initiation to closure. We help organizations improve coordination, reduce risk, and deliver outcomes aligned with strategic priorities.",
    coverImage: "/project.jpg",
    icon: <ClipboardCheck className="h-5 w-5" />,
    features: [
      "Project & program delivery management",
      "Predictive, Agile & Hybrid approaches",
      "Governance & lifecycle management",
      "Risk, scope & quality control",
      "Stakeholder coordination",
    ],
  },
  {
    id: "training",
    title: "Training & Capacity Building",
    subtitle: "Build Capable Project Professionals",
    shortDescription:
      "Structured training for practical project management skills.",
    longDescription:
      "We provide practical learning experiences that equip professionals and teams with tools, methods, and frameworks to plan, manage, and deliver projects effectively across different work environments.",
    coverImage: "/capac.jpg",
    icon: <GraduationCap className="h-5 w-5" />,
    features: [
      "Project management fundamentals",
      "Agile, Predictive & Hybrid delivery",
      "Practical tools & templates",
      "Instructor-led sessions",
      "Capacity building",
    ],
  },
  {
    id: "coaching",
    title: "Professional Coaching",
    subtitle: "Grow Skills. Build Leaders.",
    shortDescription:
      "Personalized coaching for professionals and leaders.",
    longDescription:
      "We support professionals through tailored coaching that strengthens leadership, improves execution, and helps individuals navigate real-world professional challenges with more confidence and clarity.",
    coverImage: "/coach.jpg",
    icon: <Target className="h-5 w-5" />,
    features: [
      "One-on-one coaching",
      "Leadership development",
      "Real-world problem solving",
      "Career growth",
      "Personalized plans",
    ],
  },
];

/* =========================
   INDIVIDUAL SERVICES
========================= */
const individualServices: IndividualService[] = [
  {
    id: "diagnosis",
    title: "Career Diagnosis Session",
    price: "$79",
    duration: "1 hour",
    description:
      "Assess your current situation, strengths, and career direction.",
    features: [
      "Competency and experience assessment",
      "Strengths and gaps identification",
      "Career goals clarification",
      "Career paths exploration",
      "30–60 day action plan",
      "Career summary report",
    ],
    outcome:
      "Clear direction, recommended career options, and actionable next steps",
    coverImage: "/coach.jpg",
  },
  {
    id: "coaching",
    title: "3-Month Career Coaching Programme",
    price: "$1,050",
    duration: "3 months",
    description:
      "Structured career transformation with weekly coaching.",
    features: [
      "Full career diagnosis",
      "Personalised roadmap",
      "Weekly coaching sessions",
      "CV & LinkedIn guidance",
      "Certification strategy",
      "Interview preparation",
    ],
    outcome: "Clear roadmap and measurable progress within 90 days",
    coverImage: "/project.jpg",
  },
  {
    id: "mentorship",
    title: "Professional Mentorship (On-Demand)",
    price: "$90+",
    duration: "Flexible",
    description:
      "Targeted guidance for real-world professional challenges.",
    features: [
      "Problem analysis",
      "Decision-making support",
      "Templates & frameworks",
      "Real-world insights",
    ],
    outcome: "Clarity, better decisions, and actionable solutions",
    coverImage: "/const.jpg",
  },
];

/* =========================
   STYLES
========================= */
const inputBase =
  "w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-red-600 focus:ring-4 focus:ring-red-100";

const inputWithIcon =
  "w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-red-600 focus:ring-4 focus:ring-red-100";

/* =========================
   COMPONENT
========================= */
const Services: React.FC = () => {
  const [mode, setMode] = useState<"business" | "individual">("business");
  const [selectedBusinessId, setSelectedBusinessId] = useState<string>(
    services[0].id
  );
  const [selectedIndividualId, setSelectedIndividualId] = useState<string>(
    individualServices[0].id
  );

  const [businessForm, setBusinessForm] = useState({
    fullName: "",
    email: "",
    organization: "",
    service: services[0].title,
    message: "",
  });

  const [businessSubmitting, setBusinessSubmitting] = useState(false);
  const [businessStatus, setBusinessStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "meetings" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  const selectedBusiness = useMemo(
    () =>
      services.find((service) => service.id === selectedBusinessId) ||
      services[0],
    [selectedBusinessId]
  );

  const selectedIndividual = useMemo(
    () =>
      individualServices.find(
        (service) => service.id === selectedIndividualId
      ) || individualServices[0],
    [selectedIndividualId]
  );

  const handleBusinessChange = (
    key: keyof typeof businessForm,
    value: string
  ) => {
    setBusinessForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleBusinessSelect = (serviceId: string) => {
    const selected = services.find((service) => service.id === serviceId);
    setSelectedBusinessId(serviceId);

    if (selected) {
      setBusinessForm((prev) => ({
        ...prev,
        service: selected.title,
      }));
    }
  };

  const handleIndividualSelect = (serviceId: string) => {
    setSelectedIndividualId(serviceId);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusinessSubmitting(true);
    setBusinessStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setBusinessStatus("success");
      setBusinessForm({
        fullName: "",
        email: "",
        organization: "",
        service: selectedBusiness.title,
        message: "",
      });
    } catch {
      setBusinessStatus("error");
    } finally {
      setBusinessSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f7f5] text-gray-900">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-200/30 blur-3xl" />
          <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          {/* Toggle */}
          <div className="mb-10 flex justify-center">
            <div className="inline-flex rounded-full border border-gray-200 bg-white p-1.5 shadow-lg">
              <button
                type="button"
                onClick={() => setMode("business")}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition sm:px-6 ${
                  mode === "business"
                    ? "bg-red-700 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Businesses
              </button>
              <button
                type="button"
                onClick={() => setMode("individual")}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition sm:px-6 ${
                  mode === "individual"
                    ? "bg-red-700 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Individuals
              </button>
            </div>
          </div>

          {/* Hero */}
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-red-700 shadow-sm">
              <Sparkles className="h-4 w-4" />
              {mode === "business" ? "Professional Services" : "Career Support"}
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              {mode === "business" ? (
                <>
                  Solutions for{" "}
                  <span className="text-red-700">organizations</span>
                </>
              ) : (
                <>
                  Growth for{" "}
                  <span className="text-red-700">professionals</span>
                </>
              )}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              {mode === "business"
                ? "We help organizations improve performance, strengthen delivery, and build long-term capability."
                : "Choose the support that fits your current stage, then schedule a meeting directly in the embedded calendar below."}
            </p>
          </div>

          {/* BUSINESS VIEW */}
          {mode === "business" && (
            <div className="space-y-8">
              <div className="rounded-[28px] border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
                      Step 1
                    </p>
                    <h2 className="text-2xl font-bold text-gray-950">
                      Select a business service
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">
                      Pick the service that best matches your organization’s
                      needs.
                    </p>
                  </div>

                  <div className="hidden items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-700 md:flex">
                    <CheckCircle2 className="h-4 w-4" />
                    Selected: {selectedBusiness.title}
                  </div>
                </div>

                <div className="mb-4 md:hidden">
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Service selector
                  </label>
                  <select
                    value={selectedBusinessId}
                    onChange={(e) => handleBusinessSelect(e.target.value)}
                    className={inputBase}
                  >
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="hidden gap-4 md:grid md:grid-cols-2 xl:grid-cols-4">
                  {services.map((service) => {
                    const isActive = selectedBusinessId === service.id;

                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleBusinessSelect(service.id)}
                        className={`group rounded-3xl border p-5 text-left transition-all duration-300 ${
                          isActive
                            ? "border-red-200 bg-red-50/70 shadow-lg shadow-red-100/40"
                            : "border-gray-200 bg-white hover:-translate-y-1 hover:shadow-lg"
                        }`}
                      >
                        <div className="mb-4 flex items-start justify-between gap-3">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                              isActive
                                ? "bg-red-700 text-white"
                                : "bg-red-50 text-red-700"
                            }`}
                          >
                            {service.icon}
                          </div>

                          {isActive && (
                            <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-red-700 shadow-sm">
                              Selected
                            </span>
                          )}
                        </div>

                        <h3 className="text-base font-bold text-gray-900">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-red-700">
                          {service.subtitle}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-gray-600">
                          {service.shortDescription}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 xl:grid-cols-12">
                <div className="xl:col-span-7">
                  <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-xl">
                    <div className="relative h-64 w-full overflow-hidden sm:h-80">
                      <img
                        src={selectedBusiness.coverImage}
                        alt={selectedBusiness.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium text-white backdrop-blur">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                            {selectedBusiness.icon}
                          </span>
                          {selectedBusiness.subtitle}
                        </div>
                        <h3 className="max-w-2xl text-2xl font-bold text-white sm:text-3xl">
                          {selectedBusiness.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
                        <div>
                          <p className="text-base leading-8 text-gray-600">
                            {selectedBusiness.longDescription}
                          </p>
                        </div>

                        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5">
                          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                            Best for
                          </h4>
                          <p className="mt-3 text-sm leading-7 text-gray-700">
                            Teams and organizations looking for structured
                            support, practical implementation, and measurable
                            results.
                          </p>
                        </div>
                      </div>

                      <div className="mt-8">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                          What’s included
                        </h4>

                        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {selectedBusiness.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3"
                            >
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />
                              <span className="text-sm leading-6 text-gray-700">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl bg-red-50 p-4">
                          <ShieldCheck className="h-5 w-5 text-red-700" />
                          <p className="mt-3 text-sm font-semibold text-gray-900">
                            Structured delivery
                          </p>
                        </div>
                        <div className="rounded-2xl bg-red-50 p-4">
                          <Clock3 className="h-5 w-5 text-red-700" />
                          <p className="mt-3 text-sm font-semibold text-gray-900">
                            Practical support
                          </p>
                        </div>
                        <div className="rounded-2xl bg-red-50 p-4">
                          <CheckCircle2 className="h-5 w-5 text-red-700" />
                          <p className="mt-3 text-sm font-semibold text-gray-900">
                            Clear outcomes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="xl:col-span-5">
                  <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-xl sm:p-8">
                    <div className="mb-8">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
                        Step 2
                      </p>
                      <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">
                        Request this service
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                        Tell us what you need and we’ll follow up with the right
                        next steps.
                      </p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Your full name"
                            value={businessForm.fullName}
                            onChange={(e) =>
                              handleBusinessChange("fullName", e.target.value)
                            }
                            className={inputWithIcon}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                          <input
                            type="email"
                            placeholder="you@example.com"
                            value={businessForm.email}
                            onChange={(e) =>
                              handleBusinessChange("email", e.target.value)
                            }
                            className={inputWithIcon}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                          Organization
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Company or institution"
                            value={businessForm.organization}
                            onChange={(e) =>
                              handleBusinessChange(
                                "organization",
                                e.target.value
                              )
                            }
                            className={inputWithIcon}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                          Service of Interest
                        </label>
                        <select
                          value={businessForm.service}
                          onChange={(e) =>
                            handleBusinessChange("service", e.target.value)
                          }
                          className={inputBase}
                          required
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service.id} value={service.title}>
                              {service.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                          Your Message
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                          <textarea
                            rows={5}
                            placeholder="Briefly describe your requirements..."
                            value={businessForm.message}
                            onChange={(e) =>
                              handleBusinessChange("message", e.target.value)
                            }
                            className="w-full resize-none rounded-2xl border border-gray-200 bg-white pl-11 pr-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-red-600 focus:ring-4 focus:ring-red-100"
                            required
                          />
                        </div>
                      </div>

                      {businessStatus === "success" && (
                        <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                          Request submitted successfully.
                        </div>
                      )}

                      {businessStatus === "error" && (
                        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                          Failed to submit request. Please try again.
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={businessSubmitting}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-red-700 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {businessSubmitting ? "Submitting..." : "Submit Request"}
                        <Send className="h-4 w-4" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* INDIVIDUAL VIEW */}
          {mode === "individual" && (
            <div className="space-y-8">
              <div className="rounded-[28px] border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
                      Step 1
                    </p>
                    <h2 className="text-2xl font-bold text-gray-950">
                      Select a support option
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">
                      Choose the option that best fits your current goals.
                    </p>
                  </div>

                  <div className="hidden items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-700 md:flex">
                    <CheckCircle2 className="h-4 w-4" />
                    Selected: {selectedIndividual.title}
                  </div>
                </div>

                <div className="mb-4 md:hidden">
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Support option
                  </label>
                  <select
                    value={selectedIndividualId}
                    onChange={(e) => handleIndividualSelect(e.target.value)}
                    className={inputBase}
                  >
                    {individualServices.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="hidden gap-4 md:grid md:grid-cols-2 xl:grid-cols-3">
                  {individualServices.map((service) => {
                    const isActive = selectedIndividualId === service.id;

                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleIndividualSelect(service.id)}
                        className={`overflow-hidden rounded-3xl border text-left transition-all duration-300 ${
                          isActive
                            ? "border-red-200 bg-red-50/70 shadow-lg shadow-red-100/40"
                            : "border-gray-200 bg-white hover:-translate-y-1 hover:shadow-lg"
                        }`}
                      >
                        <img
                          src={service.coverImage}
                          alt={service.title}
                          className="h-44 w-full object-cover"
                        />
                        <div className="p-5">
                          <div className="mb-3 flex items-start justify-between gap-3">
                            <div>
                              <h3 className="text-base font-bold text-gray-900">
                                {service.title}
                              </h3>
                              <p className="mt-1 text-sm font-semibold text-red-700">
                                {service.price} • {service.duration}
                              </p>
                            </div>

                            {isActive && (
                              <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-red-700 shadow-sm">
                                Selected
                              </span>
                            )}
                          </div>

                          <p className="text-sm leading-6 text-gray-600">
                            {service.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 xl:grid-cols-12">
                <div className="xl:col-span-7">
                  <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-xl">
                    <div className="relative h-64 w-full overflow-hidden sm:h-80">
                      <img
                        src={selectedIndividual.coverImage}
                        alt={selectedIndividual.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium text-white backdrop-blur">
                          <span>{selectedIndividual.price}</span>
                          <span>•</span>
                          <span>{selectedIndividual.duration}</span>
                        </div>
                        <h3 className="max-w-2xl text-2xl font-bold text-white sm:text-3xl">
                          {selectedIndividual.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
                        <div>
                          <p className="text-base leading-8 text-gray-600">
                            {selectedIndividual.description}
                          </p>
                        </div>

                        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5">
                          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                            Expected outcome
                          </h4>
                          <p className="mt-3 text-sm leading-7 text-gray-700">
                            {selectedIndividual.outcome}
                          </p>
                        </div>
                      </div>

                      <div className="mt-8">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                          What you get
                        </h4>

                        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {selectedIndividual.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3"
                            >
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />
                              <span className="text-sm leading-6 text-gray-700">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl bg-red-50 p-4">
                          <CalendarDays className="h-5 w-5 text-red-700" />
                          <p className="mt-3 text-sm font-semibold text-gray-900">
                            Easy scheduling
                          </p>
                        </div>
                        <div className="rounded-2xl bg-red-50 p-4">
                          <Clock3 className="h-5 w-5 text-red-700" />
                          <p className="mt-3 text-sm font-semibold text-gray-900">
                            Flexible format
                          </p>
                        </div>
                        <div className="rounded-2xl bg-red-50 p-4">
                          <ChevronRight className="h-5 w-5 text-red-700" />
                          <p className="mt-3 text-sm font-semibold text-gray-900">
                            Clear next steps
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="xl:col-span-5">
                  <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-xl sm:p-8">
                    <div className="mb-8">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
                        Step 2
                      </p>
                      <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">
                        Schedule a meeting
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                        Book your meeting directly below to discuss your goals,
                        challenges, and the best support path for you.
                      </p>
                    </div>

                    <div className="mb-6 rounded-2xl border border-red-100 bg-red-50 p-4">
                      <p className="text-sm font-medium text-red-700">
                        Selected option
                      </p>
                      <p className="mt-1 text-base font-bold text-gray-900">
                        {selectedIndividual.title}
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        {selectedIndividual.price} • {selectedIndividual.duration}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <button
                        data-cal-namespace="meetings"
                        data-cal-link="patricio.inacio/meetings"
                        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-red-700 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:bg-red-800"
                      >
                        Schedule Meeting
                        <CalendarDays className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;
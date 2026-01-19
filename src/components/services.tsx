import React, { useState } from "react";
import {
  GraduationCap,
  Briefcase,
  ClipboardCheck,
  Target,
  ChevronDown,
  ChevronUp,
  User,
  Mail,
  Building2,
  MessageSquare,
  Send,
} from "lucide-react";

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

const services: Service[] = [
  {
    id: "consulting",
    title: "Management & Project Consulting",
    subtitle: "Solve Problems. Create Value.",
    shortDescription:
      "Objective consulting services to improve organizational performance and decision-making.",
    longDescription:
      "We assess and support private and not-for-profit organizations to solve complex problems, create sustainable value, maximize growth, and improve performance. Our consulting services are grounded in management research, structured analysis, and proven project management practices. We help organizations identify opportunities, design practical solutions, and support implementation to ensure measurable results.",
    coverImage: "/const.jpg",
    icon: <Briefcase className="w-6 h-6 text-red-700" />,
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
      "We manage projects and programs by ensuring the appropriate development approach, governance structure, and delivery processes are applied for each effort. From initiation to closure, we ensure best practices are followed throughout the project management lifecycle, helping organizations deliver outcomes on time, within scope, and aligned with strategic objectives.",
    coverImage: "/project.jpg",
    icon: <ClipboardCheck className="w-6 h-6 text-red-700" />,
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
      "Structured training that equips professionals with practical project management skills.",
    longDescription:
      "We provide training and capacity-building programs that equip project professionals with the tools, techniques, and frameworks needed to manage projects and programs effectively. Our training ensures structured execution, alignment with objectives, and real-world application across different delivery environments.",
    coverImage: "/capac.jpg",
    icon: <GraduationCap className="w-6 h-6 text-red-700" />,
    features: [
      "Project management fundamentals",
      "Agile, Predictive & Hybrid delivery",
      "Practical tools & templates",
      "Instructor-led & interactive sessions",
      "Capacity building for organizations",
    ],
  },
  {
    id: "coaching",
    title: "Professional Coaching",
    subtitle: "Grow Skills. Build Leaders.",
    shortDescription:
      "Personalized coaching for project managers and leaders.",
    longDescription:
      "Our coaching services support professionals in strengthening project management capabilities, leadership skills, and career direction. Through one-on-one engagement, we help individuals apply best practices to real challenges, improve performance, and achieve professional growth.",
    coverImage: "/coach.jpg",
    icon: <Target className="w-6 h-6 text-red-700" />,
    features: [
      "One-on-one coaching",
      "Leadership & performance development",
      "Real-world problem solving",
      "Career & capability growth",
      "Personalized improvement plans",
    ],
  },
];

const Services: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  // Admin Tests
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    organization: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch("https://api.certipm.com/api/consultancy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      alert("Request submitted successfully!");

      setForm({
        fullName: "",
        email: "",
        organization: "",
        service: "",
        message: "",
      });
    } catch (err) {
      alert("Failed to submit request");
    }
  };


  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Professional Services
          </h1>
          <p className="text-gray-600 text-lg">
            We help organizations solve problems, create value, and deliver successful outcomes.
          </p>
        </div>

        {/* SERVICES */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={service.coverImage}
                alt={service.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {service.icon}
                  <h2 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                </div>

                <p className="text-sm text-gray-500 mb-3">
                  {service.subtitle}
                </p>

                <p className="text-gray-700 text-sm mb-3">
                  {service.shortDescription}
                </p>

                {expanded === service.id && (
                  <>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.longDescription}
                    </p>

                    <ul className="mb-4 space-y-1 text-sm text-gray-700">
                      {service.features.map((feature, index) => (
                        <li key={index}>✔ {feature}</li>
                      ))}
                    </ul>
                  </>
                )}

                <button
                  onClick={() =>
                    setExpanded(expanded === service.id ? null : service.id)
                  }
                  className="mt-auto flex items-center justify-center gap-2 text-red-700 font-semibold hover:underline"
                >
                  {expanded === service.id ? (
                    <>
                      View Less <ChevronUp size={18} />
                    </>
                  ) : (
                    <>
                      View Details <ChevronDown size={18} />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* REQUEST FORM */}
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
              Request a Service
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Tell us about your needs and we’ll get back to you shortly.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Your full name"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                  className="w-full pl-11 pr-4 py-3 border rounded-lg"
                />

              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full pl-11 pr-4 py-3 border rounded-lg"
                />

              </div>
            </div>

            {/* Organization */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Organization
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Company or institution"
                  value={form.organization}
                  onChange={(e) =>
                    setForm({ ...form, organization: e.target.value })
                  }
                  className="w-full pl-11 pr-4 py-3 border rounded-lg"
                />

              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Service of Interest
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={form.service}
                  onChange={(e) =>
                    setForm({ ...form, service: e.target.value })
                  } className="w-full pl-11 pr-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition">
                  <option>Select a service</option>
                  {services.map((s) => (
                    <option key={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Your Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                <textarea
                  rows={4}
                  placeholder="Briefly describe your requirements..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full pl-11 pr-4 py-3 border rounded-lg resize-none focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-red-700 text-white py-3.5 rounded-lg font-semibold hover:bg-red-800 transition-all shadow-md hover:shadow-lg"
            >
              Submit Request
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
// ...

export default Services;
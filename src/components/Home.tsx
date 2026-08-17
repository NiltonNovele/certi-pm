import { useState } from "react";
import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Award,
  Briefcase,
  GraduationCap,
  Users,
  CheckCircle,
  Building2,
  Languages,
  TrendingUp,
  ShieldCheck,
  BookOpen,
  Sparkles,
  ArrowRight,
  BadgeCheck,
  Target,
  Globe2,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

const featureCards = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Structured Learning",
    desc: "Clear learning paths aligned with PMI® frameworks and best practices.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Expert-Led Training",
    desc: "Courses delivered by certified instructors with real industry experience.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Official PMI Content",
    desc: "Authorised materials that reflect the latest global standards.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Career Impact",
    desc: "Skills and certifications that accelerate professional growth.",
  },
];

const offerCards = [
  {
    title: "Courses",
    desc: "Structured training programmes to develop essential project management skills.",
    icon: <BookOpen className="h-8 w-8 text-[#7a0b0b]" />,
  },
  {
    title: "Consultancy",
    desc: "Expert support for the implementation of methodologies, processes and best practices in projects.",
    icon: <Users className="h-8 w-8 text-[#7a0b0b]" />,
  },
  {
    title: "Certification",
    desc: "Preparation for internationally recognised project management certifications.",
    icon: <Award className="h-8 w-8 text-[#7a0b0b]" />,
  },
];

const values = [
  {
    t: "Excellence",
    d: "Deliver highest quality in courses and services.",
    icon: <Award className="h-8 w-8 text-[#7a0b0b]" />,
  },
  {
    t: "Progress",
    d: "Support continuous development for professionals and organisations.",
    icon: <TrendingUp className="h-8 w-8 text-[#7a0b0b]" />,
  },
  {
    t: "Responsibility",
    d: "Committed to every project and every student’s success.",
    icon: <ShieldCheck className="h-8 w-8 text-[#7a0b0b]" />,
  },
  {
    t: "Professionalism",
    d: "Maintain ethics, respect and integrity in all activities.",
    icon: <Briefcase className="h-8 w-8 text-[#7a0b0b]" />,
  },
];

const experienceHighlights = [
  "Project Manager – MOZA Banco",
  "Programme Manager – Project Direct",
  "Project Consultant – KOICA",
  "Civil Supervisor – Total",
  "Senior Site Agent – Stefanutti Stocks",
];

const certifications = [
  "PMP®",
  "SAFe® 6 SPC",
  "PRINCE2®",
  "PSM II™",
  "AWS Foundations",
  "ITIL 4",
];

const faqItems = [
  {
    q: "Who can benefit from Certi PM?",
    a: "Professionals, companies and students who want to develop project management skills and gain recognised certifications.",
  },
  {
    q: "Do you offer online and in-person courses?",
    a: "Yes. Our courses can be delivered online, in-person or hybrid depending on your needs.",
  },
  {
    q: "Are the certifications internationally recognised?",
    a: "Yes. We prepare you for widely recognised project management certifications aligned with international standards.",
  },
  {
    q: "What level of experience do I need to start?",
    a: "None is required. We offer beginner, intermediate and advanced training programmes.",
  },
];

const partnerLogos = [
  "/partner-logos/LANDMARK_Logo.jpeg",
  "/partner-logos/ITONYOU_Logo.jpeg",
  "/partner-logos/synctechx.png",
  "/partner-logos/PMI_Logo.jpeg",
  "/partner-logos/PMIM_Logo.jpeg",
  "/partner-logos/asc.jpeg",
  "/partner-logos/mrv.jpeg",
  "/partner-logos/enh.jpeg",
];

const sectionFade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const Home = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#f8f7f5] text-gray-900">
      {/* HERO SECTION */}
      <section className="relative isolate flex min-h-[92vh] w-full items-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <img
          src="/illus.jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          alt="Certi PM Banner"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.96),_rgba(255,255,255,0.9)_35%,_rgba(255,255,255,0.78)_65%,_rgba(248,247,245,0.98)_100%)]" />
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-red-200/30 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl sm:h-96 sm:w-96" />

        <motion.div
          className="relative z-10 mx-auto w-full max-w-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a0b0b] shadow-sm backdrop-blur sm:text-xs">
              <Sparkles className="h-4 w-4" />
              PMI® Authorised Training Partner
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#7a0b0b] sm:text-5xl lg:text-6xl xl:text-7xl">
              Project Management Consulting for Real-World Impact
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-700 sm:text-lg lg:text-xl">
              We help organisations deliver complex projects with confidence — strengthening capability, optimising processes, and building certified, PMI®️-aligned project leadership across your teams.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-700">
              <div className="flex items-center gap-3 rounded-full border border-white/80 bg-white/90 px-4 py-2.5 shadow-sm">
                <img
                  src="/atp.jpeg"
                  alt="PMI ATP Badge"
                  className="h-10 w-auto rounded shadow-sm"
                />
                <span className="font-medium">
                  First & Only PMI® ATP in Mozambique
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/choice">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-full bg-[#8b0d0d] px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-[#a11212] sm:px-10 sm:text-lg"
                >
                  <Rocket className="h-5 w-5 sm:h-6 sm:w-6" />
                  Practice Now
                </motion.button>
              </Link>

              <Link to="/courses">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-full border border-[#7a0b0b]/20 bg-white px-8 py-4 text-base font-semibold text-[#7a0b0b] shadow-sm transition-colors duration-300 hover:bg-[#7a0b0b] hover:text-white sm:px-10 sm:text-lg"
                >
                  Explore Courses
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                {
                  icon: <BadgeCheck className="h-5 w-5" />,
                  label: "Official PMI® aligned learning",
                },
                {
                  icon: <Target className="h-5 w-5" />,
                  label: "Certification-focused preparation",
                },
                {
                  icon: <Globe2 className="h-5 w-5" />,
                  label: "Global standards, local impact",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/80 bg-white/85 px-5 py-4 text-sm font-medium text-gray-700 shadow-sm backdrop-blur"
                >
                  <div className="flex items-center justify-center gap-2 text-[#7a0b0b]">
                    {item.icon}
                    <span className="text-gray-800">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT CERTI PM */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <motion.div {...sectionFade} className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#7a0b0b]/10 px-4 py-1.5 text-sm font-semibold text-[#7a0b0b]">
                <Award className="h-4 w-4" />
                About Us
              </span>

              <div>
                <h2 className="text-3xl font-extrabold leading-tight text-[#7a0b0b] sm:text-4xl lg:text-5xl">
                  Building Project Leaders for a Global Standard
                </h2>
                <p className="mt-5 text-base leading-8 text-gray-700">
                  <strong>Project Direct Lda</strong> is a specialised project management consulting firm helping professionals and organisations deliver complex projects with confidence. We combine practical expertise, structured methodologies, and internationally recognised standards to strengthen project delivery capability across every engagement.
                </p>
                <p className="mt-4 text-base leading-8 text-gray-700">
                  We are proud to be the <strong>first and only PMI® Authorized
                  Training Partner (ATP) in Mozambique</strong>, delivering official,
                  high-quality PMI-aligned training that prepares candidates to
                  succeed in real-world project environments.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {featureCards.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-[#fafafa] p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="rounded-xl bg-[#7a0b0b]/10 p-3 text-[#7a0b0b]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...sectionFade} className="relative">
              <div className="relative overflow-hidden rounded-[30px] border border-white bg-white shadow-2xl">
                <img
                  src="/illus.jpg"
                  alt="Certi PM Training Session"
                  className="h-[320px] w-full object-cover sm:h-[440px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <div className="absolute -right-3 -top-3 hidden md:block lg:-right-8 lg:-top-8">
                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
                  <img
                    src="/inst.jpeg"
                    alt="Project Management Illustration"
                    className="h-28 w-28 rounded-xl object-contain"
                  />
                </div>
              </div>

              <div className="absolute -bottom-8 left-4 right-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl sm:left-6 sm:right-auto sm:max-w-sm sm:p-5">
                <div className="flex items-center gap-4">
                  <img
                    src="/atp.jpeg"
                    alt="PMI Authorized Training Partner"
                    className="h-14 w-14 object-contain"
                  />
                  <div>
                    <p className="text-sm font-bold leading-tight text-gray-800">
                      PMI® Authorized Training Partner
                    </p>
                    <p className="text-xs text-gray-600">
                      First & Only in Mozambique
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-12 sm:h-8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <motion.div {...sectionFade}>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#7a0b0b]/10 px-4 py-1.5 text-sm font-semibold text-[#7a0b0b]">
              <Star className="h-4 w-4" />
              Services
            </span>
            <h2 className="mt-5 text-3xl font-bold text-[#7a0b0b] sm:text-4xl">
              What We Offer
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">
              Training, consultancy and certification in project management for
              professionals and organisations seeking measurable results.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {offerCards.map((item, i) => (
              <motion.div
                key={i}
                {...sectionFade}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-3xl border border-gray-200 bg-[#f9f9f9] p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex justify-center">
                  <div className="rounded-full bg-[#7a0b0b]/10 p-4 transition-all group-hover:bg-[#7a0b0b]">
                    <div className="transition group-hover:text-white">
                      {item.icon}
                    </div>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#7a0b0b]">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-[#f8f8f8] py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <motion.div {...sectionFade}>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#7a0b0b]/10 px-4 py-1.5 text-sm font-semibold text-[#7a0b0b]">
              <ShieldCheck className="h-4 w-4" />
              Principles
            </span>
            <h2 className="mt-5 text-3xl font-bold text-[#7a0b0b] sm:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              These principles define how Certi PM teaches, partners, and delivers
              excellence.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={i}
                {...sectionFade}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex justify-center">
                  <div className="rounded-full bg-[#7a0b0b]/10 p-4 transition-all group-hover:bg-[#7a0b0b]">
                    <div className="transition group-hover:text-white">
                      {v.icon}
                    </div>
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-semibold text-[#7a0b0b]">
                  {v.t}
                </h3>
                <p className="text-sm leading-7 text-gray-700">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT THE INSTRUCTOR */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div {...sectionFade} className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#7a0b0b]/10 px-4 py-1.5 text-sm font-semibold text-[#7a0b0b]">
              <Users className="h-4 w-4" />
              Leadership
            </span>
            <h2 className="mt-5 text-3xl font-bold text-[#7a0b0b] sm:text-4xl">
              About the Instructor
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Learn from <strong>Patricio Inacio</strong>, an internationally
              recognised project management expert and{" "}
              <strong>PMI Authorized Training Instructor (ATI)</strong>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
            <motion.div
              {...sectionFade}
              className="flex flex-col items-center gap-5 rounded-[30px] border border-gray-200 bg-[#fafafa] p-8 text-center shadow-lg"
            >
              <img
                src="/patricio.jpg"
                className="h-44 w-44 rounded-3xl border border-[#8b0d0d] object-cover shadow-md sm:h-52 sm:w-52"
                alt="Patricio Inacio"
              />

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                      href="https://www.credly.com/badges/d061652a-dea3-4ea1-aae2-fb1e16207c46/linked_in_profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Verify Authorized Training Instructor badge on Credly"
                      className="group flex h-24 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white transition hover:-translate-y-0.5 hover:border-[#8b0d0d] hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
                    >
                <img
                  src="/inst.jpeg"
                  alt="PMI ATI Badge"
                  className="h-24 w-24 rounded-xl object-contain shadow sm:h-28 sm:w-28"
                />
                </a>
                <img
                  src="/safe.jpg"
                  alt="SAFe Badge"
                  className="h-24 w-24 rounded-xl object-contain shadow sm:h-28 sm:w-28"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Patricio Inacio
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#7a0b0b]">
                  PMP, SAFe 6 SPC, PSM II, PRINCE2
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Project Manager | Agile Coach | Digital Transformation Expert
                </p>
              </div>

              <a
                href="https://www.linkedin.com/in/patricio-inacio-pmp-safe-6-spc-977b4bb2/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#7a0b0b] px-5 py-2.5 text-[#7a0b0b] transition-all hover:bg-[#7a0b0b] hover:text-white"
              >
                <Linkedin size={18} /> View LinkedIn
              </a>
            </motion.div>

            <motion.div {...sectionFade} className="space-y-8 lg:col-span-2">
              <div className="rounded-3xl border border-gray-200 bg-[#fafafa] p-6 shadow-sm">
                <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-800">
                  <Users size={20} className="text-[#7a0b0b]" />
                  Professional Summary
                </h4>
                <p className="leading-8 text-gray-700">
                  Results-oriented Project Management and Agile Delivery
                  professional with over <strong>20 years of cross-sector
                  experience</strong> in construction, oil & gas, banking, and
                  international development. Specialised in leading digital and
                  business transformation initiatives by aligning strategy,
                  technology and people.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800">
                  <Briefcase size={20} className="text-[#7a0b0b]" />
                  Experience Highlights
                </h4>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {experienceHighlights.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-[#fafafa] p-4"
                    >
                      <CheckCircle size={18} className="mt-1 text-[#7a0b0b]" />
                      <span className="text-sm leading-6 text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-800">
                    <GraduationCap size={20} className="text-[#7a0b0b]" />
                    Education
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li>🎓 MSc in Project Management – University of Roehampton</li>
                    <li>🎓 Executive MBA – EMAS Business School</li>
                    <li>🎓 Doctorate in Business Administration – EMAS</li>
                    <li>🎓 BSc Information Technology (in progress)</li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-800">
                    <Award size={20} className="text-[#7a0b0b]" />
                    Key Certifications
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {certifications.map((item, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-[#7a0b0b]/10 px-4 py-1.5 text-sm font-medium text-[#7a0b0b]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-800">
                    <Building2 size={20} className="text-[#7a0b0b]" />
                    Core Expertise
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Agile & SAFe Implementation</li>
                    <li>• Digital Transformation</li>
                    <li>• PM Consultancy & Coaching</li>
                    <li>• Risk & Change Management</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-800">
                    <Languages size={20} className="text-[#7a0b0b]" />
                    Languages
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>🌍 English</li>
                    <li>🌍 Portuguese</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BOOK SECTION */}
      <section className="bg-[#f8f8f8] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...sectionFade} className="mb-14 text-center">
            <span className="inline-block rounded-full bg-[#7a0b0b]/10 px-4 py-1.5 text-sm font-semibold text-[#7a0b0b]">
              New Release
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-[#7a0b0b] sm:text-4xl md:text-5xl">
              The Crucibles of Project Management
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div {...sectionFade} className="space-y-6 leading-8 text-gray-700">
              <p>
                In project management, we are trained to believe that success
                comes from discipline: perfect Gantt charts, aligned dependencies,
                carefully maintained risk registers, and structured methodologies.
              </p>

              <p>
                But real project leadership rarely unfolds that way. It happens in
                the trenches, where stakeholder smiles sometimes hide silent vetoes,
                and where the most dangerous risks never appear in any register.
              </p>

              <p>
                <strong>The Crucibles of Project Management</strong> is not a
                methodology textbook. It is a field manual drawn from real-world
                experience, offering 365 concise lessons on navigating pressure,
                politics, and uncertainty.
              </p>

              <p>
                If you are in project management, leadership, or organisational
                transformation, you might find parts of your own journey in these
                pages.
              </p>

              <a
                href="https://www.amazon.com/CRUCIBLES-PROJECT-MANAGEMENT-Field-Forged-Lessons-ebook/dp/B0GHJ1JBJ8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#7a0b0b] px-7 py-4 font-semibold text-white shadow-md transition hover:bg-[#a11212]"
              >
                <BookOpen className="h-5 w-5" />
                Access the Book
              </a>
            </motion.div>

            <motion.div {...sectionFade} className="grid grid-cols-2 gap-4 sm:gap-6">
              <img
                src="https://i.postimg.cc/JnFwvfTs/1.jpg"
                className="h-52 w-full rounded-3xl object-cover shadow-md sm:h-60"
                alt="Book preview 1"
              />
              <img
                src="https://i.postimg.cc/gJ79QCMn/2.jpg"
                className="h-52 w-full rounded-3xl object-cover shadow-md sm:h-60"
                alt="Book preview 2"
              />
              <img
                src="https://i.postimg.cc/V6hypx7w/3.jpg"
                className="col-span-2 h-56 w-full rounded-3xl object-cover shadow-md sm:h-64"
                alt="Book preview 3"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR CLIENTS & PARTNERS */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fafafa] to-[#f3f1f1] py-20 sm:py-24 lg:py-28">
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-0 top-10 h-56 w-56 rounded-full bg-red-100/40 blur-3xl" />
    <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-orange-100/30 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
    <motion.div {...sectionFade} className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
      <span className="inline-flex items-center gap-2 rounded-full bg-[#7a0b0b]/10 px-4 py-1.5 text-sm font-semibold text-[#7a0b0b]">
        <BadgeCheck className="h-4 w-4" />
        Trusted Collaborations
      </span>

      <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#7a0b0b] sm:text-4xl md:text-5xl">
        Our Clients & Partners
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
        We proudly collaborate with organisations that value professional
        growth, operational excellence, and globally recognised project
        management standards.
      </p>
    </motion.div>

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:gap-6">
      {partnerLogos.map((logo, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.06 }}
          whileHover={{ y: -4 }}
          className="flex"
        >
          <div
            className="
              group flex h-[112px] w-full items-center justify-center
              rounded-[24px] border border-gray-200 bg-white p-4
              shadow-[0_8px_24px_rgba(0,0,0,0.04)]
              transition-all duration-300
              hover:border-[#7a0b0b]/20
              hover:shadow-[0_14px_34px_rgba(0,0,0,0.08)]
              sm:h-[124px]
              lg:h-[132px]
            "
          >
            <img
              src={logo}
              alt={`Client or Partner ${i + 1}`}
              className="
                max-h-14 max-w-[130px] object-contain
                transition-transform duration-300
                group-hover:scale-[1.03]
                sm:max-h-16 sm:max-w-[145px]
                lg:max-h-[72px] lg:max-w-[160px]
              "
            />
          </div>
        </motion.div>
      ))}
    </div>

    <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#7a0b0b]/25 to-transparent sm:mt-20" />
  </div>
</section>

      {/* FAQ */}
      <section className="bg-[#f8f8f8] py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div {...sectionFade}>
            <h2 className="mb-12 text-center text-3xl font-extrabold text-[#7a0b0b] sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-5">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                {...sectionFade}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-3xl border border-[#7a0b0b]/15 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                <h3 className="mb-3 text-lg font-bold text-[#7a0b0b]">
                  {item.q}
                </h3>
                <p className="text-sm leading-7 text-gray-700">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="border-t bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.div
            {...sectionFade}
            className="rounded-[32px] border border-gray-200 bg-[#fafafa] px-6 py-10 shadow-sm sm:px-10 sm:py-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#7a0b0b]/10 px-4 py-1.5 text-sm font-semibold text-[#7a0b0b]">
              <Sparkles className="h-4 w-4" />
              Stay Connected
            </span>

            <h2 className="mt-5 text-3xl font-bold text-[#7a0b0b] sm:text-4xl">
              Subscribe to our Newsletter
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Get updates about courses, certifications, and project management insights.
            </p>

            {!subscribed ? (
              <form
                onSubmit={handleSubscribe}
                className="mx-auto mt-8 flex max-w-2xl flex-col gap-4 sm:flex-row"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full flex-1 rounded-full border border-gray-300 bg-white px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#7a0b0b]"
                  required
                />

                <button
                  type="submit"
                  className="rounded-full bg-[#7a0b0b] px-8 py-3.5 font-semibold text-white shadow-md transition hover:bg-[#a11212]"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 inline-block rounded-2xl border border-green-200 bg-green-50 px-6 py-4 text-green-700"
              >
                ✅ Thank you for subscribing! You’ll receive updates soon.
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

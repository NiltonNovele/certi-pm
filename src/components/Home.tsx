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
} from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[#f5f5f5] text-gray-900 transition-colors duration-200 overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative w-full h-[85vh] flex items-center justify-center text-center px-6 md:px-12 overflow-hidden">
  {/* Background Image */}
  <img
    src="/illus.jpg"
    className="absolute inset-0 w-full h-full object-cover opacity-40"
    alt="Certi PM Banner"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/50"></div>

  {/* Content */}
  <motion.div
    className="relative z-10 max-w-4xl mx-auto space-y-6"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#7a0b0b] drop-shadow-lg">
      Certi PM • Project Management Training & Certification
    </h1>

    <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-800">
      Empower yourself in project management, optimise processes, and prepare for internationally recognised certifications.
    </p>

    <Link to="/projectQuiz">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 px-10 py-4 bg-[#8b0d0d] hover:bg-[#a11212] rounded-3xl text-white font-semibold text-lg shadow-lg flex items-center justify-center mx-auto space-x-3 transition-colors duration-300"
      >
        <Rocket className="w-6 h-6" />
        <span>Practice Now</span>
      </motion.button>
    </Link>
  </motion.div>
</section>

      {/* ABOUT US */}
      <section className="py-20 bg-[#f8f8f8]">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    {/* Logo/Image */}
    <div className="flex justify-center">
      <img
        src="/illus.jpg"
        className="w-full max-w-md h-80 rounded-3xl object-cover shadow-xl border-2 border-[#7a0b0b] hover:scale-105 transition-transform duration-300"
        alt="Certi PM Logo"
      />
    </div>

    {/* Text Content */}
    <div className="space-y-6">
      <h2 className="text-4xl font-bold mb-4 text-[#7a0b0b]">
        About Certi PM
      </h2>
      <p className="leading-relaxed text-gray-700">
        Certi PM is a specialised platform, that belongs to Project Direct Lda., which is an institution focused on training and certification in project management. Our mission is to prepare professionals to lead projects effectively by applying global best practices.
      </p>
      <p className="leading-relaxed text-gray-700">
        We offer courses, workshops and support for preparation towards internationally recognised certifications.
      </p>

      {/* Quick Highlights with Icons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <div className="flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-[#7a0b0b]" />
          <span className="text-gray-700 text-sm font-medium">Comprehensive Courses</span>
        </div>
        <div className="flex items-center gap-3">
          <Users className="w-6 h-6 text-[#7a0b0b]" />
          <span className="text-gray-700 text-sm font-medium">Expert Mentorship</span>
        </div>
        <div className="flex items-center gap-3">
          <Award className="w-6 h-6 text-[#7a0b0b]" />
          <span className="text-gray-700 text-sm font-medium">Certified Programs</span>
        </div>
      </div>
    </div>

  </div>
</section>

      {/* WHAT WE OFFER */}
      <section className="py-20 bg-[#f8f8f8]">
  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* Header */}
    <h2 className="text-4xl font-bold text-[#7a0b0b] mb-4">
      What We Offer
    </h2>
    <p className="text-gray-700 max-w-2xl mx-auto mb-12">
      Training, consultancy and certification in project management for professionals and organisations seeking measurable results.
    </p>

    {/* Offer Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Courses",
          desc: "Structured training programmes to develop essential project management skills.",
          icon: <BookOpen className="w-8 h-8 text-[#7a0b0b]" />,
        },
        {
          title: "Consultancy",
          desc: "Expert support for the implementation of methodologies, processes and best practices in projects.",
          icon: <Users className="w-8 h-8 text-[#7a0b0b]" />,
        },
        {
          title: "Certification",
          desc: "Preparation for internationally recognised project management certifications.",
          icon: <Award className="w-8 h-8 text-[#7a0b0b]" />,
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group p-8 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-[#7a0b0b]/10 group-hover:bg-[#7a0b0b] transition-all">
              <div className="group-hover:text-white transition">
                {item.icon}
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-[#7a0b0b] mb-3">
            {item.title}
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* OUR VALUES */}
      <section className="py-20 bg-[#f8f8f8]">
  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* Header */}
    <h2 className="text-4xl font-bold mb-4 text-[#7a0b0b]">
      Our Values
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      These principles define how Certi PM teaches, partners, and delivers excellence.
    </p>

    {/* Values Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
      {[
        {
          t: "Excellence",
          d: "We strive to deliver the highest level of quality in our courses and services.",
          icon: <Award className="w-8 h-8 text-[#7a0b0b]" />,
        },
        {
          t: "Progress",
          d: "We support continuous development for professionals and organisations.",
          icon: <TrendingUp className="w-8 h-8 text-[#7a0b0b]" />,
        },
        {
          t: "Responsibility",
          d: "We are committed to the success of every project and every student.",
          icon: <ShieldCheck className="w-8 h-8 text-[#7a0b0b]" />,
        },
        {
          t: "Professionalism",
          d: "We maintain ethics, respect and integrity in all our activities.",
          icon: <Briefcase className="w-8 h-8 text-[#7a0b0b]" />,
        },
      ].map((v, i) => (
        <div
          key={i}
          className="group p-8 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-[#7a0b0b]/10 group-hover:bg-[#7a0b0b] transition-all">
              <div className="group-hover:text-white transition">
                {v.icon}
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-[#7a0b0b] mb-3">
            {v.t}
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed">
            {v.d}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* ABOUT THE INSTRUCTOR */}
      <section className="py-20 bg-[#f5f5f5]">
  <div className="max-w-6xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#7a0b0b] mb-3">
        About the Instructor
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Learn from an internationally recognised project management and
        transformation expert.
      </p>
    </div>

    {/* Main Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

      {/* Image & Basic Info */}
      <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg border">
        <img
          src="/patricio.jpg"
          className="w-48 h-48 rounded-2xl object-cover shadow-xl border border-[#8b0d0d] mb-6"
        />

        <h3 className="text-xl font-bold text-gray-800">
          Patricio Inacio
        </h3>
        <p className="text-[#7a0b0b] font-semibold text-sm mb-3">
          PMP, SAFe 6 SPC, PSM II, PRINCE2
        </p>

        <p className="text-sm text-gray-600 mb-6">
          Project Manager | Agile Coach | Digital Transformation Expert
        </p>

        <a
          href="https://www.linkedin.com/in/patricio-inacio-pmp-safe-6-spc-977b4bb2/"
          target="_blank"
          className="flex items-center gap-2 px-5 py-2 border border-[#7a0b0b] text-[#7a0b0b] rounded-lg hover:bg-[#7a0b0b] hover:text-white transition-all"
        >
          <Linkedin size={18} /> View LinkedIn
        </a>
      </div>

      {/* About + Expertise */}
      <div className="lg:col-span-2 space-y-10">

        {/* About */}
        <div>
          <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
            <Users size={20} className="text-[#7a0b0b]" />
            Professional Summary
          </h4>

          <p className="text-gray-700 leading-relaxed">
            Results-oriented Project Management and Agile Delivery professional
            with over <strong>20 years of cross-sector experience</strong> in
            construction, oil & gas, banking, and international development.
            Specialised in leading digital and business transformation initiatives
            by aligning strategy, technology and people.
          </p>
        </div>

        {/* Experience Highlights */}
        <div>
          <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
            <Briefcase size={20} className="text-[#7a0b0b]" />
            Experience Highlights
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Project Manager – MOZA Banco",
              "Programme Manager – Project Direct",
              "Project Consultant – KOICA",
              "Civil Supervisor – Total",
              "Senior Site Agent – Stefanutti Stocks"
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2 bg-white p-4 rounded-xl border shadow-sm"
              >
                <CheckCircle size={18} className="text-[#7a0b0b] mt-1" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
            <GraduationCap size={20} className="text-[#7a0b0b]" />
            Education
          </h4>

          <ul className="space-y-2 text-gray-700 text-sm">
            <li>🎓 MSc in Project Management – University of Roehampton</li>
            <li>🎓 Executive MBA – EMAS Business School</li>
            <li>🎓 Doctorate in Business Administration – EMAS</li>
            <li>🎓 BSc Information Technology (in progress)</li>
          </ul>
        </div>

        {/* Certifications */}
        <div>
          <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
            <Award size={20} className="text-[#7a0b0b]" />
            Key Certifications
          </h4>

          <div className="flex flex-wrap gap-3">
            {[
              "PMP®",
              "SAFe® 6 SPC",
              "PRINCE2®",
              "PSM II™",
              "AWS Foundations",
              "ITIL 4",
            ].map((item, i) => (
              <span
                key={i}
                className="px-4 py-1 rounded-full bg-[#7a0b0b]/10 text-[#7a0b0b] text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Skills & Languages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
              <Building2 size={20} className="text-[#7a0b0b]" />
              Core Expertise
            </h4>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>• Agile & SAFe Implementation</li>
              <li>• Digital Transformation</li>
              <li>• PM Consultancy & Coaching</li>
              <li>• Risk & Change Management</li>
            </ul>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
              <Languages size={20} className="text-[#7a0b0b]" />
              Languages
            </h4>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>🌍 English</li>
              <li>🌍 Portuguese</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* FAQ */}
      <section className="py-24 bg-[#f8f6f6]">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#7a0b0b]">
      Frequently Asked Questions
    </h2>

    <div className="space-y-8">
      {[
        {
          q: "Who can benefit from Certi PM?",
          a: "Professionals, companies and students who want to develop project management skills and gain recognised certifications."
        },
        {
          q: "Do you offer online and in-person courses?",
          a: "Yes. Our courses can be delivered online, in-person or in a hybrid format depending on your needs."
        },
        {
          q: "Are the certifications internationally recognised?",
          a: "Yes. We prepare you for widely recognised project management certifications aligned with international standards."
        },
        {
          q: "What level of experience do I need to start?",
          a: "None is required. We offer beginner, intermediate and advanced level training programmes."
        },
        {
          q: "Do you provide training for companies or teams?",
          a: "Absolutely. We offer tailored corporate training and consultancy to improve project execution in organisations."
        },
        {
          q: "How long does a typical course take?",
          a: "Course duration varies depending on the programme, ranging from a few days to several weeks."
        },
        {
          q: "Will I receive a certificate at the end?",
          a: "Yes. All participants who complete the course successfully receive a Certi PM certificate of completion."
        },
        {
          q: "Is there any post-course support?",
          a: "Yes. We provide guidance, mentoring and additional resources after course completion."
        },
        {
          q: "How can I request training or a quotation?",
          a: "Please contact us through the contact page or email and our team will get back to you with a customised proposal."
        },
      ].map((item, i) => (
        <div
          key={i}
          className="p-8 bg-white rounded-2xl border border-[#7a0b0b]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
          <h3 className="text-lg font-bold mb-3 text-[#7a0b0b]">
            {item.q}
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {item.a}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;

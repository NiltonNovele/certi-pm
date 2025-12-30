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
    <div className="min-h-screen w-full bg-[#f5f5f5] text-gray-900 overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative w-full h-[85vh] flex items-center justify-center text-center px-6 md:px-12 overflow-hidden">
  <img
    src="/illus.jpg"
    className="absolute inset-0 w-full h-full object-cover opacity-30"
    alt="Certi PM Banner"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/60"></div>

  <motion.div
    className="relative z-10 max-w-4xl mx-auto space-y-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#7a0b0b] drop-shadow-lg">
      Certi PM • Project Management Training & Certification
    </h1>

    <div className="flex items-center justify-center gap-3 mt-2">
      <img src="/atp.jpeg" alt="PMI ATP Badge" className="w-16 h-auto rounded shadow-sm" />
      <span className="text-sm md:text-base text-gray-700 font-medium">
        Authorized Training Partner by PMI
      </span>
    </div>

    <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-800 mt-4">
      Empower yourself in project management, optimise processes, and prepare for internationally recognised certifications.
    </p>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
      <Link to="/choice">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 bg-[#8b0d0d] hover:bg-[#a11212] rounded-full text-white font-semibold text-lg shadow-lg flex items-center justify-center gap-3 transition-colors duration-300"
        >
          <Rocket className="w-6 h-6" />
          Practice Now
        </motion.button>
      </Link>
    </div>
  </motion.div>
</section>

      {/* WHAT WE OFFER */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#7a0b0b] mb-4">What We Offer</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12">
            Training, consultancy and certification in project management for professionals and organisations seeking measurable results.
          </p>

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
              <motion.div
                key={i}
                className="group p-8 bg-[#f9f9f9] rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-[#7a0b0b]/10 group-hover:bg-[#7a0b0b] transition-all">
                    <div className="group-hover:text-white transition">{item.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#7a0b0b] mb-3">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#7a0b0b]">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            These principles define how Certi PM teaches, partners, and delivers excellence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
            {[
              { t: "Excellence", d: "Deliver highest quality in courses and services.", icon: <Award className="w-8 h-8 text-[#7a0b0b]" /> },
              { t: "Progress", d: "Support continuous development for professionals and organisations.", icon: <TrendingUp className="w-8 h-8 text-[#7a0b0b]" /> },
              { t: "Responsibility", d: "Committed to every project and every student’s success.", icon: <ShieldCheck className="w-8 h-8 text-[#7a0b0b]" /> },
              { t: "Professionalism", d: "Maintain ethics, respect and integrity in all activities.", icon: <Briefcase className="w-8 h-8 text-[#7a0b0b]" /> },
            ].map((v, i) => (
              <motion.div
                key={i}
                className="group p-8 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-[#7a0b0b]/10 group-hover:bg-[#7a0b0b] transition-all">
                    <div className="group-hover:text-white transition">{v.icon}</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#7a0b0b] mb-3">{v.t}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT THE INSTRUCTOR */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#7a0b0b] mb-3">About the Instructor</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from <strong>Patricio Inacio</strong>, an internationally recognised project management expert and <strong>PMI Authorized Training Instructor (ATI)</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Instructor Card */}
            <div className="flex flex-col items-center text-center bg-[#f9f9f9] p-8 rounded-2xl shadow-lg border gap-4">
  <img
    src="/patricio.jpg"
    className="w-48 h-48 rounded-2xl object-cover shadow-md border border-[#8b0d0d]"
    alt="Patricio Inacio"
  />

  {/* BADGES SIDE BY SIDE */}
  <div className="flex items-center justify-center gap-4">
    <img src="/inst.jpeg" alt="PMI ATI Badge" className="w-28 h-auto rounded shadow" />
    <img src="/safe.jpg" alt="SAFe Badge" className="w-28 h-auto rounded shadow" />
  </div>

  <h3 className="text-xl font-bold text-gray-800">Patricio Inacio</h3>
  <p className="text-[#7a0b0b] font-semibold text-sm mb-3">PMP, SAFe 6 SPC, PSM II, PRINCE2</p>
  <p className="text-sm text-gray-600 mb-6">Project Manager | Agile Coach | Digital Transformation Expert</p>

  <a
    href="https://www.linkedin.com/in/patricio-inacio-pmp-safe-6-spc-977b4bb2/"
    target="_blank"
    className="flex items-center gap-2 px-5 py-2 border border-[#7a0b0b] text-[#7a0b0b] rounded-full hover:bg-[#7a0b0b] hover:text-white transition-all"
  >
    <Linkedin size={18} /> View LinkedIn
  </a>
</div>


            {/* Professional Info */}
            <div className="lg:col-span-2 space-y-10">
              {/* Professional Summary */}
              <div>
                <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
                  <Users size={20} className="text-[#7a0b0b]" /> Professional Summary
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Results-oriented Project Management and Agile Delivery professional with over <strong>20 years of cross-sector experience</strong> in construction, oil & gas, banking, and international development. Specialised in leading digital and business transformation initiatives by aligning strategy, technology and people.
                </p>
              </div>

              {/* Experience Highlights */}
              <div>
                <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
                  <Briefcase size={20} className="text-[#7a0b0b]" /> Experience Highlights
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Project Manager – MOZA Banco",
                    "Programme Manager – Project Direct",
                    "Project Consultant – KOICA",
                    "Civil Supervisor – Total",
                    "Senior Site Agent – Stefanutti Stocks"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 bg-white p-4 rounded-xl border shadow-sm">
                      <CheckCircle size={18} className="text-[#7a0b0b] mt-1" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
                  <GraduationCap size={20} className="text-[#7a0b0b]" /> Education
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
                  <Award size={20} className="text-[#7a0b0b]" /> Key Certifications
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
                    <span key={i} className="px-4 py-1 rounded-full bg-[#7a0b0b]/10 text-[#7a0b0b] text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills & Languages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
                    <Building2 size={20} className="text-[#7a0b0b]" /> Core Expertise
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
                    <Languages size={20} className="text-[#7a0b0b]" /> Languages
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
      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#7a0b0b]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              { q: "Who can benefit from Certi PM?", a: "Professionals, companies and students who want to develop project management skills and gain recognised certifications." },
              { q: "Do you offer online and in-person courses?", a: "Yes. Our courses can be delivered online, in-person or hybrid depending on your needs." },
              { q: "Are the certifications internationally recognised?", a: "Yes. We prepare you for widely recognised project management certifications aligned with international standards." },
              { q: "What level of experience do I need to start?", a: "None is required. We offer beginner, intermediate and advanced training programmes." },
            ].map((item, i) => (
              <motion.div key={i} className="p-8 bg-white rounded-2xl border border-[#7a0b0b]/20 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-bold mb-3 text-[#7a0b0b]">{item.q}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  GraduationCap,
  Layers3,
  Sparkles,
  Target,
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  instructor: string;
  price?: number;
  originalPrice?: number;
  features: string[];
  coverImage: string;
  redirectUrl?: string;
  comingSoon?: boolean;
  promotion?: string;
  type?: "standard" | "safe";
}

const courses: Course[] = [
  {
    id: "pmp-course",
    title: "PMP® Certification Course",
    subtitle: "Project Management Professional",
    description:
      "Prepare for your PMP® certification with in-depth coverage of PMBOK® Guide 7th Edition, Agile, and Hybrid approaches.",
    instructor: "Patricio Inacio",
    coverImage: "/pmp.webp",
    type: "standard",
    features: [
      "PMBOK® Guide 7th Edition",
      "Agile & Hybrid approaches",
      "35 hours of live training",
      "Exam simulator",
      "Certificate of completion",
    ],
  },
  {
    id: "capm-course",
    title: "CAPM® Certification Course",
    subtitle: "Certified Associate in Project Management",
    description:
      "Build strong foundations in project management and prepare for the CAPM® exam with confidence.",
    instructor: "Patricio Inacio",
    coverImage: "/capm.png",
    type: "standard",
    features: [
      "PMBOK® Guide 7th Edition",
      "Agile & Hybrid practices",
      "23 hours of live training",
      "Exam simulator",
      "Certificate of completion",
    ],
  },
  {
    id: "scrum-course",
    title: "Scrum Master Certification",
    subtitle: "Agile & Scrum Framework",
    description:
      "Master Agile and Scrum principles and prepare for Scrum Master certification.",
    instructor: "Patricio Inacio",
    coverImage: "/scrum.png",
    type: "standard",
    features: [
      "Scrum framework mastery",
      "Agile & Hybrid delivery",
      "14 hours of live training",
      "Exam simulator",
      "Certificate of completion",
    ],
  },
];

const safeCourses: Course[] = [
  {
    id: "safe-agilist",
    title: "Leading SAFe (SA)",
    subtitle: "SAFe Agilist Certification",
    description:
      "A 16-hour course designed for leaders driving Agile transformation across the enterprise.",
    instructor: "Certified SAFe Trainer",
    coverImage: "/SAFe/Leading.png",
    type: "safe",
    features: [
      "Understanding SAFe & Agile Release Trains (ARTs)",
      "Customer-centric mindset & alignment",
      "Strategic alignment & value flow",
      "Enterprise agility & leadership skills",
    ],
  },
  {
    id: "safe-ssm",
    title: "SAFe Scrum Master (SSM)",
    subtitle: "Scrum Master in a Scaled Agile Environment",
    description:
      "Learn how to facilitate Agile teams and support ARTs in complex enterprise environments.",
    instructor: "Certified SAFe Trainer",
    coverImage: "/SAFe/Scrum.png",
    type: "safe",
    features: [
      "Scrum & Agile foundations",
      "Facilitating team collaboration",
      "PI Planning & iteration execution",
      "DevOps & continuous improvement",
    ],
  },
  {
    id: "safe-popm",
    title: "SAFe Product Owner / Product Manager (POPM)",
    subtitle: "Product Leadership in SAFe",
    description:
      "Learn to manage backlogs, prioritize value, and align product strategy with business goals.",
    instructor: "Certified SAFe Trainer",
    coverImage: "/SAFe/pown.png",
    type: "safe",
    features: [
      "Product ownership & backlog management",
      "PI Planning leadership",
      "Lean-Agile & customer centricity",
      "AI-supported product decisions",
    ],
  },
  {
    id: "safe-devops",
    title: "SAFe DevOps",
    subtitle: "Continuous Delivery & Value Flow",
    description:
      "Learn how to optimize delivery pipelines using CALMR principles and DevOps practices.",
    instructor: "Certified SAFe Trainer",
    coverImage: "/SAFe/devops.png",
    type: "safe",
    features: [
      "CALMR DevOps model",
      "Value stream mapping",
      "Continuous integration & delivery",
      "Transformation roadmap creation",
    ],
  },
  {
    id: "teams",
    title: "SAFe for Teams",
    subtitle: "SAFe Practitioner (SP)",
    description:
      "Designed for individuals working in or preparing to join Agile teams within a SAFe organization, with a strong focus on collaboration, delivery, and continuous improvement.",
    instructor: "Certified SAFe Trainer",
    coverImage: "/SAFe/teams.png",
    type: "safe",
    features: [
      "Working on an Agile Release Train (ART)",
      "Executing Iterations and PI Planning",
      "Cross-team collaboration and alignment",
      "Applying Lean-Agile principles in practice",
    ],
  },
];

const Courses: React.FC = () => {
  const navigate = useNavigate();

  const CourseCard = ({
    course,
    buttonLabel,
    buttonClassName,
    accentClassName,
  }: {
    course: Course;
    buttonLabel: string;
    buttonClassName: string;
    accentClassName: string;
  }) => (
    <div className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-52 overflow-hidden sm:h-56">
        <img
          src={course.coverImage}
          alt={course.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm ${accentClassName}`}
          >
            {course.type === "safe" ? "SAFe® Program" : "Certification Course"}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold tracking-tight text-gray-950 sm:text-2xl">
            {course.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-gray-500">
            {course.subtitle}
          </p>
        </div>

        <p className="text-sm leading-7 text-gray-600 sm:text-[15px]">
          {course.description}
        </p>

        <div className="mt-5 rounded-2xl bg-gray-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
            Instructor
          </p>
          <p className="mt-1 text-sm font-semibold text-gray-800">
            {course.instructor}
          </p>
        </div>

        <div className="mt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
            What you’ll cover
          </p>

          <div className="space-y-2.5">
            {course.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-700" />
                <span className="text-sm leading-6 text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => navigate("/contact")}
          className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 ${buttonClassName}`}
        >
          {buttonLabel}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8f7f5] text-gray-900">
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-red-200/30 blur-3xl sm:h-72 sm:w-72" />
          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl sm:h-80 sm:w-80" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-white blur-3xl sm:h-72 sm:w-72" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          {/* Hero */}
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-700 shadow-sm sm:text-xs">
              <Sparkles className="h-4 w-4" />
              Professional Learning
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Professional certification{" "}
              <span className="text-red-700">courses</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base lg:text-lg">
              Advance your career with globally recognized project management,
              agile, and enterprise transformation certifications.
            </p>
          </div>

          {/* Highlights */}
          <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 lg:mb-16">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <GraduationCap className="h-5 w-5 text-red-700" />
              <p className="mt-3 text-sm font-semibold text-gray-900">
                Industry-recognized learning
              </p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Courses built around respected certification paths and practical delivery skills.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <Award className="h-5 w-5 text-red-700" />
              <p className="mt-3 text-sm font-semibold text-gray-900">
                Expert-led training
              </p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Learn from experienced trainers with real-world project and agile expertise.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <Target className="h-5 w-5 text-red-700" />
              <p className="mt-3 text-sm font-semibold text-gray-900">
                Career-focused outcomes
              </p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Gain practical knowledge, exam readiness, and valuable professional confidence.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:col-span-2 xl:col-span-1">
              <Layers3 className="h-5 w-5 text-red-700" />
              <p className="mt-3 text-sm font-semibold text-gray-900">
                Flexible program options
              </p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Choose from core certification courses and specialized SAFe® enterprise programs.
              </p>
            </div>
          </div>

          {/* Standard Courses */}
          <div className="mb-16 lg:mb-24">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
                  Core certifications
                </p>
                <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">
                  Certification courses
                </h2>
              </div>
              <p className="text-sm text-gray-500">
                {courses.length} programs available
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  buttonLabel="Request a Quote"
                  buttonClassName="bg-red-700 hover:bg-red-800"
                  accentClassName="bg-red-700/85"
                />
              ))}
            </div>
          </div>

          {/* SAFe Section */}
          <div>
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Enterprise agility
                </p>
                <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">
                  SAFe® training programs
                </h2>
              </div>
              <p className="text-sm text-gray-500">
                {safeCourses.length} SAFe® programs available
              </p>
            </div>

            <div className="mb-8 rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                Scaled Agile Framework (SAFe) certifications designed for leaders,
                scrum masters, product professionals, DevOps practitioners, and
                agile teams working in enterprise environments.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {safeCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  buttonLabel="Request a Quote"
                  buttonClassName="bg-gray-900 hover:bg-black"
                  accentClassName="bg-gray-900/85"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
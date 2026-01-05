import React, { useState } from "react";
import axios from "axios";
import { SignedIn, SignedOut, SignIn, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

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
      "Prepare for your PMP® certification with in-depth coverage of PMBOK® Guide 7th Edition, Agile and Hybrid approaches.",
    instructor: "Patricio Inacio",
    price: 10499,
    originalPrice: 17999,
    promotion: "Black November",
    coverImage: "/pmp.webp",
    redirectUrl: "/courses/pmp",
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
    price: 7999,
    originalPrice: 15999,
    promotion: "Black November",
    coverImage: "/capm.png",
    redirectUrl: "/courses/capm",
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
    price: 6999,
    originalPrice: 12999,
    promotion: "Black November",
    coverImage: "/scrum.png",
    redirectUrl: "/courses/scrum",
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

/* ---------------------- SAFE COURSES ---------------------- */

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
    "The SAFe for Teams course (SAFe Practitioner – SP) is designed for individuals working in or preparing to join Agile teams within a SAFe organization. This training equips participants with the skills, mindset, and practical knowledge needed to collaborate effectively, deliver value consistently, and thrive in a scaled agile environment.",
  instructor: "Certified SAFe Trainer",
  coverImage: "/SAFe/teams.png",
  type: "safe",
  features: [
    "Working on an Agile Release Train (ART) and collaborating across teams",
    "Executing Iterations and PI Planning to improve alignment and delivery",
    "Cross-team collaboration, communication, and alignment practices",
    "Applying Lean-Agile principles including flow, customer focus, and continuous improvement",
  ],
}
];

const Courses: React.FC = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState<string | null>(null);

  const handleEnroll = async (course: Course) => {
    if (course.type === "safe") {
      window.location.href = "/contact";
      return;
    }

    try {
      setLoading(course.id);

      const response = await axios.post(
        "https://api.certipm.com/api/create-payment",
        {
          amount: course.price,
          description: course.title,
          user_id: user?.id,
          redirect_url: `${window.location.origin}${course.redirectUrl}`,
        }
      );

      if (response.data.checkout_url) {
        localStorage.setItem("postPaymentRedirect", course.redirectUrl!);
        window.location.href = response.data.checkout_url;
      }
    } catch (error) {
      alert("Payment initiation failed.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <>
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">

          <div className="max-w-7xl mx-auto mb-16">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 text-center">
              Professional Certification Courses
            </h1>
            <p className="text-gray-600 text-center mb-10">
              Advance your career with globally recognized certifications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                  <img src={course.coverImage} className="h-48 w-full object-cover" />

                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-xl font-bold">{course.title}</h2>
                    <p className="text-sm text-gray-500">{course.subtitle}</p>

                    <p className="mt-3 text-sm text-gray-700">{course.description}</p>

                    <ul className="mt-4 space-y-1 text-sm text-gray-700">
                      {course.features.map((f, i) => (
                        <li key={i}>✔ {f}</li>
                      ))}
                    </ul>

                    <div className="mt-4">
                      {course.originalPrice && (
                        <span className="line-through text-gray-400 mr-2">
                          {course.originalPrice.toLocaleString()} MZN
                        </span>
                      )}
                      <span className="text-xl font-bold text-red-700">
                        {course.price?.toLocaleString()} MZN
                      </span>
                    </div>

                    <button
                      onClick={() => window.location.href = "https://register.certipm.com"}
                      className="mt-auto bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-semibold"
                    >
                      {loading === course.id ? "Processing..." : "Enroll Now"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== SAFe COURSES ===== */}
          <div className="max-w-7xl mx-auto mt-24">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
              SAFe® Training Programs
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Scaled Agile Framework (SAFe) certifications designed for enterprise agility.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {safeCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                  <img src={course.coverImage} className="h-48 w-full object-cover" />

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold">{course.title}</h3>
                    <p className="text-sm text-gray-500">{course.subtitle}</p>

                    <p className="mt-3 text-sm text-gray-700">{course.description}</p>

                    <ul className="mt-4 space-y-1 text-sm text-gray-700">
                      {course.features.map((f, i) => (
                        <li key={i}>✔ {f}</li>
                      ))}
                    </ul>

                    <button
                      onClick={() => window.location.href = "/contact"}
                      className="mt-auto bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold"
                    >
                      Request a Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
  );
};

export default Courses;

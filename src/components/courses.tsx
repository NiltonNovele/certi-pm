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
  price: number;
  originalPrice?: number;
  features: string[];
  coverImage: string;
  redirectUrl: string;
  comingSoon?: boolean;
  promotion?: string;
}

const courses: Course[] = [
  {
    id: "pmp-course",
    title: "PMP® Certification Course",
    subtitle: "Project Management Professional",
    description:
      "Prepare for your PMP® certification with this course where you will learn the PMBOK® Guide 7th Edition, Process Group Practice Guide, Agile Practice Guide and more. You will gain the knowledge to pass the PMP® Certification Exam on the first try, master exam tips and tricks, and understand Agile, Predictive, and Hybrid project management approaches.",
    instructor: "Patricio Inacio",
    price: 9999,
    originalPrice: 17999,
    promotion: "Black November",
    coverImage: "/pmp.webp",
    redirectUrl: "/courses/pmp",
    features: [
      "PMBOK® Guide 7th Edition, Process Group Practice Guide & Agile Practice Guide",
      "Agile, Predictive, and Hybrid project management",
      "Exam tips and tricks to pass on the first try",
      "Course material",
      "35 hours of live training",
      "Exam simulator (2 practice tests)",
      "Certificate of completion",
      "Lifetime access",
    ],
  },
  {
    id: "capm-course",
    title: "CAPM® Certification Course",
    subtitle: "Certified Associate in Project Management",
    description:
      "Prepare for your CAPM® certification with this course where you will learn the PMBOK® Guide 7th Edition, Process Group Practice Guide, Agile Practice Guide and more. This course equips you with essential project management knowledge, exam strategies, and Agile, Predictive, and Hybrid approaches to pass the CAPM® exam confidently.",
    instructor: "Patricio Inacio",
    price: 7999,
    originalPrice: 15999,
    promotion: "Black November",
    coverImage: "/capm.png",
    redirectUrl: "/courses/capm",
    features: [
      "PMBOK® Guide 7th Edition, Process Group Practice Guide & Agile Practice Guide",
      "Agile, Predictive, and Hybrid project management",
      "Exam tips and tricks",
      "Course material",
      "35 hours of live training",
      "Exam simulator (2 practice tests)",
      "Certificate of completion",
      "Lifetime access",
    ],
  },
  {
    id: "scrum-course",
    title: "Scrum Master Certification",
    subtitle: "Agile & Scrum Framework",
    description:
      "Prepare for your Scrum Master certification with a strong Agile foundation. This course covers Agile principles, Scrum framework practices, exam techniques, and real-world application using Predictive, Agile, and Hybrid delivery environments.",
    instructor: "Patricio Inacio",
    price: 6999,
    originalPrice: 12999,
    promotion: "Black November",
    coverImage: "/scrum.jpg",
    redirectUrl: "/courses/scrum",
    features: [
      "Agile Practice Guide and Scrum framework fundamentals",
      "Agile, Predictive, and Hybrid delivery approaches",
      "Exam tips and tricks",
      "Course material",
      "35 hours of live training",
      "Exam simulator (2 practice tests)",
      "Certificate of completion",
      "Lifetime access",
    ],
  },
];

const Courses: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [loading, setLoading] = useState<string | null>(null);

  const handleEnroll = async (course: Course) => {
    if (course.comingSoon) return;

    setLoading(course.id);

    try {
      const user_id = user?.id;

      const response = await axios.post(
        "https://api.certipm.com/api/create-payment",
        {
          amount: course.price,
          description: `${course.title}`,
          user_id,
          redirect_url: `${window.location.origin}${course.redirectUrl}`,
        }
      );

      if (response.data.checkout_url) {
        localStorage.setItem("postPaymentRedirect", course.redirectUrl);
        window.location.href = response.data.checkout_url;
      } else {
        alert("Failed to generate payment link.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment initiation failed.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
              Professional Certification Courses
            </h1>
            <p className="text-gray-600 text-lg">
              Advance your career with globally recognized project management certifications.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
              >
                <div className="relative">
                  <img
                    src={course.coverImage}
                    alt={course.title}
                    className="h-48 w-full object-cover"
                  />

                  {course.promotion && (
                    <span className="absolute top-4 right-4 bg-red-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {course.promotion}
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">
                    {course.subtitle}
                  </p>

                  <p className="text-gray-700 mb-4 text-sm">
                    {course.description}
                  </p>

                  <p className="text-sm text-gray-600 mb-3">
                    Instructor:{" "}
                    <span className="font-medium text-gray-900">
                      {course.instructor}
                    </span>
                  </p>

                  <ul className="mb-4 space-y-1 text-sm text-gray-700">
                    {course.features.map((feature, index) => (
                      <li key={index}>✔ {feature}</li>
                    ))}
                  </ul>

                  <div className="mb-4">
                    {course.originalPrice && (
                      <span className="text-gray-500 line-through mr-2">
                        {course.originalPrice.toLocaleString()} MZN
                      </span>
                    )}
                    <span className="text-2xl font-bold text-red-700">
                      {course.price.toLocaleString()} MZN
                    </span>
                  </div>

                  <button
                    onClick={() => handleEnroll(course)}
                    disabled={loading === course.id}
                    className="mt-auto w-full bg-red-700 text-white py-3 rounded-lg font-semibold hover:bg-red-800 transition"
                  >
                    {loading === course.id ? "Processing..." : "Enroll Now"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            You must sign in to view courses
          </h2>
          <SignIn path="/courses" routing="path" />
        </div>
      </SignedOut>
    </>
  );
};

export default Courses;

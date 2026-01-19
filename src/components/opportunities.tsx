import React, { useState, useEffect } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ExternalLink,
  Share2,
  Linkedin,
  MessageCircle,
} from "lucide-react";

interface Opportunity {
  id: string;
  _id?: string;
  title: string;
  description: string;
  position: string;
  company: string;
  location: string;
  type: "Remote" | "Hybrid" | "On-site" | "Contract" | "Full-time";
  status: "Open" | "Closed" | "Canceled";
  link: string;
}

const statusStyles = {
  Open: { icon: CheckCircle, className: "bg-green-100 text-green-700" },
  Closed: { icon: XCircle, className: "bg-gray-200 text-gray-700" },
  Canceled: { icon: AlertTriangle, className: "bg-red-100 text-red-700" },
};

const backendUrl = "https://api.certipm.com";

const Opportunities: React.FC = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const baseUrl = window.location.origin;

  // FETCH
  useEffect(() => {
    fetch(`${backendUrl}/api/vacancies`)
      .then(res => res.json())
      .then(data =>
        setOpportunities(data.map((d: any) => ({ ...d, id: d._id })))
      )
      .catch(err => console.error("Error fetching vacancies:", err));
  }, []);

  // SHARE
  const generateShareText = (op: Opportunity) =>
    encodeURIComponent(
      `📌 Opportunity: ${op.title}\n` +
      `🏢 Company: ${op.company}\n` +
      `💼 Position: ${op.position}\n` +
      `📍 Location: ${op.location}\n` +
      `⏰ Type: ${op.type}\n` +
      `✅ Status: ${op.status}\n\n` +
      `📝 Description:\n${op.description}\n\n` +
      `🔗 View more: ${baseUrl}/opportunities#${op.id}`
    );

  const shareWhatsApp = (op: Opportunity) =>
    window.open(`https://wa.me/?text=${generateShareText(op)}`, "_blank");

  const shareLinkedIn = (op: Opportunity) => {
    const url = encodeURIComponent(`${baseUrl}/opportunities#${op.id}`);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Project Management Opportunities
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Explore curated Project Management roles across Mozambique and share
          opportunities with your professional network.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {opportunities.map(op => {
          const StatusIcon = statusStyles[op.status].icon;

          return (
            <div
              key={op.id}
              id={op.id}
              className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${statusStyles[op.status].className}`}
                >
                  <StatusIcon size={14} />
                  {op.status}
                </div>

                <h2 className="text-lg font-bold text-gray-900 mb-1">
                  {op.title}
                </h2>
                <p className="text-gray-600 text-sm mb-3">{op.company}</p>

                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  {op.description}
                </p>

                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} /> {op.position}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} /> {op.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} /> {op.type}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href={op.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-xl font-semibold transition ${op.status === "Open"
                    ? "bg-red-700 text-white hover:bg-red-800"
                    : "bg-gray-300 text-gray-600 pointer-events-none"
                    }`}
                >
                  View More <ExternalLink size={16} />
                </a>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Share2 size={14} /> Share
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => shareWhatsApp(op)}
                      className="p-2 rounded-lg bg-green-100 text-green-700 hover:bg-green-200"
                    >
                      <MessageCircle size={16} />
                    </button>
                    <button
                      onClick={() => shareLinkedIn(op)}
                      className="p-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200"
                    >
                      <Linkedin size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Opportunities;
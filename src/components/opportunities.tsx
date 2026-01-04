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
  Lock,
  X,
  PlusCircle,
  Edit3,
  Trash2,
  Settings,
} from "lucide-react";

interface Opportunity {
  id: string; // frontend id
  _id?: string; // MongoDB id
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
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminView, setAdminView] = useState(false);
  const [editingOpportunity, setEditingOpportunity] = useState<Opportunity | null>(null);
  const [showPinModal, setShowPinModal] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const baseUrl = window.location.origin;

  // ---------------------------
  // Fetch vacancies from backend
  // ---------------------------
  const fetchVacancies = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/vacancies`);
      const data = await res.json();
      const normalized = data.map((d: any) => ({ ...d, id: d._id }));
      setOpportunities(normalized);
    } catch (err) {
      console.error("Error fetching vacancies:", err);
    }
  };

  useEffect(() => {
    fetchVacancies();
  }, []);

  // ---------------------------
  // Sharing functions
  // ---------------------------
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
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
  };

  // ---------------------------
  // Admin PIN access
  // ---------------------------
  const handlePinSubmit = () => {
    if (pinInput === "1423") {
      setIsAdmin(true);
      setAdminView(true);
      setShowPinModal(false);
      setPinInput("");
    } else alert("PIN incorreto!");
  };

  // ---------------------------
  // Save / Add / Edit opportunity
  // ---------------------------
  const saveOpportunity = async (op: Opportunity) => {
    try {
      let updated: Opportunity;

      if (op._id) {
        // Edit existing
        const res = await fetch(`${backendUrl}/api/vacancies/${op._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(op),
        });
        updated = await res.json();
        setOpportunities(prev =>
          prev.map(o => (o._id === updated._id ? { ...updated, id: updated._id } : o))
        );
      } else {
        // Add new
        const res = await fetch(`${backendUrl}/api/vacancies`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(op),
        });
        updated = await res.json();
        setOpportunities(prev => [{ ...updated, id: updated._id }, ...prev]);
      }
      setEditingOpportunity(null);
    } catch (err) {
      console.error("Error saving vacancy:", err);
    }
  };

  // ---------------------------
  // Delete opportunity
  // ---------------------------
  const deleteOpportunity = async (id: string) => {
    try {
      await fetch(`${backendUrl}/api/vacancies/${id}`, { method: "DELETE" });
      setOpportunities(prev => prev.filter(o => o.id !== id));
    } catch (err) {
      console.error("Error deleting vacancy:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 relative">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Project Management Opportunities</h1>
        <p className="text-gray-600 max-w-2xl">
          Explore curated Project Management roles across Mozambique and share opportunities with your professional network.
        </p>
      </div>

      {/* GRID / OPPORTUNITIES */}
      {!adminView && (
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
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${statusStyles[op.status].className}`}>
                    <StatusIcon size={14} />
                    {op.status}
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-1">{op.title}</h2>
                  <p className="text-gray-600 text-sm mb-3">{op.company}</p>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">{op.description}</p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2"><Briefcase size={16} /><span>{op.position}</span></div>
                    <div className="flex items-center gap-2"><MapPin size={16} /><span>{op.location}</span></div>
                    <div className="flex items-center gap-2"><Clock size={16} /><span>{op.type}</span></div>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <a
                    href={op.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-xl font-semibold transition ${op.status === "Open" ? "bg-red-700 text-white hover:bg-red-800" : "bg-gray-300 text-gray-600 cursor-not-allowed pointer-events-none"}`}
                  >
                    View More
                    <ExternalLink size={16} />
                  </a>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-gray-500 flex items-center gap-1"><Share2 size={14} /> Share</span>
                    <div className="flex gap-2">
                      <button onClick={() => shareWhatsApp(op)} className="p-2 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 transition" title="Share on WhatsApp">
                        <MessageCircle size={16} />
                      </button>
                      <button onClick={() => shareLinkedIn(op)} className="p-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition" title="Share on LinkedIn">
                        <Linkedin size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ADMIN PANEL */}
      {adminView && (
        <div className="max-w-6xl mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Panel – Vacancies</h2>
            <button onClick={() => setAdminView(false)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 transition"><X /></button>
          </div>

          <button
            onClick={() => setEditingOpportunity({ title: "", description: "", position: "", company: "", location: "", type: "Full-time", status: "Open", link: "" })}
            className="flex items-center text-blue-600 hover:underline mb-4"
          >
            <PlusCircle className="w-4 h-4 mr-1" /> Add Vacancy
          </button>

          {/* EDIT / ADD FORM */}
          {editingOpportunity && (
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-4 space-y-2 shadow-md">
              {["title", "company", "position", "location", "type", "link"].map(field => (
                <input
                  key={field}
                  type="text"
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="w-full p-2 border rounded"
                  value={(editingOpportunity as any)[field]}
                  onChange={e => setEditingOpportunity({ ...editingOpportunity, [field]: e.target.value })}
                />
              ))}
              <textarea
                placeholder="Description"
                className="w-full p-2 border rounded"
                value={editingOpportunity.description}
                onChange={e => setEditingOpportunity({ ...editingOpportunity, description: e.target.value })}
              />
              <select
                className="w-full p-2 border rounded"
                value={editingOpportunity.status}
                onChange={e => setEditingOpportunity({ ...editingOpportunity, status: e.target.value as Opportunity["status"] })}
              >
                <option>Open</option>
                <option>Closed</option>
                <option>Canceled</option>
              </select>
              <div className="flex justify-end gap-2 mt-2">
                <button onClick={() => setEditingOpportunity(null)} className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded">Cancel</button>
                <button onClick={() => saveOpportunity(editingOpportunity)} className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
              </div>
            </div>
          )}

          {/* VACANCY LIST */}
          {opportunities.map(op => (
            <div key={op.id} className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 p-2 rounded-lg mb-2">
              <span>{op.title}</span>
              <div className="flex space-x-2">
                <button onClick={() => setEditingOpportunity(op)} className="text-blue-500">
                  <Edit3 className="w-4 h-4" />
                </button>
                <button onClick={() => deleteOpportunity(op.id)} className="text-red-500">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* LOCK / ADMIN BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isAdmin ? (
          <button onClick={() => setShowPinModal(true)} className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition" title="Admin Access">
            <Lock className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        ) : (
          <button onClick={() => setAdminView(prev => !prev)} className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:scale-105 transition" title="Toggle Admin Panel">
            <Settings className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* PIN MODAL */}
      {showPinModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-96 text-center">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Admin Access</h2>
            <input
              type="password"
              placeholder="Enter PIN"
              value={pinInput}
              onChange={e => setPinInput(e.target.value)}
              className="w-full p-3 border rounded-lg mb-4 text-center text-lg"
            />
            <div className="flex justify-center gap-3">
              <button onClick={() => setShowPinModal(false)} className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded">Cancel</button>
              <button onClick={handlePinSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">Enter</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Opportunities;

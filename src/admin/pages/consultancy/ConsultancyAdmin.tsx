import { useEffect, useMemo, useState } from "react";
import axios from "axios";

interface ConsultancyRequest {
  _id: string;
  fullName: string;
  email: string;
  service: string;
  status: "NEW" | "REPLIED";
}

const ConsultancyAdmin = () => {
  const [requests, setRequests] = useState<ConsultancyRequest[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "new" | "replied">("all");

  const [selected, setSelected] = useState<ConsultancyRequest | null>(null);
  const [reply, setReply] = useState("");

  const fetchRequests = async () => {
    try {
      const res = await axios.get(
        "https://api.certipm.com/api/consultancy"
      );
      setRequests(Array.isArray(res.data) ? res.data : []);
    } catch {
      setRequests([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const filteredRequests = useMemo(() => {
    return requests
      .filter(r =>
        `${r.fullName} ${r.email} ${r.service}`
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .filter(r => {
        if (filter === "new") return r.status === "NEW";
        if (filter === "replied") return r.status === "REPLIED";
        return true;
      });
  }, [requests, search, filter]);

  const sendReply = async () => {
    if (!selected) return;

    await axios.put(
      `https://api.certipm.com/api/consultancy/${selected._id}/reply`,
      { adminReply: reply }
    );

    setSelected(null);
    setReply("");
    fetchRequests();
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">
          Consultancy Requests
        </h1>
        <p className="text-gray-500 mt-1">
          View, filter and respond to consultancy service requests
        </p>
      </div>

      {/* CONTROLS */}
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          placeholder="Search by name, email or service"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-72 focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <select
          value={filter}
          onChange={e => setFilter(e.target.value as any)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          <option value="all">All requests</option>
          <option value="new">New</option>
          <option value="replied">Replied</option>
        </select>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="p-6 text-gray-500">
            Loading consultancy requests...
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="px-6 py-4 text-left font-medium">Client</th>
                <th className="px-6 py-4 text-left font-medium">Email</th>
                <th className="px-6 py-4 text-left font-medium">Service</th>
                <th className="px-6 py-4 text-left font-medium">Status</th>
                <th className="px-6 py-4 text-right font-medium">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {filteredRequests.map(r => (
                <tr
                  key={r._id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {r.fullName}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {r.email}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {r.service}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${r.status === "NEW"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-700"
                        }`}
                    >
                      {r.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-right">
                    {r.status === "NEW" ? (
                      <button
                        onClick={() => setSelected(r)}
                        className="text-red-700 hover:text-red-800 font-medium"
                      >
                        Reply
                      </button>
                    ) : (
                      <span className="text-gray-400 text-sm">
                        —
                      </span>
                    )}
                  </td>
                </tr>
              ))}

              {filteredRequests.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-10 text-center text-gray-500"
                  >
                    No consultancy requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Reply to {selected.fullName}
              </h2>
              <p className="text-sm text-gray-500">
                Service: {selected.service}
              </p>
            </div>

            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 mb-4"
              rows={6}
              placeholder="Write your response..."
              value={reply}
              onChange={e => setReply(e.target.value)}
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={sendReply}
                className="px-6 py-2 rounded-lg bg-red-700 text-white font-medium hover:bg-red-800"
              >
                Send Reply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultancyAdmin;
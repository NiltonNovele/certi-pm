import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Pencil, Trash2, Plus } from "lucide-react";

interface Vacancy {
  _id?: string;
  title: string;
  company: string;
  position: string;
  location: string;
  type: string;
  link: string;
  description: string;
  status: "Open" | "Closed" | "Canceled";
  createdAt?: string;
}

const emptyVacancy: Vacancy = {
  title: "",
  company: "",
  position: "",
  location: "",
  type: "Full-time",
  link: "",
  description: "",
  status: "Open",
};

export default function OpportunitiesAdmin() {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | Vacancy["status"]>(
    "all"
  );
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingVacancy, setEditingVacancy] = useState<Vacancy | null>(null);
  const [form, setForm] = useState<Vacancy>(emptyVacancy);

  // Fetch
  const fetchVacancies = async () => {
    try {
      const res = await axios.get("/api/vacancies");
      setVacancies(Array.isArray(res.data) ? res.data : []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVacancies();
  }, []);

  // Filters
  const filteredVacancies = useMemo(() => {
    return vacancies
      .filter(v =>
        `${v.title} ${v.company}`.toLowerCase().includes(search.toLowerCase())
      )
      .filter(v => {
        if (statusFilter === "all") return true;
        return v.status === statusFilter;
      });
  }, [vacancies, search, statusFilter]);

  // Handlers
  const openCreateModal = () => {
    setEditingVacancy(null);
    setForm(emptyVacancy);
    setModalOpen(true);
  };

  const openEditModal = (vacancy: Vacancy) => {
    setEditingVacancy(vacancy);
    setForm(vacancy);
    setModalOpen(true);
  };

  const saveVacancy = async () => {
    if (editingVacancy?._id) {
      await axios.put(`/api/vacancies/${editingVacancy._id}`, form);
    } else {
      await axios.post("/api/vacancies", form);
    }

    setModalOpen(false);
    fetchVacancies();
  };

  const deleteVacancy = async (id?: string) => {
    if (!id || !confirm("Delete this vacancy?")) return;
    await axios.delete(`/api/vacancies/${id}`);
    fetchVacancies();
  };

  // UI
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">
          Opportunities Management
        </h1>
        <p className="text-gray-500 mt-1">
          Create, edit and manage project management vacancies
        </p>
      </div>

      {/* CONTROLS */}
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          placeholder="Search by title or company"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value as any)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          <option value="all">All statuses</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
          <option value="Canceled">Canceled</option>
        </select>

        <button
          onClick={openCreateModal}
          className="ml-auto flex items-center gap-2 bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-800"
        >
          <Plus size={16} />
          Add Vacancy
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="p-6 text-gray-500">Loading vacancies...</div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="px-6 py-4 text-left font-medium">Title</th>
                <th className="px-6 py-4 text-left font-medium">Company</th>
                <th className="px-6 py-4 text-left font-medium">Status</th>
                <th className="px-6 py-4 text-right font-medium">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {filteredVacancies.map(v => (
                <tr key={v._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {v.title}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {v.company}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${v.status === "Open"
                          ? "bg-green-100 text-green-700"
                          : v.status === "Closed"
                            ? "bg-gray-200 text-gray-700"
                            : "bg-red-100 text-red-700"
                        }`}
                    >
                      {v.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right flex justify-end gap-4">
                    <button
                      onClick={() => openEditModal(v)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => deleteVacancy(v._id)}
                      className="text-red-700 hover:text-red-800"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}

              {filteredVacancies.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-10 text-center text-gray-500"
                  >
                    No vacancies found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {editingVacancy ? "Edit vacancy" : "Add vacancy"}
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {["title", "company", "position", "location", "link"].map(f => (
                <input
                  key={f}
                  placeholder={f[0].toUpperCase() + f.slice(1)}
                  value={(form as any)[f]}
                  onChange={e =>
                    setForm({ ...form, [f]: e.target.value })
                  }
                  className="border rounded-lg px-4 py-2 text-sm"
                />
              ))}

              <textarea
                placeholder="Description"
                value={form.description}
                onChange={e =>
                  setForm({ ...form, description: e.target.value })
                }
                className="border rounded-lg px-4 py-2 text-sm"
              />

              <select
                value={form.status}
                onChange={e =>
                  setForm({ ...form, status: e.target.value as any })
                }
                className="border rounded-lg px-4 py-2 text-sm"
              >
                <option>Open</option>
                <option>Closed</option>
                <option>Canceled</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={saveVacancy}
                className="px-6 py-2 rounded-lg bg-red-700 text-white hover:bg-red-800"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
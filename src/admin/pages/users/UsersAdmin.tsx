import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  isBlocked: boolean;
  createdAt: string;
}

export default function UsersAdmin() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "blocked">("all");
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const res = await axios.get("/api/users");
      setUsers(Array.isArray(res.data) ? res.data : []);
    } catch {
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    return users
      .filter(u =>
        `${u.name} ${u.email}`.toLowerCase().includes(search.toLowerCase())
      )
      .filter(u => {
        if (filter === "active") return !u.isBlocked;
        if (filter === "blocked") return u.isBlocked;
        return true;
      });
  }, [users, search, filter]);

  const confirmToggle = async () => {
    if (!selectedUser) return;
    await axios.patch(`/api/users/${selectedUser._id}/block`);
    setSelectedUser(null);
    fetchUsers();
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">
          User Management
        </h1>
        <p className="text-gray-500 mt-1">
          View, filter and manage platform users
        </p>
      </div>

      {/* CONTROLS */}
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          placeholder="Search by name or email"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <select
          value={filter}
          onChange={e => setFilter(e.target.value as any)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          <option value="all">All users</option>
          <option value="active">Active</option>
          <option value="blocked">Blocked</option>
        </select>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="p-6 text-gray-500">Loading users...</div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="px-6 py-4 text-left font-medium">Name</th>
                <th className="px-6 py-4 text-left font-medium">Email</th>
                <th className="px-6 py-4 text-left font-medium">Role</th>
                <th className="px-6 py-4 text-left font-medium">Status</th>
                <th className="px-6 py-4 text-right font-medium">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {filteredUsers.map(user => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td
                    className="px-6 py-4 font-medium text-red-700 cursor-pointer hover:underline"
                    onClick={() => navigate(`/admin/users/${user._id}`)}
                  >
                    {user.name}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {user.email}
                  </td>

                  <td className="px-6 py-4 text-gray-600 capitalize">
                    {user.role}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${user.isBlocked
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                        }`}
                    >
                      {user.isBlocked ? "Blocked" : "Active"}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => setSelectedUser(user)}
                      className={`font-medium ${user.isBlocked
                        ? "text-green-700 hover:text-green-800"
                        : "text-red-700 hover:text-red-800"
                        }`}
                    >
                      {user.isBlocked ? "Unblock" : "Block"}
                    </button>
                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-10 text-center text-gray-500"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* MODAL */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {selectedUser.isBlocked ? "Unblock user" : "Block user"}
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              Are you sure you want to{" "}
              {selectedUser.isBlocked ? "unblock" : "block"}{" "}
              <span className="font-medium">{selectedUser.name}</span>?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedUser(null)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={confirmToggle}
                className={`px-6 py-2 rounded-lg text-white font-medium ${selectedUser.isBlocked
                  ? "bg-green-700 hover:bg-green-800"
                  : "bg-red-700 hover:bg-red-800"
                  }`}
              >
                {selectedUser.isBlocked ? "Unblock" : "Block"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
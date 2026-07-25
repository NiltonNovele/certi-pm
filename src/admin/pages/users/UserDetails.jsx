import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState < any > (null);

  useEffect(() => {
    axios.get(`/api/users/${id}`).then(res => setUser(res.data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: 24 }}>
      <button onClick={() => navigate(-1)}>← Back</button>

      <h1>{user.name}</h1>

      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>Status: {user.isBlocked ? "Blocked" : "Active"}</p>
      <p>
        Registered at: {new Date(user.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}
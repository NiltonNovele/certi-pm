import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@db.com" && password === "2026") {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-root">
      <div className="login-box">
        <h2>CERTI PM</h2>

        <form onSubmit={handleLogin}>
          <div className="user-box">
            <input
              type="email"
              required
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>

          <div className="user-box">
            <input
              type="password"
              required
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>

          <div className="btn-wrapper">
            <button type="submit" className="login-btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
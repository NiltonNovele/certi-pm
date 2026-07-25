import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (email === "info@certipm.com" && password === "2026") {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin/dashboard");
    } else {
      setErrorMessage(
        "Invalid credentials. Please check your email and password."
      );
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8f7f5]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-200/30 blur-3xl" />
        <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-2xl lg:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div className="hidden bg-gradient-to-br from-[#7A0A0A] via-[#8f1212] to-[#b31b1b] p-10 text-white lg:flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
                <ShieldCheck className="h-4 w-4" />
                Secure Access
              </div>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight">
                Welcome back to the CertiPM admin panel
              </h1>

              <p className="mt-5 max-w-md text-sm leading-7 text-red-50/90">
                Sign in to manage courses, assessments, consultancy requests,
                opportunities, users, and platform operations from one place.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-sm font-semibold">Protected environment</p>
                <p className="mt-1 text-sm text-red-50/85">
                  Access is restricted to authorised administrators only.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-sm font-semibold">Centralised control</p>
                <p className="mt-1 text-sm text-red-50/85">
                  Manage learning products, users, and internal operations from
                  one dashboard.
                </p>
              </div>

              <div className="pt-2 text-sm text-red-100">
                CERTIPM © {new Date().getFullYear()}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="mx-auto w-full max-w-md">
              <div className="mb-8 text-center lg:text-left">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-[#7A0A0A] lg:mx-0">
                  <ShieldCheck className="h-7 w-7" />
                </div>

                <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
                  Admin Login
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                  Enter your credentials to access the administrative dashboard.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                {/* EMAIL */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Email
                  </label>

                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      required
                      autoComplete="username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-sm text-gray-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Password
                  </label>

                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-10 text-sm text-gray-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
                      placeholder="Enter your password"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </div>

                {/* ERROR */}
                {errorMessage && (
                  <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    <AlertCircle className="mt-0.5 h-4 w-4" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* BUTTON */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#7A0A0A] px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#8d1313]"
                >
                  Login
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <div className="mt-8 rounded-2xl border border-gray-200 bg-[#fafafa] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                  Admin Access
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  This area is intended for internal administrative use only.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
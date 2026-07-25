import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpenText,
  ClipboardCheck,
  Compass,
  Briefcase,
  Users,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  ShieldCheck,
} from "lucide-react";

import logo from "../../../public/atp.jpeg";

interface AdminSidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({
  collapsed,
  setCollapsed,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin/login");
  };

  const tabs = [
    { path: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "courses", label: "Courses", icon: BookOpenText },
    { path: "assessments", label: "Assessments", icon: ClipboardCheck },
    { path: "consultancy", label: "Consultancy", icon: Compass },
    { path: "opportunities", label: "Opportunities", icon: Briefcase },
    { path: "users", label: "Users", icon: Users },
    { path: "settings", label: "Settings", icon: Settings },
  ];

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="fixed left-4 top-4 z-[60] inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#7A0A0A] text-white shadow-lg transition hover:bg-[#8d1313] lg:hidden"
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-label={mobileOpen ? "Close sidebar" : "Open sidebar"}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/45 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-white/10 bg-gradient-to-b from-[#7A0A0A] via-[#730b0b] to-[#5d0808] text-white shadow-2xl transition-all duration-300
        ${collapsed ? "w-[88px]" : "w-[280px]"}
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* Top section */}
        <div className="border-b border-white/10 px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <img
                src={logo}
                alt="CERTIPM"
                className="h-11 w-11 rounded-2xl border border-white/20 object-cover shadow-md"
              />
              <div className="absolute -bottom-1 -right-1 rounded-full bg-white p-1 text-[#7A0A0A] shadow">
                <ShieldCheck className="h-3.5 w-3.5" />
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                collapsed ? "w-0 opacity-0" : "w-44 opacity-100"
              }`}
            >
              <p className="truncate text-sm font-semibold uppercase tracking-[0.18em] text-red-200">
                CERTIPM
              </p>
              <p className="mt-0.5 text-base font-bold leading-tight text-white">
                Admin Panel
              </p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <div
            className={`mb-4 overflow-hidden px-2 transition-all duration-300 ${
              collapsed ? "h-0 opacity-0" : "h-auto opacity-100"
            }`}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-200/80">
              Main navigation
            </p>
          </div>

          <nav className="space-y-1.5">
            {tabs.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname.includes(path);

              return (
                <Link
                  key={path}
                  to={path}
                  className={`group flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-white text-[#7A0A0A] shadow-md"
                      : "text-red-100 hover:bg-white/10 hover:text-white"
                  }`}
                  title={collapsed ? label : undefined}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${
                      isActive
                        ? "bg-[#7A0A0A]/10"
                        : "bg-white/5 group-hover:bg-white/10"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      collapsed ? "w-0 opacity-0" : "w-40 opacity-100"
                    }`}
                  >
                    <span className="block truncate">{label}</span>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer / user */}
        <div className="border-t border-white/10 p-3">
          <div className="rounded-2xl bg-white/5 p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#A81414] text-sm font-bold text-white shadow">
                A
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  collapsed ? "w-0 opacity-0" : "w-40 opacity-100"
                }`}
              >
                <p className="truncate text-sm font-semibold text-white">
                  Admin User
                </p>
                <p className="truncate text-xs text-red-200">
                  admin@certipm.com
                </p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="mt-3 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-100 transition hover:bg-white/10 hover:text-white"
              title={collapsed ? "Logout" : undefined}
            >
              <LogOut className="h-5 w-5 shrink-0" />
              <span
                className={`overflow-hidden transition-all duration-300 ${
                  collapsed ? "w-0 opacity-0" : "w-16 opacity-100"
                }`}
              >
                Logout
              </span>
            </button>
          </div>
        </div>

        {/* Desktop collapse toggle */}
        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="absolute -right-3 top-24 hidden h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-[#A81414] text-white shadow-lg transition hover:bg-[#be1a1a] lg:flex"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </aside>
    </>
  );
};

export default AdminSidebar;
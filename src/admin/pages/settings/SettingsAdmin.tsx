import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  Globe,
  Moon,
  UserPlus,
  Wrench,
  Save,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldAlert,
} from "lucide-react";

// TYPES
type Settings = {
  language: "en" | "pt";
  allowRegistrations: boolean;
  maintenanceMode: boolean;
};

// COMPONENT
export default function SettingsAdmin() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [initialSettings, setInitialSettings] = useState<Settings | null>(null);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // LOCAL dark mode (just Settings page)
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        setLoading(true);
        setErrorMessage("");
        const res = await axios.get("/api/settings");
        setSettings(res.data);
        setInitialSettings(res.data);
      } catch {
        setErrorMessage("Failed to load settings.");
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const updateSetting = <K extends keyof Settings>(
    key: K,
    value: Settings[K]
  ) => {
    if (!settings) return;
    setSettings({ ...settings, [key]: value });
    setSuccess(false);
  };

  const saveSettings = async () => {
    if (!settings) return;

    try {
      setSaving(true);
      setErrorMessage("");
      await axios.put("/api/settings", settings);
      setInitialSettings(settings);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setErrorMessage("Failed to save settings.");
    } finally {
      setSaving(false);
    }
  };

  const hasChanges = useMemo(() => {
    if (!settings || !initialSettings) return false;
    return JSON.stringify(settings) !== JSON.stringify(initialSettings);
  }, [settings, initialSettings]);

  if (loading) {
    return (
      <div className="min-h-[60vh] p-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
            <Loader2 className="h-5 w-5 animate-spin text-red-700" />
            <span className="text-sm font-medium text-gray-700">
              Loading settings...
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (!settings) {
    return (
      <div className="min-h-[60vh] p-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700 shadow-sm">
            {errorMessage || "Unable to load settings."}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-[#f8f7f5] transition-colors dark:bg-gray-950">
        <div className="mx-auto max-w-6xl p-4 sm:p-6">
          <div className="space-y-8 rounded-[28px] border border-gray-200 bg-white p-5 shadow-xl transition-colors dark:border-gray-800 dark:bg-gray-900 sm:p-8">
            {/* HEADER */}
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-red-700 dark:bg-red-950/30 dark:text-red-300">
                  <Wrench className="h-4 w-4" />
                  Platform Settings
                </div>

                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                  Settings
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
                  Manage essential platform configurations, localisation options,
                  access controls, and critical system behaviour.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <StatusCard
                  label="Dark mode"
                  value={darkMode ? "Enabled" : "Disabled"}
                  dark={darkMode}
                />
                <StatusCard
                  label="Unsaved changes"
                  value={hasChanges ? "Yes" : "No"}
                  dark={darkMode}
                />
              </div>
            </div>

            {/* Alerts */}
            {errorMessage && (
              <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/20 dark:text-red-300">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {success && (
              <div className="flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-900/40 dark:bg-green-950/20 dark:text-green-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Settings saved successfully.</span>
              </div>
            )}

            {/* GRID */}
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <Section
                icon={<Moon className="h-5 w-5" />}
                title="Appearance"
                description="Visual preferences for this page"
                dark={darkMode}
              >
                <Switch
                  label="Dark Mode"
                  description="Applies only to the Settings page"
                  enabled={darkMode}
                  onChange={setDarkMode}
                  dark={darkMode}
                />
              </Section>

              <Section
                icon={<Globe className="h-5 w-5" />}
                title="Localization"
                description="Language preferences"
                dark={darkMode}
              >
                <Select
                  label="Default Language"
                  value={settings.language}
                  onChange={(e) =>
                    updateSetting("language", e.target.value as "en" | "pt")
                  }
                  dark={darkMode}
                >
                  <option value="en">English</option>
                  <option value="pt">Português</option>
                </Select>
              </Section>

              <Section
                icon={<UserPlus className="h-5 w-5" />}
                title="Access Control"
                description="User registration settings"
                dark={darkMode}
              >
                <Switch
                  label="Allow New Registrations"
                  description="Enable or disable public sign-ups"
                  enabled={settings.allowRegistrations}
                  onChange={(value) =>
                    updateSetting("allowRegistrations", value)
                  }
                  dark={darkMode}
                />
              </Section>

              <Section
                icon={<ShieldAlert className="h-5 w-5" />}
                title="System"
                description="Critical system configuration"
                danger
                dark={darkMode}
              >
                <Switch
                  label="Maintenance Mode"
                  description="Restrict access to admins only"
                  enabled={settings.maintenanceMode}
                  onChange={(value) => {
                    if (
                      value &&
                      !window.confirm(
                        "Enabling maintenance mode will log out all users. Continue?"
                      )
                    ) {
                      return;
                    }
                    updateSetting("maintenanceMode", value);
                  }}
                  dark={darkMode}
                />
              </Section>
            </div>

            {/* SAVE BAR */}
            <div className="sticky bottom-4 z-10">
              <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-lg backdrop-blur dark:border-gray-800 dark:bg-gray-900/90 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Ready to save your changes?
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {hasChanges
                      ? "You have unsaved changes."
                      : "No changes to save yet."}
                  </p>
                </div>

                <button
                  onClick={saveSettings}
                  disabled={saving || !hasChanges}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// UI COMPONENTS
function Section({
  title,
  description,
  danger,
  children,
  icon,
  dark,
}: {
  title: string;
  description?: string;
  danger?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border p-6 transition-colors ${
        danger
          ? "border-red-200 bg-red-50/60 dark:border-red-900/40 dark:bg-red-950/10"
          : "border-gray-200 bg-[#fafafa] dark:border-gray-800 dark:bg-gray-950/50"
      }`}
    >
      <div className="mb-5 flex items-start gap-4">
        <div
          className={`rounded-2xl p-3 ${
            danger
              ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
              : "bg-white text-red-700 shadow-sm dark:bg-gray-900 dark:text-red-300"
          }`}
        >
          {icon}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            {title}
          </h2>
          {description && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      </div>

      {children}
    </div>
  );
}

function Select({
  label,
  dark,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-sm">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <select
        {...props}
        className="mt-2 w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:ring-2 focus:ring-red-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
      />
    </div>
  );
}

function Switch({
  label,
  description,
  enabled,
  onChange,
  dark,
}: {
  label: string;
  description?: string;
  enabled: boolean;
  onChange: (value: boolean) => void;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
      <div className="min-w-0">
        <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
          {label}
        </p>
        {description && (
          <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition ${
          enabled ? "bg-red-700" : "bg-gray-300 dark:bg-gray-700"
        }`}
        aria-pressed={enabled}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}

function StatusCard({
  label,
  value,
  dark,
}: {
  label: string;
  value: string;
  dark?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-[#fafafa] px-4 py-4 dark:border-gray-800 dark:bg-gray-950/50">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
        {value}
      </p>
    </div>
  );
}
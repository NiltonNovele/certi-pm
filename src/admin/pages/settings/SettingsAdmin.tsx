import { useEffect, useState } from "react";
import axios from "axios";

// TYPES
type Settings = {
    language: "en" | "pt";
    allowRegistrations: boolean;
    maintenanceMode: boolean;
};

// COMPONENT
export default function SettingsAdmin() {
    const [settings, setSettings] = useState<Settings | null>(null);
    const [saving, setSaving] = useState(false);
    const [success, setSuccess] = useState(false);

    // LOCAL dark mode (just Settings)
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        axios.get("/api/settings").then((res) => setSettings(res.data));
    }, []);

    const updateSetting = (key: keyof Settings, value: boolean | string) => {
        if (!settings) return;
        setSettings({ ...settings, [key]: value });
    };

    const saveSettings = async () => {
        if (!settings) return;

        try {
            setSaving(true);
            await axios.put("/api/settings", settings);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        } catch {
            alert("Failed to save settings");
        } finally {
            setSaving(false);
        }
    };

    if (!settings) return <p className="p-6">Loading settings...</p>;

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="p-6 max-w-6xl mx-auto space-y-8 bg-gray-50 dark:bg-gray-900 rounded-xl transition-colors">

                {/* HEADER */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
                            Settings
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Manage essential platform configurations
                        </p>
                    </div>
                </div>

                {/* APPEARANCE + LOCALIZATION */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Section
                        title="Appearance"
                        description="Visual preferences for this page"
                    >
                        <Switch
                            label="Dark Mode"
                            description="Applies only to the Settings page"
                            enabled={darkMode}
                            onChange={setDarkMode}
                        />
                    </Section>

                    <Section
                        title="Localization"
                        description="Language preferences"
                    >
                        <Select
                            label="Default Language"
                            value={settings.language}
                            onChange={(e) =>
                                updateSetting("language", e.target.value as "en" | "pt")
                            }
                        >
                            <option value="en">English</option>
                            <option value="pt">Português</option>
                        </Select>
                    </Section>
                </div>

                {/* ACCESS CONTROL */}
                <Section
                    title="Access Control"
                    description="User registration settings"
                >
                    <Switch
                        label="Allow New Registrations"
                        description="Enable or disable public sign-ups"
                        enabled={settings.allowRegistrations}
                        onChange={(value) =>
                            updateSetting("allowRegistrations", value)
                        }
                    />
                </Section>

                {/* SYSTEM */}
                <Section
                    title="System"
                    description="Critical system configuration"
                    danger
                >
                    <Switch
                        label="Maintenance Mode"
                        description="Restrict access to admins only"
                        enabled={settings.maintenanceMode}
                        onChange={(value) => {
                            if (
                                value &&
                                !confirm(
                                    "Enabling maintenance mode will log out all users. Continue?"
                                )
                            )
                                return;
                            updateSetting("maintenanceMode", value);
                        }}
                    />
                </Section>

                {/* ACTIONS */}
                <div className="flex items-center justify-between pt-2">
                    {success && (
                        <span className="text-green-600 text-sm">
                            Settings saved successfully ✔
                        </span>
                    )}

                    <button
                        onClick={saveSettings}
                        disabled={saving}
                        className="ml-auto bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 disabled:opacity-60 transition"
                    >
                        {saving ? "Saving..." : "Save Changes"}
                    </button>
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
}: {
    title: string;
    description?: string;
    danger?: boolean;
    children: React.ReactNode;
}) {
    return (
        <div
            className={`rounded-xl border p-6 space-y-4 transition-colors ${danger
                ? "border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/10"
                : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                }`}
        >
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
            {children}
        </div>
    );
}

function Select({ label, ...props }: any) {
    return (
        <div className="max-w-sm">
            <label className="text-sm text-gray-600 dark:text-gray-400">
                {label}
            </label>
            <select
                {...props}
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
        </div>
    );
}

function Switch({
    label,
    description,
    enabled,
    onChange,
}: {
    label: string;
    description?: string;
    enabled: boolean;
    onChange: (value: boolean) => void;
}) {
    return (
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {label}
                </p>
                {description && (
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        {description}
                    </p>
                )}
            </div>

            <button
                type="button"
                onClick={() => onChange(!enabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${enabled ? "bg-red-700" : "bg-gray-300 dark:bg-gray-600"
                    }`}
            >
                <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${enabled ? "translate-x-6" : "translate-x-1"
                        }`}
                />
            </button>
        </div>
    );
}
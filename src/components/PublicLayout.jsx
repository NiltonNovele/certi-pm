import Navigation from "./Navigation";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="flex-1 pt-6">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default PublicLayout;
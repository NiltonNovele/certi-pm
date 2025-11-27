import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./components/Home";
import Enquiry from "./components/Contacto";
import Footer from "./components/Footer";
import ProjectQuiz from "./components/KnownCourseForm";
import Terms from "./components/terms";
import axios from "axios";
import CookieConsent from "./components/CookieConsent";
import Navigation from "./components/Navigation";

import NotFound from "./components/404";
import PaymentSuccess from "./components/PaymentSuccess";

const token = localStorage.getItem("authToken");
if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;


function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Enquiry />} />
      <Route path="/terms" element={<Terms />} />
      
      <Route
        path="/projectQuiz"
        element={
            <ProjectQuiz />
        }
      />
      <Route 
        path="/payment-success" 
        element={
            <PaymentSuccess />
          } 
      />


      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <ThemeProvider>
      {/* <FormDataProvider> */}
        <Router>
          <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            <Navigation />
            <main className="flex-1 pt-6">
              <AppRoutes />
            </main>
            <Footer />
            <CookieConsent />
          </div>
        </Router>
      {/* </FormDataProvider> */}
    </ThemeProvider>
  );
}


export default App;

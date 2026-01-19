import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
// import { SignedIn, SignedOut } from '@clerk/clerk-react';

// Admin Tests
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./admin/components/ProtectedRoute";
import AdminLogin from "./admin/components/AdminLogin";
import PublicLayout from "./components/PublicLayout";
import UserDetails from "./admin/pages/users/UserDetails";
// ...

import Home from "./components/Home";
import Enquiry from "./components/Contacto";
//...import Footer from "./components/Footer";
import ProjectQuiz from "./components/pmp";
import Terms from "./components/terms";
import axios from "axios";
//...import CookieConsent from "./components/CookieConsent";
//...import Navigation from "./components/Navigation";

import NotFound from "./components/404";
// import PaymentSuccess from "./components/PaymentSuccess";
import Choose from "./components/choice";
import CAPM from "./components/capm";
//...import AdminDashboard from "./components/admin";
import QuizRunner from "./components/QuizRunner";
import QuizReview from "./components/QuizReview";
import SCRUMQuiz from "./components/scrum";
import Courses from "./components/courses";
import Services from "./components/services";
import Opportunities from "./components/opportunities";

// Admin Tests - Pages
import AdminLayout from "./admin/AdminLayout";
import DashboardAdmin from "./admin/pages/dashboard/DashboardAdmin";
import CoursesAdmin from "./admin/pages/courses/CoursesAdmin";
import AssessmentsAdmin from "./admin/pages/assessments/AssessmentsAdmin";
import ConsultancyAdmin from "./admin/pages/consultancy/ConsultancyAdmin";
import OpportunitiesAdmin from "./admin/pages/opportunities/OpportunitiesAdmin";
import UsersAdmin from "./admin/pages/users/UsersAdmin";
import SettingsAdmin from "./admin/pages/settings/SettingsAdmin";
// ...

const token = localStorage.getItem("authToken");
if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

/*...
function AppRoutes() {
  return (
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/contact" element={<Enquiry />} />
  <Route path="/terms" element={<Terms />} /> 
  <Route path="/admin" element={<AdminDashboard />} /> 
  <Route path="/runner" element={<QuizRunner />} />

  {/* Project Quiz /}
  <Route path="/pmp" element={<ProjectQuiz />} />
  <Route path="/capm" element={<CAPM />} />
  <Route path="/scrum" element={<SCRUMQuiz />} />

  <Route path="/choice" element={<Choose />} />
  <Route path="/services" element={<Services />} />
  <Route path="/courses" element={<Courses />} />
  <Route path="/runner" element={<QuizRunner />} />
  <Route path="/opportunities" element={<Opportunities />} />
  <Route path="/results" element={<QuizReview />} />

  <Route path="*" element={<NotFound />} />
</Routes>
  );
}
*/

// Admin Tests
function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Enquiry />} />
            <Route path="/terms" element={<Terms />} />
            {/* <Route path="/admin" element={<AdminDashboard />} /> */}
            <Route path="/runner" element={<QuizRunner />} />

            {/* Project Quiz */}
            <Route path="/pmp" element={<ProjectQuiz />} />
            <Route path="/capm" element={<CAPM />} />
            <Route path="/scrum" element={<SCRUMQuiz />} />

            <Route path="/choice" element={<Choose />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/runner" element={<QuizRunner />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/results" element={<QuizReview />} />
          </Route>

          {/* ADMIN LOGIN (WITHOUT PROTECTION) */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* ADMIN */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            {/* STANDARD ADMIN ROUTE */}
            <Route index element={<Navigate to="dashboard" replace />} />

            <Route path="users/:id" element={<UserDetails />} />

            <Route path="dashboard" element={<DashboardAdmin />} />
            <Route path="users" element={<UsersAdmin />} />
            <Route path="settings" element={<SettingsAdmin />} />
            <Route path="consultancy" element={<ConsultancyAdmin />} />
            <Route path="courses" element={<CoursesAdmin />} />
            <Route path="assessments" element={<AssessmentsAdmin />} />
            <Route path="opportunities" element={<OpportunitiesAdmin />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
//...

export default App;
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword.jsx";
import PatientDashboard from "./Pages/PatientDashboard.jsx";
import DonorDashboard from "./Pages/DonorDashboard.jsx";
import DonationHistory from "./components/donor/DonationHistory.jsx";
import DonorProfile from "./Pages/DonorProfilePage.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import Profile from "./Pages/Profile.jsx";
import DonationRequest from "./Pages/DonationRequest.jsx";
import PatientBloodRequest from "./Pages/PatientBloodRequest.jsx";
import BloodAvailabilitySearch from "./Pages/BloodAvailabilitySearch.jsx";
import DonorBloodScheduling from "./Pages/DonorBloodScheduling.jsx";

import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer position="top-right" autoClose={3000} />
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/donor" element={<DonorDashboard />} />
        <Route path="/donation-history" element={<DonationHistory />} />
        <Route path="/donor-profile" element={<DonorProfile />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/donation-request" element={<DonationRequest />}/>
        <Route path="/patient-blood-request" element={<PatientBloodRequest/>}/>
        <Route path="/blood-availability" element={<BloodAvailabilitySearch />}/>
        <Route path="/donor-blood-scheduling" element={<DonorBloodScheduling/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
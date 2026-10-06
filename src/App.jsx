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
import PatientDashboard from "./Pages/PatientDashboard.jsx";
import DonorDashboard from "./Pages/DonorDashboard.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import Profile from "./Pages/Profile.jsx";
import DonationRequest from "./Pages/DonationRequest.jsx";
import PatientBloodRequest from "./Pages/PatientBloodRequest.jsx";
import DonorBloodScheduling from "./Pages/DonorBloodScheduling.jsx";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/patient" element={<PatientDashboard />} />

        <Route path="/donor" element={<DonorDashboard />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/donation-request" element={<DonationRequest />}/>
        <Route path="/patient-blood-request" element={<PatientBloodRequest/>}/>
        <Route path="/donor-blood-scheduling" element={<DonorBloodScheduling/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register";
import PatientDashboard from "./Pages/PatientDashboard.jsx";
import DonorDashboard from "./Pages/DonorDashboard.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import Profile from "./Pages/Profile.jsx";
import DonationRequest from "./Pages/DonationRequest.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/patient" element={<PatientDashboard />} />

        <Route path="/donor" element={<DonorDashboard />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/donation-request" element={<DonationRequest />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
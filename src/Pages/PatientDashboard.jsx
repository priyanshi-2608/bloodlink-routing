import "../components/patient/patient.css"
import Navbar from "../components/patient/Navbar";
import WelcomeSection from "../components/patient/WelcomSection";
import DashboardCards from "../components/patient/DashboardCards";
import BloodRequest from "../components/patient/BloodRequest";
import RecentRequests from "../components/patient/RecentRequest";

function PatientDashboard() {
  return (
    <>
      <Navbar />

      <main>
        <WelcomeSection />
        <DashboardCards />
        <BloodRequest />
        <RecentRequests />
      </main>
    </>
  );
}

export default PatientDashboard;
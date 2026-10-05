import "../components/admin/admin.css"
import Navbar from "../components/admin/Navbar";
import WelcomeSection from "../components/admin/WelcomeSection";
import DashboardStats from "../components/admin/DashboardStats";
import UserManagement from "../components/admin/UserManagement";
import RecentRequest from "../components/admin/RecentRequest";
import BloodStock from "../components/admin/BloodStock";

function AdminDashboard() {
  return (
    <>
      <Navbar />

      <main>
        <WelcomeSection />
        <DashboardStats />
        <UserManagement />
        <RecentRequest />
        <BloodStock />
      </main>
    </>
  );
}

export default AdminDashboard;
import "../components/admin/admin.css";
import Navbar from "../components/admin/Navbar";
import AdminSidebar from "../components/admin/AdminSidebar";
import WelcomeSection from "../components/admin/WelcomeSection";
import DashboardStats from "../components/admin/DashboardStats";
import UserManagement from "../components/admin/UserManagement";
import RecentRequest from "../components/admin/RecentRequest";
import BloodStock from "../components/admin/BloodStock";

function AdminDashboard() {
  return (
    <>
      <div className="container-fluid py-4">
        <div className="row g-4">
          <div className="col-12 col-lg-3 col-xl-2">
            <AdminSidebar />
          </div>
          <main className="col-12 col-lg-9 col-xl-10">
            <WelcomeSection />
            <DashboardStats />
            <UserManagement />
            <RecentRequest />
            <BloodStock />
          </main>

        </div>
      </div>
    </>
  );
}

export default AdminDashboard;

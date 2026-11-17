import { useState } from "react";

function AdminSidebar() {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <aside className="admin-sidebar">
      <h5 className="sidebar-title">
        <i className="bi bi-speedometer2 me-2"></i>
        Admin Menu
      </h5>

      <div className="accordion" id="adminSidebarAccordion">

        {/* Dashboard */}
        <div className="accordion-item">
          <button
            className={`sidebar-link ${activeMenu === "dashboard" ? "active" : ""}`}
            onClick={() => handleMenuClick("dashboard")}
          >
            <i className="bi bi-grid me-2"></i>
            Dashboard
          </button>
        </div>

        {/* User Management */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#usersMenu"
            >
              <i className="bi bi-people me-2"></i>
              User Management
            </button>
          </h2>

          <div
            id="usersMenu"
            className="accordion-collapse collapse"
            data-bs-parent="#adminSidebarAccordion"
          >
            <div className="accordion-body">
              <button
                className="sidebar-submenu"
                onClick={() => handleMenuClick("patients")}
              >
                Patients
              </button>

              <button
                className="sidebar-submenu"
                onClick={() => handleMenuClick("donors")}
              >
                Donors
              </button>
            </div>
          </div>
        </div>

        {/* Blood Management */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#bloodMenu"
            >
              <i className="bi bi-droplet me-2"></i>
              Blood Management
            </button>
          </h2>

          <div
            id="bloodMenu"
            className="accordion-collapse collapse"
            data-bs-parent="#adminSidebarAccordion"
          >
            <div className="accordion-body">
              <button
                className="sidebar-submenu"
                onClick={() => handleMenuClick("requests")}
              >
                Blood Requests
              </button>

              <button
                className="sidebar-submenu"
                onClick={() => handleMenuClick("stock")}
              >
                Blood Stock
              </button>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="accordion-item">
          <button
            className={`sidebar-link ${activeMenu === "settings" ? "active" : ""}`}
            onClick={() => handleMenuClick("settings")}
          >
            <i className="bi bi-gear me-2"></i>
            Settings
          </button>
        </div>

      </div>
    </aside>
  );
}

export default AdminSidebar;

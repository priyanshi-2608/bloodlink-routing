const dashboardStats = [
  {
    title: "Blood Group",
    value: "B+",
    icon: "bi-droplet-fill",
    description: "Your registered blood group",
  },
  {
    title: "Active Requests",
    value: "2",
    icon: "bi-clipboard2-pulse-fill",
    description: "Currently active requests",
  },
  {
    title: "Completed",
    value: "5",
    icon: "bi-check-circle-fill",
    description: "Successfully completed",
  },
  {
    title: "Notifications",
    value: "3",
    icon: "bi-bell-fill",
    description: "Unread notifications",
  },
];

function DashboardCards() {
  return (
    <div className="row g-4 mb-4">
      {dashboardStats.map((stat) => (
        <div className="col-12 col-sm-6 col-xl-3" key={stat.title}>
          <div className="stat-card h-100">
            <div className="stat-icon">
              <i className={`bi ${stat.icon}`}></i>
            </div>

            <div>
              <p className="text-muted mb-1 small">
                {stat.title}
              </p>

              <h3 className="fw-bold mb-1">
                {stat.value}
              </h3>

              <p className="text-muted small mb-0">
                {stat.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;
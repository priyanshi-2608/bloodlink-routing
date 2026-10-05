const dashboardStats = [
  {
    title: "Total Patients",
    value: "248",
    icon: "bi-people-fill",
    description: "Registered patients",
  },
  {
    title: "Total Donors",
    value: "156",
    icon: "bi-heart-pulse-fill",
    description: "Registered donors",
  },
  {
    title: "Blood Requests",
    value: "42",
    icon: "bi-clipboard2-pulse-fill",
    description: "Total blood requests",
  },
  {
    title: "Pending Blood Requests",
    value: "12",
    icon: "bi-hourglass-split",
    description: "Awaiting action",
  },
];

function DashboardStats() {
  return (
    <div className="row g-4 mb-4">
      {dashboardStats.map((stat) => (
        <div
          className="col-12 col-sm-6 col-xl-3"
          key={stat.title}
        >
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

export default DashboardStats;
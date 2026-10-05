const donorStats = [
  {
    title: "Blood Group",
    value: "B+",
    icon: "bi-droplet-fill",
    description: "Your registered blood group",
  },
  {
    title: "Total Donations",
    value: "8",
    icon: "bi-heart-pulse-fill",
    description: "Successful donations",
  },
  {
    title: "Lives Helped",
    value: "24",
    icon: "bi-people-fill",
    description: "People benefited",
  },
  {
    title: "Last Donation",
    value: "12 Aug",
    icon: "bi-calendar-heart",
    description: "Your latest donation",
  },
];

function DonorStats() {
  return (
    <div className="row g-4 mb-4">
      {donorStats.map((stat) => (
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

export default DonorStats;
const donationHistory = [
  {
    date: "12 Aug 2026",
    hospital: "City Care Hospital",
    units: 1,
    status: "Completed",
  },
  {
    date: "18 May 2026",
    hospital: "Civil Hospital",
    units: 1,
    status: "Completed",
  },
  {
    date: "20 Feb 2026",
    hospital: "Apollo Hospital",
    units: 1,
    status: "Completed",
  },
];

function DonationHistory() {
  return (
    <div className="card dashboard-card border-0 mb-4">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h4 className="fw-bold mb-1">
              Donation History
            </h4>

            <p className="text-muted small mb-0">
              Your recent blood donation activity
            </p>
          </div>

          <button className="btn btn-outline-danger btn-sm">
            View All
          </button>
        </div>

        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead>
              <tr>
                <th>Date</th>
                <th>Hospital</th>
                <th>Units</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {donationHistory.map((donation) => (
                <tr key={donation.date}>
                  <td>{donation.date}</td>

                  <td>{donation.hospital}</td>

                  <td>{donation.units}</td>

                  <td>
                    <span className="badge text-bg-success">
                      {donation.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DonationHistory;
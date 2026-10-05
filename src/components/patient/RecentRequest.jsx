const requests = [
  {
    id: "BL-1024",
    bloodGroup: "B+",
    hospital: "City Care Hospital",
    date: "24 Aug 2026",
    units: "2",
    status: "Active",
  },
  {
    id: "BL-1018",
    bloodGroup: "B+",
    hospital: "Civil Hospital",
    date: "18 Aug 2026",
    units: "1",
    status: "Completed",
  },
  {
    id: "BL-1007",
    bloodGroup: "B+",
    hospital: "Apollo Hospital",
    date: "10 Aug 2026",
    units: "2",
    status: "Completed",
  },
];

function RecentRequests() {
  return (
    <div className="card dashboard-card border-0">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h4 className="fw-bold mb-1">
              Recent Blood Requests
            </h4>

            <p className="text-muted small mb-0">
              Your latest blood request activity
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
                <th>Request ID</th>
                <th>Blood Group</th>
                <th>Hospital</th>
                <th>Date</th>
                <th>Units</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((request) => (
                <tr key={request.id}>
                  <td className="fw-semibold">
                    {request.id}
                  </td>

                  <td>
                    <span className="blood-badge">
                      {request.bloodGroup}
                    </span>
                  </td>

                  <td>{request.hospital}</td>

                  <td>{request.date}</td>

                  <td>{request.units}</td>

                  <td>
                    <span
                      className={`badge ${
                        request.status === "Active"
                          ? "text-bg-warning"
                          : "text-bg-success"
                      }`}
                    >
                      {request.status}
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

export default RecentRequests;
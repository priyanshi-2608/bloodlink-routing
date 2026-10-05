const requests = [
  {
    id: "BL-1024",
    patient: "Rahul Shah",
    bloodGroup: "B+",
    hospital: "City Care Hospital",
    date: "28 Aug 2026",
    status: "Pending",
  },
  {
    id: "BL-1023",
    patient: "Neha Patel",
    bloodGroup: "O+",
    hospital: "Civil Hospital",
    date: "27 Aug 2026",
    status: "Approved",
  },
  {
    id: "BL-1022",
    patient: "Amit Mehta",
    bloodGroup: "A+",
    hospital: "Apollo Hospital",
    date: "26 Aug 2026",
    status: "Completed",
  },
  {
    id: "BL-1021",
    patient: "Kavya Shah",
    bloodGroup: "AB+",
    hospital: "Sterling Hospital",
    date: "25 Aug 2026",
    status: "Pending",
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
              Monitor the latest blood requests
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
                <th>Patient</th>
                <th>Blood Group</th>
                <th>Hospital</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((request) => (
                <tr key={request.id}>
                  <td className="fw-semibold">
                    {request.id}
                  </td>

                  <td>{request.patient}</td>

                  <td>
                    <span className="blood-badge">
                      {request.bloodGroup}
                    </span>
                  </td>

                  <td>{request.hospital}</td>

                  <td>{request.date}</td>

                  <td>
                    <span
                      className={`badge ${
                        request.status === "Pending"
                          ? "text-bg-warning"
                          : request.status === "Approved"
                          ? "text-bg-primary"
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
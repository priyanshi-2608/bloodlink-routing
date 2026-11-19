import { useState, useEffect } from "react";

const requests = [
  {
    id: "BL-1024",
    bloodGroup: "B+",
    hospital: "City Care Hospital",
    location: "Ahmedabad",
    units: 2,
    urgency: "Urgent",
  },
  {
    id: "BL-1021",
    bloodGroup: "O+",
    hospital: "Civil Hospital",
    location: "Ahmedabad",
    units: 1,
    urgency: "Normal",
  },
  {
    id: "BL-1018",
    bloodGroup: "A+",
    hospital: "Apollo Hospital",
    location: "Ahmedabad",
    units: 2,
    urgency: "Urgent",
  },
];

function BloodRequestsSkeleton() {
  return (
    <div className="card dashboard-card border-0 mb-4">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="w-50">
            <div className="placeholder-glow">
              <span className="placeholder col-6"></span>
              <span className="placeholder col-9"></span>
            </div>
          </div>

          <div className="placeholder-glow">
            <span className="placeholder col-12" style={{ width: "75px" }}></span>
          </div>
        </div>

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="row align-items-center py-3 border-top"
          >
            <div className="col-2 placeholder-glow">
              <span className="placeholder col-10"></span>
            </div>

            <div className="col-2 placeholder-glow">
              <span className="placeholder col-8"></span>
            </div>

            <div className="col-3 placeholder-glow">
              <span className="placeholder col-10"></span>
            </div>

            <div className="col-2 placeholder-glow">
              <span className="placeholder col-8"></span>
            </div>

            <div className="col-1 placeholder-glow">
              <span className="placeholder col-6"></span>
            </div>

            <div className="col-2 placeholder-glow">
              <span className="placeholder col-8"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function BloodRequests() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
  return <BloodRequestsSkeleton />;
}
  return (
    <div className="card dashboard-card border-0 mb-4">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h4 className="fw-bold mb-1">
              Blood Requests
            </h4>

            <p className="text-muted small mb-0">
              Patients currently looking for eligible donors
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
                <th>Location</th>
                <th>Units</th>
                <th>Urgency</th>
                <th>Action</th>
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

                  <td>{request.location}</td>

                  <td>{request.units}</td>

                  <td>
                    <span
                      className={`badge ${request.urgency === "Urgent"
                          ? "text-bg-danger"
                          : "text-bg-warning"
                        }`}
                    >
                      {request.urgency}
                    </span>
                  </td>

                  <td>
                    <button className="btn btn-sm btn-danger">
                      Respond
                    </button>
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

export default BloodRequests;
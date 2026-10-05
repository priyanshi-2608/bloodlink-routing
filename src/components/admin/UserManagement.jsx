const users = [
  {
    name: "Rahul Shah",
    email: "rahul@example.com",
    role: "Patient",
    status: "Active",
  },
  {
    name: "Neha Patel",
    email: "neha@example.com",
    role: "Donor",
    status: "Active",
  },
  {
    name: "Amit Mehta",
    email: "amit@example.com",
    role: "Patient",
    status: "Inactive",
  },
];

function UserManagement() {
  return (
    <div className="card dashboard-card border-0 mt-4">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h4 className="fw-bold mb-1">
              User Management
            </h4>

            <p className="text-muted small mb-0">
              Manage registered BloodLink users
            </p>
          </div>

          <button className="btn btn-danger btn-sm">
            <i className="bi bi-person-plus-fill me-1"></i>
            Add User
          </button>
        </div>

        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.email}>
                  <td className="fw-semibold">
                    {user.name}
                  </td>

                  <td>{user.email}</td>

                  <td>
                    <span className="badge text-bg-light border">
                      {user.role}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`badge ${
                        user.status === "Active"
                          ? "text-bg-success"
                          : "text-bg-secondary"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td>
                    <button className="btn btn-sm btn-outline-secondary">
                      <i className="bi bi-three-dots"></i>
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

export default UserManagement;
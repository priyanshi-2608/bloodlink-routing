import { useState } from "react";

function BloodStock() {
  const [bloodStock, setBloodStock] = useState([
    {
      bloodGroup: "A+",
      units: 25,
      status: "Available",
      lastUpdated: "Today",
    },
    {
      bloodGroup: "A-",
      units: 8,
      status: "Low Stock",
      lastUpdated: "Today",
    },
    {
      bloodGroup: "B+",
      units: 32,
      status: "Available",
      lastUpdated: "Today",
    },
    {
      bloodGroup: "B-",
      units: 5,
      status: "Low Stock",
      lastUpdated: "Today",
    },
    {
      bloodGroup: "AB+",
      units: 12,
      status: "Available",
      lastUpdated: "Today",
    },
    {
      bloodGroup: "AB-",
      units: 2,
      status: "Critical",
      lastUpdated: "Today",
    },
    {
      bloodGroup: "O+",
      units: 40,
      status: "Available",
      lastUpdated: "Today",
    },
    {
      bloodGroup: "O-",
      units: 7,
      status: "Low Stock",
      lastUpdated: "Today",
    },
  ]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(bloodStock.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentStock = bloodStock.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const getStatusClass = (status) => {
    if (status === "Available") {
      return "text-bg-success";
    }

    if (status === "Low Stock") {
      return "text-bg-warning";
    }

    return "text-bg-danger";
  };

  const handleUnitsChange = (index, value) => {
    const updatedStock = [...bloodStock];

    updatedStock[index].units = Number(value);

    if (updatedStock[index].units <= 3) {
      updatedStock[index].status = "Critical";
    } else if (updatedStock[index].units <= 10) {
      updatedStock[index].status = "Low Stock";
    } else {
      updatedStock[index].status = "Available";
    }

    setBloodStock(updatedStock);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="py-5">
      {/* Section Heading */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Blood Stock</h2>
          <p className="text-muted mb-0">
            Monitor and manage available blood units
          </p>
        </div>

        <span className="badge text-bg-danger fs-6">
          <i className="bi bi-droplet-fill me-1"></i>
          Admin
        </span>
      </div>

      {/* Blood Stock Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th className="px-4">Blood Group</th>
                  <th>Available Units</th>
                  <th>Status</th>
                  <th>Last Updated</th>
                </tr>
              </thead>

              <tbody>
                {currentStock.map((blood) => {
                  const originalIndex = bloodStock.findIndex(
                    (item) => item.bloodGroup === blood.bloodGroup
                  );

                  return (
                    <tr key={blood.bloodGroup}>
                      <td className="px-4">
                        <span className="badge text-bg-danger fs-6">
                          {blood.bloodGroup}
                        </span>
                      </td>

                      <td>
                        <input
                          type="number"
                          min="0"
                          className="form-control"
                          style={{ maxWidth: "120px" }}
                          value={blood.units}
                          onChange={(event) =>
                            handleUnitsChange(
                              originalIndex,
                              event.target.value
                            )
                          }
                        />
                      </td>

                      <td>
                        <span
                          className={`badge ${getStatusClass(blood.status)}`}
                        >
                          {blood.status}
                        </span>
                      </td>

                      <td>{blood.lastUpdated}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 p-3 border-top">
            <p className="text-muted small mb-0">
              Showing {startIndex + 1} to{" "}
              {Math.min(startIndex + itemsPerPage, bloodStock.length)} of{" "}
              {bloodStock.length} blood groups
            </p>

            <nav aria-label="Blood stock pagination">
              <ul className="pagination pagination-sm mb-0">
                <li
                  className={`page-item ${
                    currentPage === 1 ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </li>

                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <li
                    className={`page-item ${
                      currentPage === page ? "active" : ""
                    }`}
                    key={page}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  </li>
                ))}

                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BloodStock;

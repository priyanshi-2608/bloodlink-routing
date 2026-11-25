import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/patient/Navbar";
import ReusableTable from "../components/ReusableTable";
import "../components/patient/patient.css";

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
    {
        id: "BL-1030",
        bloodGroup: "O+",
        hospital: "Sterling Hospital",
        date: "25 Aug 2026",
        units: "3",
        status: "Completed",
    },
    {
        id: "BL-1035",
        bloodGroup: "AB+",
        hospital: "Zydus Hospital",
        date: "27 Aug 2026",
        units: "2",
        status: "Active",
    },
    {
        id: "BL-1042",
        bloodGroup: "A-",
        hospital: "Shalby Hospital",
        date: "30 Aug 2026",
        units: "1",
        status: "Completed",
    },
];

function PatientRequestHistory() {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const filteredRequests = requests.filter((request) => {
        const matchesSearch =
            request.id.toLowerCase().includes(search.toLowerCase()) ||
            request.hospital.toLowerCase().includes(search.toLowerCase()) ||
            request.bloodGroup.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            statusFilter === "All" || request.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const columns = [
        {
            header: "Request ID",
            accessor: "id",
            className: "fw-semibold",
        },
        {
            header: "Blood Group",
            render: (request) => (
                <span className="blood-badge">{request.bloodGroup}</span>
            ),
        },
        {
            header: "Hospital",
            accessor: "hospital",
        },
        {
            header: "Date",
            accessor: "date",
        },
        {
            header: "Units",
            accessor: "units",
        },
        {
            header: "Status",
            render: (request) => (
                <span
                    className={`badge ${request.status === "Active"
                        ? "text-bg-warning"
                        : "text-bg-success"
                        }`}
                >
                    {request.status}
                </span>
            ),
        },
    ];

    return (
        <>
            <Navbar />

            <main className="container py-4">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
                    <div>
                        <p className="text-danger fw-semibold mb-2">
                            PATIENT DASHBOARD
                        </p>

                        <h2 className="fw-bold mb-1">
                            Request History
                        </h2>

                        <p className="text-muted mb-0">
                            View and track all your blood requests.
                        </p>
                    </div>

                    <Link
                        to="/patient"
                        className="btn btn-outline-danger"
                    >
                        <i className="bi bi-arrow-left me-2"></i>
                        Back to Dashboard
                    </Link>
                </div>

                <div className="card dashboard-card border-0">
                    <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
                            <div>
                                <h4 className="fw-bold mb-1">
                                    All Blood Requests
                                </h4>

                                <p className="text-muted small mb-0">
                                    Your complete request activity
                                </p>
                            </div>

                            <span className="badge text-bg-danger">
                                {filteredRequests.length} Requests
                            </span>
                        </div>

                        <div className="row g-3 mb-4">
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by request ID, hospital or blood group..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>

                            <div className="col-md-4">
                                <select
                                    className="form-select"
                                    value={statusFilter}
                                    onChange={(e) =>
                                        setStatusFilter(e.target.value)
                                    }
                                >
                                    <option value="All">All Statuses</option>
                                    <option value="Active">Active</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                        </div>

                        <ReusableTable
                            columns={columns}
                            data={filteredRequests}
                            getRowKey={(request) => request.id}
                            emptyMessage="No matching blood requests found."
                        />
                    </div>
                </div>
            </main>
        </>
    );
}

export default PatientRequestHistory;

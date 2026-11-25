import { Link } from "react-router-dom";
import ReusableTable from "../../components/ReusableTable";

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
    const columns = [
        {
            header: "Request ID",
            accessor: "id",
            className: "fw-semibold",
        },
        {
            header: "Blood Group",
            render: (request) => (
                <span className="blood-badge">
                    {request.bloodGroup}
                </span>
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
                    className={`badge ${
                        request.status === "Active"
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

                    <Link to="/patient-request-history"
                     className="btn btn-outline-danger btn-sm">
                        View All
                    </Link>
                </div>

                <ReusableTable
                    columns={columns}
                    data={requests}
                    getRowKey={(request) => request.id}
                />
            </div>
        </div>
    );
}

export default RecentRequests;

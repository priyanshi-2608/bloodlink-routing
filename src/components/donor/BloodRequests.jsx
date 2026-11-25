import { useState, useEffect } from "react";
import ReusableTable from "../../components/ReusableTable";

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
                        <span
                            className="placeholder col-12"
                            style={{ width: "75px" }}
                        ></span>
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
            header: "Location",
            accessor: "location",
        },
        {
            header: "Units",
            accessor: "units",
        },
        {
            header: "Urgency",
            render: (request) => (
                <span
                    className={`badge ${
                        request.urgency === "Urgent"
                            ? "text-bg-danger"
                            : "text-bg-warning"
                    }`}
                >
                    {request.urgency}
                </span>
            ),
        },
        {
            header: "Action",
            render: () => (
                <button className="btn btn-sm btn-danger">
                    Respond
                </button>
            ),
        },
    ];

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

                <ReusableTable
                    columns={columns}
                    data={requests}
                    getRowKey={(request) => request.id}
                />
            </div>
        </div>
    );
}

export default BloodRequests;

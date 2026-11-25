import ReusableTable from "../../components/ReusableTable";

const donationHistory = [
    {
        date: "12 Aug 2026",
        bloodGroup: "O+",
        hospital: "City Care Hospital",
        units: 1,
        status: "Completed",
    },
    {
        date: "18 May 2026",
        bloodGroup: "O+",
        hospital: "Civil Hospital",
        units: 1,
        status: "Completed",
    },
    {
        date: "20 Feb 2026",
        bloodGroup: "O+",
        hospital: "Apollo Hospital",
        units: 1,
        status: "Completed",
    },
];

function DonationHistory() {
    const columns = [
        {
            header: "Date",
            accessor: "date",
        },
        {
            header: "Blood Group",
            render: (donation) => (
                <span className="blood-badge">
                    {donation.bloodGroup}
                </span>
            ),
        },
        {
            header: "Hospital",
            accessor: "hospital",
        },
        {
            header: "Units",
            accessor: "units",
        },
        {
            header: "Status",
            render: (donation) => (
                <span className="badge text-bg-success">
                    {donation.status}
                </span>
            ),
        },
    ];

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

                <ReusableTable
                    columns={columns}
                    data={donationHistory}
                    getRowKey={(donation) => donation.date}
                />
            </div>
        </div>
    );
}

export default DonationHistory;

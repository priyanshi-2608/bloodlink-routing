
import { useState, useRef } from "react";
import BloodGroupDropdown from "../components/BloodGroupDropdown";
import BloodBankMap from "../components/BloodBankMap";

const donorData = [
    {
        id: 1,
        name: "Rahul Sharma",
        bloodGroup: "O+",
        city: "Ahmedabad",
        availability: "Available",
        contact: "9876543210",
    },
    {
        id: 2,
        name: "Priya Patel",
        bloodGroup: "A+",
        city: "Ahmedabad",
        availability: "Available",
        contact: "9876543211",
    },
    {
        id: 3,
        name: "Amit Shah",
        bloodGroup: "B+",
        city: "Surat",
        availability: "Unavailable",
        contact: "9876543212",
    },
    {
        id: 4,
        name: "Neha Desai",
        bloodGroup: "O-",
        city: "Vadodara",
        availability: "Available",
        contact: "9876543213",
    },
    {
        id: 5,
        name: "Karan Mehta",
        bloodGroup: "AB+",
        city: "Ahmedabad",
        availability: "Available",
        contact: "9876543214",
    },
];

function BloodAvailabilitySearch() {
    const [search, setSearch] = useState({
        bloodGroup: "",
        city: "",
        availability: "All",
    });

    const [results, setResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    const resultsRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setSearch((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSearch = (e) => {
        e.preventDefault();

        const filteredDonors = donorData.filter((donor) => {
            const matchesBloodGroup =
                !search.bloodGroup ||
                donor.bloodGroup === search.bloodGroup;

            const matchesCity =
                !search.city ||
                donor.city.toLowerCase().includes(search.city.toLowerCase());

            const matchesAvailability =
                search.availability === "All" ||
                donor.availability === search.availability;

            return (
                matchesBloodGroup &&
                matchesCity &&
                matchesAvailability
            );
        });

        setResults(filteredDonors);
        setHasSearched(true);

        // Automatically scroll to search results
        setTimeout(() => {
            resultsRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 100);
    };

    return (
        <div className="container py-5">

            {/* Page Heading */}
            <div className="text-center mb-4">
                <i className="bi bi-search text-danger fs-1"></i>

                <h2 className="fw-bold mt-2">
                    Blood Availability Search
                </h2>

                <p className="text-muted">
                    Find available blood donors in your city
                </p>
            </div>

            {/* Search Form */}
            <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                    <form onSubmit={handleSearch}>
                        <div className="row align-items-end">

                            <div className="col-md-4 mb-3">
                                <BloodGroupDropdown
                                    value={search.bloodGroup}
                                    onChange={handleChange}
                                    className="form-select"
                                />
                            </div>

                            <div className="col-md-4 mb-3">
                                <label className="form-label fw-semibold">
                                    City
                                </label>

                                <input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    placeholder="Enter city"
                                    value={search.city}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-4 mb-3">
                                <label className="form-label fw-semibold">
                                    Availability
                                </label>

                                <select
                                    name="availability"
                                    className="form-select"
                                    value={search.availability}
                                    onChange={handleChange}
                                >
                                    <option value="All">All</option>
                                    <option value="Available">Available</option>
                                    <option value="Unavailable">Unavailable</option>
                                </select>
                            </div>

                        </div>

                        <div className="d-grid d-md-flex justify-content-md-end">
                            <button
                                type="submit"
                                className="btn btn-danger px-4"
                            >
                                <i className="bi bi-search me-2"></i>
                                Search Blood
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Blood Bank Location Map */}
            <BloodBankMap />

            {/* Search Results */}
            {hasSearched && (
                <div
                    ref={resultsRef}
                    style={{ scrollMarginTop: "30px" }}
                >
                    {results.length > 0 ? (
                        <div className="card border-0 shadow-sm mt-4">
                            <div className="card-body p-4">

                                <h4 className="fw-bold mb-3">
                                    Available Donors ({results.length})
                                </h4>

                                <div className="table-responsive">
                                    <table className="table table-hover align-middle">

                                        <thead className="table-light">
                                            <tr>
                                                <th>Donor Name</th>
                                                <th>Blood Group</th>
                                                <th>City</th>
                                                <th>Availability</th>
                                                <th>Contact</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {results.map((donor) => (
                                                <tr key={donor.id}>

                                                    <td className="fw-semibold">
                                                        {donor.name}
                                                    </td>

                                                    <td>
                                                        <span className="badge bg-danger">
                                                            {donor.bloodGroup}
                                                        </span>
                                                    </td>

                                                    <td>{donor.city}</td>

                                                    <td>
                                                        <span
                                                            className={`badge ${
                                                                donor.availability === "Available"
                                                                    ? "bg-success"
                                                                    : "bg-secondary"
                                                            }`}
                                                        >
                                                            {donor.availability}
                                                        </span>
                                                    </td>

                                                    <td>{donor.contact}</td>

                                                </tr>
                                            ))}
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center mt-4">
                            <p className="text-muted">
                                No matching donors found. Try different search criteria.
                            </p>
                        </div>
                    )}
                </div>
            )}

        </div>
    );
}

export default BloodAvailabilitySearch;

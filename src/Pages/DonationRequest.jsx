import { useState } from "react";

function DonationRequest() {
  const [request, setRequest] = useState({
    patientName: "",
    bloodGroup: "",
    unitsRequired: "",
    hospital: "",
    city: "",
    requiredDate: "",
    contactNumber: "",
    reason: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setRequest({
      ...request,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Donation Request:", request);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <div className="text-center mb-4">
                <div
                  className="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    fontSize: "28px",
                  }}
                >
                  <i className="bi bi-droplet-fill"></i>
                </div>

                <h2 className="fw-bold mb-2">Donation Request</h2>

                <p className="text-muted mb-0">
                  Submit a request for blood donation
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Patient Name
                    </label>

                    <input
                      type="text"
                      name="patientName"
                      className="form-control"
                      value={request.patientName}
                      onChange={handleChange}
                      placeholder="Enter patient name"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Blood Group
                    </label>

                    <select
                      name="bloodGroup"
                      className="form-select"
                      value={request.bloodGroup}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select blood group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Units Required
                    </label>

                    <input
                      type="number"
                      name="unitsRequired"
                      className="form-control"
                      min="1"
                      value={request.unitsRequired}
                      onChange={handleChange}
                      placeholder="Enter required units"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Required Date
                    </label>

                    <input
                      type="date"
                      name="requiredDate"
                      className="form-control"
                      value={request.requiredDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Hospital / Medical Center
                  </label>

                  <input
                    type="text"
                    name="hospital"
                    className="form-control"
                    value={request.hospital}
                    onChange={handleChange}
                    placeholder="Enter hospital name"
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      value={request.city}
                      onChange={handleChange}
                      placeholder="Enter city"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Contact Number
                    </label>

                    <input
                      type="tel"
                      name="contactNumber"
                      className="form-control"
                      value={request.contactNumber}
                      onChange={handleChange}
                      placeholder="Enter contact number"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Reason / Additional Information
                  </label>

                  <textarea
                    name="reason"
                    className="form-control"
                    rows="4"
                    value={request.reason}
                    onChange={handleChange}
                    placeholder="Enter reason or additional information"
                    required
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-danger">
                    <i className="bi bi-send-fill me-2"></i>
                    Submit Donation Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationRequest;
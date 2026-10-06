import { useState } from "react";
import { showSuccess, showError } from "../components/Notification";

function PatientBloodRequest() {
  const [request, setRequest] = useState({
    patientName: "",
    bloodGroup: "",
    unitsRequired: "",
    requiredDate: "",
    hospital: "",
    city: "",
    contactNumber: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRequest({
      ...request,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !request.patientName ||
    !request.bloodGroup ||
    !request.unitsRequired ||
    !request.requiredDate ||
    !request.hospital ||
    !request.city ||
    !request.contactNumber
  ) {
    showError("Please fill in all required fields.");
    return;
  }

  console.log("Blood Request:", request);

  showSuccess("Blood request submitted successfully!");
};

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">
              
              {/* Header */}
              <div className="text-center mb-4">
                <i className="bi bi-droplet-half text-danger fs-1"></i>

                <h2 className="fw-bold mt-2">
                  Patient Blood Request
                </h2>

                <p className="text-muted mb-0">
                  Submit a request for the blood you need
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                
                {/* Patient Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Patient Name
                  </label>

                  <input
                    type="text"
                    name="patientName"
                    value={request.patientName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter patient name"
                    required
                  />
                </div>

                <div className="row">
                  
                  {/* Blood Group */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Blood Group
                    </label>

                    <select
                      name="bloodGroup"
                      value={request.bloodGroup}
                      onChange={handleChange}
                      className="form-select"
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

                  {/* Units Required */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Units Required
                    </label>

                    <input
                      type="number"
                      name="unitsRequired"
                      value={request.unitsRequired}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter required units"
                      min="1"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  
                  {/* Required Date */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Required Date
                    </label>

                    <input
                      type="date"
                      name="requiredDate"
                      value={request.requiredDate}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  {/* Contact Number */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Contact Number
                    </label>

                    <input
                      type="tel"
                      name="contactNumber"
                      value={request.contactNumber}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter contact number"
                      required
                    />
                  </div>
                </div>

                {/* Hospital */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Hospital / Medical Center
                  </label>

                  <input
                    type="text"
                    name="hospital"
                    value={request.hospital}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter hospital name"
                    required
                  />
                </div>

                {/* City */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={request.city}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter city"
                    required
                  />
                </div>

                {/* Reason */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Reason / Additional Information
                  </label>

                  <textarea
                    name="reason"
                    value={request.reason}
                    onChange={handleChange}
                    className="form-control"
                    rows="4"
                    placeholder="Enter reason or additional information"
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-danger btn-lg"
                  >
                    <i className="bi bi-send me-2"></i>
                    Submit Blood Request
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

export default PatientBloodRequest;
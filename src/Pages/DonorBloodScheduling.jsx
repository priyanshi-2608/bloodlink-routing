import { useState } from "react";
import { showSuccess, showError } from "../components/Notification";

function DonorBloodScheduling() {
  const [schedule, setSchedule] = useState({
    donorName: "",
    bloodGroup: "",
    donationDate: "",
    donationTime: "",
    donationCenter: "",
    city: "",
    contactNumber: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSchedule({
      ...schedule,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !schedule.donorName ||
    !schedule.bloodGroup ||
    !schedule.donationDate ||
    !schedule.donationTime ||
    !schedule.donationCenter ||
    !schedule.city ||
    !schedule.contactNumber
  ) {
    showError("Please fill in all required fields.");
    return;
  }

  console.log("Donation Schedule:", schedule);

  showSuccess("Blood donation scheduled successfully!");
};

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">

              {/* Header */}
              <div className="text-center mb-4">
                <i className="bi bi-calendar2-heart text-danger fs-1"></i>

                <h2 className="fw-bold mt-2">
                  Donor Blood Scheduling
                </h2>

                <p className="text-muted mb-0">
                  Schedule your blood donation appointment
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate>

                {/* Donor Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Donor Name
                  </label>

                  <input
                    type="text"
                    name="donorName"
                    value={schedule.donorName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter donor name"
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
                      value={schedule.bloodGroup}
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

                  {/* Contact Number */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Contact Number
                    </label>

                    <input
                      type="tel"
                      name="contactNumber"
                      value={schedule.contactNumber}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter contact number"
                      required
                    />
                  </div>
                </div>

                <div className="row">

                  {/* Donation Date */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Donation Date
                    </label>

                    <input
                      type="date"
                      name="donationDate"
                      value={schedule.donationDate}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  {/* Donation Time */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Donation Time
                    </label>

                    <input
                      type="time"
                      name="donationTime"
                      value={schedule.donationTime}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                {/* Donation Center */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Donation Center
                  </label>

                  <input
                    type="text"
                    name="donationCenter"
                    value={schedule.donationCenter}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter donation center"
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
                    value={schedule.city}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter city"
                    required
                  />
                </div>

                {/* Notes */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Notes / Additional Information
                  </label>

                  <textarea
                    name="notes"
                    value={schedule.notes}
                    onChange={handleChange}
                    className="form-control"
                    rows="4"
                    placeholder="Enter any additional information"
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-danger btn-lg"
                  >
                    <i className="bi bi-calendar-check me-2"></i>
                    Schedule Donation
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

export default DonorBloodScheduling;
import { useState } from "react";
import { showSuccess, showError } from "../components/Notification";
import FormInput from "../components/FormInput";
import BloodGroupDropdown from "../components/BloodGroupDropdown";

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
                <FormInput
                  label="Donor Name"
                  name="donorName"
                  value={schedule.donorName}
                  onChange={handleChange}
                  placeholder="Enter donor name"
                  required
                />

                <div className="row">

                  {/* Blood Group */}
                  <BloodGroupDropdown
                    value={schedule.bloodGroup}
                    onChange={handleChange}
                    required
                  />

                  {/* Contact Number */}
                  <div className="col-md-6">
                    <FormInput
                      label="Contact Number"
                      name="contactNumber"
                      type="tel"
                      value={schedule.contactNumber}
                      onChange={handleChange}
                      placeholder="Enter contact number"
                      required
                    />
                  </div>
                </div>

                <div className="row">

                  {/* Donation Date */}
                  <div className="col-md-6">
                    <FormInput
                      label="Donation Date"
                      name="donationDate"
                      type="date"
                      value={schedule.donationDate}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Donation Time */}
                  <div className="col-md-6">
                    <FormInput
                      label="Donation Time"
                      name="donationTime"
                      type="time"
                      value={schedule.donationTime}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Donation Center */}
                <FormInput
                  label="Donation Center"
                  name="donationCenter"
                  value={schedule.donationCenter}
                  onChange={handleChange}
                  placeholder="Enter donation center"
                  required
                />

                {/* City */}
                <FormInput
                  label="City"
                  name="city"
                  value={schedule.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  required
                />

                {/* Notes */}
                <div className="mb-4">
                  <label
                    htmlFor="notes"
                    className="form-label fw-semibold"
                  >
                    Notes / Additional Information
                  </label>

                  <textarea
                    id="notes"
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
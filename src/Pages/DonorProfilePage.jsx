import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "../components/FormInput";
import BloodGroupDropdown from "../components/BloodGroupDropdown";
import { showSuccess, showError } from "../components/Notification";

function DonorProfile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    fullName: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "9876543210",
    bloodGroup: "O+",
    city: "Ahmedabad",
    availability: "Available",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !profile.fullName ||
      !profile.email ||
      !profile.phone ||
      !profile.bloodGroup ||
      !profile.city ||
      !profile.availability
    ) {
      showError("Please fill in all fields.");
      return;
    }

    if (!/^[0-9]{10}$/.test(profile.phone)) {
      showError("Please enter a valid 10-digit phone number.");
      return;
    }

    showSuccess("Donor profile updated successfully!");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-9">
          <div className="card border-0 shadow-sm p-4">
            <div className="text-center mb-4">
              <i className="bi bi-person-heart text-danger fs-1"></i>
              <h2 className="fw-bold mt-2">Edit Donor Profile</h2>
              <p className="text-muted">
                Update your personal and donation availability details
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <FormInput
                label="Full Name"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />

              <FormInput
                label="Email Address"
                name="email"
                type="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />

              <FormInput
                label="Phone Number"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                placeholder="Enter 10-digit phone number"
              />

              <div className="mb-3">
                <BloodGroupDropdown
                  value={profile.bloodGroup}
                  onChange={handleChange}
                  required
                  className="form-select"
                />
              </div>

              <FormInput
                label="City"
                name="city"
                value={profile.city}
                onChange={handleChange}
                placeholder="Enter your city"
              />

              <div className="mb-4">
                <label className="form-label fw-semibold">
                  Donation Availability
                </label>
                <select
                  className="form-select"
                  name="availability"
                  value={profile.availability}
                  onChange={handleChange}
                  required
                >
                  <option value="Available">Available</option>
                  <option value="Unavailable">Unavailable</option>
                </select>
              </div>

              <div className="d-flex gap-2">
                <button
                  type="submit"
                  className="btn btn-danger flex-grow-1"
                >
                  <i className="bi bi-save-fill me-2"></i>
                  Save Changes
                </button>

                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => navigate("/donor")}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonorProfile;

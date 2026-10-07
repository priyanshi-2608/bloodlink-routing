import { useState } from "react";
import FormInput from "../components/FormInput";
import { showSuccess, showError } from "../components/Notification";
import BloodGroupDropdown from "../components/BloodGroupDropdown";

function Profile() {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
    bloodGroup: "",
    city: "",
    role: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check required fields
    if (
      !profile.fullName ||
      !profile.email ||
      !profile.phone ||
      !profile.bloodGroup ||
      !profile.city ||
      !profile.role
    ) {
      showError("Please fill in all required fields.");
      return;
    }

    // Check phone number
    if (!/^[0-9]{10}$/.test(profile.phone)) {
      showError("Please enter a valid 10-digit phone number.");
      return;
    }

    console.log("Profile:", profile);

    showSuccess("Profile created successfully!");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">

              {/* Header */}
              <div className="text-center mb-4">
                <div
                  className="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    fontSize: "32px",
                  }}
                >
                  <i className="bi bi-person-fill"></i>
                </div>

                <h2 className="fw-bold mb-1">Create Profile</h2>

                <p className="text-muted mb-0">
                  Enter your profile information
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate>

                {/* Full Name */}
                <FormInput
                  label="Full Name"
                  name="fullName"
                  type="text"
                  value={profile.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />

                {/* Email */}
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  value={profile.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />

                {/* Phone */}
                <FormInput
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={profile.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  autoComplete="tel"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  required
                />

                <div className="row">

                  {/* Blood Group */}
                  {/* Keep normal select until Task 3 */}
                  <BloodGroupDropdown
                    value={profile.bloodGroup}
                    onChange={handleChange}
                    required
                  />

                  {/* City */}
                  <div className="col-md-6">
                    <FormInput
                      label="City"
                      name="city"
                      type="text"
                      value={profile.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      autoComplete="address-level2"
                      required
                    />
                  </div>

                </div>

                {/* Role */}
                <div className="mb-4">
                  <label
                    htmlFor="role"
                    className="form-label fw-semibold"
                  >
                    Role
                  </label>

                  <select
                    id="role"
                    name="role"
                    className="form-select"
                    value={profile.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select role</option>
                    <option value="Donor">Donor</option>
                    <option value="Patient">Patient</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>

                {/* Submit */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-danger"
                  >
                    <i className="bi bi-person-check-fill me-2"></i>
                    Create Profile
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

export default Profile;
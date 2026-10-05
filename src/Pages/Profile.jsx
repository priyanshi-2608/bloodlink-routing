import { useState } from "react";

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

    console.log("Profile:", profile);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
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

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    value={profile.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={profile.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    value={profile.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      Blood Group
                    </label>

                    <select
                      name="bloodGroup"
                      className="form-select"
                      value={profile.bloodGroup}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
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

                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      value={profile.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Role
                  </label>

                  <select
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

                <div className="d-grid">
                  <button type="submit" className="btn btn-danger">
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
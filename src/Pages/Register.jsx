import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "../components/FormInput";
import { showSuccess, showError } from "../components/Notification";
import BloodGroupDropdown from "../components/BloodGroupDropdown";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    bloodGroup: "",
    city: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [status, setStatus] = useState({});

  // Password show/hide
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      fullName,
      email,
      phone,
      bloodGroup,
      city,
      password,
      confirmPassword,
      terms,
    } = formData;

    const newStatus = {};
    let isValid = true;

    // Full Name
    if (fullName.trim().length < 2) {
      newStatus.fullName = "is-invalid";
      isValid = false;
    } else {
      newStatus.fullName = "is-valid";
    }

    // Email
    if (!isValidEmail(email.trim())) {
      newStatus.email = "is-invalid";
      isValid = false;
    } else {
      newStatus.email = "is-valid";
    }

    // Phone
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone.trim())) {
      newStatus.phone = "is-invalid";
      isValid = false;
    } else {
      newStatus.phone = "is-valid";
    }

    // Blood Group
    if (bloodGroup === "") {
      newStatus.bloodGroup = "is-invalid";
      isValid = false;
    } else {
      newStatus.bloodGroup = "is-valid";
    }

    // City
    if (city.trim().length < 2) {
      newStatus.city = "is-invalid";
      isValid = false;
    } else {
      newStatus.city = "is-valid";
    }

    // Password
    if (password.length < 6) {
      newStatus.password = "is-invalid";
      isValid = false;
    } else {
      newStatus.password = "is-valid";
    }

    // Confirm Password
    if (
      confirmPassword === "" ||
      confirmPassword !== password
    ) {
      newStatus.confirmPassword = "is-invalid";
      isValid = false;
    } else {
      newStatus.confirmPassword = "is-valid";
    }

    // Terms
    if (!terms) {
      newStatus.terms = "is-invalid";
      isValid = false;
    } else {
      newStatus.terms = "is-valid";
    }

    setStatus(newStatus);

    // Show error notification
    if (!isValid) {
      showError("Please check the highlighted fields.");
      return;
    }

    // Show success notification
    showSuccess("Registration details are valid!");
  };

  return (
    <main className="login-page register-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-11 col-md-9 col-lg-7">
            <div className="card login-card shadow-sm">
              <div className="card-body">

                {/* BloodLink Branding */}
                <div className="text-center brand-section">
                  <div className="blood-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641-1.717-2.753-2.093-3.13" />
                    </svg>
                  </div>

                  <h1 className="brand-name">BloodLink</h1>

                  <p className="tagline">
                    Share Life, Give Blood
                  </p>
                </div>

                {/* Register Heading */}
                <div className="login-heading text-center">
                  <h2>Create Your Account</h2>
                  <p>Join BloodLink and help save lives</p>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} noValidate>

                  <div className="row">

                    {/* Full Name */}
                    <div className="col-md-6">
                      <FormInput
                        label="Full Name"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        autoComplete="name"
                        className={status.fullName || ""}
                        minLength="2"
                        required
                      />

                      {status.fullName === "is-invalid" && (
                        <div className="invalid-feedback d-block">
                          Please enter your full name.
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <FormInput
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        autoComplete="email"
                        className={status.email || ""}
                        required
                      />

                      {status.email === "is-invalid" && (
                        <div className="invalid-feedback d-block">
                          Please enter a valid email address.
                        </div>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                      <FormInput
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        autoComplete="tel"
                        className={status.phone || ""}
                        pattern="[0-9]{10}"
                        maxLength="10"
                        required
                      />

                      {status.phone === "is-invalid" && (
                        <div className="invalid-feedback d-block">
                          Please enter a valid 10-digit phone number.
                        </div>
                      )}
                    </div>

                    {/* Blood Group */}
                    <div className="col-md-6">
                      <BloodGroupDropdown
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        required
                        className={status.bloodGroup || ""}
                      />


                      {status.bloodGroup === "is-invalid" && (
                        <div className="invalid-feedback d-block">
                          Please select your blood group.
                        </div>
                      )}
                    </div>

                    {/* City */}
                    <div className="col-md-6">
                      <FormInput
                        label="City"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter your city"
                        autoComplete="address-level2"
                        className={status.city || ""}
                        minLength="2"
                        required
                      />

                      {status.city === "is-invalid" && (
                        <div className="invalid-feedback d-block">
                          Please enter your city.
                        </div>
                      )}
                    </div>

                    {/* Password */}
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="registerPassword"
                        className="form-label"
                      >
                        Password
                      </label>

                      <div className="input-group">
                        <input
                          type={
                            showPassword
                              ? "text"
                              : "password"
                          }
                          className={`form-control ${status.password || ""
                            }`}
                          id="registerPassword"
                          name="password"
                          placeholder="Create a password"
                          autoComplete="new-password"
                          value={formData.password}
                          onChange={handleChange}
                        />

                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={() =>
                            setShowPassword(!showPassword)
                          }
                          aria-label={
                            showPassword
                              ? "Hide password"
                              : "Show password"
                          }
                        >
                          <i
                            className={`bi ${showPassword
                              ? "bi-eye-slash"
                              : "bi-eye"
                              }`}
                          ></i>
                        </button>
                      </div>

                      {status.password === "is-invalid" && (
                        <div className="invalid-feedback d-block">
                          Password must be at least 6 characters.
                        </div>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="confirmPassword"
                        className="form-label"
                      >
                        Confirm Password
                      </label>

                      <div className="input-group">
                        <input
                          type={
                            showConfirmPassword
                              ? "text"
                              : "password"
                          }
                          className={`form-control ${status.confirmPassword || ""
                            }`}
                          id="confirmPassword"
                          name="confirmPassword"
                          placeholder="Confirm your password"
                          autoComplete="new-password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />

                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={() =>
                            setShowConfirmPassword(
                              !showConfirmPassword
                            )
                          }
                          aria-label={
                            showConfirmPassword
                              ? "Hide confirm password"
                              : "Show confirm password"
                          }
                        >
                          <i
                            className={`bi ${showConfirmPassword
                              ? "bi-eye-slash"
                              : "bi-eye"
                              }`}
                          ></i>
                        </button>
                      </div>

                      {status.confirmPassword === "is-invalid" && (
                        <div className="invalid-feedback d-block">
                          Passwords do not match.
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Terms */}
                  <div className="form-check terms-check mb-4">
                    <input
                      className={`form-check-input ${status.terms || ""
                        }`}
                      type="checkbox"
                      id="terms"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                    />

                    <label
                      className="form-check-label"
                      htmlFor="terms"
                    >
                      I agree to the{" "}
                      <a
                        href="#terms"
                        className="auth-link"
                      >
                        Terms & Conditions
                      </a>
                    </label>

                    {status.terms === "is-invalid" && (
                      <div className="invalid-feedback d-block">
                        You must agree to the Terms & Conditions.
                      </div>
                    )}
                  </div>

                  {/* Create Account */}
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-danger login-btn"
                    >
                      Create Account
                    </button>
                  </div>

                </form>

                {/* Login Link */}
                <div className="register-section text-center">
                  <span>Already have an account? </span>

                  <button
                    type="button"
                    className="auth-link register-link-button"
                    onClick={() => navigate("/login")}
                  >
                    Login here
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
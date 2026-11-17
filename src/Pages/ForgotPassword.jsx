
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "../components/FormInput";
import { showSuccess, showError } from "../components/Notification";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState("");

  const isValidEmail = (emailValue) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(emailValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailValue = email.trim();

    if (!isValidEmail(emailValue)) {
      setEmailStatus("is-invalid");
      showError("Please enter a valid email address.");
      return;
    }

    setEmailStatus("is-valid");
    showSuccess("Password reset link request submitted!");
  };

  return (
    <main className="login-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-7 col-lg-5">
            <div className="card login-card shadow-sm">
              <div className="card-body">

                <div className="text-center brand-section">
                  <div className="blood-icon">
                    <i className="bi bi-droplet-fill"></i>
                  </div>

                  <h1 className="brand-name">BloodLink</h1>

                  <p className="tagline">
                    Share Life, Give Blood
                  </p>
                </div>

                <div className="login-heading text-center">
                  <h2>Forgot Password?</h2>
                  <p>
                    Enter your registered email address to reset your password.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setEmailStatus("");
                    }}
                    placeholder="Enter your registered email"
                    autoComplete="email"
                    className={emailStatus}
                    required
                  />

                  {emailStatus === "is-invalid" && (
                    <div className="invalid-feedback d-block">
                      Please enter a valid email address.
                    </div>
                  )}

                  <div className="d-grid mt-4">
                    <button
                      type="submit"
                      className="btn btn-danger login-btn"
                    >
                      Send Reset Link
                    </button>
                  </div>
                </form>

                <div className="register-section text-center">
                  <button
                    type="button"
                    className="auth-link register-link-button"
                    onClick={() => navigate("/login")}
                  >
                    <i className="bi bi-arrow-left me-1"></i>
                    Back to Login
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

export default ForgotPassword;

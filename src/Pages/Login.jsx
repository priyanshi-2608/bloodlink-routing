import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailStatus, setEmailStatus] = useState("");
  const [passwordStatus, setPasswordStatus] = useState("");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const isValidEmail = (emailValue) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(emailValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailValue = email.trim();
    const passwordValue = password.trim();

    setEmailStatus("");
    setPasswordStatus("");
    setMessage("");
    setMessageType("");

    let isValid = true;

    // Email validation
    if (emailValue === "" || !isValidEmail(emailValue)) {
      setEmailStatus("is-invalid");
      isValid = false;
    } else {
      setEmailStatus("is-valid");
    }

    // Password validation
    if (passwordValue === "" || passwordValue.length < 6) {
      setPasswordStatus("is-invalid");
      isValid = false;
    } else {
      setPasswordStatus("is-valid");
    }

    // Show validation result
    if (!isValid) {
      setMessage("Please check your email and password.");
      setMessageType("error-message");
      return;
    }

    setMessage("Login details are valid!");
    setMessageType("success-message");
  };

  return (
    <main className="login-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-7 col-lg-5">
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
                      <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13" />
                    </svg>
                  </div>

                  <h1 className="brand-name">BloodLink</h1>
                  <p className="tagline">Share Life, Give Blood</p>
                </div>

                {/* Login Heading */}
                <div className="login-heading text-center">
                  <h2>Welcome Back</h2>
                  <p>Login to your BloodLink account</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} noValidate>

                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className={`form-control ${emailStatus}`}
                      id="email"
                      placeholder="Enter your email"
                      autoComplete="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />

                    <div className="invalid-feedback">
                      Please enter a valid email address.
                    </div>
                  </div>

                  {/* Password */}
                  <div className="mb-2">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>

                    <input
                      type="password"
                      className={`form-control ${passwordStatus}`}
                      id="password"
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />

                    <div className="invalid-feedback">
                      Password must be at least 6 characters.
                    </div>
                  </div>

                  {/* Forgot Password */}
                  <div className="d-flex justify-content-end mb-4">
                    <a href="#forgot-password" className="auth-link">
                      Forgot Password?
                    </a>
                  </div>

                  {/* Login Button */}
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-danger login-btn"
                    >
                      Login
                    </button>
                  </div>

                  {/* Validation Message */}
                  {message && (
                    <div className={`form-message ${messageType}`}>
                      {message}
                    </div>
                  )}
                </form>

                {/* Register */}
                <div className="register-section text-center">
                  <span>Don't have an account? </span>

                  <button
                    type="button"
                    className="auth-link register-link-button"
                    onClick={() => navigate("/register")}
                  >
                    Register here
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

export default Login;
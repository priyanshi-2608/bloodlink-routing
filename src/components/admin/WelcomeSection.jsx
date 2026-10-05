function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div>
        <p className="text-danger fw-semibold mb-2">
          ADMIN DASHBOARD
        </p>

        <h1 className="fw-bold mb-2">
          Welcome back, Admin!
        </h1>

        <p className="text-muted mb-0">
          Monitor users, blood requests, and activities across BloodLink.
        </p>
      </div>

      <div className="welcome-icon">
        <i className="bi bi-speedometer2"></i>
      </div>
    </section>
  );
}

export default WelcomeSection;
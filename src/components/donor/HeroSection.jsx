function HeroSection() {
  return (
    <section className="hero-section">
      <div>
        <p className="text-danger fw-semibold mb-2">
          DONOR HOME
        </p>

        <h1 className="fw-bold mb-3">
          Welcome back, Priyanshi!
        </h1>

        <p className="text-muted mb-4">
          Your donation can save lives. Find people who need your blood
          and make a difference today.
        </p>

        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-danger px-4">
            <i className="bi bi-search me-2"></i>
            Find Blood Requests
          </button>

          <button className="btn btn-outline-danger px-4">
            <i className="bi bi-heart-pulse me-2"></i>
            View Donation History
          </button>
        </div>
      </div>

      <div className="hero-icon">
        <i className="bi bi-droplet-fill"></i>
      </div>
    </section>
  );
}

export default HeroSection;
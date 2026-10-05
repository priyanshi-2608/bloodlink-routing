function BloodRequest() {
  return (
    <div className="card dashboard-card border-0 h-100">
      <div className="card-body p-4">
        <div className="request-icon mb-3">
           <i className="bi bi-droplet-fill"></i>
        </div>

        <h4 className="fw-bold">
          Need Blood?
        </h4>

        <p className="text-muted">
          Create a new blood request and connect with
          eligible donors near you.
        </p>

        <button className="btn btn-danger px-4">
          Request Blood
        </button>
      </div>
    </div>
  );
}

export default BloodRequest;
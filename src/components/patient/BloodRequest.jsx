import { use } from "react";
import { useNavigate } from "react-router-dom";

function BloodRequest() {
  const navigate = useNavigate();

  return (
    <div className="card dashboard-card blood-request-card border-0 h-100">
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

        <button
          className="btn btn-danger px-4"
          onClick={() => navigate("/patient-blood-request")}
        >
          Request Blood
        </button>
      </div>
    </div>
  );
}

export default BloodRequest;
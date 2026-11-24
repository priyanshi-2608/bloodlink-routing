import ThemeToggle from "../ThemeToggle";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom bloodlink-navbar">
      <div className="container">
        <a className="navbar-brand fw-bold text-danger" href="#">
          <i className="bi bi-droplet-fill blood-drop"></i>
          BloodLink
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#donorNavbar"
          aria-controls="donorNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="donorNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/donor-blood-scheduling">
                Blood Scheduling
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/donation-request">
                Donation Request
              </a>
            </li>


            <li className="nav-item">
              <a className="nav-link" href="donation-history">
                Donation History
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/donor-profile">
                Profile
              </a>
            </li>

            <li className="nav-item ms-lg-2">
              <button className="btn btn-outline-danger btn-sm px-3">
                Logout
              </button>
            </li>
            <li className="nav-item theme-toggle-item">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
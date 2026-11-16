
import "./Footer.css";

function Footer() {
  return (
    <footer className="bloodlink-footer">
      <div className="container">
        <div className="row gy-4">

          <div className="col-md-4">
            <h4 className="footer-title">
              <i className="bi bi-heart-pulse-fill me-2"></i>
              BloodLink
            </h4>
            <p>
              Share Life, Give Blood. Together, we can make
              a difference by connecting blood donors with
              those who need them.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
              <li><a href="/patient">Patient</a></li>
              <li><a href="/donor">Donor</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p><i className="bi bi-envelope me-2"></i> support@bloodlink.com</p>
            <p><i className="bi bi-telephone me-2"></i> +91 98765 43210</p>
          </div>

        </div>

        <hr />

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} BloodLink.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

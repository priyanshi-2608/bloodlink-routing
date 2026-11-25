
function WelcomeSection() {
    return (
        <section className="welcome-section">
            <div>
                <p className="text-danger fw-semibold mb-2">
                    PATIENT DASHBOARD
                </p>

                <h1 className="fw-bold mb-2">
                    Welcome back, Priyanshi!
                </h1>

                <p className="text-muted mb-0">
                    Manage your blood requests and stay connected with donors.
                </p>
            </div>

            <div className="welcome-image">
                <img
                    src="/images/image2.webp"
                    alt="Doctor providing care to a patient"
                />
            </div>
        </section>
    );
}

export default WelcomeSection;

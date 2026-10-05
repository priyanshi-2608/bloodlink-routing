const benefits = [
  {
    icon: "bi-heart-pulse-fill",
    title: "Save Lives",
    description:
      "Your blood donation can help patients during emergencies and medical treatments.",
  },
  {
    icon: "bi-people-fill",
    title: "Help Your Community",
    description:
      "Support people in your community who urgently need blood.",
  },
  {
    icon: "bi-shield-check",
    title: "Make a Difference",
    description:
      "Every successful donation contributes to a stronger blood supply.",
  },
];

function WhyDonate() {
  return (
    <section className="mb-4">
      <div className="mb-4">
        <h4 className="fw-bold mb-1">
          Why Donate Blood?
        </h4>

        <p className="text-muted small mb-0">
          A small contribution can make a meaningful difference.
        </p>
      </div>

      <div className="row g-4">
        {benefits.map((benefit) => (
          <div className="col-12 col-md-4" key={benefit.title}>
            <div className="benefit-card h-100">
              <div className="benefit-icon">
                <i className={`bi ${benefit.icon}`}></i>
              </div>

              <h5 className="fw-bold">
                {benefit.title}
              </h5>

              <p className="text-muted small mb-0">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyDonate;
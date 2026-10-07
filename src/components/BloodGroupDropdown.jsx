function BloodGroupDropdown({
  label = "Blood Group",
  name = "bloodGroup",
  value,
  onChange,
  required = false,
  className = "",
}) {
  const bloodGroups = [
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
  ];

  return (
    <div className="mb-3">
      <label
        htmlFor={name}
        className="form-label fw-semibold"
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`form-select ${className}`}
        required={required}
      >
        <option value="">Select blood group</option>

        {bloodGroups.map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BloodGroupDropdown;
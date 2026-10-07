function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  min,
  max,
  step,
  accept,
  pattern,
  minLength,
  maxLength,
  disabled = false,
  readOnly = false,
  className = "",
  autoComplete,
}) {
  return (
    <div className="mb-3">
      <label
        htmlFor={name}
        className="form-label fw-semibold"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`form-control ${className}`}
        required={required}
        min={min}
        max={max}
        step={step}
        accept={accept}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabled}
        readOnly={readOnly}
        autoComplete={autoComplete}
      />
    </div>
  );
}

export default FormInput;
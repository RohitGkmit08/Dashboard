import React from "react";
import "./FormInput.css";

const FormInput = ({
  label,
  name,
  type = "text",
  value,
  placeholder,
  onChange,
  error,
}) => {
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <div className="form-input">
      <label className="form-input-label">{label}</label>

      <input
        className="form-input-control"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />

      {error ? <p className="form-input-error">{error}</p> : null}
    </div>
  );
};

export default FormInput;

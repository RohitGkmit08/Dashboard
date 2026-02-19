import type React from "react";
import "./styles.css";

interface InputProps<Name extends string = string> {
  label: string;
  name: Name;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (name: Name, value: string) => void;
  error?: string;
}

const Input = <Name extends string = string>({
  label,
  name,
  type = "text",
  value,
  placeholder,
  onChange,
  error,
}: InputProps<Name>) => {
  const isControlled = value !== undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(name, e.target.value);
  };

  return (
    <div className="form-input">
      <label className="form-input-label">{label}</label>

      {isControlled ? (
        <input
          className="form-input-control"
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      ) : (
        <input
          className="form-input-control"
          type={type}
          name={name}
          placeholder={placeholder}
        />
      )}

      {error ? <p className="form-input-error">{error}</p> : null}
    </div>
  );
};

export default Input;

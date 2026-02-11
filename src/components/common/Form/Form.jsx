import React from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import "./Form.css";

const Form = ({
  title,
  fields,
  values,
  errors = {},
  onChange,
  onSubmit,
  btnText,
  formError,
}) => {
  const isControlled = values !== undefined && typeof onChange === "function";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Controlled = parent has values in state
    if (isControlled) {
      onSubmit(e);
      return;
    }

    // Uncontrolled mode = using FormData
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    onSubmit(data);
  };

  return (
    <div className="form">
      <div className="form-card">
        <h2 className="form-title">{title}</h2>

        <form onSubmit={handleSubmit}>
          {fields.map((field) => {
            const { name, label, type, placeholder } = field;

            const inputValue = isControlled ? values[name] || "" : undefined;

            return (
              <FormInput
                key={name}
                label={label}
                name={name}
                type={type}
                placeholder={placeholder}
                error={errors[name]}
                value={inputValue}
                onChange={isControlled ? onChange : undefined}
              />
            );
          })}

          {formError && <p className="form-error">{formError}</p>}

          <Button title={btnText} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Form;

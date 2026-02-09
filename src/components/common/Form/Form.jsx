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
            let inputValue;
            if (isControlled) {
              inputValue = values[field.name] || "";
            } else {
              inputValue = undefined;
            }

            return (
              <FormInput
                key={field.name}
                label={field.label}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                error={errors[field.name]}
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

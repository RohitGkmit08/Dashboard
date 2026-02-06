import React from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import "./Form.css";

const Form = ({ title, fields, values, errors, onChange, onSubmit, btnText }) => {
  return (
    <div className="form">
      <div className="form-card">
        <h2 className="form-title">{title}</h2>

        <form onSubmit={onSubmit}>
          {fields.map((field) => (
            <FormInput
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              value={values[field.name]}
              placeholder={field.placeholder}
              onChange={onChange}
              error={errors[field.name]}
            />
          ))}

          <Button title={btnText} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Form;

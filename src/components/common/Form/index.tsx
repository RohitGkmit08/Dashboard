import type React from "react";

import FormInput from "../Input";
import Button from "../Button";
import "./styles.css";

type FormField<Name extends string = string> = {
  label: string;
  name: Name;
  type: string;
  placeholder?: string;
};

type FormErrors<Name extends string = string> = Partial<
  Record<Name | "form", string>
>;

type UncontrolledSubmitData<Name extends string = string> = Record<Name, string>;

interface FormProps<Name extends string = string> {
  title: string;

  // Accept readonly arrays (because LOGIN_FIELDS is `as const`)
  fields: readonly FormField<Name>[];

  // Controlled mode
  values?: Record<Name, string>;
  onChange?: (name: Name, value: string) => void;

  // Errors
  errors?: FormErrors<Name>;

  // Submit supports both modes
  onSubmit: (
    value: React.FormEvent<HTMLFormElement> | UncontrolledSubmitData<Name>
  ) => void;

  btnText: string;
  formError?: string;
}

const Form = <Name extends string = string>({
  title,
  fields,
  values,
  errors = {},
  onChange,
  onSubmit,
  btnText,
  formError,
}: FormProps<Name>) => {
  const isControlled = values !== undefined && typeof onChange === "function";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Controlled = parent has values in state
    if (isControlled) {
      onSubmit(e);
      return;
    }

    // Uncontrolled mode = using FormData
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<Name, string>;

    onSubmit(data);
  };

  return (
    <div className="form">
      <div className="form-card">
        <h2 className="form-title">{title}</h2>

        <form onSubmit={handleSubmit}>
          {fields.map((field) => {
            const { name, label, type, placeholder } = field;

            const inputValue = isControlled
              ? values?.[name as Name] ?? ""
              : undefined;

            return (
              <FormInput
                key={name}
                label={label}
                name={name}
                type={type}
                placeholder={placeholder}
                error={errors?.[name as Name]}
                value={inputValue}
                onChange={isControlled ? onChange : undefined}
              />
            );
          })}

          {formError ? <p className="form-error">{formError}</p> : null}

          <Button title={btnText} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Form;

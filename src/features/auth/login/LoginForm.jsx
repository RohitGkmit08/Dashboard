import React, { useState } from "react";
import Form from "../../../components/common/Form/Form";
import { ADMIN_CREDENTIALS } from "./adminCredentials";
import { LOGIN_FIELDS } from "./loginFields";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    form: "",
  });

  const handleInputChange = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
      form: "",
    }));
  };

  const validateErrors = () => {
    const newErrors = {
      email: "",
      password: "",
      form: "",
    };

    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);

    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateErrors();
    if (!isValid) return;

    const isAdmin =
      form.email === ADMIN_CREDENTIALS.email &&
      form.password === ADMIN_CREDENTIALS.password;

    if (!isAdmin) {
      setErrors((prev) => ({
        ...prev,
        form: "Invalid admin credentials",
      }));
      return;
    }

    console.log("Admin logged in successfully:", form);
  };

  return (
    <>
      <Form
        title="Admin Login"
        fields={LOGIN_FIELDS}
        values={form}
        errors={errors}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        btnText="Sign In"
      />

      {errors.form && <p className="form-error">{errors.form}</p>}
    </>
  );
};

export default LoginForm;

import React, { useState } from "react";
import Form from "../../../components/common/Form";
import { ADMIN_CREDENTIALS } from "../../../components/common/adminCredentials";

const fields = [
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter admin email",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter password",
  },
];

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const handleInputChange = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
    setLoginError("");
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.password.trim()) newErrors.password = "Password is required";

    setErrors((prev) => ({
      ...prev,
      ...newErrors,
    }));
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const isAdmin =
      form.email === ADMIN_CREDENTIALS.email &&
      form.password === ADMIN_CREDENTIALS.password;
    if (!isAdmin) {
      setLoginError("Invalid admin credentials");
      return;
    }
    console.log("Admin logged in successfully:", form);

  };

  return (
    <>
      <Form
        title="Admin Login"
        fields={fields}
        values={form}
        errors={errors}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        btnText="Sign In"
      />
      {loginError && <p className="form-error">{loginError}</p>}
    </>
  );
};

export default LoginForm;

import React, { useState } from "react";
import Form from "../../components/common/Form";

// Hardcoded admin credentials
const ADMIN_CREDENTIALS = {
  email: "admin@gmail.com",
  password: "12345",
};

// Fields
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
  // Parent stores the full form state (controlled form)
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // Parent stores errors for each field
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // login error (wrong credentials)
  const [loginError, setLoginError] = useState("");
  // Called by child inputs (FormInput) whenever user types
  const handleInputChange = (name, value) => {
    // Update the correct field using dynamic key
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Remove field error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
    // Remove login error while typing
    setLoginError("");
  };

  // Validation
  const validate = () => {
    const newErrors = {};
    // required field checks
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.password.trim()) newErrors.password = "Password is required";

    setErrors((prev) => ({
      ...prev,
      ...newErrors,
    }));
    // If no errors -> valid
    return Object.keys(newErrors).length === 0;
  };

  // Runs when user clicks Sign In
  const handleSubmit = (e) => {
    e.preventDefault();
    // Stop submit if validation fails
    const isValid = validate();
    if (!isValid) return;
    // credential check
    const isAdmin =
      form.email === ADMIN_CREDENTIALS.email &&
      form.password === ADMIN_CREDENTIALS.password;
    if (!isAdmin) {
      setLoginError("Invalid admin credentials");
      return;
    }
    // Login success (for now just console)
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

      {loginError ? ( <p> {loginError}</p>) : null}
    </>
  );
};

export default LoginForm;

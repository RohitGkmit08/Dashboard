import React, { useState } from "react";
import Form from "../../../components/common/Form/Form";
import { ADMIN_CREDENTIALS } from "./adminCredentials";
import { LOGIN_FIELDS } from "./loginFields";

const initialForm = {
  email: "",
  password: "",
};

const initialErrors = {
  email: "",
  password: "",
  form: "",
};

const LoginForm = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);

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

  // Works for controlled + uncontrolled
  const validateErrors = (data) => {
    const newErrors = { ...initialErrors };

    if (!data.email?.trim()) newErrors.email = "Email is required";
    if (!data.password?.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);

    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (submitValue) => {
// submitValue can be 2 things depending on Form mode:
// 1) Controlled mode: Form calls onSubmit(e)
//    so submitValue = the form submit event (e)

// 2) Uncontrolled mode:
//    Form collects values using FormData and calls onSubmit(data)
//    so submitValue = { email: "...", password: "..." }
    let data;
    if(submitValue.target){
      data = form
    }else{
      data = submitValue;
    }

    const isValid = validateErrors(data);
    if (!isValid) return;

    const isAdmin =
      data.email === ADMIN_CREDENTIALS.email &&
      data.password === ADMIN_CREDENTIALS.password;

    if (!isAdmin) {
      setErrors((prev) => ({
        ...prev,
        form: "Invalid admin credentials",
      }));
      return;
    }

    console.log("Admin logged in successfully:", data);
  };

  return (
    <Form
      title="Admin Login"
      fields={LOGIN_FIELDS}
      errors={errors}
      onSubmit={handleSubmit}
      btnText="Sign In"
      formError={errors.form}

      // Controlled Mode / UnControlled Mode
      values={form}
      onChange={handleInputChange}
    />
  );
};

export default LoginForm;

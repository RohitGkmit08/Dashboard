import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "../../../components/common/Form/Form";
import { ADMIN_CREDENTIALS } from "./adminCredentials";
import { LOGIN_FIELDS } from "./loginFields";

interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginFormErrors extends LoginFormValues {
  form: string;
}

const initialForm: LoginFormValues = {
  email: "",
  password: "",
};

const initialErrors: LoginFormErrors = {
  email: "",
  password: "",
  form: "",
};

type SubmitValue = LoginFormValues | React.FormEvent<HTMLFormElement>;

const LoginForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<LoginFormValues>(initialForm);
  const [errors, setErrors] = useState<LoginFormErrors>(initialErrors);

  const handleInputChange = (name: keyof LoginFormValues, value: string) => {
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

  const validateErrors = (data: LoginFormValues) => {
    const newErrors: LoginFormErrors = { ...initialErrors };

    if (!data.email?.trim()) newErrors.email = "Email is required";
    if (!data.password?.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);

    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (submitValue: SubmitValue) => {
    const data: LoginFormValues =
      "target" in submitValue ? form : submitValue;

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

    navigate("/dashboard");
  };

  return (
    <Form
      title="Admin Login"
      fields={LOGIN_FIELDS}
      errors={errors}
      onSubmit={handleSubmit}
      btnText="Sign In"
      formError={errors.form}
      values={form}
      onChange={handleInputChange}
    />
  );
};

export default LoginForm;

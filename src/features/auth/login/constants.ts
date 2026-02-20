const ADMIN_CREDENTIALS = {
  email: "admin@gmail.com",
  password: "12345",
} as const;

const LOGIN_FIELDS = [
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
] as const;

export {LOGIN_FIELDS, ADMIN_CREDENTIALS}
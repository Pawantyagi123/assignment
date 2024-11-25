import * as yup from "yup";

const signupSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phone: yup
    .string()
    .required("Phone number is required"),
  companyName: yup.string().required("Company name is required"),
  companyUrl: yup.string().url("Invalid URL").required("Company URL is required"),
  services: yup.string().required("Please select a service"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  termsAccepted: yup.boolean().oneOf([true], "You must accept the terms and conditions"),
});

export default signupSchema;

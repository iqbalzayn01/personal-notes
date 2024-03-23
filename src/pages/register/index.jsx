import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { register } from "../../utils/fetch";
import FormRegister from "./formRegister";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    setIsLoading(true);
    try {
      const res = await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      console.log("USER_REGISTER:", res.data);
      setIsLoading(false);
      navigate("/login");
    } catch (error) {
      console.error("Error register:", error);
      setIsLoading(false);
    }
  };

  return (
    <section className="container-base w-full h-screen flex flex-col place-content-center gap-5 px-10 py-10">
      <h1 className="font-bold text-4xl text-white text-center uppercase tracking-wider">
        Notes App
      </h1>
      <h3 className="text-2xl text-white text-center">Register</h3>
      {/* {alert.status && (
        <SAlert
          className="bg-red-100 text-red-600 px-5 py-2 rounded-lg"
          message={alert.message}
        />
      )} */}
      {passwordMatchError && (
        <p style={{ color: "red" }}>
          Passwords do not match. Please try again.
        </p>
      )}
      <FormRegister
        valueName={formData.name}
        valueEmail={formData.email}
        valuePassword={formData.password}
        valueConfirmPassword={formData.confirmPassword}
        handleSubmit={handleSubmit}
        onChange={handleChange}
        isLoading={isLoading}
      />
    </section>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { register } from "../../utils/fetch";
import { useTheme } from "../../components/ThemeContext";
import ThemeToggle from "../../components/ThemeToggle";
import FormRegister from "./formRegister";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { theme } = useTheme();
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
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      setIsLoading(false);
      navigate("/login");
    } catch (error) {
      console.error("REGISTER_ERROR:", error);
      setIsLoading(false);
    }
  };

  return (
    <section className={`${theme === "dark" ? "light" : "dark"}`}>
      <div className="container-base w-full h-screen flex flex-col place-content-center gap-5 px-10 py-10">
        <ThemeToggle className="fixed top-6 right-6 px-3 py-2 rounded-full bg-csecondary dark:bg-white text-white dark:text-csecondary" />
        <h1 className="font-bold text-4xl text-csecondary dark:text-white text-center uppercase tracking-wider">
          Notes App
        </h1>
        <h3 className="text-2xl text-csecondary dark:text-white text-center">
          Register
        </h3>
        {passwordMatchError && (
          <p className="text-center text-red-400">
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
      </div>
    </section>
  );
}

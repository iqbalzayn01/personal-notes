import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import { putAccessToken, getAccessToken, login } from "../../utils/fetch";
import { useTheme } from "../../components/ThemeContext";
import ThemeToggle from "../../components/ThemeToggle";
import FormLogin from "./formLogin";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const res = await login(formData);
      const accessToken = res.data.accessToken;
      putAccessToken(accessToken);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.error("Error login:", error);
      setIsLoading(false);
    }
  };

  if (getAccessToken()) return <Navigate to="/" replace={true} />;

  return (
    <section className={`${theme === "dark" ? "light" : "dark"}`}>
      <div className="container-base w-full h-screen flex flex-col place-content-center gap-5 px-10 py-10">
        <ThemeToggle className="fixed top-6 right-6 px-3 py-2 rounded-full bg-csecondary dark:bg-white text-white dark:text-csecondary" />
        <h1 className="font-bold text-4xl text-csecondary dark:text-white text-center uppercase tracking-wider">
          Notes App
        </h1>
        <h3 className="text-2xl text-center text-csecondary dark:text-white">
          Login
        </h3>
        <FormLogin
          valueEmail={formData.email}
          valuePassword={formData.password}
          handleSubmit={handleSubmit}
          onChange={handleChange}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
}

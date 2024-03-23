import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { getUserLogged } from "../../utils/fetch";

export default function Navbar() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUserLogged();
        const dataUserLogged = res.data;
        setUser(dataUserLogged);
      } catch (error) {
        console.error("GET_USER_LOGGED_ERROR:", error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <ul className="flex flex-wrap items-center gap-10">
      <li>
        <Link
          to="/"
          className="text-csecondary dark:text-white hover:underline"
        >
          Notes
        </Link>
      </li>
      <li>
        <Link
          to="/archived"
          className="text-csecondary dark:text-white hover:underline"
        >
          Archived
        </Link>
      </li>
      <li>
        <button
          onClick={handleLogout}
          className="text-csecondary dark:text-white hover:underline"
        >
          {`${user.name} Logout >`}
        </button>
      </li>
    </ul>
  );
}
